import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-24 pb-20">
      {/* Hero Section Skeleton */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <Skeleton className="h-12 w-3/4 max-w-xl mb-4" />
            <Skeleton className="h-6 w-2/3 max-w-md mb-12" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <Skeleton key={i} className="h-40 rounded-xl" />
              ))}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Faculty Sidebar Skeleton */}
          <div className="lg:col-span-1">
            <Skeleton className="h-[500px] rounded-xl" />
          </div>

          {/* Content Skeleton */}
          <div className="lg:col-span-3">
            <Skeleton className="h-32 rounded-xl mb-6" />
            <Skeleton className="h-80 rounded-xl mb-6" />
            <Skeleton className="h-24 rounded-xl mb-6" />

            <div className="space-y-6">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-40 rounded-xl" />
                ))}
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Skeleton key={i} className="h-10 w-10 rounded-md" />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

