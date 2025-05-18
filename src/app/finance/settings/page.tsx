import { DocsPagination } from "@/components/docs-pagination"

export default function FinancialSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Financial Settings</h1>
        <p className="text-lg text-muted-foreground mt-2">Configuring your finance module for optimal performance</p>
      </div>

      <div className="space-y-4">
        <p>
          Properly configuring your financial settings is essential for accurate accounting, efficient workflows, and
          meaningful reporting. The Finance Module offers extensive customization options to align with your tailoring
          business's specific needs.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          General Financial Settings
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Company Information</h3>

        <p className="mt-2">Set up your basic business information:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Settings &gt; Company Information</li>
          <li>Enter your legal business name</li>
          <li>Add your business address</li>
          <li>Enter contact information (phone, email)</li>
          <li>Upload your business logo</li>
          <li>Enter your tax registration numbers</li>
          <li>Set your business entity type (sole proprietorship, LLC, etc.)</li>
          <li>Click "Save Information"</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Why This Matters</h3>
          <p className="text-base mt-2">
            This information appears on invoices, financial reports, and tax documents. Keeping it accurate and complete
            ensures professional communication with customers and compliance with regulatory requirements.
          </p>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Fiscal Year Settings</h3>

        <p className="mt-2">Configure your fiscal year and accounting periods:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Settings &gt; Fiscal Year</li>
          <li>Set your fiscal year start date</li>
          <li>Choose your accounting period type (monthly, quarterly)</li>
          <li>Set up period names if different from default months</li>
          <li>Configure year-end closing preferences</li>
          <li>Click "Save Fiscal Settings"</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Choosing Your Fiscal Year</h3>
          <p className="text-base mt-2">
            Many tailoring businesses align their fiscal year with the calendar year (January-December), but you might
            choose a different period based on your business cycle. For example, if your busy season is wedding season,
            you might set your fiscal year to start after this period to better track annual performance.
          </p>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Currency Settings</h3>

        <p className="mt-2">Set up your currency preferences:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Settings &gt; Currency</li>
          <li>Set your base currency (e.g., AED)</li>
          <li>Configure additional currencies if you operate internationally</li>
          <li>Set exchange rate update preferences</li>
          <li>Configure currency display formats</li>
          <li>Click "Save Currency Settings"</li>
        </ol>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Chart of Accounts Settings
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Account Numbering</h3>

        <p className="mt-2">Configure your account numbering system:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Settings &gt; Chart of Accounts</li>
          <li>Set your account number format (length, segments)</li>
          <li>Configure number ranges for each account type</li>
          <li>Set up automatic numbering for new accounts</li>
          <li>Click "Save Numbering Settings"</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Recommended Account Number Structure</h3>
          <ul className="list-disc list-inside space-y-1 mt-2 text-base">
            <li>1000-1999: Assets</li>
            <li>2000-2999: Liabilities</li>
            <li>3000-3999: Equity</li>
            <li>4000-4999: Revenue</li>
            <li>5000-5999: Cost of Goods Sold</li>
            <li>6000-6999: Expenses</li>
          </ul>
          <p className="text-xs mt-2">
            <strong>Tip:</strong> Leave gaps between account numbers to allow for future additions without disrupting
            your numbering system.
          </p>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Default Accounts</h3>

        <p className="mt-2">Set up default accounts for various transactions:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Settings &gt; Default Accounts</li>
          <li>Set default revenue account for sales</li>
          <li>Set default accounts for different expense types</li>
          <li>Configure default bank accounts for payments and deposits</li>
          <li>Set default tax liability accounts</li>
          <li>Click "Save Default Accounts"</li>
        </ol>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Invoice and Payment Settings
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Invoice Numbering</h3>

        <p className="mt-2">Configure your invoice numbering system:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Settings &gt; Invoicing</li>
          <li>Set your invoice number format (prefix, digits, etc.)</li>
          <li>Configure starting number for invoices</li>
          <li>Set up separate numbering for different invoice types if needed</li>
          <li>Click "Save Numbering Settings"</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Invoice Number Format Examples</h3>
          <ul className="list-disc list-inside space-y-1 mt-2 text-base">
            <li>INV-00001 (Basic format)</li>
            <li>INV-2023-00001 (Including year)</li>
            <li>INV-CUS-00001 (For custom tailoring)</li>
            <li>INV-ALT-00001 (For alterations)</li>
          </ul>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Invoice Templates</h3>

        <p className="mt-2">Customize your invoice appearance:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Settings &gt; Invoice Templates</li>
          <li>Select a template to customize</li>
          <li>Upload your logo and set its position</li>
          <li>Choose colors and fonts</li>
          <li>Customize header and footer content</li>
          <li>Add standard terms and conditions</li>
          <li>Configure what information appears on invoices</li>
          <li>Preview the template</li>
          <li>Click "Save Template"</li>
        </ol>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Payment Terms</h3>

        <p className="mt-2">Set up standard payment terms:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Settings &gt; Payment Terms</li>
          <li>Click "Add Payment Term"</li>
          <li>Enter a name (e.g., "Net 30", "Due on Receipt")</li>
          <li>Set the number of days until payment is due</li>
          <li>Configure any early payment discounts</li>
          <li>Set this as the default term if desired</li>
          <li>Click "Save Payment Term"</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Common Payment Terms for Tailoring</h3>
          <ul className="list-disc list-inside space-y-1 mt-2 text-base">
            <li>Due on Receipt (for alterations and smaller jobs)</li>
            <li>50% Deposit, 50% on Completion (for custom garments)</li>
            <li>Net 15 (for regular customers)</li>
            <li>Net 30 (for business clients)</li>
          </ul>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          User Permissions and Security
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">User Roles</h3>

        <p className="mt-2">Configure access levels for different staff members:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Settings &gt; User Roles</li>
          <li>Create roles for different positions (owner, manager, bookkeeper, etc.)</li>
          <li>Set permissions for each role (view, create, edit, delete)</li>
          <li>Configure access to sensitive financial information</li>
          <li>Click "Save Roles"</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Recommended Role Setup</h3>
          <ul className="list-disc list-inside space-y-1 mt-2 text-base">
            <li>
              <span className="font-medium">Owner/Admin:</span> Full access to all financial features
            </li>
            <li>
              <span className="font-medium">Manager:</span> Access to daily operations, limited access to financial
              reports
            </li>
            <li>
              <span className="font-medium">Sales Staff:</span> Create invoices and record payments only
            </li>
            <li>
              <span className="font-medium">Bookkeeper:</span> Access to accounting features but not business settings
            </li>
          </ul>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Audit Trail</h3>

        <p className="mt-2">Configure audit trail settings:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Settings &gt; Audit Trail</li>
          <li>Enable or disable audit trail tracking</li>
          <li>Set how long to retain audit records</li>
          <li>Configure which actions to track</li>
          <li>Set up audit report access</li>
          <li>Click "Save Audit Settings"</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Why Audit Trails Matter</h3>
          <p className="text-base mt-2">
            Audit trails record who made changes to financial data, when they made them, and what was changed. This
            creates accountability, helps troubleshoot errors, and provides documentation for tax or regulatory
            purposes.
          </p>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Integration Settings</h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Banking Integration</h3>

        <p className="mt-2">Set up connections to your bank accounts:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Settings &gt; Banking Integration</li>
          <li>Select your bank from the list of supported institutions</li>
          <li>Enter your banking credentials securely</li>
          <li>Select which accounts to connect</li>
          <li>Configure automatic transaction import settings</li>
          <li>Set up transaction matching rules</li>
          <li>Click "Connect Bank"</li>
        </ol>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Payment Gateway Integration</h3>

        <p className="mt-2">Configure online payment options for your customers:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Settings &gt; Payment Gateways</li>
          <li>Select payment providers to enable (credit cards, digital wallets, etc.)</li>
          <li>Enter your merchant account details</li>
          <li>Configure transaction fees</li>
          <li>Set up automatic payment reconciliation</li>
          <li>Test the payment process</li>
          <li>Click "Save Gateway Settings"</li>
        </ol>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Backup and Data Settings
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Automated Backups</h3>

        <p className="mt-2">Configure backup settings to protect your financial data:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Settings &gt; Backup</li>
          <li>Enable automated backups</li>
          <li>Set backup frequency (daily, weekly)</li>
          <li>Choose backup storage location (cloud, local)</li>
          <li>Configure retention policy (how many backups to keep)</li>
          <li>Set up backup notifications</li>
          <li>Click "Save Backup Settings"</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Backup Best Practices</h3>
          <ul className="list-disc list-inside space-y-1 mt-2 text-base">
            <li>Schedule daily backups for active businesses</li>
            <li>Store backups in multiple locations</li>
            <li>Test backup restoration periodically</li>
            <li>Create manual backups before major system changes</li>
            <li>Ensure backups are encrypted for security</li>
          </ul>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Data Import/Export</h3>

        <p className="mt-2">Configure data transfer settings:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Settings &gt; Data Transfer</li>
          <li>Configure import settings for external data</li>
          <li>Set up export formats for financial data</li>
          <li>Create data mapping templates</li>
          <li>Configure scheduled exports if needed</li>
          <li>Click "Save Data Transfer Settings"</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h3 className="font-medium">Real-World Example</h3>
          <p className="text-base mt-2 italic">
            "When Layla started her tailoring business, she spent time carefully setting up her Finance Module. She
            configured her fiscal year to start in September, after the busy summer wedding season, giving her a clearer
            picture of her annual business cycle. She created custom invoice templates with her logo and brand colors,
            and set up different numbering sequences for custom garments (INV-CUS) and alterations (INV-ALT). For her
            chart of accounts, she used the recommended numbering system but added specific accounts for different
            fabric types and service categories. She connected her business bank account for automatic transaction
            importing and set up daily backups to secure her financial data. These initial setup steps took a few hours,
            but saved her countless hours of work later and provided much clearer financial insights. When she hired her
            first employee, she created a limited user role that allowed them to create invoices but not view sensitive
            financial reports. As her business grew, she adjusted her settings to match her evolving needs, but the
            solid foundation she created at the beginning continued to serve her well."
          </p>
        </div>
      </div>

      <DocsPagination
        prev={{
          title: "Tax Management",
          href: "/finance/tax-management",
        }}
        next={{
          title: "Finance Dashboard",
          href: "/finance/dashboard",
        }}
      />
    </div>
  )
}
