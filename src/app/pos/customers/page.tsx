import { Users, Link2, MessageSquare, Heart, Database, Wallet, BarChart, UserCircle } from "lucide-react"
import { DocsPagination } from "@/components/docs-pagination"

export default function CustomersDocumentation() {

  return (
    <div className="p-6 max-w-full">
      <h1 className="text-2xl font-semibold mb-3">Customer Management</h1>
      <p className="text-sm text-muted-foreground mb-6">Track customer information and purchase history</p>

      <div className="text-sm">
        <p className="mb-4">
          The <strong>customer management system</strong> helps you maintain detailed customer profiles, track
          measurements, record purchase history, and build lasting relationships with your clientele. This comprehensive
          system serves as the foundation for personalized service and targeted marketing.
        </p>

        <div className="my-6 border rounded-lg overflow-hidden bg-gray-50 p-4">
          <div className="h-48 bg-white rounded border shadow-sm p-3">
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <div className="font-medium">Customer Profile</div>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </div>
            </div>
            <div className="flex h-32">
              <div className="w-1/3 border-r pr-2">
                <div className="text-xs font-medium mb-1">Contact Information</div>
                <div className="text-xs space-y-1">
                  <div>Ahmed Al-Farsi</div>
                  <div>+966 50 123 4567</div>
                  <div>ahmed@example.com</div>
                  <div>Riyadh, Saudi Arabia</div>
                </div>
              </div>
              <div className="w-1/3 border-r px-2">
                <div className="text-xs font-medium mb-1">Measurements</div>
                <div className="text-xs space-y-1">
                  <div>Chest: 42"</div>
                  <div>Waist: 36"</div>
                  <div>Sleeve: 25"</div>
                  <div>Inseam: 32"</div>
                </div>
              </div>
              <div className="w-1/3 pl-2">
                <div className="text-xs font-medium mb-1">Purchase History</div>
                <div className="text-xs space-y-1">
                  <div>Total Orders: 8</div>
                  <div>Last Visit: 15 May 2023</div>
                  <div>Lifetime Value: SAR 12,450</div>
                  <div>Preferred: Custom Suits</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">How Customer Management Works</h2>

        <div className="border rounded-lg p-4 mb-6 bg-gray-50">
          <p className="mb-3">
            The customer management system uses a <strong>centralized database architecture</strong> that provides a
            360-degree view of each customer:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex">
              <UserCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">Customer Data Repository</h3>
                <p className="text-xs text-muted-foreground">
                  A secure, normalized database stores all customer information including contact details, preferences,
                  measurements, and interaction history. The system uses a unique customer ID as the primary key that
                  links all related records across the system, ensuring data integrity and consistency.
                </p>
              </div>
            </div>

            <div className="flex">
              <Database className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">Measurement Tracking</h3>
                <p className="text-xs text-muted-foreground">
                  The system maintains <strong>versioned measurement records</strong> with timestamps, allowing you to
                  track changes over time. Each measurement set is linked to the customer profile and can be associated
                  with specific orders. The system supports multiple measurement templates for different garment types.
                </p>
              </div>
            </div>

            <div className="flex">
              <BarChart className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">Purchase Analytics</h3>
                <p className="text-xs text-muted-foreground">
                  Advanced algorithms analyze purchase patterns to identify <strong>customer preferences</strong>,
                  seasonal buying habits, and potential upsell opportunities. The system calculates key metrics like
                  average order value, purchase frequency, and lifetime value to segment customers and personalize
                  marketing.
                </p>
              </div>
            </div>

            <div className="flex">
              <Wallet className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">Loyalty Management</h3>
                <p className="text-xs text-muted-foreground">
                  The loyalty engine tracks <strong>points accumulation</strong> and redemption based on configurable
                  rules. It automatically applies tier-based benefits, calculates point balances, and manages expiration
                  dates. The system also tracks reward redemption history and preferred incentives.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Customer Management Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Customer Profiles</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>
                • <strong>Comprehensive contact information</strong> storage
              </li>
              <li>• Communication preferences and opt-in status</li>
              <li>• Detailed notes and special requirements</li>
              <li>• Birthday and anniversary tracking for personalized marketing</li>
              <li>• Style preferences and fabric choices</li>
              <li>• Fit preferences (e.g., slim, regular, relaxed)</li>
              <li>• Language and cultural preferences</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Measurement Records</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>
                • <strong>Detailed body measurements</strong> with up to 30 data points
              </li>
              <li>• Multiple measurement profiles for different garment types</li>
              <li>• Measurement history tracking with version comparison</li>
              <li>• Fit preferences and adjustment notes</li>
              <li>• Digital body scanning integration (where available)</li>
              <li>• Posture and body shape notes</li>
              <li>• Measurement change alerts for returning customers</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Purchase History</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>
                • <strong>Complete transaction records</strong> with line-item details
              </li>
              <li>• Item preferences and favorites tracking</li>
              <li>• Spending patterns analysis and visualization</li>
              <li>• Order status tracking across the production lifecycle</li>
              <li>• Return and exchange history</li>
              <li>• Payment method preferences</li>
              <li>• Seasonal buying pattern identification</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Loyalty Management</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>
                • <strong>Points accumulation and redemption</strong> tracking
              </li>
              <li>• Tier-based benefits and status management</li>
              <li>• Special offers and personalized promotions</li>
              <li>• Automated birthday and anniversary rewards</li>
              <li>• Referral tracking and incentives</li>
              <li>• Point expiration management</li>
              <li>• VIP status designation and special services</li>
            </ul>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Integration with Enterprise Systems</h2>

        <div className="border rounded-lg p-4 mb-6 bg-gray-50">
          <div className="flex items-center mb-3">
            <Users className="h-5 w-5 text-green-500 mr-2" />
            <h3 className="text-sm font-medium">Connected to CRM Module</h3>
          </div>

          <p className="text-xs mb-3">
            The Customer Management in POS is <strong>fully integrated</strong> with the CRM module, providing a
            comprehensive view of customer relationships across all touchpoints.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="flex items-start">
              <Link2 className="h-4 w-4 text-green-500 mr-1 mt-0.5" />
              <div>
                <span className="font-medium">Unified Customer View</span>
                <p className="text-muted-foreground">
                  Access complete customer history and interactions from both systems through a shared database
                  architecture. Changes made in either system are instantly reflected in the other, ensuring consistent
                  customer data across all channels.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <MessageSquare className="h-4 w-4 text-green-500 mr-1 mt-0.5" />
              <div>
                <span className="font-medium">Communication History</span>
                <p className="text-muted-foreground">
                  View all customer communications across channels including in-store interactions, email
                  correspondence, SMS messages, and phone calls. The system maintains a chronological log of all
                  touchpoints with context and outcomes.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <Heart className="h-4 w-4 text-green-500 mr-1 mt-0.5" />
              <div>
                <span className="font-medium">Loyalty Integration</span>
                <p className="text-muted-foreground">
                  Loyalty points and rewards sync automatically with CRM campaigns, allowing for targeted promotions
                  based on loyalty status. The system can trigger automated communications when customers reach new
                  loyalty tiers or have points nearing expiration.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Technical Architecture</h2>

        <div className="border rounded p-4 mb-6 bg-gray-50">
          <p className="mb-3">
            The customer management system is built on a <strong>multi-tier architecture</strong> that ensures data
            security, performance, and scalability:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-1">Data Layer</h3>
              <p className="text-xs text-muted-foreground">
                Customer data is stored in a secure, encrypted database with strict access controls. The schema uses
                normalized tables for core customer information, with related tables for measurements, transactions, and
                preferences. The system implements data partitioning for large customers to maintain performance.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-1">Business Logic Layer</h3>
              <p className="text-xs text-muted-foreground">
                Core customer management functions are implemented as services that enforce business rules, validate
                data, and maintain consistency. This layer includes customer segmentation algorithms, loyalty point
                calculation, and personalization engines. All customer data modifications are validated and logged for
                audit purposes.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-1">Integration Layer</h3>
              <p className="text-xs text-muted-foreground">
                APIs and event-driven architecture enable real-time data synchronization with other business systems.
                This layer handles data mapping, transformation, and validation when exchanging information with
                external systems. It supports both synchronous and asynchronous communication patterns.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-1">User Interface Layer</h3>
              <p className="text-xs text-muted-foreground">
                The customer management interface provides intuitive screens for profile creation, measurement
                recording, and history viewing. Advanced features include visual measurement guides, comparison tools,
                and interactive loyalty dashboards. The UI adapts to different device types and screen sizes.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Adding a New Customer</h2>

        <ol className="space-y-3 mb-6">
          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">1. Access Customer Module</h3>
            <p className="text-xs text-muted-foreground">Navigate to Customers &gt; Add New Customer.</p>
            <div className="bg-gray-50 border rounded p-2 text-xs mt-1">
              <span className="font-medium">System Action:</span> The system initializes a new customer record with a
              unique identifier. It prepares the customer creation form with default values based on system settings and
              loads any required reference data like countries, cities, and customer categories.
            </div>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">2. Enter Basic Information</h3>
            <p className="text-xs text-muted-foreground">Input name, contact details, and address information.</p>
            <div className="bg-gray-50 border rounded p-2 text-xs mt-1">
              <span className="font-medium">Required Fields:</span>
              <ul className="pl-4 mt-1 space-y-1">
                <li>• Full name (first, last, and optional middle name)</li>
                <li>• Primary phone number</li>
                <li>• Email address (for digital receipts and communications)</li>
                <li>• Preferred language</li>
                <li>• Communication preferences (opt-in status)</li>
              </ul>
            </div>
            <div className="bg-gray-50 border rounded p-2 text-xs mt-2">
              <span className="font-medium">System Action:</span> The system validates the entered data, checking for
              required fields, proper formats (email, phone), and potential duplicates. If a potential duplicate is
              found, the system will alert you and offer to merge information or create a new record.
            </div>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">3. Record Measurements</h3>
            <p className="text-xs text-muted-foreground">Add detailed measurements for custom tailoring.</p>
            <div className="bg-gray-50 border rounded p-2 text-xs mt-1">
              <span className="font-medium">Measurement Options:</span>
              <ul className="pl-4 mt-1 space-y-1">
                <li>• Select measurement template (suit, shirt, trousers, etc.)</li>
                <li>• Enter measurements manually or import from digital measuring tools</li>
                <li>• Add notes about posture, fit preferences, or special requirements</li>
                <li>• Upload reference photos if available (with customer permission)</li>
              </ul>
            </div>
            <div className="bg-gray-50 border rounded p-2 text-xs mt-2">
              <span className="font-medium">System Action:</span> The system stores the measurements with a timestamp
              and version number. It validates the measurements against expected ranges to catch potential errors. The
              system can also calculate derived measurements based on standard formulas.
            </div>
          </li>

          <li className="border-b pb-2">
            <h3 className="text-sm font-medium">4. Set Preferences</h3>
            <p className="text-xs text-muted-foreground">
              Note fabric preferences, style choices, and communication preferences.
            </p>
            <div className="bg-gray-50 border rounded p-2 text-xs mt-1">
              <span className="font-medium">Preference Categories:</span>
              <ul className="pl-4 mt-1 space-y-1">
                <li>• Fabric preferences (materials, weights, patterns)</li>
                <li>• Style preferences (classic, modern, slim fit, etc.)</li>
                <li>• Color preferences and restrictions</li>
                <li>• Communication preferences (email, SMS, phone, time of day)</li>
                <li>• Special dates (birthday, anniversary) for personalized marketing</li>
              </ul>
            </div>
          </li>

          <li>
            <h3 className="text-sm font-medium">5. Save Profile</h3>
            <p className="text-xs text-muted-foreground">
              Save the customer profile and enroll in loyalty program if applicable.
            </p>
            <div className="bg-gray-50 border rounded p-2 text-xs mt-1">
              <span className="font-medium">System Action:</span> When saving the profile, the system:
              <ol className="list-decimal pl-4 mt-1">
                <li>Performs final validation of all required fields</li>
                <li>Creates the customer record in the database</li>
                <li>Generates a unique customer ID</li>
                <li>Enrolls the customer in the loyalty program if opted in</li>
                <li>Creates initial loyalty account with welcome points if applicable</li>
                <li>Triggers any configured welcome communications</li>
                <li>Logs the creation event for audit purposes</li>
              </ol>
            </div>
          </li>
        </ol>

        <h2 className="text-lg font-medium mt-6 mb-3">Managing Customer Relationships</h2>

        <div className="space-y-3 mb-6">
          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Follow-up Reminders</h3>
            <p className="text-xs text-muted-foreground">
              Set <strong>automated reminders</strong> for follow-ups after purchases, alterations, or fittings.
            </p>
            <div className="bg-gray-50 border rounded p-2 text-xs mt-1">
              <span className="font-medium">How it works:</span> The system can be configured to generate automatic
              follow-up tasks based on transaction types and customer segments. For example, after a custom suit
              delivery, the system can create a task to call the customer after one week to check satisfaction. These
              reminders appear in the staff dashboard and can be assigned to specific team members.
            </div>
          </div>

          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Special Occasions</h3>
            <p className="text-xs text-muted-foreground">
              Track <strong>birthdays and anniversaries</strong> to send timely greetings and special offers.
            </p>
            <div className="bg-gray-50 border rounded p-2 text-xs mt-1">
              <span className="font-medium">How it works:</span> The system maintains a calendar of customer special
              dates and can automatically generate personalized communications or special offers. For example, a
              customer might receive a birthday email with a special discount code valid for their birthday month. These
              automated campaigns can be configured with different offers based on customer loyalty tier or lifetime
              value.
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium">Feedback Collection</h3>
            <p className="text-xs text-muted-foreground">
              <strong>Automatically request feedback</strong> after purchases to improve service quality.
            </p>
            <div className="bg-gray-50 border rounded p-2 text-xs mt-1">
              <span className="font-medium">How it works:</span> The system can trigger feedback requests via email or
              SMS after key transactions or at specific points in the customer journey. Feedback is collected through
              structured surveys with both rating scales and open-ended questions. The results are stored in the
              customer profile and aggregated for reporting. Negative feedback can trigger alerts for service recovery
              actions.
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Advanced Customer Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Customer Segmentation</h3>
            <p className="text-xs text-muted-foreground mb-2">Group customers based on behavior and value.</p>
            <div className="text-xs">
              <span className="font-medium">How it works:</span>
              <p className="mt-1 text-muted-foreground">
                The system uses machine learning algorithms to analyze purchase history, frequency, recency, and
                monetary value to automatically segment customers into groups like "VIP," "Regular," "Occasional," and
                "At Risk." These segments can be used for targeted marketing, personalized service levels, and business
                planning.
              </p>
              <p className="mt-1 text-muted-foreground">
                Segmentation is recalculated periodically based on recent behavior, allowing customers to move between
                segments as their relationship with your business evolves.
              </p>
            </div>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Digital Measurement Storage</h3>
            <p className="text-xs text-muted-foreground mb-2">Advanced measurement management system.</p>
            <div className="text-xs">
              <span className="font-medium">How it works:</span>
              <p className="mt-1 text-muted-foreground">
                Beyond basic measurements, the system can store 3D body scans, posture analysis, and detailed fit
                preferences. The measurement system supports version control, allowing you to track changes over time
                and compare measurements between visits. Visual diagrams help staff understand specific fit issues or
                preferences.
              </p>
              <p className="mt-1 text-muted-foreground">
                The system can also generate custom pattern blocks based on measurements, which can be exported to CAD
                systems for pattern making.
              </p>
            </div>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Style Profile Management</h3>
            <p className="text-xs text-muted-foreground mb-2">Track customer style preferences and wardrobes.</p>
            <div className="text-xs">
              <span className="font-medium">How it works:</span>
              <p className="mt-1 text-muted-foreground">
                The style profile system allows you to record detailed preferences including favorite colors, patterns,
                fabrics, and silhouettes. It can also track items the customer already owns, enabling staff to suggest
                complementary pieces. Style profiles can include seasonal preferences and occasion-specific
                requirements.
              </p>
              <p className="mt-1 text-muted-foreground">
                The system can generate style recommendations based on the customer's profile, current inventory, and
                trending items that match their preferences.
              </p>
            </div>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Customer Journey Mapping</h3>
            <p className="text-xs text-muted-foreground mb-2">Visualize and optimize the customer experience.</p>
            <div className="text-xs">
              <span className="font-medium">How it works:</span>
              <p className="mt-1 text-muted-foreground">
                The system tracks each customer's journey from first contact through multiple purchases and
                interactions. This journey map shows touchpoints, feedback, and key milestones in the relationship.
                Staff can see where each customer is in their journey and what the appropriate next steps might be.
              </p>
              <p className="mt-1 text-muted-foreground">
                Journey analytics identify common patterns and potential friction points, helping you optimize the
                overall customer experience and increase retention.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Real-World Example</h2>

        <div className="border rounded p-4 mb-6 text-xs italic bg-gray-50">
          <p>
            "When Mohammed visits Elegant Tailors for the first time, the sales associate creates a detailed profile.
            Beyond basic contact information, they record his complete measurements, fabric preferences (he prefers
            lightweight wool), and style choices (modern slim fit). They note that he travels frequently and prefers
            text notifications. After his first purchase of a custom suit, the system automatically schedules a
            follow-up for two weeks later. On his birthday, the system sends an automated message with a special
            discount. When Mohammed returns three months later, the staff immediately accesses his profile, greets him
            by name, and references his previous purchases, creating a personalized experience that builds loyalty."
          </p>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Customer Data Security and Privacy</h2>

        <div className="border rounded p-4 mb-6 bg-gray-50">
          <p className="mb-3">
            The customer management system implements <strong>robust security measures</strong> to protect sensitive
            customer information:
          </p>

          <div className="space-y-3">
            <div>
              <h3 className="text-xs font-medium">Data Encryption</h3>
              <p className="text-xs text-muted-foreground">
                All customer data is encrypted both in transit and at rest using industry-standard encryption protocols.
                Sensitive information like payment details is stored with additional encryption layers and access
                restrictions.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-medium">Access Controls</h3>
              <p className="text-xs text-muted-foreground">
                Role-based access controls ensure staff members can only view and modify customer data relevant to their
                responsibilities. All access to customer records is logged with user ID, timestamp, and action performed
                for audit purposes.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-medium">Consent Management</h3>
              <p className="text-xs text-muted-foreground">
                The system tracks customer consent for data collection, storage, and marketing communications. Customers
                can update their preferences at any time, and the system maintains a complete history of consent changes
                for compliance purposes.
              </p>
            </div>

            <div>
              <h3 className="text-xs font-medium">Data Retention</h3>
              <p className="text-xs text-muted-foreground">
                Configurable data retention policies allow you to automatically archive or anonymize customer data after
                a specified period of inactivity, in compliance with local privacy regulations while maintaining
                necessary business records.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 my-6 text-xs">
          <h3 className="text-sm font-medium text-blue-700 mb-1">Pro Tips</h3>
          <ul className="space-y-1 text-muted-foreground">
            <li>• Take photos of finished garments (with permission) to reference for future orders</li>
            <li>
              • Use <strong>tags to segment customers</strong> for targeted marketing campaigns
            </li>
            <li>• Schedule regular measurement updates for repeat customers</li>
            <li>• Record fabric swatches with customer preferences for quick reference</li>
            <li>
              • Create <strong>detailed notes about fit adjustments</strong> to improve future orders
            </li>
            <li>• Set up automated email sequences for new customers to build engagement</li>
            <li>
              • Use the <strong>customer timeline view</strong> to quickly understand relationship history
            </li>
            <li>• Implement a regular "VIP customer review" process to ensure retention of high-value clients</li>
          </ul>
        </div>

        <DocsPagination prev={{href: "/pos", title: "pos"}} next={{href: "/pos", title: "pos"}} />

      </div>
    </div>
  )
}
