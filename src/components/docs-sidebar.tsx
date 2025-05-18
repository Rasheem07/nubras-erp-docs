"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { ScrollArea } from "@/components/ui/scroll-area"

interface DocsConfig {
  mainNav: {
    title: string
    href: string
    external?: boolean
  }[]
  sidebarNav: {
    title: string
    href?: string
    items: {
      title: string
      href: string
      items?: {
        title: string
        href: string
      }[]
    }[]
  }[]
}

const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/",
    },
    {
      title: "Guides",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/",
        },
        {
          title: "Installation",
          href: "/installation",
        },
      ],
    },
    {
      title: "Finance",
      href: "/finance",
      items: [
        {
          title: "Overview",
          href: "/finance",
        },
        {
          title: "Dashboard",
          href: "/finance/dashboard",
        },
        {
          title: "Accounts",
          href: "/finance/accounts",
          items: [
            {
              title: "Chart of Accounts",
              href: "/finance/accounts/chart-of-accounts",
            },
            {
              title: "Account Structure",
              href: "/finance/accounts/account-structure",
            },
            {
              title: "Managing Accounts",
              href: "/finance/accounts/managing-accounts",
            },
          ],
        },
        {
          title: "Banking",
          href: "/finance/banking",
          items: [
            {
              title: "Bank Accounts",
              href: "/finance/banking/bank-accounts",
            },
            {
              title: "Reconciliation",
              href: "/finance/banking/reconciliation",
            },
            {
              title: "Transactions",
              href: "/finance/banking/transactions",
            },
            {
              title: "Statement Imports",
              href: "/finance/banking/statement-imports",
            },
          ],
        },
        {
          title: "Transactions",
          href: "/finance/transactions",
          items: [
            {
              title: "Invoices",
              href: "/finance/transactions/invoices",
            },
            {
              title: "Expenses",
              href: "/finance/transactions/expenses",
            },
            {
              title: "Journal Entries",
              href: "/finance/transactions/journal-entries",
            },
          ],
        },
        {
          title: "Expense Claims",
          href: "/finance/expense-claims",
        },
        {
          title: "Reports",
          href: "/finance/reports",
          items: [
            {
              title: "Standard Reports",
              href: "/finance/reports/standard-reports",
            },
            {
              title: "Custom Reports",
              href: "/finance/reports/custom-reports",
            },
          ],
        },
        {
          title: "Budgeting",
          href: "/finance/budgeting",
        },
        {
          title: "Tax Management",
          href: "/finance/tax-management",
        },
        {
          title: "Forecasting",
          href: "/finance/forecasting",
        },
        {
          title: "Settings",
          href: "/finance/settings",
        },
      ],
    },
    {
      title: "Inventory",
      href: "/inventory",
      items: [
        {
          title: "Overview",
          href: "/inventory",
        },
        {
          title: "Items",
          href: "/inventory/items",
        },
        {
          title: "Stock Movements",
          href: "/inventory/stock-movements",
        },
        {
          title: "Material Management",
          href: "/inventory/material-management",
        },
        {
          title: "Purchasing",
          href: "/inventory/purchasing",
        },
        {
          title: "Locations",
          href: "/inventory/locations",
        },
        {
          title: "Audit",
          href: "/inventory/audit",
        },
        {
          title: "Reports",
          href: "/inventory/reports",
        },
      ],
    },
    {
      title: "Projects",
      href: "/projects",
      items: [
        {
          title: "Overview",
          href: "/projects",
        },
        {
          title: "Creation",
          href: "/projects/creation",
        },
        {
          title: "Planning",
          href: "/projects/planning",
        },
        {
          title: "Execution",
          href: "/projects/execution",
        },
        {
          title: "Monitoring",
          href: "/projects/monitoring",
        },
        {
          title: "Closure",
          href: "/projects/closure",
        },
        {
          title: "Upcoming Features",
          href: "/projects/upcoming-features",
        },
      ],
    },
  ],
}

interface DocsSidebarProps {
  className?: string
}

export function DocsSidebar({ className }: DocsSidebarProps) {
  const pathname = usePathname()

  return (
    <div className={cn("pb-12 border-r", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Documentation</h2>
          <ScrollArea className="h-[calc(100vh-10rem)] pr-2">
            <div className="space-y-1">
              {docsConfig.sidebarNav.map((item) => (
                <div key={item.title} className="py-2">
                  <h3 className="px-4 text-base font-medium">{item.title}</h3>
                  {item?.items?.length && (
                    <div className="grid grid-flow-row auto-rows-max text-base">
                      {item.items.map((item) => (
                        <div key={item.title}>
                          <Link
                            href={item.href}
                            className={cn(
                              "group flex w-full items-center rounded-md border border-transparent px-4 py-2 hover:underline",
                              pathname === item.href ? "font-medium text-foreground" : "text-muted-foreground",
                            )}
                          >
                            {item.title}
                          </Link>
                          {item?.items?.length && (
                            <div className="grid grid-flow-row auto-rows-max text-base pl-6">
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.title}
                                  href={subItem.href}
                                  className={cn(
                                    "group flex w-full items-center rounded-md border border-transparent px-4 py-2 hover:underline",
                                    pathname === subItem.href ? "font-medium text-foreground" : "text-muted-foreground",
                                  )}
                                >
                                  {subItem.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
