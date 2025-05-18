import { Card, CardContent } from "@/components/ui/card"
import { DocsPagination } from "@/components/docs-pagination"

export default function FinanceDashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Finance Dashboard</h1>
        <p className="text-lg text-muted-foreground mt-2">Your financial command center</p>
      </div>

      <div className="space-y-4">
        <p>
          The Finance Dashboard gives you a quick overview of your tailoring business's financial health. At a glance,
          you can see your cash position, outstanding invoices, recent transactions, and key performance metrics.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Key Dashboard Elements</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-3">Financial Metrics</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Cash Position</span>
                  <span className="text-base text-muted-foreground">Total of all bank and cash accounts</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Accounts Receivable</span>
                  <span className="text-base text-muted-foreground">Total outstanding customer invoices</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Accounts Payable</span>
                  <span className="text-base text-muted-foreground">Total outstanding supplier bills</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Monthly Revenue</span>
                  <span className="text-base text-muted-foreground">Current month's total income</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Monthly Expenses</span>
                  <span className="text-base text-muted-foreground">Current month's total expenses</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-3">Visual Reports</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Cash Flow Chart</span>
                  <span className="text-base text-muted-foreground">Money in vs. money out</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Revenue Breakdown</span>
                  <span className="text-base text-muted-foreground">Income by service type</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Expense Categories</span>
                  <span className="text-base text-muted-foreground">Where your money is going</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Receivables Aging</span>
                  <span className="text-base text-muted-foreground">Overdue invoice analysis</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Monthly Comparison</span>
                  <span className="text-base text-muted-foreground">This month vs. last month</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Dashboard Actions</h2>

        <p>From the dashboard, you can quickly perform common financial tasks:</p>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>Create a new invoice</li>
          <li>Record an expense</li>
          <li>Add a payment</li>
          <li>Reconcile accounts</li>
          <li>Generate reports</li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Using Your Dashboard Effectively
        </h2>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Daily Use</h3>
          <p className="text-base mt-2">
            Check your cash position and any overdue invoices. Review recent transactions to stay on top of your daily
            finances.
          </p>
        </div>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Weekly Review</h3>
          <p className="text-base mt-2">
            Analyze your revenue vs. expenses chart to see how your week performed. Look for any unusual patterns or
            transactions.
          </p>
        </div>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Monthly Analysis</h3>
          <p className="text-base mt-2">
            Compare this month to previous months. Review your expense breakdown to identify cost-saving opportunities.
          </p>
        </div>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h3 className="font-medium">Real-World Example</h3>
          <p className="text-base mt-2 italic">
            "Fatima runs a tailoring business specializing in wedding attire. Every Monday morning, she reviews her
            Finance Dashboard to plan her week. She notices her Accounts Receivable has increased, so she clicks on the
            Receivables Aging chart to see which invoices are overdue. She identifies three wedding dress alterations
            that haven't been paid and makes a note to follow up with those customers. She also notices from the Revenue
            Breakdown chart that bridal alterations are generating more profit than custom suits this month, which helps
            her decide to run a promotion for men's formal wear to boost that service line."
          </p>
        </div>
      </div>

      <DocsPagination
        prev={{
          title: "Getting Started",
          href: "/finance",
        }}
        next={{
          title: "Accounts",
          href: "/finance/accounts",
        }}
      />
    </div>
  )
}
