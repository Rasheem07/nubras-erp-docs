import { DocsPagination } from "@/components/docs-pagination"

export default function BankingTransactionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Banking Transactions</h1>
        <p className="text-lg text-muted-foreground mt-2">Recording and managing your bank activity</p>
      </div>

      <div className="space-y-4">
        <p>
          Banking transactions are the individual activities that affect your bank accounts, such as deposits,
          withdrawals, transfers, and bank fees. Properly recording these transactions is essential for accurate
          financial management.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Types of Banking Transactions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Deposits</h3>
            <p className="text-base mt-2">
              Money coming into your bank account. For a tailoring business, this typically includes:
            </p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-xs">
              <li>Customer payments for services</li>
              <li>Sales of fabric or accessories</li>
              <li>Refunds from suppliers</li>
              <li>Loan proceeds</li>
              <li>Owner contributions</li>
            </ul>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Withdrawals/Payments</h3>
            <p className="text-base mt-2">Money going out of your bank account. Common examples include:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-xs">
              <li>Supplier payments for fabric and materials</li>
              <li>Rent for your shop space</li>
              <li>Utility bills (electricity, water, internet)</li>
              <li>Employee wages</li>
              <li>Equipment purchases</li>
            </ul>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Transfers</h3>
            <p className="text-base mt-2">Moving money between your own accounts. Examples include:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-xs">
              <li>Moving funds from checking to savings</li>
              <li>Transferring money to a payroll account</li>
              <li>Moving funds to a tax reserve account</li>
              <li>Transferring between currencies</li>
            </ul>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Bank Fees and Interest</h3>
            <p className="text-base mt-2">Charges from the bank or interest earned:</p>
            <ul className="list-disc list-inside space-y-1 mt-2 text-xs">
              <li>Monthly account maintenance fees</li>
              <li>Transaction fees</li>
              <li>Overdraft charges</li>
              <li>Interest earned on savings</li>
              <li>Credit card processing fees</li>
            </ul>
          </div>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Recording Banking Transactions
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Recording a Deposit</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance {">"} Banking {">"} Transactions</li>
          <li>Click "Add Transaction"</li>
          <li>Select "Deposit" as the transaction type</li>
          <li>Select the bank account receiving the funds</li>
          <li>Enter the date of the deposit</li>
          <li>Enter the amount being deposited</li>
          <li>Select the appropriate income account (e.g., Custom Tailoring Revenue)</li>
          <li>Add a description (e.g., "Payment from Ahmed for wedding suit")</li>
          <li>Add a reference number if applicable (e.g., invoice number)</li>
          <li>Click "Save Transaction"</li>
        </ol>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Recording a Payment</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance {">"} Banking {">"} Transactions</li>
          <li>Click "Add Transaction"</li>
          <li>Select "Payment" as the transaction type</li>
          <li>Select the bank account the payment is coming from</li>
          <li>Enter the date of the payment</li>
          <li>Enter the amount being paid</li>
          <li>Select the appropriate expense account (e.g., Fabric Costs)</li>
          <li>Add a description (e.g., "Premium silk for Fatima's dress")</li>
          <li>Add a reference number if applicable (e.g., supplier invoice number)</li>
          <li>Click "Save Transaction"</li>
        </ol>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Recording a Transfer</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance {">"} Banking {">"} Transactions</li>
          <li>Click "Add Transaction"</li>
          <li>Select "Transfer" as the transaction type</li>
          <li>Select the "From" account (where the money is coming from)</li>
          <li>Select the "To" account (where the money is going)</li>
          <li>Enter the date of the transfer</li>
          <li>Enter the amount being transferred</li>
          <li>Add a description (e.g., "Moving funds to savings for tax payment")</li>
          <li>Click "Save Transaction"</li>
        </ol>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Managing Banking Transactions
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Viewing Transactions</h3>

        <p className="mt-2">You can view all transactions for a specific account or across all accounts:</p>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <span className="font-medium">All Transactions:</span> Go to Finance {">"} Banking {">"} Transactions
          </li>
          <li>
            <span className="font-medium">Account-Specific:</span> Go to Finance {">"} Banking, then click on an account
            name
          </li>
        </ul>

        <p className="mt-4">You can filter transactions by:</p>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>Date range</li>
          <li>Transaction type (deposit, payment, transfer)</li>
          <li>Amount range</li>
          <li>Description or reference number</li>
          <li>Reconciliation status (reconciled or unreconciled)</li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Editing Transactions</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Find the transaction in the transactions list</li>
          <li>Click the "Edit" button (pencil icon)</li>
          <li>Make the necessary changes</li>
          <li>Click "Save Changes"</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Important Note on Editing</h3>
          <p className="text-base mt-2">
            Be cautious when editing transactions that have already been reconciled. Changing reconciled transactions
            can cause discrepancies in your accounting. If you must change a reconciled transaction, you may need to
            redo the reconciliation.
          </p>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Deleting Transactions</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Find the transaction in the transactions list</li>
          <li>Click the "More Options" button (three dots)</li>
          <li>Select "Delete Transaction"</li>
          <li>Confirm the deletion</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">When to Delete vs. Void</h3>
          <p className="text-base mt-2">
            Only delete transactions that were entered in error and never actually occurred. For transactions that did
            occur but need to be reversed (like a bounced check), use the "Void" option instead, which maintains a
            record of the original transaction and its reversal.
          </p>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Best Practices for Banking Transactions
        </h2>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <span className="font-medium">Record Promptly:</span> Enter transactions as soon as they occur to maintain
            up-to-date records.
          </li>
          <li>
            <span className="font-medium">Be Detailed:</span> Include specific descriptions and reference numbers to
            make tracking and reconciliation easier.
          </li>
          <li>
            <span className="font-medium">Categorize Correctly:</span> Assign the proper income or expense accounts to
            ensure accurate financial reporting.
          </li>
          <li>
            <span className="font-medium">Attach Documentation:</span> When possible, attach digital copies of receipts,
            invoices, or other supporting documents.
          </li>
          <li>
            <span className="font-medium">Regular Review:</span> Periodically review your transactions to catch any
            errors or unusual activity.
          </li>
        </ul>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h3 className="font-medium">Real-World Example</h3>
          <p className="text-base mt-2 italic">
            "Mohammed runs a tailoring shop specializing in traditional clothing. Every Monday, he deposits the previous
            week's cash payments into his business checking account. In the Finance Module, he records this as a deposit
            to his checking account, categorized as 'Custom Tailoring Revenue' with a description like 'Week of May 15
            cash sales.' When he purchases new fabric, he pays with his business debit card and immediately records the
            payment in the system, selecting 'Fabric Costs' as the expense category and noting the specific fabrics
            purchased and their intended use. At the end of each month, he transfers 20% of his profits to a savings
            account for taxes, recording it as a transfer between accounts with the description 'Monthly tax reserve.'
            This disciplined approach to recording transactions gives him a clear picture of his cash flow and makes
            reconciliation straightforward."
          </p>
        </div>
      </div>

      <DocsPagination
        prev={{
          title: "Reconciliation",
          href: "/finance/banking/reconciliation",
        }}
        next={{
          title: "Transactions",
          href: "/finance/transactions",
        }}
      />
    </div>
  )
}
