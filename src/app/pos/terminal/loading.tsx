import { Skeleton } from "@/components/ui/skeleton"

export default function TerminalDocumentationLoading() {
  return (
    <div className="p-6 max-w-full">
      <Skeleton className="h-8 w-64 mb-3" />
      <Skeleton className="h-4 w-full max-w-md mb-6" />

      <div className="space-y-4">
        <Skeleton className="h-4 w-full max-w-2xl" />
        <Skeleton className="h-4 w-full max-w-xl" />
        <Skeleton className="h-4 w-full max-w-2xl" />
      </div>

      <div className="my-6">
        <Skeleton className="h-48 w-full rounded-lg" />
      </div>

      <Skeleton className="h-6 w-48 mt-6 mb-3" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Skeleton className="h-32 w-full rounded" />
        <Skeleton className="h-32 w-full rounded" />
        <Skeleton className="h-32 w-full rounded" />
        <Skeleton className="h-32 w-full rounded" />
      </div>

      <Skeleton className="h-6 w-64 mt-6 mb-3" />
      <Skeleton className="h-24 w-full rounded-lg mb-6" />

      <Skeleton className="h-6 w-48 mt-6 mb-3" />
      <div className="space-y-3 mb-6">
        <Skeleton className="h-20 w-full rounded" />
        <Skeleton className="h-20 w-full rounded" />
        <Skeleton className="h-20 w-full rounded" />
        <Skeleton className="h-20 w-full rounded" />
        <Skeleton className="h-20 w-full rounded" />
      </div>
    </div>
  )
}
