import { Skeleton } from "@/components/ui/skeleton"

export default function StaffLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-24">
      {/* Hero Section Skeleton */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-r from-[#003366] to-[#0066cc]">
        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Skeleton className="h-12 w-3/4 mx-auto mb-4 bg-white/20" />
            <Skeleton className="h-4 w-2/3 mx-auto mb-2 bg-white/20" />
            <Skeleton className="h-4 w-1/2 mx-auto mb-8 bg-white/20" />
            <div className="flex flex-wrap justify-center gap-4">
              <Skeleton className="h-12 w-40 bg-white/20 rounded-lg" />
              <Skeleton className="h-12 w-40 bg-white/20 rounded-lg" />
            </div>
          </div>
        </div>

        {/* Wave SVG */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Stats Section Skeleton */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <Skeleton className="h-10 w-10 rounded-lg mr-3" />
                  <Skeleton className="h-6 w-24" />
                </div>
                <Skeleton className="h-8 w-16 mb-2" />
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Listing Section Skeleton */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Filters Skeleton */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
              <Skeleton className="h-10 w-full md:w-1/3" />
              <div className="flex items-center gap-4 w-full md:w-auto justify-end">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-24" />
              </div>
            </div>
            <Skeleton className="h-4 w-48 mt-4" />
          </div>

          {/* Grid Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Skeleton className="h-32 w-full" />
                <div className="p-6 pt-16 relative">
                  <Skeleton className="h-24 w-24 rounded-full absolute -top-12 left-4 border-4 border-white" />
                  <div className="flex justify-between items-start">
                    <div>
                      <Skeleton className="h-6 w-32 mb-2" />
                      <Skeleton className="h-4 w-24" />
                    </div>
                    <Skeleton className="h-6 w-20" />
                  </div>
                  <div className="mt-4">
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                  <div className="mt-4">
                    <Skeleton className="h-4 w-full" />
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex space-x-3">
                      <Skeleton className="h-5 w-5 rounded-full" />
                      <Skeleton className="h-5 w-5 rounded-full" />
                      <Skeleton className="h-5 w-5 rounded-full" />
                    </div>
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Skeleton */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-2">
              <Skeleton className="h-10 w-10 rounded-md" />
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-10 w-10 rounded-md" />
              ))}
              <Skeleton className="h-10 w-10 rounded-md" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

