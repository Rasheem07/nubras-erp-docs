import { Tag, Link2, Search, BarChart, Database, ShoppingBag, Palette } from "lucide-react"
import { DocsPagination } from "@/components/docs-pagination"

export default function CatalogDocumentation() {

  return (
    <div className="p-6 max-w-full">
      <h1 className="text-2xl font-semibold mb-3">Product Catalog</h1>
      <p className="text-sm text-muted-foreground mb-6">Manage your product offerings and organize your merchandise</p>

      <div className="text-sm">
        <p className="mb-4">
          The <strong>Product Catalog</strong> is the central repository for all your merchandise information. It
          provides a structured way to organize, categorize, and present your products to both staff and customers,
          ensuring consistent product information across all sales channels.
        </p>

        <div className="my-6 border rounded-lg overflow-hidden bg-gray-50 p-4">
          <div className="h-48 bg-white rounded border shadow-sm p-3">
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <div className="font-medium">Product Catalog</div>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
              </div>
            </div>
            <div className="text-xs">
              <div className="flex justify-between border-b pb-1 mb-2 font-medium">
                <div className="w-1/4">Product</div>
                <div className="w-1/6">Category</div>
                <div className="w-1/6">Price</div>
                <div className="w-1/6">Status</div>
                <div className="w-1/4">Actions</div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="w-1/4">Premium Wool Suit</div>
                  <div className="w-1/6">Suits</div>
                  <div className="w-1/6">SAR 2,500</div>
                  <div className="w-1/6">
                    <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-[10px]">Active</span>
                  </div>
                  <div className="w-1/4 flex space-x-1">
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-1/4">Egyptian Cotton Shirt</div>
                  <div className="w-1/6">Shirts</div>
                  <div className="w-1/6">SAR 350</div>
                  <div className="w-1/6">
                    <span className="px-2 py-0.5 rounded-full bg-green-100 text-green-800 text-[10px]">Active</span>
                  </div>
                  <div className="w-1/4 flex space-x-1">
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-1/4">Silk Tie Collection</div>
                  <div className="w-1/6">Accessories</div>
                  <div className="w-1/6">SAR 180</div>
                  <div className="w-1/6">
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[10px]">Featured</span>
                  </div>
                  <div className="w-1/4 flex space-x-1">
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                    <div className="w-4 h-4 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">How the Catalog System Works</h2>

        <div className="border rounded-lg p-4 mb-6 bg-gray-50">
          <p className="mb-3">
            The catalog system uses a <strong>hierarchical data structure</strong> to organize products with rich
            metadata and flexible categorization:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex">
              <Database className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">Product Information Architecture</h3>
                <p className="text-xs text-muted-foreground">
                  The catalog uses a <strong>multi-level data model</strong> that separates core product information
                  from variants, pricing, and inventory. This allows a single product to have multiple variations (size,
                  color, material) while maintaining consistent branding, descriptions, and categorization. The system
                  supports inheritance of attributes from parent categories to products, reducing data entry and
                  ensuring consistency.
                </p>
              </div>
            </div>

            <div className="flex">
              <Tag className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">Categorization System</h3>
                <p className="text-xs text-muted-foreground">
                  Products are organized in a <strong>flexible category hierarchy</strong> that can be up to 5 levels
                  deep. Categories can have custom attributes that are inherited by all products within them. The system
                  supports both hierarchical categories (e.g., Clothing &gt; Suits &gt; Formal Suits) and tag-based
                  categorization for cross-cutting concerns (e.g., "New Arrivals", "Sale Items", "Seasonal Collection").
                </p>
              </div>
            </div>

            <div className="flex">
              <Search className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">Search and Discovery</h3>
                <p className="text-xs text-muted-foreground">
                  The catalog includes a <strong>powerful search engine</strong> with support for full-text search,
                  faceted filtering, and relevance ranking. The search index is automatically updated whenever products
                  are modified. The system supports synonym mapping (e.g., "jacket" and "blazer") and can handle
                  misspellings and partial matches to improve findability.
                </p>
              </div>
            </div>

            <div className="flex">
              <BarChart className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium mb-1">Analytics Integration</h3>
                <p className="text-xs text-muted-foreground">
                  The catalog tracks <strong>product performance metrics</strong> including view counts, conversion
                  rates, and revenue generation. These analytics help identify popular products, optimize merchandising,
                  and inform purchasing decisions. The system can generate reports on category performance, seasonal
                  trends, and product lifecycle stages.
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
              <h3 className="text-sm font-medium">Product Information Management</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              <strong>Bi-directional synchronization</strong> with central PIM system.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Master product data shared across channels</li>
              <li>• Rich media assets (images, videos) distribution</li>
              <li>• Attribute mapping and transformation</li>
              <li>• Multi-language support for global operations</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <div className="flex items-center mb-2">
              <ShoppingBag className="h-4 w-4 text-green-500 mr-2" />
              <h3 className="text-sm font-medium">E-Commerce Platform</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              <strong>Seamless product publishing</strong> to online channels.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• Automated product publishing workflows</li>
              <li>• Real-time inventory synchronization</li>
              <li>• Channel-specific pricing and promotions</li>
              <li>• SEO metadata management for online visibility</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <div className="flex items-center mb-2">
              <Palette className="h-4 w-4 text-blue-500 mr-2" />
              <h3 className="text-sm font-medium">Digital Asset Management</h3>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              <strong>Centralized media library</strong> for product assets.
            </p>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>• High-resolution image management</li>
              <li>• Automatic image optimization for different channels</li>
              <li>• Video and 3D model support for rich product visualization</li>
              <li>• Version control and usage rights management</li>
            </ul>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Catalog Management Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Product Information Management</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>
                • <strong>Comprehensive product attributes</strong> (name, description, specifications)
              </li>
              <li>• Multi-language support for global operations</li>
              <li>• Rich text formatting for detailed descriptions</li>
              <li>• Custom attribute sets for different product types</li>
              <li>• Bulk editing capabilities for efficient management</li>
              <li>• Version history and change tracking</li>
              <li>• Product relationship management (upsells, cross-sells, alternatives)</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Media Management</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>
                • <strong>Multiple image support</strong> with automatic processing
              </li>
              <li>• 360-degree product views for immersive experience</li>
              <li>• Video integration for product demonstrations</li>
              <li>• Zoom and detail view capabilities</li>
              <li>• Color swatch management for variant visualization</li>
              <li>• Bulk image import and processing</li>
              <li>• Image tagging and organization</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Category Management</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>
                • <strong>Hierarchical category structure</strong> with unlimited depth
              </li>
              <li>• Category-specific attributes and templates</li>
              <li>• Dynamic category assignment based on product attributes</li>
              <li>• Category merchandising and sorting options</li>
              <li>• Category-level promotions and pricing rules</li>
              <li>• Visual category navigation for staff</li>
              <li>• Category performance analytics</li>
            </ul>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Product Discovery</h3>
            <ul className="text-xs space-y-1 text-muted-foreground">
              <li>
                • <strong>Advanced search capabilities</strong> with filters and facets
              </li>
              <li>• Barcode and SKU scanning for quick lookup</li>
              <li>• Recently viewed products for quick access</li>
              <li>• Saved searches and favorites for staff efficiency</li>
              <li>• Similar product recommendations</li>
              <li>• Voice search support for hands-free operation</li>
              <li>• Search analytics to improve findability</li>
            </ul>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Technical Architecture</h2>

        <div className="border rounded p-4 mb-6 bg-gray-50">
          <p className="mb-3">
            The catalog system is built on a <strong>scalable architecture</strong> designed to handle large product
            catalogs with complex relationships:
          </p>

          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-1">Data Layer</h3>
              <p className="text-xs text-muted-foreground">
                Product data is stored in a flexible schema that supports both structured attributes (price, SKU, size)
                and unstructured content (descriptions, features). The database uses a combination of relational tables
                for core product data and NoSQL storage for extensible attributes. This hybrid approach provides both
                data integrity and flexibility for different product types.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-1">Search Infrastructure</h3>
              <p className="text-xs text-muted-foreground">
                The catalog uses a dedicated search engine with inverted indexes for fast full-text search. The search
                system supports multiple languages, synonyms, and fuzzy matching for typo tolerance. Search indexes are
                updated in real-time when products are modified, ensuring that search results always reflect the latest
                catalog state.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-1">Caching Layer</h3>
              <p className="text-xs text-muted-foreground">
                To ensure fast catalog browsing, the system implements a multi-level caching strategy. Frequently
                accessed catalog pages, category listings, and product details are cached at the application level.
                Dynamic elements like inventory status and personalized content are loaded asynchronously to maintain
                performance while ensuring accuracy.
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-1">Integration Framework</h3>
              <p className="text-xs text-muted-foreground">
                The catalog exposes APIs for integration with other systems, supporting both real-time (REST/GraphQL)
                and batch (import/export) operations. The integration layer includes data validation, transformation,
                and mapping capabilities to ensure data quality when exchanging information with external systems.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Detailed Catalog Workflows</h2>

        <div className="space-y-6 mb-6">
          <div className="border rounded-lg overflow-hidden">
            <div className="bg-purple-50 p-3 border-b border-purple-100">
              <h3 className="text-sm font-medium text-purple-800">Workflow: Creating a New Product</h3>
            </div>
            <div className="p-3">
              <div className="text-xs space-y-3">
                <ol className="list-decimal pl-4 space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">Navigate to Catalog</span>
                    <p>Click "Catalog" in the main navigation, then select "Add New Product".</p>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">System Action:</span> The system loads the product creation
                      interface and initializes a new product record. It prepares the form with default values based on
                      system settings and loads available categories, attributes, and templates.
                    </div>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Select Product Type</span>
                    <p>Choose the appropriate product type (e.g., "Ready-Made Garment", "Custom Product", "Fabric").</p>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">System Action:</span> The form dynamically updates to show fields
                      and options relevant to the selected product type. Each product type has a specific attribute set
                      and behavior in the system.
                    </div>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Enter Basic Information</span>
                    <p>Fill in the essential product details:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>
                        Name: <strong>Premium Wool Suit</strong>
                      </li>
                      <li>SKU: SUIT-PREMIUM-001</li>
                      <li>Description: Luxurious wool suit crafted with premium Italian fabric</li>
                      <li>Short Description: Premium Italian wool suit</li>
                      <li>Status: Active</li>
                    </ul>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Assign Categories</span>
                    <p>Select the appropriate categories for the product:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>Primary Category: Suits &gt; Formal Suits</li>
                      <li>Additional Categories: Premium Collection, Business Attire</li>
                    </ul>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">System Action:</span> The system associates the product with the
                      selected categories and inherits any category-specific attributes. It also updates category
                      product counts and refreshes category caches.
                    </div>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Configure Product Attributes</span>
                    <p>Fill in the product-specific attributes:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>Material: 100% Wool</li>
                      <li>Origin: Italy</li>
                      <li>Weight: 280g/m²</li>
                      <li>Care Instructions: Dry clean only</li>
                      <li>Features: Fully lined, Double vent, Notch lapel</li>
                    </ul>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Set Up Variants</span>
                    <p>Configure product variants if applicable:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>Size: 48, 50, 52, 54, 56</li>
                      <li>Color: Navy, Charcoal, Black</li>
                    </ul>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">System Action:</span> The system generates a matrix of all possible
                      combinations (15 variants) and creates individual SKUs for each. It prepares the interface for
                      variant-specific pricing and inventory management.
                    </div>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Upload Product Images</span>
                    <p>Add high-quality images for the product:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>Main Product Image (front view)</li>
                      <li>Additional Images (back, side, detail views)</li>
                      <li>Color Variant Images (one set per color)</li>
                    </ul>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">System Action:</span> The system processes uploaded images, creating
                      multiple sizes for different display contexts (thumbnail, listing, detail, zoom). It associates
                      images with specific variants based on metadata or manual assignment.
                    </div>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Set Pricing Information</span>
                    <p>Configure the product pricing:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>
                        Base Price: <strong>SAR 2,500</strong>
                      </li>
                      <li>Cost Price: SAR 1,200</li>
                      <li>Special Price: SAR 2,200 (optional promotional price)</li>
                      <li>Special Price Period: 01/06/2023 - 30/06/2023</li>
                      <li>Tax Class: Standard Rate (15%)</li>
                    </ul>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">System Action:</span> The system calculates and stores various price
                      points including profit margins, tax-inclusive prices, and promotional prices. It schedules any
                      time-based price changes for automatic application.
                    </div>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Configure Inventory Settings</span>
                    <p>Set up inventory management for the product:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>Manage Stock: Yes</li>
                      <li>Initial Stock: Set per variant (e.g., Navy/50: 5 units)</li>
                      <li>Low Stock Threshold: 2 units</li>
                      <li>Backorders: Allow with notification</li>
                    </ul>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Set Up Related Products</span>
                    <p>Configure product relationships:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>Upsell Products: Premium Wool Suit with Waistcoat</li>
                      <li>Cross-sell Products: Dress Shirts, Silk Ties, Leather Belts</li>
                      <li>Related Products: Similar style suits in different materials</li>
                    </ul>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">System Action:</span> The system creates bi-directional
                      relationships between products, enabling contextual recommendations in the POS interface and
                      online store.
                    </div>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Save and Publish</span>
                    <p>Review all information and click "Save" or "Save and Publish".</p>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">System Action:</span> The system performs the following operations:
                      <ol className="list-decimal pl-4 mt-1">
                        <li>Validates all required fields and data formats</li>
                        <li>Creates the main product record and all variant records</li>
                        <li>Processes and associates all uploaded images</li>
                        <li>Updates inventory records for initial stock</li>
                        <li>Indexes the product for search</li>
                        <li>Updates category product counts</li>
                        <li>Publishes the product to selected sales channels if "Save and Publish" was selected</li>
                        <li>Logs the product creation in the audit trail</li>
                      </ol>
                    </div>
                  </li>
                </ol>

                <div className="bg-green-50 border border-green-100 rounded p-2 flex">
                  <div>
                    <span className="font-medium text-green-800">Result:</span> The new product is now available in your
                    catalog. It can be searched, browsed by category, and added to sales transactions. The product
                    appears in catalog listings and is available for selection in the POS interface.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="bg-purple-50 p-3 border-b border-purple-100">
              <h3 className="text-sm font-medium text-purple-800">Workflow: Creating a Seasonal Collection</h3>
            </div>
            <div className="p-3">
              <div className="text-xs space-y-3">
                <p>
                  This workflow demonstrates how to create and manage a seasonal collection that groups related products
                  together:
                </p>

                <ol className="list-decimal pl-4 space-y-2 text-muted-foreground">
                  <li>
                    <span className="font-medium text-foreground">Navigate to Catalog Management</span>
                    <p>Go to Catalog &gt; Collections &gt; Create New Collection.</p>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Set Up Collection Details</span>
                    <p>Enter the collection information:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>
                        Name: <strong>Summer 2023 Collection</strong>
                      </li>
                      <li>Code: SUMMER-2023</li>
                      <li>Description: Lightweight fabrics and styles for the summer season</li>
                      <li>Active Period: 01/04/2023 - 31/08/2023</li>
                      <li>Status: Active</li>
                    </ul>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">System Action:</span> The system creates a new collection entity and
                      prepares it for product assignment. Collections can be time-bound, automatically activating and
                      deactivating based on the specified date range.
                    </div>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Upload Collection Assets</span>
                    <p>Add visual assets for the collection:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>Collection Banner Image</li>
                      <li>Collection Logo or Icon</li>
                      <li>Promotional Images</li>
                    </ul>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Assign Products to Collection</span>
                    <p>There are multiple ways to add products to the collection:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>
                        <strong>Manual Selection:</strong> Browse or search for products and add them individually
                      </li>
                      <li>
                        <strong>Bulk Import:</strong> Upload a CSV file with product SKUs to add
                      </li>
                      <li>
                        <strong>Rule-Based Assignment:</strong> Create rules to automatically include products based on
                        attributes (e.g., all products with "Summer" tag or "Linen" material)
                      </li>
                    </ul>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">System Action:</span> The system creates associations between the
                      collection and selected products. For rule-based assignments, it evaluates all products against
                      the defined criteria and creates dynamic associations that will automatically update as products
                      are added or modified.
                    </div>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Set Collection-Specific Pricing</span>
                    <p>Optionally configure special pricing for the collection:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>Discount Type: Percentage (10%)</li>
                      <li>Apply To: All products in collection</li>
                      <li>Discount Period: Same as collection active period</li>
                    </ul>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">System Action:</span> The system creates collection-specific price
                      rules that will be applied when calculating product prices. These rules can override individual
                      product pricing during the specified period.
                    </div>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Configure Collection Display</span>
                    <p>Set up how the collection appears in the POS and other channels:</p>
                    <ul className="list-disc pl-4 mt-1">
                      <li>Display Priority: 10 (higher numbers appear first)</li>
                      <li>Featured: Yes</li>
                      <li>Display in Navigation: Yes</li>
                      <li>Product Sort Order: Newest First</li>
                    </ul>
                  </li>

                  <li>
                    <span className="font-medium text-foreground">Save and Activate</span>
                    <p>Review all settings and click "Save" to create the collection.</p>
                    <div className="bg-gray-50 border rounded p-2 mt-1">
                      <span className="font-medium">System Action:</span> The system finalizes the collection creation
                      process:
                      <ol className="list-decimal pl-4 mt-1">
                        <li>Creates the collection record with all specified settings</li>
                        <li>Processes and associates all uploaded images</li>
                        <li>Establishes product associations based on manual selection and rules</li>
                        <li>Sets up any collection-specific pricing rules</li>
                        <li>Updates the navigation and search indexes to include the new collection</li>
                        <li>
                          Schedules automatic activation/deactivation based on the specified date range (if applicable)
                        </li>
                      </ol>
                    </div>
                  </li>
                </ol>

                <div className="bg-green-50 border border-green-100 rounded p-2 flex">
                  <div>
                    <span className="font-medium text-green-800">Result:</span> The new collection is now available in
                    the system. Products in the collection are grouped together for easy browsing and can have special
                    pricing applied. The collection appears in navigation menus and can be featured in promotional
                    areas. As new products matching the collection rules are added to the catalog, they will
                    automatically become part of the collection.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Managing the Catalog</h2>

        <div className="space-y-4 mb-6">
          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-2">Bulk Operations</h3>
            <div className="text-xs space-y-2">
              <p>
                The catalog system supports efficient <strong>bulk operations</strong> for managing large product sets:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                <li>
                  <strong>Bulk Import/Export:</strong> Update multiple products via CSV or Excel files
                </li>
                <li>
                  <strong>Bulk Attribute Updates:</strong> Change specific attributes across multiple products
                </li>
                <li>
                  <strong>Bulk Category Assignment:</strong> Move or copy products between categories
                </li>
                <li>
                  <strong>Bulk Status Changes:</strong> Activate, deactivate, or archive multiple products
                </li>
                <li>
                  <strong>Bulk Price Updates:</strong> Apply percentage or fixed amount changes to product prices
                </li>
              </ul>
              <div className="bg-gray-50 border rounded p-2 mt-2">
                <span className="font-medium">How it works:</span> Bulk operations are processed as background jobs to
                prevent system slowdowns. The system validates all changes before applying them and provides detailed
                logs of all modifications. For critical operations like price changes, a preview and confirmation step
                is required before changes are applied.
              </div>
            </div>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-2">Product Lifecycle Management</h3>
            <div className="text-xs space-y-2">
              <p>
                The catalog system includes tools for managing the <strong>complete product lifecycle</strong>:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                <li>
                  <strong>New Product Introduction:</strong> Workflow for adding new products with approval steps
                </li>
                <li>
                  <strong>Product Updates:</strong> Version control for tracking changes to product information
                </li>
                <li>
                  <strong>Product Retirement:</strong> Process for phasing out discontinued products
                </li>
                <li>
                  <strong>Archiving:</strong> Moving inactive products to archive storage while preserving history
                </li>
              </ul>
              <div className="bg-gray-50 border rounded p-2 mt-2">
                <span className="font-medium">Lifecycle Statuses:</span>
                <ul className="pl-4 mt-1 space-y-1">
                  <li>
                    • <strong>Draft:</strong> Product is being created or edited, not visible to customers
                  </li>
                  <li>
                    • <strong>Pending Approval:</strong> Product is complete but awaiting review
                  </li>
                  <li>
                    • <strong>Active:</strong> Product is approved and available for sale
                  </li>
                  <li>
                    • <strong>Low Stock:</strong> Product is active but inventory is below threshold
                  </li>
                  <li>
                    • <strong>Out of Stock:</strong> Product is active but temporarily unavailable
                  </li>
                  <li>
                    • <strong>Discontinued:</strong> Product is no longer being produced but existing stock can be sold
                  </li>
                  <li>
                    • <strong>Archived:</strong> Product is completely removed from active catalog
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-2">Catalog Quality Assurance</h3>
            <div className="text-xs space-y-2">
              <p>
                The system includes tools for maintaining <strong>high-quality catalog data</strong>:
              </p>
              <ul className="list-disc pl-4 space-y-1 text-muted-foreground">
                <li>
                  <strong>Data Completeness Checks:</strong> Identify products with missing required attributes
                </li>
                <li>
                  <strong>Image Quality Verification:</strong> Ensure all products have appropriate images
                </li>
                <li>
                  <strong>Duplicate Detection:</strong> Find and merge duplicate product entries
                </li>
                <li>
                  <strong>Consistency Validation:</strong> Verify that related products have consistent information
                </li>
                <li>
                  <strong>SEO Optimization:</strong> Check and improve product metadata for search visibility
                </li>
              </ul>
              <div className="bg-gray-50 border rounded p-2 mt-2">
                <span className="font-medium">Quality Reports:</span> The system generates regular quality reports that
                highlight potential issues and improvement opportunities. These reports include data completeness
                scores, image coverage metrics, and specific recommendations for enhancing catalog quality.
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Advanced Catalog Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Dynamic Pricing</h3>
            <p className="text-xs text-muted-foreground mb-2">Flexible pricing rules based on various factors.</p>
            <div className="text-xs">
              <span className="font-medium">How it works:</span>
              <p className="mt-1 text-muted-foreground">
                The dynamic pricing engine allows you to create sophisticated pricing rules based on customer segments,
                purchase volume, time of day, season, inventory levels, and other factors. Prices can be automatically
                adjusted in real-time based on these rules, enabling personalized pricing and optimized margins.
              </p>
              <p className="mt-1 text-muted-foreground">
                The system supports tiered pricing, time-limited promotions, bundle pricing, and competitive price
                matching. All price calculations are logged for audit purposes, and historical pricing data is
                maintained for analysis.
              </p>
            </div>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Product Configurators</h3>
            <p className="text-xs text-muted-foreground mb-2">Interactive tools for custom product creation.</p>
            <div className="text-xs">
              <span className="font-medium">How it works:</span>
              <p className="mt-1 text-muted-foreground">
                Product configurators allow customers to create custom products by selecting from available options and
                components. The system manages the compatibility between different options, calculates pricing in
                real-time, and generates detailed specifications for production.
              </p>
              <p className="mt-1 text-muted-foreground">
                Configurators can include visual previews that update as options are selected, showing the customer how
                their choices affect the final product. The system validates configurations to ensure they are
                manufacturable and meet quality standards.
              </p>
            </div>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Personalization Engine</h3>
            <p className="text-xs text-muted-foreground mb-2">Tailored catalog views based on customer preferences.</p>
            <div className="text-xs">
              <span className="font-medium">How it works:</span>
              <p className="mt-1 text-muted-foreground">
                The personalization engine analyzes customer behavior, purchase history, and preferences to create
                tailored catalog views. It can prioritize products that match the customer's style preferences,
                highlight items in their preferred size or color, and suggest complementary products based on their
                wardrobe.
              </p>
              <p className="mt-1 text-muted-foreground">
                The system uses machine learning algorithms that continuously improve as more customer interaction data
                is collected. Personalization can be applied in both the POS interface for sales staff and in customer-
                facing digital channels.
              </p>
            </div>
          </div>

          <div className="border rounded p-3">
            <h3 className="text-sm font-medium mb-1">Visual Merchandising</h3>
            <p className="text-xs text-muted-foreground mb-2">Tools for creating compelling product presentations.</p>
            <div className="text-xs">
              <span className="font-medium">How it works:</span>
              <p className="mt-1 text-muted-foreground">
                Visual merchandising tools allow you to create curated product displays, featured collections, and
                thematic presentations. You can control product sorting, highlight specific items, and create visual
                stories that showcase your merchandise in the most appealing way.
              </p>
              <p className="mt-1 text-muted-foreground">
                The system supports drag-and-drop interfaces for arranging products, scheduling featured items, and
                creating seasonal displays. Performance metrics help you understand which merchandising strategies are
                most effective at driving engagement and sales.
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-lg font-medium mt-6 mb-3">Best Practices</h2>

        <div className="space-y-3 mb-6">
          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Consistent Product Information</h3>
            <p className="text-xs text-muted-foreground">
              Maintain <strong>standardized formats</strong> for product descriptions, specifications, and attributes.
            </p>
            <p className="text-xs mt-1 text-muted-foreground">
              Create templates for different product types to ensure all necessary information is captured consistently.
              Use style guides for product descriptions to maintain a consistent brand voice. Regularly audit product
              information for completeness and accuracy, especially for your best-selling items.
            </p>
          </div>

          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">High-Quality Images</h3>
            <p className="text-xs text-muted-foreground">
              Invest in <strong>professional product photography</strong> with consistent lighting, angles, and
              backgrounds.
            </p>
            <p className="text-xs mt-1 text-muted-foreground">
              Establish image standards including minimum resolution, aspect ratio, and file format. Include multiple
              views of each product (front, back, detail) to give customers a complete understanding. For color
              variants, ensure accurate color representation under standardized lighting conditions.
            </p>
          </div>

          <div className="border-b pb-2">
            <h3 className="text-sm font-medium">Logical Category Structure</h3>
            <p className="text-xs text-muted-foreground">
              Create an <strong>intuitive hierarchy</strong> that makes products easy to find.
            </p>
            <p className="text-xs mt-1 text-muted-foreground">
              Limit category depth to 3-4 levels to prevent navigation complexity. Use customer-centric naming that
              reflects how customers think about products rather than internal classifications. Regularly review
              category performance and adjust structure based on search and browsing patterns.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium">Regular Catalog Maintenance</h3>
            <p className="text-xs text-muted-foreground">
              Schedule <strong>periodic reviews</strong> to keep your catalog fresh and accurate.
            </p>
            <p className="text-xs mt-1 text-muted-foreground">
              Implement a regular maintenance schedule to review and update product information, remove discontinued
              items, and refresh seasonal collections. Use catalog quality reports to identify and address issues like
              missing images, incomplete descriptions, or inconsistent pricing. Archive products that haven't sold in
              12+ months to keep your active catalog focused and manageable.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 my-6 text-xs">
          <h3 className="text-sm font-medium text-blue-700 mb-1">Pro Tips</h3>
          <ul className="space-y-1 text-muted-foreground">
            <li>
              • Use <strong>product tags</strong> for flexible cross-category grouping (e.g., "Wedding Season",
              "Business Essentials")
            </li>
            <li>
              • Create <strong>product bundles</strong> to increase average order value (e.g., suit + shirt + tie
              combinations)
            </li>
            <li>
              • Implement <strong>A/B testing</strong> for product descriptions and images to optimize conversion rates
            </li>
            <li>
              • Use <strong>customer feedback</strong> to improve product information and address common questions
            </li>
            <li>
              • Leverage <strong>seasonal planning calendars</strong> to prepare catalog updates well in advance
            </li>
            <li>
              • Create <strong>staff training materials</strong> about new products to ensure knowledgeable customer
              service
            </li>
            <li>
              • Analyze <strong>search queries</strong> that yield no results to identify catalog gaps or terminology
              mismatches
            </li>
          </ul>
        </div>

        <DocsPagination prev={{href: "/pos", title: "pos"}} next={{href: "/pos", title: "pos"}} />
      </div>
    </div>
  )
}
