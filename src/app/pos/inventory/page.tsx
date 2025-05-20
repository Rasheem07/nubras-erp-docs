import { DocsPagination } from "@/components/docs-pagination"
import { ArrowRight } from "lucide-react"

export default function InventoryDocumentation() {

  return (
    <div className="p-6 max-w-full">
      <h1 className="text-2xl font-semibold mb-3">POS Inventory Management</h1>
      <p className="text-sm text-muted-foreground mb-6">Manage products, materials, and stock levels</p>

      <div className="text-sm">
        <p className="mb-4">
          The POS inventory management module helps you track products, materials, and stock levels specifically for
          your retail operations, ensuring you always have the right items available for your customers.
        </p>

        <div className="my-6 border rounded-lg overflow-hidden bg-gray-50 p-4">
          <div className="h-48 bg-white rounded border shadow-sm p-3">
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <div className="font-medium">Inventory Dashboard</div>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </div>
            </div>
            <div className="flex h-32">
              <div className="w-1/3 border-r pr-2">
                <div className="text-xs font-medium mb-1">Stock Summary</div>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <div>Total Items:</div>
                    <div>248</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Low Stock:</div>
                    <div className="text-amber-600">12</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Out of Stock:</div>
                    <div className="text-red-600">3</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Value:</div>
                    <div>SAR 125,450</div>
                  </div>
                </div>
              </div>
              <div className="w-2/3 pl-2">
                <div className="text-xs font-medium mb-1">Top Selling Items</div>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between border-b pb-1">
                    <div>Premium Wool Fabric (Navy)</div>
                    <div>42 units</div>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <div>Cotton Shirt Material (White)</div>
                    <div>38 units</div>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <div>Mother of Pearl Buttons</div>
                    <div>156 units</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Silk Lining (Burgundy)</div>
                    <div>27 units</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Available Documentation</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded p-4 hover:border-blue-200 hover:bg-blue-50 transition-colors">
            <h3 className="text-sm font-medium mb-1">Item Management</h3>
            <p className="text-xs text-muted-foreground mb-3">
              Learn how to add, edit, and organize products in your inventory.
            </p>
            <a
              href="/docs/pos/inventory/item-management"
              className="text-xs text-blue-600 hover:underline flex items-center"
            >
              Read guide <ArrowRight className="h-3 w-3 ml-1" />
            </a>
          </div>

          <div className="border rounded p-4 hover:border-blue-200 hover:bg-blue-50 transition-colors">
            <h3 className="text-sm font-medium mb-1">Stock Control</h3>
            <p className="text-xs text-muted-foreground mb-3">
              Learn how to manage stock levels, transfers, and conduct inventory counts.
            </p>
            <a
              href="/docs/pos/inventory/stock-control"
              className="text-xs text-blue-600 hover:underline flex items-center"
            >
              Read guide <ArrowRight className="h-3 w-3 ml-1" />
            </a>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Key Inventory Features</h2>

        <div className="space-y-3 mb-6">
          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Real-time Stock Tracking</h3>
            <p className="text-xs text-muted-foreground">Monitor inventory levels in real-time across all locations.</p>
          </div>

          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Barcode Scanning</h3>
            <p className="text-xs text-muted-foreground">
              Quickly find products and update inventory with barcode scanning.
            </p>
          </div>

          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Low Stock Alerts</h3>
            <p className="text-xs text-muted-foreground">
              Receive notifications when items reach predefined threshold levels.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium">Inventory Reporting</h3>
            <p className="text-xs text-muted-foreground">
              Generate detailed reports on stock levels, movement, and valuation.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 my-6 text-xs">
          <h3 className="text-sm font-medium text-blue-700 mb-1">Pro Tips</h3>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Conduct regular cycle counts rather than full inventory counts</li>
            <li>• Use categories and tags for easier inventory organization</li>
            <li>• Set up automatic reorder points for essential items</li>
            <li>• Review slow-moving inventory monthly to prevent excess stock</li>
          </ul>
        </div>

        <DocsPagination prev={{href: "/pos", title: "pos"}} next={{href: "/pos", title: "pos"}} />

      </div>
    </div>
  )
}
