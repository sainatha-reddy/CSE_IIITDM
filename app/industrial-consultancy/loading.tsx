import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header Skeleton */}
      <div className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Skeleton className="h-10 w-40" />
            <div className="hidden md:flex space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-8 w-20" />
              ))}
            </div>
            <Skeleton className="h-10 w-10 rounded-full" />
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
            <Skeleton className="h-6 w-full mx-auto mb-4" />
            <Skeleton className="h-6 w-5/6 mx-auto mb-8" />
            <div className="flex justify-center gap-4">
              <Skeleton className="h-12 w-40 rounded-full" />
              <Skeleton className="h-12 w-40 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Skeleton */}
      <div className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl">
                <Skeleton className="h-12 w-12 rounded-full mx-auto mb-4" />
                <Skeleton className="h-8 w-16 mx-auto mb-2" />
                <Skeleton className="h-4 w-24 mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Projects Skeleton */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Skeleton className="h-10 w-64 mx-auto mb-4" />
            <Skeleton className="h-5 w-full max-w-2xl mx-auto" />
          </div>

          <div className="max-w-5xl mx-auto">
            <Skeleton className="h-[400px] w-full rounded-2xl" />
            <div className="flex justify-center gap-2 mt-4">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-3 w-3 rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section Skeleton */}
      <div className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
              <div>
                <Skeleton className="h-10 w-64 mb-2" />
                <Skeleton className="h-5 w-full md:w-96" />
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Skeleton className="h-10 w-64 rounded-lg" />
                <Skeleton className="h-10 w-32 rounded-lg" />
              </div>
            </div>

            <div className="flex gap-2 mb-6">
              {[1, 2, 3].map((i) => (
                <Skeleton key={i} className="h-10 w-40 rounded-full" />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md">
                <Skeleton className="h-48 w-full" />
                <div className="p-6">
                  <Skeleton className="h-7 w-full mb-3" />
                  <div className="space-y-4 mb-4">
                    <div className="flex items-start gap-2">
                      <Skeleton className="h-5 w-5 rounded-full mt-1" />
                      <div className="flex-1">
                        <Skeleton className="h-4 w-32 mb-1" />
                        <Skeleton className="h-5 w-48" />
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Skeleton className="h-5 w-5 rounded-full mt-1" />
                      <div className="flex-1">
                        <Skeleton className="h-4 w-32 mb-1" />
                        <Skeleton className="h-5 w-full" />
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Skeleton className="h-5 w-5 rounded-full mt-1" />
                      <div className="flex-1">
                        <Skeleton className="h-4 w-32 mb-1" />
                        <Skeleton className="h-5 w-32" />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <Skeleton className="h-5 w-24" />
                    <Skeleton className="h-10 w-32 rounded-lg" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Skeleton */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Skeleton className="h-10 w-96 mx-auto mb-6 bg-white/20" />
            <Skeleton className="h-5 w-full mx-auto mb-8 bg-white/20" />
            <Skeleton className="h-12 w-64 mx-auto rounded-full bg-white/20" />
          </div>
        </div>
      </div>

      {/* Footer Skeleton */}
      <div className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <Skeleton className="h-6 w-32 mb-4 bg-gray-700" />
                <div className="space-y-2">
                  {[1, 2, 3, 4].map((j) => (
                    <Skeleton key={j} className="h-4 w-full bg-gray-700" />
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Skeleton className="h-px w-full my-8 bg-gray-700" />
          <Skeleton className="h-5 w-full md:w-1/2 mx-auto bg-gray-700" />
        </div>
      </div>
    </div>
  )
}

