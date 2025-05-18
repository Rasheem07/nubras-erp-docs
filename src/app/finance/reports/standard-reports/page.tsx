import { DocsPagination } from "@/components/docs-pagination"

export default function StandardReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Standard Financial Reports</h1>
        <p className="text-lg text-muted-foreground mt-2">Essential reports for your tailoring business</p>
      </div>

      <div className="space-y-4">
        <p>
          Standard financial reports provide critical insights into your tailoring business's financial health and
          performance. These reports help you make informed decisions, monitor your progress, and prepare for tax
          filing.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Core Financial Reports</h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Income Statement (Profit & Loss)</h3>

        <p className="mt-2">
          The Income Statement shows your revenue, expenses, and profit or loss over a specific period. It answers the
          question: "Is my tailoring business profitable?"
        </p>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Key Components</h3>
          <ul className="list-disc list-inside space-y-1 mt-2 text-base">
            <li>
              <span className="font-medium">Revenue:</span> Income from tailoring services, alterations, fabric sales,
              etc.
            </li>
            <li>
              <span className="font-medium">Cost of Goods Sold:</span> Direct costs like fabric, thread, and other
              materials
            </li>
            <li>
              <span className="font-medium">Gross Profit:</span> Revenue minus Cost of Goods Sold
            </li>
            <li>
              <span className="font-medium">Operating Expenses:</span> Rent, utilities, wages, marketing, etc.
            </li>
            <li>
              <span className="font-medium">Net Profit/Loss:</span> Gross Profit minus Operating Expenses
            </li>
          </ul>
        </div>

        <p className="mt-4">To generate an Income Statement:</p>

        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Go to Finance &gt; Reports</li>
          <li>Select "Income Statement"</li>
          <li>Choose the date range (month, quarter, year)</li>
          <li>Select comparison period if desired (e.g., same period last year)</li>
          <li>Click "Generate Report"</li>
        </ol>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Balance Sheet</h3>

        <p className="mt-2">
          The Balance Sheet provides a snapshot of your tailoring business's financial position at a specific point in
          time. It shows what you own (assets), what you owe (liabilities), and the difference (equity).
        </p>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Key Components</h3>
          <ul className="list-disc list-inside space-y-1 mt-2 text-base">
            <li>
              <span className="font-medium">Assets:</span> Cash, accounts receivable, inventory, equipment, etc.
            </li>
            <li>
              <span className="font-medium">Liabilities:</span> Accounts payable, loans, credit card debt, etc.
            </li>
            <li>
              <span className="font-medium">Equity:</span> Owner's investment plus accumulated profits/losses
            </li>
          </ul>
          <p className="text-xs mt-2">
            <strong>Remember:</strong> Assets = Liabilities + Equity
          </p>
        </div>

        <p className="mt-4">To generate a Balance Sheet:</p>

        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Go to Finance &gt; Reports</li>
          <li>Select "Balance Sheet"</li>
          <li>Choose the date (typically the end of a month, quarter, or year)</li>
          <li>Select comparison date if desired</li>
          <li>Click "Generate Report"</li>
        </ol>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Cash Flow Statement</h3>

        <p className="mt-2">
          The Cash Flow Statement shows how cash moved in and out of your tailoring business during a specific period.
          It helps you understand if you're generating enough cash to operate and grow.
        </p>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Key Components</h3>
          <ul className="list-disc list-inside space-y-1 mt-2 text-base">
            <li>
              <span className="font-medium">Operating Activities:</span> Cash from day-to-day business operations
            </li>
            <li>
              <span className="font-medium">Investing Activities:</span> Cash used for purchasing equipment or other
              long-term assets
            </li>
            <li>
              <span className="font-medium">Financing Activities:</span> Cash from loans, owner contributions, or
              repayments
            </li>
            <li>
              <span className="font-medium">Net Cash Flow:</span> The overall increase or decrease in cash
            </li>
          </ul>
        </div>

        <p className="mt-4">To generate a Cash Flow Statement:</p>

        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Go to Finance &gt; Reports</li>
          <li>Select "Cash Flow Statement"</li>
          <li>Choose the date range</li>
          <li>Select comparison period if desired</li>
          <li>Click "Generate Report"</li>
        </ol>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Accounts Receivable Reports
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Accounts Receivable Aging</h3>

        <p className="mt-2">
          This report shows outstanding customer invoices grouped by how long they've been unpaid. It helps you identify
          overdue payments and manage your collections.
        </p>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Aging Categories</h3>
          <ul className="list-disc list-inside space-y-1 mt-2 text-base">
            <li>Current (not yet due)</li>
            <li>1-30 days overdue</li>
            <li>31-60 days overdue</li>
            <li>61-90 days overdue</li>
            <li>Over 90 days overdue</li>
          </ul>
        </div>

        <p className="mt-4">To generate an Accounts Receivable Aging report:</p>

        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Go to Finance &gt; Reports</li>
          <li>Select "Accounts Receivable Aging"</li>
          <li>Choose the date (typically the current date)</li>
          <li>Click "Generate Report"</li>
        </ol>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Customer Statements</h3>

        <p className="mt-2">
          Customer statements show all transactions with a specific customer over a period, including invoices,
          payments, and current balance. These can be sent to customers as reminders.
        </p>

        <p className="mt-4">To generate Customer Statements:</p>

        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Go to Finance &gt; Reports</li>
          <li>Select "Customer Statements"</li>
          <li>Choose the date range</li>
          <li>Select specific customers or generate for all</li>
          <li>Click "Generate Statements"</li>
          <li>Optionally, click "Email Statements" to send them directly to customers</li>
        </ol>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Sales and Revenue Reports
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Sales by Service Type</h3>

        <p className="mt-2">
          This report breaks down your revenue by different service categories, helping you identify your most
          profitable services.
        </p>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Common Service Categories for Tailoring</h3>
          <ul className="list-disc list-inside space-y-1 mt-2 text-base">
            <li>Custom garment creation</li>
            <li>Alterations and repairs</li>
            <li>Wedding and formal wear</li>
            <li>Fabric sales</li>
            <li>Accessories and embellishments</li>
          </ul>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Sales by Customer</h3>

        <p className="mt-2">
          This report shows your revenue organized by customer, helping you identify your most valuable clients.
        </p>

        <p className="mt-4">To generate Sales Reports:</p>

        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Go to Finance &gt; Reports</li>
          <li>Select "Sales Reports"</li>
          <li>Choose the report type (by Service, by Customer, etc.)</li>
          <li>Select the date range</li>
          <li>Click "Generate Report"</li>
        </ol>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Expense Reports</h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Expenses by Category</h3>

        <p className="mt-2">
          This report shows your expenses organized by category, helping you understand where your money is going.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Expenses by Vendor</h3>

        <p className="mt-2">
          This report shows your expenses organized by vendor, helping you identify your major suppliers and potential
          areas for negotiation.
        </p>

        <p className="mt-4">To generate Expense Reports:</p>

        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Go to Finance &gt; Reports</li>
          <li>Select "Expense Reports"</li>
          <li>Choose the report type (by Category, by Vendor, etc.)</li>
          <li>Select the date range</li>
          <li>Click "Generate Report"</li>
        </ol>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Tax Reports</h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">VAT/Sales Tax Report</h3>

        <p className="mt-2">
          This report summarizes the VAT or sales tax collected and paid during a specific period, helping you prepare
          your tax filings.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Tax Summary</h3>

        <p className="mt-2">
          This report provides an overview of all tax-related transactions, including VAT, income tax, and payroll
          taxes.
        </p>

        <p className="mt-4">To generate Tax Reports:</p>

        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>Go to Finance &gt; Reports</li>
          <li>Select "Tax Reports"</li>
          <li>Choose the report type (VAT, Tax Summary, etc.)</li>
          <li>Select the tax period</li>
          <li>Click "Generate Report"</li>
        </ol>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Using Reports Effectively
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Regular Review Schedule</h3>
            <ul className="list-disc list-inside space-y-1 mt-2 text-base">
              <li>
                <span className="font-medium">Daily:</span> Check cash position and sales
              </li>
              <li>
                <span className="font-medium">Weekly:</span> Review accounts receivable and upcoming expenses
              </li>
              <li>
                <span className="font-medium">Monthly:</span> Review income statement and balance sheet
              </li>
              <li>
                <span className="font-medium">Quarterly:</span> Analyze trends and compare to previous periods
              </li>
              <li>
                <span className="font-medium">Annually:</span> Comprehensive review of all financial reports
              </li>
            </ul>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Report Customization</h3>
            <p className="text-base mt-2">
              The Finance Module allows you to customize reports to focus on the information most relevant to your
              tailoring business:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-xs">
              <li>Filter by date range, customer, or service type</li>
              <li>Compare current period to previous periods</li>
              <li>Show percentages and ratios</li>
              <li>Include or exclude certain accounts</li>
              <li>Save custom report settings for future use</li>
            </ul>
          </div>
        </div>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h3 className="font-medium">Real-World Example</h3>
          <p className="text-base mt-2 italic">
            "Aisha runs a tailoring business specializing in traditional and modern clothing. At the end of each month,
            she generates an Income Statement to review her profitability. She noticed that while her overall revenue
            was increasing, her profit margin was decreasing. By drilling down into her Cost of Goods Sold, she
            discovered that the cost of premium fabrics had increased significantly. She also ran a Sales by Service
            Type report and found that her most profitable service was wedding attire customization. Based on these
            insights, she adjusted her pricing for premium fabric garments and focused her marketing efforts on wedding
            attire. After three months, her profit margin improved by 8%, demonstrating the power of regular financial
            reporting and analysis."
          </p>
        </div>
      </div>

      <DocsPagination
        prev={{
          title: "Reports",
          href: "/finance/reports",
        }}
        next={{
          title: "Custom Reports",
          href: "/finance/reports/custom-reports",
        }}
      />
    </div>
  )
}
