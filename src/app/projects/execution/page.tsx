import type { Metadata } from "next"
import { DocsPagination } from "@/components/docs-pagination"

export const metadata: Metadata = {
  title: "Project Execution | Nubras ERP Documentation",
  description: "Documentation for project execution in Nubras ERP",
}

export default function ProjectExecutionDocumentation() {
  return (
    <div className="container py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Project Execution</h1>
          <p className="text-xl text-muted-foreground">
            Guide to executing tailoring projects efficiently and maintaining quality.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-8">
        <h2 className="text-2xl font-bold">Task Management</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Managing Project Tasks</h3>
            <p>Efficiently manage and track tasks during project execution:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li>
                Navigate to Projects {">"} Execution {">"} Tasks
              </li>
              <li>Select your project from the dropdown</li>
              <li>View all tasks organized by phase</li>
              <li>Update task status as work progresses</li>
              <li>Record actual time spent on tasks</li>
              <li>Add comments or notes to tasks</li>
              <li>Attach photos or documents to document progress</li>
            </ol>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Task Status Updates</h3>
            <p>Keep task statuses updated to reflect current progress:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="font-medium">Not Started:</span> Task is planned but work hasn't begun
              </li>
              <li>
                <span className="font-medium">In Progress:</span> Work on the task has started
              </li>
              <li>
                <span className="font-medium">On Hold:</span> Task is temporarily paused
              </li>
              <li>
                <span className="font-medium">Completed:</span> Task is finished and ready for review
              </li>
              <li>
                <span className="font-medium">Approved:</span> Task completion has been verified
              </li>
            </ul>
            <p className="mt-2">To update a task status:</p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>Click on the task in the task list</li>
              <li>Select the new status from the dropdown</li>
              <li>Add any relevant comments about the status change</li>
              <li>Click "Update" to save the changes</li>
            </ol>
          </div>

          <div className="bg-muted p-4 rounded-lg mt-8">
            <h3 className="font-medium">Real-World Example</h3>
            <p className="text-base mt-2 italic">
              "Noor manages a team of five tailors working on multiple projects simultaneously. Each morning, she
              reviews the task list for all active projects. She notices that Ali has completed the pattern drafting for
              a custom suit, so she updates the task status to 'Completed' and adds a comment noting that the pattern
              has been placed in the cutting room. She then assigns the next task, 'Fabric Cutting', to Fatima who
              specializes in precise cutting work. Noor sees that the embroidery task for a traditional dress is marked
              'On Hold' with a comment explaining that they're waiting for the special thread to arrive. She checks with
              the supplier and updates the comment with the expected delivery date. By maintaining accurate task
              statuses and detailed comments, Noor ensures that everyone on the team knows exactly what's happening with
              each project and what they should be working on next."
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-6">Quality Control</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Quality Control Process</h3>
            <p>Implement quality control throughout the project execution:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li>
                Navigate to Projects {">"} Execution {">"} Quality
              </li>
              <li>Select your project from the dropdown</li>
              <li>View quality checkpoints for each phase</li>
              <li>Conduct quality inspections at defined points</li>
              <li>Record inspection results and any issues found</li>
              <li>Track resolution of quality issues</li>
              <li>Document final quality approval</li>
            </ol>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Quality Checkpoints</h3>
            <p>Standard quality checkpoints for tailoring projects:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="font-medium">Pattern Quality:</span> Accuracy and completeness of patterns
              </li>
              <li>
                <span className="font-medium">Cutting Quality:</span> Precision of cutting and pattern matching
              </li>
              <li>
                <span className="font-medium">Construction Quality:</span> Seam quality, stitching, and internal
                structure
              </li>
              <li>
                <span className="font-medium">Fitting Quality:</span> Fit, drape, and comfort
              </li>
              <li>
                <span className="font-medium">Finishing Quality:</span> Buttonholes, hems, pressing, and overall
                appearance
              </li>
              <li>
                <span className="font-medium">Final Inspection:</span> Comprehensive check before delivery
              </li>
            </ul>
            <p className="mt-2 text-base text-muted-foreground">
              Each checkpoint has specific criteria that must be met before proceeding to the next phase.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg mt-8">
            <h3 className="font-medium">Real-World Example</h3>
            <p className="text-base mt-2 italic">
              "Samir is the quality control specialist at a high-end tailoring shop. When a custom suit reaches the
              construction quality checkpoint, Samir conducts a thorough inspection using the standardized checklist in
              the system. He checks each seam for proper tension and stitch length, examines the internal structure for
              correct interfacing application, and verifies that all pattern pieces have been assembled correctly. He
              finds that the sleeve lining has been attached with visible stitches, which doesn't meet their quality
              standards. Samir creates a quality issue in the system, assigns it to the tailor responsible, takes a
              photo of the problem area, and adds detailed instructions for correction. The system automatically
              notifies the tailor, who fixes the issue and marks it as resolved. Samir then re-inspects the work,
              approves it, and the project can proceed to the next phase. This systematic approach to quality control
              ensures that every garment meets the shop's high standards before reaching the client."
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-6">Issue Management</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Managing Project Issues</h3>
            <p>Track and resolve issues that arise during project execution:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li>
                Navigate to Projects {">"} Execution {">"} Issues
              </li>
              <li>Select your project from the dropdown</li>
              <li>View all project issues in one place</li>
              <li>Create new issues as they arise</li>
              <li>Assign issues to team members for resolution</li>
              <li>Track issue status and resolution progress</li>
              <li>Document issue resolution for future reference</li>
            </ol>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Issue Categories</h3>
            <p>Categorize issues for better tracking and reporting:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="font-medium">Material Issues:</span> Problems with fabric quality, availability, etc.
              </li>
              <li>
                <span className="font-medium">Technical Issues:</span> Construction problems, pattern errors, etc.
              </li>
              <li>
                <span className="font-medium">Client Issues:</span> Changes in requirements, communication problems,
                etc.
              </li>
              <li>
                <span className="font-medium">Resource Issues:</span> Staff availability, equipment problems, etc.
              </li>
              <li>
                <span className="font-medium">Timeline Issues:</span> Delays, scheduling conflicts, etc.
              </li>
              <li>
                <span className="font-medium">Quality Issues:</span> Defects, workmanship problems, etc.
              </li>
            </ul>
            <p className="mt-2 text-base text-muted-foreground">
              When creating a new issue, select the appropriate category to help with organization and reporting.
            </p>
          </div>
        </div>
      </div>

      <DocsPagination
        prev={{ href: "/projects/planning", title: "Project Planning" }}
        next={{ href: "/projects/monitoring", title: "Project Monitoring" }}
      />
    </div>
  )
}
