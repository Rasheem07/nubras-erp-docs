import { DocsPagination } from "@/components/docs-pagination"
import { AlertCircle, CheckCircle2, HelpCircle, Database, Wallet, UserCircle } from "lucide-react"

export default function ProcessingSalesDocumentation() {

  return (
    <div className="p-6 max-w-full">
      <h1 className="text-2xl font-semibold mb-3">Processing Sales</h1>
      <p className="text-sm text-muted-foreground mb-6">Efficiently process sales transactions in the POS system</p>

      <div className="text-sm">
        <p className="mb-4">
          The sales processing interface is designed for <strong>speed and accuracy</strong>, allowing you to serve
          customers efficiently while capturing all necessary information for inventory management, financial reporting,
          and customer relationship management.
        </p>

        <div className="my-6 border rounded-lg overflow-hidden bg-gray-50 p-4">
          <div className="h-48 bg-white rounded border shadow-sm p-3">
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <div className="font-medium">POS Terminal</div>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </div>
            </div>
            <div className="flex h-32">
              <div className="w-2/3 border-r pr-2">
                <div className="flex justify-between border-b pb-1 mb-1 text-xs">
                  <div>Item</div>
                  <div>Price</div>
                </div>
                <div className="text-xs space-y-1">
                  <div className="flex justify-between">
                    <div>Premium Wool Fabric</div>
                    <div>SAR 450</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Custom Tailoring</div>
                    <div>SAR 350</div>
                  </div>
                  <div className="flex justify-between font-medium mt-4">
                    <div>Total</div>
                    <div>SAR 800</div>
                  </div>
                </div>
              </div>
              <div className="w-1/3 pl-2 flex flex-col">
                <div className="text-xs mb-1">Payment Method</div>
                <div className="space-y-1">
                  <div className="bg-gray-100 p-1 rounded text-xs">Cash</div>
                  <div className="bg-gray-100 p-1 rounded text-xs">Card</div>
                  <div className="bg-blue-50 p-1 rounded text-xs border border-blue-200">Split Payment</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">How Sales Processing Works</h2>

        <div className="border rounded-lg p-4 mb-6 bg-gray-50">
          <p className="mb-3">
            The POS sales processing system follows a <strong>structured workflow</strong> that ensures accurate
            transaction recording, inventory updates, and customer management:
          </p>

          <div className="space-y-4">
            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-3 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-medium mb-1">Transaction Initiation</h3>
                <p className="text-xs text-muted-foreground">
                  When you start a new sale, the system creates a <strong>temporary transaction record</strong> and
                  assigns it a unique ID. This record remains in memory until completed or abandoned. The system also
                  initializes a transaction log to track all changes.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-3 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-medium mb-1">Item Addition & Pricing</h3>
                <p className="text-xs text-muted-foreground">
                  As items are added, the system retrieves pricing from the <strong>product database</strong>. For
                  variable items like fabrics, it calculates based on quantity (meters) and unit price. For custom
                  services, it applies the pricing rules configured in the system. The pricing engine also checks for
                  active promotions, volume discounts, and customer-specific pricing.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-3 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-medium mb-1">Tax Calculation</h3>
                <p className="text-xs text-muted-foreground">
                  The system automatically applies the appropriate <strong>tax rate</strong> (15% VAT for Saudi Arabia)
                  to taxable items. Tax-exempt items are marked accordingly. The system supports both tax-inclusive and
                  tax-exclusive pricing models. Tax calculations are performed in real-time and comply with local tax
                  regulations, including handling of fractional amounts.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-3 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-medium mb-1">Payment Processing</h3>
                <p className="text-xs text-muted-foreground">
                  When payment is processed, the system records the <strong>payment method</strong>, amount, and any
                  change given. For card payments, it interfaces with the payment terminal via a secure API. For split
                  payments, it tracks each payment separately. All payment transactions are encrypted and stored with
                  reference IDs for reconciliation.
                </p>
              </div>
            </div>

            <div className="flex">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-3 flex-shrink-0">
                5
              </div>
              <div>
                <h3 className="font-medium mb-1">Transaction Completion</h3>
                <p className="text-xs text-muted-foreground">
                  Upon completion, the system: 1) <strong>Updates inventory levels</strong> through real-time database
                  transactions, 2) Records the sale in the financial database with proper accounting entries, 3) Updates
                  customer purchase history and loyalty points, 4) Generates a receipt with a unique transaction ID, and
                  5) For custom orders, creates production tasks in the workflow management system.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Integration with Other Modules</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="border rounded p-3">
            <div className="flex items-center mb-2">
              <Database className="h-4 w-4 text-purple-500 mr-2" />
              <h3 className="text-sm font-medium">Inventory Integration</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              <strong>Real-time inventory updates</strong> occur with each sale.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Stock levels decrease immediately upon sale</li>
              <li>• Fabric cuts are precisely tracked by length</li>
              <li>• Low stock alerts trigger automatically</li>
              <li>• Reserved items are tracked separately</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <div className="flex items-center mb-2">
              <Wallet className="h-4 w-4 text-green-500 mr-2" />
              <h3 className="text-sm font-medium">Finance Integration</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              <strong>Automated financial transactions</strong> maintain accounting accuracy.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Sales post to revenue accounts by category</li>
              <li>• Tax amounts are segregated for reporting</li>
              <li>• Deposits create liability entries</li>
              <li>• Cash management reconciles with drawer counts</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <div className="flex items-center mb-2">
              <UserCircle className="h-4 w-4 text-blue-500 mr-2" />
              <h3 className="text-sm font-medium">CRM Integration</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              <strong>Customer data enrichment</strong> with each transaction.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Purchase history updates in real-time</li>
              <li>• Loyalty points accrue automatically</li>
              <li>• Customer preferences are tracked</li>
              <li>• Communication triggers based on purchases</li>
            </ul>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Detailed Sales Process Workflow</h2>

        <ol className="space-y-4 mb-6">
          <li className="border-b pb-3">
            <h3 className="text-sm font-medium">1. Access POS Terminal</h3>
            <p className="text-xs text-muted-foreground mb-2">
              Click "POS" in the main navigation or use shortcut <strong>Ctrl+P</strong>.
            </p>
            <div className="bg-gray-50 border rounded p-2 text-xs">
              <span className="font-medium">System Action:</span> The POS terminal loads with a new blank transaction.
              The system checks user permissions and applies the appropriate access level. A transaction ID is generated
              but not committed to the database until completion.
            </div>
          </li>

          <li className="border-b pb-3">
            <h3 className="text-sm font-medium">2. Select Customer</h3>
            <p className="text-xs text-muted-foreground mb-2">
              Search existing customers or add a new one with the "+" button.
            </p>
            <div className="bg-gray-50 border rounded p-2 text-xs mb-2">
              <span className="font-medium">System Action:</span> When a customer is selected, their profile, purchase
              history, and any saved measurements are loaded from the CRM database. Any applicable loyalty discounts or
              special pricing are automatically applied based on customer segmentation rules and purchase history.
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded p-2 text-xs flex">
              <AlertCircle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-medium text-amber-800">Important:</span> Customer selection is required for custom
                tailoring orders but optional for retail sales. For anonymous sales, the system uses a default "Walk-in
                Customer" profile to maintain sales analytics integrity.
              </div>
            </div>
          </li>

          <li className="border-b pb-3">
            <h3 className="text-sm font-medium">3. Add Items</h3>
            <p className="text-xs text-muted-foreground mb-2">
              Scan barcode, search by name, or browse categories to add items.
            </p>
            <div className="bg-gray-50 border rounded p-2 text-xs mb-2">
              <span className="font-medium">System Action:</span> The system verifies stock availability in real-time by
              querying the inventory database. For fabric items, you can specify the quantity in meters, and the system
              will check if sufficient continuous length is available. For ready-made items, you can select size and
              color variants from available stock. The system also checks for quantity restrictions and bulk pricing
              thresholds.
            </div>
            <div className="mt-3 border rounded p-2">
              <h4 className="text-xs font-medium mb-1">Example: Adding Fabric to a Sale</h4>
              <ol className="text-xs list-decimal pl-4 space-y-1 text-muted-foreground">
                <li>
                  Click "Add Item" or press <strong>F3</strong>
                </li>
                <li>Select "Fabric" category or scan the fabric barcode</li>
                <li>Choose "Premium Wool - Navy" from the list</li>
                <li>Enter quantity: 2.5 meters</li>
                <li>System calculates: 2.5m × SAR 180/m = SAR 450</li>
                <li>Item appears in the transaction list with detailed attributes</li>
              </ol>
            </div>
          </li>

          <li className="border-b pb-3">
            <h3 className="text-sm font-medium">4. Apply Discounts</h3>
            <p className="text-xs text-muted-foreground mb-2">
              Click "Discounts" to apply manual discounts or promotions.
            </p>
            <div className="bg-gray-50 border rounded p-2 text-xs mb-2">
              <span className="font-medium">System Action:</span> Discounts can be applied at the item level or to the
              entire transaction. The system records the discount reason and requires manager approval for discounts
              exceeding 15%. All discount applications are logged with the authorizing user ID for audit purposes. The
              system also checks for discount stacking rules and maximum discount limits.
            </div>
            <div className="mt-3 border rounded p-2">
              <h4 className="text-xs font-medium mb-1">Available Discount Types</h4>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="font-medium">Percentage Discount:</span>
                  <p className="text-muted-foreground">
                    Reduces the price by a percentage (e.g., <strong>10% off</strong>)
                  </p>
                </div>
                <div>
                  <span className="font-medium">Fixed Amount:</span>
                  <p className="text-muted-foreground">
                    Reduces the price by a specific amount (e.g., <strong>SAR 50 off</strong>)
                  </p>
                </div>
                <div>
                  <span className="font-medium">Buy X Get Y:</span>
                  <p className="text-muted-foreground">
                    Promotional offers like "<strong>Buy 2 Get 1 Free</strong>"
                  </p>
                </div>
                <div>
                  <span className="font-medium">Loyalty Discount:</span>
                  <p className="text-muted-foreground">
                    Special pricing for <strong>loyalty program members</strong>
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li className="border-b pb-3">
            <h3 className="text-sm font-medium">5. Process Payment</h3>
            <p className="text-xs text-muted-foreground mb-2">
              Select payment method (cash, card, mobile) and enter amount.
            </p>
            <div className="bg-gray-50 border rounded p-2 text-xs mb-2">
              <span className="font-medium">System Action:</span> For cash payments, the system calculates change and
              updates the cash drawer balance. For card payments, it connects to the payment terminal via a secure
              payment gateway API, sending transaction amount and awaiting authorization code. For split payments, it
              tracks the remaining balance until fully paid, allowing multiple payment methods to be combined. All
              payment transactions are logged with timestamps and method details.
            </div>
            <div className="mt-3 border rounded p-2">
              <h4 className="text-xs font-medium mb-1">Example: Processing a Split Payment</h4>
              <ol className="text-xs list-decimal pl-4 space-y-1 text-muted-foreground">
                <li>
                  Total transaction amount: <strong>SAR 800</strong>
                </li>
                <li>Click "Split Payment" button</li>
                <li>Select "Card" and enter SAR 500</li>
                <li>
                  System shows remaining balance: <strong>SAR 300</strong>
                </li>
                <li>Select "Cash" and enter SAR 300</li>
                <li>System marks payment as complete and records both payment methods</li>
              </ol>
            </div>
          </li>

          <li>
            <h3 className="text-sm font-medium">6. Complete Sale</h3>
            <p className="text-xs text-muted-foreground mb-2">
              Print/email receipt and schedule delivery for tailoring orders.
            </p>
            <div className="bg-gray-50 border rounded p-2 text-xs mb-2">
              <span className="font-medium">System Action:</span> The system finalizes the transaction with an atomic
              database operation that updates inventory, records the sale in the financial database with proper
              accounting entries, and updates customer purchase history. For custom orders, it creates production tasks
              in the workflow management system and assigns them based on workload balancing algorithms. The transaction
              is permanently stored with a unique identifier for future reference.
            </div>
            <div className="flex space-x-2 mt-3">
              <div className="border rounded p-2 flex-1">
                <h4 className="text-xs font-medium mb-1">Receipt Options</h4>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>
                    • Print <strong>physical receipt</strong>
                  </li>
                  <li>• Email receipt to customer</li>
                  <li>• SMS receipt link</li>
                  <li>• No receipt (save paper)</li>
                </ul>
              </div>
              <div className="border rounded p-2 flex-1">
                <h4 className="text-xs font-medium mb-1">For Custom Orders</h4>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>
                    • Schedule <strong>fitting appointment</strong>
                  </li>
                  <li>• Assign to specific tailor</li>
                  <li>• Set priority level</li>
                  <li>• Specify delivery date</li>
                </ul>
              </div>
            </div>
          </li>
        </ol>

        <h2 className="text-lg font-medium mt-6 mb-3">Common Scenarios and Workflows</h2>

        <div className="space-y-6 mb-6">
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-blue-50 p-3 border-b border-blue-100">
              <h3 className="text-sm font-medium text-blue-800">Scenario 1: Basic Retail Sale</h3>
            </div>
            <div className="p-3">
              <div className="text-xs space-y-3">
                <p>
                  <span className="font-medium">Customer:</span> Walks in to purchase a ready-made shirt
                </p>
                <ol className="list-decimal pl-4 space-y-1 text-muted-foreground">
                  <li>
                    Cashier opens a new transaction (<strong>F1</strong>)
                  </li>
                  <li>Scans the shirt barcode or searches by name</li>
                  <li>System adds the shirt to the transaction (SAR 250)</li>
                  <li>Cashier asks if customer wants to join loyalty program (declines)</li>
                  <li>Customer pays with credit card</li>
                  <li>Cashier selects "Card Payment" and processes through terminal</li>
                  <li>System prints receipt with transaction ID and return policy</li>
                  <li>Transaction complete - inventory updated automatically</li>
                </ol>
                <div className="bg-green-50 border border-green-100 rounded p-2 flex">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-green-800">Key Benefit:</span> Quick transaction processing with
                    minimal steps for simple retail purchases. The entire process takes less than 30 seconds for
                    experienced cashiers.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="bg-blue-50 p-3 border-b border-blue-100">
              <h3 className="text-sm font-medium text-blue-800">Scenario 2: Custom Tailoring Order</h3>
            </div>
            <div className="p-3">
              <div className="text-xs space-y-3">
                <p>
                  <span className="font-medium">Customer:</span> Regular client ordering a custom suit
                </p>
                <ol className="list-decimal pl-4 space-y-1 text-muted-foreground">
                  <li>
                    Cashier opens a new transaction (<strong>F1</strong>)
                  </li>
                  <li>Searches for customer by name "Ahmed Al-Farsi"</li>
                  <li>System loads customer profile with saved measurements</li>
                  <li>Cashier selects "Custom Order" → "Suit"</li>
                  <li>Selects fabric: "Premium Wool - Navy" (2.5m at SAR 180/m)</li>
                  <li>Adds customization options (style: modern fit, lining: silk, buttons: horn)</li>
                  <li>
                    System calculates total: <strong>SAR 2,500</strong> (fabric + tailoring)
                  </li>
                  <li>Applies 10% loyalty discount: -SAR 250</li>
                  <li>
                    Final total: <strong>SAR 2,250</strong>
                  </li>
                  <li>Customer pays 50% deposit (SAR 1,125) by card</li>
                  <li>Cashier schedules fitting for next week</li>
                  <li>System generates order ticket for production with detailed specifications</li>
                  <li>Receipt emailed to customer with order tracking information</li>
                </ol>
                <div className="bg-green-50 border border-green-100 rounded p-2 flex">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-green-800">Key Benefit:</span> Comprehensive order management with
                    integrated measurements, production scheduling, and partial payment handling. The system maintains
                    the order status through the entire production lifecycle.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="bg-blue-50 p-3 border-b border-blue-100">
              <h3 className="text-sm font-medium text-blue-800">Scenario 3: Mixed Transaction with Discount</h3>
            </div>
            <div className="p-3">
              <div className="text-xs space-y-3">
                <p>
                  <span className="font-medium">Customer:</span> New customer purchasing multiple items
                </p>
                <ol className="list-decimal pl-4 space-y-1 text-muted-foreground">
                  <li>
                    Cashier opens a new transaction (<strong>F1</strong>)
                  </li>
                  <li>Creates new customer profile with basic information</li>
                  <li>
                    Adds items:
                    <ul className="list-disc pl-4 mt-1">
                      <li>
                        Ready-made shirt: <strong>SAR 250</strong>
                      </li>
                      <li>
                        Silk tie: <strong>SAR 120</strong>
                      </li>
                      <li>
                        Alteration service (shirt sleeves): <strong>SAR 45</strong>
                      </li>
                    </ul>
                  </li>
                  <li>
                    System calculates subtotal: <strong>SAR 415</strong>
                  </li>
                  <li>Cashier applies "New Customer" discount (5%): -SAR 20.75</li>
                  <li>
                    Final total: <strong>SAR 394.25</strong>
                  </li>
                  <li>Customer pays with cash (SAR 400)</li>
                  <li>System calculates change: SAR 5.75</li>
                  <li>Cashier prints receipt and schedules alteration pickup</li>
                  <li>System creates alteration task for tailoring department with priority level</li>
                </ol>
                <div className="bg-green-50 border border-green-100 rounded p-2 flex">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-green-800">Key Benefit:</span> Flexible transaction handling
                    combining products and services with promotional discounts. The system handles mixed item types
                    seamlessly while maintaining accurate inventory and service scheduling.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="bg-blue-50 p-3 border-b border-blue-100">
              <h3 className="text-sm font-medium text-blue-800">Scenario 4: Processing a Return</h3>
            </div>
            <div className="p-3">
              <div className="text-xs space-y-3">
                <p>
                  <span className="font-medium">Customer:</span> Returning a shirt purchased last week
                </p>
                <ol className="list-decimal pl-4 space-y-1 text-muted-foreground">
                  <li>
                    Cashier clicks "Returns" or presses <strong>F7</strong>
                  </li>
                  <li>Scans original receipt barcode or searches by customer name</li>
                  <li>System loads the original transaction details</li>
                  <li>Cashier selects the item being returned (shirt)</li>
                  <li>Selects return reason: "Size issue"</li>
                  <li>System verifies return is within policy period (14 days)</li>
                  <li>Cashier inspects item and confirms it's in resellable condition</li>
                  <li>
                    System calculates refund amount: <strong>SAR 250</strong>
                  </li>
                  <li>Cashier processes refund to original payment method (credit card)</li>
                  <li>System prints return receipt and updates inventory</li>
                  <li>Item is added back to available stock with return notation</li>
                </ol>
                <div className="bg-green-50 border border-green-100 rounded p-2 flex">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-green-800">Key Benefit:</span> Streamlined return process with
                    automatic inventory updates and financial adjustments. The system maintains a complete audit trail
                    linking the return to the original sale.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Advanced Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Order Suspension & Retrieval</h3>
            <p className="text-xs text-muted-foreground mb-2">
              Temporarily save transactions to serve other customers.
            </p>
            <div className="text-xs">
              <span className="font-medium">How it works:</span>
              <ol className="list-decimal pl-4 mt-1 text-muted-foreground">
                <li>
                  Press <strong>F9</strong> to suspend current transaction
                </li>
                <li>System stores all items and customer details</li>
                <li>Serve other customers as needed</li>
                <li>
                  Press <strong>F10</strong> to view suspended transactions
                </li>
                <li>Select transaction to resume</li>
              </ol>
              <p className="mt-1">
                The system can maintain up to 20 suspended transactions per terminal. Transactions are automatically
                cleared after 24 hours of inactivity.
              </p>
            </div>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Price Override Controls</h3>
            <p className="text-xs text-muted-foreground mb-2">Secure process for authorized price adjustments.</p>
            <div className="text-xs">
              <span className="font-medium">How it works:</span>
              <ol className="list-decimal pl-4 mt-1 text-muted-foreground">
                <li>
                  Right-click item or press <strong>Alt+P</strong>
                </li>
                <li>Select "Override Price" option</li>
                <li>Enter new price and reason</li>
                <li>System prompts for manager authorization</li>
                <li>Manager enters credentials or scans approval card</li>
                <li>System logs the override with all details</li>
              </ol>
              <p className="mt-1">
                Price overrides are limited by user role permissions and maximum percentage thresholds configured in the
                system settings.
              </p>
            </div>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Customer Order History</h3>
            <p className="text-xs text-muted-foreground mb-2">Access and reuse previous customer orders.</p>
            <div className="text-xs">
              <span className="font-medium">How it works:</span>
              <ol className="list-decimal pl-4 mt-1 text-muted-foreground">
                <li>Select customer in transaction screen</li>
                <li>
                  Click "Order History" or press <strong>F6</strong>
                </li>
                <li>View list of previous orders with details</li>
                <li>Select order to view complete information</li>
                <li>Option to "Repeat Order" with one click</li>
                <li>System adds all items from previous order</li>
                <li>Adjust quantities or options as needed</li>
              </ol>
              <p className="mt-1">
                This feature is particularly useful for regular customers who frequently order the same items or
                services.
              </p>
            </div>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Offline Mode Operation</h3>
            <p className="text-xs text-muted-foreground mb-2">Continue sales during internet outages.</p>
            <div className="text-xs">
              <span className="font-medium">How it works:</span>
              <ol className="list-decimal pl-4 mt-1 text-muted-foreground">
                <li>System automatically detects connection loss</li>
                <li>Switches to offline mode with local database</li>
                <li>Continues processing sales with cached data</li>
                <li>Card payments switch to offline authorization</li>
                <li>When connection restores, system synchronizes</li>
                <li>All transactions are uploaded to central database</li>
              </ol>
              <p className="mt-1">
                Offline mode has some limitations: new customers cannot be added, and some promotions may not be
                available until reconnection.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Troubleshooting Common Issues</h2>

        <div className="space-y-3 mb-6">
          <div className="border rounded p-3 flex">
            <HelpCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium mb-1">Issue: Item Not Found in Search</h3>
              <p className="text-xs text-muted-foreground mb-2">
                When searching for an item, it doesn't appear in the results even though you know it's in inventory.
              </p>
              <div className="text-xs">
                <span className="font-medium">Solution:</span> Try these steps:
                <ol className="list-decimal pl-4 mt-1 text-muted-foreground">
                  <li>Check for typos in your search term</li>
                  <li>Search by SKU number instead of name</li>
                  <li>Verify the item is active in inventory (not archived)</li>
                  <li>Check if the item is location-specific and you're in the correct store</li>
                  <li>
                    Use the advanced search (<strong>F4</strong>) with fewer filters
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="border rounded p-3 flex">
            <HelpCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium mb-1">Issue: Payment Terminal Connection Error</h3>
              <p className="text-xs text-muted-foreground mb-2">
                When trying to process a card payment, the system shows "Cannot connect to payment terminal."
              </p>
              <div className="text-xs">
                <span className="font-medium">Solution:</span> Follow these steps:
                <ol className="list-decimal pl-4 mt-1 text-muted-foreground">
                  <li>Check if the payment terminal is powered on</li>
                  <li>Verify network connection on both POS and terminal</li>
                  <li>Restart the payment terminal</li>
                  <li>Try switching to manual card entry mode (requires manager approval)</li>
                  <li>If problem persists, switch to an alternative payment method</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="border rounded p-3 flex">
            <HelpCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium mb-1">Issue: Discount Requires Approval</h3>
              <p className="text-xs text-muted-foreground mb-2">
                When applying a discount, the system shows "Manager approval required" message.
              </p>
              <div className="text-xs">
                <span className="font-medium">Solution:</span> This occurs when:
                <ol className="list-decimal pl-4 mt-1 text-muted-foreground">
                  <li>The discount exceeds your authorization level (typically {">"}15%)</li>
                  <li>The item is marked as "no discount allowed"</li>
                  <li>Multiple discounts are being stacked</li>
                </ol>
                <p className="mt-1">
                  Ask a manager to enterr their credentials or use their approval card to authorize the discount. They
                  will need to enter a reason for the override, which is logged for audit purposes.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Technical Reference</h2>

        <div className="border rounded p-3 mb-6">
          <h3 className="text-sm font-medium mb-2">Keyboard Shortcuts</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-xs">
            <div className="flex justify-between">
              <span className="font-medium">F1</span>
              <span className="text-muted-foreground">New Transaction</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">F2</span>
              <span className="text-muted-foreground">Customer Search</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">F3</span>
              <span className="text-muted-foreground">Add Item</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">F4</span>
              <span className="text-muted-foreground">Advanced Search</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">F5</span>
              <span className="text-muted-foreground">Apply Discount</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">F6</span>
              <span className="text-muted-foreground">Customer History</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">F7</span>
              <span className="text-muted-foreground">Process Return</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">F8</span>
              <span className="text-muted-foreground">Manager Functions</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">F9</span>
              <span className="text-muted-foreground">Suspend Transaction</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">F10</span>
              <span className="text-muted-foreground">Retrieve Transaction</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Ctrl+P</span>
              <span className="text-muted-foreground">Print Last Receipt</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Ctrl+R</span>
              <span className="text-muted-foreground">Repeat Last Order</span>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Real-World Example</h2>

        <div className="border rounded p-4 mb-6 text-xs italic bg-gray-50">
          <p>
            "When Layla visits for a custom suit, Samir pulls up her profile with saved measurements. He selects premium
            wool fabric, adds custom lining options, and schedules fittings. The POS calculates the price based on
            materials and labor. Layla pays a 50% deposit, and the system assigns the order to their master tailor. A
            detailed receipt is automatically emailed to Layla. The entire process takes less than 10 minutes."
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 my-6 text-xs">
          <h3 className="text-sm font-medium text-blue-700 mb-1">Pro Tips</h3>
          <ul className="space-y-1 text-muted-foreground">
            <li>
              • Use keyboard shortcuts to speed up checkout (<strong>F1</strong>: New Sale, <strong>F2</strong>:
              Customer Search, <strong>F3</strong>: Add Item)
            </li>
            <li>• Save common custom items as templates (e.g., "Business Suit Package" with standard options)</li>
            <li>• Set up quick-access buttons for frequent services on your POS screen</li>
            <li>
              • For regular customers, use the "Repeat Last Order" function (<strong>Ctrl+R</strong>) to quickly
              duplicate previous purchases
            </li>
            <li>• Review transactions before closing each day using the "Daily Summary" report</li>
          </ul>
        </div>

        <DocsPagination prev={{href: "/pos", title: "pos"}} next={{href: "/pos", title: "pos"}} />

      </div>
    </div>
  )
}
