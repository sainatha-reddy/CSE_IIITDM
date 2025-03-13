import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-24">
      {/* Hero Section Skeleton */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Skeleton className="h-12 w-3/4 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-6" />
              <Skeleton className="h-10 w-40" />
            </div>
            <div className="md:w-1/2">
              <Skeleton className="h-80 md:h-96 w-full rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-32 rounded-xl" />
            ))}
          </div>
        </div>
      </section>

      {/* Tabs Section Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex border-b border-gray-200 mb-8">
            <Skeleton className="h-10 w-32 mr-4" />
            <Skeleton className="h-10 w-32" />
          </div>

          <Skeleton className="h-8 w-64 mb-8" />

          <div className="space-y-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <Skeleton className="h-72 rounded-xl" />
                </div>
                <div className="md:w-1/2">
                  <Skeleton className="h-4 w-4 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Skeleton className="h-10 w-2/3 mx-auto mb-4" />
            <Skeleton className="h-4 w-full mb-2 mx-auto" />
            <Skeleton className="h-4 w-3/4 mb-8 mx-auto" />
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Skeleton className="h-12 w-48 mx-auto sm:mx-0" />
              <Skeleton className="h-12 w-48 mx-auto sm:mx-0" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

