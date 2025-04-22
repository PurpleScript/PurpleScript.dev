import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | PurpleScript",
  description:
    "Terms and conditions for using PurpleScript services and website",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen py-20">
      <section className="container px-4 md:px-6 py-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          Terms of Service
        </h1>
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
            Welcome to PurpleScript. These Terms of Service ("Terms") govern
            your use of our website located at purplescript.dev (the "Site") and
            all related services provided by PurpleScript ("we," "our," or
            "us").
          </p>
          <p>
            By accessing or using our Site and services, you agree to be bound
            by these Terms. If you disagree with any part of these Terms, you
            may not access our Site or use our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services</h2>
          <p>
            PurpleScript provides custom technology solutions, software
            development, and related services as described on our Site. We
            reserve the right to modify, suspend, or discontinue any part of our
            services at any time without prior notice.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            3. User Responsibilities
          </h2>
          <p>As a user of our Site and services, you agree to:</p>
          <ul className="list-disc pl-6 mb-6">
            <li>
              Provide accurate and complete information when communicating with
              us
            </li>
            <li>
              Maintain the confidentiality of any login information associated
              with your account
            </li>
            <li>
              Use our Site and services only for lawful purposes and in
              accordance with these Terms
            </li>
            <li>
              Not engage in any activity that could harm, disable, or impair our
              servers or networks
            </li>
            <li>
              Not attempt to gain unauthorized access to any part of our Site or
              services
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            4. Intellectual Property
          </h2>
          <p>
            The Site and its entire contents, features, and functionality
            (including but not limited to all information, software, text,
            displays, images, video, and audio) are owned by PurpleScript or its
            licensors and are protected by copyright, trademark, and other
            intellectual property laws.
          </p>
          <p>
            You may not reproduce, distribute, modify, create derivative works
            of, publicly display, publicly perform, republish, download, store,
            or transmit any materials from our Site without our prior written
            consent.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            5. Custom Development and Deliverables
          </h2>
          <p>
            For custom development services, ownership of deliverables will be
            specified in individual client agreements. Unless otherwise stated
            in a written agreement:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>
              Upon full payment, clients receive a non-exclusive license to use
              the deliverables for their intended purpose
            </li>
            <li>
              PurpleScript retains ownership of pre-existing code, frameworks,
              and development tools
            </li>
            <li>
              PurpleScript may reuse general concepts, programming techniques,
              and non-client-specific components in other projects
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Privacy</h2>
          <p>
            Your use of our Site and services is also governed by our Privacy
            Policy, which is incorporated into these Terms by reference. Please
            review our Privacy Policy to understand our practices.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Payment Terms</h2>
          <p>
            Fees for our services are as stated on our Site or in individual
            client agreements. Payment terms, including amounts and schedules,
            will be specified in individual client agreements or project
            proposals.
          </p>
          <p>
            All payments are non-refundable unless otherwise specified in
            writing. We reserve the right to change our pricing at any time,
            with notice provided for existing clients according to their
            agreements.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            8. Limitation of Liability
          </h2>
          <p>
            To the fullest extent permitted by law, PurpleScript shall not be
            liable for any indirect, incidental, special, consequential, or
            punitive damages, including but not limited to loss of profits,
            data, use, goodwill, or other intangible losses resulting from your
            access to or use of or inability to access or use the services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            9. Indemnification
          </h2>
          <p>
            You agree to indemnify, defend, and hold harmless PurpleScript and
            its officers, directors, employees, agents, and affiliates from and
            against any claims, liabilities, damages, losses, and expenses,
            including reasonable attorneys' fees, arising out of or in any way
            connected with your access to or use of our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            10. Changes to These Terms
          </h2>
          <p>
            We may update these Terms from time to time. We will notify you of
            any changes by posting the new Terms on this page and updating the
            "Last updated" date.
          </p>
          <p>
            Your continued use of our Site and services after we post changes to
            these Terms constitutes your acceptance of those changes.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="mb-2">
            Email:{" "}
            <a
              href="mailto:sales@purplescript.dev"
              className="text-purple-700 hover:underline"
            >
              sales@purplescript.dev
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
