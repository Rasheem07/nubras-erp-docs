import type { Metadata } from "next"
import { DocsPagination } from "@/components/docs-pagination"

export const metadata: Metadata = {
  title: "Upcoming Features | Nubras ERP Documentation",
  description: "Documentation for upcoming features in Nubras ERP Projects module",
}

export default function UpcomingFeaturesDocumentation() {
  return (
    <div className="container py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl">Upcoming Features</h1>
          <p className="text-xl text-muted-foreground">
            Preview of exciting new features coming soon to the Projects module.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-8">
        <h2 className="text-2xl font-bold">AR Preview Generator</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Augmented Reality Garment Previews</h3>
            <p>
              The AR Preview Generator will allow you to create realistic 3D models of garments that clients can view in
              augmented reality before production begins:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Generate 3D models based on measurements and design specifications</li>
              <li>Visualize different fabric options and colors</li>
              <li>Show embellishment and detail options</li>
              <li>Allow clients to view the garment from all angles</li>
              <li>Enable virtual try-on using client photos or avatars</li>
              <li>Share previews via mobile app or web link</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Benefits of AR Previews</h3>
            <p>This feature will provide numerous benefits to your tailoring business:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Reduce revision requests by confirming design details before cutting</li>
              <li>Increase client confidence in custom orders</li>
              <li>Enable remote consultations with clients</li>
              <li>Showcase design options without creating physical samples</li>
              <li>Differentiate your business with cutting-edge technology</li>
              <li>Improve client satisfaction and reduce returns</li>
            </ul>
            <p className="mt-2 text-base text-muted-foreground">
              The AR Preview Generator is currently in beta testing and will be available in the next major release.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg mt-8">
            <h3 className="font-medium">How It Will Work</h3>
            <p className="text-base mt-2">
              "A client requests a custom kandura with specific embroidery. Instead of just describing the final
              product, you'll be able to create an AR preview showing exactly how it will look. You'll select the
              kandura style from the template library, apply the client's measurements, choose the fabric color and
              texture, and add the embroidery pattern. The system will generate a 3D model that the client can view on
              their smartphone, rotating it to see all angles and even seeing how it would look on their body using the
              virtual try-on feature. The client can request adjustments to the design, which you can update in
              real-time. Once the client approves the AR preview, you can proceed with production with confidence that
              the final product will meet their expectations."
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-6">Body Scanning Integration</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Digital Body Measurement</h3>
            <p>
              The Body Scanning Integration will allow you to capture precise client measurements using smartphone-based
              3D scanning technology:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Capture accurate measurements using smartphone cameras</li>
              <li>Generate comprehensive measurement profiles automatically</li>
              <li>Track client measurement changes over time</li>
              <li>Create custom patterns based on exact body measurements</li>
              <li>Reduce measurement errors and inconsistencies</li>
              <li>Enable remote measurement capture for clients who can't visit in person</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">How Body Scanning Works</h3>
            <p>The body scanning process is simple and efficient:</p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
              <li>Client stands in a neutral position</li>
              <li>Tailor or client uses the mobile app to capture a series of images</li>
              <li>The system processes the images to create a 3D model</li>
              <li>Measurements are automatically extracted from the 3D model</li>
              <li>Measurements are imported directly into the project</li>
              <li>The system can generate custom patterns based on these measurements</li>
            </ol>
            <p className="mt-2 text-base text-muted-foreground">
              Body Scanning Integration is currently in development and will be released in phases, starting with basic
              measurement extraction.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg mt-8">
            <h3 className="font-medium">Benefits for Tailoring Businesses</h3>
            <p className="text-base mt-2">
              "Traditional manual measurements can vary between tailors and are prone to human error. With the Body
              Scanning Integration, you'll be able to capture over 100 precise measurements in seconds, ensuring
              consistent results every time. For a wedding dress project, instead of taking 20-30 manual measurements,
              the client simply stands in position while you capture images with your smartphone. The system
              automatically extracts all necessary measurements, including those that are difficult to take manually,
              like shoulder slope or torso curvature. These precise measurements lead to better-fitting garments, fewer
              alterations, and higher client satisfaction. The system also stores the client's 3D model, making it easy
              to create new garments for them in the future without requiring new measurements."
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-6">WhatsApp Integration</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Client Communication via WhatsApp</h3>
            <p>
              The WhatsApp Integration will enable seamless communication with clients through their preferred messaging
              platform:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Send automated project status updates via WhatsApp</li>
              <li>Share AR previews and design options directly in chat</li>
              <li>Schedule fittings and appointments with confirmation</li>
              <li>Receive and respond to client queries</li>
              <li>Collect feedback and approvals</li>
              <li>Send payment reminders and invoices</li>
            </ul>
          </div>

          <div className="border rounded-lg p-4">
            <h3 className="text-xl font-semibold mb-2">Key Features</h3>
            <p>The WhatsApp Integration will include several powerful features:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>
                <span className="font-medium">Automated Notifications:</span> Preset messages for different project
                stages
              </li>
              <li>
                <span className="font-medium">Rich Media Sharing:</span> Send images, videos, and AR previews
              </li>
              <li>
                <span className="font-medium">Interactive Approvals:</span> Clients can approve designs with a simple
                reply
              </li>
              <li>
                <span className="font-medium">Appointment Scheduling:</span> Send and confirm fitting appointments
              </li>
              <li>
                <span className="font-medium">Payment Processing:</span> Send invoices and receive payments
              </li>
              <li>
                <span className="font-medium">Message Templates:</span> Customizable message templates for common
                communications
              </li>
            </ul>
            <p className="mt-2 text-base text-muted-foreground">
              WhatsApp Integration is scheduled for release in the next quarter, pending final API approvals.
            </p>
          </div>

          <div className="bg-muted p-4 rounded-lg mt-8">
            <h3 className="font-medium">Real-World Application</h3>
            <p className="text-base mt-2">
              "When a client's garment reaches the first fitting stage, the system will automatically send a WhatsApp
              message: 'Your custom suit is ready for first fitting. Please click here to schedule an appointment.' The
              client can select a time slot directly in the chat. After the fitting, you can send photos of the garment
              with proposed adjustments, and the client can approve them immediately. When the final garment is ready,
              the system sends another notification with a payment link. All these communications are logged in the
              project history, creating a complete record of client interactions. This integration will significantly
              improve client engagement and satisfaction while reducing the time spent on manual communications."
            </p>
          </div>
        </div>
      </div>

      <DocsPagination prev={{ href: "/projects/closure", title: "Project Closure" }} />
    </div>
  )
}
