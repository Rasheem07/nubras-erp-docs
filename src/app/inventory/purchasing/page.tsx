import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ArrowLeft, Info, ShoppingCart } from "lucide-react"

export const metadata: Metadata = {
  title: "Inventory Purchasing | Nubras ERP Documentation",
  description: "Documentation for inventory purchasing in Nubras ERP",
}

export default function InventoryPurchasingPage() {
  return (
    <div className="container py-6 lg:py-10">
      <div className="flex items-center gap-2 mb-4">
        <Link href="/inventory">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="inline-block font-heading text-4xl tracking-tight">Inventory Purchasing</h1>
      </div>

      <p className="text-xl text-muted-foreground mb-8">
        Comprehensive guide to managing inventory purchases in Nubras ERP.
      </p>

      {/* Overview Section */}
      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-bold">Purchasing Overview</h2>
        <p>
          The purchasing module in Nubras ERP helps you manage the procurement of inventory items, from requisition to
          receipt. Effective purchasing ensures you have the right materials at the right time while optimizing costs
          and maintaining supplier relationships.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Key Concepts</h3>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>
                <strong>Purchase Requisition:</strong> Internal request for materials
              </li>
              <li>
                <strong>Request for Quotation (RFQ):</strong> Formal request for supplier pricing
              </li>
              <li>
                <strong>Purchase Order (PO):</strong> Formal order sent to supplier
              </li>
              <li>
                <strong>Goods Receipt:</strong> Recording of received materials
              </li>
              <li>
                <strong>Invoice Matching:</strong> Reconciling invoices with receipts
              </li>
              <li>
                <strong>Supplier Management:</strong> Maintaining supplier information and performance
              </li>
              <li>
                <strong>Approval Workflow:</strong> Process for authorizing purchases
              </li>
            </ul>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Purchasing Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 text-base">
                <li>
                  <strong>Identify Need:</strong> Determine material requirements
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Reorder point triggered</li>
                    <li>Production requirement</li>
                    <li>Manual requisition</li>
                  </ul>
                </li>
                <li>
                  <strong>Create Purchase Requisition:</strong> Document material needs
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Specify items and quantities</li>
                    <li>Set required dates</li>
                    <li>Submit for approval</li>
                  </ul>
                </li>
                <li>
                  <strong>Supplier Selection:</strong> Choose appropriate vendor
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Request quotes if needed</li>
                    <li>Compare pricing and terms</li>
                    <li>Select best option</li>
                  </ul>
                </li>
                <li>
                  <strong>Create Purchase Order:</strong> Formalize the order
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Generate PO document</li>
                    <li>Get necessary approvals</li>
                    <li>Send to supplier</li>
                  </ul>
                </li>
                <li>
                  <strong>Receive Materials:</strong> Process incoming shipments
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Verify against PO</li>
                    <li>Inspect quality</li>
                    <li>Record receipt</li>
                  </ul>
                </li>
                <li>
                  <strong>Process Invoice:</strong> Handle supplier billing
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Match with PO and receipt</li>
                    <li>Resolve discrepancies</li>
                    <li>Approve for payment</li>
                  </ul>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Purchasing Module Navigation</h3>
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">Accessing Purchasing Features</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-base font-medium">Main Navigation</h5>
                <ul className="list-disc list-inside space-y-1 text-base">
                  <li>
                    Inventory {">"} Purchasing
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Dashboard: Overview of purchasing activities</li>
                      <li>Purchase Orders: Manage all POs</li>
                      <li>Requisitions: Handle internal requests</li>
                      <li>Receiving: Process incoming shipments</li>
                      <li>Suppliers: Manage vendor information</li>
                      <li>Reports: Access purchasing reports</li>
                      <li>Settings: Configure purchasing options</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-base font-medium">Quick Actions</h5>
                <ul className="list-disc list-inside space-y-1 text-base">
                  <li>Create New Purchase Order</li>
                  <li>Record Goods Receipt</li>
                  <li>Create Supplier</li>
                  <li>Generate Purchase Report</li>
                  <li>View Open Orders</li>
                  <li>Check Expected Deliveries</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 bg-muted/50 p-3 rounded-md">
              <h5 className="text-base font-medium">Purchasing Dashboard:</h5>
              <p className="text-xs mt-1">
                The purchasing dashboard provides a quick overview of your purchasing activities:
              </p>
              <ul className="list-disc list-inside text-xs mt-2">
                <li>
                  <strong>Open Orders:</strong> Count and value of pending purchase orders
                </li>
                <li>
                  <strong>Expected Deliveries:</strong> Upcoming receipts by date
                </li>
                <li>
                  <strong>Pending Approvals:</strong> Orders requiring authorization
                </li>
                <li>
                  <strong>Recent Activity:</strong> Latest purchasing transactions
                </li>
                <li>
                  <strong>Spend Analysis:</strong> Purchasing trends and metrics
                </li>
                <li>
                  <strong>Supplier Performance:</strong> Key vendor metrics
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Key Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Cost Control</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-base">
                  <li>Centralized purchasing</li>
                  <li>Price comparison tools</li>
                  <li>Spend analysis</li>
                  <li>Budget enforcement</li>
                  <li>Approval workflows</li>
                  <li>Contract compliance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-base">
                  <li>Automated reordering</li>
                  <li>Streamlined workflows</li>
                  <li>Template-based ordering</li>
                  <li>Mobile approvals</li>
                  <li>Batch processing</li>
                  <li>Integration with inventory</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Visibility</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-base">
                  <li>Real-time order status</li>
                  <li>Comprehensive audit trail</li>
                  <li>Supplier performance metrics</li>
                  <li>Spend analytics</li>
                  <li>Delivery tracking</li>
                  <li>Integrated reporting</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Alert className="mt-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Important</AlertTitle>
          <AlertDescription>
            Effective purchasing requires close coordination between inventory management, finance, and operations.
            Ensure your purchasing policies align with overall inventory strategy and financial goals. Regularly review
            purchasing performance to identify opportunities for improvement in cost, efficiency, and supplier
            relationships.
          </AlertDescription>
        </Alert>
      </section>

      {/* Purchase Orders Section */}
      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-bold">Purchase Orders</h2>
        <p>
          Purchase orders (POs) are formal documents sent to suppliers to request products or services. They specify
          what you want to buy, quantities, agreed prices, delivery dates, and payment terms. In Nubras ERP, purchase
          orders help you track and manage your procurement process from order to receipt.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Creating Purchase Orders</h3>
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">Purchase Order Creation Process</h4>
            <ol className="list-decimal list-inside space-y-2 text-base">
              <li>
                Access the Purchase Order Form:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>
                    Navigate to Inventory {">"} Purchasing {">"} Purchase Orders
                  </li>
                  <li>Click "Create Purchase Order"</li>
                  <li>Or convert from a requisition or RFQ</li>
                </ul>
              </li>
              <li>
                Enter Header Information:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Select supplier from the dropdown</li>
                  <li>Enter PO date and expected delivery date</li>
                  <li>Select delivery location</li>
                  <li>Choose payment terms</li>
                  <li>Add reference numbers if applicable</li>
                </ul>
              </li>
              <li>
                Add Line Items:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Click "Add Item" to add each product</li>
                  <li>Select item from inventory catalog</li>
                  <li>Enter quantity and confirm unit price</li>
                  <li>Add item-specific delivery dates if needed</li>
                  <li>Include any line item notes</li>
                </ul>
              </li>
              <li>
                Apply Taxes and Shipping:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Select applicable tax rates</li>
                  <li>Add shipping charges if known</li>
                  <li>Include any additional fees</li>
                  <li>Review calculated totals</li>
                </ul>
              </li>
              <li>
                Add Notes and Attachments:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Include special instructions</li>
                  <li>Attach relevant documents</li>
                  <li>Add internal notes if needed</li>
                </ul>
              </li>
              <li>
                Submit for Approval:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Save as draft or submit directly</li>
                  <li>System routes for approval based on rules</li>
                  <li>Track approval status</li>
                </ul>
              </li>
              <li>
                Send to Supplier:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>After approval, send PO to supplier</li>
                  <li>Email directly from the system</li>
                  <li>Print or export as PDF if needed</li>
                  <li>Record confirmation from supplier</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Purchase Order Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Standard Purchase Order</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">One-time order for specific items.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Characteristics:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Single delivery date</li>
                      <li>Specific quantities</li>
                      <li>Fixed pricing</li>
                      <li>Complete upon full delivery</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-base font-medium">Best For:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>One-time purchases</li>
                      <li>Specific project needs</li>
                      <li>Non-recurring items</li>
                      <li>Immediate requirements</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Blanket Purchase Order</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">Long-term agreement for multiple deliveries.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Characteristics:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Extended time period</li>
                      <li>Multiple scheduled deliveries</li>
                      <li>Predetermined pricing</li>
                      <li>Release orders against master</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-base font-medium">Best For:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Regular recurring needs</li>
                      <li>Volume discount opportunities</li>
                      <li>Stable pricing requirements</li>
                      <li>Strategic supplier relationships</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Purchase Order Management</h3>
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">Managing the PO Lifecycle</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-base font-medium">PO Status Tracking</h5>
                <p className="text-base">Monitor purchase orders through their lifecycle:</p>
                <ul className="list-disc list-inside text-base mt-2">
                  <li>
                    <strong>Draft:</strong> Initial creation, not yet submitted
                  </li>
                  <li>
                    <strong>Pending Approval:</strong> Awaiting authorization
                  </li>
                  <li>
                    <strong>Approved:</strong> Authorized but not yet sent
                  </li>
                  <li>
                    <strong>Sent:</strong> Transmitted to supplier
                  </li>
                  <li>
                    <strong>Acknowledged:</strong> Confirmed by supplier
                  </li>
                  <li>
                    <strong>Partially Received:</strong> Some items delivered
                  </li>
                  <li>
                    <strong>Fully Received:</strong> All items delivered
                  </li>
                  <li>
                    <strong>Partially Invoiced:</strong> Some items billed
                  </li>
                  <li>
                    <strong>Fully Invoiced:</strong> All items billed
                  </li>
                  <li>
                    <strong>Closed:</strong> Completed and finalized
                  </li>
                  <li>
                    <strong>Cancelled:</strong> Terminated before completion
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-base font-medium">PO Modifications</h5>
                <p className="text-base">Making changes to existing purchase orders:</p>
                <ol className="list-decimal list-inside text-base mt-2">
                  <li>Navigate to the PO you need to modify</li>
                  <li>Click "Edit" or "Create Change Order"</li>
                  <li>
                    Make necessary changes:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Add or remove line items</li>
                      <li>Change quantities or prices</li>
                      <li>Update delivery dates</li>
                      <li>Modify shipping or payment terms</li>
                    </ul>
                  </li>
                  <li>Save changes and submit for approval if required</li>
                  <li>System creates change order record</li>
                  <li>Send updated PO to supplier</li>
                  <li>Record supplier acknowledgment</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <Alert className="mt-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Best Practice</AlertTitle>
          <AlertDescription>
            Establish clear purchase order policies and communicate them to all stakeholders. Define when POs are
            required, approval thresholds, and acceptable modifications. Regularly review open POs to identify and
            address delays or issues. Consider implementing performance metrics for the purchasing process, such as PO
            cycle time and first-time approval rate.
          </AlertDescription>
        </Alert>
      </section>

      {/* Receiving Section */}
      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-bold">Receiving Inventory</h2>
        <p>
          The receiving process in Nubras ERP handles the receipt of materials against purchase orders, ensuring that
          what you ordered is what you received. Proper receiving procedures maintain inventory accuracy, support
          quality control, and facilitate timely supplier payments.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Receiving Process</h3>
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">Step-by-Step Receiving Workflow</h4>
            <ol className="list-decimal list-inside space-y-2 text-base">
              <li>
                Prepare for Receipt:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Review expected deliveries</li>
                  <li>Prepare receiving area</li>
                  <li>Gather necessary equipment</li>
                  <li>Print receiving documents if needed</li>
                </ul>
              </li>
              <li>
                Initial Receipt:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Accept delivery from carrier</li>
                  <li>Count packages or pallets</li>
                  <li>Note any visible damage</li>
                  <li>Sign carrier documentation</li>
                </ul>
              </li>
              <li>
                Create Goods Receipt:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>
                    Navigate to Inventory {">"} Purchasing {">"} Receiving
                  </li>
                  <li>Click "Create Goods Receipt"</li>
                  <li>Select the related purchase order</li>
                  <li>System loads expected items</li>
                </ul>
              </li>
              <li>
                Detailed Inspection:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Unpack and count items</li>
                  <li>Check against packing slip</li>
                  <li>Inspect for damage or quality issues</li>
                  <li>Verify specifications and measurements</li>
                </ul>
              </li>
              <li>
                Record Receipt Details:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Enter actual quantities received</li>
                  <li>Note any discrepancies</li>
                  <li>Record lot or batch numbers if applicable</li>
                  <li>Document quality inspection results</li>
                </ul>
              </li>
              <li>
                Complete Receipt:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Submit the goods receipt</li>
                  <li>System updates inventory quantities</li>
                  <li>PO status updates automatically</li>
                  <li>Generate receipt documentation</li>
                </ul>
              </li>
              <li>
                Post-Receipt Activities:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Move items to storage locations</li>
                  <li>Update bin locations in system</li>
                  <li>Forward documentation to accounting</li>
                  <li>Initiate supplier communication if needed</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Handling Receipt Scenarios</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Partial Deliveries</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">When suppliers deliver only part of an order.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Process:</p>
                    <ol className="list-decimal list-inside text-base">
                      <li>Select the related PO</li>
                      <li>Enter actual quantities received</li>
                      <li>Leave remaining quantities open</li>
                      <li>Note expected delivery for remainder</li>
                      <li>Submit as partial receipt</li>
                    </ol>
                  </div>
                  <div>
                    <p className="text-base font-medium">System Actions:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Updates inventory for received items</li>
                      <li>Marks PO as "Partially Received"</li>
                      <li>Maintains open quantities for future receipts</li>
                      <li>Updates expected delivery schedule</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Quality Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">When received items have quality problems.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Process:</p>
                    <ol className="list-decimal list-inside text-base">
                      <li>Document specific quality issues</li>
                      <li>Take photos if applicable</li>
                      <li>
                        Choose handling option:
                        <ul className="list-disc list-inside ml-6 mt-1">
                          <li>Reject and return</li>
                          <li>Accept with quality note</li>
                          <li>Accept with price adjustment</li>
                          <li>Hold for quality review</li>
                        </ul>
                      </li>
                      <li>Create quality incident report</li>
                      <li>Initiate supplier communication</li>
                    </ol>
                  </div>
                  <div>
                    <p className="text-base font-medium">System Actions:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Flags affected inventory</li>
                      <li>Updates supplier quality metrics</li>
                      <li>Tracks resolution process</li>
                      <li>Links to supplier corrective actions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Alert className="mt-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Best Practice</AlertTitle>
          <AlertDescription>
            Establish clear receiving procedures and train all personnel involved in the process. Document receipt
            issues promptly and communicate with suppliers about discrepancies. Consider implementing cycle counting
            during the receiving process to verify inventory accuracy. Regularly review receiving metrics to identify
            opportunities for process improvement.
          </AlertDescription>
        </Alert>
      </section>

      {/* Supplier Management Section */}
      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-bold">Supplier Management</h2>
        <p>
          Effective supplier management in Nubras ERP helps you build and maintain productive relationships with your
          vendors. By tracking supplier information, performance, and interactions, you can make better purchasing
          decisions, negotiate favorable terms, and ensure reliable material supply.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Supplier Information</h3>
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">Managing Supplier Records</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-base font-medium">Supplier Setup</h5>
                <p className="text-base">Creating and maintaining supplier records:</p>
                <ol className="list-decimal list-inside text-base mt-2">
                  <li>
                    Navigate to Inventory {">"} Purchasing {">"} Suppliers
                  </li>
                  <li>Click "Create Supplier"</li>
                  <li>
                    Enter basic information:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Supplier name and code</li>
                      <li>Contact information</li>
                      <li>Address details</li>
                      <li>Tax identification</li>
                      <li>Currency</li>
                    </ul>
                  </li>
                  <li>
                    Add business details:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Supplier type/category</li>
                      <li>Industry classification</li>
                      <li>Business relationship</li>
                      <li>Company size</li>
                    </ul>
                  </li>
                  <li>
                    Set up financial information:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Payment terms</li>
                      <li>Bank details</li>
                      <li>Credit limit</li>
                      <li>Tax settings</li>
                    </ul>
                  </li>
                  <li>
                    Configure purchasing parameters:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Lead times</li>
                      <li>Minimum order quantities</li>
                      <li>Order multiples</li>
                      <li>Shipping methods</li>
                    </ul>
                  </li>
                  <li>
                    Add contacts:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Primary contact</li>
                      <li>Sales representative</li>
                      <li>Accounting contact</li>
                      <li>Technical support</li>
                    </ul>
                  </li>
                  <li>Set up approval and status</li>
                </ol>
              </div>

              <div>
                <h5 className="text-base font-medium">Supplier Categories</h5>
                <p className="text-base">Organizing suppliers for better management:</p>
                <ul className="list-disc list-inside text-base mt-2">
                  <li>
                    <strong>By Material Type:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Raw material suppliers</li>
                      <li>Packaging suppliers</li>
                      <li>Equipment suppliers</li>
                      <li>Service providers</li>
                    </ul>
                  </li>
                  <li>
                    <strong>By Relationship:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Strategic partners</li>
                      <li>Preferred suppliers</li>
                      <li>Approved suppliers</li>
                      <li>One-time suppliers</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Supplier Performance</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">Key indicators for measuring supplier performance.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Delivery Performance:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>On-time delivery rate</li>
                      <li>Lead time consistency</li>
                      <li>Order fill rate</li>
                      <li>Delivery accuracy</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-base font-medium">Quality Performance:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Defect rate</li>
                      <li>Inspection pass rate</li>
                      <li>Return rate</li>
                      <li>Quality incident frequency</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Performance Improvement</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">Addressing supplier performance issues.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Issue Management:</p>
                    <ol className="list-decimal list-inside text-base">
                      <li>Identify performance gaps</li>
                      <li>Document specific issues</li>
                      <li>Communicate concerns to supplier</li>
                      <li>Request corrective action</li>
                      <li>Track resolution progress</li>
                    </ol>
                  </div>
                  <div>
                    <p className="text-base font-medium">Improvement Plans:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Collaborative improvement goals</li>
                      <li>Specific action items</li>
                      <li>Timeline and milestones</li>
                      <li>Progress review schedule</li>
                      <li>Success criteria</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Alert className="mt-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Best Practice</AlertTitle>
          <AlertDescription>
            Develop a structured approach to supplier management based on supplier segmentation. Invest more time and
            resources in strategic supplier relationships while streamlining interactions with transactional suppliers.
            Regularly review supplier performance and provide constructive feedback. Consider establishing a
            cross-functional supplier management team for key suppliers to ensure all aspects of the relationship are
            effectively managed.
          </AlertDescription>
        </Alert>
      </section>

      <div className="flex justify-between mt-8">
        <Button variant="outline" asChild>
          <Link href="/inventory/reports">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Inventory Reports
          </Link>
        </Button>
        <Button asChild>
          <Link href="/inventory/locations">
            Inventory Locations
            <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
