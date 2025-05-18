import { DocsPagination } from "@/components/docs-pagination"

export default function ExpensesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Expenses</h1>
        <p className="text-lg text-muted-foreground mt-2">Tracking and managing your business costs</p>
      </div>

      <div className="space-y-4">
        <p>
          Expenses are the costs incurred to run your tailoring business. Properly tracking expenses is essential for
          accurate financial reporting, tax compliance, and understanding your profitability.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Common Tailoring Business Expenses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Materials</h3>
            <ul className="list-disc list-inside space-y-1 mt-2 text-base">
              <li>Fabric (wool, cotton, silk, synthetic)</li>
              <li>Thread and needles</li>
              <li>Buttons, zippers, and fasteners</li>
              <li>Linings and interfacings</li>
              <li>Trims and embellishments</li>
            </ul>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Equipment</h3>
            <ul className="list-disc list-inside space-y-1 mt-2 text-base">
              <li>Sewing machines and maintenance</li>
              <li>Cutting tools and shears</li>
              <li>Pressing equipment</li>
              <li>Mannequins and dress forms</li>
              <li>Measuring tools</li>
            </ul>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Overhead</h3>
            <ul className="list-disc list-inside space-y-1 mt-2 text-base">
              <li>Shop rent or mortgage</li>
              <li>Utilities (electricity, water, internet)</li>
              <li>Insurance (liability, property)</li>
              <li>Business licenses and permits</li>
              <li>Professional services (accounting, legal)</li>
            </ul>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Labor</h3>
            <ul className="list-disc list-inside space-y-1 mt-2 text-base">
              <li>Employee wages and benefits</li>
              <li>Contractor payments</li>
              <li>Training and education</li>
              <li>Payroll taxes</li>
              <li>Worker's compensation insurance</li>
            </ul>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Marketing</h3>
            <ul className="list-disc list-inside space-y-1 mt-2 text-base">
              <li>Advertising (online, print)</li>
              <li>Website maintenance</li>
              <li>Social media promotion</li>
              <li>Business cards and brochures</li>
              <li>Promotional events</li>
            </ul>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Transportation</h3>
            <ul className="list-disc list-inside space-y-1 mt-2 text-base">
              <li>Delivery costs</li>
              <li>Business travel</li>
              <li>Vehicle expenses</li>
              <li>Parking fees</li>
              <li>Fuel costs</li>
            </ul>
          </div>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Recording Expenses</h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Steps to Record an Expense</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Expenses</li>
          <li>Click "Record Expense"</li>
          <li>Enter the expense date</li>
          <li>Select the expense category (e.g., Materials, Rent, Utilities)</li>
          <li>Enter the amount</li>
          <li>Select the payment method (cash, credit card, bank transfer)</li>
          <li>Select the bank account or payment source</li>
          <li>Add the vendor/supplier name</li>
          <li>Add a description of the expense</li>
          <li>Attach a receipt image or document (optional but recommended)</li>
          <li>Add any tax information if applicable</li>
          <li>Click "Save Expense"</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Mobile Receipt Capture</h3>
          <p className="text-base mt-2">
            The Finance Module includes a mobile app feature that allows you to take photos of receipts on the go. The
            system can extract key information from the receipt image, making expense recording faster and more
            accurate.
          </p>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Managing Recurring Expenses
        </h2>

        <p className="mt-4">
          Many tailoring businesses have regular expenses that occur monthly or quarterly, such as rent, utilities, or
          subscription services. The Finance Module allows you to set up recurring expenses to save time and ensure
          these costs are consistently recorded.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Setting Up a Recurring Expense</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance {">"} Expenses</li>
          <li>Click "Recurring Expenses"</li>
          <li>Click "Add Recurring Expense"</li>
          <li>Enter the expense details (category, amount, vendor)</li>
          <li>Set the recurrence pattern (monthly, quarterly, etc.)</li>
          <li>Set the start date and end date (if applicable)</li>
          <li>Click "Save Recurring Expense"</li>
        </ol>

        <p className="mt-4">
          The system will automatically create expense entries based on your recurrence settings. You'll receive
          notifications when recurring expenses are created, allowing you to review and approve them.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Expense Reporting and Analysis
        </h2>

        <p className="mt-4">The Finance Module provides several ways to analyze your expenses:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Expense by Category</h3>
            <p className="text-base mt-2">
              See how your expenses are distributed across different categories. This helps identify areas where costs
              are highest and might need attention.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Expense Trends</h3>
            <p className="text-base mt-2">
              Track how your expenses change over time. Identify seasonal patterns or unexpected increases that require
              investigation.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Expense by Vendor</h3>
            <p className="text-base mt-2">
              See how much you're spending with each supplier. This can help with negotiating better terms or
              identifying opportunities to consolidate purchases.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Budget vs. Actual</h3>
            <p className="text-base mt-2">
              Compare your actual expenses against your budget to see if you're staying on track with your financial
              plans.
            </p>
          </div>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Expense Approval Workflow
        </h2>

        <p className="mt-4">
          For tailoring businesses with multiple employees, the Finance Module offers an expense approval workflow:
        </p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Employee submits an expense with receipt</li>
          <li>Manager receives notification of pending expense</li>
          <li>Manager reviews and approves or rejects the expense</li>
          <li>If approved, expense is recorded in the system</li>
          <li>If rejected, employee is notified with reason</li>
        </ol>

        <p className="mt-4">To enable expense approval workflow:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance {">"} Settings {">"} Expense Settings</li>
          <li>Enable "Expense Approval Workflow"</li>
          <li>Set approval thresholds if desired (e.g., expenses over AED 1,000 require approval)</li>
          <li>Assign approvers for different departments or expense types</li>
          <li>Click "Save Settings"</li>
        </ol>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Best Practices for Expense Management
        </h2>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <span className="font-medium">Record Promptly:</span> Enter expenses as soon as they occur to maintain
            accurate records.
          </li>
          <li>
            <span className="font-medium">Keep Receipts:</span> Attach digital copies of all receipts for tax purposes
            and audit trails.
          </li>
          <li>
            <span className="font-medium">Categorize Correctly:</span> Use consistent expense categories to make
            reporting more meaningful.
          </li>
          <li>
            <span className="font-medium">Separate Personal and Business:</span> Never mix personal expenses with
            business expenses.
          </li>
          <li>
            <span className="font-medium">Review Regularly:</span> Analyze your expenses monthly to identify trends and
            opportunities for cost reduction.
          </li>
          <li>
            <span className="font-medium">Set Budgets:</span> Create expense budgets and monitor actual spending against
            them.
          </li>
        </ul>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h3 className="font-medium">Real-World Example</h3>
          <p className="text-base mt-2 italic">
            "Ahmed runs a tailoring shop with five employees. He's set up expense categories that align with his
            business needs: Premium Fabrics, Standard Fabrics, Notions, Equipment, Shop Rent, Utilities, Employee Wages,
            and Marketing. When he purchases silk fabric from his supplier, he immediately takes a photo of the receipt
            using the mobile app, which automatically creates an expense entry categorized as 'Premium Fabrics.' At the
            end of each month, he reviews his Expense by Category report and notices that his fabric costs have
            increased by 15% compared to the previous month. He investigates and discovers that a particular supplier
            has raised prices. He uses this information to negotiate better terms or find an alternative supplier. By
            tracking expenses diligently, Ahmed maintains tight control over his costs and can make informed decisions
            to protect his profit margins."
          </p>
        </div>
      </div>

      <DocsPagination
        prev={{
          title: "Invoices",
          href: "/finance/transactions/invoices",
        }}
        next={{
          title: "Journal Entries",
          href: "/finance/transactions/journal-entries",
        }}
      />
    </div>
  )
}
