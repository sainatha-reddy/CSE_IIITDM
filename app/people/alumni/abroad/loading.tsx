import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Loader2 className="h-10 w-10 text-blue-600 animate-spin mb-4" />
      <h2 className="text-lg font-medium text-gray-700">Loading alumni data...</h2>
      <p className="text-sm text-gray-500 mt-2">Please wait while we fetch the alumni information</p>
    </div>
  )
}

