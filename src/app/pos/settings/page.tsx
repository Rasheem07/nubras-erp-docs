export default function SettingsDocumentation() {
  return (
    <div className="p-6 max-w-full">
      <h1 className="text-2xl font-semibold mb-3">Settings</h1>
      <p className="text-sm text-muted-foreground mb-6">Configure and customize your POS system</p>

      <div className="text-sm">
        <p className="mb-4">
          The settings module allows you to customize the POS system to match your business requirements, configure tax
          rates, manage user permissions, and set up system preferences.
        </p>

        <div className="my-6 border rounded-lg overflow-hidden bg-gray-50 p-4">
          <div className="h-48 bg-white rounded border shadow-sm p-3">
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <div className="font-medium">System Settings</div>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 h-32">
              <div className="border rounded p-2">
                <div className="text-xs font-medium mb-1">Business Information</div>
                <div className="text-xs space-y-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded bg-gray-200 mr-1"></div>
                    <div>Company Details</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded bg-gray-200 mr-1"></div>
                    <div>Tax Registration</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded bg-gray-200 mr-1"></div>
                    <div>Locations</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded bg-gray-200 mr-1"></div>
                    <div>Currency & Language</div>
                  </div>
                </div>
              </div>
              <div className="border rounded p-2">
                <div className="text-xs font-medium mb-1">User Management</div>
                <div className="text-xs space-y-1">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded bg-gray-200 mr-1"></div>
                    <div>User Accounts</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded bg-gray-200 mr-1"></div>
                    <div>Roles & Permissions</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded bg-gray-200 mr-1"></div>
                    <div>Access Control</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded bg-gray-200 mr-1"></div>
                    <div>Activity Logs</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Key Settings Categories</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Business Configuration</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Company information</li>
              <li>• Store locations</li>
              <li>• Business hours</li>
              <li>• Currency and language</li>
              <li>• Tax registration details</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">User Management</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• User accounts</li>
              <li>• Role definitions</li>
              <li>• Permission assignments</li>
              <li>• Access restrictions</li>
              <li>• Security policies</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Sales Settings</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Receipt customization</li>
              <li>• Discount rules</li>
              <li>• Payment methods</li>
              <li>• Tax rates and rules</li>
              <li>• Sales workflow options</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Inventory Settings</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Stock level alerts</li>
              <li>• Reorder rules</li>
              <li>• Barcode configuration</li>
              <li>• Unit of measure settings</li>
              <li>• Inventory count preferences</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Customer Settings</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Loyalty program rules</li>
              <li>• Customer fields configuration</li>
              <li>• Communication preferences</li>
              <li>• Privacy and data retention</li>
              <li>• Customer categories</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">System Preferences</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Backup schedule</li>
              <li>• Notification settings</li>
              <li>• Integration configurations</li>
              <li>• Printer setup</li>
              <li>• Hardware connections</li>
            </ul>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Configuring Tax Settings</h2>

        <ol className="space-y-3 mb-6">
          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">1. Access Tax Settings</h3>
            <p className="text-xs text-muted-foreground">Navigate to Settings &gt; Sales &gt; Tax Configuration.</p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">2. Set Default Tax Rate</h3>
            <p className="text-xs text-muted-foreground">
              Configure the standard VAT rate (e.g., 15% for Saudi Arabia).
            </p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">3. Create Tax Categories</h3>
            <p className="text-xs text-muted-foreground">
              Define different tax categories if certain products have special rates.
            </p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">4. Configure Tax Display</h3>
            <p className="text-xs text-muted-foreground">Set how taxes are displayed on receipts and invoices.</p>
          </li>

          <li>
            <h3 className="text-sm font-medium">5. Save Configuration</h3>
            <p className="text-xs text-muted-foreground">Apply the tax settings to the system.</p>
          </li>
        </ol>

        <h2 className="text-lg font-medium mt-6 mb-3">Managing User Permissions</h2>

        <ol className="space-y-3 mb-6">
          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">1. Define Roles</h3>
            <p className="text-xs text-muted-foreground">
              Create roles like Manager, Cashier, Tailor, and Sales Associate.
            </p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">2. Set Permissions</h3>
            <p className="text-xs text-muted-foreground">
              Assign specific permissions to each role (view, create, edit, delete).
            </p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">3. Assign Roles to Users</h3>
            <p className="text-xs text-muted-foreground">Link each user account to the appropriate role.</p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">4. Configure Special Access</h3>
            <p className="text-xs text-muted-foreground">Set up any individual exceptions to role-based permissions.</p>
          </li>

          <li>
            <h3 className="text-sm font-medium">5. Review and Test</h3>
            <p className="text-xs text-muted-foreground">Verify that permissions work as expected for each user.</p>
          </li>
        </ol>

        <h2 className="text-lg font-medium mt-6 mb-3">Real-World Example</h2>

        <div className="border rounded p-4 mb-6 text-xs italic bg-gray-50">
          <p>
            "When Elegant Tailors opened their second location, the owner needed to update the system settings. First,
            he added the new store location in Settings {">"} Business Configuration, including address and contact details.
            Then, he created user accounts for the new staff members, assigning appropriate roles: store manager with
            full access, sales associates with sales and customer management permissions, and tailors with production
            and inventory access. He configured the receipt template to include both store locations and updated the tax
            settings to ensure compliance with local regulations. Finally, he set up inventory transfer rules between
            locations and configured the system to generate daily sales reports for each store separately and a
            consolidated weekly report for management review."
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 my-6 text-xs">
          <h3 className="text-sm font-medium text-blue-700 mb-1">Pro Tips</h3>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Document all system settings for reference and training purposes</li>
            <li>• Review user permissions quarterly to ensure proper access control</li>
            <li>• Test receipt and invoice templates with sample data before finalizing</li>
            <li>• Create a backup of settings before making significant changes</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
