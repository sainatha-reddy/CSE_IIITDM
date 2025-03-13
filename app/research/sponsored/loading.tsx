import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section Skeleton */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Skeleton className="h-12 w-3/4 bg-white/20 mb-4" />
          <Skeleton className="h-6 w-full bg-white/20 mb-2" />
          <Skeleton className="h-6 w-2/3 bg-white/20 mb-8" />
          <Skeleton className="h-10 w-48 bg-white/20 rounded-md" />
        </div>
      </div>

      {/* Stats Section Skeleton */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="flex items-start">
                  <Skeleton className="h-12 w-12 rounded-lg bg-gray-200" />
                  <div className="ml-4 w-full">
                    <Skeleton className="h-4 w-24 bg-gray-200 mb-2" />
                    <Skeleton className="h-8 w-16 bg-gray-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Filters Skeleton */}
      <div className="mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-10">
            <Skeleton className="h-10 w-72 bg-gray-200 rounded-lg" />
          </div>
        </div>
      </div>

      {/* Projects Grid Skeleton */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-64 bg-gray-200 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-3xl bg-gray-200 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
                <Skeleton className="h-2 w-full bg-gray-200" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Skeleton className="h-5 w-20 bg-gray-200 rounded-full" />
                    <Skeleton className="h-5 w-24 bg-gray-200" />
                  </div>
                  <Skeleton className="h-6 w-full bg-gray-200 mb-3" />
                  <Skeleton className="h-6 w-5/6 bg-gray-200 mb-4" />
                  <div className="space-y-2 mb-4">
                    {[...Array(3)].map((_, j) => (
                      <div key={j} className="flex items-start">
                        <Skeleton className="h-4 w-4 bg-gray-200 mt-0.5 flex-shrink-0" />
                        <Skeleton className="h-4 w-full bg-gray-200 ml-2" />
                      </div>
                    ))}
                  </div>
                  <Skeleton className="h-5 w-32 bg-gray-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

