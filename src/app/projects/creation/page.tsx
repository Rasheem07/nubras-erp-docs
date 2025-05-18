import type { Metadata } from "next"
import { DocsPagination } from "@/components/docs-pagination"

export const metadata: Metadata = {
  title: "Project Creation | Nubras ERP Documentation",
  description: "Documentation for project creation in Nubras ERP",
}

export default function ProjectCreationDocs() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Project Creation</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive guide to creating and setting up new tailoring projects in Nubras ERP.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-8">
        <h2 className="text-2xl font-bold">Project Basics</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Creating a New Project</h3>
            <p>To create a new tailoring project, follow these steps:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li>Navigate to Projects {">"} Projects List</li>
              <li>Click the "Create New Project" button in the top right corner</li>
              <li>Fill in the basic project information in the form that appears</li>
              <li>Click "Next" to proceed to client details</li>
            </ol>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Required Project Information</h3>
            <p>The following information is required when creating a new project:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="font-medium">Project Name:</span> A descriptive name for the project
              </li>
              <li>
                <span className="font-medium">Project Type:</span> Select from predefined types (e.g., Custom Suit,
                Wedding Dress, Kandura)
              </li>
              <li>
                <span className="font-medium">Priority:</span> Set the priority level (High, Medium, Low)
              </li>
              <li>
                <span className="font-medium">Start Date:</span> When work on the project will begin
              </li>
              <li>
                <span className="font-medium">Target Completion Date:</span> When the project should be completed
              </li>
              <li>
                <span className="font-medium">Description:</span> Brief overview of the project requirements
              </li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Project Templates</h3>
            <p>To save time, you can use project templates for common garment types:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li>In the project creation form, click "Use Template"</li>
              <li>Select from available templates (e.g., Men's Suit, Traditional Kandura, Evening Gown)</li>
              <li>The template will pre-fill many fields including task lists, material requirements, and timelines</li>
              <li>Customize the pre-filled information as needed for your specific project</li>
            </ol>
            <p className="mt-2 text-sm text-muted-foreground">
              You can create your own templates by saving existing projects as templates in the Project Details page.
            </p>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Project Numbering</h3>
            <p>Projects are automatically assigned a unique identifier based on your system settings:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Default format: PRJ-YYYY-MM-NNNN (e.g., PRJ-2023-05-0001)</li>
              <li>Custom formats can be configured in System Settings</li>
              <li>Project numbers are searchable throughout the system</li>
              <li>All related documents (invoices, orders) will reference this number</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-6">Client Details</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Selecting or Creating a Client</h3>
            <p>After entering basic project information, you'll need to associate the project with a client:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li>In the Client Details section, search for an existing client by name, phone, or ID</li>
              <li>If the client exists, select them from the dropdown results</li>
              <li>If this is a new client, click "Create New Client"</li>
              <li>Fill in the required client information (name, contact details, etc.)</li>
              <li>Click "Save Client" to create the client record and associate it with the project</li>
            </ol>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Required Client Information</h3>
            <p>The following information is required for new clients:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="font-medium">Full Name:</span> Client's complete name
              </li>
              <li>
                <span className="font-medium">Phone Number:</span> Primary contact number
              </li>
              <li>
                <span className="font-medium">Email Address:</span> For digital communications and updates
              </li>
              <li>
                <span className="font-medium">Preferred Contact Method:</span> How the client prefers to be contacted
              </li>
              <li>
                <span className="font-medium">Address:</span> Physical address for deliveries or home fittings
              </li>
            </ul>
            <p className="mt-2 text-sm text-muted-foreground">
              Additional optional fields include alternate phone, company name, and special notes.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg mt-8">
            <h3 className="font-medium">Real-World Example</h3>
            <p className="text-sm mt-2 italic">
              "Aisha runs a bridal tailoring business. When a new client, Fatima, comes in for a wedding dress, Aisha
              creates a new project in the system. She names it 'Fatima's Wedding Dress', selects 'Bridal' as the
              project type, sets a high priority, and schedules it to start immediately with completion three months
              before the wedding date. Since Fatima is a new client, Aisha clicks 'Create New Client' and enters
              Fatima's contact details, noting her preference for WhatsApp communication. She also records that Fatima
              was referred by another satisfied client, which will help with Aisha's marketing analysis. The system
              automatically assigns the project number BRD-2023-06-0012, which will be used to track all aspects of this
              wedding dress creation from measurements to final delivery."
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-6">Measurements</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Recording Measurements</h3>
            <p>Accurate measurements are critical for tailoring projects:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li>In the project creation flow, navigate to the Measurements tab</li>
              <li>For existing clients, you can load their previous measurements</li>
              <li>To update measurements, click "Update Measurements"</li>
              <li>For new clients, click "Record New Measurements"</li>
              <li>Enter all required measurements based on the garment type</li>
              <li>Save the measurements to associate them with the project</li>
            </ol>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Measurement Types</h3>
            <p>Different garment types require different measurements:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="font-medium">Suits/Jackets:</span> Chest, waist, shoulders, sleeve length, back length,
                etc.
              </li>
              <li>
                <span className="font-medium">Trousers:</span> Waist, hip, inseam, outseam, thigh, knee, cuff, etc.
              </li>
              <li>
                <span className="font-medium">Shirts:</span> Neck, chest, shoulders, sleeve length, waist, etc.
              </li>
              <li>
                <span className="font-medium">Dresses:</span> Bust, waist, hip, shoulder to waist, waist to hem, etc.
              </li>
              <li>
                <span className="font-medium">Traditional Garments:</span> Specific measurements based on the garment
                type
              </li>
            </ul>
            <p className="mt-2 text-sm text-muted-foreground">
              The system will automatically show the required measurements based on the project type selected.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-6">Materials</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Selecting Materials</h3>
            <p>The final step in project creation is selecting and allocating materials:</p>
            <ol className="list-decimal list-inside mt-2 space-y-2">
              <li>Navigate to the Materials tab in the project creation flow</li>
              <li>Browse available fabrics and materials by category</li>
              <li>Select primary fabric for the garment</li>
              <li>Add lining, interfacing, and other required materials</li>
              <li>Specify quantities needed for each material</li>
              <li>Add notions (buttons, zippers, thread, etc.)</li>
            </ol>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Material Requirements Calculation</h3>
            <p>The system can automatically calculate material requirements:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Based on the garment type and client measurements</li>
              <li>Adjusts for pattern matching requirements</li>
              <li>Includes standard wastage percentages</li>
              <li>Accounts for fabric width and direction</li>
              <li>Suggests optimal cutting layouts</li>
            </ul>
            <p className="mt-2 text-sm text-muted-foreground">
              To use automatic calculation, click "Calculate Requirements" after selecting the fabric.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg mt-8">
            <h3 className="font-medium">Real-World Example</h3>
            <p className="text-sm mt-2 italic">
              "Khalid is creating a project for a custom kandura. After recording the client's measurements, he moves to
              the Materials tab. He selects a premium white cotton fabric as the primary material. The system
              automatically calculates that he'll need 4.5 meters based on the client's measurements and the standard
              kandura pattern. Khalid also adds matching thread and custom buttons from inventory. When he selects the
              embroidery thread for the collar detail, the system shows a yellow indicator, warning that stock is
              limited. Khalid immediately reserves the available thread for this project to ensure it won't be used for
              another order. The system also suggests he might need additional interfacing for the collar based on the
              design selected, which Khalid adds to the materials list. With all materials selected and reserved, Khalid
              completes the project creation process, ready to begin production."
            </p>
          </div>
        </div>
      </div>

      <DocsPagination
        prev={{ href: "/projects", title: "Projects Overview" }}
        next={{ href: "/projects/planning", title: "Project Planning" }}
      />
    </div>
  )
}
