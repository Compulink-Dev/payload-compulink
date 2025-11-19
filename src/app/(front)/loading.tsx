'use client'
import { Loader } from 'lucide-react'
import React from 'react'

function Loading() {
  return (
    <div className="flex fixed justify-center items-center bg-blue-600 h-screen w-screen z-50">
      <Loader size={34} />
    </div>
  )
}

export default Loading
