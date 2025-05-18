import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DocsPagination } from "@/components/docs-pagination"
import Link from "next/link"

export default function FinanceTransactionsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Transactions</h1>
        <p className="text-lg text-muted-foreground mt-2">Managing invoices, expenses, and journal entries</p>
      </div>

      <div className="space-y-4">
        <p>
          The Transactions section is where you'll record your day-to-day financial activities. This includes creating
          customer invoices, recording expenses, and making journal entries.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Transaction Types</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Create professional invoices</li>
                <li>Track payment status</li>
                <li>Send invoices to customers</li>
                <li>Record full or partial payments</li>
                <li>View invoice aging reports</li>
              </ul>
              <div className="mt-4">
                <Link href="/finance/transactions/invoices" className="text-primary hover:underline text-sm">
                  Learn more about invoices →
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Record business expenses</li>
                <li>Categorize by expense type</li>
                <li>Attach receipts and documents</li>
                <li>Track payment method</li>
                <li>Manage recurring expenses</li>
              </ul>
              <div className="mt-4">
                <Link href="/finance/transactions/expenses" className="text-primary hover:underline text-sm">
                  Learn more about expenses →
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Journal Entries</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Create manual accounting entries</li>
                <li>Record adjustments and corrections</li>
                <li>Enter opening balances</li>
                <li>Process month-end adjustments</li>
                <li>Create recurring journal entries</li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/finance/transactions/journal-entries"
                  className="text-primary hover:underline text-sm"
                >
                  Learn more about journal entries →
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Creating an Invoice</h2>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Invoices</li>
          <li>Click "Create Invoice" button</li>
          <li>Select customer or add a new one</li>
          <li>Enter invoice date and due date</li>
          <li>Add line items for services or products</li>
          <li>Add any applicable taxes</li>
          <li>Add notes or payment terms if needed</li>
          <li>Save or send the invoice</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-6">
          <h3 className="font-medium">Invoice Example</h3>
          <p className="text-sm mt-2 italic">
            "Mohammed just completed a custom suit for a client. He goes to the Invoices section and creates a new
            invoice. He adds line items for the suit (AED 2,000), alterations (AED 200), and premium buttons (AED 150).
            The system automatically calculates 5% VAT. He adds a note thanking the customer for their business and
            offering a 5% discount on their next order. He clicks 'Send Invoice' and the system emails it directly to
            the customer."
          </p>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Recording an Expense</h2>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance {">"} Expenses</li>
          <li>Click "Record Expense" button</li>
          <li>Enter expense date</li>
          <li>Select expense category</li>
          <li>Enter amount and payment method</li>
          <li>Add vendor/supplier information</li>
          <li>Attach receipt (optional)</li>
          <li>Save the expense</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-6">
          <h3 className="font-medium">Expense Example</h3>
          <p className="text-sm mt-2 italic">
            "Aisha just purchased new fabric for an upcoming project. She goes to the Expenses section and clicks
            'Record Expense'. She selects 'Fabric Costs' as the category, enters AED 1,200 as the amount, and selects
            'Credit Card' as the payment method. She adds 'Premium Textiles LLC' as the supplier, takes a photo of the
            receipt with her phone, and attaches it to the expense. Now the fabric purchase is properly recorded in her
            accounting system."
          </p>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Creating a Journal Entry
        </h2>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance {">"} Journal Entries</li>
          <li>Click "Create Journal Entry" button</li>
          <li>Enter the journal entry date</li>
          <li>Add a reference number (optional)</li>
          <li>Enter a description for the entry</li>
          <li>Add line items with account, description, and debit/credit amounts</li>
          <li>Ensure the entry is balanced (debits = credits)</li>
          <li>Save the journal entry</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-6">
          <h3 className="font-medium">Journal Entry Example</h3>
          <p className="text-sm mt-2 italic">
            "At the end of the month, Khalid needs to record depreciation on his sewing equipment. He creates a journal
            entry with the date of the last day of the month. He debits 'Depreciation Expense' for AED 500 and credits
            'Accumulated Depreciation' for AED 500. He adds a description 'Monthly depreciation of sewing equipment' and
            saves the entry. This ensures his financial statements accurately reflect the decreasing value of his
            equipment over time."
          </p>
        </div>
      </div>

      <DocsPagination
        prev={{
          title: "Banking",
          href: "/finance/banking",
        }}
        next={{
          title: "Reports",
          href: "/finance/reports",
        }}
      />
    </div>
  )
}
