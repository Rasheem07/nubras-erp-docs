import type { Metadata } from "next"
import { DocsPagination } from "@/components/docs-pagination"

export const metadata: Metadata = {
  title: "Project Monitoring | Nubras ERP Documentation",
  description: "Documentation for project monitoring in Nubras ERP",
}

export default function ProjectMonitoringDocumentation() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Project Monitoring</h1>
          <p className="text-xl text-muted-foreground">
            Guide to monitoring project performance, tracking changes, and managing risks.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-8">
        <h2 className="text-2xl font-bold">Performance Monitoring</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Monitoring Project Performance</h3>
            <p>Track and analyze project performance metrics:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li>
                Navigate to Projects {">"} Monitoring {">"} Performance
              </li>
              <li>Select your project from the dropdown</li>
              <li>View performance dashboards and metrics</li>
              <li>Analyze schedule and resource performance</li>
              <li>Identify trends and potential issues</li>
              <li>Take corrective actions as needed</li>
            </ol>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Key Performance Indicators (KPIs)</h3>
            <p>Monitor these key performance indicators:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="font-medium">Schedule Performance Index (SPI):</span> Ratio of work completed to work
                scheduled
              </li>
              <li>
                <span className="font-medium">Resource Utilization:</span> How efficiently resources are being used
              </li>
              <li>
                <span className="font-medium">Quality Metrics:</span> Defect rates and quality inspection results
              </li>
              <li>
                <span className="font-medium">Milestone Achievement:</span> Whether milestones are being met on time
              </li>
              <li>
                <span className="font-medium">Issue Resolution Rate:</span> How quickly issues are being resolved
              </li>
            </ul>
            <p className="mt-2 text-sm text-muted-foreground">
              KPIs are automatically calculated based on project data and displayed on the performance dashboard.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Performance Analysis</h3>
            <p>Analyze performance data to identify issues and opportunities:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Compare actual performance against planned performance</li>
              <li>Identify trends and patterns in performance data</li>
              <li>Drill down into problem areas for detailed analysis</li>
              <li>Compare performance across similar projects</li>
              <li>Generate performance reports for stakeholders</li>
            </ul>
            <p className="mt-2">To analyze performance:</p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>In the Performance Monitoring view, click "Analysis Tools"</li>
              <li>Select the metrics you want to analyze</li>
              <li>Choose the time period for analysis</li>
              <li>The system will generate charts and tables showing performance trends</li>
              <li>Use filters to focus on specific aspects of performance</li>
            </ol>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Corrective Actions</h3>
            <p>Take corrective actions to address performance issues:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Identify the root cause of performance issues</li>
              <li>Develop action plans to address the causes</li>
              <li>Implement changes to improve performance</li>
              <li>Monitor the effectiveness of corrective actions</li>
              <li>Document lessons learned for future projects</li>
            </ul>
            <p className="mt-2">To document corrective actions:</p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>In the Performance Monitoring view, click "Corrective Actions"</li>
              <li>Click "Add Corrective Action"</li>
              <li>Describe the performance issue and its root cause</li>
              <li>Detail the planned corrective action</li>
              <li>Assign responsibility and set a deadline</li>
              <li>Track implementation and results</li>
            </ol>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-6">Status Reporting</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Project Status Reporting</h3>
            <p>Generate and distribute project status reports:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li>
                Navigate to Projects {">"} Monitoring {">"} Status
              </li>
              <li>Select your project from the dropdown</li>
              <li>Choose the type of status report to generate</li>
              <li>Select the reporting period</li>
              <li>Generate the report</li>
              <li>Review and distribute to stakeholders</li>
            </ol>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Types of Status Reports</h3>
            <p>Different report types for different audiences and purposes:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="font-medium">Executive Summary:</span> High-level overview for management
              </li>
              <li>
                <span className="font-medium">Detailed Progress Report:</span> Comprehensive status for project team
              </li>
              <li>
                <span className="font-medium">Client Status Update:</span> Tailored information for client communication
              </li>
              <li>
                <span className="font-medium">Team Performance Report:</span> Focus on team productivity and issues
              </li>
              <li>
                <span className="font-medium">Financial Status Report:</span> Budget and cost tracking
              </li>
            </ul>
            <p className="mt-2 text-sm text-muted-foreground">
              Each report type includes different sections and levels of detail appropriate for its purpose.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Report Content</h3>
            <p>Standard sections included in status reports:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="font-medium">Project Overview:</span> Basic project information and objectives
              </li>
              <li>
                <span className="font-medium">Status Summary:</span> Overall project status (On Track, At Risk, Delayed)
              </li>
              <li>
                <span className="font-medium">Progress Update:</span> What has been accomplished in the reporting period
              </li>
              <li>
                <span className="font-medium">Upcoming Work:</span> Planned activities for the next period
              </li>
              <li>
                <span className="font-medium">Issues and Risks:</span> Current issues and potential risks
              </li>
              <li>
                <span className="font-medium">Key Metrics:</span> Performance indicators and statistics
              </li>
              <li>
                <span className="font-medium">Action Items:</span> Tasks requiring attention or decisions
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-6">Change Management</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Managing Project Changes</h3>
            <p>Track and control changes to project scope, schedule, or requirements:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li>
                Navigate to Projects {">"} Monitoring {">"} Changes
              </li>
              <li>Select your project from the dropdown</li>
              <li>View all change requests for the project</li>
              <li>Create new change requests as needed</li>
              <li>Process change requests through the approval workflow</li>
              <li>Implement approved changes</li>
              <li>Track the impact of changes on the project</li>
            </ol>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Change Request Process</h3>
            <p>Follow a structured process for handling changes:</p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>
                <span className="font-medium">Request:</span> Document the proposed change
              </li>
              <li>
                <span className="font-medium">Analysis:</span> Assess impact on scope, schedule, cost, and quality
              </li>
              <li>
                <span className="font-medium">Review:</span> Evaluate the change against project objectives
              </li>
              <li>
                <span className="font-medium">Decision:</span> Approve, reject, or defer the change
              </li>
              <li>
                <span className="font-medium">Implementation:</span> Update plans and execute the change
              </li>
              <li>
                <span className="font-medium">Verification:</span> Confirm the change was implemented correctly
              </li>
            </ol>
            <p className="mt-2 text-sm text-muted-foreground">
              The system tracks each change request through this process, with appropriate notifications at each stage.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg mt-8">
            <h3 className="font-medium">Real-World Example</h3>
            <p className="text-sm mt-2 italic">
              "Ahmed is managing a custom wedding dress project. During the first fitting, the client requests
              additional beadwork on the bodice, which wasn't in the original design. Ahmed creates a change request in
              the system, documenting the client's requirements with photos and notes. He then performs an impact
              analysis, determining that the change will add 3 days to the schedule and require additional materials
              costing AED 500. He submits this analysis to the client along with a revised price. Once the client
              approves, Ahmed updates the project schedule, reserves the additional materials, and assigns the beadwork
              task to his specialist. The system automatically updates all project metrics to reflect the approved
              change, ensuring everyone on the team is aware of the new requirements and timeline."
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-6">Risk Monitoring</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Monitoring Project Risks</h3>
            <p>Continuously monitor and manage project risks:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li>
                Navigate to Projects {">"} Monitoring {">"} Risks
              </li>
              <li>Select your project from the dropdown</li>
              <li>View the risk register with all identified risks</li>
              <li>Update risk status and assessments</li>
              <li>Track risk response implementation</li>
              <li>Identify new risks as they emerge</li>
              <li>Document risk outcomes and lessons learned</li>
            </ol>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Risk Status Updates</h3>
            <p>Regularly update the status of identified risks:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="font-medium">Risk Probability:</span> Reassess likelihood of occurrence
              </li>
              <li>
                <span className="font-medium">Risk Impact:</span> Update potential impact if risk occurs
              </li>
              <li>
                <span className="font-medium">Risk Exposure:</span> Recalculate overall risk level
              </li>
              <li>
                <span className="font-medium">Response Status:</span> Track implementation of risk responses
              </li>
              <li>
                <span className="font-medium">Trigger Status:</span> Monitor risk triggers and warning signs
              </li>
            </ul>
            <p className="mt-2">To update risk status:</p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>Select the risk in the risk register</li>
              <li>Click "Update Status"</li>
              <li>Enter the latest assessment and information</li>
              <li>Add any relevant notes or observations</li>
              <li>Click "Save" to update the risk record</li>
            </ol>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Emerging Risks</h3>
            <p>Identify and manage new risks that emerge during the project:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Conduct regular risk identification sessions</li>
              <li>Encourage team members to report potential risks</li>
              <li>Monitor project environment for changing conditions</li>
              <li>Analyze issues and changes for risk implications</li>
              <li>Add new risks to the risk register as they are identified</li>
            </ul>
            <p className="mt-2">To add a new risk:</p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>In the Risk Monitoring view, click "Add Risk"</li>
              <li>Complete the risk identification form</li>
              <li>Assess probability and impact</li>
              <li>Develop response strategies</li>
              <li>Assign risk ownership</li>
              <li>Click "Save" to add the risk to the register</li>
            </ol>
          </div>

          <div className="bg-muted p-4 rounded-lg mt-8">
            <h3 className="font-medium">Real-World Example</h3>
            <p className="text-sm mt-2 italic">
              "Fatima is monitoring a complex traditional wedding outfit project with extensive hand embroidery. During
              her weekly risk review, she notices that the specialized embroidery thread ordered from overseas is
              delayed in customs. She immediately updates the risk register, increasing the probability of the 'material
              delay' risk from low to high. The system automatically elevates this to a top risk based on its impact on
              the project timeline. Fatima implements the predefined contingency plan: sourcing a similar thread locally
              at a premium price to keep the project on schedule. She documents this decision and its cost impact in the
              system. When the original thread finally arrives, she updates the risk status to 'closed' and adds a
              lesson learned about international shipping delays to the knowledge base for future projects."
            </p>
          </div>
        </div>
      </div>

      <DocsPagination
        prev={{ href: "/projects/execution", title: "Project Execution" }}
        next={{ href: "/projects/closure", title: "Project Closure" }}
      />
    </div>
  )
}
