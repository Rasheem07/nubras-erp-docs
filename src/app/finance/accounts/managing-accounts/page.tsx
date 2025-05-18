import { DocsPagination } from "@/components/docs-pagination"

export default function ManagingAccountsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Managing Accounts</h1>
        <p className="text-lg text-muted-foreground mt-2">Creating, editing, and maintaining your accounts</p>
      </div>

      <div className="space-y-4">
        <p>
          Properly managing your accounts is essential for accurate financial record-keeping. The Finance Module
          provides tools to create, edit, and maintain your accounts, ensuring your financial data is organized and
          up-to-date.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Creating New Accounts</h2>

        <p className="mt-4">
          As your tailoring business grows, you may need to create new accounts to track specific types of income,
          expenses, assets, or liabilities.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Steps to Create a New Account</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Accounts</li>
          <li>Click the "Add Account" button</li>
          <li>Enter the account number (following your numbering system)</li>
          <li>Enter the account name</li>
          <li>Select the account type (Asset, Liability, Equity, Revenue, Expense)</li>
          <li>Select the account subtype (e.g., Current Asset, Fixed Asset)</li>
          <li>Select a parent account if this is a sub-account</li>
          <li>Enter an opening balance if applicable</li>
          <li>Add a description to clarify the account's purpose</li>
          <li>Click "Create Account"</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">When to Create New Accounts</h3>
          <ul className="list-disc list-inside space-y-2 mt-2 text-sm">
            <li>When you start offering a new service (e.g., wedding dress alterations)</li>
            <li>When you want to track a specific type of expense separately (e.g., premium fabrics)</li>
            <li>When you open a new bank account</li>
            <li>When you take on a new type of liability (e.g., equipment loan)</li>
            <li>When you need more detailed financial information for decision-making</li>
          </ul>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Editing Accounts</h2>

        <p className="mt-4">
          You may need to edit account details to correct errors, update descriptions, or change the account structure.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Steps to Edit an Account</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance {">"} Accounts</li>
          <li>Find the account you want to edit</li>
          <li>Click the "Edit" button (pencil icon)</li>
          <li>Update the account details as needed</li>
          <li>Click "Save Changes"</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Important Note on Editing Accounts</h3>
          <p className="text-sm mt-2">
            Be cautious when editing accounts that already have transactions. Changing the account type or number can
            affect your financial reports. It's generally better to create a new account and transfer the balance rather
            than changing fundamental properties of an active account.
          </p>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Deactivating Accounts</h2>

        <p className="mt-4">
          Rather than deleting accounts (which could affect historical data), you can deactivate accounts that are no
          longer needed.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Steps to Deactivate an Account</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance {">"} Accounts</li>
          <li>Find the account you want to deactivate</li>
          <li>Click the "More Options" button (three dots)</li>
          <li>Select "Deactivate Account"</li>
          <li>Confirm the deactivation</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Benefits of Deactivating vs. Deleting</h3>
          <ul className="list-disc list-inside space-y-2 mt-2 text-sm">
            <li>Preserves historical financial data</li>
            <li>Maintains the integrity of past financial reports</li>
            <li>Allows you to reactivate the account if needed in the future</li>
            <li>Keeps your active account list clean and relevant</li>
          </ul>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Reconciling Accounts</h2>

        <p className="mt-4">
          Account reconciliation is the process of comparing your internal records with external statements (like bank
          statements) to ensure accuracy.
        </p>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Steps to Reconcile an Account</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance {">"} Accounts {">"} Reconciliation</li>
          <li>Select the account to reconcile</li>
          <li>Enter the statement date and ending balance</li>
          <li>Match transactions with your statement</li>
          <li>Identify and resolve any discrepancies</li>
          <li>Click "Complete Reconciliation"</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h3 className="font-medium">Real-World Example</h3>
          <p className="text-sm mt-2 italic">
            "Noor runs a tailoring shop and recently expanded to offer embroidery services. To track this new revenue
            stream separately, she created a new account: 4150 Embroidery Services. She made it a sub-account under 4100
            Custom Tailoring. She also created a new expense account: 5115 Embroidery Supplies, as a sub-account under
            5110 Materials. By creating these specific accounts, she can easily track how profitable her new embroidery
            service is. After three months, she ran a profit and loss report filtered for just these accounts and
            discovered that embroidery was generating a 40% profit margin, higher than her general tailoring services.
            This insight led her to expand her embroidery offerings and promote them more heavily."
          </p>
        </div>
      </div>

      <DocsPagination
        prev={{
          title: "Account Structure",
          href: "/finance/accounts/account-structure",
        }}
        next={{
          title: "Banking",
          href: "/finance/banking",
        }}
      />
    </div>
  )
}
