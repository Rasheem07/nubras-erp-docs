import { DocsPagination } from "@/components/docs-pagination"

export default function InvoicesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Invoices</h1>
        <p className="text-lg text-muted-foreground mt-2">Creating and managing customer invoices</p>
      </div>

      <div className="space-y-4">
        <p>
          Invoices are formal requests for payment sent to your customers. For a tailoring business, invoices document
          the services provided, materials used, and the amount due. Professional invoicing helps you get paid faster
          and maintains clear records of your sales.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Creating an Invoice</h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Steps to Create an Invoice</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Invoices</li>
          <li>Click "Create Invoice"</li>
          <li>Select a customer or add a new one</li>
          <li>Enter the invoice date</li>
          <li>Enter the due date (typically 15-30 days from invoice date)</li>
          <li>
            Add line items for each service or product:
            <ul className="list-disc list-inside ml-6 mt-2 text-sm">
              <li>Description (e.g., "Custom Suit Tailoring")</li>
              <li>Quantity</li>
              <li>Unit price</li>
              <li>Tax rate if applicable</li>
            </ul>
          </li>
          <li>Add any discounts if applicable</li>
          <li>Add notes or terms and conditions</li>
          <li>Preview the invoice to check for errors</li>
          <li>Click "Save" or "Save and Send" to email it directly to the customer</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Invoice Numbering</h3>
          <p className="text-sm mt-2">
            The system automatically generates sequential invoice numbers (e.g., INV-0001, INV-0002). This helps you
            track invoices and maintain organized records. You can customize the invoice number format in Settings.
          </p>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Invoice Line Items for Tailoring
        </h2>

        <p className="mt-4">For a tailoring business, your invoice line items might include:</p>

        <div className="bg-muted p-4 rounded-lg mt-4 overflow-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr>
                <th className="text-left font-medium p-2">Description</th>
                <th className="text-left font-medium p-2">Quantity</th>
                <th className="text-left font-medium p-2">Unit Price</th>
                <th className="text-left font-medium p-2">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2">Custom Suit Tailoring - Premium Wool</td>
                <td className="p-2">1</td>
                <td className="p-2">AED 2,500.00</td>
                <td className="p-2">AED 2,500.00</td>
              </tr>
              <tr>
                <td className="p-2">Silk Lining Upgrade</td>
                <td className="p-2">1</td>
                <td className="p-2">AED 300.00</td>
                <td className="p-2">AED 300.00</td>
              </tr>
              <tr>
                <td className="p-2">Mother of Pearl Buttons</td>
                <td className="p-2">8</td>
                <td className="p-2">AED 25.00</td>
                <td className="p-2">AED 200.00</td>
              </tr>
              <tr>
                <td className="p-2">Rush Service Fee</td>
                <td className="p-2">1</td>
                <td className="p-2">AED 500.00</td>
                <td className="p-2">AED 500.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={3} className="text-right p-2 font-medium">
                  Subtotal:
                </td>
                <td className="p-2">AED 3,500.00</td>
              </tr>
              <tr>
                <td colSpan={3} className="text-right p-2 font-medium">
                  VAT (5%):
                </td>
                <td className="p-2">AED 175.00</td>
              </tr>
              <tr>
                <td colSpan={3} className="text-right p-2 font-medium">
                  Total:
                </td>
                <td className="p-2 font-medium">AED 3,675.00</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Managing Invoices</h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Invoice Statuses</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Draft</h3>
            <p className="text-sm mt-2">
              Invoices that are still being prepared and have not been finalized or sent to the customer.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Sent</h3>
            <p className="text-sm mt-2">
              Invoices that have been finalized and sent to the customer but have not yet been paid.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Partially Paid</h3>
            <p className="text-sm mt-2">
              Invoices where the customer has made a partial payment but still has a remaining balance.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Paid</h3>
            <p className="text-sm mt-2">Invoices that have been fully paid by the customer.</p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Overdue</h3>
            <p className="text-sm mt-2">Invoices that have passed their due date without being fully paid.</p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Void</h3>
            <p className="text-sm mt-2">Invoices that have been canceled and are no longer valid.</p>
          </div>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Recording Payments</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance {">"} Invoices</li>
          <li>Find the invoice that has been paid</li>
          <li>Click "Record Payment"</li>
          <li>Enter the payment date</li>
          <li>Enter the payment amount (full or partial)</li>
          <li>Select the payment method (cash, bank transfer, credit card, etc.)</li>
          <li>Select the bank account where the payment was received</li>
          <li>Add a reference number if applicable (e.g., check number)</li>
          <li>Click "Save Payment"</li>
        </ol>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Sending Payment Reminders</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance {">"} Invoices</li>
          <li>Filter for "Overdue" invoices</li>
          <li>Select the invoice(s) you want to send reminders for</li>
          <li>Click "Send Reminder"</li>
          <li>Customize the reminder message if needed</li>
          <li>Click "Send"</li>
        </ol>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Invoice Templates</h2>

        <p className="mt-4">
          The Finance Module includes several professional invoice templates designed for tailoring businesses. You can
          customize these templates with your:
        </p>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>Business logo</li>
          <li>Contact information</li>
          <li>Color scheme</li>
          <li>Font style</li>
          <li>Terms and conditions</li>
          <li>Payment instructions</li>
        </ul>

        <p className="mt-4">To customize your invoice template:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance {">"} Settings {">"} Invoice Templates</li>
          <li>Select a template to customize</li>
          <li>Make your desired changes</li>
          <li>Preview the template</li>
          <li>Click "Save Template"</li>
        </ol>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Best Practices for Invoicing
        </h2>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <span className="font-medium">Invoice Promptly:</span> Create and send invoices as soon as services are
            completed to improve cash flow.
          </li>
          <li>
            <span className="font-medium">Be Detailed:</span> Include specific descriptions of services provided and
            materials used.
          </li>
          <li>
            <span className="font-medium">Set Clear Terms:</span> Clearly state payment terms, due dates, and accepted
            payment methods.
          </li>
          <li>
            <span className="font-medium">Follow Up:</span> Send friendly reminders for overdue invoices.
          </li>
          <li>
            <span className="font-medium">Offer Incentives:</span> Consider early payment discounts to encourage prompt
            payment.
          </li>
          <li>
            <span className="font-medium">Keep Records:</span> Maintain copies of all invoices for accounting and tax
            purposes.
          </li>
        </ul>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h3 className="font-medium">Real-World Example</h3>
          <p className="text-sm mt-2 italic">
            "Fatima runs a tailoring business specializing in wedding attire. When she completes a bridal gown
            alteration, she immediately creates an invoice in the Finance Module. She includes detailed line items for
            each service: bodice adjustment, hem shortening, bustle addition, and beadwork repair, along with the
            specific materials used. She sets the payment terms to 'Due on Receipt' since the bride will pick up the
            dress that day. She includes a note thanking the customer for their business and offering a 10% discount on
            future alterations. When the customer arrives, Fatima shows them the invoice on her tablet, and the customer
            pays by credit card. Fatima records the payment immediately, and the system automatically marks the invoice
            as 'Paid' and sends a receipt to the customer's email. This professional invoicing process has helped Fatima
            reduce payment delays and improve her cash flow."
          </p>
        </div>
      </div>

      <DocsPagination
        prev={{
          title: "Transactions",
          href: "/finance/transactions",
        }}
        next={{
          title: "Expenses",
          href: "/finance/transactions/expenses",
        }}
      />
    </div>
  )
}
