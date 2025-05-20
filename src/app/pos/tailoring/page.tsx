export default function TailoringDocumentation() {
  return (
    <div className="p-6 max-w-full">
      <h1 className="text-2xl font-semibold mb-3">Tailoring Management</h1>
      <p className="text-sm text-muted-foreground mb-6">Manage custom orders, measurements, and production workflow</p>

      <div className="text-sm">
        <p className="mb-4">
          The tailoring management module streamlines the entire custom garment process from measurements to final
          delivery, ensuring quality and timeliness for your tailoring business.
        </p>

        <div className="my-6 border rounded-lg overflow-hidden bg-gray-50 p-4">
          <div className="h-48 bg-white rounded border shadow-sm p-3">
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <div className="font-medium">Tailoring Order</div>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </div>
            </div>
            <div className="flex h-32">
              <div className="w-1/3 border-r pr-2">
                <div className="text-xs font-medium mb-1">Order Details</div>
                <div className="text-xs space-y-1">
                  <div>Order #: TS-2023-0458</div>
                  <div>Customer: Ahmed Al-Farsi</div>
                  <div>Item: Custom Suit (3-piece)</div>
                  <div>Due Date: 28 May 2023</div>
                  <div>Status: In Production</div>
                </div>
              </div>
              <div className="w-1/3 border-r px-2">
                <div className="text-xs font-medium mb-1">Specifications</div>
                <div className="text-xs space-y-1">
                  <div>Fabric: Premium Wool - Navy</div>
                  <div>Style: Modern Slim Fit</div>
                  <div>Lining: Burgundy Silk</div>
                  <div>Buttons: Horn, 2-button</div>
                  <div>Special: Monogram inside</div>
                </div>
              </div>
              <div className="w-1/3 pl-2">
                <div className="text-xs font-medium mb-1">Production Status</div>
                <div className="text-xs space-y-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                    <div>Cutting: Completed</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                    <div>Stitching: Completed</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                    <div>Finishing: In Progress</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-gray-300 mr-1"></div>
                    <div>Quality Check: Pending</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-gray-300 mr-1"></div>
                    <div>Delivery: Scheduled</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Tailoring Management Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Measurement Management</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Detailed measurement recording</li>
              <li>• Measurement history tracking</li>
              <li>• Visual measurement guides</li>
              <li>• Measurement templates by garment type</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Order Specifications</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Fabric and material selection</li>
              <li>• Style and design options</li>
              <li>• Customization features</li>
              <li>• Reference images attachment</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Production Workflow</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Stage-by-stage tracking</li>
              <li>• Tailor assignment and scheduling</li>
              <li>• Progress notifications</li>
              <li>• Deadline management</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Fitting Management</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Fitting appointment scheduling</li>
              <li>• Alteration tracking</li>
              <li>• Fitting notes and photos</li>
              <li>• Customer approval tracking</li>
            </ul>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Creating a New Tailoring Order</h2>

        <ol className="space-y-3 mb-6">
          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">1. Select Customer</h3>
            <p className="text-xs text-muted-foreground">Choose an existing customer or create a new profile.</p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">2. Record Measurements</h3>
            <p className="text-xs text-muted-foreground">
              Enter detailed measurements or select from saved measurement profiles.
            </p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">3. Select Fabric and Materials</h3>
            <p className="text-xs text-muted-foreground">
              Choose fabrics, linings, buttons, and other materials from inventory.
            </p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">4. Specify Design Details</h3>
            <p className="text-xs text-muted-foreground">
              Document style preferences, customizations, and special requirements.
            </p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">5. Set Timeline</h3>
            <p className="text-xs text-muted-foreground">
              Establish fitting dates, production schedule, and delivery deadline.
            </p>
          </li>

          <li>
            <h3 className="text-sm font-medium">6. Calculate Pricing</h3>
            <p className="text-xs text-muted-foreground">
              Determine final price based on materials, complexity, and timeline.
            </p>
          </li>
        </ol>

        <h2 className="text-lg font-medium mt-6 mb-3">Production Workflow Stages</h2>

        <div className="space-y-3 mb-6">
          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Order Creation</h3>
            <p className="text-xs text-muted-foreground">
              Initial order entry with measurements, specifications, and customer approval.
            </p>
          </div>

          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Cutting</h3>
            <p className="text-xs text-muted-foreground">Fabric cutting according to patterns and measurements.</p>
          </div>

          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Stitching</h3>
            <p className="text-xs text-muted-foreground">Assembly of garment components by assigned tailor.</p>
          </div>

          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">First Fitting</h3>
            <p className="text-xs text-muted-foreground">
              Initial fitting with customer to check measurements and make adjustments.
            </p>
          </div>

          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Alterations</h3>
            <p className="text-xs text-muted-foreground">Implementing changes based on fitting feedback.</p>
          </div>

          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Finishing</h3>
            <p className="text-xs text-muted-foreground">Final details, pressing, and preparation for delivery.</p>
          </div>

          <div>
            <h3 className="text-sm font-medium">Quality Check and Delivery</h3>
            <p className="text-xs text-muted-foreground">Final inspection and handover to customer.</p>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Real-World Example</h2>

        <div className="border rounded p-4 mb-6 text-xs italic bg-gray-50">
          <p>
            "When Mohammed orders a custom wedding suit, the sales associate creates a detailed order in the system.
            They record 24 precise measurements and attach reference photos of the desired style. Mohammed selects
            premium Italian wool fabric, mother-of-pearl buttons, and requests a custom monogram inside the jacket. The
            system automatically calculates material requirements, deducts fabric from inventory, and estimates 25 hours
            of labor. The order is assigned to Omar, their master tailor, with a production schedule including two
            fittings over three weeks. As each production stage is completed, the system updates the order status and
            sends Mohammed progress notifications. After the final fitting and approval, the completed suit is prepared
            for delivery, and the system generates the final invoice with a detailed breakdown of materials and
            services."
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 my-6 text-xs">
          <h3 className="text-sm font-medium text-blue-700 mb-1">Pro Tips</h3>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Take photos during fittings to document adjustments needed</li>
            <li>• Create style templates for common garment types to speed up order entry</li>
            <li>• Build in buffer time for each production stage to account for unexpected delays</li>
            <li>• Use the measurement comparison feature to verify changes over time</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
