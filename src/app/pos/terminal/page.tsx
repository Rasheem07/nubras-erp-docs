import { CreditCard, Link2, ShoppingCart, Package, Users, BarChart4 } from "lucide-react"
import { DocsPagination } from "@/components/docs-pagination"

export default function TerminalDocumentation() {

  return (
    <div className="p-6 max-w-full">
      <h1 className="text-2xl font-semibold mb-3">POS Terminal</h1>
      <p className="text-sm text-muted-foreground mb-6">Process sales transactions quickly and efficiently</p>

      <div className="text-sm">
        <p className="mb-4">
          The POS Terminal is the central interface for processing sales transactions. It provides a fast, intuitive
          experience for cashiers and sales staff to handle customer purchases, apply discounts, process payments, and
          generate receipts.
        </p>

        <div className="my-6 border rounded-lg overflow-hidden bg-gray-50 p-4">
          <div className="h-64 bg-white rounded border shadow-sm p-3">
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <div className="font-medium">POS Terminal</div>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 h-52">
              <div className="col-span-2 border rounded p-2">
                <div className="text-xs font-medium mb-1">Current Transaction</div>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between border-b pb-1">
                    <div>Premium Wool Suit (Navy)</div>
                    <div>SAR 2,500.00</div>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <div>Egyptian Cotton Shirt (White)</div>
                    <div>SAR 350.00</div>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <div>Silk Tie (Burgundy)</div>
                    <div>SAR 180.00</div>
                  </div>
                  <div className="flex justify-between border-b pb-1">
                    <div className="text-blue-600">Loyalty Discount (10%)</div>
                    <div className="text-blue-600">-SAR 303.00</div>
                  </div>
                  <div className="flex justify-between font-medium pt-1">
                    <div>Subtotal</div>
                    <div>SAR 2,727.00</div>
                  </div>
                  <div className="flex justify-between text-gray-500">
                    <div>VAT (15%)</div>
                    <div>SAR 409.05</div>
                  </div>
                  <div className="flex justify-between font-medium text-lg mt-2">
                    <div>Total</div>
                    <div>SAR 3,136.05</div>
                  </div>
                </div>
              </div>
              <div className="border rounded p-2 flex flex-col">
                <div className="text-xs font-medium mb-1">Actions</div>
                <div className="grid grid-cols-2 gap-2 flex-grow">
                  <div className="bg-blue-50 rounded p-1 text-center text-xs flex flex-col items-center justify-center">
                    <ShoppingCart className="h-4 w-4 mb-1" />
                    <div>Add Item</div>
                  </div>
                  <div className="bg-blue-50 rounded p-1 text-center text-xs flex flex-col items-center justify-center">
                    <Users className="h-4 w-4 mb-1" />
                    <div>Customer</div>
                  </div>
                  <div className="bg-blue-50 rounded p-1 text-center text-xs flex flex-col items-center justify-center">
                    <Package className="h-4 w-4 mb-1" />
                    <div>Discount</div>
                  </div>
                  <div className="bg-blue-50 rounded p-1 text-center text-xs flex flex-col items-center justify-center">
                    <BarChart4 className="h-4 w-4 mb-1" />
                    <div>Tax</div>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="bg-green-600 text-white rounded p-2 text-center text-xs font-medium">
                    Complete Payment
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Terminal Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Transaction Processing</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Barcode scanning for quick item entry</li>
              <li>• Manual item search and selection</li>
              <li>• Quantity adjustment and item removal</li>
              <li>• Custom item entry for special orders</li>
              <li>• Transaction hold and recall functionality</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Payment Handling</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Multiple payment methods (cash, card, digital)</li>
              <li>• Split payment processing</li>
              <li>• Foreign currency conversion</li>
              <li>• Change calculation for cash transactions</li>
              <li>• Integrated payment terminal support</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Customer Management</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Customer lookup and selection</li>
              <li>• Quick customer creation</li>
              <li>• Loyalty points tracking and redemption</li>
              <li>• Customer purchase history access</li>
              <li>• Special pricing and discount application</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Receipt Options</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Customizable receipt templates</li>
              <li>• Digital receipt delivery (email/SMS)</li>
              <li>• Gift receipt generation</li>
              <li>• Receipt reprint functionality</li>
              <li>• QR code for digital receipt access</li>
            </ul>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Integration with Enterprise Systems</h2>

        <div className="border rounded-lg p-4 mb-6 bg-gray-50">
          <div className="flex items-center mb-3">
            <CreditCard className="h-5 w-5 text-blue-500 mr-2" />
            <h3 className="text-sm font-medium">Connected to Financial Systems</h3>
          </div>

          <p className="text-xs mb-3">
            The POS Terminal integrates with your financial systems to ensure accurate accounting and reporting.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="flex items-start">
              <Link2 className="h-4 w-4 text-blue-500 mr-1 mt-0.5" />
              <div>
                <span className="font-medium">Real-time Transaction Posting</span>
                <p className="text-muted-foreground">
                  Sales transactions are immediately recorded in the financial system, updating general ledger accounts
                  for sales, taxes, and inventory.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Link2 className="h-4 w-4 text-blue-500 mr-1 mt-0.5" />
              <div>
                <span className="font-medium">Payment Reconciliation</span>
                <p className="text-muted-foreground">
                  End-of-day reconciliation processes match POS transactions with payment processor records and bank
                  deposits.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Link2 className="h-4 w-4 text-blue-500 mr-1 mt-0.5" />
              <div>
                <span className="font-medium">Tax Reporting</span>
                <p className="text-muted-foreground">
                  VAT and other tax collections are automatically categorized and reported to simplify tax compliance
                  and filing.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Terminal Architecture</h2>

        <div className="border rounded p-4 mb-6 bg-gray-50">
          <p className="mb-3">
            The POS Terminal is built on a robust architecture designed for speed, reliability, and offline capability:
          </p>

          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-medium mb-1">User Interface Layer</h3>
              <p className="text-xs text-muted-foreground">
                A responsive, touch-optimized interface that works on various screen sizes from desktop monitors to
                tablets. The UI is designed for speed with large touch targets, keyboard shortcuts, and minimal screen
                transitions.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-1">Business Logic Layer</h3>
              <p className="text-xs text-muted-foreground">
                Handles pricing calculations, tax computation, discount application, and inventory validation. This
                layer enforces business rules such as minimum pricing, discount limits, and inventory availability.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-1">Data Management Layer</h3>
              <p className="text-xs text-muted-foreground">
                Manages local caching of product data, customer information, and transaction history. Supports offline
                operation with transaction queuing and synchronization when connectivity is restored.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-1">Integration Layer</h3>
              <p className="text-xs text-muted-foreground">
                Connects with payment processors, receipt printers, barcode scanners, cash drawers, and customer
                displays. Provides APIs for real-time integration with inventory, customer, and financial systems.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Processing a Sale</h2>

        <ol className="space-y-3 mb-6">
          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">1. Start Transaction</h3>
            <p className="text-xs text-muted-foreground">
              Begin a new transaction by selecting "New Sale" or automatically when scanning an item.
            </p>
            <div className="bg-gray-50 border rounded p-2 text-xs mt-1">
              <span className="font-medium">System Action:</span> The system creates a new transaction record with a
              unique identifier and timestamps the start of the transaction. It prepares the transaction screen and
              activates connected peripherals like barcode scanners.
            </div>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">2. Add Items</h3>
            <p className="text-xs text-muted-foreground">
              Scan barcodes, search for items, or select from category menus to add products to the transaction.
            </p>
            <div className="bg-gray-50 border rounded p-2 text-xs mt-1">
              <span className="font-medium">System Action:</span> For each item added, the system:
              <ul className="pl-4 mt-1 space-y-1">
                <li>• Retrieves current pricing, including any active promotions</li>
                <li>• Checks inventory availability</li>
                <li>• Applies any category-specific tax rules</li>
                <li>• Updates the transaction total</li>
                <li>• Displays item details on the customer-facing display (if available)</li>
              </ul>
            </div>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">3. Apply Customer Profile (Optional)</h3>
            <p className="text-xs text-muted-foreground">
              Search for and select the customer to apply their profile, loyalty status, and special pricing.
            </p>
            <div className="bg-gray-50 border rounded p-2 text-xs mt-1">
              <span className="font-medium">System Action:</span> When a customer is selected, the system:
              <ul className="pl-4 mt-1 space-y-1">
                <li>• Loads customer details including loyalty status and available points</li>
                <li>• Applies any customer-specific pricing or discounts</li>
                <li>• Recalculates the transaction with applicable customer benefits</li>
                <li>• Prepares loyalty point accrual calculations</li>
              </ul>
            </div>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">4. Apply Discounts (Optional)</h3>
            <p className="text-xs text-muted-foreground">
              Add manual discounts, apply promotion codes, or redeem loyalty points.
            </p>
            <div className="bg-gray-50 border rounded p-2 text-xs mt-1">
              <span className="font-medium">System Action:</span> The system validates the discount against
              authorization rules and applies it to the appropriate items or the entire transaction. It records the
              discount type, amount, and authorization for audit purposes.
            </div>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">5. Process Payment</h3>
            <p className="text-xs text-muted-foreground">Select payment method(s) and complete the payment process.</p>
            <div className="bg-gray-50 border rounded p-2 text-xs mt-1">
              <span className="font-medium">System Action:</span> The system:
              <ul className="pl-4 mt-1 space-y-1">
                <li>• Displays payment options based on configuration</li>
                <li>• For card payments, initiates the payment terminal integration</li>
                <li>• For cash, calculates and displays change amount</li>
                <li>• For split payments, tracks remaining balance</li>
                <li>• Records payment details including method, amount, and authorization codes</li>
              </ul>
            </div>
          </li>

          <li>
            <h3 className="text-sm font-medium">6. Complete Transaction</h3>
            <p className="text-xs text-muted-foreground">
              Finalize the sale, generate receipt, and update inventory and customer records.
            </p>
            <div className="bg-gray-50 border rounded p-2 text-xs mt-1">
              <span className="font-medium">System Action:</span> Upon completion, the system:
              <ul className="pl-4 mt-1 space-y-1">
                <li>• Finalizes the transaction record with completion timestamp</li>
                <li>• Updates inventory quantities for all items sold</li>
                <li>• Awards loyalty points if applicable</li>
                <li>• Generates and prints/emails receipt based on customer preference</li>
                <li>• Opens cash drawer if cash payment was received</li>
                <li>• Sends transaction data to integrated systems (accounting, ERP, etc.)</li>
                <li>• Prepares the terminal for the next transaction</li>
              </ul>
            </div>
          </li>
        </ol>

        <h2 className="text-lg font-medium mt-6 mb-3">Special Transaction Types</h2>

        <div className="space-y-4 mb-6">
          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Returns and Exchanges</h3>
            <p className="text-xs text-muted-foreground mb-2">Process customer returns and product exchanges.</p>
            <div className="text-xs">
              <span className="font-medium">How it works:</span>
              <ol className="list-decimal pl-4 mt-1 space-y-1">
                <li>Select "Return" or "Exchange" from the transaction type menu</li>
                <li>Scan or search for the original receipt</li>
                <li>Select items being returned or exchanged</li>
                <li>For returns: process refund to original payment method when possible</li>
                <li>For exchanges: add new items and calculate price difference</li>
                <li>Complete the transaction and update inventory</li>
              </ol>
              <p className="mt-2">
                The system enforces return policy rules such as time limits and receipt requirements. It also tracks
                return reasons for reporting and quality control.
              </p>
            </div>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Layaway and Deposits</h3>
            <p className="text-xs text-muted-foreground mb-2">
              Manage partial payments and item reservations for future pickup.
            </p>
            <div className="text-xs">
              <span className="font-medium">How it works:</span>
              <ol className="list-decimal pl-4 mt-1 space-y-1">
                <li>Create a normal transaction with all items</li>
                <li>Select "Layaway" or "Deposit" as the transaction type</li>
                <li>Set the deposit amount or percentage</li>
                <li>Process the initial payment</li>
                <li>Set the expected completion date</li>
                <li>The system reserves inventory and generates a layaway agreement</li>
              </ol>
              <p className="mt-2">
                When the customer returns to complete the purchase, the system recalls the layaway, calculates the
                remaining balance, and processes the final payment.
              </p>
            </div>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Custom Orders</h3>
            <p className="text-xs text-muted-foreground mb-2">
              Process orders for custom-made items like tailored garments.
            </p>
            <div className="text-xs">
              <span className="font-medium">How it works:</span>
              <ol className="list-decimal pl-4 mt-1 space-y-1">
                <li>Select "Custom Order" from the transaction type menu</li>
                <li>Create or select the custom item with specifications</li>
                <li>Record measurements and customization details</li>
                <li>Calculate pricing based on materials, labor, and complexity</li>
                <li>Process deposit payment (typically 50%)</li>
                <li>Generate work order for production team</li>
              </ol>
              <p className="mt-2">
                The system tracks the order through production stages and notifies staff when it's ready for final
                payment and customer pickup.
              </p>
            </div>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Gift Cards and Store Credit</h3>
            <p className="text-xs text-muted-foreground mb-2">Sell and redeem gift cards and store credit.</p>
            <div className="text-xs">
              <span className="font-medium">How it works:</span>
              <ol className="list-decimal pl-4 mt-1 space-y-1">
                <li>For selling: Select "Gift Card" from the product menu and set amount</li>
                <li>For redeeming: Select "Gift Card" as a payment method</li>
                <li>Scan or enter the gift card number</li>
                <li>The system validates the card and available balance</li>
                <li>Apply the amount to the transaction</li>
                <li>The system updates the gift card balance</li>
              </ol>
              <p className="mt-2">
                The system tracks gift card issuance, redemption, and balances. It also handles expiration dates and
                activation requirements based on configured policies.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">End-of-Day Procedures</h2>

        <ol className="space-y-3 mb-6">
          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">1. Cash Drawer Count</h3>
            <p className="text-xs text-muted-foreground">
              Count cash in drawer and reconcile with system-expected amount.
            </p>
            <div className="bg-gray-50 border rounded p-2 text-xs mt-1">
              <span className="font-medium">System Action:</span> The system provides a counting interface where the
              cashier enters quantities of each denomination. It calculates the total and compares it with the expected
              amount based on recorded cash transactions, highlighting any discrepancies.
            </div>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">2. Payment Reconciliation</h3>
            <p className="text-xs text-muted-foreground">
              Verify that all electronic payments match processor records.
            </p>
            <div className="bg-gray-50 border rounded p-2 text-xs mt-1">
              <span className="font-medium">System Action:</span> The system generates a report of all card and digital
              payments, which can be compared with payment processor batch totals. Any discrepancies are flagged for
              investigation.
            </div>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">3. Generate Reports</h3>
            <p className="text-xs text-muted-foreground">Create daily sales, tax, and transaction summary reports.</p>
            <div className="bg-gray-50 border rounded p-2 text-xs mt-1">
              <span className="font-medium">System Action:</span> The system automatically generates end-of-day reports
              including sales by category, payment method totals, tax collected, discounts applied, and cashier
              performance metrics.
            </div>
          </li>

          <li>
            <h3 className="text-sm font-medium">4. Close Terminal</h3>
            <p className="text-xs text-muted-foreground">
              Officially close the business day and prepare for the next day.
            </p>
            <div className="bg-gray-50 border rounded p-2 text-xs mt-1">
              <span className="font-medium">System Action:</span> The system finalizes all transactions for the day,
              updates accounting records, backs up transaction data, and resets daily counters. It may also initiate
              data synchronization with central systems and perform maintenance tasks.
            </div>
          </li>
        </ol>

        <h2 className="text-lg font-medium mt-6 mb-3">Real-World Example</h2>

        <div className="border rounded p-4 mb-6 text-xs italic bg-gray-50">
          <p>
            "At Elegant Tailors, a customer brings three items to the counter: a custom-tailored suit that was completed
            today, a ready-made silk tie, and a pair of cufflinks. The sales associate scans the barcode on the suit's
            tag, which pulls up the custom order details including the 50% deposit already paid. The tie and cufflinks
            are scanned from their product tags. The system recognizes the customer from their phone number and applies
            their loyalty discount of 5% to eligible items. The customer wants to pay the remaining balance with a
            combination of a gift card they received and their credit card. The sales associate processes the gift card
            first, which reduces the balance, then completes the transaction with the credit card for the remaining
            amount. The system automatically updates inventory for the tie and cufflinks, marks the custom suit as
            delivered, adds loyalty points to the customer's account, and emails a receipt with a satisfaction survey.
            The entire process takes less than two minutes."
          </p>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Troubleshooting Common Issues</h2>

        <div className="space-y-3 mb-6">
          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Payment Terminal Connection Errors</h3>
            <p className="text-xs text-muted-foreground">
              If the payment terminal fails to connect or process payments:
            </p>
            <ol className="list-decimal pl-4 text-xs mt-1">
              <li>Check physical connections and power to the terminal</li>
              <li>Verify network connectivity for the terminal</li>
              <li>Restart the payment terminal application</li>
              <li>Contact payment processor support if issues persist</li>
            </ol>
          </div>

          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Barcode Scanner Issues</h3>
            <p className="text-xs text-muted-foreground">When barcodes aren't scanning properly:</p>
            <ol className="list-decimal pl-4 text-xs mt-1">
              <li>Clean the scanner window</li>
              <li>Check that the scanner is properly connected</li>
              <li>Verify that the barcode is not damaged or low quality</li>
              <li>Try manual entry of the product code as an alternative</li>
            </ol>
          </div>

          <div>
            <h3 className="text-sm font-medium">System Slowdowns</h3>
            <p className="text-xs text-muted-foreground">If the terminal becomes slow or unresponsive:</p>
            <ol className="list-decimal pl-4 text-xs mt-1">
              <li>Close unnecessary applications running in the background</li>
              <li>Check network connectivity if using cloud-based features</li>
              <li>Restart the terminal application</li>
              <li>Contact IT support if performance issues continue</li>
            </ol>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 my-6 text-xs">
          <h3 className="text-sm font-medium text-blue-700 mb-1">Pro Tips</h3>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Learn keyboard shortcuts for common functions to speed up transactions</li>
            <li>• Use the "Quick Items" feature to create buttons for frequently sold products</li>
            <li>• Create customer profiles in advance for regular clients to speed up checkout</li>
            <li>• Regularly check for system updates to ensure you have the latest features and security patches</li>
            <li>• Practice different transaction types during quiet periods to build proficiency</li>
          </ul>
        </div>

        <DocsPagination prev={{href: "/pos", title: "pos"}} next={{href: "/pos", title: "pos"}} />

      </div>
    </div>
  )
}
