import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface DocsPaginationProps {
  prev?: {
    title: string
    href: string
  }
  next?: {
    title: string
    href: string
  }
}

export function DocsPagination({ prev, next }: DocsPaginationProps) {
  return (
    <div className="flex flex-row items-center justify-between mt-12 border-t pt-6">
      {prev ? (
        <Button variant="outline" asChild>
          <Link href={prev.href} className="flex items-center gap-2">
            <ChevronLeft className="h-4 w-4" />
            <span>{prev.title}</span>
          </Link>
        </Button>
      ) : (
        <div />
      )}
      {next ? (
        <Button variant="outline" asChild>
          <Link href={next.href} className="flex items-center gap-2">
            <span>{next.title}</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      ) : (
        <div />
      )}
    </div>
  )
}
