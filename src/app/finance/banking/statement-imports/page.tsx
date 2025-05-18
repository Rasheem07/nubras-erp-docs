import { DocsPagination } from "@/components/docs-pagination"

export default function BankStatementImportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Bank Statement Imports</h1>
        <p className="text-lg text-muted-foreground mt-2">Automating transaction entry and reconciliation</p>
      </div>

      <div className="space-y-4">
        <p>
          Importing bank statements saves time, reduces data entry errors, and ensures your financial records match your
          actual bank activity. The Finance Module provides powerful tools to import, categorize, and reconcile bank
          transactions automatically.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Benefits of Bank Statement Imports
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Time Savings</h3>
            <p className="text-base mt-2">
              Eliminate manual data entry of bank transactions, saving hours of bookkeeping time each month. What might
              take hours manually can be completed in minutes.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Accuracy</h3>
            <p className="text-base mt-2">
              Reduce human error by importing transaction data directly from your bank. This ensures your financial
              records precisely match your actual bank activity.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Completeness</h3>
            <p className="text-base mt-2">
              Capture all transactions, including bank fees, interest, and other items that might be overlooked during
              manual entry. Nothing falls through the cracks.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Efficiency</h3>
            <p className="text-base mt-2">
              Intelligent matching algorithms automatically link imported transactions to existing records, streamlining
              the reconciliation process and reducing duplicate entries.
            </p>
          </div>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Import Methods</h2>

        <p className="mt-2">The Finance Module offers several methods to import bank statement data:</p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Direct Bank Connection</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Banking &gt; Bank Connections</li>
          <li>Click "Add Bank Connection"</li>
          <li>Select your bank from the list of supported institutions</li>
          <li>Enter your online banking credentials securely</li>
          <li>Select which accounts to connect</li>
          <li>Configure synchronization settings (automatic or manual)</li>
          <li>Click "Connect"</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Security Note</h3>
          <p className="text-base mt-2">
            The system uses secure, read-only connections to your bank. Your banking credentials are encrypted and never
            stored in our database. The connection uses the same security standards as online banking.
          </p>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">File Import</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Download your bank statement in CSV, OFX, QFX, or MT940 format from your online banking portal</li>
          <li>Go to Finance &gt; Banking &gt; Import Statement</li>
          <li>Select the bank account to import into</li>
          <li>Click "Choose File" and select your downloaded statement file</li>
          <li>Select the file format</li>
          <li>Map the columns if using CSV format</li>
          <li>Click "Import Transactions"</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Supported File Formats</h3>
          <ul className="list-disc list-inside space-y-1 mt-2 text-xs">
            <li>
              <span className="font-medium">CSV (Comma Separated Values):</span> Most banks offer this format, but
              column mapping is usually required
            </li>
            <li>
              <span className="font-medium">OFX/QFX (Open Financial Exchange):</span> Standardized format with
              transaction categorization data
            </li>
            <li>
              <span className="font-medium">MT940:</span> SWIFT format used by many international banks
            </li>
            <li>
              <span className="font-medium">PDF:</span> Some banks only provide PDF statements, which can be processed
              with our PDF extraction tool
            </li>
          </ul>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">
          Manual Entry with Statement Verification
        </h3>

        <p className="mt-2">
          If you prefer to enter transactions manually but still want to verify against your bank statement:
        </p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Enter transactions manually throughout the period</li>
          <li>At the end of the period, import your bank statement</li>
          <li>Use the reconciliation tool to match your entries against the imported statement</li>
          <li>Add any missing transactions identified during reconciliation</li>
        </ol>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Processing Imported Transactions
        </h2>

        <p className="mt-2">After importing transactions, you'll need to review and categorize them:</p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Transaction Matching</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Banking &gt; Review Imported Transactions</li>
          <li>The system automatically attempts to match imported transactions with existing records</li>
          <li>Review suggested matches and confirm or reject them</li>
          <li>
            For unmatched transactions, you can:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Match to an existing transaction manually</li>
              <li>Create a new transaction record</li>
              <li>Split the transaction into multiple entries if needed</li>
            </ul>
          </li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Automatic Matching Criteria</h3>
          <p className="text-base mt-2">The system uses several factors to suggest matches:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 text-xs">
            <li>Transaction amount (exact match)</li>
            <li>Transaction date (within a configurable range)</li>
            <li>Reference numbers or check numbers</li>
            <li>Description text similarity</li>
          </ul>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Transaction Categorization</h3>

        <p className="mt-2">For new transactions that don't match existing records:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Select the transaction</li>
          <li>Assign the appropriate account category</li>
          <li>Add a detailed description</li>
          <li>Link to a customer, supplier, or project if applicable</li>
          <li>Add any tax information</li>
          <li>Save the categorized transaction</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Rules-Based Categorization</h3>
          <p className="text-base mt-2">Create rules to automatically categorize recurring transactions:</p>
          <ol className="list-decimal list-inside space-y-1 mt-2 text-xs">
            <li>Go to Finance &gt; Banking &gt; Categorization Rules</li>
            <li>Click "Add Rule"</li>
            <li>Set conditions (e.g., description contains "Fabric World")</li>
            <li>Set the category (e.g., "Fabric Purchases")</li>
            <li>Save the rule</li>
          </ol>
          <p className="text-xs mt-2">
            <strong>Tip:</strong> After creating rules, future imports will automatically apply these categorizations,
            saving significant time.
          </p>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Bank Reconciliation with Imported Statements
        </h2>

        <p className="mt-2">Imported statements streamline the reconciliation process:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Banking &gt; Reconciliation</li>
          <li>Select the bank account to reconcile</li>
          <li>Enter the statement ending date and balance</li>
          <li>The system displays all transactions, with imported ones pre-matched</li>
          <li>Review and mark transactions as reconciled</li>
          <li>Identify and resolve any discrepancies</li>
          <li>Complete the reconciliation when the difference is zero</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Handling Discrepancies</h3>
          <p className="text-base mt-2">If your reconciliation doesn't balance:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 text-xs">
            <li>Check for transactions on the statement that aren't in your system</li>
            <li>Look for transactions in your system that aren't on the statement</li>
            <li>Verify transaction amounts for data entry errors</li>
            <li>Check for duplicate entries</li>
            <li>Confirm the opening and closing balances are correct</li>
          </ul>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Advanced Features</h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Bank Feeds</h3>

        <p className="mt-2">Set up automatic daily imports of your bank transactions:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Banking &gt; Bank Connections</li>
          <li>Select your connected bank account</li>
          <li>Enable "Automatic Synchronization"</li>
          <li>Set the synchronization frequency (daily, weekly)</li>
          <li>Configure notification preferences</li>
          <li>Save settings</li>
        </ol>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Cash Coding</h3>

        <p className="mt-2">Quickly categorize multiple similar transactions at once:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Banking &gt; Cash Coding</li>
          <li>Filter transactions by date, amount, or description</li>
          <li>Select multiple transactions</li>
          <li>Apply the same category to all selected transactions</li>
          <li>Save the batch categorization</li>
        </ol>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Bank Rules</h3>

        <p className="mt-2">Create sophisticated rules for transaction handling:</p>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <span className="font-medium">Split Rules:</span> Automatically split transactions from specific vendors
            into multiple categories
          </li>
          <li>
            <span className="font-medium">Conditional Rules:</span> Apply different categories based on transaction
            amount or other factors
          </li>
          <li>
            <span className="font-medium">Exclusion Rules:</span> Automatically exclude certain transactions from
            reports or categorization
          </li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Best Practices for Bank Statement Imports
        </h2>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <span className="font-medium">Regular Imports:</span> Import statements at least weekly to keep your
            financial data current
          </li>
          <li>
            <span className="font-medium">Consistent Categorization:</span> Create and maintain rules for consistent
            transaction categorization
          </li>
          <li>
            <span className="font-medium">Review Before Finalizing:</span> Always review automatically categorized
            transactions before finalizing them
          </li>
          <li>
            <span className="font-medium">Monthly Reconciliation:</span> Perform a full reconciliation at least monthly
            to catch any issues
          </li>
          <li>
            <span className="font-medium">Document Special Transactions:</span> Add notes to unusual transactions for
            future reference
          </li>
          <li>
            <span className="font-medium">Backup Original Statements:</span> Keep copies of original bank statements for
            audit purposes
          </li>
        </ul>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h3 className="font-medium">Real-World Example</h3>
          <p className="text-base mt-2 italic">
            "Mohammed runs a tailoring business with multiple bank accounts. Previously, his bookkeeper spent nearly two
            full days each month manually entering bank transactions and reconciling accounts. After implementing bank
            statement imports, the process now takes just a few hours. Mohammed set up a direct connection to his
            business checking account, which automatically imports transactions daily. For his business savings and
            credit card accounts, he downloads monthly statements and imports them using the file import feature. He
            created categorization rules for common transactions—rent payments automatically categorize as 'Rent
            Expense,' fabric supplier payments go to 'Material Purchases,' and so on. When reviewing imported
            transactions, Mohammed only needs to categorize unusual or new vendors, saving significant time. During
            monthly reconciliation, most transactions are already matched, making the process much faster and more
            accurate. This automation has not only saved time but also improved financial reporting accuracy, allowing
            Mohammed to make better business decisions based on up-to-date financial information."
          </p>
        </div>
      </div>

      <DocsPagination
        prev={{
          title: "Expense Claims",
          href: "/finance/expense-claims",
        }}
        next={{
          title: "Tax Management",
          href: "/finance/tax-management",
        }}
      />
    </div>
  )
}
