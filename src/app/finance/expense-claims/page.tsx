import { DocsPagination } from "@/components/docs-pagination"

export default function ExpenseClaimsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Expense Claims</h1>
        <p className="text-lg text-muted-foreground mt-2">Managing employee and owner expense reimbursements</p>
      </div>

      <div className="space-y-4">
        <p>
          Expense claims allow you to track and reimburse business expenses paid by employees or owners using personal
          funds. Properly managing expense claims ensures accurate accounting and timely reimbursements.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Understanding Expense Claims
        </h2>

        <p className="mt-2">
          In a tailoring business, various situations may require employees or owners to pay for business expenses from
          their personal funds:
        </p>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>Purchasing fabric or notions when a supplier doesn't accept company credit</li>
          <li>Travel expenses for client meetings or fabric sourcing</li>
          <li>Emergency equipment repairs or supplies</li>
          <li>Business meals with clients or suppliers</li>
          <li>Training or educational materials</li>
        </ul>

        <p className="mt-4">
          The expense claims feature allows you to track these expenses, ensure they're properly categorized, and
          reimburse the individuals who incurred them.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Creating an Expense Claim
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Step-by-Step Process</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Expense Claims</li>
          <li>Click "Create New Claim"</li>
          <li>Select the employee or owner who incurred the expense</li>
          <li>Enter the claim date</li>
          <li>
            Add expense items with the following details:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Date of expense</li>
              <li>Expense category (e.g., Fabric, Travel, Equipment)</li>
              <li>Description</li>
              <li>Amount</li>
              <li>Tax amount (if applicable)</li>
              <li>Project or client (if expense is billable)</li>
            </ul>
          </li>
          <li>Upload receipts or supporting documents</li>
          <li>Add notes if necessary</li>
          <li>Submit the claim for approval</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Receipt Requirements</h3>
          <p className="text-sm mt-2">
            For proper record-keeping and tax compliance, ensure all expense claims include:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2 text-xs">
            <li>Original receipt or invoice</li>
            <li>Clear indication of what was purchased</li>
            <li>Date of purchase</li>
            <li>Vendor name</li>
            <li>Amount paid</li>
            <li>Payment method</li>
          </ul>
          <p className="text-xs mt-2">
            <strong>Tip:</strong> Use the mobile app to capture receipt images immediately after purchase to avoid
            losing them.
          </p>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Approving Expense Claims
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Approval Process</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Expense Claims &gt; Pending Approval</li>
          <li>Select the claim to review</li>
          <li>Verify all expense items and supporting documents</li>
          <li>Approve, reject, or request changes to the claim</li>
          <li>Add approval notes if necessary</li>
          <li>If approved, the claim moves to the "Ready for Payment" status</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Approval Policies</h3>
          <p className="text-sm mt-2">Consider establishing clear expense claim policies:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 text-xs">
            <li>Maximum amounts for different expense types</li>
            <li>Required approvals for different expense levels</li>
            <li>Timeframe for submitting claims (e.g., within 30 days of expense)</li>
            <li>Documentation requirements</li>
          </ul>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Reimbursing Expense Claims
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Payment Process</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Expense Claims &gt; Ready for Payment</li>
          <li>Select the claims to reimburse</li>
          <li>Click "Process Reimbursement"</li>
          <li>Select the payment method (bank transfer, cash, etc.)</li>
          <li>Enter payment details</li>
          <li>Complete the payment</li>
          <li>The system will automatically create the appropriate accounting entries</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Batch Reimbursements</h3>
          <p className="text-sm mt-2">
            For efficiency, you can process multiple expense claims in a single batch payment:
          </p>
          <ol className="list-decimal list-inside space-y-1 mt-2 text-xs">
            <li>Go to Finance &gt; Expense Claims &gt; Ready for Payment</li>
            <li>Select multiple claims for the same employee</li>
            <li>Click "Batch Reimbursement"</li>
            <li>Process the payment as a single transaction</li>
          </ol>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Accounting for Expense Claims
        </h2>

        <p className="mt-2">
          When an expense claim is processed, the system automatically creates the appropriate accounting entries:
        </p>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Journal Entries</h3>
          <p className="text-sm mt-2">For each expense claim, the following entries are created:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 text-xs">
            <li>Debit to the appropriate expense accounts based on expense categories</li>
            <li>Credit to Accounts Payable (or directly to Cash/Bank if paid immediately)</li>
            <li>When paid, debit to Accounts Payable and credit to Cash/Bank</li>
          </ul>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Tax Considerations</h3>

        <p className="mt-2">Properly categorizing expenses ensures correct tax treatment:</p>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>The system tracks VAT/sales tax on eligible expenses for tax reclaims</li>
          <li>Certain expenses may have specific tax deductibility rules</li>
          <li>Meals and entertainment often have special tax treatment</li>
          <li>Travel expenses may require additional documentation</li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Expense Claim Reports</h2>

        <p className="mt-2">Several reports help you analyze and manage expense claims:</p>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <span className="font-medium">Expense Claim Summary:</span> Overview of all claims by status, employee, or
            date range
          </li>
          <li>
            <span className="font-medium">Expense Category Analysis:</span> Breakdown of expenses by category to
            identify spending patterns
          </li>
          <li>
            <span className="font-medium">Reimbursement History:</span> Record of all reimbursements made to employees
          </li>
          <li>
            <span className="font-medium">Outstanding Claims Report:</span> Claims that are pending approval or payment
          </li>
          <li>
            <span className="font-medium">Billable Expenses Report:</span> Expenses that can be recharged to clients
          </li>
        </ul>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Best Practices for Expense Claims
        </h2>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <span className="font-medium">Establish Clear Policies:</span> Create and communicate clear guidelines for
            what expenses are reimbursable and documentation requirements.
          </li>
          <li>
            <span className="font-medium">Prompt Submission:</span> Encourage employees to submit claims promptly to
            ensure accurate accounting and timely reimbursement.
          </li>
          <li>
            <span className="font-medium">Regular Processing:</span> Set a schedule for approving and paying expense
            claims to maintain employee satisfaction.
          </li>
          <li>
            <span className="font-medium">Digital Receipts:</span> Use the mobile app to capture and store digital
            copies of all receipts.
          </li>
          <li>
            <span className="font-medium">Audit Regularly:</span> Periodically review expense claims to ensure
            compliance with policies and identify potential issues.
          </li>
          <li>
            <span className="font-medium">Categorize Correctly:</span> Ensure expenses are assigned to the right
            categories for accurate financial reporting and tax compliance.
          </li>
        </ul>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h3 className="font-medium">Real-World Example</h3>
          <p className="text-sm mt-2 italic">
            "Aisha runs a tailoring business with three employees. One of her tailors, Khalid, attended a specialized
            embroidery workshop in Dubai, paying for the registration, travel, and accommodation with his personal
            credit card. Upon returning, Khalid used the mobile app to create an expense claim, taking photos of all
            receipts and categorizing each expense appropriately. He assigned the expenses to the 'Professional
            Development' category and added notes about the skills he learned. Aisha received a notification, reviewed
            the claim, and approved it within the system. The finance module automatically created the journal entries,
            debiting the Training & Development expense account and crediting Accounts Payable. During the next payment
            run, Khalid's reimbursement was processed along with other vendor payments, and he received the funds via
            bank transfer. The system recorded the payment and updated the financial statements accordingly. Later, when
            preparing for tax filing, Aisha ran an Expense Category Analysis report to ensure all professional
            development expenses were properly documented for potential tax deductions."
          </p>
        </div>
      </div>

      <DocsPagination
        prev={{
          title: "Expenses",
          href: "/finance/transactions/expenses",
        }}
        next={{
          title: "Bank Statement Imports",
          href: "/finance/banking/statement-imports",
        }}
      />
    </div>
  )
}
