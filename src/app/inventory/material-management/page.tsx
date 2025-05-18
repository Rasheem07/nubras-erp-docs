import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ArrowLeft, Info, Scissors, CheckCircle2, AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Material Management | Nubras ERP Documentation",
  description: "Documentation for material management in Nubras ERP",
}

export default function MaterialManagementPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex items-center gap-2 mb-4">
        <Link href="/inventory">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="inline-block font-heading text-4xl tracking-tight">Material Management</h1>
      </div>

      <p className="text-xl text-muted-foreground mb-8">
        Optimize material allocation and reduce waste in your tailoring business.
      </p>

      {/* Overview Section */}
      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-bold">Material Management Overview</h2>
        <p>
          Material management in tailoring involves efficiently allocating fabrics and materials to production orders,
          tracking material usage, and minimizing waste. Effective material management is crucial for controlling costs,
          maintaining quality, and ensuring timely production.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Key Concepts</h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>
                <strong>Material Allocation:</strong> Reserving materials for specific orders
              </li>
              <li>
                <strong>Cutting Plans:</strong> Optimizing fabric cutting to minimize waste
              </li>
              <li>
                <strong>Waste Tracking:</strong> Monitoring and analyzing material waste
              </li>
              <li>
                <strong>Remnant Management:</strong> Tracking and utilizing fabric remnants
              </li>
              <li>
                <strong>Material Requirements Planning:</strong> Forecasting material needs
              </li>
              <li>
                <strong>Material Substitution:</strong> Managing alternative materials
              </li>
              <li>
                <strong>Material Yield:</strong> Actual output from raw materials
              </li>
            </ul>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Scissors className="h-5 w-5 mr-2" />
                Tailoring-Specific Challenges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Pattern Matching:</strong> Aligning patterns across seams
                </li>
                <li>
                  <strong>Fabric Width Variations:</strong> Adapting to different fabric widths
                </li>
                <li>
                  <strong>Directional Fabrics:</strong> Managing nap and grain direction
                </li>
                <li>
                  <strong>Mixed Materials:</strong> Coordinating multiple fabrics in one garment
                </li>
                <li>
                  <strong>Custom Orders:</strong> Managing customer-specific materials
                </li>
                <li>
                  <strong>Seasonal Variations:</strong> Adapting to changing material requirements
                </li>
                <li>
                  <strong>Cultural Considerations:</strong> Meeting specific cultural requirements
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Material Management Workflow</h3>
          <div className="border rounded-lg p-4">
            <ol className="list-decimal list-inside space-y-3 text-sm">
              <li>
                <strong>Order Receipt:</strong> Receive and analyze customer order
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Identify material requirements</li>
                  <li>Determine quantities needed</li>
                  <li>Check for special requirements</li>
                </ul>
              </li>
              <li>
                <strong>Material Planning:</strong> Plan material usage
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Check material availability</li>
                  <li>Create cutting plans</li>
                  <li>Identify potential substitutions</li>
                </ul>
              </li>
              <li>
                <strong>Material Allocation:</strong> Reserve materials for the order
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Allocate specific materials</li>
                  <li>Reserve batches/lots for color matching</li>
                  <li>Update available inventory</li>
                </ul>
              </li>
              <li>
                <strong>Material Issue:</strong> Issue materials to production
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Issue allocated materials</li>
                  <li>Record actual quantities issued</li>
                  <li>Track batch/lot information</li>
                </ul>
              </li>
              <li>
                <strong>Production Tracking:</strong> Monitor material usage
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Track actual consumption</li>
                  <li>Record waste and remnants</li>
                  <li>Document quality issues</li>
                </ul>
              </li>
              <li>
                <strong>Completion:</strong> Finalize material usage
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Return unused materials</li>
                  <li>Process remnants</li>
                  <li>Analyze material efficiency</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <Alert className="mt-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Important</AlertTitle>
          <AlertDescription>
            Effective material management can significantly impact your business profitability. In tailoring, materials
            often represent 50-70% of product costs, making efficient material usage a key factor in maintaining
            competitive pricing and healthy margins.
          </AlertDescription>
        </Alert>
      </section>

      {/* Material Allocation Section */}
      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-bold">Material Allocation</h2>
        <p>
          Material allocation is the process of reserving specific materials for production orders, ensuring that the
          right materials are available when needed.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Allocation Process</h3>
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">Creating Material Allocations</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Navigate to Inventory {">"} Material Allocations</li>
              <li>Click "Create Allocation"</li>
              <li>
                Fill in the Header Information:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Select the production order or job</li>
                  <li>Enter the allocation date</li>
                  <li>Select the source location</li>
                  <li>Enter the person responsible</li>
                </ul>
              </li>
              <li>
                Add Materials:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Add materials required for the order</li>
                  <li>Enter the required quantity for each material</li>
                  <li>Select specific batches/lots if needed</li>
                  <li>Add notes for special requirements</li>
                </ul>
              </li>
              <li>Save the allocation</li>
              <li>Submit for approval if required</li>
              <li>Process the allocation to reserve the materials</li>
            </ol>

            <div className="mt-4 bg-muted/50 p-3 rounded-md">
              <h5 className="text-sm font-medium">Allocation Status:</h5>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>
                  <strong>Draft:</strong> Allocation created but not processed
                </li>
                <li>
                  <strong>Reserved:</strong> Materials reserved but not issued
                </li>
                <li>
                  <strong>Partially Issued:</strong> Some materials issued to production
                </li>
                <li>
                  <strong>Fully Issued:</strong> All materials issued to production
                </li>
                <li>
                  <strong>Closed:</strong> Allocation completed and finalized
                </li>
                <li>
                  <strong>Cancelled:</strong> Allocation cancelled
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Allocation Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Standard Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">Basic allocation for regular production orders.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-medium">When to use:</p>
                    <ul className="list-disc list-inside text-sm">
                      <li>Regular production orders</li>
                      <li>Standard materials</li>
                      <li>Predictable material requirements</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Features:</p>
                    <ul className="list-disc list-inside text-sm">
                      <li>Simple allocation process</li>
                      <li>Automatic quantity calculation</li>
                      <li>Basic batch selection</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Cutting Plan Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">Detailed allocation with cutting optimization.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-medium">When to use:</p>
                    <ul className="list-disc list-inside text-sm">
                      <li>Complex garments with multiple pieces</li>
                      <li>Expensive or limited fabrics</li>
                      <li>Pattern matching requirements</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Features:</p>
                    <ul className="list-disc list-inside text-sm">
                      <li>Integrated cutting layout optimization</li>
                      <li>Waste calculation and tracking</li>
                      <li>Pattern placement visualization</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Customer-Provided Material</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">Allocation for customer-supplied materials.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-medium">When to use:</p>
                    <ul className="list-disc list-inside text-sm">
                      <li>Customer provides their own fabric</li>
                      <li>Special materials supplied by customer</li>
                      <li>Consignment materials</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Features:</p>
                    <ul className="list-disc list-inside text-sm">
                      <li>Customer material tracking</li>
                      <li>No valuation impact</li>
                      <li>Special handling instructions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Bulk Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">Allocation for multiple orders at once.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-medium">When to use:</p>
                    <ul className="list-disc list-inside text-sm">
                      <li>Mass production runs</li>
                      <li>Multiple similar orders</li>
                      <li>Batch processing</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Features:</p>
                    <ul className="list-disc list-inside text-sm">
                      <li>Combined material requirements</li>
                      <li>Optimized cutting across orders</li>
                      <li>Efficient material usage</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Cutting Plans</h3>
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">Optimizing Material Usage</h4>
            <p className="text-sm mb-3">Cutting plans help optimize fabric utilization and minimize waste:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="text-sm font-medium">Creating Cutting Plans</h5>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Navigate to Inventory {">"} Cutting Plans</li>
                  <li>Click "Create Cutting Plan"</li>
                  <li>Select the production order</li>
                  <li>Enter fabric details (width, length, etc.)</li>
                  <li>Add pattern pieces with dimensions</li>
                  <li>Specify constraints (grain direction, etc.)</li>
                  <li>Generate optimized layout</li>
                  <li>Review and adjust if needed</li>
                  <li>Save and print the cutting plan</li>
                </ol>
              </div>

              <div>
                <h5 className="text-sm font-medium">Cutting Plan Features</h5>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    <strong>Layout Optimization:</strong> Automatically arrange pattern pieces
                  </li>
                  <li>
                    <strong>Waste Calculation:</strong> Calculate expected waste percentage
                  </li>
                  <li>
                    <strong>Multiple Layouts:</strong> Compare different layout options
                  </li>
                  <li>
                    <strong>Pattern Matching:</strong> Account for pattern matching requirements
                  </li>
                  <li>
                    <strong>Nesting:</strong> Optimize piece placement for minimal waste
                  </li>
                  <li>
                    <strong>Visualization:</strong> Visual representation of cutting layout
                  </li>
                  <li>
                    <strong>Printing:</strong> Print full-size or scaled cutting plans
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 bg-muted/50 p-3 rounded-md">
              <h5 className="text-sm font-medium">Benefits of Cutting Plans:</h5>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>
                  <strong>Reduced Waste:</strong> Optimize fabric utilization to minimize waste
                </li>
                <li>
                  <strong>Consistent Quality:</strong> Ensure proper grain alignment and pattern matching
                </li>
                <li>
                  <strong>Increased Efficiency:</strong> Streamline the cutting process
                </li>
                <li>
                  <strong>Better Cost Control:</strong> Accurate material costing based on actual usage
                </li>
                <li>
                  <strong>Improved Planning:</strong> Better forecasting of material requirements
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Alert className="mt-6" variant="default">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Important</AlertTitle>
          <AlertDescription>
            Always verify material allocations before issuing to production. Once materials are cut, errors cannot be
            easily corrected, especially with expensive or limited fabrics.
          </AlertDescription>
        </Alert>
      </section>

      {/* Waste Management Section */}
      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-bold">Waste Management</h2>
        <p>
          Effective waste management is crucial in tailoring to minimize material costs and environmental impact. Nubras
          ERP provides tools to track, analyze, and reduce material waste.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Waste Tracking</h3>
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">Recording Material Waste</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>Navigate to Inventory {">"} Waste Tracking</li>
              <li>Click "Create Waste Record"</li>
              <li>
                Fill in the Header Information:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Select the production order or job</li>
                  <li>Enter the date</li>
                  <li>Select the waste category</li>
                  <li>Enter the person recording the waste</li>
                </ul>
              </li>
              <li>
                Add Waste Items:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Select the material</li>
                  <li>Enter the waste quantity</li>
                  <li>Select the waste reason</li>
                  <li>Add notes or photos if needed</li>
                </ul>
              </li>
              <li>Indicate if the waste is reusable as remnants</li>
              <li>Specify the disposal method</li>
              <li>Save the waste record</li>
            </ol>

            <div className="mt-4 bg-muted/50 p-3 rounded-md">
              <h5 className="text-sm font-medium">Waste Categories:</h5>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>
                  <strong>Cutting Waste:</strong> Waste generated during the cutting process
                </li>
                <li>
                  <strong>Quality Rejects:</strong> Materials rejected due to quality issues
                </li>
                <li>
                  <strong>Process Waste:</strong> Waste generated during production processes
                </li>
                <li>
                  <strong>Damaged Materials:</strong> Materials damaged during handling or storage
                </li>
                <li>
                  <strong>Obsolete Materials:</strong> Outdated or unused materials
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Remnant Management</h3>
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">Tracking and Utilizing Fabric Remnants</h4>
            <p className="text-sm mb-3">Remnants are usable fabric pieces that remain after cutting:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="text-sm font-medium">Recording Remnants</h5>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Navigate to Inventory {">"} Remnants</li>
                  <li>Click "Add Remnant"</li>
                  <li>Select the source material</li>
                  <li>Enter the remnant dimensions</li>
                  <li>Specify the storage location</li>
                  <li>Add a photo of the remnant (optional)</li>
                  <li>Add any notes about condition or usability</li>
                  <li>Save the remnant record</li>
                </ol>
              </div>

              <div>
                <h5 className="text-sm font-medium">Using Remnants</h5>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Navigate to Inventory {">"} Remnants</li>
                  <li>Search for suitable remnants</li>
                  <li>Filter by material, size, color, etc.</li>
                  <li>Reserve the remnant for a specific order</li>
                  <li>When used, update the remnant status</li>
                  <li>If partially used, update the dimensions</li>
                  <li>If fully used, mark as consumed</li>
                </ol>
              </div>
            </div>

            <div className="mt-4 bg-muted/50 p-3 rounded-md">
              <h5 className="text-sm font-medium">Remnant Classification:</h5>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>
                  <strong>Large Remnants:</strong> Suitable for small garment pieces
                </li>
                <li>
                  <strong>Medium Remnants:</strong> Usable for accessories or trims
                </li>
                <li>
                  <strong>Small Remnants:</strong> Suitable for patches, samples, or swatches
                </li>
                <li>
                  <strong>Special Remnants:</strong> High-value materials kept regardless of size
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Waste Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Waste by Category</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">Analyze waste by different categories.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-medium">Analysis Dimensions:</p>
                    <ul className="list-disc list-inside text-sm">
                      <li>Waste by material type</li>
                      <li>Waste by production process</li>
                      <li>Waste by reason code</li>
                      <li>Waste by operator</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium">How to Access:</p>
                    <ol className="list-decimal list-inside text-sm">
                      <li>Navigate to Inventory {">"} Reports</li>
                      <li>Select "Waste Analysis"</li>
                      <li>Choose "By Category" view</li>
                      <li>Set the date range</li>
                      <li>Select analysis parameters</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Waste Trend Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">Analyze waste patterns over time.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-medium">Analysis Dimensions:</p>
                    <ul className="list-disc list-inside text-sm">
                      <li>Monthly/quarterly waste trends</li>
                      <li>Waste reduction progress</li>
                      <li>Seasonal waste patterns</li>
                      <li>Impact of process changes</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium">How to Access:</p>
                    <ol className="list-decimal list-inside text-sm">
                      <li>Navigate to Inventory {">"} Reports</li>
                      <li>Select "Waste Analysis"</li>
                      <li>Choose "Trend Analysis" view</li>
                      <li>Set the date range</li>
                      <li>Select trend parameters</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Alert className="mt-6" variant="default">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>Pro Tip</AlertTitle>
          <AlertDescription>
            Set waste reduction targets and track progress using the Waste Analysis reports. Even small improvements in
            material efficiency can have a significant impact on profitability over time.
          </AlertDescription>
        </Alert>
      </section>

      {/* Material Optimization Section */}
      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-bold">Material Optimization</h2>
        <p>
          Material optimization involves strategies and tools to maximize the efficiency of material usage, reduce
          costs, and improve sustainability in your tailoring operations.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Material Requirements Planning</h3>
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">Planning Material Needs</h4>
            <p className="text-sm mb-3">Material Requirements Planning (MRP) helps forecast and plan material needs:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h5 className="text-sm font-medium">Running MRP</h5>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Navigate to Inventory {">"} Material Planning</li>
                  <li>Click "Run MRP"</li>
                  <li>Set the planning horizon</li>
                  <li>Select orders to include</li>
                  <li>Set planning parameters</li>
                  <li>Run the MRP calculation</li>
                  <li>Review the material requirements</li>
                  <li>Generate purchase requisitions</li>
                </ol>
              </div>

              <div>
                <h5 className="text-sm font-medium">MRP Outputs</h5>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>
                    <strong>Material Requirements:</strong> Quantities needed by date
                  </li>
                  <li>
                    <strong>Shortage Reports:</strong> Materials with insufficient stock
                  </li>
                  <li>
                    <strong>Purchase Recommendations:</strong> Suggested purchase orders
                  </li>
                  <li>
                    <strong>Rescheduling Suggestions:</strong> Order timing adjustments
                  </li>
                  <li>
                    <strong>Excess Inventory:</strong> Materials with excess stock
                  </li>
                  <li>
                    <strong>What-If Analysis:</strong> Impact of schedule changes
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 bg-muted/50 p-3 rounded-md">
              <h5 className="text-sm font-medium">MRP Considerations:</h5>
              <ul className="list-disc list-inside text-sm mt-2">
                <li>
                  <strong>Lead Times:</strong> Account for supplier lead times in planning
                </li>
                <li>
                  <strong>Safety Stock:</strong> Maintain buffer stock for critical materials
                </li>
                <li>
                  <strong>Batch Sizes:</strong> Consider economic order quantities
                </li>
                <li>
                  <strong>Seasonal Factors:</strong> Account for seasonal demand variations
                </li>
                <li>
                  <strong>Supplier Constraints:</strong> Consider supplier capacity and MOQs
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Inventory Optimization</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>ABC Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">Categorize materials based on value and usage.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-medium">How it works:</p>
                    <ul className="list-disc list-inside text-sm">
                      <li>
                        <strong>A Items:</strong> High-value materials (80% of value, 20% of items)
                      </li>
                      <li>
                        <strong>B Items:</strong> Medium-value materials (15% of value, 30% of items)
                      </li>
                      <li>
                        <strong>C Items:</strong> Low-value materials (5% of value, 50% of items)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Application:</p>
                    <ul className="list-disc list-inside text-sm">
                      <li>Focus inventory control on A items</li>
                      <li>Implement different ordering policies by category</li>
                      <li>Adjust safety stock levels by category</li>
                      <li>Prioritize waste reduction for A items</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Economic Order Quantity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">Calculate optimal order quantities.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-medium">How it works:</p>
                    <ul className="list-disc list-inside text-sm">
                      <li>Balances ordering costs and holding costs</li>
                      <li>Calculates the most economical quantity to order</li>
                      <li>Considers usage rate, ordering cost, and holding cost</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Application:</p>
                    <ul className="list-disc list-inside text-sm">
                      <li>Automatically calculate EOQ for materials</li>
                      <li>Reduce total inventory costs</li>
                      <li>Optimize order frequency</li>
                      <li>Balance inventory levels</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Implementation Strategies</h3>
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">Implementing Material Optimization</h4>
            <p className="text-sm mb-3">Follow these steps to implement material optimization in your business:</p>

            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>
                <strong>Assessment:</strong> Evaluate current material usage
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Analyze current waste levels and patterns</li>
                  <li>Identify high-value materials to prioritize</li>
                  <li>Assess current inventory management practices</li>
                  <li>Identify bottlenecks and inefficiencies</li>
                </ul>
              </li>
              <li>
                <strong>Goal Setting:</strong> Establish clear objectives
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Set specific waste reduction targets</li>
                  <li>Define inventory optimization goals</li>
                  <li>Establish cost reduction objectives</li>
                  <li>Set sustainability targets</li>
                </ul>
              </li>
              <li>
                <strong>System Configuration:</strong> Set up Nubras ERP
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Configure material categories and attributes</li>
                  <li>Set up waste tracking parameters</li>
                  <li>Configure cutting plan features</li>
                  <li>Establish inventory control parameters</li>
                </ul>
              </li>
              <li>
                <strong>Process Development:</strong> Create standard procedures
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Develop material allocation procedures</li>
                  <li>Create waste recording protocols</li>
                  <li>Establish remnant management processes</li>
                  <li>Develop material substitution guidelines</li>
                </ul>
              </li>
              <li>
                <strong>Training:</strong> Educate staff on new processes
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Train on system usage</li>
                  <li>Educate on waste reduction techniques</li>
                  <li>Train on cutting optimization</li>
                  <li>Develop material handling best practices</li>
                </ul>
              </li>
              <li>
                <strong>Implementation:</strong> Roll out optimization initiatives
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Implement in phases, starting with high-impact areas</li>
                  <li>Monitor implementation closely</li>
                  <li>Address issues promptly</li>
                  <li>Celebrate early successes</li>
                </ul>
              </li>
              <li>
                <strong>Monitoring:</strong> Track performance
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Regularly review key metrics</li>
                  <li>Compare actual results to targets</li>
                  <li>Identify areas for improvement</li>
                  <li>Share performance data with team</li>
                </ul>
              </li>
              <li>
                <strong>Continuous Improvement:</strong> Refine and enhance
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Regularly review and update processes</li>
                  <li>Incorporate feedback from users</li>
                  <li>Stay updated on new optimization techniques</li>
                  <li>Set increasingly ambitious targets</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <Alert className="mt-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Next Steps</AlertTitle>
          <AlertDescription>
            Now that you understand material management, explore{" "}
            <Link href="/inventory/reports" className="font-medium underline">
              Inventory Reports
            </Link>{" "}
            to learn how to analyze and monitor your inventory performance.
          </AlertDescription>
        </Alert>
      </section>

      <div className="flex justify-between mt-8">
        <Button variant="outline" asChild>
          <Link href="/inventory/stock-movements">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Stock Movements
          </Link>
        </Button>
        <Button asChild>
          <Link href="/inventory/reports">
            Inventory Reports
            <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
