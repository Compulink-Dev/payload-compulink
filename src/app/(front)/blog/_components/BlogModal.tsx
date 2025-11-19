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
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { FileText, Image as ImageIcon } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'

export function BlogModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {/* <Button className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
          <Plus size={18} />
          Write New Post
        </Button> */}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Create New Blog Post</DialogTitle>
          <DialogDescription>
            Share your insights and knowledge with the Compulink community.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid gap-2">
            <Label htmlFor="title" className="text-sm font-medium">
              Post Title
            </Label>
            <Input
              id="title"
              placeholder="Enter a compelling title for your post"
              className="col-span-3"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="category" className="text-sm font-medium">
              Category
            </Label>
            <select
              id="category"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="">Select a category</option>
              <option value="technology">Technology</option>
              <option value="security">Security</option>
              <option value="business">Business</option>
              <option value="innovation">Innovation</option>
              <option value="events">Events</option>
            </select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="content" className="text-sm font-medium">
              Content
            </Label>
            <Textarea
              id="content"
              placeholder="Write your blog post content here..."
              className="min-h-[200px]"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="image" className="text-sm font-medium">
              Featured Image
            </Label>
            <div className="flex items-center gap-3">
              <Input id="image" type="file" accept="image/*" className="flex-1" />
              <Button variant="outline" size="sm" type="button">
                <ImageIcon size={16} className="mr-2" />
                Upload
              </Button>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="tags" className="text-sm font-medium">
              Tags
            </Label>
            <Input id="tags" placeholder="Add tags separated by commas" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" type="button">
            Save Draft
          </Button>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
            <FileText size={16} className="mr-2" />
            Publish Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
