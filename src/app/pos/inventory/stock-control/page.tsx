export default function StockControlDocumentation() {
  return (
    <div className="p-6 max-w-full">
      <h1 className="text-2xl font-semibold mb-3">Stock Control</h1>
      <p className="text-sm text-muted-foreground mb-6">Manage inventory levels and stock movements</p>

      <div className="text-sm">
        <p className="mb-4">
          Effective stock control ensures you have the right products in the right quantities at the right time. This
          guide covers monitoring stock levels, receiving inventory, and conducting stock counts.
        </p>

        <div className="my-6 border rounded-lg overflow-hidden bg-gray-50 p-4">
          <div className="h-48 bg-white rounded border shadow-sm p-3">
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <div className="font-medium">Stock Control</div>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </div>
            </div>
            <div className="text-xs">
              <div className="flex justify-between border-b pb-1 mb-2 font-medium">
                <div className="w-1/4">Item</div>
                <div className="w-1/6">Current</div>
                <div className="w-1/6">Min</div>
                <div className="w-1/6">Reorder</div>
                <div className="w-1/6">Status</div>
                <div className="w-1/6">Actions</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="w-1/4">Premium Wool - Navy</div>
                  <div className="w-1/6">45m</div>
                  <div className="w-1/6">20m</div>
                  <div className="w-1/6">50m</div>
                  <div className="w-1/6">
                    <span className="bg-green-100 text-green-800 px-1 rounded text-xs">OK</span>
                  </div>
                  <div className="w-1/6 flex space-x-1">
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-1/4">Cotton Shirt - White</div>
                  <div className="w-1/6">5</div>
                  <div className="w-1/6">10</div>
                  <div className="w-1/6">20</div>
                  <div className="w-1/6">
                    <span className="bg-red-100 text-red-800 px-1 rounded text-xs">Low</span>
                  </div>
                  <div className="w-1/6 flex space-x-1">
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Key Stock Control Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Stock Monitoring</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Real-time inventory levels</li>
              <li>• Low stock alerts and notifications</li>
              <li>• Stock status indicators</li>
              <li>• Inventory valuation</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Stock Receiving</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Purchase order matching</li>
              <li>• Barcode scanning for quick entry</li>
              <li>• Quality control checks</li>
              <li>• Supplier performance tracking</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Stock Counts</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Full and partial inventory counts</li>
              <li>• Mobile counting capability</li>
              <li>• Variance reporting</li>
              <li>• Automated count scheduling</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Stock Transfers</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Between location transfers</li>
              <li>• Transfer status tracking</li>
              <li>• Batch transfers</li>
              <li>• Transfer history</li>
            </ul>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Receiving New Stock</h2>

        <ol className="space-y-3 mb-6">
          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">1. Access Stock Receiving</h3>
            <p className="text-xs text-muted-foreground">Navigate to Inventory &gt; Receive Stock.</p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">2. Select Purchase Order</h3>
            <p className="text-xs text-muted-foreground">Choose the related purchase order or create a new receipt.</p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">3. Verify Items</h3>
            <p className="text-xs text-muted-foreground">Check received quantities against ordered quantities.</p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">4. Record Any Discrepancies</h3>
            <p className="text-xs text-muted-foreground">Note any shortages, overages, or damaged items.</p>
          </li>

          <li>
            <h3 className="text-sm font-medium">5. Complete Receipt</h3>
            <p className="text-xs text-muted-foreground">Finalize the receipt to update inventory levels.</p>
          </li>
        </ol>

        <h2 className="text-lg font-medium mt-6 mb-3">Conducting Stock Counts</h2>

        <ol className="space-y-3 mb-6">
          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">1. Prepare Count Sheet</h3>
            <p className="text-xs text-muted-foreground">Generate a count sheet from Inventory {">"} Stock Count.</p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">2. Count Physical Items</h3>
            <p className="text-xs text-muted-foreground">Record actual quantities of each item in stock.</p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">3. Enter Count Results</h3>
            <p className="text-xs text-muted-foreground">Input the counted quantities into the system.</p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">4. Review Variances</h3>
            <p className="text-xs text-muted-foreground">Analyze differences between system and physical counts.</p>
          </li>

          <li>
            <h3 className="text-sm font-medium">5. Adjust Inventory</h3>
            <p className="text-xs text-muted-foreground">Approve and post adjustments to correct inventory levels.</p>
          </li>
        </ol>

        <h2 className="text-lg font-medium mt-6 mb-3">Real-World Example</h2>

        <div className="border rounded p-4 mb-6 text-xs italic bg-gray-50">
          <p>
            "At the end of each month, Elegant Tailors conducts a partial inventory count focusing on high-value
            fabrics. The inventory manager generates a count sheet for premium fabrics and assigns two staff members to
            count. Using tablets, they scan fabric barcodes and enter measured lengths. The system immediately flags a
            discrepancy with Italian wool fabric, showing 45 meters in system but only 42 meters physically counted.
            After investigation, they discover the difference was due to a recent custom suit order where the fabric was
            cut but the transaction wasn't properly completed. They adjust the inventory and implement a process
            improvement to prevent future discrepancies."
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 my-6 text-xs">
          <h3 className="text-sm font-medium text-blue-700 mb-1">Pro Tips</h3>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Count high-value items weekly and full inventory monthly</li>
            <li>• Use cycle counting to spread counting workload throughout the month</li>
            <li>• Investigate all variances over 5% immediately</li>
            <li>• Maintain organized storage to facilitate accurate counting</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
