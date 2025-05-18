import { AlertDescription } from "@/components/ui/alert"
import { AlertTitle } from "@/components/ui/alert"
import { Alert } from "@/components/ui/alert"
import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Package,
  BarChart2,
  ArrowDownUp,
  Scissors,
  Truck,
  MapPin,
  FileBarChart,
  Settings,
  Info,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Inventory Module | Nubras ERP Documentation",
  description: "Documentation for the Inventory Module in Nubras ERP",
}

export default function InventoryDocsPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Inventory Module</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive documentation for managing inventory in your tailoring business.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-8">
        <h2 className="text-2xl font-bold">Inventory Module Overview</h2>
        <p>
          The Inventory Module in Nubras ERP is a comprehensive system designed specifically for tailoring businesses to
          manage their fabric inventory, materials, and supplies. It provides complete visibility into stock levels,
          movements, and valuations, helping you optimize inventory levels and reduce waste.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Why Inventory Management Matters</h3>
            <p className="text-sm mb-4">Effective inventory management is crucial for tailoring businesses to:</p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Ensure materials are available when needed for production</li>
              <li>Prevent overstocking and reduce capital tied up in inventory</li>
              <li>Minimize waste and optimize material utilization</li>
              <li>Track costs accurately for better pricing and profitability</li>
              <li>Maintain quality control through batch tracking</li>
              <li>Streamline purchasing and supplier management</li>
            </ul>
          </div>

          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">Module Benefits</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Package className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Optimized Stock Levels</h4>
                  <p className="text-sm text-muted-foreground">
                    Maintain ideal inventory levels to reduce costs while meeting demand
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Scissors className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Reduced Material Waste</h4>
                  <p className="text-sm text-muted-foreground">
                    Track and minimize fabric waste through better planning
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <BarChart2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Accurate Costing</h4>
                  <p className="text-sm text-muted-foreground">
                    Precise material costing for better pricing and profitability
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <ArrowDownUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Streamlined Operations</h4>
                  <p className="text-sm text-muted-foreground">Efficient material handling and allocation processes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Integration with Other Modules</h3>
          <p className="mb-4">The Inventory Module integrates seamlessly with other parts of the Nubras ERP system:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Finance Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Automatic inventory valuation</li>
                  <li>Cost of goods sold calculation</li>
                  <li>Purchase order accounting</li>
                  <li>Inventory asset tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Production Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Material requirements planning</li>
                  <li>Production order material allocation</li>
                  <li>Waste tracking and analysis</li>
                  <li>Work-in-progress tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Sales Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Real-time stock availability</li>
                  <li>Material reservation for orders</li>
                  <li>Delivery scheduling based on stock</li>
                  <li>Customer-specific material tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <Alert className="mt-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Note</AlertTitle>
          <AlertDescription>
            The Inventory Module is designed specifically for tailoring businesses, with features tailored to fabric and
            material management, including specialized units of measurement, fabric-specific attributes, and waste
            tracking capabilities.
          </AlertDescription>
        </Alert>

        <h2 className="text-2xl font-bold mt-6">Key Features</h2>
        <p>
          The Inventory Module offers a comprehensive set of features designed specifically for tailoring businesses:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Package className="h-5 w-5 mr-2" />
                Inventory Item Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Fabric Tracking:</strong> Manage fabrics with detailed specifications
                </li>
                <li>
                  <strong>Material Categories:</strong> Organize materials by type and usage
                </li>
                <li>
                  <strong>Detailed Attributes:</strong> Track color, width, composition, etc.
                </li>
                <li>
                  <strong>Multiple Units:</strong> Support for meters, yards, pieces, etc.
                </li>
                <li>
                  <strong>Batch/Lot Tracking:</strong> Track fabric lots and dye lots
                </li>
                <li>
                  <strong>Barcode Support:</strong> Generate and scan barcodes for items
                </li>
                <li>
                  <strong>Image Attachments:</strong> Visual reference for materials
                </li>
              </ul>
              <Button variant="link" size="sm" className="mt-4 px-0" asChild>
                <Link href="/inventory/items">
                  Learn More About Inventory Items
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <ArrowDownUp className="h-5 w-5 mr-2" />
                Stock Movement Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Goods Receipt:</strong> Record incoming materials
                </li>
                <li>
                  <strong>Stock Issues:</strong> Track material consumption
                </li>
                <li>
                  <strong>Stock Transfers:</strong> Move materials between locations
                </li>
                <li>
                  <strong>Adjustments:</strong> Correct inventory discrepancies
                </li>
                <li>
                  <strong>Returns:</strong> Process returned materials
                </li>
                <li>
                  <strong>Movement History:</strong> Complete audit trail of all movements
                </li>
                <li>
                  <strong>Mobile Support:</strong> Record movements on mobile devices
                </li>
              </ul>
              <Button variant="link" size="sm" className="mt-4 px-0" asChild>
                <Link href="/inventory/stock-movements">
                  Learn More About Stock Movements
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Scissors className="h-5 w-5 mr-2" />
                Material Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Material Allocation:</strong> Reserve materials for orders
                </li>
                <li>
                  <strong>Waste Tracking:</strong> Monitor and analyze material waste
                </li>
                <li>
                  <strong>Remnant Management:</strong> Track and utilize fabric remnants
                </li>
                <li>
                  <strong>Cutting Efficiency:</strong> Analyze material utilization
                </li>
                <li>
                  <strong>Quality Control:</strong> Track material quality issues
                </li>
                <li>
                  <strong>Material Requirements:</strong> Plan material needs for production
                </li>
                <li>
                  <strong>Consumption Analysis:</strong> Track material usage patterns
                </li>
              </ul>
              <Button variant="link" size="sm" className="mt-4 px-0" asChild>
                <Link href="/inventory/material-management">
                  Learn More About Material Management
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Truck className="h-5 w-5 mr-2" />
                Purchasing & Suppliers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Purchase Orders:</strong> Create and manage material orders
                </li>
                <li>
                  <strong>Supplier Management:</strong> Track supplier information
                </li>
                <li>
                  <strong>Price Management:</strong> Track material costs and price changes
                </li>
                <li>
                  <strong>Order Tracking:</strong> Monitor order status and deliveries
                </li>
                <li>
                  <strong>Reorder Points:</strong> Automatic reorder suggestions
                </li>
                <li>
                  <strong>Supplier Performance:</strong> Track delivery and quality metrics
                </li>
                <li>
                  <strong>Multi-currency Support:</strong> Handle international suppliers
                </li>
              </ul>
              <Button variant="link" size="sm" className="mt-4 px-0" asChild>
                <Link href="/inventory/purchasing">
                  Learn More About Purchasing
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Inventory Locations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Multiple Locations:</strong> Manage inventory across locations
                </li>
                <li>
                  <strong>Bin Locations:</strong> Detailed storage location tracking
                </li>
                <li>
                  <strong>Location Transfers:</strong> Move inventory between locations
                </li>
                <li>
                  <strong>Location-specific Stock:</strong> View stock by location
                </li>
                <li>
                  <strong>Storage Optimization:</strong> Optimize material storage
                </li>
                <li>
                  <strong>Location Restrictions:</strong> Control access to locations
                </li>
                <li>
                  <strong>Location Mapping:</strong> Visual representation of storage
                </li>
              </ul>
              <Button variant="link" size="sm" className="mt-4 px-0" asChild>
                <Link href="/inventory/locations">
                  Learn More About Inventory Locations
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <FileBarChart className="h-5 w-5 mr-2" />
                Inventory Reports & Analytics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Stock Level Reports:</strong> Current inventory status
                </li>
                <li>
                  <strong>Valuation Reports:</strong> Inventory financial value
                </li>
                <li>
                  <strong>Movement Analysis:</strong> Track inventory flow
                </li>
                <li>
                  <strong>Waste Analysis:</strong> Identify waste reduction opportunities
                </li>
                <li>
                  <strong>Turnover Analysis:</strong> Inventory efficiency metrics
                </li>
                <li>
                  <strong>ABC Analysis:</strong> Prioritize inventory management
                </li>
                <li>
                  <strong>Custom Reports:</strong> Create tailored inventory reports
                </li>
              </ul>
              <Button variant="link" size="sm" className="mt-4 px-0" asChild>
                <Link href="/inventory/reports">
                  Learn More About Inventory Reports
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Advanced Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Inventory Audit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">Comprehensive tools for physical inventory counting and reconciliation:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Cycle counting support</li>
                  <li>Mobile counting applications</li>
                  <li>Barcode scanning for counts</li>
                  <li>Variance analysis</li>
                  <li>Adjustment approvals</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Forecasting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">Predictive tools for inventory planning:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Demand forecasting</li>
                  <li>Seasonal trend analysis</li>
                  <li>Safety stock calculation</li>
                  <li>Lead time optimization</li>
                  <li>What-if scenario planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Barcode System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-2">Comprehensive barcode management:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Barcode generation</li>
                  <li>Label printing</li>
                  <li>Mobile scanning</li>
                  <li>Batch scanning</li>
                  <li>QR code support</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-6">Getting Started with Inventory Module</h2>
        <p>Follow these steps to set up and start using the Inventory Module in Nubras ERP:</p>

        <div className="space-y-4 mt-6">
          <div className="border rounded-md p-4">
            <h3 className="text-lg font-medium mb-2">Step 1: Module Configuration</h3>
            <p className="text-sm mb-2">Configure the basic settings for the Inventory Module:</p>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Navigate to System Settings {">"} Modules</li>
              <li>Enable the Inventory Module</li>
              <li>
                Configure general inventory settings:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Default units of measurement</li>
                  <li>Inventory valuation method (FIFO, Moving Average, etc.)</li>
                  <li>Barcode settings</li>
                  <li>Approval workflows</li>
                </ul>
              </li>
              <li>Save your settings</li>
            </ol>
          </div>

          <div className="border rounded-md p-4">
            <h3 className="text-lg font-medium mb-2">Step 2: Set Up Inventory Locations</h3>
            <p className="text-sm mb-2">Define the physical locations where your inventory is stored:</p>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Navigate to Inventory {">"} Locations</li>
              <li>Click "Add Location" to create a new location</li>
              <li>
                Enter location details:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Location name (e.g., "Main Warehouse")</li>
                  <li>Location code</li>
                  <li>Address (if applicable)</li>
                  <li>Location type</li>
                </ul>
              </li>
              <li>Set up bin locations within each location (optional)</li>
              <li>Save the location</li>
              <li>Repeat for all inventory storage locations</li>
            </ol>
          </div>

          <div className="border rounded-md p-4">
            <h3 className="text-lg font-medium mb-2">Step 3: Set Up Material Categories</h3>
            <p className="text-sm mb-2">Create a structured categorization for your inventory items:</p>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>
                Navigate to Inventory {">"} Settings {">"} Categories
              </li>
              <li>Click "Add Category" to create a new category</li>
              <li>
                Enter category details:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Category name (e.g., "Fabrics")</li>
                  <li>Category code</li>
                  <li>Parent category (if applicable)</li>
                </ul>
              </li>
              <li>Save the category</li>
              <li>Add subcategories as needed (e.g., "Cotton", "Silk", etc.)</li>
              <li>Repeat for all material types</li>
            </ol>
          </div>

          <div className="border rounded-md p-4">
            <h3 className="text-lg font-medium mb-2">Step 4: Add Inventory Items</h3>
            <p className="text-sm mb-2">Create inventory items for all your materials:</p>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Navigate to Inventory {">"} Items</li>
              <li>Click "Add Item" to create a new inventory item</li>
              <li>
                Enter item details:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Item name and code</li>
                  <li>Category and subcategory</li>
                  <li>Unit of measurement</li>
                  <li>Item attributes (color, width, composition, etc.)</li>
                  <li>Barcode (if applicable)</li>
                  <li>Default supplier</li>
                  <li>Reorder points and minimum stock levels</li>
                  <li>Cost and valuation information</li>
                </ul>
              </li>
              <li>Upload item images (optional)</li>
              <li>Save the item</li>
              <li>Repeat for all inventory items</li>
            </ol>
          </div>

          <div className="border rounded-md p-4">
            <h3 className="text-lg font-medium mb-2">Step 5: Set Up Suppliers</h3>
            <p className="text-sm mb-2">Add your material suppliers to the system:</p>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Navigate to Inventory {">"} Suppliers</li>
              <li>Click "Add Supplier" to create a new supplier</li>
              <li>
                Enter supplier details:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Supplier name and code</li>
                  <li>Contact information</li>
                  <li>Address</li>
                  <li>Payment terms</li>
                  <li>Currency</li>
                  <li>Tax information</li>
                </ul>
              </li>
              <li>Save the supplier</li>
              <li>Repeat for all suppliers</li>
            </ol>
          </div>

          <div className="border rounded-md p-4">
            <h3 className="text-lg font-medium mb-2">Step 6: Initial Stock Entry</h3>
            <p className="text-sm mb-2">Record your current inventory levels:</p>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Navigate to Inventory {">"} Stock Movements</li>
              <li>Click "Create Movement" to record initial stock</li>
              <li>Select "Adjustment" as the movement type</li>
              <li>Enter "Initial Stock Entry" as the reference</li>
              <li>Select the destination location</li>
              <li>Add inventory items with their current quantities</li>
              <li>Enter batch/lot information if applicable</li>
              <li>Add notes for documentation</li>
              <li>Submit the adjustment</li>
            </ol>
          </div>

          <div className="border rounded-md p-4">
            <h3 className="text-lg font-medium mb-2">Step 7: Conduct Physical Inventory</h3>
            <p className="text-sm mb-2">Verify your initial stock entry with a physical count:</p>
            <ol className="list-decimal list-inside space-y-1 text-sm">
              <li>Navigate to Inventory {">"} Inventory Audit</li>
              <li>Click "New Inventory Count"</li>
              <li>Select "Full Inventory" as the count type</li>
              <li>Generate count sheets or prepare mobile devices</li>
              <li>Conduct the physical count</li>
              <li>Enter counted quantities</li>
              <li>Review and resolve any discrepancies</li>
              <li>Approve and post adjustments</li>
            </ol>
          </div>

          <div className="border rounded-md p-4">
            <h3 className="text-lg font-medium mb-2">Step 8: Set Up Regular Processes</h3>
            <p className="text-sm mb-2">Establish regular inventory processes:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>
                <strong>Purchase Orders:</strong> Create a process for ordering materials
              </li>
              <li>
                <strong>Goods Receipt:</strong> Establish procedures for receiving materials
              </li>
              <li>
                <strong>Stock Issues:</strong> Set up processes for issuing materials to production
              </li>
              <li>
                <strong>Cycle Counting:</strong> Implement regular inventory verification
              </li>
              <li>
                <strong>Waste Tracking:</strong> Create procedures for recording material waste
              </li>
              <li>
                <strong>Reporting:</strong> Set up regular inventory reports and reviews
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-6">Inventory Management Best Practices</h2>
        <p>Follow these best practices to optimize your inventory management in Nubras ERP:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Package className="h-5 w-5 mr-2" />
                Inventory Organization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Consistent Naming:</strong> Use a standardized naming convention for all inventory items
                </li>
                <li>
                  <strong>Logical Categories:</strong> Create a hierarchical category structure that makes sense for
                  your business
                </li>
                <li>
                  <strong>Detailed Attributes:</strong> Record all relevant attributes for each material type
                </li>
                <li>
                  <strong>Location Organization:</strong> Organize physical storage to match system organization
                </li>
                <li>
                  <strong>Clear Labeling:</strong> Label all materials and storage locations clearly
                </li>
                <li>
                  <strong>Regular Cleanup:</strong> Periodically review and clean up inventory data
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <ArrowDownUp className="h-5 w-5 mr-2" />
                Stock Movement Practices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Real-time Recording:</strong> Record all stock movements as they happen
                </li>
                <li>
                  <strong>Barcode Scanning:</strong> Use barcode scanning for accuracy and efficiency
                </li>
                <li>
                  <strong>Movement Documentation:</strong> Document the reason for all movements
                </li>
                <li>
                  <strong>Batch Tracking:</strong> Maintain batch/lot information for traceability
                </li>
                <li>
                  <strong>Movement Verification:</strong> Implement verification steps for critical movements
                </li>
                <li>
                  <strong>Regular Reconciliation:</strong> Reconcile system records with physical inventory
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Scissors className="h-5 w-5 mr-2" />
                Waste Reduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Cutting Optimization:</strong> Use cutting layout optimization to minimize waste
                </li>
                <li>
                  <strong>Remnant Management:</strong> Track and utilize fabric remnants effectively
                </li>
                <li>
                  <strong>Waste Analysis:</strong> Regularly analyze waste patterns to identify improvement
                  opportunities
                </li>
                <li>
                  <strong>Staff Training:</strong> Train staff on waste-conscious practices
                </li>
                <li>
                  <strong>Waste Targets:</strong> Set and monitor waste reduction targets
                </li>
                <li>
                  <strong>Creative Reuse:</strong> Develop processes for reusing waste materials
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Truck className="h-5 w-5 mr-2" />
                Purchasing Optimization
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Demand Forecasting:</strong> Use historical data to forecast material needs
                </li>
                <li>
                  <strong>Economic Order Quantity:</strong> Calculate optimal order quantities
                </li>
                <li>
                  <strong>Supplier Evaluation:</strong> Regularly evaluate supplier performance
                </li>
                <li>
                  <strong>Lead Time Management:</strong> Track and optimize supplier lead times
                </li>
                <li>
                  <strong>Consolidated Orders:</strong> Combine orders to reduce shipping costs
                </li>
                <li>
                  <strong>Price Monitoring:</strong> Track price trends and negotiate effectively
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Settings className="h-5 w-5 mr-2" />
                Inventory Control
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>ABC Analysis:</strong> Prioritize inventory management based on value
                </li>
                <li>
                  <strong>Cycle Counting:</strong> Implement regular cycle counts instead of annual inventory
                </li>
                <li>
                  <strong>Min/Max Levels:</strong> Set and maintain appropriate stock levels
                </li>
                <li>
                  <strong>FIFO Principle:</strong> Use oldest materials first to prevent obsolescence
                </li>
                <li>
                  <strong>Access Control:</strong> Limit inventory access to authorized personnel
                </li>
                <li>
                  <strong>Regular Audits:</strong> Conduct periodic inventory audits
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <BarChart2 className="h-5 w-5 mr-2" />
                Performance Monitoring
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Key Metrics:</strong> Track inventory turnover, accuracy, and other KPIs
                </li>
                <li>
                  <strong>Regular Reporting:</strong> Generate and review inventory reports
                </li>
                <li>
                  <strong>Trend Analysis:</strong> Monitor long-term inventory trends
                </li>
                <li>
                  <strong>Cost Analysis:</strong> Regularly review inventory carrying costs
                </li>
                <li>
                  <strong>Performance Targets:</strong> Set and monitor inventory performance targets
                </li>
                <li>
                  <strong>Continuous Improvement:</strong> Use data to drive ongoing improvements
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Tailoring-Specific Best Practices</h3>
          <div className="space-y-4">
            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">Fabric Management</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <strong>Fabric Testing:</strong> Test new fabrics before bulk purchasing
                </li>
                <li>
                  <strong>Dye Lot Tracking:</strong> Track dye lots to ensure color consistency
                </li>
                <li>
                  <strong>Width Utilization:</strong> Consider fabric width in cutting planning
                </li>
                <li>
                  <strong>Fabric Inspection:</strong> Inspect fabrics for defects before cutting
                </li>
                <li>
                  <strong>Fabric Storage:</strong> Store fabrics properly to prevent damage
                </li>
                <li>
                  <strong>Seasonal Planning:</strong> Plan fabric inventory based on seasonal needs
                </li>
              </ul>
            </div>

            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">Material Allocation</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <strong>Pattern Matching:</strong> Consider pattern matching requirements in material allocation
                </li>
                <li>
                  <strong>Customer-Specific Materials:</strong> Track materials reserved for specific customers
                </li>
                <li>
                  <strong>Cutting Efficiency:</strong> Optimize cutting layouts for multiple orders
                </li>
                <li>
                  <strong>Material Substitution:</strong> Maintain lists of acceptable substitute materials
                </li>
                <li>
                  <strong>Sample Management:</strong> Track materials used for samples and swatches
                </li>
                <li>
                  <strong>Special Order Tracking:</strong> Flag and track special order materials
                </li>
              </ul>
            </div>

            <div className="border rounded-md p-4">
              <h4 className="font-medium mb-2">Quality Control</h4>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>
                  <strong>Material Testing:</strong> Test materials for shrinkage, colorfastness, etc.
                </li>
                <li>
                  <strong>Supplier Quality:</strong> Track and manage supplier quality performance
                </li>
                <li>
                  <strong>Quality Documentation:</strong> Maintain detailed quality records
                </li>
                <li>
                  <strong>Defect Tracking:</strong> Track and analyze material defects
                </li>
                <li>
                  <strong>Quality Standards:</strong> Establish clear quality standards for materials
                </li>
                <li>
                  <strong>Quality Audits:</strong> Conduct regular quality audits
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Inventory Items</CardTitle>
            <CardDescription>Manage your inventory items</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">Learn how to create, manage, and organize your inventory items.</p>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/inventory/items">
                View Documentation
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Stock Movements</CardTitle>
            <CardDescription>Track inventory transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">Learn how to record and manage all types of inventory movements.</p>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/inventory/stock-movements">
                View Documentation
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Material Management</CardTitle>
            <CardDescription>Optimize material usage</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">Learn how to allocate materials and reduce waste.</p>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/inventory/material-management">
                View Documentation
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
