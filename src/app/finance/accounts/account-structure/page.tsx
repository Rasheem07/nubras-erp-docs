import { DocsPagination } from "@/components/docs-pagination"

export default function AccountStructurePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Account Structure</h1>
        <p className="text-lg text-muted-foreground mt-2">Organizing your accounts hierarchically</p>
      </div>

      <div className="space-y-4">
        <p>
          Account Structure refers to how your accounts are organized hierarchically. A well-designed account structure
          makes it easier to navigate your chart of accounts, generate meaningful reports, and understand your financial
          position at different levels of detail.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Hierarchical Account Structure
        </h2>

        <p className="mt-4">
          In the Finance Module, accounts can be organized in a parent-child relationship, creating a tree-like
          structure. This allows you to:
        </p>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>Group related accounts together</li>
          <li>Create summary accounts that roll up details from sub-accounts</li>
          <li>Generate reports at different levels of detail</li>
          <li>Navigate your chart of accounts more easily</li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Example Account Structure for a Tailoring Business
        </h2>

        <div className="bg-muted p-4 rounded-lg mt-4 overflow-auto">
          <pre className="text-base">
            {`1000 ASSETS
  1100 Current Assets
    1110 Cash & Bank
      1111 Main Checking Account
      1112 Savings Account
      1113 Petty Cash
    1120 Accounts Receivable
      1121 Customer Receivables
      1122 Employee Advances
    1130 Inventory
      1131 Fabric Inventory
      1132 Thread & Notions
      1133 Finished Goods
  1200 Fixed Assets
    1210 Equipment
      1211 Sewing Machines
      1212 Cutting Equipment
      1213 Pressing Equipment
    1220 Furniture & Fixtures
    1230 Computers & Electronics

5000 EXPENSES
  5100 Cost of Goods Sold
    5110 Fabric Costs
      5111 Silk & Premium Fabrics
      5112 Cotton & Linen
      5113 Wool & Suiting
      5114 Synthetic Materials
    5120 Notions & Accessories
      5121 Buttons & Fasteners
      5122 Zippers & Closures
      5123 Thread & Elastic
  5200 Operating Expenses
    5210 Rent & Utilities
      5211 Shop Rent
      5212 Electricity
      5213 Water
      5214 Internet & Phone
    5220 Salaries & Wages
      5221 Tailor Wages
      5222 Assistant Wages
      5223 Administrative Staff`}
          </pre>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Benefits of a Hierarchical Structure
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Detailed Financial Analysis</h3>
            <p className="text-base mt-2">
              You can analyze your finances at different levels. For example, you can look at total fabric costs or
              drill down to see costs for specific fabric types.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Simplified Reporting</h3>
            <p className="text-base mt-2">
              Generate summary reports showing only parent accounts for a high-level overview, or detailed reports
              showing all sub-accounts for in-depth analysis.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Better Organization</h3>
            <p className="text-base mt-2">
              As your tailoring business grows and your chart of accounts expands, a hierarchical structure keeps
              everything organized and manageable.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Easier Navigation</h3>
            <p className="text-base mt-2">
              The tree view in the Finance Module makes it easy to navigate through your accounts, expanding and
              collapsing sections as needed.
            </p>
          </div>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Creating and Managing Account Structure
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Creating Parent-Child Relationships</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Accounts &gt; Account Structure</li>
          <li>Select an account you want to make a parent account</li>
          <li>Click "Add Sub-Account" to create a child account</li>
          <li>Enter the account details for the new sub-account</li>
          <li>Click "Save" to create the relationship</li>
        </ol>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Viewing Account Structure</h3>

        <p className="mt-2">The Finance Module provides multiple ways to view your account structure:</p>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <span className="font-medium">Tree View:</span> Shows the hierarchical structure with expandable/collapsible
            nodes
          </li>
          <li>
            <span className="font-medium">Indented List:</span> Shows all accounts with indentation to indicate the
            hierarchy
          </li>
          <li>
            <span className="font-medium">Flat List with Parent References:</span> Shows all accounts in a flat list
            with parent account references
          </li>
        </ul>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h3 className="font-medium">Real-World Example</h3>
          <p className="text-base mt-2 italic">
            "Layla runs a tailoring business that offers both custom garments and alterations. She structured her
            revenue accounts hierarchically: 4000 Revenue as the parent account, with 4100 Custom Tailoring and 4200
            Alterations as sub-accounts. Under Custom Tailoring, she created further sub-accounts: 4110 Wedding Attire,
            4120 Business Suits, and 4130 Casual Wear. This structure allows her to see her total revenue at a glance,
            but also drill down to see which specific services are generating the most income. When she noticed that
            Wedding Attire was her most profitable category, she decided to increase her marketing efforts for bridal
            services."
          </p>
        </div>
      </div>

      <DocsPagination
        prev={{
          title: "Chart of Accounts",
          href: "/finance/accounts/chart-of-accounts",
        }}
        next={{
          title: "Managing Accounts",
          href: "/finance/accounts/managing-accounts",
        }}
      />
    </div>
  )
}
