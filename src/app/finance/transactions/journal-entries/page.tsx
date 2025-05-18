import { DocsPagination } from "@/components/docs-pagination"

export default function JournalEntriesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Journal Entries</h1>
        <p className="text-lg text-muted-foreground mt-2">Recording accounting transactions manually</p>
      </div>

      <div className="space-y-4">
        <p>
          Journal entries are the foundation of double-entry accounting. They allow you to record financial transactions
          that might not fit into standard categories like invoices or expenses. For a tailoring business, understanding
          journal entries helps you maintain accurate financial records and make proper accounting adjustments.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Understanding Journal Entries
        </h2>

        <p className="mt-4">
          A journal entry records a financial transaction with at least two accounts: one debited and one credited. This
          follows the accounting principle that for every transaction, the total debits must equal the total credits.
        </p>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Debit and Credit Rules</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2 text-base">
            <div>
              <p className="font-medium">Accounts that INCREASE with a Debit:</p>
              <ul className="list-disc list-inside mt-1">
                <li>Assets (cash, inventory, equipment)</li>
                <li>Expenses (rent, utilities, wages)</li>
              </ul>
            </div>
            <div>
              <p className="font-medium">Accounts that INCREASE with a Credit:</p>
              <ul className="list-disc list-inside mt-1">
                <li>Liabilities (loans, accounts payable)</li>
                <li>Equity (owner's capital)</li>
                <li>Revenue (sales, service income)</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          When to Use Journal Entries
        </h2>

        <p className="mt-4">
          While many transactions are automatically recorded through invoices, expenses, or bank transactions, journal
          entries are necessary for:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Accounting Adjustments</h3>
            <ul className="list-disc list-inside space-y-1 mt-2 text-base">
              <li>Depreciation of sewing equipment</li>
              <li>Amortization of prepaid expenses</li>
              <li>Accrual of unpaid expenses</li>
              <li>Recording unearned revenue</li>
            </ul>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Error Corrections</h3>
            <ul className="list-disc list-inside space-y-1 mt-2 text-base">
              <li>Fixing miscategorized transactions</li>
              <li>Correcting amount errors</li>
              <li>Adjusting inventory discrepancies</li>
              <li>Reclassifying transactions</li>
            </ul>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Non-Standard Transactions</h3>
            <ul className="list-disc list-inside space-y-1 mt-2 text-base">
              <li>Owner's capital contributions</li>
              <li>Owner's drawings/withdrawals</li>
              <li>Asset transfers or disposals</li>
              <li>Loan payments (principal and interest)</li>
            </ul>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Period-End Adjustments</h3>
            <ul className="list-disc list-inside space-y-1 mt-2 text-base">
              <li>Month-end or year-end closing entries</li>
              <li>Inventory adjustments</li>
              <li>Revenue and expense matching</li>
              <li>Tax accruals</li>
            </ul>
          </div>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Creating a Journal Entry
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Steps to Create a Journal Entry</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance {">"} Journal Entries</li>
          <li>Click "Create Journal Entry"</li>
          <li>Enter the date of the transaction</li>
          <li>Add a reference number (optional)</li>
          <li>Enter a description that explains the purpose of the entry</li>
          <li>
            Add line items:
            <ul className="list-disc list-inside ml-6 mt-2 text-base">
              <li>Select the first account</li>
              <li>Enter the debit amount (if applicable)</li>
              <li>Enter the credit amount (if applicable)</li>
              <li>Add a description for the line item</li>
            </ul>
          </li>
          <li>Add additional line items as needed</li>
          <li>Ensure the total debits equal the total credits</li>
          <li>Attach any supporting documentation (optional)</li>
          <li>Click "Save Journal Entry"</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Balancing Check</h3>
          <p className="text-base mt-2">
            The Finance Module automatically calculates the total debits and credits as you add line items. The entry
            cannot be saved until the debits and credits are equal (balanced).
          </p>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Common Journal Entries for Tailoring Businesses
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Example 1: Recording Depreciation</h3>

        <div className="bg-muted p-4 rounded-lg mt-4 overflow-auto">
          <table className="min-w-full text-base">
            <thead>
              <tr>
                <th className="text-left font-medium p-2">Account</th>
                <th className="text-left font-medium p-2">Debit</th>
                <th className="text-left font-medium p-2">Credit</th>
                <th className="text-left font-medium p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Depreciation Expense</td>
                <td className="p-2">AED 500.00</td>
                <td className="p-2"></td>
                <td className="p-2">Monthly depreciation of sewing machines</td>
              </tr>
              <tr>
                <td className="p-2">Accumulated Depreciation</td>
                <td className="p-2"></td>
                <td className="p-2">AED 500.00</td>
                <td className="p-2">Monthly depreciation of sewing machines</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">
          Example 2: Owner's Capital Contribution
        </h3>

        <div className="bg-muted p-4 rounded-lg mt-4 overflow-auto">
          <table className="min-w-full text-base">
            <thead>
              <tr>
                <th className="text-left font-medium p-2">Account</th>
                <th className="text-left font-medium p-2">Debit</th>
                <th className="text-left font-medium p-2">Credit</th>
                <th className="text-left font-medium p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Bank Account</td>
                <td className="p-2">AED 10,000.00</td>
                <td className="p-2"></td>
                <td className="p-2">Owner's additional investment in business</td>
              </tr>
              <tr>
                <td className="p-2">Owner's Capital</td>
                <td className="p-2"></td>
                <td className="p-2">AED 10,000.00</td>
                <td className="p-2">Owner's additional investment in business</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Example 3: Inventory Adjustment</h3>

        <div className="bg-muted p-4 rounded-lg mt-4 overflow-auto">
          <table className="min-w-full text-base">
            <thead>
              <tr>
                <th className="text-left font-medium p-2">Account</th>
                <th className="text-left font-medium p-2">Debit</th>
                <th className="text-left font-medium p-2">Credit</th>
                <th className="text-left font-medium p-2">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Inventory Shrinkage Expense</td>
                <td className="p-2">AED 750.00</td>
                <td className="p-2"></td>
                <td className="p-2">Adjustment after physical inventory count</td>
              </tr>
              <tr>
                <td className="p-2">Fabric Inventory</td>
                <td className="p-2"></td>
                <td className="p-2">AED 750.00</td>
                <td className="p-2">Adjustment after physical inventory count</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Recurring Journal Entries
        </h2>

        <p className="mt-4">
          For journal entries that need to be made regularly (like monthly depreciation), you can set up recurring
          journal entries:
        </p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance {">"} Journal Entries</li>
          <li>Click "Recurring Journal Entries"</li>
          <li>Click "Create Recurring Entry"</li>
          <li>Set up the journal entry details</li>
          <li>Set the recurrence pattern (monthly, quarterly, etc.)</li>
          <li>Set the start date and end date (if applicable)</li>
          <li>Click "Save Recurring Entry"</li>
        </ol>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Best Practices for Journal Entries
        </h2>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <span className="font-medium">Clear Descriptions:</span> Always include detailed descriptions that explain
            the purpose of the entry.
          </li>
          <li>
            <span className="font-medium">Supporting Documentation:</span> Attach relevant documents to support the
            entry.
          </li>
          <li>
            <span className="font-medium">Consistent Dates:</span> Use the actual transaction date, not the date you're
            creating the entry.
          </li>
          <li>
            <span className="font-medium">Regular Review:</span> Periodically review journal entries to ensure accuracy.
          </li>
          <li>
            <span className="font-medium">Seek Professional Advice:</span> Consult with an accountant for complex
            entries or year-end adjustments.
          </li>
          <li>
            <span className="font-medium">Audit Trail:</span> Maintain a clear audit trail by numbering entries and
            keeping them in chronological order.
          </li>
        </ul>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h3 className="font-medium">Real-World Example</h3>
          <p className="text-base mt-2 italic">
            "Khalid owns a tailoring business and recently purchased a new industrial sewing machine for AED 15,000. The
            machine has an estimated useful life of 5 years with no salvage value. At the end of each month, Khalid
            creates a journal entry to record depreciation. He debits 'Depreciation Expense' for AED 250 (15,000 ÷ 5
            years ÷ 12 months) and credits 'Accumulated Depreciation' for the same amount. He includes a description
            'Monthly depreciation of industrial sewing machine' and attaches a copy of the original purchase invoice as
            supporting documentation. To save time, he sets this up as a recurring journal entry that automatically
            creates the entry on the last day of each month. This ensures his financial statements accurately reflect
            the decreasing value of the equipment over time."
          </p>
        </div>
      </div>

      <DocsPagination
        prev={{
          title: "Expenses",
          href: "/finance/transactions/expenses",
        }}
        next={{
          title: "Reports",
          href: "/finance/reports",
        }}
      />
    </div>
  )
}
