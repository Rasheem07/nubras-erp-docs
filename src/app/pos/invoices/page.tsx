export default function InvoicesDocumentation() {
  return (
    <div className="p-6 max-w-full">
      <h1 className="text-2xl font-semibold mb-3">Invoices</h1>
      <p className="text-sm text-muted-foreground mb-6">Create, manage, and track invoices for all transactions</p>

      <div className="text-sm">
        <p className="mb-4">
          The invoicing system allows you to generate professional invoices, track payments, manage partial payments,
          and maintain complete financial records for all transactions.
        </p>

        <div className="my-6 border rounded-lg overflow-hidden bg-gray-50 p-4">
          <div className="h-48 bg-white rounded border shadow-sm p-3">
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <div className="font-medium">Invoice #INV-2023-0458</div>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </div>
            </div>
            <div className="flex h-32">
              <div className="w-2/3 border-r pr-2">
                <div className="flex justify-between text-xs mb-1">
                  <div>
                    <div className="font-medium">Elegant Tailors</div>
                    <div>Riyadh, Saudi Arabia</div>
                  </div>
                  <div className="text-right">
                    <div>Date: 15 May 2023</div>
                    <div>Due: 30 May 2023</div>
                  </div>
                </div>
                <div className="text-xs border-t pt-1">
                  <div className="flex justify-between font-medium border-b pb-1">
                    <div className="w-1/2">Item</div>
                    <div className="w-1/6 text-right">Qty</div>
                    <div className="w-1/6 text-right">Price</div>
                    <div className="w-1/6 text-right">Total</div>
                  </div>
                  <div className="flex justify-between py-1">
                    <div className="w-1/2">Custom Suit (3-piece)</div>
                    <div className="w-1/6 text-right">1</div>
                    <div className="w-1/6 text-right">2,500</div>
                    <div className="w-1/6 text-right">2,500</div>
                  </div>
                  <div className="flex justify-between py-1">
                    <div className="w-1/2">Premium Fabric Upgrade</div>
                    <div className="w-1/6 text-right">1</div>
                    <div className="w-1/6 text-right">500</div>
                    <div className="w-1/6 text-right">500</div>
                  </div>
                </div>
              </div>
              <div className="w-1/3 pl-2 flex flex-col">
                <div className="text-xs space-y-1 mb-2">
                  <div className="flex justify-between">
                    <div>Subtotal:</div>
                    <div>SAR 3,000</div>
                  </div>
                  <div className="flex justify-between">
                    <div>VAT (15%):</div>
                    <div>SAR 450</div>
                  </div>
                  <div className="flex justify-between font-medium">
                    <div>Total:</div>
                    <div>SAR 3,450</div>
                  </div>
                </div>
                <div className="text-xs mt-auto">
                  <div className="font-medium mb-1">Payment Status</div>
                  <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-center">
                    Partially Paid (SAR 1,725)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Invoice Management Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Invoice Creation</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Automatic generation from sales</li>
              <li>• Custom invoice creation</li>
              <li>• Professional templates</li>
              <li>• Logo and branding customization</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Payment Tracking</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Multiple payment methods</li>
              <li>• Partial payment handling</li>
              <li>• Payment history recording</li>
              <li>• Automatic balance calculation</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Tax Management</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Automatic VAT calculation</li>
              <li>• Multiple tax rates support</li>
              <li>• Tax exemption handling</li>
              <li>• Tax reporting capabilities</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Distribution Options</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Print in various formats</li>
              <li>• Email directly to customers</li>
              <li>• PDF generation and download</li>
              <li>• QR code payment options</li>
            </ul>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Creating and Managing Invoices</h2>

        <ol className="space-y-3 mb-6">
          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">1. Generate Invoice</h3>
            <p className="text-xs text-muted-foreground">
              Automatically created from sales or manually through Invoices &gt; New Invoice.
            </p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">2. Add Line Items</h3>
            <p className="text-xs text-muted-foreground">
              Include products, services, and any additional charges or discounts.
            </p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">3. Apply Taxes</h3>
            <p className="text-xs text-muted-foreground">
              Set appropriate tax rates for each line item or the entire invoice.
            </p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">4. Set Payment Terms</h3>
            <p className="text-xs text-muted-foreground">
              Define due date, accepted payment methods, and any deposit requirements.
            </p>
          </li>

          <li>
            <h3 className="text-sm font-medium">5. Distribute Invoice</h3>
            <p className="text-xs text-muted-foreground">Print, email, or generate PDF for the customer.</p>
          </li>
        </ol>

        <h2 className="text-lg font-medium mt-6 mb-3">Handling Payments</h2>

        <div className="space-y-3 mb-6">
          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Full Payments</h3>
            <p className="text-xs text-muted-foreground">
              Record complete payment and automatically mark invoice as paid.
            </p>
          </div>

          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Partial Payments</h3>
            <p className="text-xs text-muted-foreground">
              Record deposit or installment payments and track remaining balance.
            </p>
          </div>

          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Deposits and Balances</h3>
            <p className="text-xs text-muted-foreground">
              Manage initial deposits for custom orders with balance due upon completion.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium">Refunds</h3>
            <p className="text-xs text-muted-foreground">Process full or partial refunds with proper documentation.</p>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Real-World Example</h2>

        <div className="border rounded p-4 mb-6 text-xs italic bg-gray-50">
          <p>
            "When Mohammed orders a custom wedding suit, the system generates an initial invoice detailing all
            components: the base suit price, premium fabric upgrade, custom monogramming, and expedited service fee. The
            invoice automatically calculates 15% VAT and shows a total of SAR 3,450. As per store policy for custom
            orders, Mohammed pays a 50% deposit (SAR 1,725) via credit card, which is recorded against the invoice. The
            system marks the invoice as 'Partially Paid' and schedules a reminder for the balance payment upon
            completion. When the suit is ready, the system generates a final invoice showing the previous payment and
            remaining balance. After Mohammed pays the remaining amount, the invoice is automatically marked as 'Paid in
            Full' and a receipt is emailed to him for his records."
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 my-6 text-xs">
          <h3 className="text-sm font-medium text-blue-700 mb-1">Pro Tips</h3>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Use invoice notes to document special arrangements or payment plans</li>
            <li>• Set up automatic payment reminders for outstanding invoices</li>
            <li>• Include your bank details on invoices for bank transfer payments</li>
            <li>• Regularly review aging reports to manage outstanding payments</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
