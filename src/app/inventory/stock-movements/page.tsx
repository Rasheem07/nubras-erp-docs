import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  ArrowLeft,
  Info,
  ArrowDownUp,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Stock Movements | Nubras ERP Documentation",
  description: "Documentation for managing stock movements in Nubras ERP",
};

export default function StockMovementsPage() {
  return (
    <div className="container py-6 lg:py-10">
      <div className="flex items-center gap-2 mb-4">
        <Link href="/inventory">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="inline-block font-heading text-4xl tracking-tight">
          Stock Movements
        </h1>
      </div>

      <p className="text-xl text-muted-foreground mb-8">
        Comprehensive guide to managing inventory movements in Nubras ERP.
      </p>

      {/* Stock Movement Overview Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Stock Movement Overview</h2>
        <p className="mb-6">
          Stock movements track the flow of materials into, within, and out of
          your inventory. Every change in inventory quantity is recorded as a
          stock movement, providing a complete audit trail of your inventory
          transactions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Key Concepts</h3>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>
                <strong>Movement Types:</strong> Different categories of
                inventory transactions
              </li>
              <li>
                <strong>Source & Destination:</strong> Where items are moving
                from and to
              </li>
              <li>
                <strong>Movement Date:</strong> When the transaction occurred
              </li>
              <li>
                <strong>Reference Documents:</strong> Related documents like
                purchase orders
              </li>
              <li>
                <strong>Batch/Lot Tracking:</strong> Tracking specific material
                batches
              </li>
              <li>
                <strong>Movement Status:</strong> Draft, Pending, Completed,
                Cancelled
              </li>
              <li>
                <strong>Approvals:</strong> Authorization workflow for movements
              </li>
            </ul>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <ArrowDownUp className="h-5 w-5 mr-2" />
                Movement Flow
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>
                  <strong>Inbound:</strong> Materials entering your inventory
                  (purchases, returns)
                </li>
                <li>
                  <strong>Internal:</strong> Materials moving within your
                  inventory (transfers, adjustments)
                </li>
                <li>
                  <strong>Outbound:</strong> Materials leaving your inventory
                  (production, sales)
                </li>
                <li>
                  <strong>Cycle:</strong> The complete flow from procurement to
                  consumption
                </li>
              </ul>
              <div className="mt-4 bg-muted/50 p-3 rounded-md">
                <p className="text-xs">
                  Every movement affects the available quantity of inventory
                  items. The system maintains a running balance of quantities
                  and values for accurate inventory tracking.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">
            Stock Movement Workflow
          </h3>
          <div className="border rounded-lg p-4">
            <ol className="list-decimal list-inside space-y-3 text-base">
              <li>
                <strong>Movement Initiation:</strong> Create a new stock
                movement
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Select movement type</li>
                  <li>Enter reference information</li>
                  <li>Select source and destination</li>
                  <li>Add items and quantities</li>
                </ul>
              </li>
              <li>
                <strong>Verification:</strong> Review movement details
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Check item details and quantities</li>
                  <li>Verify batch/lot information</li>
                  <li>Add notes or attachments</li>
                </ul>
              </li>
              <li>
                <strong>Approval:</strong> Get authorization if required
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Submit for approval if needed</li>
                  <li>Approver reviews and authorizes</li>
                </ul>
              </li>
              <li>
                <strong>Processing:</strong> Execute the movement
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Process the movement</li>
                  <li>System updates inventory quantities</li>
                  <li>Movement status changes to Completed</li>
                </ul>
              </li>
              <li>
                <strong>Documentation:</strong> Generate and store records
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Print movement documents if needed</li>
                  <li>Update related documents</li>
                  <li>Archive for audit purposes</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <Alert className="mt-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Important</AlertTitle>
          <AlertDescription>
            All stock movements should be recorded in real-time or as close to
            the actual movement as possible to maintain accurate inventory
            records. Delayed recording can lead to discrepancies between system
            records and physical inventory.
          </AlertDescription>
        </Alert>
      </section>

      {/* Movement Types Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Stock Movement Types</h2>
        <p className="mb-6">
          Nubras ERP supports various types of stock movements to handle
          different inventory scenarios.
        </p>

        <h3 className="text-xl font-semibold mb-3">Inbound Movements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Purchase Receipt</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base mb-3">
                Record materials received from suppliers.
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-base font-medium">When to use:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Receiving ordered materials</li>
                    <li>Processing supplier deliveries</li>
                  </ul>
                </div>
                <div>
                  <p className="text-base font-medium">Key information:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Purchase order reference</li>
                    <li>Supplier details</li>
                    <li>Delivery note number</li>
                    <li>Received quantities</li>
                    <li>Batch/lot information</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Return Receipt</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base mb-3">
                Record materials returned by customers or from production.
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-base font-medium">When to use:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Customer returns</li>
                    <li>Unused materials from production</li>
                  </ul>
                </div>
                <div>
                  <p className="text-base font-medium">Key information:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Original issue reference</li>
                    <li>Return reason</li>
                    <li>Condition assessment</li>
                    <li>Returned quantities</li>
                    <li>Quality inspection results</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Production Return</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base mb-3">
                Record excess materials returned from production.
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-base font-medium">When to use:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Excess fabric from cutting</li>
                    <li>Unused materials from completed orders</li>
                  </ul>
                </div>
                <div>
                  <p className="text-base font-medium">Key information:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Production order reference</li>
                    <li>Original issue details</li>
                    <li>Returned quantities</li>
                    <li>Usability assessment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Initial Stock Entry</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base mb-3">
                Record initial inventory or opening balances.
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-base font-medium">When to use:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>System implementation</li>
                    <li>New inventory item setup</li>
                  </ul>
                </div>
                <div>
                  <p className="text-base font-medium">Key information:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Item details</li>
                    <li>Opening quantities</li>
                    <li>Valuation information</li>
                    <li>Location details</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-semibold mb-3">Outbound Movements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Material Issue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base mb-3">
                Record materials issued for production or other uses.
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-base font-medium">When to use:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Issuing materials to production</li>
                    <li>Allocating fabrics for cutting</li>
                  </ul>
                </div>
                <div>
                  <p className="text-base font-medium">Key information:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Production order reference</li>
                    <li>Destination department</li>
                    <li>Issued quantities</li>
                    <li>Batch/lot selection</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Sales Issue</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base mb-3">
                Record materials sold directly to customers.
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-base font-medium">When to use:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Direct fabric sales</li>
                    <li>Retail material sales</li>
                  </ul>
                </div>
                <div>
                  <p className="text-base font-medium">Key information:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Sales order reference</li>
                    <li>Customer details</li>
                    <li>Sold quantities</li>
                    <li>Pricing information</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Supplier Return</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base mb-3">
                Record materials returned to suppliers.
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-base font-medium">When to use:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Defective materials</li>
                    <li>Incorrect deliveries</li>
                    <li>Excess materials</li>
                  </ul>
                </div>
                <div>
                  <p className="text-base font-medium">Key information:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Original purchase reference</li>
                    <li>Supplier details</li>
                    <li>Return reason</li>
                    <li>Returned quantities</li>
                    <li>Return authorization number</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Waste Disposal</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base mb-3">
                Record materials discarded as waste.
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-base font-medium">When to use:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Unusable fabric scraps</li>
                    <li>Damaged materials</li>
                    <li>Obsolete inventory</li>
                  </ul>
                </div>
                <div>
                  <p className="text-base font-medium">Key information:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Waste category</li>
                    <li>Disposal method</li>
                    <li>Reason for disposal</li>
                    <li>Disposed quantities</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-semibold mb-3">Internal Movements</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Stock Transfer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base mb-3">Move materials between locations.</p>
              <div className="space-y-2">
                <div>
                  <p className="text-base font-medium">When to use:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Moving stock between warehouses</li>
                    <li>Relocating materials within a location</li>
                  </ul>
                </div>
                <div>
                  <p className="text-base font-medium">Key information:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Source location</li>
                    <li>Destination location</li>
                    <li>Transfer reason</li>
                    <li>Transferred quantities</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Stock Adjustment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base mb-3">Correct inventory discrepancies.</p>
              <div className="space-y-2">
                <div>
                  <p className="text-base font-medium">When to use:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Physical count reconciliation</li>
                    <li>Correcting system errors</li>
                    <li>Recording inventory losses</li>
                  </ul>
                </div>
                <div>
                  <p className="text-base font-medium">Key information:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Adjustment reason</li>
                    <li>Current system quantity</li>
                    <li>Actual physical quantity</li>
                    <li>Adjustment quantity</li>
                    <li>Authorization details</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Material Conversion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base mb-3">
                Convert materials from one form to another.
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-base font-medium">When to use:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Cutting fabric rolls into pieces</li>
                    <li>Repackaging materials</li>
                    <li>Changing units of measurement</li>
                  </ul>
                </div>
                <div>
                  <p className="text-base font-medium">Key information:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Source material details</li>
                    <li>Resulting material details</li>
                    <li>Conversion ratio</li>
                    <li>Conversion process</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Reservation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base mb-3">Reserve materials for future use.</p>
              <div className="space-y-2">
                <div>
                  <p className="text-base font-medium">When to use:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Reserving materials for specific orders</li>
                    <li>Setting aside customer-provided materials</li>
                  </ul>
                </div>
                <div>
                  <p className="text-base font-medium">Key information:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Order reference</li>
                    <li>Customer details</li>
                    <li>Reserved quantities</li>
                    <li>Reservation period</li>
                    <li>Batch/lot selection</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Alert className="mt-6" variant="default">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Important</AlertTitle>
          <AlertDescription>
            Always select the correct movement type for each transaction. Using
            the wrong movement type can affect inventory valuation, reporting,
            and traceability.
          </AlertDescription>
        </Alert>
      </section>

      {/* Real-World Examples Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Real-World Examples</h2>
        <p className="mb-6">
          See how stock movements are used in practical tailoring business
          scenarios.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Custom Abaya Production</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base mb-3">
                Managing materials for a custom abaya order.
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-base font-medium">Scenario:</p>
                  <p className="text-base">
                    A customer orders a custom embroidered abaya requiring
                    specific black silk fabric, gold thread, and custom beading.
                  </p>
                </div>
                <div>
                  <p className="text-base font-medium">Stock Movements:</p>
                  <ol className="list-decimal list-inside text-base">
                    <li>
                      <strong>Material Reservation:</strong> Reserve 3 meters of
                      premium black silk, 2 spools of gold thread, and 50g of
                      beads
                    </li>
                    <li>
                      <strong>Material Issue:</strong> Issue reserved materials
                      to production department
                    </li>
                    <li>
                      <strong>Production Return:</strong> Return 0.5 meters of
                      unused silk to inventory
                    </li>
                    <li>
                      <strong>Waste Disposal:</strong> Record 0.2 meters of
                      damaged silk as waste
                    </li>
                  </ol>
                </div>
                <div>
                  <p className="text-base font-medium">Benefits:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Accurate tracking of premium materials</li>
                    <li>Clear accountability for material usage</li>
                    <li>Precise costing of materials used</li>
                    <li>Waste monitoring for quality control</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Seasonal Inventory Relocation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-base mb-3">
                Reorganizing inventory for seasonal demand.
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-base font-medium">Scenario:</p>
                  <p className="text-base">
                    A tailoring shop needs to reorganize inventory to prioritize
                    Ramadan and Eid collection materials.
                  </p>
                </div>
                <div>
                  <p className="text-base font-medium">Stock Movements:</p>
                  <ol className="list-decimal list-inside text-base">
                    <li>
                      <strong>Stock Transfer:</strong> Move festive fabrics from
                      bulk storage to primary picking area
                    </li>
                    <li>
                      <strong>Stock Transfer:</strong> Relocate off-season
                      materials to secondary storage
                    </li>
                    <li>
                      <strong>Material Conversion:</strong> Convert bulk fabric
                      rolls into pre-cut lengths for efficient production
                    </li>
                    <li>
                      <strong>Stock Adjustment:</strong> Update inventory after
                      physical verification of relocated items
                    </li>
                  </ol>
                </div>
                <div>
                  <p className="text-base font-medium">Benefits:</p>
                  <ul className="list-disc list-inside text-base">
                    <li>Optimized storage layout for seasonal demand</li>
                    <li>Improved picking efficiency for high-demand items</li>
                    <li>Better space utilization</li>
                    <li>Enhanced inventory accuracy</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="border rounded-md p-4">
          <h4 className="font-medium mb-2">
            Case Study: Multi-Location Tailoring Business
          </h4>
          <div className="space-y-4">
            <div>
              <h5 className="text-base font-medium">Business Profile</h5>
              <p className="text-base">
                A tailoring business with a main production facility, two retail
                locations, and a warehouse. The business specializes in
                traditional and modern garments, with both ready-to-wear and
                custom orders.
              </p>
            </div>

            <div>
              <h5 className="text-base font-medium">
                Inventory Movement Challenges
              </h5>
              <ul className="list-disc list-inside text-base">
                <li>
                  Managing fabric and material flow between multiple locations
                </li>
                <li>Tracking customer-provided materials for custom orders</li>
                <li>Maintaining accurate inventory across all locations</li>
                <li>Minimizing waste and maximizing material utilization</li>
                <li>
                  Ensuring timely availability of materials for production
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-base font-medium">Stock Movement Solution</h5>
              <ol className="list-decimal list-inside text-base">
                <li>
                  <strong>Centralized Receiving:</strong> All materials received
                  at warehouse with purchase receipts
                </li>
                <li>
                  <strong>Scheduled Transfers:</strong> Regular stock transfers
                  from warehouse to retail and production locations
                </li>
                <li>
                  <strong>Customer Material Tracking:</strong> Special
                  reservation process for customer-provided fabrics
                </li>
                <li>
                  <strong>Production Material Flow:</strong> Structured material
                  issue and return process for production
                </li>
                <li>
                  <strong>Remnant Management:</strong> System for tracking and
                  utilizing fabric remnants
                </li>
                <li>
                  <strong>Mobile Scanning:</strong> Barcode scanning for
                  real-time movement recording
                </li>
              </ol>
            </div>

            <div>
              <h5 className="text-base font-medium">Results</h5>
              <ul className="list-disc list-inside text-base">
                <li>Inventory accuracy improved from 82% to 97%</li>
                <li>Material waste reduced by 15%</li>
                <li>
                  Production delays due to material shortages decreased by 60%
                </li>
                <li>
                  Customer satisfaction increased with better tracking of custom
                  materials
                </li>
                <li>Staff time spent searching for materials reduced by 25%</li>
                <li>
                  Inventory carrying costs reduced by optimizing stock levels at
                  each location
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Alert className="mt-6" variant="default">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>Best Practice</AlertTitle>
          <AlertDescription>
            Implement a disciplined approach to stock movements with clear
            procedures and accountability. Use mobile devices with barcode
            scanning to record movements in real-time at the point of action.
            Regularly review movement patterns to optimize inventory placement
            and reduce unnecessary transfers.
          </AlertDescription>
        </Alert>
      </section>

      <div className="flex justify-between mt-8">
        <Button variant="outline" asChild>
          <Link href="/inventory/items">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Inventory Items
          </Link>
        </Button>
        <Button asChild>
          <Link href="/inventory/material-management">
            Material Management
            <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
