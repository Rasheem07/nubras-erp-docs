import { DocsPagination } from "@/components/docs-pagination"

export default function ReconciliationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Bank Reconciliation</h1>
        <p className="text-lg text-muted-foreground mt-2">Ensuring your records match your bank statements</p>
      </div>

      <div className="space-y-4">
        <p>
          Bank reconciliation is the process of comparing your internal financial records with your bank statements to
          ensure they match. Regular reconciliation helps catch errors, identify missing transactions, and maintain
          accurate financial records.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Why Reconciliation Matters
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Catch Errors Early</h3>
            <p className="text-sm mt-2">
              Reconciliation helps identify data entry errors, duplicate transactions, or bank mistakes before they
              cause larger problems.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Prevent Fraud</h3>
            <p className="text-sm mt-2">
              Regular reconciliation can help detect unauthorized transactions or suspicious activity in your accounts.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Accurate Financial Reporting</h3>
            <p className="text-sm mt-2">
              Ensures your financial statements reflect your true cash position, leading to better business decisions.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Tax Compliance</h3>
            <p className="text-sm mt-2">
              Properly reconciled accounts make tax preparation easier and provide an audit trail if needed.
            </p>
          </div>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          The Reconciliation Process
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Steps to Reconcile Your Bank Account</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Banking &gt; Reconciliation</li>
          <li>Select the bank account you want to reconcile</li>
          <li>Enter the statement date (usually the last day of the month)</li>
          <li>Enter the ending balance from your bank statement</li>
          <li>Review the list of transactions in the system</li>
          <li>Match each transaction with your bank statement by checking them off</li>
          <li>Add any missing transactions that appear on your statement but not in your system</li>
          <li>Identify any transactions in your system that haven't cleared the bank yet</li>
          <li>Verify that the difference between your records and the bank statement is zero</li>
          <li>Click "Complete Reconciliation" to finalize</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Understanding the Reconciliation Screen</h3>
          <ul className="list-disc list-inside space-y-2 mt-2 text-sm">
            <li>
              <span className="font-medium">Beginning Balance:</span> The ending balance from your last reconciliation
            </li>
            <li>
              <span className="font-medium">Ending Balance:</span> The balance from your current bank statement
            </li>
            <li>
              <span className="font-medium">Cleared Balance:</span> The sum of your beginning balance and all cleared
              transactions
            </li>
            <li>
              <span className="font-medium">Difference:</span> The amount by which your records differ from the bank
              statement (should be zero when reconciled)
            </li>
          </ul>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Common Reconciliation Issues
        </h2>

        <div className="space-y-4 mt-4">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Outstanding Checks or Deposits</h3>
            <p className="text-sm mt-2">
              Transactions you've recorded but that haven't cleared the bank yet. These are normal and will be included
              in your next reconciliation.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              <strong>Solution:</strong> Mark these as uncleared and include them in next month's reconciliation.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Bank Fees or Interest Not Recorded</h3>
            <p className="text-sm mt-2">
              Banks often charge fees or pay interest that you may not have recorded in your system.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              <strong>Solution:</strong> Add these transactions during reconciliation, categorizing them appropriately.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Transposition Errors</h3>
            <p className="text-sm mt-2">
              Switching digits when entering amounts (e.g., entering 1,540 instead of 1,450).
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              <strong>Solution:</strong> Look for differences that are divisible by 9, which often indicates
              transposition. Correct the amount in your records.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Duplicate Transactions</h3>
            <p className="text-sm mt-2">The same transaction recorded twice in your system.</p>
            <p className="text-xs text-muted-foreground mt-2">
              <strong>Solution:</strong> Delete the duplicate entry to correct your records.
            </p>
          </div>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Best Practices for Bank Reconciliation
        </h2>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <span className="font-medium">Reconcile Monthly:</span> Perform reconciliation at least once a month, after
            receiving your bank statement.
          </li>
          <li>
            <span className="font-medium">Don't Skip Months:</span> If you miss a month, go back and reconcile it before
            moving forward.
          </li>
          <li>
            <span className="font-medium">Keep Documentation:</span> Save bank statements and reconciliation reports for
            your records.
          </li>
          <li>
            <span className="font-medium">Investigate Discrepancies:</span> Don't force a reconciliation if there's a
            difference—find and fix the error.
          </li>
          <li>
            <span className="font-medium">Separate Duties:</span> If possible, have someone other than the person who
            records transactions perform the reconciliation.
          </li>
        </ul>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h3 className="font-medium">Real-World Example</h3>
          <p className="text-sm mt-2 italic">
            "Aisha runs a tailoring business and reconciles her bank accounts on the 5th of each month when her
            statements arrive. During her May reconciliation, she noticed a AED 250 difference between her records and
            the bank statement. After reviewing the transactions, she discovered she had recorded a fabric purchase as
            AED 1,250 when it was actually AED 1,500. She corrected the error in her system and completed the
            reconciliation with a zero difference. This process not only fixed her accounting records but also updated
            her fabric cost tracking, ensuring her pricing calculations remained accurate. Without regular
            reconciliation, this error might have gone unnoticed and affected her profitability analysis."
          </p>
        </div>
      </div>

      <DocsPagination
        prev={{
          title: "Bank Accounts",
          href: "/finance/banking/bank-accounts",
        }}
        next={{
          title: "Transactions",
          href: "/finance/banking/transactions",
        }}
      />
    </div>
  )
}
