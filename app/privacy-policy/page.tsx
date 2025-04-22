import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | PurpleScript",
  description: "How PurpleScript collects, uses, and protects your information",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen py-20">
      <section className="container px-4 md:px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-muted-foreground mb-6">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p>
            At PurpleScript, we take your privacy seriously. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your
            information when you visit our website purplescript.dev (the "Site")
            or use our services.
          </p>
          <p>
            Please read this Privacy Policy carefully. By accessing or using our
            Site and services, you acknowledge that you have read, understood,
            and agree to be bound by all the terms of this Privacy Policy.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            2. Information We Collect
          </h2>
          <p>
            We may collect information about you in a variety of ways,
            including:
          </p>
          <h3 className="text-xl font-medium mt-6 mb-3">2.1 Personal Data</h3>
          <p>
            When you use our Site or services, we may collect personally
            identifiable information, such as your:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company name</li>
            <li>Job title</li>
            <li>Information provided in contact forms</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">
            2.2 Automatically Collected Information
          </h3>
          <p>
            When you visit our Site, our servers may automatically log standard
            data provided by your web browser, such as:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Your IP address</li>
            <li>Browser type and version</li>
            <li>Pages you visit</li>
            <li>Time and date of your visit</li>
            <li>Time spent on each page</li>
            <li>Referring website addresses</li>
          </ul>

          <h3 className="text-xl font-medium mt-6 mb-3">
            2.3 Cookies and Similar Technologies
          </h3>
          <p>
            We may use cookies and similar tracking technologies to track
            activity on our Site and hold certain information. Cookies are files
            with a small amount of data which may include an anonymous unique
            identifier. You can instruct your browser to refuse all cookies or
            to indicate when a cookie is being sent.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            3. How We Use Your Information
          </h2>
          <p>
            We may use the information we collect about you for various
            purposes, including:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Providing, maintaining, and improving our Site and services</li>
            <li>Responding to your inquiries and communicating with you</li>
            <li>Understanding how you use our Site</li>
            <li>Developing new products, services, and features</li>
            <li>
              Sending you marketing and promotional communications if you've
              consented to receive them
            </li>
            <li>Detecting, preventing, and addressing technical issues</li>
            <li>Complying with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            4. Disclosure of Your Information
          </h2>
          <p>
            We may share your information with third parties in the following
            situations:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>With service providers who perform services on our behalf</li>
            <li>To comply with legal obligations</li>
            <li>To protect and defend our rights and property</li>
            <li>With your consent or at your direction</li>
            <li>
              If we are involved in a merger, acquisition, or sale of all or a
              portion of our assets
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            5. Security of Your Information
          </h2>
          <p>
            We use administrative, technical, and physical security measures to
            protect your personal information. While we have taken reasonable
            steps to secure the information you provide to us, please be aware
            that no security measures are perfect or impenetrable, and no method
            of data transmission can be guaranteed against interception or other
            types of misuse.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            6. Your Data Protection Rights
          </h2>
          <p>
            Depending on your location, you may have the following rights
            regarding your personal data:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>
              The right to access the personal information we hold about you
            </li>
            <li>
              The right to request correction of your personal information
            </li>
            <li>The right to request deletion of your personal information</li>
            <li>
              The right to object to processing of your personal information
            </li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the
            information provided in the "Contact Us" section.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            7. Children's Privacy
          </h2>
          <p>
            Our Site and services are not intended for individuals under the age
            of 18. We do not knowingly collect personal information from
            children under 18. If you are a parent or guardian and believe that
            your child has provided us with personal information, please contact
            us.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            8. Changes to This Privacy Policy
          </h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the "Last updated" date.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any
            changes. Changes to this Privacy Policy are effective when they are
            posted on this page.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p className="mb-2">
            Email:{" "}
            <a
              href="mailto:office@purplescript.dev"
              className="text-purple-700 hover:underline"
            >
              privacy@purplescript.dev
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
