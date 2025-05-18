import { DocsPagination } from "@/components/docs-pagination"

export default function TaxManagementPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Tax Management</h1>
        <p className="text-lg text-muted-foreground mt-2">Simplifying tax compliance for your tailoring business</p>
      </div>

      <div className="space-y-4">
        <p>
          Effective tax management ensures your tailoring business remains compliant with tax regulations while
          maximizing legitimate deductions. The Finance Module provides comprehensive tools to track, calculate, report,
          and pay various taxes applicable to your business.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Types of Taxes for Tailoring Businesses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Value Added Tax (VAT) / Sales Tax</h3>
            <p className="text-sm mt-2">
              Consumption tax applied to the sale of goods and services. For tailoring businesses, this typically
              applies to finished garments, alterations, and fabric sales.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Income Tax</h3>
            <p className="text-sm mt-2">
              Tax on business profits. The structure depends on your business entity type (sole proprietorship,
              partnership, LLC, corporation).
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Payroll Taxes</h3>
            <p className="text-sm mt-2">
              Taxes related to employee compensation, including social security, health insurance, and income tax
              withholding.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Import Duties</h3>
            <p className="text-sm mt-2">
              Taxes on imported fabrics, equipment, or other materials. Particularly relevant for tailoring businesses
              that source materials internationally.
            </p>
          </div>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          VAT/Sales Tax Management
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Setting Up VAT/Sales Tax</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Settings &gt; Tax Configuration</li>
          <li>Click "Add Tax Rate"</li>
          <li>Enter the tax name (e.g., "Standard VAT")</li>
          <li>Enter the tax rate percentage</li>
          <li>Select the tax authority</li>
          <li>Configure tax reporting period (monthly, quarterly)</li>
          <li>Set up tax account mappings</li>
          <li>Save the tax configuration</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Multiple Tax Rates</h3>
          <p className="text-sm mt-2">
            Many jurisdictions have different tax rates for different types of goods and services. For tailoring
            businesses, you might need to configure:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2 text-xs">
            <li>Standard rate for most goods and services</li>
            <li>Reduced rate for certain essential items</li>
            <li>Zero rate for export sales</li>
            <li>Exempt categories for specific services</li>
          </ul>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Recording VAT/Sales Tax</h3>

        <p className="mt-2">The system automatically calculates and records tax on transactions:</p>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <span className="font-medium">Sales Invoices:</span> Select the appropriate tax rate when creating invoices
          </li>
          <li>
            <span className="font-medium">Purchase Invoices:</span> Record input tax on business purchases
          </li>
          <li>
            <span className="font-medium">Cash Sales:</span> Tax is calculated automatically based on the product or
            service tax category
          </li>
        </ul>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Tax Inclusive vs. Tax Exclusive Pricing</h3>
          <p className="text-sm mt-2">Configure whether your prices include or exclude tax:</p>
          <ol className="list-decimal list-inside space-y-1 mt-2 text-xs">
            <li>Go to Finance &gt; Settings &gt; Tax Display</li>
            <li>Select "Tax Inclusive" or "Tax Exclusive" pricing</li>
            <li>Configure display settings for different document types</li>
            <li>Save your preferences</li>
          </ol>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">VAT/Sales Tax Reports</h3>

        <p className="mt-2">Generate reports for tax filing and compliance:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Taxes &gt; VAT Reports</li>
          <li>Select the tax authority</li>
          <li>Choose the reporting period</li>
          <li>Generate the report</li>
          <li>Review the calculated tax liability</li>
          <li>Export the report for filing or record-keeping</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Available VAT/Sales Tax Reports</h3>
          <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
            <li>VAT Return Summary</li>
            <li>Input Tax Detail Report</li>
            <li>Output Tax Detail Report</li>
            <li>VAT Audit Report</li>
            <li>Zero-Rated and Exempt Sales Report</li>
            <li>Late Invoice Tax Adjustment Report</li>
          </ul>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Filing and Paying VAT/Sales Tax</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Generate the VAT/Sales Tax report for the filing period</li>
          <li>Review and verify the calculated amounts</li>
          <li>Go to Finance &gt; Taxes &gt; Tax Payments</li>
          <li>Click "Record Tax Payment"</li>
          <li>Enter the payment details (date, amount, payment method)</li>
          <li>Upload any filing confirmation documents</li>
          <li>Save the payment record</li>
        </ol>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Income Tax Management</h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Tracking Taxable Income</h3>

        <p className="mt-2">The system helps you track all revenue and expenses relevant to income tax:</p>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>All sales are recorded with appropriate revenue categorization</li>
          <li>Expenses are categorized according to tax deductibility</li>
          <li>Capital assets are tracked with depreciation schedules</li>
          <li>Business vs. personal expenses are clearly separated</li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Income Tax Reports</h3>

        <p className="mt-2">Generate reports to assist with income tax preparation:</p>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <span className="font-medium">Profit & Loss Statement:</span> Shows taxable income for the period
          </li>
          <li>
            <span className="font-medium">Tax Deduction Summary:</span> Lists all tax-deductible expenses by category
          </li>
          <li>
            <span className="font-medium">Depreciation Schedule:</span> Tracks depreciation of capital assets
          </li>
          <li>
            <span className="font-medium">Tax Provision Report:</span> Estimates tax liability based on current
            financial data
          </li>
        </ul>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Tax-Specific Categories for Tailoring Businesses</h3>
          <p className="text-sm mt-2">Configure expense categories that align with tax deduction categories:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 text-xs">
            <li>Fabric and materials</li>
            <li>Sewing equipment and maintenance</li>
            <li>Pattern design software</li>
            <li>Workshop rent and utilities</li>
            <li>Professional development and training</li>
            <li>Marketing and advertising</li>
            <li>Professional services (accounting, legal)</li>
          </ul>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Payroll Tax Management</h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Setting Up Payroll Taxes</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Settings &gt; Payroll Taxes</li>
          <li>
            Configure each required tax type:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Income tax withholding</li>
              <li>Social security contributions</li>
              <li>Health insurance</li>
              <li>Other mandatory deductions</li>
            </ul>
          </li>
          <li>Set up tax rates and calculation methods</li>
          <li>Configure employer contributions</li>
          <li>Set up tax payment schedules</li>
          <li>Save the payroll tax configuration</li>
        </ol>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Processing Payroll Taxes</h3>

        <p className="mt-2">The system automatically calculates payroll taxes during payroll processing:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Payroll &gt; Process Payroll</li>
          <li>Select the pay period</li>
          <li>Review employee hours and earnings</li>
          <li>The system calculates all tax withholdings automatically</li>
          <li>Review and approve the calculations</li>
          <li>Process the payroll</li>
          <li>Tax liabilities are automatically recorded in the appropriate accounts</li>
        </ol>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Payroll Tax Reports and Filings</h3>

        <p className="mt-2">Generate reports for payroll tax compliance:</p>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <span className="font-medium">Payroll Tax Summary:</span> Overview of all payroll taxes for the period
          </li>
          <li>
            <span className="font-medium">Employee Tax Withholding Report:</span> Detailed breakdown by employee
          </li>
          <li>
            <span className="font-medium">Employer Contribution Report:</span> Summary of employer-paid taxes
          </li>
          <li>
            <span className="font-medium">Tax Filing Forms:</span> System-generated forms ready for submission to tax
            authorities
          </li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Import Duties and Customs
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Tracking Import Duties</h3>

        <p className="mt-2">For tailoring businesses that import fabrics or other materials:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Purchases &gt; Record Import</li>
          <li>Enter supplier and product details</li>
          <li>Record the import value</li>
          <li>Add import duty and customs fees</li>
          <li>Upload customs documentation</li>
          <li>Save the import record</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Import Cost Calculation</h3>
          <p className="text-sm mt-2">The system helps calculate the true cost of imported materials by including:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 text-xs">
            <li>Base material cost</li>
            <li>Import duties and tariffs</li>
            <li>Customs processing fees</li>
            <li>Freight and shipping costs</li>
            <li>Currency conversion costs</li>
          </ul>
          <p className="text-xs mt-2">
            <strong>Tip:</strong> This comprehensive cost calculation ensures accurate pricing and profitability
            analysis for products made with imported materials.
          </p>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Tax Calendar and Reminders
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Setting Up Tax Reminders</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Taxes &gt; Tax Calendar</li>
          <li>View upcoming tax deadlines</li>
          <li>Configure reminder notifications</li>
          <li>Set advance notice periods (e.g., 2 weeks before deadline)</li>
          <li>Specify who should receive reminders</li>
          <li>Save reminder settings</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Tax Calendar Integration</h3>
          <p className="text-sm mt-2">The tax calendar can be integrated with:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 text-xs">
            <li>Email notifications</li>
            <li>SMS alerts</li>
            <li>Mobile app notifications</li>
            <li>External calendar applications (Google Calendar, Outlook)</li>
          </ul>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Tax Audit Preparation</h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Audit-Ready Records</h3>

        <p className="mt-2">The system helps you maintain audit-ready tax records:</p>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <span className="font-medium">Document Attachment:</span> Attach digital copies of receipts, invoices, and
            tax documents to transactions
          </li>
          <li>
            <span className="font-medium">Audit Trail:</span> Track all changes to financial records with user, date,
            and time stamps
          </li>
          <li>
            <span className="font-medium">Tax Calculation Documentation:</span> System maintains detailed records of how
            each tax amount was calculated
          </li>
          <li>
            <span className="font-medium">Historical Tax Reports:</span> Access to all previously filed tax reports and
            returns
          </li>
        </ul>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Tax Audit Reports</h3>

        <p className="mt-2">Generate comprehensive reports for tax audits:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Taxes &gt; Audit Reports</li>
          <li>Select the tax type and period</li>
          <li>Generate detailed transaction reports</li>
          <li>Export reports in audit-friendly formats</li>
          <li>Create document packages with supporting evidence</li>
        </ol>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Tax Planning and Optimization
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Tax Planning Tools</h3>

        <p className="mt-2">Use the system's planning tools to optimize your tax position:</p>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <span className="font-medium">Tax Projection Reports:</span> Estimate future tax liabilities based on
            projected income and expenses
          </li>
          <li>
            <span className="font-medium">What-If Analysis:</span> Model different business scenarios and their tax
            implications
          </li>
          <li>
            <span className="font-medium">Deduction Optimizer:</span> Identify potential tax deductions you may be
            missing
          </li>
          <li>
            <span className="font-medium">Year-End Tax Planner:</span> Suggestions for year-end actions to optimize tax
            position
          </li>
        </ul>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Common Tax Planning Strategies for Tailoring Businesses</h3>
          <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
            <li>Timing large equipment purchases to maximize depreciation benefits</li>
            <li>Managing inventory purchases and year-end inventory levels</li>
            <li>Structuring customer deposits and advance payments</li>
            <li>Planning owner compensation and dividends</li>
            <li>Retirement plan contributions</li>
          </ul>
        </div>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h3 className="font-medium">Real-World Example</h3>
          <p className="text-sm mt-2 italic">
            "Fatima runs a tailoring business with five employees, specializing in custom formal wear. She uses the Tax
            Management features to handle her VAT compliance, which previously took her nearly two days each quarter.
            Now, the system automatically tracks input and output VAT on all transactions. She's created tax categories
            for different fabric types, as some luxury fabrics have different VAT rates than standard materials. At the
            end of each quarter, she generates a VAT Return Summary report, reviews it for accuracy, and submits it to
            the tax authority through the integrated filing system. The system also helps her track income tax
            deductions throughout the year. When she purchased new industrial sewing machines, she recorded them as
            capital assets, and the system automatically calculates depreciation according to tax rules. Before
            year-end, she uses the Tax Planner to identify opportunities—like purchasing additional fabric inventory or
            making business contributions to retirement plans—that could reduce her tax liability. When a tax audit
            occurred last year, she was able to quickly generate detailed reports showing all transactions with attached
            digital receipts, making the audit process smooth and stress-free."
          </p>
        </div>
      </div>

      <DocsPagination
        prev={{
          title: "Bank Statement Imports",
          href: "/finance/banking/statement-imports",
        }}
        next={{
          title: "Budgeting",
          href: "/finance/budgeting",
        }}
      />
    </div>
  )
}
