'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { AlertCircle, CheckCircle2, Download, FileSpreadsheet, Loader2, Upload } from 'lucide-react'

interface RowResult {
  row: number
  status: 'created' | 'updated' | 'error'
  message: string
}

interface ImportSummary {
  created: number
  updated: number
  errors: number
  total: number
}

export function ImportExcelButton() {
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState(false)
  const [file, setFile] = useState<File | null>(null)
  const [importing, setImporting] = useState(false)
  const [summary, setSummary] = useState<ImportSummary | null>(null)
  const [results, setResults] = useState<RowResult[]>([])
  const [error, setError] = useState<string | null>(null)

  const reset = () => {
    setFile(null)
    setSummary(null)
    setResults([])
    setError(null)
    setImporting(false)
    if (inputRef.current) inputRef.current.value = ''
  }

  const handleOpenChange = (nextOpen: boolean) => {
    setOpen(nextOpen)
    if (!nextOpen) reset()
  }

  const handleImport = async () => {
    if (!file) return

    setImporting(true)
    setError(null)
    setSummary(null)
    setResults([])

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/products/import', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data?.error || `Import failed (${response.status})`)
      }

      setSummary(data.summary)
      setResults(data.results || [])
      router.refresh()
    } catch (err: any) {
      setError(err?.message || 'Failed to import products')
    } finally {
      setImporting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline" className="gap-2">
          <Upload className="h-4 w-4" />
          Import Excel
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <FileSpreadsheet className="h-5 w-5 text-blue-600" />
            Import Products from Excel
          </DialogTitle>
          <DialogDescription>
            Upload an .xlsx sheet with product data. Rows with a SKU that matches an existing
            product are updated; everything else is created. Invalid rows are skipped and reported
            below.
          </DialogDescription>
        </DialogHeader>

        {/* Template download */}
        <div className="bg-gray-50 border rounded-lg p-4 flex items-center justify-between gap-4">
          <div className="text-sm text-gray-600">
            Need the correct column format? Download the template, fill it in and upload it back.
          </div>
          <Button asChild variant="outline" size="sm" className="shrink-0 gap-2">
            <a href="/api/products/import" download>
              <Download className="h-4 w-4" />
              Template
            </a>
          </Button>
        </div>

        {/* File picker */}
        <div>
          <input
            ref={inputRef}
            type="file"
            accept=".xlsx,.xls"
            className="hidden"
            onChange={(e) => {
              setFile(e.target.files?.[0] ?? null)
              setError(null)
              setSummary(null)
              setResults([])
            }}
          />
          <Button variant="outline" className="w-full justify-start gap-2" onClick={() => inputRef.current?.click()}>
            <FileSpreadsheet className="h-4 w-4" />
            {file ? file.name : 'Choose an Excel file (.xlsx)...'}
          </Button>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-2 text-sm text-red-700">
            <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Results */}
        {summary && (
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-green-700">{summary.created}</div>
                <div className="text-xs text-green-700">Created</div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-blue-700">{summary.updated}</div>
                <div className="text-xs text-blue-700">Updated</div>
              </div>
              <div
                className={`rounded-lg p-3 text-center border ${
                  summary.errors > 0
                    ? 'bg-red-50 border-red-200'
                    : 'bg-gray-50 border-gray-200'
                }`}
              >
                <div
                  className={`text-2xl font-bold ${summary.errors > 0 ? 'text-red-700' : 'text-gray-600'}`}
                >
                  {summary.errors}
                </div>
                <div className={`text-xs ${summary.errors > 0 ? 'text-red-700' : 'text-gray-600'}`}>
                  Errors
                </div>
              </div>
            </div>

            {results.length > 0 && (
              <div className="border rounded-lg divide-y max-h-64 overflow-y-auto">
                {results.map((result) => (
                  <div key={result.row} className="flex items-start gap-2 px-3 py-2 text-sm">
                    {result.status === 'error' ? (
                      <AlertCircle className="h-4 w-4 text-red-500 mt-0.5 shrink-0" />
                    ) : (
                      <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    )}
                    <span className="text-gray-500 w-14 shrink-0">Row {result.row}</span>
                    <span className={result.status === 'error' ? 'text-red-600' : 'text-gray-700'}>
                      {result.message}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <DialogFooter>
          <Button variant="outline" onClick={() => handleOpenChange(false)} disabled={importing}>
            {summary ? 'Close' : 'Cancel'}
          </Button>
          {!summary && (
            <Button
              onClick={handleImport}
              disabled={!file || importing}
              className="gap-2 bg-blue-600 hover:bg-blue-700"
            >
              {importing ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Importing...
                </>
              ) : (
                <>
                  <Upload className="h-4 w-4" />
                  Import
                </>
              )}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ImportExcelButton
