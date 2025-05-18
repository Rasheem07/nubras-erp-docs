"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { DocsSidebar } from "@/components/docs-sidebar"
import { ModeToggle } from "./theme-toggler"

export function DocsHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background px-6">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">Nubras ERP</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
              href="/"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/" || pathname?.startsWith("/") ? "text-foreground" : "text-foreground/60",
              )}
            >
              Documentation
            </Link>
            <Link
              href="/guides"
              className={cn(
                "transition-colors hover:text-foreground/80",
                pathname === "/guides" || pathname?.startsWith("/guides/") ? "text-foreground" : "text-foreground/60",
              )}
            >
              Guides
            </Link>
          </nav>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="mr-2 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="pr-0">
            <MobileNav />
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">{/* Search can be added here */}</div>
          <nav className="flex items-center"><ModeToggle /></nav>
        </div>
      </div>
    </header>
  )
}

function MobileNav() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center border-b px-2">
        <Link href="/" className="flex items-center py-3">
          <span className="font-bold">Nubras ERP</span>
        </Link>
      </div>
      <ScrollArea className="flex-1 overflow-auto py-2">
        <DocsSidebar className="px-1" />
      </ScrollArea>
    </div>
  )
}
