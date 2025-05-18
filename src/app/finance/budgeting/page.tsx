import { DocsPagination } from "@/components/docs-pagination"

export default function BudgetingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Budgeting</h1>
        <p className="text-lg text-muted-foreground mt-2">Planning and managing your financial resources</p>
      </div>

      <div className="space-y-4">
        <p>
          Budgeting is the process of creating a plan for how your tailoring business will earn and spend money over a
          specific period. A well-designed budget helps you allocate resources effectively, plan for future growth, and
          ensure financial stability.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Benefits of Budgeting</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Financial Control</h3>
            <p className="text-sm mt-2">
              A budget gives you greater control over your finances by helping you track and manage income and expenses.
              This prevents overspending and ensures you have funds for essential business needs.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Goal Setting</h3>
            <p className="text-sm mt-2">
              Budgeting helps you set concrete financial goals for your tailoring business, such as increasing revenue
              by a certain percentage or reducing specific costs.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Decision Making</h3>
            <p className="text-sm mt-2">
              With a budget in place, you can make more informed decisions about investments, hiring, expansion, or
              other business opportunities based on your financial capacity.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Performance Measurement</h3>
            <p className="text-sm mt-2">
              Comparing actual results to your budget helps you evaluate your business performance and identify areas
              that need attention or improvement.
            </p>
          </div>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Creating a Budget</h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Steps to Create a Budget</h3>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Budgeting</li>
          <li>Click "Create New Budget"</li>
          <li>Enter a name for your budget (e.g., "2023 Annual Budget" or "Q3 Operating Budget")</li>
          <li>Select the budget period (monthly, quarterly, annual)</li>
          <li>Choose the start and end dates</li>
          <li>Select accounts to include in the budget</li>
          <li>Enter projected amounts for each account and period</li>
          <li>Add notes or assumptions for key figures</li>
          <li>Review the budget totals and make adjustments as needed</li>
          <li>Click "Save Budget"</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Budget Creation Methods</h3>
          <p className="text-sm mt-2">
            The Finance Module offers several methods to help you create realistic budgets:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2 text-xs">
            <li>
              <span className="font-medium">Start from scratch:</span> Enter all budget figures manually
            </li>
            <li>
              <span className="font-medium">Based on previous year:</span> Use last year's actual figures as a starting
              point
            </li>
            <li>
              <span className="font-medium">Percentage increase/decrease:</span> Apply percentage changes to previous
              figures
            </li>
            <li>
              <span className="font-medium">Seasonal patterns:</span> Apply historical seasonal patterns to annual
              totals
            </li>
            <li>
              <span className="font-medium">Import from spreadsheet:</span> Upload budget data from Excel or CSV files
            </li>
          </ul>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Key Budget Components for Tailoring Businesses
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Revenue Budget</h3>

        <p className="mt-2">Plan your expected income from various sources:</p>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
            <li>Custom tailoring services by category (formal wear, casual wear, etc.)</li>
            <li>Alterations and repairs</li>
            <li>Fabric and accessory sales</li>
            <li>Special services (rush orders, delivery, etc.)</li>
            <li>Seasonal promotions or events</li>
          </ul>
          <p className="text-xs mt-2">
            <strong>Tip:</strong> Consider factors like seasonality (wedding season, holidays), marketing campaigns, and
            pricing changes when projecting revenue.
          </p>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Direct Costs Budget</h3>

        <p className="mt-2">Budget for the direct costs associated with your services:</p>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
            <li>Fabric purchases by type</li>
            <li>Notions and accessories (buttons, zippers, thread, etc.)</li>
            <li>Direct labor costs (tailors, seamstresses)</li>
            <li>Subcontractor fees (if you outsource certain work)</li>
            <li>Shipping and delivery costs</li>
          </ul>
          <p className="text-xs mt-2">
            <strong>Tip:</strong> Link your direct costs to your revenue projections. If you expect a 20% increase in
            wedding attire orders, your premium fabric budget should reflect this increase.
          </p>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Operating Expenses Budget</h3>

        <p className="mt-2">Plan for your ongoing business expenses:</p>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
            <li>Rent and utilities for your shop</li>
            <li>Equipment maintenance and repairs</li>
            <li>Administrative staff wages</li>
            <li>Marketing and advertising</li>
            <li>Insurance and professional services</li>
            <li>Office supplies and software subscriptions</li>
          </ul>
          <p className="text-xs mt-2">
            <strong>Tip:</strong> Review your historical expense patterns and consider any known changes, such as rent
            increases or new marketing initiatives.
          </p>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Capital Expenditure Budget</h3>

        <p className="mt-2">Plan for major purchases and investments:</p>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
            <li>New sewing or cutting equipment</li>
            <li>Shop renovations or expansions</li>
            <li>Computer systems or software</li>
            <li>Vehicles for delivery or transportation</li>
            <li>Long-term investments in the business</li>
          </ul>
          <p className="text-xs mt-2">
            <strong>Tip:</strong> For each capital expenditure, calculate the expected return on investment and impact
            on cash flow before including it in your budget.
          </p>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Monitoring Budget Performance
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Budget vs. Actual Reports</h3>

        <p className="mt-2">Regularly compare your actual financial results to your budget to track performance:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Budgeting &gt; Budget vs. Actual</li>
          <li>Select the budget you want to analyze</li>
          <li>Choose the time period (month, quarter, year-to-date)</li>
          <li>Review the variance between budgeted and actual figures</li>
          <li>Drill down into significant variances to understand the causes</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Understanding Variances</h3>
          <p className="text-sm mt-2">
            Variances are the differences between your budgeted amounts and actual results:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2 text-xs">
            <li>
              <span className="font-medium">Favorable variance:</span> Better than budgeted (higher revenue or lower
              expenses)
            </li>
            <li>
              <span className="font-medium">Unfavorable variance:</span> Worse than budgeted (lower revenue or higher
              expenses)
            </li>
            <li>
              <span className="font-medium">Variance percentage:</span> The difference as a percentage of the budgeted
              amount
            </li>
          </ul>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Budget Revisions</h3>

        <p className="mt-2">Sometimes you need to adjust your budget based on changing business conditions:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Budgeting</li>
          <li>Select the budget you want to revise</li>
          <li>Click "Revise Budget"</li>
          <li>Make the necessary adjustments</li>
          <li>Add notes explaining the reasons for the revision</li>
          <li>Click "Save Revised Budget"</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">When to Revise a Budget</h3>
          <ul className="list-disc list-inside space-y-1 mt-2 text-sm">
            <li>Significant changes in business conditions (e.g., economic downturn)</li>
            <li>Major unexpected expenses or revenue opportunities</li>
            <li>Changes in business strategy or focus</li>
            <li>Consistent variances that indicate the original budget was unrealistic</li>
          </ul>
          <p className="text-xs mt-2">
            <strong>Note:</strong> The system maintains a history of all budget versions, allowing you to track changes
            over time.
          </p>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Budgeting Best Practices
        </h2>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <span className="font-medium">Be Realistic:</span> Base your budget on accurate historical data and
            reasonable projections, not wishful thinking.
          </li>
          <li>
            <span className="font-medium">Include Contingencies:</span> Build in some flexibility for unexpected events
            or opportunities.
          </li>
          <li>
            <span className="font-medium">Involve Your Team:</span> Get input from staff who have direct knowledge of
            different areas of the business.
          </li>
          <li>
            <span className="font-medium">Review Regularly:</span> Check your budget performance at least monthly to
            catch issues early.
          </li>
          <li>
            <span className="font-medium">Use Zero-Based Budgeting:</span> Periodically start from zero and justify all
            expenses, rather than just adjusting last year's figures.
          </li>
          <li>
            <span className="font-medium">Align with Goals:</span> Ensure your budget supports your overall business
            objectives and growth plans.
          </li>
        </ul>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h3 className="font-medium">Real-World Example</h3>
          <p className="text-sm mt-2 italic">
            "Fatima runs a tailoring business with seven employees. At the beginning of each year, she creates an annual
            budget broken down by month. For her revenue budget, she analyzes the previous three years of sales data to
            identify seasonal patterns, then adjusts for planned marketing initiatives and price changes. For her
            materials budget, she links it directly to her revenue projections, knowing that fabric typically costs
            about 30% of the price of a custom garment. She budgets for a new industrial sewing machine in Q3, timing
            the purchase to coincide with the end of wedding season when cash flow is strongest. Each month, she reviews
            her Budget vs. Actual report with her shop manager. When they noticed that thread and notions expenses were
            consistently 15% over budget, they investigated and discovered wastage issues that could be addressed
            through better inventory management. By the end of the year, Fatima's actual results were within 5% of her
            budget, allowing her to confidently plan for expansion in the following year."
          </p>
        </div>
      </div>

      <DocsPagination
        prev={{
          title: "Custom Reports",
          href: "/finance/reports/custom-reports",
        }}
        next={{
          title: "Tax Management",
          href: "/finance/tax-management",
        }}
      />
    </div>
  )
}
