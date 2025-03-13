import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Skeleton */}
      <div className="h-20 bg-white shadow-sm">
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            <Skeleton className="h-10 w-40" />
            <div className="hidden lg:flex space-x-1">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-8 w-24" />
                ))}
            </div>
            <Skeleton className="h-10 w-10 lg:hidden" />
          </div>
        </div>
      </div>

      <main>
        {/* Hero Section Skeleton */}
        <div className="py-20 bg-gradient-to-b from-[#f0f4ff] to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Skeleton className="h-8 w-48 mx-auto mb-6" />
              <Skeleton className="h-16 w-full mx-auto mb-6" />
              <Skeleton className="h-6 w-3/4 mx-auto mb-8" />
              <div className="flex justify-center gap-4">
                <Skeleton className="h-12 w-40" />
                <Skeleton className="h-12 w-40" />
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              {Array(4)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-24 w-full" />
                ))}
            </div>
          </div>
        </div>

        {/* Research Areas Skeleton */}
        <div className="py-20 bg-gradient-to-br from-white to-[#f5f8ff]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Skeleton className="h-10 w-64 mx-auto mb-4" />
              <Skeleton className="h-6 w-3/4 mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-64 w-full" />
                ))}
            </div>
          </div>
        </div>

        {/* PhD Program Skeleton */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Skeleton className="h-10 w-48 mx-auto mb-4" />
              <Skeleton className="h-6 w-3/4 mx-auto" />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <Skeleton className="h-8 w-64 mb-6" />
                <Skeleton className="h-32 w-full" />
                <Skeleton className="h-8 w-48 mb-4" />
                <div className="space-y-3">
                  {Array(4)
                    .fill(0)
                    .map((_, i) => (
                      <Skeleton key={i} className="h-6 w-full" />
                    ))}
                </div>
                <Skeleton className="h-10 w-48 mt-4" />
              </div>
              <Skeleton className="h-96 w-full" />
            </div>
          </div>
        </div>

        {/* More sections skeletons... */}
      </main>
    </div>
  )
}

