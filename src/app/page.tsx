import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Nubras ERP Documentation",
  description: "Documentation for the Nubras ERP system for tailoring businesses",
}

export default function DocsPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Nubras ERP Documentation</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive documentation for the Nubras ERP system designed specifically for tailoring businesses.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-8">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Introduction to Nubras ERP</h2>
          <p>
            Nubras ERP is a comprehensive enterprise resource planning solution specifically designed for tailoring
            businesses. It integrates all core business processes into a unified system, enabling seamless data flow
            between different departments and providing real-time insights for informed decision-making.
          </p>

          <p>
            Our ERP system is built with the unique requirements of the tailoring industry in mind, addressing
            challenges such as custom measurements, cultural design considerations, material management, and specialized
            production workflows. The modular architecture allows businesses to start with essential modules and expand
            as their needs grow.
          </p>

          <h3 className="text-xl font-semibold mt-6">Core Modules Overview</h3>

          <div className="space-y-6 mt-4">
            <div>
              <h4 className="text-lg font-medium">Finance Management</h4>
              <p>
                The Finance module provides comprehensive tools for managing all financial aspects of your tailoring
                business, including accounts, banking, invoicing, expense tracking, financial reporting, budgeting, and
                tax management. It supports multi-currency operations, automated reconciliation, and detailed financial
                analysis to help you maintain financial health and compliance.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium">Inventory Management</h4>
              <p>
                The Inventory module helps you track and manage all materials, fabrics, accessories, and finished
                products. It includes features for stock movements, material allocation, waste tracking, supplier
                management, purchase orders, location management, and inventory auditing. The system provides real-time
                visibility into inventory levels, helping prevent stockouts and overstock situations.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium">Project Management</h4>
              <p>
                The Project Management module streamlines the entire lifecycle of tailoring projects from initiation to
                closure. It includes tools for project planning, execution, monitoring, and delivery. Special features
                include AR preview generation, body scanning integration, cultural customization tools, and client
                collaboration platforms to enhance the tailoring experience.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium">Human Resources</h4>
              <p>
                The HR module manages all aspects of workforce management, including employee records, attendance
                tracking, payroll processing, performance evaluation, skill management, and training. It's designed to
                handle the unique requirements of tailoring businesses, such as tracking specialized skills, managing
                artisan contractors, and allocating resources based on expertise.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium">Point of Sale (POS)</h4>
              <p>
                The POS module provides a comprehensive retail management solution for tailoring businesses with
                physical stores. It includes features for sales processing, payment handling, customer management,
                loyalty programs, promotions, and in-store measurements. The system integrates seamlessly with inventory
                and finance modules for real-time stock updates and financial recording.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium">Manufacturing</h4>
              <p>
                The Manufacturing module manages the entire production process, from cutting and stitching to finishing
                and quality control. It includes production planning, resource allocation, work order management,
                process tracking, quality assurance, and production reporting. The system supports both made-to-measure
                and ready-to-wear production models, with specialized workflows for each.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium">Customer Relationship Management (CRM)</h4>
              <p>
                The CRM module helps manage all customer interactions, including contact management, measurement
                records, style preferences, purchase history, communication logs, and follow-up scheduling. It provides
                a 360-degree view of each customer, enabling personalized service and targeted marketing.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-medium">System Management</h4>
              <p>
                The System Management module provides tools for administering the ERP system, including user management,
                role-based access control, system configuration, data backup and recovery, integration management, and
                system health monitoring. It ensures the system remains secure, optimized, and aligned with business
                processes.
              </p>
              <p className="mt-2">Key components include:</p>
              <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                <li>
                  <span className="font-medium">User Management:</span> Create, modify, and deactivate user accounts;
                  assign roles and permissions; manage authentication methods.
                </li>
                <li>
                  <span className="font-medium">Monitoring and Logs:</span> Track system performance, user activities,
                  error logs, and security events; set up alerts for critical issues.
                </li>
                <li>
                  <span className="font-medium">Configuration:</span> Customize system settings, workflows, templates,
                  and business rules to match your specific requirements.
                </li>
                <li>
                  <span className="font-medium">Integration Management:</span> Configure and monitor integrations with
                  third-party systems such as e-commerce platforms, payment gateways, and shipping services.
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium">Analytics and Reporting</h4>
              <p>
                The Analytics module provides comprehensive business intelligence capabilities, including standard
                reports, custom report generation, dashboards, KPI tracking, trend analysis, and predictive analytics.
                It helps transform raw data into actionable insights for strategic decision-making.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mt-8">System Integration</h3>
          <p>Nubras ERP is designed as an integrated system where all modules work together seamlessly. For example:</p>
          <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
            <li>
              When a new order is created in the POS module, it automatically creates a project in the Project
              Management module, reserves materials in the Inventory module, and creates financial entries in the
              Finance module.
            </li>
            <li>
              Manufacturing processes update inventory levels in real-time, trigger procurement workflows when materials
              run low, and provide data for cost analysis in the Finance module.
            </li>
            <li>
              HR module integrates with Manufacturing for resource allocation, with Finance for payroll processing, and
              with Project Management for skill-based task assignment.
            </li>
            <li>
              System Management provides centralized control over all modules, ensuring data consistency, security, and
              performance across the entire system.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8">Tailoring Industry Specialization</h3>
          <p>
            What sets Nubras ERP apart is its deep specialization for the tailoring industry, with features such as:
          </p>
          <ul className="list-disc list-inside ml-4 space-y-2 mt-2">
            <li>Comprehensive measurement management with support for different measurement systems and body types</li>
            <li>Cultural customization tools for region-specific designs and preferences</li>
            <li>AR preview generation to show clients how the final garment will look</li>
            <li>Specialized material management for fabrics, trims, and accessories</li>
            <li>Production workflows designed specifically for tailoring operations</li>
            <li>Integration with body scanning technologies for precise measurements</li>
          </ul>

          <h3 className="text-xl font-semibold mt-8">Getting Started</h3>
          <p>To begin using Nubras ERP, we recommend following these steps:</p>
          <ol className="list-decimal list-inside ml-4 space-y-2 mt-2">
            <li>
              Review the{" "}
              <Link href="/installation" className="text-primary hover:underline">
                Installation Guide
              </Link>{" "}
              to set up the system
            </li>
            <li>Configure the core modules based on your business requirements</li>
            <li>Import your existing data using the data migration tools</li>
            <li>Train your staff on the relevant modules</li>
            <li>
              Start with essential workflows and gradually expand usage as your team becomes familiar with the system
            </li>
          </ol>

          <p className="mt-6">
            This documentation provides detailed information on all aspects of the Nubras ERP system, from installation
            and configuration to daily operations and advanced features. Use the navigation menu to explore specific
            modules and functionalities.
          </p>
        </section>
      </div>
    </div>
  )
}
