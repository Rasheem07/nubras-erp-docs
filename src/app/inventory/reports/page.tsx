import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ArrowLeft, Info } from "lucide-react"

export const metadata: Metadata = {
  title: "Inventory Reports | Nubras ERP Documentation",
  description: "Documentation for inventory reporting in Nubras ERP",
}

export default function InventoryReportsPage() {
  return (
    <div className="container py-6 lg:py-10">
      <div className="flex items-center gap-2 mb-4">
        <Link href="/inventory">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="inline-block font-heading text-4xl tracking-tight">Inventory Reports</h1>
      </div>

      <p className="text-xl text-muted-foreground mb-8">
        Comprehensive guide to inventory reporting and analytics in Nubras ERP.
      </p>

      {/* Standard Reports Section */}
      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-bold">Standard Inventory Reports</h2>
        <p>
          Nubras ERP provides a comprehensive set of standard inventory reports to help you monitor and manage your
          inventory effectively. These reports provide insights into inventory levels, movements, valuations, and more.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Inventory Status Reports</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Current Inventory Report</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">Snapshot of current inventory levels.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Report Content:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Item details (code, description)</li>
                      <li>Current quantity on hand</li>
                      <li>Unit of measure</li>
                      <li>Location information</li>
                      <li>Current value</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-base font-medium">Key Uses:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Inventory status monitoring</li>
                      <li>Financial reporting</li>
                      <li>Inventory verification</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Inventory Valuation Report</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">Financial value of current inventory.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Report Content:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Item details</li>
                      <li>Quantity on hand</li>
                      <li>Unit cost</li>
                      <li>Total value</li>
                      <li>Valuation method</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-base font-medium">Key Uses:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Financial reporting</li>
                      <li>Asset valuation</li>
                      <li>Cost analysis</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Inventory by Location Report</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">Inventory distribution across locations.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Report Content:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Location details</li>
                      <li>Items in each location</li>
                      <li>Quantities by location</li>
                      <li>Location utilization</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-base font-medium">Key Uses:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Space utilization analysis</li>
                      <li>Inventory distribution planning</li>
                      <li>Location management</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Lot/Batch Tracking Report</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">Inventory details by lot or batch number.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Report Content:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Lot/batch numbers</li>
                      <li>Quantity by lot/batch</li>
                      <li>Receipt date</li>
                      <li>Expiry date (if applicable)</li>
                      <li>Quality status</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-base font-medium">Key Uses:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Quality management</li>
                      <li>Traceability</li>
                      <li>Expiry management</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Inventory Movement Reports</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Inventory Transaction Report</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">Record of all inventory movements.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Report Content:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Transaction date and time</li>
                      <li>Transaction type</li>
                      <li>Item details</li>
                      <li>Quantity moved</li>
                      <li>Source and destination</li>
                      <li>User information</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-base font-medium">Key Uses:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Audit trail</li>
                      <li>Movement tracking</li>
                      <li>Activity analysis</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Stock Movement Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">Summary of inventory movements by period.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Report Content:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Opening balance</li>
                      <li>Receipts</li>
                      <li>Issues</li>
                      <li>Adjustments</li>
                      <li>Transfers</li>
                      <li>Closing balance</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-base font-medium">Key Uses:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Period analysis</li>
                      <li>Reconciliation</li>
                      <li>Activity monitoring</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Accessing Standard Reports</h3>
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">Using the Reporting Module</h4>
            <ol className="list-decimal list-inside space-y-2 text-base">
              <li>
                Navigate to Reports:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Go to Inventory {">"} Reports</li>
                  <li>Select the report category</li>
                  <li>Choose the specific report</li>
                </ul>
              </li>
              <li>
                Set Report Parameters:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Specify date range</li>
                  <li>Select locations</li>
                  <li>Choose item categories</li>
                  <li>Set other filters as needed</li>
                </ul>
              </li>
              <li>
                Generate the Report:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Click "Generate Report"</li>
                  <li>Wait for processing</li>
                  <li>View the report on screen</li>
                </ul>
              </li>
              <li>
                Work with Report Results:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Sort and filter results</li>
                  <li>Drill down for details</li>
                  <li>Export to Excel, PDF, or CSV</li>
                  <li>Print the report</li>
                  <li>Save report settings for future use</li>
                </ul>
              </li>
              <li>
                Schedule Reports:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Set up recurring reports</li>
                  <li>Specify frequency (daily, weekly, monthly)</li>
                  <li>Configure delivery method (email, file share)</li>
                  <li>Set recipients</li>
                </ul>
              </li>
            </ol>

            <div className="mt-4 bg-muted/50 p-3 rounded-md">
              <h5 className="text-base font-medium">Report Favorites:</h5>
              <p className="text-xs mt-1">Save time by creating favorites for frequently used reports:</p>
              <ol className="list-decimal list-inside text-xs mt-2">
                <li>Generate a report with your preferred parameters</li>
                <li>Click "Save as Favorite"</li>
                <li>Give the favorite a descriptive name</li>
                <li>Access saved favorites from the Reports dashboard</li>
                <li>Organize favorites into folders for easy access</li>
              </ol>
            </div>
          </div>
        </div>

        <Alert className="mt-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Best Practice</AlertTitle>
          <AlertDescription>
            Establish a regular reporting schedule to monitor key inventory metrics. Review critical reports daily
            (e.g., stock levels, pending orders), operational reports weekly (e.g., movement summaries, slow-moving
            items), and strategic reports monthly (e.g., valuation, trend analysis).
          </AlertDescription>
        </Alert>
      </section>

      {/* Inventory Analytics Section */}
      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-bold">Inventory Analytics</h2>
        <p>
          Inventory analytics in Nubras ERP provides deeper insights into your inventory data through advanced analysis,
          visualization, and trend identification. These tools help you make data-driven decisions to optimize your
          inventory management.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Inventory Performance Analysis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Inventory Turnover Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">Measures how quickly inventory is sold and replaced.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Analysis Components:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Turnover ratio calculation</li>
                      <li>Days inventory outstanding</li>
                      <li>Comparison to industry benchmarks</li>
                      <li>Trend analysis over time</li>
                      <li>Category-level breakdown</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-base font-medium">Key Insights:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Inventory efficiency</li>
                      <li>Working capital utilization</li>
                      <li>Potential obsolescence risks</li>
                      <li>Seasonal patterns</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>ABC Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">Categorizes inventory based on value and importance.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">How it works:</p>
                    <ul className="list-disc list-inside text-base">
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
                    <p className="text-base font-medium">Application:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Focus inventory control on A items</li>
                      <li>Implement different ordering policies by category</li>
                      <li>Adjust safety stock levels by category</li>
                      <li>Prioritize waste reduction for A items</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Using Analytics Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Analytics Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">Interactive visualization of key inventory metrics.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Features:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Real-time data visualization</li>
                      <li>Customizable metrics and KPIs</li>
                      <li>Drill-down capabilities</li>
                      <li>Comparative analysis</li>
                      <li>Alert indicators</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-base font-medium">Access:</p>
                    <ol className="list-decimal list-inside text-base">
                      <li>Navigate to Inventory {">"} Analytics</li>
                      <li>Select dashboard type</li>
                      <li>Customize view as needed</li>
                      <li>Save custom configurations</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Data Explorer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">Ad-hoc analysis tool for inventory data.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Features:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Drag-and-drop interface</li>
                      <li>Custom query building</li>
                      <li>Multiple visualization options</li>
                      <li>Data export capabilities</li>
                      <li>Saved analysis templates</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-base font-medium">Access:</p>
                    <ol className="list-decimal list-inside text-base">
                      <li>
                        Navigate to Inventory {">"} Analytics {">"} Data Explorer
                      </li>
                      <li>Select data sources</li>
                      <li>Build analysis view</li>
                      <li>Save and share results</li>
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
            Combine multiple analytics approaches for a comprehensive view of your inventory. For example, use ABC
            analysis to identify your most important items, then apply detailed forecasting and optimization tools to
            those items to maximize the return on your analytical efforts.
          </AlertDescription>
        </Alert>
      </section>

      {/* Custom Reports Section */}
      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-bold">Custom Reports</h2>
        <p>
          Nubras ERP allows you to create custom inventory reports tailored to your specific business needs. Custom
          reports enable you to combine data from different sources, apply specialized calculations, and present
          information in formats that support your unique decision-making processes.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Report Builder</h3>
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">Creating Custom Reports</h4>
            <ol className="list-decimal list-inside space-y-2 text-base">
              <li>
                Access the Report Builder:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>
                    Navigate to Inventory {">"} Reports {">"} Custom Reports
                  </li>
                  <li>Click "Create New Report"</li>
                  <li>Select "Start from Scratch" or "Use Template"</li>
                </ul>
              </li>
              <li>
                Define Report Structure:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Give the report a name and description</li>
                  <li>Select data sources (tables)</li>
                  <li>Define relationships between data sources</li>
                  <li>Set report parameters (user inputs)</li>
                </ul>
              </li>
              <li>
                Select Fields:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Choose fields to include in the report</li>
                  <li>Create calculated fields if needed</li>
                  <li>Set field properties (format, width, etc.)</li>
                  <li>Define field order</li>
                </ul>
              </li>
              <li>
                Apply Filters:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Set fixed filters (always applied)</li>
                  <li>Create parameter-based filters (user-selectable)</li>
                  <li>Define filter logic (AND/OR conditions)</li>
                  <li>Set default filter values</li>
                </ul>
              </li>
              <li>
                Define Sorting and Grouping:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Set sort order for fields</li>
                  <li>Create grouping levels</li>
                  <li>Define group headers and footers</li>
                  <li>Set up subtotals and totals</li>
                </ul>
              </li>
              <li>
                Format the Report:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Design the report layout</li>
                  <li>Add headers and footers</li>
                  <li>Include company logo and branding</li>
                  <li>Format text and numbers</li>
                  <li>Add conditional formatting</li>
                </ul>
              </li>
              <li>
                Add Visualizations:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Insert charts and graphs</li>
                  <li>Add data tables</li>
                  <li>Include KPI indicators</li>
                  <li>Create dashboards</li>
                </ul>
              </li>
              <li>
                Test and Save:
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Preview the report</li>
                  <li>Test with different parameters</li>
                  <li>Verify calculations and data</li>
                  <li>Save the report definition</li>
                  <li>Set access permissions</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Advanced Report Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Calculated Fields</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">Create custom calculations in reports.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Capabilities:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Mathematical operations</li>
                      <li>Date and time calculations</li>
                      <li>Text manipulation</li>
                      <li>Conditional logic</li>
                      <li>Aggregation functions</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-base font-medium">Example Calculations:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Days in inventory = Current Date - Receipt Date</li>
                      <li>Extended Value = Quantity * Unit Cost</li>
                      <li>Turnover Ratio = Usage / Average Inventory</li>
                      <li>Variance % = (Actual - Planned) / Planned * 100</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Conditional Formatting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">Apply dynamic formatting based on data values.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Formatting Options:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Color coding (text and background)</li>
                      <li>Font styles (bold, italic, etc.)</li>
                      <li>Icons and indicators</li>
                      <li>Data bars and color scales</li>
                      <li>Custom text display</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-base font-medium">Example Applications:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Red text for negative variances</li>
                      <li>Background color based on aging category</li>
                      <li>Bold for items below reorder point</li>
                      <li>Icons for inventory status indicators</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Report Distribution</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Report Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">Automate report generation and distribution.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Scheduling Options:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>One-time scheduled execution</li>
                      <li>Recurring schedules (daily, weekly, monthly)</li>
                      <li>Event-triggered execution</li>
                      <li>Conditional scheduling</li>
                      <li>Priority and queue management</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-base font-medium">Setup Process:</p>
                    <ol className="list-decimal list-inside text-base">
                      <li>Navigate to Reports {">"} Schedule</li>
                      <li>Select report to schedule</li>
                      <li>Set parameters and format</li>
                      <li>Define schedule</li>
                      <li>Configure distribution</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Export Formats</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">Options for exporting and sharing reports.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Available Formats:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>PDF (for printing and sharing)</li>
                      <li>Excel (for further analysis)</li>
                      <li>CSV (for data import)</li>
                      <li>HTML (for web viewing)</li>
                      <li>XML (for system integration)</li>
                      <li>JSON (for API consumption)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-base font-medium">Export Features:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Format-specific options</li>
                      <li>Password protection</li>
                      <li>Compression options</li>
                      <li>Batch export</li>
                      <li>Custom naming conventions</li>
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
            When creating custom reports, start with a clear definition of the business question you're trying to
            answer. Define the specific decisions the report will support and the actions users should take based on the
            information. This clarity will guide your report design and ensure it delivers actionable insights.
          </AlertDescription>
        </Alert>
      </section>

      {/* Dashboards Section */}
      <section className="space-y-4 mb-10">
        <h2 className="text-2xl font-bold">Inventory Dashboards</h2>
        <p>
          Inventory dashboards in Nubras ERP provide at-a-glance views of key inventory metrics and performance
          indicators. Dashboards combine visualizations, KPIs, and interactive elements to deliver actionable insights
          for inventory management.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Dashboard Types</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Inventory Overview Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">High-level view of overall inventory status.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Key Components:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Total inventory value</li>
                      <li>Inventory by category chart</li>
                      <li>Inventory turnover metrics</li>
                      <li>Stock level indicators</li>
                      <li>Recent activity summary</li>
                      <li>Alerts and notifications</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-base font-medium">Primary Users:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Inventory managers</li>
                      <li>Operations directors</li>
                      <li>Finance managers</li>
                      <li>Executive leadership</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Operational Dashboard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">Focused on day-to-day inventory operations.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Key Components:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Items below reorder point</li>
                      <li>Pending receipts and issues</li>
                      <li>Today's scheduled activities</li>
                      <li>Recent transactions</li>
                      <li>Stock transfer status</li>
                      <li>Operational alerts</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-base font-medium">Primary Users:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Warehouse staff</li>
                      <li>Inventory clerks</li>
                      <li>Purchasing coordinators</li>
                      <li>Production planners</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Dashboard Best Practices</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Design Principles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">Guidelines for effective dashboard design.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Visual Design:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Use consistent color scheme</li>
                      <li>Limit to 5-7 components per view</li>
                      <li>Organize by importance (top to bottom)</li>
                      <li>Group related metrics</li>
                      <li>Use white space effectively</li>
                      <li>Ensure text readability</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-base font-medium">Content Selection:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Focus on actionable metrics</li>
                      <li>Include context for interpretation</li>
                      <li>Balance detail and overview</li>
                      <li>Avoid vanity metrics</li>
                      <li>Include trend indicators</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>User Adoption</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base mb-3">Strategies for encouraging dashboard usage.</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-base font-medium">Engagement Tactics:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Involve users in design</li>
                      <li>Provide training and documentation</li>
                      <li>Start with simple dashboards</li>
                      <li>Gather and implement feedback</li>
                      <li>Demonstrate value through examples</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-base font-medium">Ongoing Management:</p>
                    <ul className="list-disc list-inside text-base">
                      <li>Monitor usage patterns</li>
                      <li>Regularly update content</li>
                      <li>Communicate changes and enhancements</li>
                      <li>Celebrate success stories</li>
                      <li>Continuous improvement cycle</li>
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
            Review and refresh your dashboards regularly to ensure they remain relevant and valuable. Schedule quarterly
            reviews to assess dashboard usage, gather user feedback, and make necessary updates. Remove or replace
            underutilized components and ensure metrics align with current business priorities.
          </AlertDescription>
        </Alert>
      </section>

      <div className="flex justify-between mt-8">
        <Button variant="outline" asChild>
          <Link href="/inventory/material-management">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Material Management
          </Link>
        </Button>
        <Button asChild>
          <Link href="/inventory/purchasing">
            Inventory Purchasing
            <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
