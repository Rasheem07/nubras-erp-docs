import { DocsPagination } from "@/components/docs-pagination"
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  FileText,
  ArrowRight,
  Database,
  Wallet,
  UserCircle,
} from "lucide-react"

export default function POSDocumentation() {

  return (
    <div className="p-6 max-w-full">
      <h1 className="text-2xl font-semibold mb-3">POS Module</h1>
      <p className="text-sm text-muted-foreground mb-6">Point of sale management for tailoring business</p>

      <div className="text-sm">
        <p className="mb-4">
          The <strong>POS Module</strong> streamlines daily operations for your tailoring business. It integrates sales
          processing, inventory management, customer tracking, and reporting in a unified interface designed
          specifically for tailoring and retail operations.
        </p>

        <div className="my-6 border rounded-lg overflow-hidden bg-gray-50 p-4">
          <div className="h-48 bg-white rounded border shadow-sm p-3">
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <div className="font-medium">POS Dashboard</div>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-3">
              <div className="bg-gray-100 p-2 rounded h-16">
                <div className="text-xs text-gray-500">Today's Sales</div>
                <div className="font-medium">SAR 12,450</div>
              </div>
              <div className="bg-gray-100 p-2 rounded h-16">
                <div className="text-xs text-gray-500">Orders</div>
                <div className="font-medium">24</div>
              </div>
              <div className="bg-gray-100 p-2 rounded h-16">
                <div className="text-xs text-gray-500">Pending</div>
                <div className="font-medium">8</div>
              </div>
            </div>
            <div className="h-12 bg-gray-100 rounded"></div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">How the POS System Works</h2>

        <div className="border rounded-lg p-4 mb-6 bg-gray-50">
          <p className="mb-3">
            The POS system is built on a <strong>modular architecture</strong> that integrates multiple components to
            provide a seamless experience:
          </p>

          <div className="space-y-4">
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-3 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-medium mb-1">User Interface Layer</h3>
                <p className="text-xs text-muted-foreground">
                  The responsive front-end interface adapts to different devices (desktop terminals, tablets) and
                  provides role-based views. It's optimized for touch input and includes keyboard shortcuts for
                  efficient operation.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-3 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-medium mb-1">Business Logic Layer</h3>
                <p className="text-xs text-muted-foreground">
                  Handles transaction processing, pricing calculations, discount rules, tax computation, and inventory
                  management. This layer enforces business rules and validates all operations before they're committed.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-3 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-medium mb-1">Data Storage Layer</h3>
                <p className="text-xs text-muted-foreground">
                  Securely stores all transaction data, inventory records, customer information, and system settings in
                  a relational database with regular backups and transaction logging for data integrity.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-3 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-medium mb-1">Integration Layer</h3>
                <p className="text-xs text-muted-foreground">
                  Connects the POS with other business systems through APIs and event-driven architecture. This enables
                  real-time data synchronization with inventory, finance, CRM, and other modules.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Key Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded p-3">
            <div className="flex items-center mb-2">
              <ShoppingCart className="h-4 w-4 text-blue-500 mr-2" />
              <h3 className="text-sm font-medium">Sales Management</h3>
            </div>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>
                • <strong>Process transactions</strong> with multiple payment methods
              </li>
              <li>• Handle returns and exchanges with inventory updates</li>
              <li>• Apply tiered discounts and promotional offers</li>
              <li>• Generate customizable receipts and invoices</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <div className="flex items-center mb-2">
              <Package className="h-4 w-4 text-blue-500 mr-2" />
              <h3 className="text-sm font-medium">Inventory Control</h3>
            </div>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>
                • <strong>Real-time stock tracking</strong> with automatic updates
              </li>
              <li>• Configurable low stock alerts and notifications</li>
              <li>• Barcode scanning and generation support</li>
              <li>• Automated reordering based on sales velocity</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <div className="flex items-center mb-2">
              <Users className="h-4 w-4 text-blue-500 mr-2" />
              <h3 className="text-sm font-medium">Customer Management</h3>
            </div>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>
                • <strong>Comprehensive customer profiles</strong> with purchase history
              </li>
              <li>• Detailed measurement records for custom tailoring</li>
              <li>• Purchase tracking and preference analysis</li>
              <li>• Integrated loyalty program with points and rewards</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <div className="flex items-center mb-2">
              <FileText className="h-4 w-4 text-blue-500 mr-2" />
              <h3 className="text-sm font-medium">Tailoring Features</h3>
            </div>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>
                • <strong>Digital measurement storage</strong> with version history
              </li>
              <li>• Production tracking from order to delivery</li>
              <li>• Intelligent tailor assignment based on skills</li>
              <li>• Custom pricing formulas for bespoke items</li>
            </ul>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Integration with Enterprise Systems</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="border rounded p-3">
            <div className="flex items-center mb-2">
              <Database className="h-4 w-4 text-purple-500 mr-2" />
              <h3 className="text-sm font-medium">Inventory Integration</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              <strong>Bi-directional data flow</strong> ensures inventory levels are always accurate across systems.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Sales automatically update inventory counts</li>
              <li>• Purchase orders flow to inventory receiving</li>
              <li>• Stock transfers sync between locations</li>
              <li>• Shared product catalog with enterprise system</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <div className="flex items-center mb-2">
              <Wallet className="h-4 w-4 text-green-500 mr-2" />
              <h3 className="text-sm font-medium">Finance Integration</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              <strong>Seamless financial data flow</strong> between POS and accounting systems.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Sales transactions post to general ledger</li>
              <li>• Tax calculations align with finance rules</li>
              <li>• End-of-day reconciliation processes</li>
              <li>• Financial reporting with drill-down capability</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <div className="flex items-center mb-2">
              <UserCircle className="h-4 w-4 text-blue-500 mr-2" />
              <h3 className="text-sm font-medium">CRM Integration</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              <strong>Customer data synchronization</strong> creates a unified view of customer interactions.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Customer profiles shared across systems</li>
              <li>• Purchase history feeds marketing campaigns</li>
              <li>• Loyalty points update in real-time</li>
              <li>• Communication preferences sync with CRM</li>
            </ul>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Common User Workflows</h2>

        <div className="space-y-4 mb-6">
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-blue-50 p-3 border-b border-blue-100">
              <h3 className="text-sm font-medium text-blue-800">Daily Opening Procedure</h3>
            </div>
            <div className="p-3">
              <ol className="text-xs list-decimal pl-4 space-y-1 text-muted-foreground">
                <li>Log in with personal credentials</li>
                <li>Count and enter opening cash drawer amount</li>
                <li>Review any pending orders scheduled for the day</li>
                <li>Check low stock notifications and pending deliveries</li>
                <li>Verify that payment terminals are connected and working</li>
                <li>Open the store for business</li>
              </ol>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="bg-blue-50 p-3 border-b border-blue-100">
              <h3 className="text-sm font-medium text-blue-800">Processing a Custom Tailoring Order</h3>
            </div>
            <div className="p-3">
              <ol className="text-xs list-decimal pl-4 space-y-1 text-muted-foreground">
                <li>Create or select customer profile</li>
                <li>Record or update customer measurements</li>
                <li>Select garment type and fabric from inventory</li>
                <li>Add customization options and special requirements</li>
                <li>Calculate price based on materials and labor</li>
                <li>Collect deposit payment (typically 50%)</li>
                <li>Schedule fitting appointment</li>
                <li>Assign to tailor based on expertise and workload</li>
                <li>Generate order ticket for production</li>
                <li>Provide receipt and order confirmation to customer</li>
              </ol>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="bg-blue-50 p-3 border-b border-blue-100">
              <h3 className="text-sm font-medium text-blue-800">End-of-Day Closing</h3>
            </div>
            <div className="p-3">
              <ol className="text-xs list-decimal pl-4 space-y-1 text-muted-foreground">
                <li>Run end-of-day sales report</li>
                <li>Count cash drawer and reconcile with system totals</li>
                <li>Process credit card batch settlement</li>
                <li>Review any discrepancies or unusual transactions</li>
                <li>Back up daily transaction data</li>
                <li>Print or email daily summary for management</li>
                <li>Secure cash and valuables</li>
                <li>Log out of the system and lock terminals</li>
              </ol>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Technical Specifications</h2>

        <div className="border rounded p-4 mb-6 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium mb-2">System Requirements</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>
                  • <strong>Operating System:</strong> Windows 10/11, macOS 12+, or Linux
                </li>
                <li>
                  • <strong>Processor:</strong> Intel Core i3 or equivalent (i5+ recommended)
                </li>
                <li>
                  • <strong>Memory:</strong> 8GB RAM minimum (16GB recommended)
                </li>
                <li>
                  • <strong>Storage:</strong> 256GB SSD with 50GB free space
                </li>
                <li>
                  • <strong>Display:</strong> 1920x1080 resolution (touch-enabled recommended)
                </li>
                <li>
                  • <strong>Network:</strong> Broadband internet connection
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">Compatible Hardware</h3>
              <ul className="space-y-1 text-muted-foreground">
                <li>
                  • <strong>Receipt Printers:</strong> Epson TM-series, Star Micronics
                </li>
                <li>
                  • <strong>Barcode Scanners:</strong> Honeywell, Zebra, Symbol
                </li>
                <li>
                  • <strong>Cash Drawers:</strong> APG, MMF, Star Micronics
                </li>
                <li>
                  • <strong>Payment Terminals:</strong> Ingenico, Verifone, PAX
                </li>
                <li>
                  • <strong>Label Printers:</strong> Zebra, Brother, DYMO
                </li>
                <li>
                  • <strong>Customer Displays:</strong> Logic Controls, Partner Tech
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Real-World Example</h2>

        <div className="border rounded p-4 mb-6 text-xs italic bg-gray-50">
          <p>
            "Ahmed runs a tailoring shop with three locations. Each morning, he checks his POS Dashboard for yesterday's
            sales and inventory levels. When customers arrive, staff quickly retrieve measurements and order details.
            The system calculates pricing based on services and materials, updates inventory, assigns tailors, and
            schedules delivery dates. Monthly reports help Ahmed analyze sales trends and staff performance. The POS
            Module has transformed his business from paper-based to data-driven."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div className="border rounded p-4 hover:border-blue-200 hover:bg-blue-50 transition-colors">
            <div className="flex items-center mb-2">
              <LayoutDashboard className="h-5 w-5 text-blue-500 mr-2" />
              <h3 className="text-sm font-medium">POS Dashboard</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-3">
              Get started with the POS dashboard and monitor key business metrics.
            </p>
            <a href="/docs/pos/dashboard" className="text-xs text-blue-600 hover:underline flex items-center">
              View Dashboard Guide <ArrowRight className="h-3 w-3 ml-1" />
            </a>
          </div>

          <div className="border rounded p-4 hover:border-blue-200 hover:bg-blue-50 transition-colors">
            <div className="flex items-center mb-2">
              <ShoppingCart className="h-5 w-5 text-blue-500 mr-2" />
              <h3 className="text-sm font-medium">Sales Processing</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-3">Learn how to process sales transactions efficiently.</p>
            <a href="/docs/pos/sales" className="text-xs text-blue-600 hover:underline flex items-center">
              View Sales Guide <ArrowRight className="h-3 w-3 ml-1" />
            </a>
          </div>
        </div>

        <DocsPagination prev={{href: "/pos", title: "pos"}} next={{href: "/pos", title: "pos"}} />

      </div>
    </div>
  )
}
