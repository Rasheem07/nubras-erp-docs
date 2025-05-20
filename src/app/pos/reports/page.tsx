export default function ReportsDocumentation() {
  return (
    <div className="p-6 max-w-full">
      <h1 className="text-2xl font-semibold mb-3">Reports</h1>
      <p className="text-sm text-muted-foreground mb-6">Generate insights with comprehensive business reports</p>

      <div className="text-sm">
        <p className="mb-4">
          The reporting module provides detailed analytics and insights into all aspects of your business, helping you
          make data-driven decisions for growth and optimization.
        </p>

        <div className="my-6 border rounded-lg overflow-hidden bg-gray-50 p-4">
          <div className="h-48 bg-white rounded border shadow-sm p-3">
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <div className="font-medium">Sales Report</div>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </div>
            </div>
            <div className="flex h-32">
              <div className="w-1/3 border-r pr-2">
                <div className="text-xs font-medium mb-1">Summary</div>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <div>Total Sales:</div>
                    <div>SAR 125,450</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Transactions:</div>
                    <div>248</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Average Sale:</div>
                    <div>SAR 506</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Growth:</div>
                    <div className="text-green-600">+12.5%</div>
                  </div>
                </div>
              </div>
              <div className="w-2/3 pl-2">
                <div className="text-xs font-medium mb-1">Sales Trend</div>
                <div className="h-24 bg-gray-100 rounded relative">
                  <div className="absolute inset-0 flex items-end px-2">
                    <div className="w-1/7 h-8 bg-blue-200 mx-1"></div>
                    <div className="w-1/7 h-12 bg-blue-200 mx-1"></div>
                    <div className="w-1/7 h-10 bg-blue-200 mx-1"></div>
                    <div className="w-1/7 h-14 bg-blue-200 mx-1"></div>
                    <div className="w-1/7 h-16 bg-blue-200 mx-1"></div>
                    <div className="w-1/7 h-18 bg-blue-200 mx-1"></div>
                    <div className="w-1/7 h-20 bg-blue-200 mx-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Available Reports</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Sales Reports</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Daily/weekly/monthly/yearly sales</li>
              <li>• Sales by product category</li>
              <li>• Sales by payment method</li>
              <li>• Sales by staff member</li>
              <li>• Comparative period analysis</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Inventory Reports</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Stock levels and valuation</li>
              <li>• Low stock alerts</li>
              <li>• Inventory turnover</li>
              <li>• Slow-moving items</li>
              <li>• Shrinkage and loss analysis</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Customer Reports</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Customer purchase history</li>
              <li>• Top customers by revenue</li>
              <li>• Customer retention rates</li>
              <li>• New vs. returning customers</li>
              <li>• Customer demographics</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Staff Reports</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Staff sales performance</li>
              <li>• Tailor productivity metrics</li>
              <li>• Commission calculations</li>
              <li>• Work hours and attendance</li>
              <li>• Order completion rates</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Financial Reports</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Profit and loss statements</li>
              <li>• Tax summaries</li>
              <li>• Expense tracking</li>
              <li>• Payment reconciliation</li>
              <li>• Outstanding invoices</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Production Reports</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Order status summary</li>
              <li>• Production efficiency</li>
              <li>• Delivery time analysis</li>
              <li>• Quality control metrics</li>
              <li>• Material usage optimization</li>
            </ul>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Generating and Using Reports</h2>

        <ol className="space-y-3 mb-6">
          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">1. Access Reports Module</h3>
            <p className="text-xs text-muted-foreground">Navigate to Reports in the main menu.</p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">2. Select Report Type</h3>
            <p className="text-xs text-muted-foreground">Choose from the available report categories.</p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">3. Set Parameters</h3>
            <p className="text-xs text-muted-foreground">
              Define date range, categories, staff members, or other filters.
            </p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">4. Generate Report</h3>
            <p className="text-xs text-muted-foreground">
              Click "Generate" to create the report based on your parameters.
            </p>
          </li>

          <li>
            <h3 className="text-sm font-medium">5. Export or Share</h3>
            <p className="text-xs text-muted-foreground">Download as PDF/Excel or share via email with team members.</p>
          </li>
        </ol>

        <h2 className="text-lg font-medium mt-6 mb-3">Scheduled Reports</h2>

        <div className="space-y-3 mb-6">
          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Daily Reports</h3>
            <p className="text-xs text-muted-foreground">End-of-day sales summaries and cash reconciliation reports.</p>
          </div>

          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Weekly Reports</h3>
            <p className="text-xs text-muted-foreground">
              Staff performance, inventory status, and production efficiency reports.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium">Monthly Reports</h3>
            <p className="text-xs text-muted-foreground">
              Comprehensive financial statements, sales analysis, and business growth metrics.
            </p>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Real-World Example</h2>

        <div className="border rounded p-4 mb-6 text-xs italic bg-gray-50">
          <p>
            "At the end of each month, the manager of Elegant Tailors generates a comprehensive performance report. The
            report shows that custom suit sales have increased by 15% compared to the previous month, while fabric sales
            have remained stable. The report identifies that Hassan has the highest sales conversion rate among staff,
            but Omar completes orders most efficiently. It also highlights that navy blue wool is the top-selling
            fabric, but stock is running low. Based on these insights, the manager decides to reorder navy wool,
            schedule a training session where Hassan shares his sales techniques with the team, and optimize production
            scheduling to leverage Omar's efficiency. The report also shows that Thursday evenings have the highest foot
            traffic but lowest conversion rate, prompting a decision to add an additional experienced sales associate
            during that time slot."
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 my-6 text-xs">
          <h3 className="text-sm font-medium text-blue-700 mb-1">Pro Tips</h3>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Create dashboard shortcuts for your most frequently used reports</li>
            <li>• Set up automated email delivery of key reports to stakeholders</li>
            <li>• Use comparison reports to track progress against goals</li>
            <li>• Combine multiple report types for comprehensive business reviews</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
