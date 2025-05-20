import { Tag, Link2, Calendar, BarChart4, Users, ShoppingBag } from "lucide-react"
import { DocsPagination } from "@/components/docs-pagination"

export default function PromotionsDocumentation() {

  return (
    <div className="p-6 max-w-full">
      <h1 className="text-2xl font-semibold mb-3">Promotions Management</h1>
      <p className="text-sm text-muted-foreground mb-6">Create and manage discounts, offers, and marketing campaigns</p>

      <div className="text-sm">
        <p className="mb-4">
          The promotions management module allows you to create, schedule, and track various types of discounts and
          special offers to drive sales, clear inventory, and reward customer loyalty.
        </p>

        <div className="my-6 border rounded-lg overflow-hidden bg-gray-50 p-4">
          <div className="h-48 bg-white rounded border shadow-sm p-3">
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <div className="font-medium">Active Promotion</div>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </div>
            </div>
            <div className="flex h-32">
              <div className="w-1/3 border-r pr-2">
                <div className="text-xs font-medium mb-1">Promotion Details</div>
                <div className="text-xs space-y-1">
                  <div className="font-medium">Summer Collection Sale</div>
                  <div>Type: Percentage Discount</div>
                  <div>Discount: 20% off</div>
                  <div>Start: June 1, 2023</div>
                  <div>End: June 30, 2023</div>
                </div>
              </div>
              <div className="w-1/3 border-r px-2">
                <div className="text-xs font-medium mb-1">Eligibility</div>
                <div className="text-xs space-y-1">
                  <div>Products: Summer Collection</div>
                  <div>Categories: Shirts, Trousers</div>
                  <div>Min Purchase: None</div>
                  <div>Customer Groups: All</div>
                  <div>Stackable: No</div>
                </div>
              </div>
              <div className="w-1/3 pl-2">
                <div className="text-xs font-medium mb-1">Performance</div>
                <div className="text-xs space-y-1">
                  <div>Uses: 128</div>
                  <div>Revenue: SAR 45,600</div>
                  <div>Avg. Discount: SAR 71.25</div>
                  <div>Conversion Rate: 24%</div>
                  <div>Status: Active</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Promotion Types</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Percentage Discounts</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Fixed percentage off selected items</li>
              <li>• Category-wide percentage discounts</li>
              <li>• Tiered percentage discounts (spend more, save more)</li>
              <li>• Limited-time flash sales</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Fixed Amount Discounts</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Fixed amount off specific products</li>
              <li>• Vouchers with fixed value redemption</li>
              <li>• Threshold discounts (e.g., SAR 50 off when spending SAR 300+)</li>
              <li>• Bundle pricing with fixed discount</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Buy X Get Y Promotions</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Buy one get one free (BOGO)</li>
              <li>• Buy X get Y% off</li>
              <li>• Buy from category A, get discount on category B</li>
              <li>• Free gift with purchase above threshold</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Customer-Specific Offers</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• New customer welcome discounts</li>
              <li>• Loyalty tier exclusive offers</li>
              <li>• Birthday and anniversary specials</li>
              <li>• Win-back campaigns for inactive customers</li>
            </ul>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Integration with Marketing Module</h2>

        <div className="border rounded-lg p-4 mb-6 bg-gray-50">
          <div className="flex items-center mb-3">
            <Tag className="h-5 w-5 text-blue-500 mr-2" />
            <h3 className="text-sm font-medium">Connected to Marketing Module</h3>
          </div>

          <p className="text-xs mb-3">
            The Promotions Management system integrates with the Marketing Module to create cohesive campaigns and
            measure effectiveness.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="flex items-start">
              <Link2 className="h-4 w-4 text-blue-500 mr-1 mt-0.5" />
              <div>
                <span className="font-medium">Campaign Coordination</span>
                <p className="text-muted-foreground">
                  Promotions can be linked to specific marketing campaigns to track performance across channels and
                  touchpoints.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Calendar className="h-4 w-4 text-blue-500 mr-1 mt-0.5" />
              <div>
                <span className="font-medium">Scheduled Activation</span>
                <p className="text-muted-foreground">
                  Promotions can be scheduled to align with marketing calendar events and communication timing.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <BarChart4 className="h-4 w-4 text-blue-500 mr-1 mt-0.5" />
              <div>
                <span className="font-medium">Performance Analytics</span>
                <p className="text-muted-foreground">
                  Unified reporting shows how promotions perform in relation to marketing activities and spend.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Creating a New Promotion</h2>

        <ol className="space-y-3 mb-6">
          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">1. Access Promotions Module</h3>
            <p className="text-xs text-muted-foreground">Navigate to Promotions &gt; Create New Promotion.</p>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">2. Select Promotion Type</h3>
            <p className="text-xs text-muted-foreground">
              Choose from percentage discount, fixed amount, buy X get Y, or other promotion types.
            </p>
            <div className="bg-gray-50 border rounded p-2 text-xs mt-1">
              <span className="font-medium">System Action:</span> The system loads the appropriate configuration form
              based on the selected promotion type, with specific fields and options relevant to that promotion
              mechanism.
            </div>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">3. Define Promotion Details</h3>
            <p className="text-xs text-muted-foreground">
              Set the promotion name, description, discount value, and applicable dates.
            </p>
            <div className="bg-gray-50 border rounded p-2 text-xs mt-1">
              <span className="font-medium">Required Fields:</span>
              <ul className="pl-4 mt-1 space-y-1">
                <li>• Promotion name (appears on receipts and reports)</li>
                <li>• Internal description (for staff reference)</li>
                <li>• Discount value (percentage or fixed amount)</li>
                <li>• Start date and time</li>
                <li>• End date and time (or ongoing)</li>
                <li>• Promotion code (if applicable)</li>
              </ul>
            </div>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">4. Set Eligibility Rules</h3>
            <p className="text-xs text-muted-foreground">
              Define which products, categories, customer groups, and conditions apply.
            </p>
            <div className="bg-gray-50 border rounded p-2 text-xs mt-1">
              <span className="font-medium">Configuration Options:</span>
              <ul className="pl-4 mt-1 space-y-1">
                <li>• Product selection (specific items, categories, or tags)</li>
                <li>• Customer groups (all, loyalty tiers, new customers)</li>
                <li>• Minimum purchase requirements (amount or quantity)</li>
                <li>• Usage limits (per customer, total uses)</li>
                <li>• Combinability with other promotions</li>
              </ul>
            </div>
          </li>

          <li>
            <h3 className="text-sm font-medium">5. Activate Promotion</h3>
            <p className="text-xs text-muted-foreground">
              Save and activate the promotion or schedule it for future activation.
            </p>
            <div className="bg-gray-50 border rounded p-2 text-xs mt-1">
              <span className="font-medium">System Action:</span> When activated, the system:
              <ul className="pl-4 mt-1 space-y-1">
                <li>• Validates all promotion settings for consistency</li>
                <li>• Makes the promotion available to the POS system</li>
                <li>• Updates product displays to show promotional pricing</li>
                <li>• Begins tracking promotion usage and performance</li>
              </ul>
            </div>
          </li>
        </ol>

        <h2 className="text-lg font-medium mt-6 mb-3">Promotion Rules Engine</h2>

        <div className="border rounded p-4 mb-6 bg-gray-50">
          <p className="mb-3">
            The promotions module is powered by a sophisticated rules engine that evaluates transactions in real-time to
            apply the most beneficial eligible promotions:
          </p>

          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-medium mb-1">Rule Evaluation</h3>
              <p className="text-xs text-muted-foreground">
                When a transaction is being processed, the rules engine evaluates all active promotions against the
                transaction contents, customer profile, and current date/time. It identifies all promotions for which
                the transaction is eligible.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-1">Conflict Resolution</h3>
              <p className="text-xs text-muted-foreground">
                If multiple promotions apply to the same items, the engine uses configurable conflict resolution
                strategies: best value for customer (default), specified promotion priority, or combinable promotions
                where allowed.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-1">Dynamic Recalculation</h3>
              <p className="text-xs text-muted-foreground">
                As items are added or removed from the transaction, the engine continuously recalculates applicable
                promotions and updates the displayed prices and discounts in real-time.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-medium mb-1">Promotion Tracking</h3>
              <p className="text-xs text-muted-foreground">
                Each applied promotion is recorded with the transaction, including the promotion ID, discount amount,
                and affected items. This data feeds into promotion performance analytics.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Promotion Performance Analysis</h2>

        <div className="space-y-4 mb-6">
          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Usage Metrics</h3>
            <p className="text-xs text-muted-foreground mb-2">Track how often promotions are being applied.</p>
            <div className="text-xs">
              <span className="font-medium">Key Metrics:</span>
              <ul className="pl-4 mt-1 space-y-1">
                <li>• Total number of transactions with promotion applied</li>
                <li>• Percentage of eligible transactions using the promotion</li>
                <li>• Average discount amount per use</li>
                <li>• Usage trends over time (daily, weekly, monthly)</li>
                <li>• Usage by store location or sales channel</li>
              </ul>
            </div>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Financial Impact</h3>
            <p className="text-xs text-muted-foreground mb-2">Measure the financial effects of promotions.</p>
            <div className="text-xs">
              <span className="font-medium">Key Metrics:</span>
              <ul className="pl-4 mt-1 space-y-1">
                <li>• Total discount amount given</li>
                <li>• Total revenue from promoted items</li>
                <li>• Average transaction value with promotion vs. without</li>
                <li>• Margin impact analysis</li>
                <li>• Return on promotion investment (ROPI)</li>
              </ul>
            </div>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Customer Behavior</h3>
            <p className="text-xs text-muted-foreground mb-2">Analyze how promotions affect customer actions.</p>
            <div className="text-xs">
              <span className="font-medium">Key Metrics:</span>
              <ul className="pl-4 mt-1 space-y-1">
                <li>• New vs. existing customer usage</li>
                <li>• Repeat purchase rate after promotion redemption</li>
                <li>• Basket composition analysis (promoted vs. non-promoted items)</li>
                <li>• Customer segment response rates</li>
                <li>• Impact on customer lifetime value</li>
              </ul>
            </div>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Inventory Impact</h3>
            <p className="text-xs text-muted-foreground mb-2">Evaluate how promotions affect inventory movement.</p>
            <div className="text-xs">
              <span className="font-medium">Key Metrics:</span>
              <ul className="pl-4 mt-1 space-y-1">
                <li>• Sell-through rate of promoted items</li>
                <li>• Inventory turnover improvement</li>
                <li>• Reduction in aged inventory</li>
                <li>• Category sales lift during promotion</li>
                <li>• Post-promotion sales velocity</li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Integration with Other Modules</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-start border rounded p-3">
            <Users className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium mb-1">Customer Management</h3>
              <p className="text-xs text-muted-foreground">
                Promotions can target specific customer segments based on purchase history, loyalty status, or
                demographics. Customer profiles are updated with promotion redemption history to inform future
                targeting.
              </p>
            </div>
          </div>

          <div className="flex items-start border rounded p-3">
            <ShoppingBag className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium mb-1">Inventory Management</h3>
              <p className="text-xs text-muted-foreground">
                Promotions can be automatically triggered based on inventory levels to help move slow-selling or
                seasonal items. The system can suggest promotion candidates based on inventory aging reports.
              </p>
            </div>
          </div>

          <div className="flex items-start border rounded p-3">
            <Calendar className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium mb-1">Calendar & Events</h3>
              <p className="text-xs text-muted-foreground">
                Promotions can be scheduled to align with business events, holidays, or seasonal changes. The calendar
                module provides a visual timeline of planned promotional activities.
              </p>
            </div>
          </div>

          <div className="flex items-start border rounded p-3">
            <BarChart4 className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium mb-1">Reports & Analytics</h3>
              <p className="text-xs text-muted-foreground">
                Comprehensive reporting tools analyze promotion performance across multiple dimensions. Dashboards
                provide real-time visibility into active promotions and their impact.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Real-World Example</h2>

        <div className="border rounded p-4 mb-6 text-xs italic bg-gray-50">
          <p>
            "Elegant Tailors noticed they had excess inventory of premium Egyptian cotton shirts in blue and white. The
            inventory manager created a 'Buy One Get One 50% Off' promotion specifically for these shirts, valid for two
            weeks. The promotion was configured to display automatically on the POS terminal when eligible items were
            scanned. Additionally, they set up a targeted email campaign to customers who had previously purchased
            formal shirts, offering them early access to the promotion with a special code for an additional 5% off.
            During the promotion period, they sold 78 shirts, reducing the excess inventory by 65%. The promotion
            dashboard showed that 42% of purchases were made by customers responding to the email campaign, and the
            average transaction value was 30% higher than normal as customers added complementary items like ties and
            cufflinks to their purchases. Based on this success, they created a template for similar inventory-driven
            promotions to use in the future."
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 my-6 text-xs">
          <h3 className="text-sm font-medium text-blue-700 mb-1">Pro Tips</h3>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Test promotions on the staging system before activating them to ensure they work as expected</li>
            <li>• Create promotion templates for recurring sales events to save setup time</li>
            <li>
              • Use A/B testing by creating two similar promotions with slight variations to see which performs better
            </li>
            <li>
              • Review promotion performance weekly and be prepared to adjust or end underperforming promotions early
            </li>
            <li>• Train staff thoroughly on active promotions so they can explain them to customers</li>
          </ul>
        </div>

        <DocsPagination prev={{href: "/pos", title: "pos"}} next={{href: "/pos", title: "pos"}} />

      </div>
    </div>
  )
}
