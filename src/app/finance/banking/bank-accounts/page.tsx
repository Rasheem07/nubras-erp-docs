import { DocsPagination } from "@/components/docs-pagination"

export default function BankAccountsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Bank Accounts</h1>
        <p className="text-lg text-muted-foreground mt-2">Managing your business bank accounts</p>
      </div>

      <div className="space-y-4">
        <p>
          Properly managing your bank accounts is essential for tracking cash flow and maintaining accurate financial
          records. The Finance Module allows you to connect and manage all your business bank accounts in one place.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Types of Bank Accounts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Checking Accounts</h3>
            <p className="text-sm mt-2">
              Used for day-to-day transactions like paying suppliers, receiving customer payments, and covering
              operating expenses. Most tailoring businesses should have at least one primary checking account.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Savings Accounts</h3>
            <p className="text-sm mt-2">
              Used for setting aside funds for future needs, such as tax payments, equipment purchases, or seasonal
              inventory buying. These typically earn interest but have limited transactions.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Credit Card Accounts</h3>
            <p className="text-sm mt-2">
              While not technically bank accounts, business credit cards are tracked similarly in the Finance Module.
              They're useful for online purchases, travel expenses, and building business credit.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Petty Cash</h3>
            <p className="text-sm mt-2">
              A small amount of physical cash kept on hand for minor expenses. In a tailoring business, this might be
              used for small supply purchases, delivery fees, or refreshments for customers.
            </p>
          </div>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Adding a Bank Account</h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Steps to Add a Bank Account</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance {">"} Banking</li>
          <li>Click "Add Bank Account"</li>
          <li>Enter the bank name</li>
          <li>Enter the account number (or last 4 digits for security)</li>
          <li>Select the account type (Checking, Savings, Credit Card, etc.)</li>
          <li>Enter the opening balance and balance date</li>
          <li>Add a description (optional)</li>
          <li>Click "Create Account"</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Setting the Opening Balance</h3>
          <p className="text-sm mt-2">
            The opening balance should match your bank statement on the date you start using the Finance Module. This
            ensures your records align with your actual bank balance from day one.
          </p>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Recording Bank Transactions
        </h2>

        <p className="mt-4">You can record various types of bank transactions to keep your accounts up-to-date:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Deposits</h3>
            <p className="text-sm mt-2">
              Record money coming into your account, such as customer payments, loan proceeds, or owner contributions.
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2 text-xs">
              <li>Go to Finance {">"} Banking {">"} Transactions</li>
              <li>Click "Add Transaction"</li>
              <li>Select "Deposit" as the transaction type</li>
              <li>Enter the amount, date, and description</li>
              <li>Select the appropriate income account</li>
              <li>Click "Save Transaction"</li>
            </ol>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Withdrawals/Payments</h3>
            <p className="text-sm mt-2">
              Record money going out of your account, such as supplier payments, rent, utilities, or equipment
              purchases.
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2 text-xs">
              <li>Go to Finance {">"} Banking {">"} Transactions</li>
              <li>Click "Add Transaction"</li>
              <li>Select "Payment" as the transaction type</li>
              <li>Enter the amount, date, and description</li>
              <li>Select the appropriate expense account</li>
              <li>Click "Save Transaction"</li>
            </ol>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Transfers</h3>
            <p className="text-sm mt-2">
              Record money moving between your accounts, such as transferring funds from checking to savings or vice
              versa.
            </p>
            <ol className="list-decimal list-inside space-y-1 mt-2 text-xs">
              <li>Go to Finance {">"} Banking {">"} Transactions</li>
              <li>Click "Add Transaction"</li>
              <li>Select "Transfer" as the transaction type</li>
              <li>Select the "From" and "To" accounts</li>
              <li>Enter the amount, date, and description</li>
              <li>Click "Save Transaction"</li>
            </ol>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Bank Fees and Interest</h3>
            <p className="text-sm mt-2">Record bank charges, fees, or interest earned on your accounts.</p>
            <ol className="list-decimal list-inside space-y-1 mt-2 text-xs">
              <li>Go to Finance {">"} Banking {">"} Transactions</li>
              <li>Click "Add Transaction"</li>
              <li>Select "Bank Fee" or "Interest Earned"</li>
              <li>Enter the amount, date, and description</li>
              <li>Click "Save Transaction"</li>
            </ol>
          </div>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Best Practices for Bank Account Management
        </h2>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <span className="font-medium">Separate Business and Personal:</span> Always keep your business and personal
            finances separate with dedicated business accounts.
          </li>
          <li>
            <span className="font-medium">Regular Reconciliation:</span> Reconcile your bank accounts monthly to catch
            errors and ensure accuracy.
          </li>
          <li>
            <span className="font-medium">Document Everything:</span> Add detailed descriptions to all transactions for
            better tracking and tax preparation.
          </li>
          <li>
            <span className="font-medium">Monitor Cash Flow:</span> Regularly review your bank balances and upcoming
            transactions to avoid cash shortages.
          </li>
          <li>
            <span className="font-medium">Security:</span> Use strong passwords and two-factor authentication for online
            banking access.
          </li>
        </ul>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h3 className="font-medium">Real-World Example</h3>
          <p className="text-sm mt-2 italic">
            "Khalid runs a tailoring business with three employees. He maintains three bank accounts: a primary checking
            account for day-to-day operations, a savings account for taxes and large purchases, and a separate checking
            account specifically for payroll. In the Finance Module, he's set up all three accounts and categorized them
            appropriately. Each morning, he checks his account balances and recent transactions. When a customer pays
            for a custom suit, he records the deposit in the primary checking account and categorizes it as 'Custom
            Tailoring Revenue.' Every two weeks, he transfers money from the primary account to the payroll account and
            records it as a transfer. This system helps him keep his finances organized and ensures he always has enough
            money set aside for taxes and employee wages."
          </p>
        </div>
      </div>

      <DocsPagination
        prev={{
          title: "Banking",
          href: "/finance/banking",
        }}
        next={{
          title: "Reconciliation",
          href: "/finance/banking/reconciliation",
        }}
      />
    </div>
  )
}
