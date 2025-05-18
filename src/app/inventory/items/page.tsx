import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ArrowLeft, Info, Package, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Inventory Items | Nubras ERP Documentation",
  description: "Documentation for inventory item management in Nubras ERP",
}

export default function InventoryItemsPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex items-center gap-2 mb-4">
        <Link href="/inventory">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="inline-block font-heading text-4xl tracking-tight">Inventory Items</h1>
      </div>

      <p className="text-xl text-muted-foreground mb-8">
        Comprehensive guide to managing inventory items in Nubras ERP.
      </p>

      {/* Item Overview Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Item Overview</h2>
        <p className="mb-6">
          Inventory items in Nubras ERP represent the materials, products, and supplies that your tailoring business
          manages. Effective item management is essential for tracking inventory, controlling costs, and ensuring
          material availability for your tailoring operations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Key Concepts</h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>
                <strong>Item Master:</strong> Central repository of all item information
              </li>
              <li>
                <strong>Item Categories:</strong> Classification system for organizing items
              </li>
              <li>
                <strong>Item Attributes:</strong> Characteristics that define items
              </li>
              <li>
                <strong>Units of Measure:</strong> How quantities are tracked and managed
              </li>
              <li>
                <strong>Stock Parameters:</strong> Settings that control inventory management
              </li>
              <li>
                <strong>Item Identification:</strong> Codes, barcodes, and naming conventions
              </li>
              <li>
                <strong>Item Valuation:</strong> Methods for determining item costs and values
              </li>
            </ul>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Package className="h-5 w-5 mr-2" />
                Item Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Basic Information:</strong>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Item code and name</li>
                    <li>Description</li>
                    <li>Category and subcategory</li>
                    <li>Status (active, inactive, etc.)</li>
                  </ul>
                </li>
                <li>
                  <strong>Technical Details:</strong>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Specifications</li>
                    <li>Dimensions and weight</li>
                    <li>Material composition</li>
                    <li>Color and finish</li>
                  </ul>
                </li>
                <li>
                  <strong>Inventory Parameters:</strong>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Units of measure</li>
                    <li>Reorder points and quantities</li>
                    <li>Lead times</li>
                    <li>Storage requirements</li>
                  </ul>
                </li>
                <li>
                  <strong>Financial Information:</strong>
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Cost and valuation method</li>
                    <li>Price information</li>
                    <li>GL account mappings</li>
                    <li>Tax classifications</li>
                  </ul>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Item Categories</h3>
          <div className="border rounded-lg p-4">
            <h4 className="font-medium mb-2">Common Item Categories in Tailoring</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium">Raw Materials</h5>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    <strong>Fabrics:</strong> Primary materials used for garment construction
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Natural fabrics (cotton, silk, wool, linen)</li>
                      <li>Synthetic fabrics (polyester, nylon, rayon)</li>
                      <li>Blended fabrics</li>
                      <li>Specialty fabrics (embroidered, printed, etc.)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Linings:</strong> Materials used for interior garment construction
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Silk linings</li>
                      <li>Polyester linings</li>
                      <li>Cotton linings</li>
                      <li>Specialty linings</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Interfacings:</strong> Materials that provide structure
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Fusible interfacings</li>
                      <li>Non-fusible interfacings</li>
                      <li>Lightweight to heavyweight</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-sm font-medium">Notions and Trims</h5>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    <strong>Fasteners:</strong> Items used to close or secure garments
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Buttons and buttonholes</li>
                      <li>Zippers</li>
                      <li>Hooks and eyes</li>
                      <li>Snaps and press studs</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Decorative Elements:</strong> Items that enhance appearance
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Lace and ribbons</li>
                      <li>Appliqués</li>
                      <li>Beads and sequins</li>
                      <li>Embroidery threads</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Item Setup Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Item Setup</h2>
        <p className="mb-6">
          Setting up inventory items in Nubras ERP involves creating detailed item records with all necessary
          information for tracking, valuation, and management. A well-structured item setup provides the foundation for
          effective inventory control and accurate reporting.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Creating Items</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3">Step-by-step process for adding new items.</p>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium">Basic Process:</p>
                  <ol className="list-decimal list-inside text-sm">
                    <li>Navigate to Inventory {">"} Items</li>
                    <li>Click "Create Item"</li>
                    <li>Enter basic information</li>
                    <li>Configure item attributes</li>
                    <li>Set inventory parameters</li>
                    <li>Add financial information</li>
                    <li>Upload images if applicable</li>
                    <li>Save the item record</li>
                  </ol>
                </div>
                <div>
                  <p className="text-sm font-medium">Required Information:</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Item code (unique identifier)</li>
                    <li>Item name and description</li>
                    <li>Item category</li>
                    <li>Primary unit of measure</li>
                    <li>Item type (raw material, finished good, etc.)</li>
                    <li>Inventory valuation method</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Item Attributes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3">Defining characteristics of inventory items.</p>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium">Common Attributes:</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Material composition</li>
                    <li>Color and pattern</li>
                    <li>Dimensions and weight</li>
                    <li>Quality grade</li>
                    <li>Country of origin</li>
                    <li>Manufacturer/supplier</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium">Tailoring-Specific Attributes:</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Fabric weight (GSM)</li>
                    <li>Fabric width</li>
                    <li>Fabric stretch percentage</li>
                    <li>Care instructions</li>
                    <li>Shrinkage percentage</li>
                    <li>Dye lot information</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Real-World Example: Setting Up Fabric Items</h3>
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">Creating a Structured Fabric Catalog</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium">Business Context</h5>
                <p className="text-sm">
                  Al Manar Tailoring, a high-end tailoring business in Dubai, needed to organize their extensive fabric
                  inventory with over 500 different fabrics from various suppliers. They wanted to improve inventory
                  accuracy, streamline purchasing, and enhance the customer selection experience.
                </p>
              </div>

              <div>
                <h5 className="text-sm font-medium">Implementation Approach</h5>
                <ol className="list-decimal list-inside text-sm">
                  <li>
                    <strong>Category Structure Development:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Created a three-level category hierarchy: Material Type {">"} Fabric Family {">"} Specific Type</li>
                      <li>Example: Natural {">"} Silk {">"} Charmeuse</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Coding System Creation:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>
                        Developed a structured item coding system: FAB-[Material]-[Family]-[Type]-[Color]-[Weight]
                      </li>
                      <li>Example: FAB-NAT-SLK-CHR-BLK-12MM (Natural Silk Charmeuse, Black, 12mm)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Attribute Standardization:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>
                        Defined standard attributes for all fabrics: width, weight, composition, care instructions
                      </li>
                      <li>Added category-specific attributes: weave pattern for cottons, momme weight for silks</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Image Capture:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Photographed fabric swatches in standardized lighting</li>
                      <li>Created close-up images to show texture details</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Inventory Parameters:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Set up multiple units of measure: meters (stock), yards (purchasing), pieces (sales)</li>
                      <li>Established reorder points based on usage history and lead times</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Supplier Linkage:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Connected each fabric to primary and alternative suppliers</li>
                      <li>Recorded supplier-specific information: minimum order quantities, lead times, pricing</li>
                    </ul>
                  </li>
                </ol>
              </div>

              <div>
                <h5 className="text-sm font-medium">Results</h5>
                <ul className="list-disc list-inside text-sm">
                  <li>Reduced time to locate specific fabrics by 75%</li>
                  <li>Improved inventory accuracy from 82% to 96%</li>
                  <li>Decreased stockouts of popular fabrics by 60%</li>
                  <li>Enhanced customer experience with better fabric information and availability</li>
                  <li>Streamlined purchasing with clear reorder triggers and supplier information</li>
                  <li>Reduced excess inventory by 22% through better stock level management</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 bg-muted/50 p-3 rounded-md">
              <h5 className="text-sm font-medium">Implementation Tips:</h5>
              <ul className="list-disc list-inside text-xs mt-2">
                <li>
                  <strong>Start Small:</strong> Begin with your most important or frequently used items
                </li>
                <li>
                  <strong>Be Consistent:</strong> Maintain naming and categorization consistency
                </li>
                <li>
                  <strong>Involve Users:</strong> Get input from staff who work with the materials daily
                </li>
                <li>
                  <strong>Plan for Growth:</strong> Design your structure to accommodate new items and categories
                </li>
                <li>
                  <strong>Document Standards:</strong> Create clear guidelines for item setup and maintenance
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Alert className="mt-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Best Practice</AlertTitle>
          <AlertDescription>
            Develop a consistent item coding system that is both meaningful to users and supports efficient inventory
            management. Consider including category identifiers, key attributes, and sequential numbering in your item
            codes. Document your coding system and train all staff to ensure consistent application.
          </AlertDescription>
        </Alert>
      </section>

      {/* Item Management Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Item Management</h2>
        <p className="mb-6">
          Ongoing management of inventory items involves maintaining accurate information, tracking changes, and
          ensuring items reflect current business needs. Effective item management supports inventory accuracy,
          purchasing efficiency, and production planning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Item Maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3">Keeping item information current and accurate.</p>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium">Regular Updates:</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Price and cost changes</li>
                    <li>Specification updates</li>
                    <li>Supplier information</li>
                    <li>Reorder parameters</li>
                    <li>Classification adjustments</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium">Lifecycle Management:</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>New item introduction</li>
                    <li>Active item maintenance</li>
                    <li>Phase-out planning</li>
                    <li>Obsolescence handling</li>
                    <li>Replacement management</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Item History</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3">Tracking changes and activities for items.</p>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium">History Tracking:</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Data change history</li>
                    <li>Transaction records</li>
                    <li>Price history</li>
                    <li>Usage patterns</li>
                    <li>Status changes</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium">Audit Trail:</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Who made changes</li>
                    <li>When changes occurred</li>
                    <li>What was changed</li>
                    <li>Previous values</li>
                    <li>Change justifications</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Workflow: Managing Seasonal Fabric Transitions</h3>
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">Step-by-Step Process for Seasonal Inventory Management</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>
                <strong>Inventory Review:</strong> Analyze current inventory status
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Generate inventory aging report</li>
                  <li>Identify seasonal items to phase out</li>
                  <li>Review sales history for seasonal patterns</li>
                  <li>Check for excess inventory of outgoing seasonal items</li>
                </ul>
              </li>
              <li>
                <strong>Item Status Updates:</strong> Adjust status of seasonal items
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Navigate to Inventory {">"} Items {">"} Bulk Update</li>
                  <li>Filter for outgoing seasonal items</li>
                  <li>Change status to "Seasonal Phase-Out"</li>
                  <li>Update visibility in customer-facing systems</li>
                </ul>
              </li>
              <li>
                <strong>Pricing Adjustments:</strong> Manage end-of-season pricing
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Create clearance pricing for outgoing seasonal items</li>
                  <li>Set effective dates for price changes</li>
                  <li>Document pricing strategy for each category</li>
                </ul>
              </li>
              <li>
                <strong>New Season Preparation:</strong> Set up incoming seasonal items
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Create or activate new seasonal items</li>
                  <li>Update item images and descriptions</li>
                  <li>Set initial pricing and promotions</li>
                  <li>Configure inventory parameters for new season</li>
                </ul>
              </li>
              <li>
                <strong>Location Management:</strong> Optimize storage for seasonal transition
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Plan location changes for better visibility of new items</li>
                  <li>Move outgoing seasonal items to clearance areas</li>
                  <li>Update picking sequences for efficient operations</li>
                </ul>
              </li>
              <li>
                <strong>Reporting and Analysis:</strong> Track seasonal transition performance
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Monitor clearance sales progress</li>
                  <li>Track new season item performance</li>
                  <li>Compare to previous seasonal transitions</li>
                  <li>Document lessons learned for future seasons</li>
                </ul>
              </li>
            </ol>

            <div className="mt-4 bg-muted/50 p-3 rounded-md">
              <h5 className="text-sm font-medium">Seasonal Transition Timeline:</h5>
              <p className="text-xs mt-1">Typical timeline for managing seasonal fabric transitions:</p>
              <ul className="list-disc list-inside text-xs mt-2">
                <li>
                  <strong>8 Weeks Before Season End:</strong> Begin inventory analysis and planning
                </li>
                <li>
                  <strong>6 Weeks Before:</strong> Start creating new season items in the system
                </li>
                <li>
                  <strong>4 Weeks Before:</strong> Begin phasing out current season items
                </li>
                <li>
                  <strong>2 Weeks Before:</strong> Implement clearance pricing and location changes
                </li>
                <li>
                  <strong>Season Transition:</strong> Activate new items and promotions
                </li>
                <li>
                  <strong>2 Weeks After:</strong> Final clearance of previous season items
                </li>
                <li>
                  <strong>4 Weeks After:</strong> Complete analysis of transition performance
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Alert className="mt-6" variant="default">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>Pro Tip</AlertTitle>
          <AlertDescription>
            Use item tags and custom fields to enhance your inventory management capabilities. For example, create a
            "Collection" tag to group related items across different categories, or add a "Designer" field to track
            items by designer. These flexible attributes allow you to organize and filter your inventory in ways that
            match your specific business needs.
          </AlertDescription>
        </Alert>
      </section>

      {/* Best Practices Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Item Setup Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm">
                <li>Develop a consistent item coding system</li>
                <li>Create a logical category hierarchy</li>
                <li>Define standard attributes by category</li>
                <li>Establish naming conventions</li>
                <li>Include searchable keywords in descriptions</li>
                <li>Attach images to aid identification</li>
                <li>Document item setup procedures</li>
                <li>Train staff on proper item creation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Item Management Best Practices</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm">
                <li>Regularly review and update item data</li>
                <li>Audit item accuracy periodically</li>
                <li>Archive obsolete items rather than deleting</li>
                <li>Maintain comprehensive item history</li>
                <li>Document changes and justifications</li>
                <li>Review slow-moving items regularly</li>
                <li>Update costs and prices systematically</li>
                <li>Validate data during bulk updates</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Implementation Checklist</h3>
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">Steps to Implement Effective Item Management</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="text-sm font-medium">Planning Phase</h5>
                <ul className="list-disc list-inside text-sm">
                  <li>Analyze current inventory and categorization</li>
                  <li>Define item categories and attributes</li>
                  <li>Develop item coding system</li>
                  <li>Create naming conventions</li>
                  <li>Design approval workflows</li>
                  <li>Establish data standards</li>
                  <li>Define roles and responsibilities</li>
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-medium">Implementation Phase</h5>
                <ul className="list-disc list-inside text-sm">
                  <li>Configure system settings</li>
                  <li>Set up categories and attributes</li>
                  <li>Create item templates</li>
                  <li>Import or create initial items</li>
                  <li>Validate data accuracy</li>
                  <li>Train users on procedures</li>
                  <li>Document processes and standards</li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <h5 className="text-sm font-medium">Ongoing Management</h5>
              <ul className="list-disc list-inside text-sm">
                <li>Schedule regular data reviews</li>
                <li>Implement data governance processes</li>
                <li>Monitor item usage and performance</li>
                <li>Refine categorization as needed</li>
                <li>Update procedures based on feedback</li>
                <li>Conduct periodic user training</li>
                <li>Optimize based on business changes</li>
              </ul>
            </div>
          </div>
        </div>

        <Alert className="mt-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Pro Tip</AlertTitle>
          <AlertDescription>
            For tailoring businesses, consider organizing fabrics by both material type and appropriate garment
            application. This dual-categorization approach makes it easier for staff to locate suitable materials for
            specific projects and helps with inventory planning based on seasonal garment demand.
          </AlertDescription>
        </Alert>
      </section>

      <div className="flex justify-between mt-8">
        <Button variant="outline" asChild>
          <Link href="/inventory">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Inventory Overview
          </Link>
        </Button>
        <Button asChild>
          <Link href="/inventory/stock-movements">
            Stock Movements
            <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
