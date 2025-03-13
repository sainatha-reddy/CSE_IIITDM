import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
        <h2 className="text-xl font-medium text-gray-700">Loading PhD Graduates...</h2>
        <p className="text-gray-500 mt-2">Please wait while we fetch the data</p>
      </div>
    </div>
  )
}

