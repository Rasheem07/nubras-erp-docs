export default function POSDashboardDocumentation() {
  return (
    <div className="p-6 max-w-full">
      <h1 className="text-2xl font-semibold mb-3">POS Dashboard</h1>
      <p className="text-sm text-muted-foreground mb-6">Monitor key metrics and daily operations</p>

      <div className="text-sm">
        <p className="mb-4">
          The POS Dashboard provides a real-time overview of your business performance. It displays key metrics, recent
          transactions, and alerts to help you make informed decisions quickly.
        </p>

        <div className="my-6 border rounded-lg overflow-hidden bg-gray-50 p-4">
          <div className="h-48 bg-white rounded border shadow-sm p-3">
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <div className="font-medium">Dashboard</div>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 mb-3">
              <div className="bg-gray-100 p-2 rounded h-16">
                <div className="text-xs text-gray-500">Today's Sales</div>
                <div className="font-medium">SAR 12,450</div>
              </div>
              <div className="bg-gray-100 p-2 rounded h-16">
                <div className="text-xs text-gray-500">Orders</div>
                <div className="font-medium">24</div>
              </div>
              <div className="bg-gray-100 p-2 rounded h-16">
                <div className="text-xs text-gray-500">Customers</div>
                <div className="font-medium">18</div>
              </div>
              <div className="bg-gray-100 p-2 rounded h-16">
                <div className="text-xs text-gray-500">Pending</div>
                <div className="font-medium">8</div>
              </div>
            </div>
            <div className="h-12 bg-gray-100 rounded"></div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Key Dashboard Elements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Sales Summary</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Today's total sales amount</li>
              <li>• Comparison with previous day/week</li>
              <li>• Sales by payment method</li>
              <li>• Average transaction value</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Order Status</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• New orders received today</li>
              <li>• Orders ready for pickup/delivery</li>
              <li>• Delayed orders requiring attention</li>
              <li>• Orders by status (in progress, ready)</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Inventory Alerts</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Low stock items requiring reorder</li>
              <li>• Out of stock items</li>
              <li>• Recently restocked items</li>
              <li>• Top selling items</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Staff Performance</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Sales by staff member</li>
              <li>• Tailor workload and assignments</li>
              <li>• Completed orders by staff</li>
              <li>• Staff attendance summary</li>
            </ul>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Customizing Your Dashboard</h2>

        <ol className="space-y-3 mb-6">
          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">1. Access Dashboard Settings</h3>
            <p className="text-xs text-muted-foreground">
              Click the gear icon in the top-right corner of the dashboard.
            </p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">2. Select Widgets</h3>
            <p className="text-xs text-muted-foreground">
              Choose which metrics and charts to display from the available options.
            </p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">3. Arrange Layout</h3>
            <p className="text-xs text-muted-foreground">
              Drag and drop widgets to customize their position on the dashboard.
            </p>
          </li>

          <li>
            <h3 className="text-sm font-medium">4. Save Configuration</h3>
            <p className="text-xs text-muted-foreground">
              Click "Save Layout" to preserve your dashboard configuration.
            </p>
          </li>
        </ol>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 my-6 text-xs">
          <h3 className="text-sm font-medium text-blue-700 mb-1">Pro Tips</h3>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Review your dashboard at the start and end of each day</li>
            <li>• Set up email alerts for critical metrics</li>
            <li>• Create different dashboard views for different roles</li>
            <li>• Use the date filter to analyze trends over time</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
