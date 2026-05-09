import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | FreshersFlow",
  description: "Read FreshersFlow's privacy policy to understand how we collect, use, and protect your personal data. We are committed to full transparency and GDPR compliance.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="pt-32 pb-16 bg-white border-b border-slate-100">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-slate-500">Last updated: May 9, 2026</p>
          </div>
        </Container>
      </div>

      <Container className="py-16">
        <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-[2.5rem] border border-slate-100 shadow-sm prose prose-slate">

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              Welcome to FreshersFlow ("we", "us", or "our"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and share information about you when you use our website at <strong>freshersflow.in</strong> (the "Service"). Please read this policy carefully. If you disagree with its terms, please discontinue use of the site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We collect information to provide and improve our Service. The types of data we may collect include:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li><strong>Usage Data:</strong> Pages visited, time spent, referring URL, and browser type. This is collected automatically when you use our Service.</li>
              <li><strong>Device Data:</strong> IP address, operating system, and device identifiers.</li>
              <li><strong>Contact Data:</strong> Email address or name, only if you voluntarily contact us via our contact form.</li>
              <li><strong>Cookies & Tracking:</strong> We use cookies and similar tracking technologies to monitor activity on our Service and retain certain information to improve user experience.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>To provide, operate, and maintain our website and services.</li>
              <li>To analyze usage patterns and improve the quality of our content and job listings.</li>
              <li>To respond to your inquiries and support requests.</li>
              <li>To display relevant advertisements through Google AdSense (see Section 6).</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              FreshersFlow uses cookies to enhance your experience. Cookies are small data files stored on your device. We use:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li><strong>Essential Cookies:</strong> Required for the website to function properly.</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site (e.g., Google Analytics).</li>
              <li><strong>Advertising Cookies:</strong> Used by Google AdSense to display personalized advertisements based on your browsing history.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              You can control or disable cookies through your browser settings. Note that disabling cookies may affect the functionality of our site.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
            <p className="text-slate-600 leading-relaxed">
              We use third-party services that may collect information used to identify you. These include:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600">
              <li><strong>Google Analytics:</strong> For website traffic analysis. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary underline">Google Privacy Policy</a></li>
              <li><strong>Google AdSense:</strong> For displaying contextual advertisements. <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-primary underline">Google Ads Policy</a></li>
              <li><strong>Firebase (Google):</strong> For job data storage and backend services.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Google AdSense & Advertising</h2>
            <p className="text-slate-600 leading-relaxed">
              FreshersFlow uses Google AdSense, a third-party advertising service provided by Google LLC. Google AdSense may use cookies and web beacons to serve ads on our site based on your prior visits to our website or other sites on the internet. You may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-primary underline">Google Ad Settings</a>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Data Retention</h2>
            <p className="text-slate-600 leading-relaxed">
              We retain your personal data only for as long as it is necessary for the purposes set out in this policy. Contact form submissions are deleted after 90 days. Analytics data is retained for 14 months as per Google Analytics settings.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">8. Your Rights</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>The right to access and receive a copy of your personal data.</li>
              <li>The right to request correction of inaccurate data.</li>
              <li>The right to request deletion of your personal data.</li>
              <li>The right to object to or restrict processing of your data.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              To exercise any of these rights, please contact us at the email below.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">9. Children's Privacy</h2>
            <p className="text-slate-600 leading-relaxed">
              Our Service is not directed to children under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and believe your child has provided us with personal data, please contact us immediately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about this Privacy Policy or your personal data, please contact us at:
            </p>
            <div className="mt-4 p-6 bg-slate-50 rounded-2xl">
              <p className="font-bold text-slate-900">FreshersFlow</p>
              <p className="text-slate-600">Email: <a href="mailto:businessmadhavan@gmail.com" className="text-primary">businessmadhavan@gmail.com</a></p>
            </div>
          </section>

        </div>
      </Container>

      <Footer />
    </main>
  );
}
