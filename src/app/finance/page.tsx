import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DocsPagination } from "@/components/docs-pagination"

export default function FinanceDocsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Finance Module</h1>
        <p className="text-lg text-muted-foreground mt-2">Complete financial management for your tailoring business</p>
      </div>

      <div className="space-y-4">
        <p>
          The Finance Module is the financial backbone of your tailoring business. It provides all the tools you need to
          manage your accounting, track cash flow, handle invoicing, monitor expenses, and generate financial reports.
          With proper financial management, you can make informed decisions, ensure compliance with tax regulations, and
          maintain a healthy business.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Key Financial Areas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Accounting</CardTitle>
              <CardDescription>Foundation of financial management</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>Chart of Accounts customized for tailoring</li>
                <li>Double-entry accounting system</li>
                <li>Journal entries for accurate record-keeping</li>
                <li>Account reconciliation</li>
                <li>Financial statements generation</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3">
                <strong>Benefits:</strong> Accurate financial records, compliance with accounting standards, and clear
                visibility into your business finances.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Cash Flow Management</CardTitle>
              <CardDescription>Monitor money moving in and out</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>Bank account tracking and reconciliation</li>
                <li>Cash flow forecasting</li>
                <li>Payment tracking and reminders</li>
                <li>Expense management</li>
                <li>Multi-currency support</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3">
                <strong>Benefits:</strong> Prevent cash shortages, plan for large purchases, and ensure you can always
                meet your financial obligations.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Sales & Receivables</CardTitle>
              <CardDescription>Manage customer payments</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>Professional invoice creation</li>
                <li>Customer payment tracking</li>
                <li>Accounts receivable aging</li>
                <li>Payment reminders and follow-ups</li>
                <li>Sales tax management</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3">
                <strong>Benefits:</strong> Faster payments, better customer relationships, and improved cash flow from
                your tailoring services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Purchases & Payables</CardTitle>
              <CardDescription>Track supplier payments</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>Expense tracking by category</li>
                <li>Supplier management</li>
                <li>Purchase order tracking</li>
                <li>Bill payment scheduling</li>
                <li>Expense approval workflows</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3">
                <strong>Benefits:</strong> Control costs, maintain good supplier relationships, and avoid late payment
                penalties.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Financial Reporting</CardTitle>
              <CardDescription>Insights for decision-making</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>Income statements (profit & loss)</li>
                <li>Balance sheets</li>
                <li>Cash flow statements</li>
                <li>Tax reports</li>
                <li>Custom financial reports</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3">
                <strong>Benefits:</strong> Make informed business decisions, identify trends, and prepare for tax
                filing.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Budgeting & Forecasting</CardTitle>
              <CardDescription>Plan for the future</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>Budget creation and tracking</li>
                <li>Variance analysis</li>
                <li>Financial projections</li>
                <li>Scenario planning</li>
                <li>Budget vs. actual reporting</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3">
                <strong>Benefits:</strong> Set financial goals, plan for growth, and anticipate potential challenges.
              </p>
            </CardContent>
          </Card>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          How Finance Supports Your Tailoring Business
        </h2>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Pricing Strategy</h3>
          <p className="text-base mt-2">
            Track the cost of materials, labor, and overhead to ensure your pricing for custom garments and alterations
            is profitable. Analyze which services generate the highest margins to focus your marketing efforts.
          </p>
        </div>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Inventory Management</h3>
          <p className="text-base mt-2">
            Monitor the value of your fabric inventory, track fabric costs by supplier, and identify which materials
            offer the best value. Reduce waste by tracking material usage and identifying inefficiencies.
          </p>
        </div>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Business Growth</h3>
          <p className="text-base mt-2">
            Use financial reports to identify growth opportunities, determine when to hire additional tailors, and
            decide if expanding to a new location is financially viable. Track the return on investment for new
            equipment purchases.
          </p>
        </div>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Tax Compliance</h3>
          <p className="text-base mt-2">
            Keep accurate records for VAT/sales tax, income tax, and payroll tax. Generate tax reports and ensure you
            have the documentation needed for tax filing and potential audits.
          </p>
        </div>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h3 className="font-medium">Real-World Example</h3>
          <p className="text-base mt-2 italic">
            "Fatima runs a growing tailoring business with five employees. Each morning, she reviews her Finance
            Dashboard to check cash flow and outstanding invoices. When clients pick up their custom garments, she
            creates professional invoices on the spot. At month-end, she reconciles her accounts, reviews her profit
            margins by service type, and adjusts her pricing strategy accordingly. Before tax season, she generates
            comprehensive reports for her accountant. When considering purchasing a new industrial sewing machine, she
            uses the budgeting tools to determine if it's a wise investment. The Finance Module has transformed her
            business from guesswork to data-driven decision making."
          </p>
        </div>
      </div>

      <DocsPagination
        next={{
          title: "Dashboard",
          href: "/finance/dashboard",
        }}
      />
    </div>
  )
}
