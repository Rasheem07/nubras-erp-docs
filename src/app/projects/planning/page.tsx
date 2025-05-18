import type { Metadata } from "next"
import { DocsPagination } from "@/components/docs-pagination"

export const metadata: Metadata = {
  title: "Project Planning | Nubras ERP Documentation",
  description: "Documentation for project planning in Nubras ERP",
}

export default function ProjectPlanningDocumentation() {
  return (
    <div className="container py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Project Planning</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive guide to planning tailoring projects effectively.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-8">
        <h2 className="text-2xl font-bold">Work Breakdown Structure (WBS)</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Creating a Work Breakdown Structure</h3>
            <p>The Work Breakdown Structure (WBS) divides your project into manageable components:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li>
                Navigate to Projects {">"} Planning {">"} WBS
              </li>
              <li>Select your project from the dropdown</li>
              <li>Click "Create WBS" or "Use Template" to start</li>
              <li>Define the major phases of your project</li>
              <li>Break down each phase into specific tasks</li>
              <li>Assign responsibilities for each task</li>
            </ol>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Standard Tailoring WBS Template</h3>
            <p>The system includes a standard WBS template for tailoring projects:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="font-medium">1.0 Preparation</span>
                <ul className="list-disc list-inside ml-4">
                  <li>1.1 Client consultation</li>
                  <li>1.2 Measurements</li>
                  <li>1.3 Design finalization</li>
                  <li>1.4 Material selection</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">2.0 Pattern Making</span>
                <ul className="list-disc list-inside ml-4">
                  <li>2.1 Pattern drafting</li>
                  <li>2.2 Pattern adjustment</li>
                  <li>2.3 Pattern validation</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">3.0 Cutting</span>
                <ul className="list-disc list-inside ml-4">
                  <li>3.1 Fabric preparation</li>
                  <li>3.2 Layout planning</li>
                  <li>3.3 Cutting execution</li>
                  <li>3.4 Cut piece organization</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">4.0 Construction</span>
                <ul className="list-disc list-inside ml-4">
                  <li>4.1 Initial assembly</li>
                  <li>4.2 First fitting</li>
                  <li>4.3 Adjustments</li>
                  <li>4.4 Final assembly</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">5.0 Finishing</span>
                <ul className="list-disc list-inside ml-4">
                  <li>5.1 Buttonholes and buttons</li>
                  <li>5.2 Hemming</li>
                  <li>5.3 Pressing</li>
                  <li>5.4 Final inspection</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">6.0 Delivery</span>
                <ul className="list-disc list-inside ml-4">
                  <li>6.1 Final fitting</li>
                  <li>6.2 Client acceptance</li>
                  <li>6.3 Packaging</li>
                  <li>6.4 Delivery</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="bg-muted p-4 rounded-lg mt-8">
            <h3 className="font-medium">Real-World Example</h3>
            <p className="text-base mt-2 italic">
              "Layla is planning a complex bridal gown project with extensive beadwork. She starts with the standard WBS
              template but adds a specialized phase for beading work between Construction and Finishing. She breaks this
              down into tasks: bead pattern transfer, base beading application, accent beading, and quality check. She
              assigns the specialized beading tasks to Sara, her beading expert, while keeping other construction tasks
              assigned to her general tailors. By creating this detailed WBS, Layla ensures that no aspect of the
              complex gown is overlooked, and everyone knows exactly what they're responsible for and when each task
              needs to be completed."
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-6">Project Scheduling</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Creating a Project Schedule</h3>
            <p>After defining your WBS, create a detailed schedule:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li>
                Navigate to Projects {">"} Planning {">"} Schedule
              </li>
              <li>Select your project from the dropdown</li>
              <li>The system will import tasks from your WBS</li>
              <li>Set start and end dates for each task</li>
              <li>Define dependencies between tasks</li>
              <li>Allocate resources to tasks</li>
              <li>Save the schedule to finalize</li>
            </ol>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Setting Dependencies</h3>
            <p>Define relationships between tasks to create a logical workflow:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="font-medium">Finish-to-Start (FS):</span> Task B cannot start until Task A is complete
              </li>
              <li>
                <span className="font-medium">Start-to-Start (SS):</span> Task B cannot start until Task A starts
              </li>
              <li>
                <span className="font-medium">Finish-to-Finish (FF):</span> Task B cannot finish until Task A finishes
              </li>
              <li>
                <span className="font-medium">Start-to-Finish (SF):</span> Task B cannot finish until Task A starts
              </li>
            </ul>
            <p className="mt-2">To set dependencies:</p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>Select a task in the schedule</li>
              <li>Click "Add Dependency"</li>
              <li>Select the related task</li>
              <li>Choose the dependency type</li>
              <li>Set any lag time if needed</li>
              <li>Click "Save" to create the dependency</li>
            </ol>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-6">Resource Planning</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Resource Allocation</h3>
            <p>Allocate resources to ensure your project has everything it needs:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li>
                Navigate to Projects {">"} Planning {">"} Resources
              </li>
              <li>Select your project from the dropdown</li>
              <li>The system will display all tasks from your schedule</li>
              <li>For each task, assign the necessary resources</li>
              <li>Set the allocation percentage for each resource</li>
              <li>Review resource utilization to identify overallocations</li>
              <li>Adjust as needed to optimize resource usage</li>
            </ol>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Resource Types</h3>
            <p>The system supports various resource types for tailoring projects:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="font-medium">Human Resources:</span> Tailors, pattern makers, cutters, etc.
              </li>
              <li>
                <span className="font-medium">Equipment:</span> Sewing machines, pressing equipment, cutting tables,
                etc.
              </li>
              <li>
                <span className="font-medium">Materials:</span> Fabrics, linings, interfacings, notions, etc.
              </li>
              <li>
                <span className="font-medium">Facilities:</span> Fitting rooms, workspaces, etc.
              </li>
              <li>
                <span className="font-medium">Services:</span> Specialized services like embroidery or beading
              </li>
            </ul>
            <p className="mt-2 text-base text-muted-foreground">
              Resources must be defined in the system before they can be allocated to projects.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg mt-8">
            <h3 className="font-medium">Real-World Example</h3>
            <p className="text-base mt-2 italic">
              "Ahmed manages a tailoring workshop with five tailors of varying skill levels. He's planning a rush order
              for a wedding party that includes multiple garments. In the resource planning view, he assigns his most
              experienced tailor, Yusuf, to the complex bride's dress, while allocating his newer tailors to the simpler
              bridesmaid dresses. He notices that his embroidery machine is showing as overallocated during the second
              week of the project. Ahmed adjusts the schedule to move some embroidery work earlier in the timeline when
              the machine is available. He also sees that he'll need the cutting table for multiple projects on the same
              day, so he staggers the cutting tasks to prevent resource conflicts. With careful resource planning, Ahmed
              ensures that all garments can be completed on time without bottlenecks or delays."
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-6">Risk Management</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Risk Assessment</h3>
            <p>Identify and assess potential risks to your project:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li>
                Navigate to Projects {">"} Planning {">"} Risk
              </li>
              <li>Select your project from the dropdown</li>
              <li>Click "Add Risk" to identify a new risk</li>
              <li>Categorize the risk (material, resource, timeline, etc.)</li>
              <li>Assess probability and impact</li>
              <li>Define response strategies</li>
              <li>Assign risk owners</li>
            </ol>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Common Tailoring Project Risks</h3>
            <p>Common risks in tailoring projects include:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="font-medium">Material Risks:</span> Fabric unavailability, defects, or delays
              </li>
              <li>
                <span className="font-medium">Measurement Risks:</span> Inaccurate measurements or client weight changes
              </li>
              <li>
                <span className="font-medium">Resource Risks:</span> Staff unavailability or equipment failure
              </li>
              <li>
                <span className="font-medium">Timeline Risks:</span> Delays in approvals or production
              </li>
              <li>
                <span className="font-medium">Quality Risks:</span> Issues with construction or finishing
              </li>
              <li>
                <span className="font-medium">Client Risks:</span> Changes in requirements or dissatisfaction
              </li>
            </ul>
            <p className="mt-2 text-base text-muted-foreground">
              The system includes a library of common risks that can be added to your project with a single click.
            </p>
          </div>
        </div>
      </div>

      <DocsPagination
        prev={{ href: "/projects/creation", title: "Project Creation" }}
        next={{ href: "/projects/execution", title: "Project Execution" }}
      />
    </div>
  )
}
