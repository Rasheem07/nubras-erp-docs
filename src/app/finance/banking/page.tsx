import { Card, CardContent } from "@/components/ui/card"
import { DocsPagination } from "@/components/docs-pagination"

export default function FinanceBankingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Banking</h1>
        <p className="text-lg text-muted-foreground mt-2">Managing your bank accounts and transactions</p>
      </div>

      <div className="space-y-4">
        <p>
          The Banking section helps you manage your bank accounts, track transactions, and reconcile your statements.
          Keeping your banking records accurate ensures you always know your true cash position.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Bank Account Management
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Adding a Bank Account</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance {`>`} Banking</li>
          <li>Click "Add Bank Account"</li>
          <li>Enter the bank name</li>
          <li>Enter the account number</li>
          <li>Select the account type (Checking, Savings, etc.)</li>
          <li>Enter the opening balance</li>
          <li>Click "Create Account"</li>
        </ol>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Types of Bank Accounts</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <Card>
            <CardContent className="p-6">
              <ul className="space-y-3">
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Checking Account</span>
                  <span className="text-sm text-muted-foreground">For day-to-day transactions</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Savings Account</span>
                  <span className="text-sm text-muted-foreground">For reserve funds</span>
                </li>
                <li className="flex justify-between items-center border-b pb-2">
                  <span className="font-medium">Credit Card</span>
                  <span className="text-sm text-muted-foreground">For tracking card expenses</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Petty Cash</span>
                  <span className="text-sm text-muted-foreground">For small cash expenses</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Bank Reconciliation</h2>

        <p className="mt-2">
          Bank reconciliation is the process of matching your records with your bank statement to ensure accuracy.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">How to Reconcile Your Account</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance {">"} Banking {">"} Reconciliation</li>
          <li>Select the bank account to reconcile</li>
          <li>Enter the statement date and ending balance</li>
          <li>Match transactions with your bank statement</li>
          <li>Identify and resolve any discrepancies</li>
          <li>Click "Complete Reconciliation"</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-6">
          <h3 className="font-medium">Reconciliation Tips</h3>
          <ul className="list-disc list-inside space-y-2 mt-2 text-sm">
            <li>Reconcile your accounts monthly</li>
            <li>Address discrepancies immediately</li>
            <li>Keep digital copies of bank statements</li>
            <li>Record all transactions promptly</li>
          </ul>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Banking Transactions</h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Recording Transactions</h3>

        <p className="mt-2">You can record various types of banking transactions:</p>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>Deposits (money coming in)</li>
          <li>Withdrawals (money going out)</li>
          <li>Transfers between accounts</li>
          <li>Bank fees and charges</li>
          <li>Interest earned</li>
        </ul>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h3 className="font-medium">Real-World Example</h3>
          <p className="text-sm mt-2 italic">
            "Aisha runs a tailoring business with two bank accounts - an operating account for daily expenses and a
            savings account for taxes and large fabric purchases. Every month, she downloads her bank statements and
            goes to the Banking section to reconcile. She notices a customer payment of AED 2,500 on her bank statement
            that isn't in the system. She adds the missing transaction, categorizes it to the correct customer invoice,
            and completes the reconciliation. Now her system matches her bank exactly, and she knows her financial
            reports are accurate."
          </p>
        </div>
      </div>

      <DocsPagination
        prev={{
          title: "Accounts",
          href: "/finance/accounts",
        }}
        next={{
          title: "Transactions",
          href: "/finance/transactions",
        }}
      />
    </div>
  )
}
