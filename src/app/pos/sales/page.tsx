import { DocsPagination } from "@/components/docs-pagination"
import { ArrowRight } from "lucide-react"

export default function SalesDocumentation() {

  return (
    <div className="p-6 max-w-full">
      <h1 className="text-2xl font-semibold mb-3">Sales Management</h1>
      <p className="text-sm text-muted-foreground mb-6">Process transactions and manage sales operations</p>

      <div className="text-sm">
        <p className="mb-4">
          The sales management module is the core of your POS system, enabling efficient transaction processing, returns
          handling, and sales tracking for your tailoring business.
        </p>

        <div className="my-6 border rounded-lg overflow-hidden bg-gray-50 p-4">
          <div className="h-48 bg-white rounded border shadow-sm p-3">
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <div className="font-medium">Sales Terminal</div>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </div>
            </div>
            <div className="flex h-32">
              <div className="w-2/3 border-r pr-2">
                <div className="text-xs font-medium mb-1">Current Transaction</div>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between border-b pb-1">
                    <div>Custom Shirt (White Cotton)</div>
                    <div>SAR 350</div>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <div>Tailoring Service - Express</div>
                    <div>SAR 75</div>
                  </div>
                  <div className="flex justify-between font-medium">
                    <div>Total</div>
                    <div>SAR 425</div>
                  </div>
                </div>
              </div>
              <div className="w-1/3 pl-2">
                <div className="text-xs font-medium mb-1">Payment Options</div>
                <div className="grid grid-cols-2 gap-1">
                  <div className="bg-gray-100 p-1 rounded text-center text-xs">Cash</div>
                  <div className="bg-gray-100 p-1 rounded text-center text-xs">Card</div>
                  <div className="bg-gray-100 p-1 rounded text-center text-xs">Digital</div>
                  <div className="bg-gray-100 p-1 rounded text-center text-xs">Split</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Available Documentation</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded p-4 hover:border-blue-200 hover:bg-blue-50 transition-colors">
            <h3 className="text-sm font-medium mb-1">Processing Sales</h3>
            <p className="text-xs text-muted-foreground mb-3">
              Learn how to process transactions, apply discounts, and handle payments.
            </p>
            <a
              href="/docs/pos/sales/processing-sales"
              className="text-xs text-blue-600 hover:underline flex items-center"
            >
              Read guide <ArrowRight className="h-3 w-3 ml-1" />
            </a>
          </div>

          <div className="border rounded p-4 hover:border-blue-200 hover:bg-blue-50 transition-colors">
            <h3 className="text-sm font-medium mb-1">Returns & Refunds</h3>
            <p className="text-xs text-muted-foreground mb-3">
              Learn how to process returns, exchanges, and issue refunds to customers.
            </p>
            <a
              href="/docs/pos/sales/returns-refunds"
              className="text-xs text-blue-600 hover:underline flex items-center"
            >
              Read guide <ArrowRight className="h-3 w-3 ml-1" />
            </a>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Key Sales Features</h2>

        <div className="space-y-3 mb-6">
          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Transaction Processing</h3>
            <p className="text-xs text-muted-foreground">
              Quickly process sales with an intuitive interface designed for efficiency.
            </p>
          </div>

          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Multiple Payment Methods</h3>
            <p className="text-xs text-muted-foreground">
              Accept various payment types including cash, cards, digital wallets, and split payments.
            </p>
          </div>

          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Discounts and Promotions</h3>
            <p className="text-xs text-muted-foreground">
              Apply percentage or fixed discounts, promotional codes, and special offers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium">Receipt Management</h3>
            <p className="text-xs text-muted-foreground">
              Generate, print, or email receipts with customizable templates.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 my-6 text-xs">
          <h3 className="text-sm font-medium text-blue-700 mb-1">Pro Tips</h3>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Use keyboard shortcuts for faster transaction processing</li>
            <li>• Create saved carts for frequently ordered combinations</li>
            <li>• Set up quick-access buttons for common products and services</li>
            <li>• Review daily sales reports to track performance</li>
          </ul>
        </div>

        <DocsPagination prev={{href: "/pos", title: "pos"}} next={{href: "/pos", title: "pos"}} />

      </div>
    </div>
  )
}
