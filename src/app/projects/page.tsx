import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList, Calendar, Users, AlertTriangle, LayoutDashboard } from "lucide-react"
import { DocsPagination } from "@/components/docs-pagination"

export const metadata: Metadata = {
  title: "Projects Management | Nubras ERP Documentation",
  description: "Documentation for project management in Nubras ERP",
}

export default function ProjectsDocsPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Projects Management</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive documentation for managing tailoring projects from initiation to closure.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-8">
        <h2 className="text-2xl font-bold">Projects Management Overview</h2>
        <p>
          The Projects Management module in Nubras ERP is designed specifically for tailoring businesses, enabling
          efficient management of custom garment projects from initial client measurements to final delivery.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Why Project Management Matters</h3>
            <p className="text-sm mb-4">Effective project management is crucial for tailoring businesses to:</p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Ensure projects are completed on time and within budget</li>
              <li>Manage resources effectively</li>
              <li>Maintain clear communication with clients</li>
              <li>Track progress and identify potential issues</li>
              <li>Deliver high-quality custom garments</li>
            </ul>
          </div>

          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">Module Benefits</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <ClipboardList className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Structured Workflow</h4>
                  <p className="text-sm text-muted-foreground">Standardized process for managing tailoring projects</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Efficient Scheduling</h4>
                  <p className="text-sm text-muted-foreground">Tools for creating and managing project timelines</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Resource Management</h4>
                  <p className="text-sm text-muted-foreground">
                    Effective allocation and tracking of project resources
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Risk Management</h4>
                  <p className="text-sm text-muted-foreground">Identify and mitigate potential project risks</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-3">Integration with Other Modules</h3>
          <p className="mb-4">
            The Projects Management Module integrates seamlessly with other parts of the Nubras ERP system:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Finance Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Automatic invoice generation</li>
                  <li>Project budget tracking</li>
                  <li>Revenue recognition</li>
                  <li>Cost allocation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Inventory Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Material reservation</li>
                  <li>Real-time stock availability</li>
                  <li>Material consumption tracking</li>
                  <li>Waste management</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">CRM Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>Client information synchronization</li>
                  <li>Communication history tracking</li>
                  <li>Feedback management</li>
                  <li>Targeted marketing</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-6">Key Features</h2>
        <p>
          The Projects Management module offers a comprehensive set of features designed specifically for tailoring
          businesses:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <LayoutDashboard className="h-5 w-5 mr-2" />
                Project Dashboard
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Project Statistics:</strong> View key metrics and completion rates
                </li>
                <li>
                  <strong>Status Distribution:</strong> Monitor project status across all projects
                </li>
                <li>
                  <strong>Upcoming Deadlines:</strong> Track critical deadlines and milestones
                </li>
                <li>
                  <strong>Recent Projects:</strong> Access recently updated projects
                </li>
                <li>
                  <strong>Resource Allocation:</strong> View resource allocation across projects
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                Client Management
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>
                  <strong>Measurement History:</strong> Track client measurements over time
                </li>
                <li>
                  <strong>Style Preferences:</strong> Record client style preferences
                </li>
                <li>
                  <strong>Order History:</strong> Maintain a history of client orders
                </li>
                <li>
                  <strong>Cultural Specifications:</strong> Document cultural requirements
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h3 className="font-medium">Real-World Example</h3>
          <p className="text-sm mt-2 italic">
            "Mohammed runs a high-end tailoring shop specializing in traditional and modern garments. Before
            implementing the Projects Management module, he struggled to keep track of multiple custom orders, often
            missing deadlines or forgetting specific client requirements. Now, he creates a new project for each custom
            order, recording all measurements, fabric selections, and design details in one place. The system
            automatically schedules each phase of work and assigns tasks to his team members. When clients call for
            updates, Mohammed can instantly see the current status of their order and provide accurate information. The
            module has reduced errors by 70% and improved on-time delivery rates to 95%, significantly enhancing client
            satisfaction and allowing Mohammed to take on more orders without compromising quality."
          </p>
        </div>
      </div>

      <DocsPagination next={{ href: "/projects/creation", title: "Project Creation" }} />
    </div>
  )
}
