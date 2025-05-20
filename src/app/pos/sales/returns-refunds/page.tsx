export default function ReturnsRefundsDocumentation() {
  return (
    <div className="p-6 max-w-full">
      <h1 className="text-2xl font-semibold mb-3">Returns & Refunds</h1>
      <p className="text-sm text-muted-foreground mb-6">Process returns and issue refunds efficiently</p>

      <div className="text-sm">
        <p className="mb-4">
          The returns and refunds system allows you to process customer returns, issue refunds, and manage store credit
          efficiently while maintaining accurate inventory and financial records.
        </p>

        <div className="my-6 border rounded-lg overflow-hidden bg-gray-50 p-4">
          <div className="h-48 bg-white rounded border shadow-sm p-3">
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <div className="font-medium">Returns Processing</div>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </div>
            </div>
            <div className="flex h-32">
              <div className="w-2/3 border-r pr-2">
                <div className="flex justify-between border-b pb-1 mb-1 text-xs">
                  <div>Item</div>
                  <div>Return Reason</div>
                  <div>Amount</div>
                </div>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <div>Cotton Shirt - Blue</div>
                    <div>Size Issue</div>
                    <div>SAR 250</div>
                  </div>
                  <div className="flex justify-between font-medium mt-4">
                    <div>Refund Total</div>
                    <div></div>
                    <div>SAR 250</div>
                  </div>
                </div>
              </div>
              <div className="w-1/3 pl-2 flex flex-col">
                <div className="text-xs mb-1">Refund Method</div>
                <div className="space-y-1">
                  <div className="bg-gray-100 p-1 rounded text-xs">Original Payment</div>
                  <div className="bg-gray-100 p-1 rounded text-xs">Store Credit</div>
                  <div className="bg-blue-50 p-1 rounded text-xs border border-blue-200">Cash Refund</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Processing Returns</h2>

        <ol className="space-y-3 mb-6">
          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">1. Access Returns Module</h3>
            <p className="text-xs text-muted-foreground">Click "Returns" in the POS menu or use the shortcut Ctrl+R.</p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">2. Find Original Sale</h3>
            <p className="text-xs text-muted-foreground">
              Search by receipt number, customer name, or transaction date.
            </p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">3. Select Items to Return</h3>
            <p className="text-xs text-muted-foreground">Check the items being returned and enter the return reason.</p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">4. Assess Item Condition</h3>
            <p className="text-xs text-muted-foreground">
              Determine if items can be restocked or must be marked as damaged.
            </p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">5. Process Refund</h3>
            <p className="text-xs text-muted-foreground">
              Select refund method: original payment, store credit, or cash.
            </p>
          </li>

          <li>
            <h3 className="text-sm font-medium">6. Complete Return</h3>
            <p className="text-xs text-muted-foreground">Finalize the return and provide receipt to customer.</p>
          </li>
        </ol>

        <h2 className="text-lg font-medium mt-6 mb-3">Return Types</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Ready-Made Items</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Full refund within return period (14 days)</li>
              <li>• Item condition assessment required</li>
              <li>• Automatically updates inventory</li>
              <li>• Return reason tracking for analytics</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Custom Orders</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Partial refund based on production stage</li>
              <li>• Non-refundable after production begins</li>
              <li>• Store credit options for customer satisfaction</li>
              <li>• Manager approval required</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Fabric Returns</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Unopened/uncut fabric eligible for return</li>
              <li>• Partial returns by length measurement</li>
              <li>• Quality issues require supplier documentation</li>
              <li>• Restocking fee may apply</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Alterations</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Customer satisfaction guarantee</li>
              <li>• Free re-alterations within 7 days</li>
              <li>• No refunds for completed alterations</li>
              <li>• Manager approval for exceptions</li>
            </ul>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Real-World Example</h2>

        <div className="border rounded p-4 mb-6 text-xs italic bg-gray-50">
          <p>
            "A customer returns a ready-made shirt purchased last week due to a size issue. The cashier finds the
            original transaction by scanning the receipt, selects the shirt for return, and verifies it's unworn with
            tags attached. The system automatically calculates the refund amount based on the original payment. Since
            the customer paid by credit card, the refund is processed back to the same card. The inventory is
            automatically updated, adding the shirt back to stock. The entire process takes less than two minutes, and
            the customer receives an email confirmation of the refund."
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 my-6 text-xs">
          <h3 className="text-sm font-medium text-blue-700 mb-1">Pro Tips</h3>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Offer store credit with a small bonus (5-10%) to encourage future purchases</li>
            <li>• Document return reasons thoroughly for product improvement</li>
            <li>• Train staff on return policy exceptions and approval processes</li>
            <li>• Review return patterns weekly to identify potential product issues</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
