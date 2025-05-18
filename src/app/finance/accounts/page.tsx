import { Card, CardContent } from "@/components/ui/card"
import { DocsPagination } from "@/components/docs-pagination"

export default function FinanceAccountsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Chart of Accounts</h1>
        <p className="text-lg text-muted-foreground mt-2">Organizing your financial records</p>
      </div>

      <div className="space-y-4">
        <p>
          Your Chart of Accounts is like a filing system for all your financial transactions. It helps you categorize
          income, expenses, assets, and liabilities so you can track your tailoring business finances effectively.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Account Types</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-3">Basic Account Types</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Assets (1000-1999)</span>
                  <span className="text-sm text-muted-foreground">What your business owns</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Liabilities (2000-2999)</span>
                  <span className="text-sm text-muted-foreground">What your business owes</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Equity (3000-3999)</span>
                  <span className="text-sm text-muted-foreground">Owner's stake in the business</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Revenue (4000-4999)</span>
                  <span className="text-sm text-muted-foreground">Money earned from services/sales</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Expenses (5000-6999)</span>
                  <span className="text-sm text-muted-foreground">Costs of running your business</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-3">Tailoring-Specific Accounts</h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">1200 - Fabric Inventory</span>
                  <span className="text-sm text-muted-foreground">Asset</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">4100 - Custom Tailoring Revenue</span>
                  <span className="text-sm text-muted-foreground">Revenue</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">4200 - Alterations Revenue</span>
                  <span className="text-sm text-muted-foreground">Revenue</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">5100 - Fabric Costs</span>
                  <span className="text-sm text-muted-foreground">Expense</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">6100 - Tailor Wages</span>
                  <span className="text-sm text-muted-foreground">Expense</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Creating and Managing Accounts
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Creating a New Account</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance {">"} Accounts</li>
          <li>Click the "Add Account" button</li>
          <li>Enter an account number (following the numbering system)</li>
          <li>Enter an account name</li>
          <li>Select the account type and subtype</li>
          <li>Add a description (optional)</li>
          <li>Click "Create Account"</li>
        </ol>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Viewing Your Accounts</h3>

        <p className="mt-2">You can view your accounts in different formats:</p>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <span className="font-medium">Table View:</span> A list of all accounts with their balances
          </li>
          <li>
            <span className="font-medium">Tree View:</span> A hierarchical view showing the account structure
          </li>
          <li>
            <span className="font-medium">Kanban View:</span> Accounts organized by type in columns
          </li>
        </ul>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h3 className="font-medium">Real-World Example</h3>
          <p className="text-sm mt-2 italic">
            "Mohammed runs a tailoring shop specializing in traditional clothing. He needs to track his expensive sewing
            machines separately from his other equipment. He goes to Finance {">"} Accounts and clicks 'Add Account'. He
            creates account number 1510 named 'Sewing Machines' with type 'Asset' and subtype 'Fixed Asset'. He enters
            the total value of his machines as the opening balance. Now when he buys a new machine, he can record it
            against this specific account, making it easier to track the value of his specialized equipment over time."
          </p>
        </div>
      </div>

      <DocsPagination
        prev={{
          title: "Dashboard",
          href: "/finance/dashboard",
        }}
        next={{
          title: "Banking",
          href: "/finance/banking",
        }}
      />
    </div>
  )
}
