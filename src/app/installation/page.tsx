import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2, Info, AlertTriangle, Server, Database, Globe } from "lucide-react"

export const metadata: Metadata = {
  title: "Installation | Nubras ERP Documentation",
  description: "Installation guide for Nubras ERP system",
}

export default function InstallationPage() {
  return (
    <div className="container py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Installation Guide</h1>
          <p className="text-xl text-muted-foreground">
            Complete guide to installing and configuring the Nubras ERP system for your tailoring business.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-8">
        <Tabs defaultValue="requirements">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="requirements">System Requirements</TabsTrigger>
            <TabsTrigger value="installation">Installation Steps</TabsTrigger>
            <TabsTrigger value="modules">Module Configuration</TabsTrigger>
            <TabsTrigger value="domains">Domain Setup</TabsTrigger>
          </TabsList>

          <TabsContent value="requirements" className="space-y-4 mt-6">
            <h2 className="text-2xl font-bold">System Requirements</h2>
            <p>Before installing Nubras ERP, ensure your system meets the following requirements:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <Server className="h-5 w-5 mr-2" />
                    Server Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-base">
                    <li>Web Server: Apache 2.4+ or Nginx 1.16+</li>
                    <li>PHP: Version 8.1 or higher</li>
                    <li>Memory: Minimum 4GB RAM (8GB recommended)</li>
                    <li>Storage: Minimum 20GB free space</li>
                    <li>Processor: Dual-core 2GHz or higher</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <Database className="h-5 w-5 mr-2" />
                    Database Requirements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-base">
                    <li>MySQL: Version 8.0 or higher</li>
                    <li>MariaDB: Version 10.5 or higher</li>
                    <li>PostgreSQL: Version 13 or higher</li>
                    <li>Database Storage: Minimum 10GB free space</li>
                    <li>Character Set: UTF-8</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Alert className="mt-4">
              <Info className="h-4 w-4" />
              <AlertTitle>Note</AlertTitle>
              <AlertDescription>
                These are minimum requirements. For optimal performance with multiple users, consider increasing RAM and
                processor specifications.
              </AlertDescription>
            </Alert>
          </TabsContent>

          <TabsContent value="installation" className="space-y-4 mt-6">
            <h2 className="text-2xl font-bold">Installation Steps</h2>
            <p>Follow these steps to install Nubras ERP on your server:</p>

            <div className="space-y-4 mt-4">
              <div className="border rounded-md p-4">
                <h3 className="text-lg font-medium mb-2">Step 1: Prepare Your Server</h3>
                <p className="text-base mb-2">
                  Ensure your server meets all the requirements and has the necessary software installed.
                </p>
                <div className="bg-muted p-3 rounded-md text-base font-mono">
                  # Update your system
                  <br />
                  sudo apt update && sudo apt upgrade -y
                  <br />
                  <br /># Install required packages
                  <br />
                  sudo apt install apache2 mysql-server php8.1 php8.1-mysql php8.1-mbstring php8.1-xml php8.1-curl
                  php8.1-zip php8.1-gd -y
                </div>
              </div>

              <div className="border rounded-md p-4">
                <h3 className="text-lg font-medium mb-2">Step 2: Download Nubras ERP</h3>
                <p className="text-base mb-2">
                  Download the latest version of Nubras ERP from the official website or repository.
                </p>
                <div className="bg-muted p-3 rounded-md text-base font-mono">
                  # Clone the repository
                  <br />
                  git clone https://github.com/nubras/erp.git /var/www/nubras-erp
                  <br />
                  <br /># Set proper permissions
                  <br />
                  sudo chown -R www-data:www-data /var/www/nubras-erp
                  <br />
                  sudo chmod -R 755 /var/www/nubras-erp
                </div>
              </div>

              <div className="border rounded-md p-4">
                <h3 className="text-lg font-medium mb-2">Step 3: Create Database</h3>
                <p className="text-base mb-2">Create a new database for Nubras ERP.</p>
                <div className="bg-muted p-3 rounded-md text-base font-mono">
                  # Access MySQL
                  <br />
                  sudo mysql -u root -p
                  <br />
                  <br /># Create database and user
                  <br />
                  CREATE DATABASE nubras_erp;
                  <br />
                  CREATE USER 'nubras_user'@'localhost' IDENTIFIED BY 'your_secure_password';
                  <br />
                  GRANT ALL PRIVILEGES ON nubras_erp.* TO 'nubras_user'@'localhost';
                  <br />
                  FLUSH PRIVILEGES;
                  <br />
                  EXIT;
                </div>
              </div>

              <div className="border rounded-md p-4">
                <h3 className="text-lg font-medium mb-2">Step 4: Configure Web Server</h3>
                <p className="text-base mb-2">Configure your web server to serve Nubras ERP.</p>
                <div className="bg-muted p-3 rounded-md text-base font-mono">
                  # Create Apache virtual host configuration
                  <br />
                  sudo nano /etc/apache2/sites-available/nubras-erp.conf
                  <br />
                  <br /># Add the following configuration
                  <br />
                  &lt;VirtualHost *:80&gt;
                  <br />
                  &nbsp;&nbsp;ServerName erp.yourdomain.com
                  <br />
                  &nbsp;&nbsp;DocumentRoot /var/www/nubras-erp/public
                  <br />
                  &nbsp;&nbsp;&lt;Directory /var/www/nubras-erp/public&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;AllowOverride All
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;Require all granted
                  <br />
                  &nbsp;&nbsp;&lt;/Directory&gt;
                  <br />
                  &nbsp;&nbsp;ErrorLog {"${APACHE_LOG_DIR}"}/nubras-erp-error.log
                  <br />
                  &nbsp;&nbsp;CustomLog {"${APACHE_LOG_DIR}"}/nubras-erp-access.log combined
                  <br />
                  &lt;/VirtualHost&gt;
                  <br />
                  <br /># Enable the site and restart Apache
                  <br />
                  sudo a2ensite nubras-erp.conf
                  <br />
                  sudo a2enmod rewrite
                  <br />
                  sudo systemctl restart apache2
                </div>
              </div>

              <div className="border rounded-md p-4">
                <h3 className="text-lg font-medium mb-2">Step 5: Run Installation Wizard</h3>
                <p className="text-base mb-2">Complete the installation using the web-based installation wizard.</p>
                <ol className="list-decimal list-inside text-base space-y-2">
                  <li>
                    Open your browser and navigate to <code>http://erp.yourdomain.com</code>
                  </li>
                  <li>Follow the on-screen instructions to complete the installation</li>
                  <li>Enter your database credentials when prompted</li>
                  <li>Create an administrator account</li>
                  <li>Configure basic system settings</li>
                </ol>
              </div>
            </div>

            <Alert className="mt-4" variant="default">
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                After completing these steps, Nubras ERP should be successfully installed and ready for module
                configuration.
              </AlertDescription>
            </Alert>
          </TabsContent>

          <TabsContent value="modules" className="space-y-4 mt-6">
            <h2 className="text-2xl font-bold">Module Configuration</h2>
            <p>After installing the core system, you need to configure each module according to your business needs:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Finance Module</CardTitle>
                  <CardDescription>Configure accounting and financial settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside text-base space-y-2">
                    <li>Navigate to System Settings {">"} Modules</li>
                    <li>Enable the Finance Module</li>
                    <li>Configure your Chart of Accounts</li>
                    <li>Set up tax rates and financial periods</li>
                    <li>Configure currency settings</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Inventory Module</CardTitle>
                  <CardDescription>Configure inventory and material management</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside text-base space-y-2">
                    <li>Navigate to System Settings &gt; Modules</li>
                    <li>Enable the Inventory Module</li>
                    <li>Set up inventory locations</li>
                    <li>Configure material categories</li>
                    <li>Set default units of measurement</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Project Management Module</CardTitle>
                  <CardDescription>Configure project and order management</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside text-base space-y-2">
                    <li>Navigate to System Settings &gt; Modules</li>
                    <li>Enable the Project Management Module</li>
                    <li>Configure project stages and statuses</li>
                    <li>Set up task categories</li>
                    <li>Configure project templates</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>POS Module</CardTitle>
                  <CardDescription>Configure point of sale operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside text-base space-y-2">
                    <li>Navigate to System Settings &gt; Modules</li>
                    <li>Enable the POS Module</li>
                    <li>Set up POS terminals</li>
                    <li>Configure payment methods</li>
                    <li>Set up receipt templates</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>HR Module</CardTitle>
                  <CardDescription>Configure human resources management</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside text-base space-y-2">
                    <li>Navigate to System Settings &gt; Modules</li>
                    <li>Enable the HR Module</li>
                    <li>Configure employee categories</li>
                    <li>Set up payroll settings</li>
                    <li>Configure attendance tracking</li>
                  </ol>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Customer Support Module</CardTitle>
                  <CardDescription>Configure customer support operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="list-decimal list-inside text-base space-y-2">
                    <li>Navigate to System Settings &gt; Modules</li>
                    <li>Enable the Customer Support Module</li>
                    <li>Configure ticket categories</li>
                    <li>Set up response templates</li>
                    <li>Configure knowledge base settings</li>
                  </ol>
                </CardContent>
              </Card>
            </div>

            <Alert className="mt-4" variant="default">
              <AlertTriangle className="h-4 w-4" />
              <AlertTitle>Important</AlertTitle>
              <AlertDescription>
                Each module requires specific configuration based on your business processes. Refer to the
                module-specific documentation for detailed configuration instructions.
              </AlertDescription>
            </Alert>
          </TabsContent>

          <TabsContent value="domains" className="space-y-4 mt-6">
            <h2 className="text-2xl font-bold">Domain Setup</h2>
            <p>For better organization and security, you can set up separate subdomains for each module:</p>

            <div className="space-y-4 mt-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 mr-2" />
                    Subdomain Configuration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-base mb-4">Configure the following subdomains for each module:</p>

                  <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border px-4 py-2 text-left">Module</th>
                          <th className="border px-4 py-2 text-left">Recommended Subdomain</th>
                          <th className="border px-4 py-2 text-left">Purpose</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border px-4 py-2">Main System</td>
                          <td className="border px-4 py-2">
                            <code>erp.yourdomain.com</code>
                          </td>
                          <td className="border px-4 py-2">Main dashboard and system access</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">Finance</td>
                          <td className="border px-4 py-2">
                            <code>finance.yourdomain.com</code>
                          </td>
                          <td className="border px-4 py-2">Financial management and accounting</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">Inventory</td>
                          <td className="border px-4 py-2">
                            <code>inventory.yourdomain.com</code>
                          </td>
                          <td className="border px-4 py-2">Inventory and material management</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">Project Management</td>
                          <td className="border px-4 py-2">
                            <code>projects.yourdomain.com</code>
                          </td>
                          <td className="border px-4 py-2">Project and order management</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">POS</td>
                          <td className="border px-4 py-2">
                            <code>pos.yourdomain.com</code>
                          </td>
                          <td className="border px-4 py-2">Point of sale operations</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">HR</td>
                          <td className="border px-4 py-2">
                            <code>hr.yourdomain.com</code>
                          </td>
                          <td className="border px-4 py-2">Human resources management</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">Customer Support</td>
                          <td className="border px-4 py-2">
                            <code>support.yourdomain.com</code>
                          </td>
                          <td className="border px-4 py-2">Customer support operations</td>
                        </tr>
                        <tr>
                          <td className="border px-4 py-2">System Admin</td>
                          <td className="border px-4 py-2">
                            <code>admin.yourdomain.com</code>
                          </td>
                          <td className="border px-4 py-2">System administration and configuration</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              <div className="border rounded-md p-4">
                <h3 className="text-lg font-medium mb-2">DNS Configuration</h3>
                <p className="text-base mb-2">Add the following DNS records to your domain:</p>
                <div className="bg-muted p-3 rounded-md text-base font-mono">
                  # A Records (replace 123.45.67.89 with your server IP)
                  <br />
                  erp.yourdomain.com. IN A 123.45.67.89
                  <br />
                  finance.yourdomain.com. IN A 123.45.67.89
                  <br />
                  inventory.yourdomain.com. IN A 123.45.67.89
                  <br />
                  projects.yourdomain.com. IN A 123.45.67.89
                  <br />
                  pos.yourdomain.com. IN A 123.45.67.89
                  <br />
                  hr.yourdomain.com. IN A 123.45.67.89
                  <br />
                  support.yourdomain.com. IN A 123.45.67.89
                  <br />
                  admin.yourdomain.com. IN A 123.45.67.89
                </div>
              </div>

              <div className="border rounded-md p-4">
                <h3 className="text-lg font-medium mb-2">Web Server Configuration</h3>
                <p className="text-base mb-2">Configure your web server to handle multiple subdomains:</p>
                <div className="bg-muted p-3 rounded-md text-base font-mono">
                  # Create separate virtual host files for each subdomain
                  <br />
                  sudo nano /etc/apache2/sites-available/finance.yourdomain.com.conf
                  <br />
                  <br /># Example configuration for finance subdomain
                  <br />
                  &lt;VirtualHost *:80&gt;
                  <br />
                  &nbsp;&nbsp;ServerName finance.yourdomain.com
                  <br />
                  &nbsp;&nbsp;DocumentRoot /var/www/nubras-erp/public
                  <br />
                  &nbsp;&nbsp;&lt;Directory /var/www/nubras-erp/public&gt;
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;AllowOverride All
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;Require all granted
                  <br />
                  &nbsp;&nbsp;&lt;/Directory&gt;
                  <br />
                  &nbsp;&nbsp;SetEnv NUBRAS_MODULE finance
                  <br />
                  &nbsp;&nbsp;ErrorLog {"${APACHE_LOG_DIR}"}/finance-error.log
                  <br />
                  &nbsp;&nbsp;CustomLog {"${APACHE_LOG_DIR}"}/finance-access.log combined
                  <br />
                  &lt;/VirtualHost&gt;
                  <br />
                  <br /># Repeat for each subdomain, changing the ServerName and NUBRAS_MODULE values
                </div>
              </div>

              <div className="border rounded-md p-4">
                <h3 className="text-lg font-medium mb-2">SSL Configuration</h3>
                <p className="text-base mb-2">Secure your subdomains with SSL certificates:</p>
                <div className="bg-muted p-3 rounded-md text-base font-mono">
                  # Install Certbot for Let's Encrypt certificates
                  <br />
                  sudo apt install certbot python3-certbot-apache -y
                  <br />
                  <br /># Obtain certificates for all subdomains
                  <br />
                  sudo certbot --apache -d erp.yourdomain.com -d finance.yourdomain.com -d inventory.yourdomain.com -d
                  projects.yourdomain.com -d pos.yourdomain.com -d hr.yourdomain.com -d support.yourdomain.com -d
                  admin.yourdomain.com
                </div>
              </div>
            </div>

            <Alert className="mt-4">
              <Info className="h-4 w-4" />
              <AlertTitle>Note</AlertTitle>
              <AlertDescription>
                Using separate subdomains provides better organization and security isolation between modules. However,
                it requires proper configuration of your web server and DNS settings.
              </AlertDescription>
            </Alert>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
