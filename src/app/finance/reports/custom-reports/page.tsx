import { DocsPagination } from "@/components/docs-pagination"

export default function CustomReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Custom Reports</h1>
        <p className="text-lg text-muted-foreground mt-2">Creating tailored financial reports for your business</p>
      </div>

      <div className="space-y-4">
        <p>
          While standard reports provide essential financial information, custom reports allow you to create specialized
          reports that address your tailoring business's unique needs. Custom reports help you gain deeper insights into
          specific aspects of your business.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Benefits of Custom Reports
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Focused Analysis</h3>
            <p className="text-sm mt-2">
              Create reports that focus on specific aspects of your business, such as profitability by garment type or
              fabric usage efficiency.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Tailored Metrics</h3>
            <p className="text-sm mt-2">
              Include the exact metrics and KPIs that matter most to your tailoring business, such as average revenue
              per customer or material cost percentage.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Custom Comparisons</h3>
            <p className="text-sm mt-2">
              Compare performance across different time periods, locations, or service types to identify trends and
              opportunities.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Specialized Formats</h3>
            <p className="text-sm mt-2">
              Present data in the most meaningful format for your needs, whether that's detailed tables, visual charts,
              or executive summaries.
            </p>
          </div>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Creating a Custom Report
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Steps to Create a Custom Report</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Reports &gt; Custom Reports</li>
          <li>Click "Create New Report"</li>
          <li>Enter a name for your report</li>
          <li>Select the report type (financial, sales, expense, etc.)</li>
          <li>Choose the data sources (accounts, transactions, customers, etc.)</li>
          <li>Select the columns to include in your report</li>
          <li>Set up filters to focus on specific data</li>
          <li>Choose sorting options</li>
          <li>Select grouping and subtotal options</li>
          <li>Choose the visual elements (charts, graphs, tables)</li>
          <li>Preview your report</li>
          <li>Save the report for future use</li>
        </ol>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Custom Report Examples for Tailoring Businesses
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Fabric Utilization Report</h3>

        <p className="mt-2">
          This report helps you track how efficiently you're using fabric, which is often one of the largest expenses
          for a tailoring business.
        </p>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Key Components</h3>
          <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
            <li>Fabric purchases by type and supplier</li>
            <li>Fabric used in completed projects</li>
            <li>Fabric waste percentage</li>
            <li>Cost per meter utilized</li>
            <li>Comparison of actual usage vs. estimated usage</li>
          </ul>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Service Profitability Report</h3>

        <p className="mt-2">
          This report breaks down the profitability of different services you offer, helping you focus on the most
          lucrative aspects of your business.
        </p>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Key Components</h3>
          <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
            <li>Revenue by service type</li>
            <li>Direct costs (materials, labor) by service type</li>
            <li>Gross profit margin by service type</li>
            <li>Average time spent per service</li>
            <li>Profit per hour by service type</li>
          </ul>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Customer Value Report</h3>

        <p className="mt-2">
          This report helps you identify your most valuable customers based on various metrics, not just total spending.
        </p>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Key Components</h3>
          <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
            <li>Total revenue by customer</li>
            <li>Number of orders/services by customer</li>
            <li>Average order value</li>
            <li>Profit margin by customer</li>
            <li>Referrals generated by customer</li>
            <li>Payment promptness (average days to pay)</li>
          </ul>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Seasonal Trends Report</h3>

        <p className="mt-2">
          This report helps you identify seasonal patterns in your business, allowing you to better prepare for busy and
          slow periods.
        </p>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Key Components</h3>
          <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
            <li>Monthly revenue comparison across years</li>
            <li>Service type demand by month</li>
            <li>Staffing levels vs. demand</li>
            <li>Inventory needs by season</li>
            <li>Profit margin fluctuations by season</li>
          </ul>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Scheduling and Sharing Reports
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Automated Report Scheduling</h3>

        <p className="mt-2">
          Once you've created a custom report, you can schedule it to run automatically at regular intervals:
        </p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Reports &gt; Custom Reports</li>
          <li>Select the report you want to schedule</li>
          <li>Click "Schedule Report"</li>
          <li>Choose the frequency (daily, weekly, monthly, quarterly)</li>
          <li>Set the delivery method (email, dashboard, saved file)</li>
          <li>Select recipients if sending by email</li>
          <li>Click "Save Schedule"</li>
        </ol>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Sharing Reports</h3>

        <p className="mt-2">You can share reports with team members, partners, or advisors:</p>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <span className="font-medium">Email:</span> Send reports directly via email in PDF, Excel, or CSV format
          </li>
          <li>
            <span className="font-medium">Export:</span> Download reports in various formats for sharing or further
            analysis
          </li>
          <li>
            <span className="font-medium">Print:</span> Generate printer-friendly versions of reports
          </li>
          <li>
            <span className="font-medium">Dashboard Sharing:</span> Give specific users access to view reports in their
            dashboard
          </li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Advanced Report Features
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Drill-Down Capability</h3>
            <p className="text-sm mt-2">
              Click on summary figures to see the detailed transactions that make up that number. For example, click on
              "Total Fabric Expenses" to see a list of all fabric purchases.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Conditional Formatting</h3>
            <p className="text-sm mt-2">
              Set up visual cues like color coding to highlight important information. For example, highlight profit
              margins below 30% in red or customer balances over 60 days in orange.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Calculated Fields</h3>
            <p className="text-sm mt-2">
              Create custom calculations based on your data. For example, calculate "Revenue per Employee" or "Material
              Cost as Percentage of Revenue."
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Interactive Dashboards</h3>
            <p className="text-sm mt-2">
              Combine multiple reports into interactive dashboards with filters and controls that allow users to explore
              the data from different angles.
            </p>
          </div>
        </div>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h3 className="font-medium">Real-World Example</h3>
          <p className="text-sm mt-2 italic">
            "Mohammed runs a tailoring business that specializes in both traditional and modern clothing. He created a
            custom 'Service Profitability Report' that breaks down his revenue, costs, and profit margins by garment
            type. The report revealed that while traditional wedding attire generated the highest total revenue,
            business suits actually had a higher profit margin due to lower fabric costs and faster production time.
            Based on this insight, Mohammed adjusted his marketing to attract more business suit customers while also
            slightly increasing prices on wedding attire to improve margins. He scheduled this report to run
            automatically at the end of each month and shared it with his production manager to help with staffing and
            inventory planning. After six months of using this custom report to guide business decisions, Mohammed saw
            his overall profit margin increase by 12%."
          </p>
        </div>
      </div>

      <DocsPagination
        prev={{
          title: "Standard Reports",
          href: "/finance/reports/standard-reports",
        }}
        next={{
          title: "Budgeting",
          href: "/finance/budgeting",
        }}
      />
    </div>
  )
}
