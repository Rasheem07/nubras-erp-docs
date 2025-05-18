import type { Metadata } from "next"
import { DocsPagination } from "@/components/docs-pagination"

export const metadata: Metadata = {
  title: "Project Closure | Nubras ERP Documentation",
  description: "Documentation for project closure in Nubras ERP",
}

export default function ProjectClosureDocumentation() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Project Closure</h1>
          <p className="text-xl text-muted-foreground">
            Guide to properly closing tailoring projects and capturing lessons learned.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-8">
        <h2 className="text-2xl font-bold">Completing the Project</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Final Project Steps</h3>
            <p>Complete the final steps to close a tailoring project:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li>
                Navigate to Projects {">"} Closure {">"} Complete
              </li>
              <li>Select your project from the dropdown</li>
              <li>Verify all deliverables have been completed</li>
              <li>Confirm final client acceptance</li>
              <li>Complete final documentation</li>
              <li>Generate final reports</li>
              <li>Formally close the project</li>
            </ol>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Closure Checklist</h3>
            <p>Use the closure checklist to ensure all aspects of the project are properly completed:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>All tasks marked as complete</li>
              <li>All quality checkpoints passed</li>
              <li>Final fitting completed and documented</li>
              <li>Client acceptance signature obtained</li>
              <li>All issues resolved and closed</li>
              <li>All materials accounted for</li>
              <li>Final invoice generated and sent</li>
              <li>Payment received or payment plan established</li>
              <li>Project documentation completed</li>
            </ul>
            <p className="mt-2 text-sm text-muted-foreground">
              The system will not allow project closure until all required items on the checklist are completed.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg mt-8">
            <h3 className="font-medium">Real-World Example</h3>
            <p className="text-sm mt-2 italic">
              "Fatima has completed a wedding dress project and is ready to close it. She navigates to the Closure
              section and selects the project. The system displays the closure checklist, showing that the final fitting
              is complete, the client has signed off on the dress, and all quality checks have passed. Fatima notices
              that the final invoice hasn't been generated yet, so she clicks the link to create it directly from the
              closure page. Once the invoice is sent to the client, she returns to the closure checklist and sees that
              all items are now complete. She adds a note about the client's enthusiastic reaction to the final dress
              and clicks 'Close Project'. The system archives the project data, updates inventory records to reflect all
              used materials, and adds the project to the client's history for future reference."
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-6">Project Reports</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Generating Closure Reports</h3>
            <p>Create comprehensive reports documenting the project:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li>
                Navigate to Projects {">"} Closure {">"} Report
              </li>
              <li>Select your project from the dropdown</li>
              <li>Choose the types of reports to generate</li>
              <li>Customize report content as needed</li>
              <li>Generate the reports</li>
              <li>Save or share reports with stakeholders</li>
            </ol>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Available Closure Reports</h3>
            <p>Several report types are available for project closure:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="font-medium">Project Summary Report:</span> Overview of the entire project
              </li>
              <li>
                <span className="font-medium">Financial Summary:</span> Budget vs. actual costs
              </li>
              <li>
                <span className="font-medium">Timeline Analysis:</span> Planned vs. actual schedule
              </li>
              <li>
                <span className="font-medium">Quality Report:</span> Summary of quality checks and issues
              </li>
              <li>
                <span className="font-medium">Resource Utilization:</span> Analysis of resource usage
              </li>
              <li>
                <span className="font-medium">Client Report:</span> Client-friendly summary of the project
              </li>
            </ul>
            <p className="mt-2 text-sm text-muted-foreground">
              Reports can be customized to include or exclude specific sections based on your needs.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-6">Lessons Learned</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Capturing Lessons Learned</h3>
            <p>Document valuable insights from the project for future reference:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li>
                Navigate to Projects {">"} Closure {">"} Lessons
              </li>
              <li>Select your project from the dropdown</li>
              <li>Add lessons learned in various categories</li>
              <li>Document what went well and what could be improved</li>
              <li>Record specific techniques or solutions discovered</li>
              <li>Tag lessons for easy searching in the future</li>
              <li>Save the lessons learned document</li>
            </ol>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Lessons Learned Categories</h3>
            <p>Organize lessons learned by category for better knowledge management:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="font-medium">Design Process:</span> Insights about design and pattern making
              </li>
              <li>
                <span className="font-medium">Material Selection:</span> Learnings about fabrics and notions
              </li>
              <li>
                <span className="font-medium">Construction Techniques:</span> Successful or challenging techniques
              </li>
              <li>
                <span className="font-medium">Client Communication:</span> Effective communication strategies
              </li>
              <li>
                <span className="font-medium">Time Management:</span> Scheduling and timeline insights
              </li>
              <li>
                <span className="font-medium">Resource Allocation:</span> Effective use of people and equipment
              </li>
            </ul>
            <p className="mt-2 text-sm text-muted-foreground">
              Lessons learned become part of your organization's knowledge base and can be searched and referenced for
              future projects.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg mt-8">
            <h3 className="font-medium">Real-World Example</h3>
            <p className="text-sm mt-2 italic">
              "After completing a complex traditional wedding outfit with extensive embroidery, Ahmed documents several
              valuable lessons learned. In the Construction Techniques category, he notes that pre-testing the
              embroidery pattern on scrap fabric saved significant time and prevented potential mistakes on the actual
              garment. Under Material Selection, he records that the specific silk they used frayed excessively and
              recommends using a different type for similar projects in the future. For Client Communication, he
              documents that sending progress photos at each stage greatly improved client satisfaction and reduced
              revision requests. Ahmed tags these lessons with 'embroidery', 'silk', and 'wedding' so that other tailors
              in the shop can easily find this information when working on similar projects. Six months later, when
              another tailor is planning a similar project, they search the lessons learned database and immediately
              benefit from Ahmed's experience."
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-6">Client Feedback</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Collecting Client Feedback</h3>
            <p>Gather and document client feedback about the project:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li>
                Navigate to Projects {">"} Closure {">"} Feedback
              </li>
              <li>Select your project from the dropdown</li>
              <li>Choose feedback collection method (form, interview, etc.)</li>
              <li>Send feedback request to client or record feedback directly</li>
              <li>Review and analyze feedback</li>
              <li>Identify areas for improvement</li>
              <li>Document action items based on feedback</li>
            </ol>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Feedback Categories</h3>
            <p>Collect feedback in multiple categories for comprehensive assessment:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="font-medium">Product Quality:</span> Satisfaction with the final garment
              </li>
              <li>
                <span className="font-medium">Service Experience:</span> Satisfaction with the service provided
              </li>
              <li>
                <span className="font-medium">Communication:</span> Effectiveness of communication throughout the
                project
              </li>
              <li>
                <span className="font-medium">Timeliness:</span> Satisfaction with project timeline and delivery
              </li>
              <li>
                <span className="font-medium">Value:</span> Perception of value for money
              </li>
              <li>
                <span className="font-medium">Overall Satisfaction:</span> General satisfaction with the entire
                experience
              </li>
            </ul>
            <p className="mt-2 text-sm text-muted-foreground">
              Feedback can be collected using rating scales, open-ended questions, or a combination of both.
            </p>
          </div>
        </div>
      </div>

      <DocsPagination
        prev={{ href: "/projects/monitoring", title: "Project Monitoring" }}
        next={{ href: "/projects/upcoming-features", title: "Upcoming Features" }}
      />
    </div>
  )
}
