import { Card, CardContent } from "@/components/ui/card"
import { DocsPagination } from "@/components/docs-pagination"

export default function ChartOfAccountsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Chart of Accounts</h1>
        <p className="text-lg text-muted-foreground mt-2">The foundation of your accounting system</p>
      </div>

      <div className="space-y-4">
        <p>
          The Chart of Accounts is the organizational framework for your entire accounting system. It's a complete
          listing of every account in your general ledger, systematically arranged to make recording transactions and
          generating financial reports easier.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Understanding Account Types
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-3">Asset Accounts (1000-1999)</h3>
              <p className="text-sm mb-3">
                Assets are resources your tailoring business owns that have economic value.
              </p>
              <ul className="space-y-3">
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">1000-1099: Cash & Bank</span>
                  <span className="text-sm text-muted-foreground">Checking, savings, petty cash</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">1100-1199: Accounts Receivable</span>
                  <span className="text-sm text-muted-foreground">Money owed by customers</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">1200-1299: Inventory</span>
                  <span className="text-sm text-muted-foreground">Fabric, thread, buttons, etc.</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">1300-1399: Prepaid Expenses</span>
                  <span className="text-sm text-muted-foreground">Rent, insurance paid in advance</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">1400-1699: Fixed Assets</span>
                  <span className="text-sm text-muted-foreground">Sewing machines, equipment</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-3">Liability Accounts (2000-2999)</h3>
              <p className="text-sm mb-3">Liabilities are what your tailoring business owes to others.</p>
              <ul className="space-y-3">
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">2000-2099: Accounts Payable</span>
                  <span className="text-sm text-muted-foreground">Money owed to suppliers</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">2100-2199: Credit Cards</span>
                  <span className="text-sm text-muted-foreground">Business credit card balances</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">2200-2299: Payroll Liabilities</span>
                  <span className="text-sm text-muted-foreground">Wages, taxes owed</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">2300-2399: Tax Liabilities</span>
                  <span className="text-sm text-muted-foreground">VAT, income tax owed</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">2400-2699: Loans</span>
                  <span className="text-sm text-muted-foreground">Bank loans, equipment financing</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-3">Equity Accounts (3000-3999)</h3>
              <p className="text-sm mb-3">Equity represents the owner's interest in the business.</p>
              <ul className="space-y-3">
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">3000-3099: Owner's Capital</span>
                  <span className="text-sm text-muted-foreground">Owner's investment</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">3100-3199: Owner's Drawings</span>
                  <span className="text-sm text-muted-foreground">Owner's withdrawals</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">3900-3999: Retained Earnings</span>
                  <span className="text-sm text-muted-foreground">Accumulated profits</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-3">Revenue Accounts (4000-4999)</h3>
              <p className="text-sm mb-3">Revenue is the income earned from your tailoring services and products.</p>
              <ul className="space-y-3">
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">4000-4099: Custom Tailoring</span>
                  <span className="text-sm text-muted-foreground">Made-to-measure garments</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">4100-4199: Alterations</span>
                  <span className="text-sm text-muted-foreground">Garment modifications</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">4200-4299: Fabric Sales</span>
                  <span className="text-sm text-muted-foreground">Retail fabric revenue</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">4300-4399: Accessories</span>
                  <span className="text-sm text-muted-foreground">Buttons, zippers, etc.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-3">Expense Accounts (5000-6999)</h3>
              <p className="text-sm mb-3">Expenses are the costs incurred to run your tailoring business.</p>
              <ul className="space-y-3">
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">5000-5099: Cost of Goods Sold</span>
                  <span className="text-sm text-muted-foreground">Fabric, thread, materials</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">5100-5199: Wages & Salaries</span>
                  <span className="text-sm text-muted-foreground">Tailor and staff wages</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">5200-5299: Rent & Utilities</span>
                  <span className="text-sm text-muted-foreground">Shop rent, electricity, water</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">5300-5399: Equipment</span>
                  <span className="text-sm text-muted-foreground">Maintenance, small tools</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">5400-5499: Marketing</span>
                  <span className="text-sm text-muted-foreground">Advertising, promotions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Benefits of a Well-Structured Chart of Accounts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Accurate Financial Reporting</h3>
            <p className="text-sm mt-2">
              A properly organized chart of accounts ensures your financial statements are accurate and meaningful.
              You'll be able to see exactly where your money is coming from and where it's going.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Simplified Tax Preparation</h3>
            <p className="text-sm mt-2">
              When tax time comes, a well-structured chart of accounts makes it easier to prepare your tax returns.
              You'll have all the necessary categories already organized.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Better Business Insights</h3>
            <p className="text-sm mt-2">
              With detailed account categories, you can analyze which services are most profitable, which expenses are
              increasing, and where you might need to make adjustments.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Easier Budgeting</h3>
            <p className="text-sm mt-2">
              A detailed chart of accounts makes it easier to create and track budgets. You can set targets for specific
              revenue and expense categories and monitor your progress.
            </p>
          </div>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Setting Up Your Chart of Accounts
        </h2>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Accounts &gt; Chart of Accounts</li>
          <li>Review the default accounts provided</li>
          <li>Add new accounts specific to your tailoring business</li>
          <li>Organize accounts in a logical structure</li>
          <li>Assign appropriate account numbers</li>
          <li>Add descriptions to clarify the purpose of each account</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h3 className="font-medium">Real-World Example</h3>
          <p className="text-sm mt-2 italic">
            "Ahmed runs a tailoring shop specializing in traditional and modern clothing. When setting up his chart of
            accounts, he created specific revenue accounts for different services: 4010 for Traditional Garments, 4020
            for Western Suits, 4030 for Wedding Attire, and 4040 for Basic Alterations. On the expense side, he created
            detailed accounts for different fabric types: 5010 for Silk, 5020 for Cotton, 5030 for Wool, and 5040 for
            Synthetic Materials. This detailed structure allows him to see which garment types generate the most profit
            and which materials cost the most, helping him make strategic decisions about which services to promote and
            which suppliers to negotiate with."
          </p>
        </div>
      </div>

      <DocsPagination
        prev={{
          title: "Accounts",
          href: "/finance/accounts",
        }}
        next={{
          title: "Account Structure",
          href: "/finance/accounts/account-structure",
        }}
      />
    </div>
  )
}
