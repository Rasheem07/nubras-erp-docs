import { DocsPagination } from "@/components/docs-pagination"
import {
  AlertCircle,
  CheckCircle2,
  HelpCircle,
  Package,
  Database,
  Tag,
  BarChart,
  Link2,
  Wallet,
  UserCircle,
} from "lucide-react"

export default function ItemManagementDocumentation() {

  return (
    <div className="p-6 max-w-full">
      <h1 className="text-2xl font-semibold mb-3">Item Management</h1>
      <p className="text-sm text-muted-foreground mb-6">Effectively manage inventory items in the POS system</p>

      <div className="text-sm">
        <p className="mb-4">
          <strong>Proper item management</strong> ensures accurate inventory and smooth sales operations. This guide
          covers adding, editing, and managing items in your inventory with detailed workflows and technical
          explanations.
        </p>

        <div className="my-6 border rounded-lg overflow-hidden bg-gray-50 p-4">
          <div className="h-48 bg-white rounded border shadow-sm p-3">
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <div className="font-medium">Inventory Management</div>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </div>
            </div>
            <div className="text-xs">
              <div className="flex justify-between border-b pb-1 mb-2 font-medium">
                <div className="w-1/4">Item</div>
                <div className="w-1/6">Category</div>
                <div className="w-1/6">SKU</div>
                <div className="w-1/6">Stock</div>
                <div className="w-1/6">Price</div>
                <div className="w-1/6">Actions</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="w-1/4">Premium Wool - Navy</div>
                  <div className="w-1/6">Fabric</div>
                  <div className="w-1/6">FB-001</div>
                  <div className="w-1/6">45m</div>
                  <div className="w-1/6">SAR 120/m</div>
                  <div className="w-1/6 flex space-x-1">
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-1/4">Cotton Shirt - White</div>
                  <div className="w-1/6">Ready-made</div>
                  <div className="w-1/6">RM-042</div>
                  <div className="w-1/6">12</div>
                  <div className="w-1/6">SAR 250</div>
                  <div className="w-1/6 flex space-x-1">
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">How Item Management Works</h2>

        <div className="border rounded-lg p-4 mb-6 bg-gray-50">
          <p className="mb-3">
            The inventory item management system uses a <strong>hierarchical data structure</strong> to organize
            products and materials, with real-time tracking and integration with sales and purchasing:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex">
              <Package className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">Item Database Structure</h3>
                <p className="text-xs text-muted-foreground">
                  Each inventory item is stored with a <strong>unique SKU</strong>, category assignment, detailed
                  attributes, pricing information, and stock levels. Items can have parent-child relationships (e.g., a
                  shirt with multiple size/color variants). The database uses a normalized schema with separate tables
                  for base items, variants, pricing tiers, and inventory levels to optimize performance and data
                  integrity.
                </p>
              </div>
            </div>

            <div className="flex">
              <Database className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">Stock Level Tracking</h3>
                <p className="text-xs text-muted-foreground">
                  The system maintains <strong>real-time stock levels</strong> through automated updates from sales,
                  purchases, returns, and manual adjustments. For fabrics and materials sold by length, it tracks
                  partial quantities with precision. Stock movements are recorded in a transaction log with timestamps,
                  user IDs, and reference documents, enabling complete audit trails and historical analysis.
                </p>
              </div>
            </div>

            <div className="flex">
              <Tag className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">Pricing Engine</h3>
                <p className="text-xs text-muted-foreground">
                  Multiple <strong>pricing tiers</strong> can be configured for each item (retail, wholesale, VIP). The
                  system supports fixed pricing, variable pricing (by length/weight), and dynamic pricing based on
                  customer segments. Price calculations can include complex formulas with markup percentages, cost-plus
                  models, and time-based promotional rules. All price changes are versioned with effective dates.
                </p>
              </div>
            </div>

            <div className="flex">
              <BarChart className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">Analytics Integration</h3>
                <p className="text-xs text-muted-foreground">
                  The system tracks <strong>sales velocity</strong>, profit margins, and inventory turnover for each
                  item, providing insights for purchasing decisions and identifying top-performing products. Advanced
                  algorithms calculate optimal reorder points based on historical sales patterns, lead times, and
                  seasonality factors to minimize stockouts while optimizing inventory investment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Integration with Enterprise Systems</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="border rounded p-3">
            <div className="flex items-center mb-2">
              <Link2 className="h-4 w-4 text-purple-500 mr-2" />
              <h3 className="text-sm font-medium">Enterprise Inventory</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              <strong>Bi-directional synchronization</strong> with central inventory system.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Product master data shared across systems</li>
              <li>• Stock levels updated in real-time</li>
              <li>• Centralized catalog management</li>
              <li>• Multi-location inventory visibility</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <div className="flex items-center mb-2">
              <Wallet className="h-4 w-4 text-green-500 mr-2" />
              <h3 className="text-sm font-medium">Finance System</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              <strong>Financial data integration</strong> for accurate valuation.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Cost of goods sold (COGS) tracking</li>
              <li>• Inventory valuation methods (FIFO, LIFO, Average)</li>
              <li>• Asset management for fixed inventory</li>
              <li>• Automated journal entries for inventory transactions</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <div className="flex items-center mb-2">
              <UserCircle className="h-4 w-4 text-blue-500 mr-2" />
              <h3 className="text-sm font-medium">Purchasing System</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              <strong>Automated procurement</strong> based on inventory levels.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Reorder point triggers purchase requisitions</li>
              <li>• Vendor catalog integration</li>
              <li>• Purchase order generation</li>
              <li>• Receiving and quality control workflows</li>
            </ul>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Item Types</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Ready-Made Items</h3>
            <p className="text-xs text-muted-foreground">Pre-made garments for immediate purchase</p>
            <ul className="text-xs mt-2 space-y-1 text-muted-foreground">
              <li>
                • Tracked by <strong>size, color, quantity</strong>
              </li>
              <li>• Barcode support for quick scanning</li>
              <li>• Automatic inventory deduction at sale</li>
              <li>• Variant management for different attributes</li>
              <li>• Minimum stock level alerts</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Fabrics</h3>
            <p className="text-xs text-muted-foreground">Materials for custom tailoring</p>
            <ul className="text-xs mt-2 space-y-1 text-muted-foreground">
              <li>
                • Tracked by <strong>length/yardage</strong> with precision
              </li>
              <li>• Categorized by material type, weight, and pattern</li>
              <li>• Supports partial quantity sales (e.g., 2.5 meters)</li>
              <li>• Roll tracking with unique identifiers</li>
              <li>• Fabric width and usable area calculations</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Custom Items</h3>
            <p className="text-xs text-muted-foreground">Made-to-order garments</p>
            <ul className="text-xs mt-2 space-y-1 text-muted-foreground">
              <li>
                • <strong>Configurable options</strong> with component tracking
              </li>
              <li>• Linked to measurements and specifications</li>
              <li>• Custom pricing formulas based on components</li>
              <li>• Bill of materials generation</li>
              <li>• Production workflow integration</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Services</h3>
            <p className="text-xs text-muted-foreground">Alterations and tailoring services</p>
            <ul className="text-xs mt-2 space-y-1 text-muted-foreground">
              <li>
                • <strong>Fixed or variable pricing</strong> models
              </li>
              <li>• Time-based scheduling with resource allocation</li>
              <li>• Staff assignment based on skills</li>
              <li>• Service level agreement tracking</li>
              <li>• Material consumption tracking (if applicable)</li>
            </ul>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Technical Architecture</h2>

        <div className="border rounded p-4 mb-6 bg-gray-50">
          <p className="mb-3">
            The inventory management system is built on a <strong>multi-tier architecture</strong> that ensures data
            integrity, performance, and scalability:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-1">Data Layer</h3>
              <p className="text-xs text-muted-foreground">
                A relational database stores inventory data in normalized tables with foreign key relationships. The
                schema includes tables for items, categories, attributes, pricing, stock levels, and transactions.
                Indexes are optimized for common query patterns, and partitioning is used for large transaction tables
                to maintain performance.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-1">Business Logic Layer</h3>
              <p className="text-xs text-muted-foreground">
                Core inventory functions are implemented as services that enforce business rules, validate data, and
                maintain consistency. This layer includes stock calculation algorithms, pricing engines, and integration
                services. Transaction processing uses ACID-compliant operations to ensure data integrity during
                concurrent operations.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-1">API Layer</h3>
              <p className="text-xs text-muted-foreground">
                RESTful APIs provide standardized interfaces for inventory operations, enabling integration with POS
                terminals, e-commerce platforms, and other business systems. APIs support CRUD operations, bulk updates,
                and specialized functions like stock transfers and adjustments.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-1">User Interface Layer</h3>
              <p className="text-xs text-muted-foreground">
                The inventory management interface provides intuitive screens for item creation, stock management, and
                reporting. Advanced features include barcode generation, image management, and bulk operations. The UI
                adapts to different device types and screen sizes.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Detailed Item Management Workflows</h2>

        <div className="space-y-6 mb-6">
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-purple-50 p-3 border-b border-purple-100">
              <h3 className="text-sm font-medium text-purple-800">Workflow: Adding a New Fabric</h3>
            </div>
            <div className="p-3">
              <div className="text-xs space-y-3">
                <ol className="list-decimal pl-4 space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">Navigate to Inventory</span>
                    <p>Click "Inventory" in the main navigation or use shortcut Alt+I.</p>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">System Action:</span> The inventory management interface loads with
                      the current inventory list. The system performs a database query to retrieve active inventory
                      items with pagination for performance. Filter settings are applied based on user preferences.
                    </div>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Click "Add New Item"</span>
                    <p>Look for the "+" button at the top of the inventory page.</p>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">System Action:</span> The "Add New Item" form opens with empty
                      fields. The system initializes a new item object in memory and prepares form validation rules.
                      Default values are applied based on system settings.
                    </div>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Select Item Type</span>
                    <p>From the dropdown menu, select "Fabric".</p>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">System Action:</span> The form updates to show fabric-specific
                      fields like width, composition, and unit of measure. The system dynamically loads the appropriate
                      form components and validation rules for fabric items. Required fields are marked accordingly.
                    </div>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Enter Basic Information</span>
                    <p>Fill in the following details:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>
                        Name: <strong>Premium Wool - Navy</strong>
                      </li>
                      <li>SKU: FB-001 (or use auto-generate)</li>
                      <li>Category: Wool Fabrics</li>
                      <li>Subcategory: Premium</li>
                      <li>Description: High-quality navy wool fabric, suitable for suits and formal wear</li>
                    </ul>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Enter Fabric Specifications</span>
                    <p>Fill in the fabric-specific details:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>
                        Width: <strong>150cm</strong>
                      </li>
                      <li>Weight: 280g/m²</li>
                      <li>Composition: 100% Wool</li>
                      <li>Country of Origin: Italy</li>
                      <li>Care Instructions: Dry clean only</li>
                    </ul>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Set Pricing Information</span>
                    <p>Enter the pricing details:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>
                        Cost Price: <strong>SAR 90</strong> per meter
                      </li>
                      <li>
                        Retail Price: <strong>SAR 180</strong> per meter
                      </li>
                      <li>Minimum Order: 0.5 meters</li>
                      <li>Tax Rate: 15% (standard VAT)</li>
                    </ul>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">System Action:</span> The system calculates profit margin (50%) and
                      displays it for reference. It also validates that the retail price is greater than the cost price
                      and that the minimum order value is reasonable for the item type.
                    </div>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Set Inventory Levels</span>
                    <p>Enter the stock information:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>
                        Initial Stock: <strong>50 meters</strong>
                      </li>
                      <li>Reorder Point: 10 meters</li>
                      <li>Preferred Supplier: Milano Fabrics</li>
                      <li>Location: Main Store - Fabric Section</li>
                    </ul>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Upload Images</span>
                    <p>
                      Add at least one image of the fabric. You can add multiple images showing different angles or
                      details.
                    </p>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Save the Item</span>
                    <p>Click "Save" to add the fabric to your inventory.</p>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">System Action:</span> The system performs the following operations
                      in a transaction:
                      <ol className="list-decimal pl-4 mt-1">
                        <li>Validates all required fields and data formats</li>
                        <li>Checks for duplicate SKUs across the entire inventory</li>
                        <li>Creates a new item record in the items table</li>
                        <li>Adds fabric-specific attributes to the attributes table</li>
                        <li>Creates pricing records in the pricing table</li>
                        <li>Records the initial stock as an inventory receipt transaction</li>
                        <li>Processes and stores uploaded images with optimized versions</li>
                        <li>Updates inventory counts and valuation</li>
                        <li>Logs the item creation in the audit trail</li>
                      </ol>
                    </div>
                  </li>
                </ol>

                <div className="bg-green-50 border border-green-100 rounded p-2 flex">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-green-800">Result:</span> The new fabric is now available in your
                    inventory system. It can be searched, sold by length, and used in custom tailoring orders. The item
                    appears in inventory reports and is available for selection in sales transactions.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="bg-purple-50 p-3 border-b border-purple-100">
              <h3 className="text-sm font-medium text-purple-800">
                Workflow: Creating a Ready-Made Item with Variants
              </h3>
            </div>
            <div className="p-3">
              <div className="text-xs space-y-3">
                <p>This workflow demonstrates how to add a ready-made shirt with multiple size and color variants:</p>

                <ol className="list-decimal pl-4 space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">Navigate to Inventory and Add New Item</span>
                    <p>Open the inventory module and click "Add New Item".</p>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Select Item Type</span>
                    <p>Choose "Ready-Made Item" from the dropdown.</p>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">System Action:</span> The form updates to show fields relevant to
                      ready-made garments, including variant options. The system loads the variant attribute templates
                      defined in the system configuration, such as standard size charts and color palettes.
                    </div>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Enter Basic Information</span>
                    <p>Fill in the following details:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>
                        Name: <strong>Classic Cotton Dress Shirt</strong>
                      </li>
                      <li>SKU: RM-SHIRT-001 (parent SKU)</li>
                      <li>Category: Shirts</li>
                      <li>Subcategory: Dress Shirts</li>
                      <li>Description: Premium cotton dress shirt with button-down collar</li>
                    </ul>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Set Up Variant Attributes</span>
                    <p>Click "Add Variant Attributes" and select:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>Size (S, M, L, XL, XXL)</li>
                      <li>Color (White, Blue, Black)</li>
                    </ul>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">System Action:</span> The system generates a matrix of 15 possible
                      combinations (5 sizes × 3 colors). It creates a data structure that represents all possible
                      variants and prepares the UI to allow configuration of each combination. Each variant will inherit
                      properties from the parent item but can have specific overrides.
                    </div>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Configure Variants</span>
                    <p>For each variant, you can:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>Enable/disable specific combinations (e.g., if Black is not available in XXL)</li>
                      <li>Set unique SKUs (system will auto-generate if left blank)</li>
                      <li>Set different prices if needed (e.g., XXL costs 10% more)</li>
                      <li>Enter initial stock levels for each variant</li>
                    </ul>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Set Default Pricing</span>
                    <p>Enter the standard pricing that applies to most variants:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>
                        Cost Price: <strong>SAR 120</strong>
                      </li>
                      <li>
                        Retail Price: <strong>SAR 250</strong>
                      </li>
                      <li>Tax Rate: 15% (standard VAT)</li>
                    </ul>
                    <p>Then adjust any specific variants as needed (e.g., XXL at SAR 275).</p>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Set Inventory Levels</span>
                    <p>Enter initial stock for each variant. For example:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>White/M: 15 units</li>
                      <li>White/L: 20 units</li>
                      <li>Blue/M: 12 units</li>
                      <li>etc.</li>
                    </ul>
                    <p>
                      Set reorder points for each variant or use the bulk edit feature to set the same value for all.
                    </p>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Upload Images</span>
                    <p>
                      Add images for each color variant. The system will associate images with the appropriate variants.
                    </p>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Generate Barcodes</span>
                    <p>
                      Click "Generate Barcodes" to create unique barcodes for each variant, or enter your existing
                      barcode numbers.
                    </p>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">System Action:</span> The system generates and assigns unique
                      barcodes to each variant using a configurable format (e.g., prefix + SKU + checksum). These
                      barcodes are stored in the database and can be printed for labeling. The system validates that all
                      generated barcodes are unique across the entire inventory.
                    </div>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Save the Item</span>
                    <p>Click "Save" to add the shirt and all its variants to your inventory.</p>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">System Action:</span> The system performs a complex database
                      transaction that:
                      <ol className="list-decimal pl-4 mt-1">
                        <li>Creates the parent item record</li>
                        <li>Creates child records for each enabled variant</li>
                        <li>Establishes parent-child relationships in the database</li>
                        <li>Creates pricing records for each variant</li>
                        <li>Records initial stock levels as inventory receipts</li>
                        <li>Associates images with appropriate variants</li>
                        <li>Stores barcode information for each variant</li>
                        <li>Updates inventory valuation</li>
                      </ol>
                    </div>
                  </li>
                </ol>

                <div className="bg-green-50 border border-green-100 rounded p-2 flex">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-green-800">Result:</span> The system creates a parent item with 15
                    child variants. In the POS interface, staff can select "Classic Cotton Dress Shirt" and then choose
                    the specific size and color when adding to a sale. The inventory system tracks stock for each
                    variant separately while maintaining the relationship to the parent item for reporting and
                    management.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="bg-purple-50 p-3 border-b border-purple-100">
              <h3 className="text-sm font-medium text-purple-800">Workflow: Creating a Custom Product Template</h3>
            </div>
            <div className="p-3">
              <div className="text-xs space-y-3">
                <p>This workflow shows how to create a template for custom products like a bespoke suit:</p>

                <ol className="list-decimal pl-4 space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">Navigate to Inventory</span>
                    <p>Open the inventory module and click "Add New Item".</p>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Select Item Type</span>
                    <p>Choose "Custom Product Template" from the dropdown.</p>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">System Action:</span> The form updates to show fields for custom
                      product templates, including component selection, customization options, and pricing formulas. The
                      system loads available materials and services that can be included in the template.
                    </div>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Enter Basic Information</span>
                    <p>Fill in the template details:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>
                        Name: <strong>Bespoke Three-Piece Suit</strong>
                      </li>
                      <li>SKU: CUSTOM-SUIT-3PC</li>
                      <li>Category: Custom Suits</li>
                      <li>Description: Custom three-piece suit with multiple fabric and style options</li>
                    </ul>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Define Material Requirements</span>
                    <p>Specify the materials needed:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>Primary Fabric: 3.5 meters (selectable from Wool, Cashmere, Linen categories)</li>
                      <li>Lining Fabric: 2 meters (selectable from Silk, Satin categories)</li>
                      <li>Buttons: 12 units (selectable from Premium Buttons category)</li>
                      <li>Interfacing: 1 meter (fixed, not customer-selectable)</li>
                    </ul>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">System Action:</span> The system creates a bill of materials
                      template with placeholders for customer-selected options. It validates that all required material
                      categories exist and have available items. The system also calculates the total material cost
                      range based on possible selections.
                    </div>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Define Style Options</span>
                    <p>Create customization options:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>Jacket Style: Single-breasted, Double-breasted</li>
                      <li>Lapel Type: Notch, Peak, Shawl</li>
                      <li>Vent Style: Single, Double, No vent</li>
                      <li>Pocket Style: Flap, Patch, Jetted</li>
                      <li>Trouser Style: Pleated, Flat-front</li>
                      <li>Waistcoat Style: Standard, Double-breasted</li>
                    </ul>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Set Up Pricing Formula</span>
                    <p>Create the pricing calculation:</p>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">Base Price:</span> SAR 1,200 (labor and basic components)
                      <br />
                      <span className="font-medium">+ Primary Fabric Cost:</span> [Fabric Price per Meter × 3.5]
                      <br />
                      <span className="font-medium">+ Lining Cost:</span> [Lining Price per Meter × 2]
                      <br />
                      <span className="font-medium">+ Button Cost:</span> [Button Price per Unit × 12]
                      <br />
                      <span className="font-medium">+ Style Adjustments:</span> Double-breasted (+SAR 200), Peak Lapel
                      (+SAR 100), etc.
                    </div>
                    <div className="bg-gray-50 border rounded p-2 mt-1 mt-2">
                      <span className="font-medium">System Action:</span> The system creates a dynamic pricing formula
                      that will calculate the final price based on customer selections. The formula is stored as a
                      structured data object that can be evaluated at order time. The system validates that the formula
                      references valid components and options.
                    </div>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Define Production Workflow</span>
                    <p>Set up the production stages:</p>
                    <ol className="list-decimal pl-4 mt-1">
                      <li>Measurement (1 day)</li>
                      <li>Pattern Creation (2 days)</li>
                      <li>Cutting (1 day)</li>
                      <li>Assembly (5 days)</li>
                      <li>First Fitting (1 day)</li>
                      <li>Adjustments (3 days)</li>
                      <li>Final Fitting (1 day)</li>
                      <li>Finishing (2 days)</li>
                    </ol>
                    <p>Total production time: 16 days</p>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Upload Reference Images</span>
                    <p>Add images showing different style options and finished examples.</p>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Save the Template</span>
                    <p>Click "Save" to add the custom product template to your inventory.</p>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">System Action:</span> The system saves the template with all its
                      components, options, pricing rules, and production workflow. Unlike standard inventory items, this
                      template doesn't have stock levels but serves as a blueprint for creating custom orders. The
                      template is now available for selection in the POS when creating custom orders.
                    </div>
                  </li>
                </ol>

                <div className="bg-green-50 border border-green-100 rounded p-2 flex">
                  <CheckCircle2 className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-green-800">Result:</span> When a customer orders a bespoke suit,
                    the sales staff can select this template, choose specific fabrics and style options, and the system
                    will automatically calculate the price, generate a detailed specification, create a production
                    workflow, and reserve the required materials from inventory.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Managing Existing Items</h2>

        <div className="space-y-4 mb-6">
          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-2">Updating Item Information</h3>
            <div className="text-xs space-y-2">
              <p>To update an existing item:</p>
              <ol className="list-decimal pl-4 space-y-1 text-muted-foreground">
                <li>Find the item in the inventory list</li>
                <li>Click the "Edit" icon (pencil) next to the item</li>
                <li>Make the necessary changes to any field</li>
                <li>Click "Save" to update the item</li>
              </ol>
              <div className="bg-gray-50 border rounded p-2 mt-2">
                <span className="font-medium">System Action:</span> When an item is updated, the system:
                <ol className="list-decimal pl-4 mt-1">
                  <li>Creates a new version of the item record</li>
                  <li>Maintains the previous version for historical reference</li>
                  <li>Updates related records as needed (pricing, attributes, etc.)</li>
                  <li>Logs the changes in the audit trail with user ID and timestamp</li>
                  <li>Updates search indexes and cache for the modified item</li>
                </ol>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded p-2 mt-2 flex">
                <AlertCircle className="h-4 w-4 text-amber-500 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-amber-800">Important:</span> Changing critical fields like SKU or
                  pricing will be logged in the system audit trail. Price changes will not affect existing orders but
                  will apply to new transactions. The system maintains a price history for reporting and analysis.
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-2">Adjusting Stock Levels</h3>
            <div className="text-xs space-y-2">
              <p>To manually adjust stock levels (e.g., after physical count):</p>
              <ol className="list-decimal pl-4 space-y-1 text-muted-foreground">
                <li>Find the item in the inventory list</li>
                <li>Click the "Stock" icon (box) next to the item</li>
                <li>Enter the new stock level or the adjustment amount</li>
                <li>Select an adjustment reason from the dropdown</li>
                <li>Add notes if needed for audit purposes</li>
                <li>Click "Apply Adjustment"</li>
              </ol>
              <div className="bg-gray-50 border rounded p-2 mt-2">
                <span className="font-medium">System Action:</span> The system creates an inventory adjustment
                transaction that:
                <ol className="list-decimal pl-4 mt-1">
                  <li>Records the previous and new stock levels</li>
                  <li>Calculates the difference and direction (increase/decrease)</li>
                  <li>Updates the current stock level</li>
                  <li>Recalculates inventory valuation if needed</li>
                  <li>Creates appropriate accounting entries for write-offs or additions</li>
                  <li>Logs the adjustment with user ID, timestamp, reason, and notes</li>
                </ol>
              </div>
              <div className="mt-2 p-2 border rounded bg-gray-50">
                <span className="font-medium">Example:</span> Current stock of Premium Wool - Navy shows 45m, but
                physical count reveals 42.5m. Enter -2.5m as adjustment with reason "Inventory Count Adjustment" and
                note "Physical count on May 15, 2023." The system will reduce the stock level and create a record of the
                adjustment for accounting and audit purposes.
              </div>
            </div>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-2">Discontinuing Items</h3>
            <div className="text-xs space-y-2">
              <p>When an item is no longer sold but you need to keep its history:</p>
              <ol className="list-decimal pl-4 space-y-1 text-muted-foreground">
                <li>Find the item in the inventory list</li>
                <li>Click the "Edit" icon next to the item</li>
                <li>Change the "Status" dropdown to "Discontinued"</li>
                <li>Set "Available for Sale" toggle to "No"</li>
                <li>Add a discontinuation date and reason</li>
                <li>Click "Save" to update the item</li>
              </ol>
              <div className="bg-gray-50 border rounded p-2 mt-2">
                <span className="font-medium">System Action:</span> The item remains in the database for historical
                reporting but won't appear in sales screens. The system:
                <ol className="list-decimal pl-4 mt-1">
                  <li>Updates the item status in the database</li>
                  <li>Removes the item from active product lists and search results</li>
                  <li>Maintains all historical data related to the item</li>
                  <li>Keeps the item visible in inventory reports with its discontinued status</li>
                  <li>Prevents the item from being added to new sales transactions</li>
                  <li>Allows existing orders containing the item to be processed normally</li>
                </ol>
              </div>
            </div>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-2">Transferring Stock Between Locations</h3>
            <div className="text-xs space-y-2">
              <p>To move inventory between store locations:</p>
              <ol className="list-decimal pl-4 space-y-1 text-muted-foreground">
                <li>Navigate to Inventory {">"} Stock Transfers</li>
                <li>Click "New Transfer"</li>
                <li>Select source and destination locations</li>
                <li>Add items and quantities to transfer</li>
                <li>Set transfer date and shipping method</li>
                <li>Click "Create Transfer"</li>
                <li>When items arrive at destination, click "Receive Transfer"</li>
                <li>Verify quantities and click "Complete Transfer"</li>
              </ol>
              <div className="bg-gray-50 border rounded p-2 mt-2">
                <span className="font-medium">System Action:</span> The system manages the transfer in stages:
                <ol className="list-decimal pl-4 mt-1">
                  <li>Creates a transfer document with pending status</li>
                  <li>Reduces stock at the source location (marked as "in transit")</li>
                  <li>When received, adds stock to the destination location</li>
                  <li>Handles any discrepancies between sent and received quantities</li>
                  <li>Maintains a complete audit trail of the transfer process</li>
                  <li>Updates inventory valuation at both locations</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Advanced Inventory Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Batch/Lot Tracking</h3>
            <p className="text-xs text-muted-foreground mb-2">Track items by production batch or lot number.</p>
            <div className="text-xs">
              <span className="font-medium">How it works:</span>
              <p className="mt-1 text-muted-foreground">
                For items that require batch tracking (e.g., dyes, chemicals), the system assigns a unique batch/lot
                number to each received shipment. This enables tracking of which specific batches were used in
                production or sold to customers, facilitating quality control and recalls if needed.
              </p>
              <p className="mt-1 text-muted-foreground">
                The system maintains expiration dates for applicable batches and can alert when items are approaching
                expiration. Inventory reports can show stock levels broken down by batch/lot.
              </p>
            </div>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Serial Number Tracking</h3>
            <p className="text-xs text-muted-foreground mb-2">Track individual items with unique serial numbers.</p>
            <div className="text-xs">
              <span className="font-medium">How it works:</span>
              <p className="mt-1 text-muted-foreground">
                For high-value items or equipment, the system can track individual units by serial number. When
                receiving inventory, serial numbers are recorded for each unit. During sales, the specific serial number
                is assigned to the customer, creating a complete chain of custody.
              </p>
              <p className="mt-1 text-muted-foreground">
                This feature is particularly useful for warranty management, service history tracking, and regulatory
                compliance for certain product types.
              </p>
            </div>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Automated Reordering</h3>
            <p className="text-xs text-muted-foreground mb-2">Intelligent inventory replenishment system.</p>
            <div className="text-xs">
              <span className="font-medium">How it works:</span>
              <p className="mt-1 text-muted-foreground">
                The system analyzes historical sales data, current stock levels, lead times, and seasonality to
                automatically generate purchase recommendations. When stock falls below the calculated reorder point,
                the system can create draft purchase orders for review or automatically send them to approved suppliers.
              </p>
              <p className="mt-1 text-muted-foreground">
                Reorder calculations consider factors like minimum order quantities, economic order quantities, and
                supplier-specific terms to optimize inventory investment while preventing stockouts.
              </p>
            </div>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Inventory Forecasting</h3>
            <p className="text-xs text-muted-foreground mb-2">Predictive analytics for inventory planning.</p>
            <div className="text-xs">
              <span className="font-medium">How it works:</span>
              <p className="mt-1 text-muted-foreground">
                The system uses advanced algorithms to forecast future inventory needs based on historical sales
                patterns, growth trends, seasonal factors, and upcoming promotions. These forecasts help in planning
                purchases, production schedules, and cash flow requirements.
              </p>
              <p className="mt-1 text-muted-foreground">
                Forecasting models are continuously refined based on actual results, improving accuracy over time. The
                system provides confidence intervals for forecasts to help with risk assessment.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Troubleshooting Common Issues</h2>

        <div className="space-y-3 mb-6">
          <div className="border rounded p-3 flex">
            <HelpCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium mb-1">Issue: Duplicate SKU Error</h3>
              <p className="text-xs text-muted-foreground mb-2">
                When adding a new item, you receive "SKU already exists" error even though you don't see this SKU in
                your inventory.
              </p>
              <div className="text-xs">
                <span className="font-medium">Solution:</span> This can happen because:
                <ol className="list-decimal pl-4 mt-1 text-muted-foreground">
                  <li>The SKU exists in a different location/branch</li>
                  <li>The SKU belongs to a discontinued item</li>
                  <li>The SKU is used by a variant of another product</li>
                  <li>The SKU exists in the system but is hidden from your user role</li>
                </ol>
                <p className="mt-1">
                  Use the advanced search function with "Include Inactive Items" checked and search for the exact SKU.
                  If found, either use a different SKU or reactivate the existing item if appropriate. If you have
                  administrator access, you can also check the SKU history log to see if it was previously used and
                  when.
                </p>
              </div>
            </div>
          </div>

          <div className="border rounded p-3 flex">
            <HelpCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium mb-1">Issue: Stock Levels Don't Match Sales</h3>
              <p className="text-xs text-muted-foreground mb-2">
                Your system stock levels don't match what you physically count, even after accounting for recent sales.
              </p>
              <div className="text-xs">
                <span className="font-medium">Solution:</span> Check these common causes:
                <ol className="list-decimal pl-4 mt-1 text-muted-foreground">
                  <li>Incomplete receiving (items physically present but not entered in system)</li>
                  <li>Returns processed incorrectly (items returned but not added back to inventory)</li>
                  <li>Fabric cut for samples but not recorded as used</li>
                  <li>Items moved between locations without proper transfer documentation</li>
                  <li>Theft or loss (requires investigation)</li>
                  <li>Items reserved for orders but not yet physically allocated</li>
                  <li>Damaged items not properly written off</li>
                </ol>
                <p className="mt-1">
                  Run the "Inventory Discrepancy Report" to identify patterns and address systematic issues. This report
                  compares expected stock levels (based on all recorded transactions) with actual counted quantities and
                  highlights discrepancies above a configurable threshold. For ongoing accuracy, implement cycle
                  counting where different sections of inventory are counted on a rotating schedule.
                </p>
              </div>
            </div>
          </div>

          <div className="border rounded p-3 flex">
            <HelpCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium mb-1">Issue: Item Shows as Available but Can't Be Added to Sale</h3>
              <p className="text-xs text-muted-foreground mb-2">
                An item appears in inventory with positive stock but cannot be added to a sales transaction.
              </p>
              <div className="text-xs">
                <span className="font-medium">Solution:</span> Check these settings:
                <ol className="list-decimal pl-4 mt-1 text-muted-foreground">
                  <li>"Available for Sale" toggle might be set to "No"</li>
                  <li>The item might be reserved for another order</li>
                  <li>The item might be set as "Display Only" or "Sample"</li>
                  <li>The item might be restricted to certain customer types</li>
                  <li>The item might be location-restricted and you're in the wrong location</li>
                  <li>The item might be in a "quality hold" status pending inspection</li>
                  <li>The item might have a future release date that hasn't arrived yet</li>
                </ol>
                <p className="mt-1">
                  Edit the item and check the "Sales Restrictions" section to identify and correct the issue. The system
                  maintains a detailed log of status changes and restrictions, which can be reviewed in the item
                  history. If the item is reserved, you can view the associated orders to determine if the reservation
                  is still valid or can be released.
                </p>
              </div>
            </div>
          </div>

          <div className="border rounded p-3 flex">
            <HelpCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />
            <div>
              <h3 className="text-sm font-medium mb-1">Issue: Inventory Valuation Discrepancies</h3>
              <p className="text-xs text-muted-foreground mb-2">
                Inventory value in reports doesn't match financial records or expected values.
              </p>
              <div className="text-xs">
                <span className="font-medium">Solution:</span> Investigate these potential causes:
                <ol className="list-decimal pl-4 mt-1 text-muted-foreground">
                  <li>Different valuation methods being used across reports (FIFO vs. Average Cost)</li>
                  <li>Cost updates not properly applied to existing stock</li>
                  <li>Currency conversion issues for imported items</li>
                  <li>Incorrect cost entered during receiving</li>
                  <li>Write-downs or adjustments not properly recorded</li>
                  <li>System calculation errors in weighted average cost</li>
                </ol>
                <p className="mt-1">
                  Run the "Inventory Valuation Audit" report to identify specific items with unusual cost changes or
                  discrepancies. This report shows the transaction history affecting item costs and calculates expected
                  values based on documented receipts and adjustments. For significant discrepancies, a manual
                  reconciliation may be needed, followed by an adjusting entry approved by accounting.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Best Practices</h2>

        <div className="space-y-3 mb-6">
          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Consistent Naming</h3>
            <p className="text-xs text-muted-foreground">Use consistent naming conventions for easier searching:</p>
            <ul className="text-xs mt-1 text-muted-foreground">
              <li>
                • Fabrics: <strong>[Material] - [Color] - [Pattern]</strong>
              </li>
              <li>
                • Ready-made: <strong>[Type] - [Brand] - [Color]</strong>
              </li>
              <li>
                • Accessories: <strong>[Category] - [Type] - [Material]</strong>
              </li>
              <li>
                • Services: <strong>[Service Type] - [Complexity Level]</strong>
              </li>
            </ul>
            <p className="text-xs mt-1 text-muted-foreground">
              Consistent naming improves search accuracy, makes reports more readable, and helps staff quickly locate
              items. Consider creating a naming convention document for reference and training.
            </p>
          </div>

          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Regular Audits</h3>
            <p className="text-xs text-muted-foreground">
              Conduct <strong>weekly counts</strong> for high-value items and monthly counts for all inventory.
            </p>
            <p className="text-xs mt-1 text-muted-foreground">
              Implement a cycle counting system where different sections of inventory are counted on a rotating schedule
              rather than shutting down for a full physical inventory. This provides continuous verification while
              minimizing disruption to operations. Document all count procedures and reconciliation processes for
              consistency.
            </p>
          </div>

          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Detailed Descriptions</h3>
            <p className="text-xs text-muted-foreground">
              Include <strong>material composition, care instructions, and unique features</strong> in item
              descriptions.
            </p>
            <p className="text-xs mt-1 text-muted-foreground">
              Comprehensive descriptions help sales staff provide accurate information to customers, reduce returns due
              to misunderstandings, and ensure proper handling of materials. Use standardized templates for different
              product types to ensure all relevant information is captured consistently.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium">Data Backup and Security</h3>
            <p className="text-xs text-muted-foreground">
              Implement <strong>regular backups</strong> and strict access controls for inventory data.
            </p>
            <p className="text-xs mt-1 text-muted-foreground">
              Inventory data is a critical business asset that represents significant financial investment. Ensure that
              data is backed up daily, with backups stored securely off-site or in the cloud. Implement role-based
              access controls so staff can only view and modify inventory data relevant to their responsibilities.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 my-6 text-xs">
          <h3 className="text-sm font-medium text-blue-700 mb-1">Pro Tips</h3>
          <ul className="space-y-1 text-muted-foreground">
            <li>
              • Use <strong>barcode labels</strong> for all physical items to reduce data entry errors
            </li>
            <li>
              • Create item <strong>templates</strong> for similar items to speed up new product creation
            </li>
            <li>
              • Review <strong>slow-moving inventory</strong> monthly to identify candidates for promotions or clearance
            </li>
            <li>
              • Set up <strong>automatic reorder alerts</strong> based on lead time and sales velocity
            </li>
            <li>
              • Maintain <strong>digital images</strong> of all inventory items for reference and marketing use
            </li>
            <li>
              • Use <strong>location codes</strong> within your store to make items easier to find physically
            </li>
            <li>
              • Implement <strong>RFID technology</strong> for high-value items to streamline inventory counts
            </li>
          </ul>
        </div>

        <DocsPagination prev={{href: "/pos", title: "pos"}} next={{href: "/pos", title: "pos"}} />

      </div>
    </div>
  )
}
