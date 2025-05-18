import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ArrowLeft, Info, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Inventory Locations | Nubras ERP Documentation",
  description: "Documentation for inventory location management in Nubras ERP",
}

export default function InventoryLocationsPage() {
  return (
    <div className="container py-6 lg:py-10">
      <div className="flex items-center gap-2 mb-4">
        <Link href="/inventory">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="inline-block font-heading text-4xl tracking-tight">Inventory Locations</h1>
      </div>

      <p className="text-xl text-muted-foreground mb-8">
        Comprehensive guide to managing inventory storage locations in Nubras ERP.
      </p>

      {/* Locations Overview Section */}
      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-bold">Locations Overview</h2>
        <p>
          Inventory locations in Nubras ERP help you organize and track where your inventory items are stored. Effective
          location management improves inventory accuracy, optimizes space utilization, and enhances picking and
          put-away efficiency.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Key Concepts</h3>
            <ul className="list-disc list-inside space-y-2 text-base">
              <li>
                <strong>Location Hierarchy:</strong> Organizational structure of storage areas
              </li>
              <li>
                <strong>Location Types:</strong> Different categories of storage locations
              </li>
              <li>
                <strong>Location Attributes:</strong> Characteristics that define locations
              </li>
              <li>
                <strong>Bin Management:</strong> Detailed tracking within locations
              </li>
              <li>
                <strong>Location Transfers:</strong> Moving inventory between locations
              </li>
              <li>
                <strong>Location Restrictions:</strong> Rules for what can be stored where
              </li>
              <li>
                <strong>Location Capacity:</strong> Space limitations for storage areas
              </li>
            </ul>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Location Hierarchy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-base">
                <li>
                  <strong>Site:</strong> Physical facility or building
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Main Warehouse</li>
                    <li>Production Facility</li>
                    <li>Distribution Center</li>
                  </ul>
                </li>
                <li>
                  <strong>Zone:</strong> Area within a site
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Receiving Area</li>
                    <li>Bulk Storage</li>
                    <li>Picking Area</li>
                    <li>Shipping Area</li>
                  </ul>
                </li>
                <li>
                  <strong>Aisle:</strong> Corridor between storage units
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Aisle A, B, C, etc.</li>
                  </ul>
                </li>
                <li>
                  <strong>Rack/Bay:</strong> Storage unit within aisle
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Rack 1, 2, 3, etc.</li>
                  </ul>
                </li>
                <li>
                  <strong>Level:</strong> Vertical position in rack
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Level 1, 2, 3, etc.</li>
                  </ul>
                </li>
                <li>
                  <strong>Bin:</strong> Specific storage position
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Bin 01, 02, 03, etc.</li>
                  </ul>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Location Types</h3>
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">Common Inventory Location Types</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-base font-medium">Physical Storage Locations</h5>
                <ul className="list-disc list-inside space-y-1 text-base">
                  <li>
                    <strong>Bulk Storage:</strong> Large quantity storage areas
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Pallet racks</li>
                      <li>Floor storage</li>
                      <li>Block stacking</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Picking Locations:</strong> Easily accessible areas for order fulfillment
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Forward pick areas</li>
                      <li>Carton flow racks</li>
                      <li>Shelving units</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Specialized Storage:</strong> Areas with specific storage conditions
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Climate-controlled areas</li>
                      <li>Secure storage for high-value items</li>
                      <li>Hazardous material storage</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-base font-medium">Logical Locations</h5>
                <ul className="list-disc list-inside space-y-1 text-base">
                  <li>
                    <strong>Quality Control:</strong> Locations for items pending inspection
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>QC hold area</li>
                      <li>Inspection stations</li>
                      <li>Testing locations</li>
                    </ul>
                  </li>
                  <li>
                    <strong>In-Transit:</strong> Virtual locations for items being moved
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Inter-warehouse transfers</li>
                      <li>In-transit to customer</li>
                      <li>In-transit from supplier</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Production:</strong> Locations representing production areas
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Work in progress</li>
                      <li>Production lines</li>
                      <li>Assembly areas</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Benefits of Location Management</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Inventory Accuracy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-base">
                  <li>Precise item tracking</li>
                  <li>Reduced lost inventory</li>
                  <li>Easier cycle counting</li>
                  <li>Better inventory visibility</li>
                  <li>Improved audit trails</li>
                  <li>Reduced discrepancies</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Operational Efficiency</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-base">
                  <li>Faster item location</li>
                  <li>Optimized picking routes</li>
                  <li>Reduced search time</li>
                  <li>Improved put-away process</li>
                  <li>Better space utilization</li>
                  <li>Streamlined workflows</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Control & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-base">
                  <li>Segregation of materials</li>
                  <li>FIFO/FEFO enforcement</li>
                  <li>Regulatory compliance</li>
                  <li>Controlled access</li>
                  <li>Traceability support</li>
                  <li>Quality management</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Alert className="mt-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Important</AlertTitle>
          <AlertDescription>
            A well-designed location system is fundamental to efficient inventory management. Take time to plan your
            location hierarchy and naming conventions before implementation. Consider your operational processes,
            material flow, and future growth needs when designing your location structure. Consistent location
            management practices are essential for maintaining inventory accuracy and operational efficiency.
          </AlertDescription>
        </Alert>
      </section>

      {/* Location Setup Section */}
      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-bold">Location Setup</h2>
        <p>
          Setting up inventory locations in Nubras ERP involves creating a structured hierarchy of storage areas and
          defining their characteristics. A well-planned location setup provides the foundation for efficient inventory
          operations and accurate tracking.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Planning Your Location Structure</h3>
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">Location Design Considerations</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-base font-medium">Physical Layout Analysis</h5>
                <ul className="list-disc list-inside space-y-1 text-base">
                  <li>
                    Map your actual storage facilities:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Create floor plans of warehouses and storage areas</li>
                      <li>Identify natural zones and sections</li>
                      <li>Document existing storage equipment</li>
                      <li>Note physical constraints and features</li>
                    </ul>
                  </li>
                  <li>
                    Analyze material flow patterns:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Receiving and put-away paths</li>
                      <li>Picking and shipping routes</li>
                      <li>Cross-docking opportunities</li>
                      <li>Traffic patterns and bottlenecks</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-base font-medium">Hierarchy Development</h5>
                <ul className="list-disc list-inside space-y-1 text-base">
                  <li>
                    Define hierarchy levels:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Determine how many levels you need</li>
                      <li>Define what each level represents</li>
                      <li>Consider operational requirements</li>
                      <li>Balance detail with practicality</li>
                    </ul>
                  </li>
                  <li>
                    Create naming conventions:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Develop consistent, logical naming patterns</li>
                      <li>Use meaningful prefixes or codes</li>
                      <li>Consider barcode/scanning requirements</li>
                      <li>Make locations easily identifiable</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 bg-muted/50 p-3 rounded-md">
              <h5 className="text-base font-medium">Location Numbering Examples:</h5>
              <p className="text-xs mt-1">Sample location numbering schemes for different business needs:</p>
              <ul className="list-disc list-inside text-xs mt-2">
                <li>
                  <strong>Simple Warehouse:</strong> W1-A01-B01 (Warehouse 1, Aisle A01, Bin B01)
                </li>
                <li>
                  <strong>Multi-Facility:</strong> NYC-W2-Z3-A04-R2-L3-B06 (New York City, Warehouse 2, Zone 3, Aisle 4,
                  Rack 2, Level 3, Bin 6)
                </li>
                <li>
                  <strong>Manufacturing:</strong> PRD-AS1-ST03 (Production, Assembly Line 1, Station 3)
                </li>
                <li>
                  <strong>Retail:</strong> ST12-BK-S03-SH2 (Store 12, Back Room, Section 3, Shelf 2)
                </li>
                <li>
                  <strong>Grid System:</strong> W1-G23-45 (Warehouse 1, Grid Coordinate X:23, Y:45)
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Creating Locations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Individual Location Creation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">Creating locations one at a time.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Process:</p>
                    <ol className="list-decimal list-inside text-base">
                      <li>Navigate to Inventory  {">"}  Locations</li>
                      <li>Click "Create Location"</li>
                      <li>Select parent location (if applicable)</li>
                      <li>Enter location code and description</li>
                      <li>Set location type</li>
                      <li>Configure attributes and parameters</li>
                      <li>Save the location</li>
                    </ol>
                  </div>
                  <div>
                    <p className="text-base font-medium">Best For:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Small number of locations</li>
                      <li>Unique, specialized locations</li>
                      <li>Locations with many custom attributes</li>
                      <li>Adding individual locations to existing structure</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Bulk Location Creation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">Creating multiple locations at once.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Process:</p>
                    <ol className="list-decimal list-inside text-base">
                      <li>Navigate to Inventory {">"} Locations</li>
                      <li>Click "Bulk Create"</li>
                      <li>
                        Select creation method:
                        <ul className="list-disc list-inside ml-6 mt-1">
                          <li>Template-based</li>
                          <li>Range generation</li>
                          <li>Import from file</li>
                        </ul>
                      </li>
                      <li>Configure generation parameters</li>
                      <li>Review preview of locations</li>
                      <li>Process bulk creation</li>
                    </ol>
                  </div>
                  <div>
                    <p className="text-base font-medium">Best For:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Large location structures</li>
                      <li>Standardized location patterns</li>
                      <li>Initial warehouse setup</li>
                      <li>Adding entire sections or zones</li>
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
            Invest time in planning your location structure before implementation. Create a consistent naming convention
            that is intuitive for warehouse staff and supports your operational processes. Consider using location
            labels with both human-readable text and barcodes/QR codes for efficient identification. Document your
            location hierarchy and attributes thoroughly to support training and system maintenance.
          </AlertDescription>
        </Alert>
      </section>

      {/* Inventory Transfers Section */}
      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-bold">Inventory Transfers</h2>
        <p>
          Inventory transfers in Nubras ERP involve moving items between locations while maintaining accurate tracking
          and control. Properly managed transfers ensure inventory visibility, support operational workflows, and
          maintain inventory accuracy across your organization.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Transfer Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Internal Transfers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">Moving inventory within the same facility.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Common Scenarios:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Putaway from receiving</li>
                      <li>Replenishment of pick locations</li>
                      <li>Consolidation of partial quantities</li>
                      <li>Relocation for optimization</li>
                      <li>Movement to staging areas</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-base font-medium">Process:</p>
                    <ol className="list-decimal list-inside text-base">
                      <li>Create internal transfer request</li>
                      <li>Specify source and destination</li>
                      <li>Select items and quantities</li>
                      <li>Generate transfer document</li>
                      <li>Execute physical movement</li>
                      <li>Confirm transfer completion</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Facility Transfers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">Moving inventory between different physical locations.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Common Scenarios:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Warehouse to warehouse transfers</li>
                      <li>Distribution center to store</li>
                      <li>Production to warehouse</li>
                      <li>Balancing inventory across sites</li>
                      <li>Fulfilling internal requisitions</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-base font-medium">Process:</p>
                    <ol className="list-decimal list-inside text-base">
                      <li>Create facility transfer order</li>
                      <li>Specify source and destination facilities</li>
                      <li>Select items and quantities</li>
                      <li>Schedule shipping and receiving</li>
                      <li>Process shipment from source</li>
                      <li>Receive at destination</li>
                      <li>Reconcile any discrepancies</li>
                    </ol>
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
            Implement a disciplined approach to inventory transfers with clear procedures and accountability. Use
            technology like barcode scanning and mobile devices to capture transfer information in real-time, reducing
            errors and improving efficiency. Regularly audit transfer processes and address any discrepancies promptly
            to maintain inventory accuracy. Consider implementing cycle counting during transfers to verify inventory at
            both source and destination locations.
          </AlertDescription>
        </Alert>
      </section>

      <div className="flex justify-between mt-8">
        <Button variant="outline" asChild>
          <Link href="/inventory/purchasing">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Inventory Purchasing
          </Link>
        </Button>
        <Button asChild>
          <Link href="/inventory/audit">
            Inventory Audit
            <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
