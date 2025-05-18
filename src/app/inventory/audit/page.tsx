import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ArrowLeft, Info, ClipboardCheck, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Inventory Audit | Nubras ERP Documentation",
  description: "Documentation for inventory audit processes in Nubras ERP",
}

export default function InventoryAuditPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex items-center gap-2 mb-4">
        <Link href="/inventory">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="inline-block font-heading text-4xl tracking-tight">Inventory Audit</h1>
      </div>

      <p className="text-xl text-muted-foreground mb-8">
        Comprehensive guide to inventory audit processes in Nubras ERP.
      </p>

      {/* Inventory Audit Overview Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Inventory Audit Overview</h2>
        <p className="mb-6">
          Inventory auditing in Nubras ERP involves verifying the accuracy of your inventory records by comparing system
          data with physical counts. Regular auditing helps maintain inventory accuracy, identify discrepancies, and
          ensure financial reporting integrity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Key Concepts</h3>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>
                <strong>Inventory Accuracy:</strong> Measure of how well system records match physical reality
              </li>
              <li>
                <strong>Cycle Counting:</strong> Ongoing partial inventory verification
              </li>
              <li>
                <strong>Physical Inventory:</strong> Complete count of all inventory items
              </li>
              <li>
                <strong>Count Variance:</strong> Difference between system and physical counts
              </li>
              <li>
                <strong>Reconciliation:</strong> Process of resolving count discrepancies
              </li>
              <li>
                <strong>Adjustment:</strong> Correction of inventory quantities in the system
              </li>
              <li>
                <strong>Audit Trail:</strong> Record of inventory changes and verifications
              </li>
            </ul>
          </div>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <ClipboardCheck className="h-5 w-5 mr-2" />
                Audit Process Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                <li>
                  <strong>Planning:</strong> Define scope and approach
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Determine count frequency</li>
                    <li>Select items or locations</li>
                    <li>Assign responsibilities</li>
                    <li>Schedule activities</li>
                  </ul>
                </li>
                <li>
                  <strong>Preparation:</strong> Get ready for counting
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Generate count sheets</li>
                    <li>Organize inventory</li>
                    <li>Train count personnel</li>
                    <li>Freeze transactions if needed</li>
                  </ul>
                </li>
                <li>
                  <strong>Counting:</strong> Perform physical verification
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Count physical inventory</li>
                    <li>Record count results</li>
                    <li>Verify questionable items</li>
                    <li>Document count process</li>
                  </ul>
                </li>
                <li>
                  <strong>Reconciliation:</strong> Address discrepancies
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Compare counts to system</li>
                    <li>Investigate variances</li>
                    <li>Determine root causes</li>
                    <li>Approve adjustments</li>
                  </ul>
                </li>
                <li>
                  <strong>Adjustment:</strong> Update inventory records
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Process approved adjustments</li>
                    <li>Document adjustment reasons</li>
                    <li>Update financial records</li>
                    <li>Maintain audit trail</li>
                  </ul>
                </li>
                <li>
                  <strong>Analysis:</strong> Review and improve
                  <ul className="list-disc list-inside ml-6 mt-1">
                    <li>Analyze accuracy metrics</li>
                    <li>Identify problem areas</li>
                    <li>Implement process improvements</li>
                    <li>Update audit procedures</li>
                  </ul>
                </li>
              </ol>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Benefits of Inventory Auditing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Operational Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm">
                  <li>Improved inventory accuracy</li>
                  <li>Reduced stockouts</li>
                  <li>Better order fulfillment</li>
                  <li>Optimized storage utilization</li>
                  <li>Enhanced productivity</li>
                  <li>Reduced search time</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Financial Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm">
                  <li>Accurate financial reporting</li>
                  <li>Reduced inventory write-offs</li>
                  <li>Better cash flow management</li>
                  <li>Lower carrying costs</li>
                  <li>Improved asset utilization</li>
                  <li>Tax compliance</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Strategic Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm">
                  <li>Data-driven decision making</li>
                  <li>Process improvement insights</li>
                  <li>Enhanced loss prevention</li>
                  <li>Better supplier management</li>
                  <li>Improved forecasting accuracy</li>
                  <li>Regulatory compliance</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cycle Counting Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Cycle Counting</h2>
        <p className="mb-6">
          Cycle counting is a perpetual inventory auditing method where a subset of inventory is counted on a rotating
          schedule. This approach allows for continuous verification without disrupting operations, helping to maintain
          high inventory accuracy year-round.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Cycle Count Planning</h3>
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">Designing Your Cycle Count Program</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium">Count Frequency Determination</h5>
                <p className="text-sm">Establishing how often items should be counted:</p>
                <ul className="list-disc list-inside text-sm mt-2">
                  <li>
                    <strong>ABC Analysis Method:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>A Items (High Value): Count frequently (e.g., monthly)</li>
                      <li>B Items (Medium Value): Count periodically (e.g., quarterly)</li>
                      <li>C Items (Low Value): Count less frequently (e.g., semi-annually)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Risk-Based Method:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>High-Risk Items: Items with history of discrepancies</li>
                      <li>High-Movement Items: Frequently handled inventory</li>
                      <li>Critical Items: Items essential to operations</li>
                      <li>Valuable Items: High-cost or high-margin products</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="text-sm font-medium">Cycle Count Execution</h5>
                <p className="text-sm">Step-by-step process for performing cycle counts:</p>
                <ol className="list-decimal list-inside text-sm mt-2">
                  <li>
                    <strong>Count Preparation:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Generate cycle count list based on schedule</li>
                      <li>Prepare count sheets or mobile devices</li>
                      <li>Organize count area if needed</li>
                      <li>Brief counting personnel</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Physical Counting:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Navigate to count locations</li>
                      <li>Count items without referencing system quantities</li>
                      <li>Record counts on sheets or devices</li>
                      <li>Note any condition or location issues</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Count Verification:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Compare physical counts to system quantities</li>
                      <li>Identify discrepancies above threshold</li>
                      <li>Perform recounts for significant variances</li>
                      <li>Document verification results</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Variance Resolution:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Investigate causes of discrepancies</li>
                      <li>Document findings and root causes</li>
                      <li>Obtain approval for adjustments</li>
                      <li>Process inventory adjustments</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Analysis and Reporting:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Calculate accuracy metrics</li>
                      <li>Document count results</li>
                      <li>Identify improvement opportunities</li>
                      <li>Update cycle count schedule if needed</li>
                    </ul>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Real-World Example: Fabric Cycle Counting</h3>
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">Implementing Cycle Counting in a Tailoring Business</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium">Business Context</h5>
                <p className="text-sm">
                  Elegant Tailors, a medium-sized tailoring business with over 300 fabric types and 2,000 SKUs, was
                  struggling with inventory accuracy. They frequently discovered stockouts during production and had
                  difficulty locating specific fabrics. Their annual physical inventory was disruptive and still
                  resulted in only 85% accuracy.
                </p>
              </div>

              <div>
                <h5 className="text-sm font-medium">Cycle Count Implementation</h5>
                <ol className="list-decimal list-inside text-sm">
                  <li>
                    <strong>ABC Classification:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>A Items (20%): Premium silks, specialty fabrics, high-value embellishments</li>
                      <li>B Items (30%): Standard wools, cottons, common linings</li>
                      <li>C Items (50%): Basic notions, threads, standard trims</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Count Schedule Development:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>A Items: Counted monthly (complete coverage in 3 months)</li>
                      <li>B Items: Counted quarterly (complete coverage in 9 months)</li>
                      <li>C Items: Counted semi-annually (complete coverage in 12 months)</li>
                      <li>Daily counts of 15-20 items across categories</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Process Implementation:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Created mobile counting app with barcode scanning</li>
                      <li>Trained two staff members as primary counters</li>
                      <li>Established count verification process</li>
                      <li>Implemented adjustment approval workflow</li>
                      <li>Developed accuracy metrics dashboard</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Root Cause Analysis:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Tracked patterns in discrepancies</li>
                      <li>Identified common error sources</li>
                      <li>Implemented targeted process improvements</li>
                      <li>Provided focused staff training</li>
                    </ul>
                  </li>
                </ol>
              </div>

              <div>
                <h5 className="text-sm font-medium">Results</h5>
                <ul className="list-disc list-inside text-sm">
                  <li>Inventory accuracy improved from 85% to 97% within six months</li>
                  <li>Production delays due to fabric stockouts reduced by 80%</li>
                  <li>Time spent searching for materials decreased by 65%</li>
                  <li>Eliminated disruptive annual physical inventory</li>
                  <li>Reduced inventory write-offs by 40%</li>
                  <li>Improved financial reporting accuracy</li>
                  <li>Enhanced staff awareness of inventory management importance</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 bg-muted/50 p-3 rounded-md">
              <h5 className="text-sm font-medium">Implementation Tips:</h5>
              <ul className="list-disc list-inside text-xs mt-2">
                <li>
                  <strong>Start Small:</strong> Begin with a limited area or category to refine your process
                </li>
                <li>
                  <strong>Be Consistent:</strong> Count regularly according to schedule
                </li>
                <li>
                  <strong>Use Technology:</strong> Mobile devices and barcode scanning improve efficiency and accuracy
                </li>
                <li>
                  <strong>Focus on Root Causes:</strong> Don't just correct counts; fix underlying issues
                </li>
                <li>
                  <strong>Measure and Share Results:</strong> Track accuracy metrics and share improvements
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Alert className="mt-6" variant="default">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>Best Practice</AlertTitle>
          <AlertDescription>
            Implement a structured cycle count program with clear procedures, schedules, and responsibilities. Focus on
            continuous improvement by analyzing count results and addressing root causes of discrepancies. Consider
            using ABC analysis to prioritize counting efforts, with more frequent counts for high-value or critical
            items. Use mobile devices with barcode scanning to improve count efficiency and accuracy.
          </AlertDescription>
        </Alert>
      </section>

      {/* Physical Inventory Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Physical Inventory</h2>
        <p className="mb-6">
          Physical inventory is a comprehensive count of all inventory items at a specific point in time. This process
          provides a complete verification of inventory records and is often required for financial reporting and
          regulatory compliance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Timing and Scheduling</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3">Determining when to conduct physical inventory.</p>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium">Timing Considerations:</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Fiscal year-end requirements</li>
                    <li>Seasonal business cycles</li>
                    <li>Operational impact</li>
                    <li>Resource availability</li>
                    <li>Inventory levels (ideally lower)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium">Schedule Development:</p>
                  <ol className="list-decimal list-inside text-sm">
                    <li>Set inventory date</li>
                    <li>Create detailed timeline</li>
                    <li>Schedule pre-count activities</li>
                    <li>Plan count sequence</li>
                    <li>Allocate time for reconciliation</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle>Resource Planning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-3">Organizing personnel and equipment for counting.</p>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium">Personnel Requirements:</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Count teams formation</li>
                    <li>Team leader assignments</li>
                    <li>Verification personnel</li>
                    <li>Data entry staff</li>
                    <li>Supervisory oversight</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium">Equipment Needs:</p>
                  <ul className="list-disc list-inside text-sm">
                    <li>Count sheets or mobile devices</li>
                    <li>Barcode scanners</li>
                    <li>Counting scales</li>
                    <li>Measuring tools</li>
                    <li>Identification tags</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Physical Inventory Workflow</h3>
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">Step-by-Step Physical Inventory Process</h4>
            <ol className="list-decimal list-inside space-y-2 text-sm">
              <li>
                <strong>Pre-Count Preparation:</strong>
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Organize and clean inventory areas</li>
                  <li>Process pending transactions</li>
                  <li>Generate count sheets or prepare mobile devices</li>
                  <li>Assign count teams and areas</li>
                  <li>Conduct training sessions</li>
                  <li>Prepare signage and instructions</li>
                </ul>
              </li>
              <li>
                <strong>Count Day Setup:</strong>
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Freeze inventory transactions</li>
                  <li>Take system snapshot of current quantities</li>
                  <li>Distribute count materials</li>
                  <li>Brief count teams</li>
                  <li>Establish count control center</li>
                </ul>
              </li>
              <li>
                <strong>First Count Execution:</strong>
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Teams count assigned areas</li>
                  <li>Record quantities on count sheets or devices</li>
                  <li>Mark counted items or locations</li>
                  <li>Note any issues or special situations</li>
                  <li>Submit completed count sheets</li>
                </ul>
              </li>
              <li>
                <strong>Count Verification:</strong>
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Process first count data</li>
                  <li>Identify significant variances</li>
                  <li>Assign recount teams</li>
                  <li>Perform blind recounts of variance items</li>
                  <li>Document recount results</li>
                </ul>
              </li>
              <li>
                <strong>Reconciliation:</strong>
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Compare final counts to system quantities</li>
                  <li>Investigate significant variances</li>
                  <li>Document variance causes</li>
                  <li>Prepare adjustment recommendations</li>
                  <li>Obtain required approvals</li>
                </ul>
              </li>
              <li>
                <strong>System Updates:</strong>
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Process approved adjustments</li>
                  <li>Update inventory quantities</li>
                  <li>Generate adjustment reports</li>
                  <li>Unfreeze inventory system</li>
                  <li>Resume normal operations</li>
                </ul>
              </li>
              <li>
                <strong>Post-Count Analysis:</strong>
                <ul className="list-disc list-inside ml-6 mt-1">
                  <li>Calculate accuracy metrics</li>
                  <li>Analyze variance patterns</li>
                  <li>Identify improvement opportunities</li>
                  <li>Document lessons learned</li>
                  <li>Update inventory procedures</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>

        <Alert className="mt-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Best Practice</AlertTitle>
          <AlertDescription>
            Plan your physical inventory thoroughly to minimize operational disruption and maximize count accuracy.
            Consider conducting a "pre-count" of high-value or problematic items to identify and resolve issues before
            the main count. Use a team-based approach with clear roles and responsibilities, and implement a robust
            verification process for critical items.
          </AlertDescription>
        </Alert>
      </section>

      {/* Reconciliation Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Inventory Reconciliation</h2>
        <p className="mb-6">
          Inventory reconciliation is the process of investigating, explaining, and resolving discrepancies between
          physical counts and system records. Effective reconciliation ensures inventory accuracy, identifies process
          issues, and maintains financial integrity.
        </p>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Variance Investigation</h3>
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">Investigating Count Discrepancies</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium">Investigation Process</h5>
                <p className="text-sm">Systematic approach to researching variances:</p>
                <ol className="list-decimal list-inside text-sm mt-2">
                  <li>
                    <strong>Variance Identification:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Review variance reports</li>
                      <li>Prioritize by value and significance</li>
                      <li>Group by potential common causes</li>
                      <li>Assign investigation responsibilities</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Data Verification:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Verify count data accuracy</li>
                      <li>Check for data entry errors</li>
                      <li>Confirm unit of measure consistency</li>
                      <li>Validate item identification</li>
                      <li>Review count documentation</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Transaction Analysis:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Review recent transactions</li>
                      <li>Check for unprocessed documents</li>
                      <li>Verify timing of transactions</li>
                      <li>Examine transaction details</li>
                      <li>Trace item history</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Root Cause Determination:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Analyze findings</li>
                      <li>Identify most likely cause</li>
                      <li>Document supporting evidence</li>
                      <li>Categorize variance type</li>
                      <li>Assess systemic implications</li>
                    </ul>
                  </li>
                </ol>
              </div>

              <div>
                <h5 className="text-sm font-medium">Common Variance Causes in Tailoring</h5>
                <ul className="list-disc list-inside text-sm mt-2">
                  <li>
                    <strong>Fabric Measurement Issues:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Inconsistent measuring techniques</li>
                      <li>Fabric stretching during handling</li>
                      <li>Failure to account for fabric width</li>
                      <li>Mixing metric and imperial measurements</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Cutting Process Variances:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Unrecorded fabric waste</li>
                      <li>Pattern layout inefficiencies</li>
                      <li>Cutting errors requiring replacement</li>
                      <li>Remnant management issues</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Transaction Errors:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Unrecorded fabric issuance</li>
                      <li>Failure to record customer-provided materials</li>
                      <li>Incorrect item selection in transactions</li>
                      <li>Delayed transaction recording</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Real-World Example: Reconciliation Process</h3>
          <div className="border rounded-md p-4">
            <h4 className="font-medium mb-2">Resolving Fabric Inventory Discrepancies</h4>
            <div className="space-y-4">
              <div>
                <h5 className="text-sm font-medium">Scenario</h5>
                <p className="text-sm">
                  During a cycle count at Royal Tailors, a significant variance was discovered for premium silk fabric.
                  The system showed 45 meters in stock, but only 32 meters were physically counted, representing a 29%
                  discrepancy worth approximately $1,300.
                </p>
              </div>

              <div>
                <h5 className="text-sm font-medium">Investigation Process</h5>
                <ol className="list-decimal list-inside text-sm">
                  <li>
                    <strong>Initial Assessment:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Verified count accuracy with recount (confirmed 32 meters)</li>
                      <li>Checked for measurement errors (none found)</li>
                      <li>Confirmed correct item identification</li>
                      <li>Searched alternative locations (none found)</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Transaction Review:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Examined all receipts and issues for past 30 days</li>
                      <li>Reviewed production orders using this fabric</li>
                      <li>Checked for pending transactions</li>
                      <li>Interviewed production staff about recent usage</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Root Cause Identification:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Discovered two custom orders where fabric was issued but not recorded</li>
                      <li>Found fabric was used for emergency sample creation without documentation</li>
                      <li>Identified process gap in rush order handling</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Resolution:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Documented findings with evidence</li>
                      <li>Created adjustment transaction with proper approvals</li>
                      <li>Updated inventory to match physical count</li>
                      <li>Linked adjustment to identified causes</li>
                    </ul>
                  </li>
                  <li>
                    <strong>Process Improvement:</strong>
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Implemented emergency material requisition process</li>
                      <li>Created mobile app for quick material issues</li>
                      <li>Trained staff on proper transaction recording</li>
                      <li>Added verification step for high-value fabrics</li>
                    </ul>
                  </li>
                </ol>
              </div>

              <div>
                <h5 className="text-sm font-medium">Results</h5>
                <ul className="list-disc list-inside text-sm">
                  <li>Accurate inventory records restored</li>
                  <li>Financial impact properly documented and accounted for</li>
                  <li>Process gap identified and addressed</li>
                  <li>Staff awareness of inventory control improved</li>
                  <li>Similar discrepancies reduced by 85% in subsequent months</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <Alert className="mt-6" variant="default">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>Best Practice</AlertTitle>
          <AlertDescription>
            Approach reconciliation as an opportunity for process improvement rather than just a correction exercise.
            Thoroughly document all investigations and adjustments to support audit requirements and provide valuable
            data for future analysis. Implement a structured approach to categorizing and tracking variances to identify
            patterns and systemic issues.
          </AlertDescription>
        </Alert>
      </section>

      <div className="flex justify-between mt-8">
        <Button variant="outline" asChild>
          <Link href="/inventory/locations">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Inventory Locations
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
