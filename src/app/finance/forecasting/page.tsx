import { DocsPagination } from "@/components/docs-pagination"

export default function FinancialForecastingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Financial Forecasting</h1>
        <p className="text-lg text-muted-foreground mt-2">Predicting your financial future with confidence</p>
      </div>

      <div className="space-y-4">
        <p>
          Financial forecasting helps you anticipate your tailoring business's future financial performance, enabling
          better planning, decision-making, and resource allocation. The Finance Module provides powerful forecasting
          tools specifically designed for tailoring businesses.
        </p>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Benefits of Financial Forecasting
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Strategic Planning</h3>
            <p className="text-base mt-2">
              Forecasts provide a financial roadmap for your business, helping you set realistic goals and develop
              strategies to achieve them. For tailoring businesses, this might include expansion plans, new service
              offerings, or equipment investments.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Cash Flow Management</h3>
            <p className="text-base mt-2">
              Predict future cash surpluses and shortfalls, allowing you to plan for seasonal fluctuations, large
              purchases, or potential cash crunches. This is especially important for tailoring businesses with seasonal
              demand patterns.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Resource Allocation</h3>
            <p className="text-base mt-2">
              Make informed decisions about hiring, equipment purchases, and material inventory based on projected
              demand and financial capacity. This helps optimize your workshop's productivity and efficiency.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg">
            <h3 className="font-medium">Risk Management</h3>
            <p className="text-base mt-2">
              Identify potential financial risks and develop contingency plans. For example, forecasting can help you
              prepare for fabric price increases, changes in customer demand, or unexpected equipment repairs.
            </p>
          </div>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Types of Financial Forecasts
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Revenue Forecasts</h3>

        <p className="mt-2">Predict future sales across different service categories:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Forecasting &gt; Revenue Forecast</li>
          <li>Select the forecast period (monthly, quarterly, annual)</li>
          <li>
            Choose the forecast method:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Historical trend-based</li>
              <li>Seasonal pattern-based</li>
              <li>Growth percentage-based</li>
              <li>Manual entry</li>
            </ul>
          </li>
          <li>Enter or adjust forecast figures by service category</li>
          <li>Add notes or assumptions</li>
          <li>Save the revenue forecast</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Tailoring-Specific Revenue Categories</h3>
          <p className="text-base mt-2">Configure revenue categories that reflect your business:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 text-xs">
            <li>Custom garment creation</li>
            <li>Alterations and repairs</li>
            <li>Wedding and formal wear</li>
            <li>Cultural and traditional clothing</li>
            <li>Fabric and material sales</li>
            <li>Design consultation services</li>
          </ul>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Expense Forecasts</h3>

        <p className="mt-2">Project future expenses by category:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Forecasting &gt; Expense Forecast</li>
          <li>Select the forecast period</li>
          <li>Choose fixed or variable expense forecasting methods for each category</li>
          <li>Enter or adjust forecast figures</li>
          <li>Link expenses to revenue drivers where appropriate</li>
          <li>Add inflation factors if needed</li>
          <li>Save the expense forecast</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Expense Forecasting Methods</h3>
          <ul className="list-disc list-inside space-y-1 mt-2 text-base">
            <li>
              <span className="font-medium">Fixed Expenses:</span> Consistent costs like rent, insurance, or equipment
              leases
            </li>
            <li>
              <span className="font-medium">Variable Expenses:</span> Costs that change with production volume, like
              fabric and materials
            </li>
            <li>
              <span className="font-medium">Semi-Variable Expenses:</span> Costs with both fixed and variable
              components, like utilities
            </li>
            <li>
              <span className="font-medium">Revenue-Driven Expenses:</span> Costs calculated as a percentage of
              projected revenue
            </li>
          </ul>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Cash Flow Forecasts</h3>

        <p className="mt-2">Project future cash inflows and outflows:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Forecasting &gt; Cash Flow Forecast</li>
          <li>Select the forecast period (typically monthly for detailed cash planning)</li>
          <li>The system pulls data from revenue and expense forecasts</li>
          <li>Adjust timing of cash receipts based on payment terms</li>
          <li>Add non-operational cash flows (loans, capital investments, etc.)</li>
          <li>Review projected cash position for each period</li>
          <li>Identify and address potential cash shortfalls</li>
          <li>Save the cash flow forecast</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Cash Flow Timing Factors</h3>
          <p className="text-base mt-2">Consider these tailoring-specific factors when forecasting cash flow timing:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 text-xs">
            <li>Customer deposits for custom orders (typically 50% upfront)</li>
            <li>Final payments upon garment completion</li>
            <li>Supplier payment terms for fabric and materials</li>
            <li>Seasonal fluctuations in demand (wedding season, holidays)</li>
            <li>Tax payment due dates</li>
            <li>Employee payroll cycles</li>
          </ul>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Balance Sheet Forecasts</h3>

        <p className="mt-2">Project your future financial position:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Forecasting &gt; Balance Sheet Forecast</li>
          <li>Select the forecast period</li>
          <li>The system uses your current balance sheet as a starting point</li>
          <li>Incorporate data from revenue, expense, and cash flow forecasts</li>
          <li>Add planned asset purchases or disposals</li>
          <li>Include planned financing activities (loans, capital investments)</li>
          <li>Review projected financial position</li>
          <li>Save the balance sheet forecast</li>
        </ol>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Forecasting Methods</h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Historical Trend Analysis</h3>

        <p className="mt-2">Use past performance to predict future results:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Forecasting &gt; Trend Analysis</li>
          <li>Select the data series to analyze (revenue, specific expenses, etc.)</li>
          <li>Choose the historical period to base the analysis on</li>
          <li>Select the trend calculation method (linear, moving average, etc.)</li>
          <li>Generate the trend forecast</li>
          <li>Adjust results if necessary</li>
          <li>Apply the trend forecast to your financial projections</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">When to Use Trend Analysis</h3>
          <p className="text-base mt-2">Trend analysis works best when:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 text-xs">
            <li>You have at least 2-3 years of historical data</li>
            <li>Your business has shown consistent patterns</li>
            <li>No major changes are expected in the forecast period</li>
            <li>You're forecasting stable expense categories</li>
          </ul>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Seasonal Pattern Analysis</h3>

        <p className="mt-2">Account for seasonal fluctuations in your business:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Forecasting &gt; Seasonal Analysis</li>
          <li>Select the data series to analyze</li>
          <li>Choose multiple years of historical data</li>
          <li>The system identifies seasonal patterns</li>
          <li>Apply seasonal factors to your base forecast</li>
          <li>Adjust for any expected changes in seasonality</li>
          <li>Apply the seasonal forecast to your financial projections</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Common Seasonal Patterns in Tailoring</h3>
          <ul className="list-disc list-inside space-y-1 mt-2 text-base">
            <li>Wedding season peaks (often spring and fall)</li>
            <li>Holiday formal wear demand (Eid, Christmas, New Year)</li>
            <li>Back-to-school uniform alterations</li>
            <li>Summer slumps in certain markets</li>
            <li>Cultural or religious festival-related demand</li>
          </ul>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Driver-Based Forecasting</h3>

        <p className="mt-2">Link financial projections to business drivers and activities:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Forecasting &gt; Driver-Based Forecast</li>
          <li>Identify key business drivers (number of orders, average order value, etc.)</li>
          <li>Establish relationships between drivers and financial outcomes</li>
          <li>Project future driver values</li>
          <li>The system calculates financial projections based on these relationships</li>
          <li>Review and adjust as needed</li>
          <li>Apply the driver-based forecast to your financial projections</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Example Drivers for Tailoring Businesses</h3>
          <ul className="list-disc list-inside space-y-1 mt-2 text-base">
            <li>Number of custom garment orders</li>
            <li>Average price per garment</li>
            <li>Number of alteration services</li>
            <li>Average alteration price</li>
            <li>Fabric consumption per garment</li>
            <li>Labor hours per garment type</li>
            <li>Customer acquisition rate</li>
            <li>Customer retention rate</li>
          </ul>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Scenario-Based Forecasting</h3>

        <p className="mt-2">Create multiple forecasts based on different assumptions:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Forecasting &gt; Scenario Analysis</li>
          <li>Create a base case forecast using your best estimates</li>
          <li>Create optimistic and pessimistic scenarios by adjusting key variables</li>
          <li>Compare results across scenarios</li>
          <li>Identify key variables with the most significant impact</li>
          <li>Develop contingency plans for different scenarios</li>
          <li>Save all scenario forecasts for future reference</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Common Scenarios to Model</h3>
          <ul className="list-disc list-inside space-y-1 mt-2 text-base">
            <li>Base Case: Most likely outcome based on current trends</li>
            <li>Growth Scenario: Increased marketing leads to higher customer acquisition</li>
            <li>Expansion Scenario: Adding new services or locations</li>
            <li>Downturn Scenario: Economic factors reduce customer spending</li>
            <li>Competition Scenario: New competitor enters the market</li>
            <li>Cost Increase Scenario: Fabric or labor costs rise significantly</li>
          </ul>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Forecast Monitoring and Revision
        </h2>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Tracking Forecast vs. Actual</h3>

        <p className="mt-2">Regularly compare actual results to your forecasts:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Forecasting &gt; Forecast Performance</li>
          <li>Select the forecast to evaluate</li>
          <li>Choose the time period to analyze</li>
          <li>Review variance reports showing differences between forecast and actual results</li>
          <li>Analyze the causes of significant variances</li>
          <li>Document learnings to improve future forecasts</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">Variance Analysis</h3>
          <p className="text-base mt-2">When analyzing variances, consider these factors:</p>
          <ul className="list-disc list-inside space-y-1 mt-2 text-xs">
            <li>Was the variance due to internal factors (within your control) or external factors?</li>
            <li>Is this a one-time variance or part of a pattern?</li>
            <li>Which assumptions in your forecast proved incorrect?</li>
            <li>How can you adjust your forecasting methodology to improve accuracy?</li>
          </ul>
        </div>

        <h3 className="scroll-m-20 text-xl font-semibold tracking-tight mt-6">Forecast Revisions</h3>

        <p className="mt-2">Update your forecasts as new information becomes available:</p>

        <ol className="list-decimal list-inside space-y-2 mt-4">
          <li>Go to Finance &gt; Forecasting &gt; Revise Forecast</li>
          <li>Select the forecast to update</li>
          <li>Choose whether to create a new version or overwrite the existing forecast</li>
          <li>Update assumptions and projections based on new information</li>
          <li>Document the reasons for the revision</li>
          <li>Save the revised forecast</li>
        </ol>

        <div className="bg-muted p-4 rounded-lg mt-4">
          <h3 className="font-medium">When to Revise Forecasts</h3>
          <ul className="list-disc list-inside space-y-1 mt-2 text-base">
            <li>Significant variance between actual and forecast results</li>
            <li>Major changes in business conditions</li>
            <li>New opportunities or threats emerge</li>
            <li>Changes in business strategy or operations</li>
            <li>Quarterly, as part of regular business review</li>
          </ul>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">
          Forecasting Best Practices
        </h2>

        <ul className="list-disc list-inside space-y-2 mt-4">
          <li>
            <span className="font-medium">Be Realistic:</span> Base forecasts on reasonable assumptions, not wishful
            thinking
          </li>
          <li>
            <span className="font-medium">Document Assumptions:</span> Clearly record the assumptions behind each
            forecast for future reference
          </li>
          <li>
            <span className="font-medium">Use Multiple Methods:</span> Combine different forecasting approaches for more
            robust projections
          </li>
          <li>
            <span className="font-medium">Consider External Factors:</span> Account for market trends, economic
            conditions, and competitive landscape
          </li>
          <li>
            <span className="font-medium">Involve Your Team:</span> Get input from staff who have direct knowledge of
            different areas of the business
          </li>
          <li>
            <span className="font-medium">Regular Reviews:</span> Compare actual results to forecasts at least monthly
            to improve future accuracy
          </li>
          <li>
            <span className="font-medium">Continuous Improvement:</span> Learn from forecast variances to refine your
            forecasting process
          </li>
        </ul>

        <div className="bg-muted p-4 rounded-lg mt-8">
          <h3 className="font-medium">Real-World Example</h3>
          <p className="text-base mt-2 italic">
            "Layla runs a tailoring business specializing in wedding and formal wear. She uses the Financial Forecasting
            tools to plan for the highly seasonal nature of her business. At the beginning of each year, she creates a
            revenue forecast broken down by month, using historical data that shows peak demand during wedding seasons
            (April-June and September-November). For her material expenses, she uses driver-based forecasting, linking
            fabric costs directly to projected garment production. She creates three scenarios: base case, high growth
            (20% increase in orders), and downturn (15% decrease in orders). Each month, she compares actual results to
            her forecast. When a popular influencer unexpectedly featured her designs, causing a 35% spike in orders,
            Layla quickly revised her forecast, adjusted her fabric purchasing plan, and hired temporary staff to meet
            the increased demand. By the end of the year, her revised forecast was within 5% of actual results, allowing
            her to maintain profitability despite the unexpected growth challenges. The forecasting tools helped her
            anticipate cash flow needs, ensuring she had sufficient funds to purchase additional materials before
            receiving customer deposits."
          </p>
        </div>
      </div>

      <DocsPagination
        prev={{
          title: "Budgeting",
          href: "/finance/budgeting",
        }}
        next={{
          title: "Financial Settings",
          href: "/finance/settings",
        }}
      />
    </div>
  )
}
