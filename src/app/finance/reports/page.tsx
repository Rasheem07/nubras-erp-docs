import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DocsPagination } from "@/components/docs-pagination"

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Financial Reports</h1>
        <p className="text-lg text-muted-foreground mt-2">Gaining insights from your financial data</p>
      </div>

      <div className="space-y-4">
        <p>
          Financial reports transform your raw financial data into meaningful insights that help you make informed
          business decisions. The Finance Module offers a comprehensive suite of reports designed specifically for
          tailoring businesses.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Types of Financial Reports
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>
                <a href="/finance/reports/standard-reports" className="hover:underline">
                  Standard Reports
                </a>
              </CardTitle>
              <CardDescription>Essential financial statements</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>Income Statement (Profit & Loss)</li>
                <li>Balance Sheet</li>
                <li>Cash Flow Statement</li>
                <li>Accounts Receivable Aging</li>
                <li>Sales and Revenue Reports</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3">
                These reports provide the foundation for understanding your financial position and performance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>
                <a href="/finance/reports/custom-reports" className="hover:underline">
                  Custom Reports
                </a>
              </CardTitle>
              <CardDescription>Tailored to your specific needs</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>Fabric Utilization Report</li>
                <li>Service Profitability Report</li>
                <li>Customer Value Report</li>
                <li>Seasonal Trends Report</li>
                <li>Custom Financial Dashboards</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3">
                Create specialized reports that address your tailoring business's unique requirements.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Tax Reports</CardTitle>
              <CardDescription>Simplify tax compliance</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>VAT/Sales Tax Reports</li>
                <li>Income Tax Summary</li>
                <li>Payroll Tax Reports</li>
                <li>Tax Liability Tracking</li>
                <li>Tax Payment History</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3">
                Generate accurate reports for tax filing and maintain compliance with tax regulations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Management Reports</CardTitle>
              <CardDescription>Insights for decision-making</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>Budget vs. Actual Analysis</li>
                <li>Key Performance Indicators</li>
                <li>Trend Analysis</li>
                <li>Forecasting Reports</li>
                <li>Business Health Snapshots</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3">
                Get the insights you need to make strategic decisions and grow your tailoring business.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Accessing Reports</h2>

        <p className="mt-4">There are several ways to access reports in the Finance Module:</p>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <span className="font-medium">Reports Menu:</span> Go to Finance &gt; Reports to see all available reports
          </li>
          <li>
            <span className="font-medium">Dashboard Widgets:</span> Add key reports to your dashboard for quick access
          </li>
          <li>
            <span className="font-medium">Scheduled Reports:</span> Set up reports to be automatically generated and
            emailed
          </li>
          <li>
            <span className="font-medium">Mobile App:</span> View essential reports on the go from your mobile device
          </li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Report Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Filtering</h3>
            <p className="text-base mt-2">
              Narrow down report data by date range, customer, service type, payment status, and more to focus on
              specific aspects of your business.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Visualization</h3>
            <p className="text-base mt-2">
              View data in various formats including tables, charts, and graphs to better understand trends and patterns
              in your financial data.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Exporting</h3>
            <p className="text-base mt-2">
              Export reports in multiple formats (PDF, Excel, CSV) for sharing with team members, accountants, or for
              further analysis.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Drill-Down</h3>
            <p className="text-base mt-2">
              Click on summary figures to see the detailed transactions behind them, allowing you to investigate
              specific areas of interest.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Comparisons</h3>
            <p className="text-base mt-2">
              Compare current performance with previous periods, budgets, or industry benchmarks to gauge your progress
              and identify areas for improvement.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Scheduling</h3>
            <p className="text-base mt-2">
              Set up reports to run automatically at regular intervals and be delivered to specified recipients,
              ensuring everyone has the information they need.
            </p>
          </div>
        </div>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h3 className="font-medium">Real-World Example</h3>
          <p className="text-base mt-2 italic">
            "Noor runs a tailoring business specializing in both traditional and modern clothing. Every Monday morning,
            she reviews her weekly sales report, which breaks down revenue by service type. She noticed that while
            traditional garments generated more total revenue, modern business attire had a higher profit margin. She
            created a custom Service Profitability Report that showed not just revenue but also the associated costs and
            profit margins for each service type. This report revealed that rush alteration services, while seemingly
            profitable due to the premium pricing, actually had lower margins when accounting for the disruption to
            workflow and overtime costs. Based on these insights, Noor adjusted her pricing strategy and staff
            scheduling, resulting in a 15% increase in overall profitability within three months. She now considers her
            financial reports to be the most valuable tool for making business decisions."
          </p>
        </div>
      </div>

      <DocsPagination
        prev={{
          title: "Journal Entries",
          href: "/finance/transactions/journal-entries",
        }}
        next={{
          title: "Standard Reports",
          href: "/finance/reports/standard-reports",
        }}
      />
    </div>
  )
}
