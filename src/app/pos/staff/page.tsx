import { Users, Link2, FileSpreadsheet, Calendar } from "lucide-react"
import { DocsPagination } from "@/components/docs-pagination"

export default function StaffDocumentation() {

  return (
    <div className="p-6 max-w-full">
      <h1 className="text-2xl font-semibold mb-3">Staff Management</h1>
      <p className="text-sm text-muted-foreground mb-6">Manage employees, track performance, and assign tasks</p>

      <div className="text-sm">
        <p className="mb-4">
          The staff management module helps you track employee information, monitor performance, manage schedules, and
          assign tasks efficiently to optimize your workforce.
        </p>

        <div className="my-6 border rounded-lg overflow-hidden bg-gray-50 p-4">
          <div className="h-48 bg-white rounded border shadow-sm p-3">
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <div className="font-medium">Staff Dashboard</div>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </div>
            </div>
            <div className="flex h-32">
              <div className="w-1/4 border-r pr-2">
                <div className="text-xs font-medium mb-1">Staff List</div>
                <div className="text-xs space-y-1">
                  <div className="bg-blue-50 p-1 rounded">Fatima (Tailor)</div>
                  <div className="p-1">Hassan (Sales)</div>
                  <div className="p-1">Noor (Manager)</div>
                  <div className="p-1">Omar (Tailor)</div>
                </div>
              </div>
              <div className="w-3/4 pl-2">
                <div className="text-xs font-medium mb-1">Fatima's Performance</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-gray-100 p-1 rounded">
                    <div className="text-xs text-gray-500">Orders Completed</div>
                    <div className="font-medium">24 this month</div>
                  </div>
                  <div className="bg-gray-100 p-1 rounded">
                    <div className="text-xs text-gray-500">On-time Rate</div>
                    <div className="font-medium">98%</div>
                  </div>
                  <div className="bg-gray-100 p-1 rounded">
                    <div className="text-xs text-gray-500">Customer Rating</div>
                    <div className="font-medium">4.9/5.0</div>
                  </div>
                  <div className="bg-gray-100 p-1 rounded">
                    <div className="text-xs text-gray-500">Current Workload</div>
                    <div className="font-medium">8 orders</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Staff Management Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Employee Profiles</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Personal and contact information</li>
              <li>• Role and department assignment</li>
              <li>• Skills and specializations</li>
              <li>• Employment history and documents</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Performance Tracking</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Sales and order completion metrics</li>
              <li>• Quality assessment scores</li>
              <li>• Customer feedback ratings</li>
              <li>• Goal achievement tracking</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Scheduling</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Shift planning and management</li>
              <li>• Time-off requests and approvals</li>
              <li>• Attendance tracking</li>
              <li>• Overtime monitoring</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Task Assignment</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Order allocation to tailors</li>
              <li>• Workload balancing</li>
              <li>• Priority management</li>
              <li>• Progress tracking</li>
            </ul>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Integration with HR Module</h2>

        <div className="border rounded-lg p-4 mb-6 bg-gray-50">
          <div className="flex items-center mb-3">
            <Users className="h-5 w-5 text-blue-500 mr-2" />
            <h3 className="text-sm font-medium">Connected to HR Module</h3>
          </div>

          <p className="text-xs mb-3">
            The Staff Management in POS is seamlessly integrated with the HR module, ensuring consistent employee data
            across the system.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="flex items-start">
              <Link2 className="h-4 w-4 text-blue-500 mr-1 mt-0.5" />
              <div>
                <span className="font-medium">Synchronized Data</span>
                <p className="text-muted-foreground">Employee profiles automatically update when HR records change</p>
              </div>
            </div>

            <div className="flex items-start">
              <FileSpreadsheet className="h-4 w-4 text-blue-500 mr-1 mt-0.5" />
              <div>
                <span className="font-medium">Payroll Connection</span>
                <p className="text-muted-foreground">Sales commissions flow directly to payroll processing</p>
              </div>
            </div>

            <div className="flex items-start">
              <Calendar className="h-4 w-4 text-blue-500 mr-1 mt-0.5" />
              <div>
                <span className="font-medium">Leave Management</span>
                <p className="text-muted-foreground">Time-off requests sync with HR attendance tracking</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Adding a New Staff Member</h2>

        <ol className="space-y-3 mb-6">
          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">1. Access Staff Module</h3>
            <p className="text-xs text-muted-foreground">Navigate to Staff &gt; Add New Employee.</p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">2. Enter Personal Information</h3>
            <p className="text-xs text-muted-foreground">Input name, contact details, and emergency contacts.</p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">3. Assign Role and Permissions</h3>
            <p className="text-xs text-muted-foreground">
              Select job role and set appropriate system access permissions.
            </p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">4. Record Skills and Specializations</h3>
            <p className="text-xs text-muted-foreground">
              Document specific skills, such as tailoring specialties or sales expertise.
            </p>
          </li>

          <li>
            <h3 className="text-sm font-medium">5. Set Schedule and Compensation</h3>
            <p className="text-xs text-muted-foreground">
              Define working hours, salary information, and commission structure if applicable.
            </p>
          </li>
        </ol>

        <h2 className="text-lg font-medium mt-6 mb-3">Assigning Tasks to Staff</h2>

        <ol className="space-y-3 mb-6">
          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">1. Access Order Management</h3>
            <p className="text-xs text-muted-foreground">Navigate to Orders &gt; Pending Assignments.</p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">2. Select Order</h3>
            <p className="text-xs text-muted-foreground">
              Choosethe order that needs to be assigned to a staff member.
            </p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">3. View Available Staff</h3>
            <p className="text-xs text-muted-foreground">
              See a list of qualified staff with their current workload and availability.
            </p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">4. Assign Task</h3>
            <p className="text-xs text-muted-foreground">Select the appropriate staff member and assign the order.</p>
          </li>

          <li>
            <h3 className="text-sm font-medium">5. Set Priority and Deadline</h3>
            <p className="text-xs text-muted-foreground">
              Specify the priority level and completion deadline for the task.
            </p>
          </li>
        </ol>

        <h2 className="text-lg font-medium mt-6 mb-3">Real-World Example</h2>

        <div className="border rounded p-4 mb-6 text-xs italic bg-gray-50">
          <p>
            "Elegant Tailors employs five tailors with different specializations. When a new custom suit order comes in,
            the manager checks the staff dashboard to see current workloads. Omar specializes in suits but has 12
            pending orders, while Fatima, also skilled in suits, has only 8 orders and a higher on-time completion rate.
            The manager assigns the order to Fatima, setting a priority level of 'High' since the customer needs it for
            an upcoming event. The system automatically notifies Fatima of the new assignment, adds it to her task list,
            and updates her workload metrics. The manager can then track the order's progress through each production
            stage, receiving alerts if any delays occur."
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 my-6 text-xs">
          <h3 className="text-sm font-medium text-blue-700 mb-1">Pro Tips</h3>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Use skill tags to quickly identify the right staff for specific tasks</li>
            <li>• Review workload distribution weekly to prevent bottlenecks</li>
            <li>• Set up automatic notifications for approaching deadlines</li>
            <li>• Use performance data for targeted training and development</li>
          </ul>
        </div>

        <DocsPagination prev={{href: "/pos", title: "pos"}} next={{href: "/pos", title: "pos"}} />

      </div>
    </div>
  )
}
