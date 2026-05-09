import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | FreshersFlow",
  description: "Read FreshersFlow's Terms and Conditions governing the use of our website, job listings, blog content, and career resources for IT freshers in India.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="pt-32 pb-16 bg-white border-b border-slate-100">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Terms & Conditions</h1>
            <p className="text-slate-500">Last updated: May 9, 2026</p>
          </div>
        </Container>
      </div>

      <Container className="py-16">
        <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-[2.5rem] border border-slate-100 shadow-sm prose prose-slate">

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing or using FreshersFlow ("the Site", "we", "us", or "our") at <strong>freshersflow.in</strong>, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must discontinue using the website immediately. These terms apply to all visitors, users, and any others who access the Service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Nature of the Service</h2>
            <p className="text-slate-600 leading-relaxed">
              FreshersFlow is an informational career platform that aggregates publicly available job listings, publishes career blog articles, and provides interview preparation resources for IT freshers in India. We do not directly employ users, guarantee job placements, or act as a recruitment agency. All job listings are sourced automatically from third-party platforms such as LinkedIn.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              All original content on FreshersFlow — including blog articles, guides, roadmaps, design elements, and the FreshersFlow name and logo — is the intellectual property of FreshersFlow and is protected by applicable copyright and trademark laws. You may not:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Copy, reproduce, or republish our original content without written permission.</li>
              <li>Use our name, logo, or branding for commercial purposes.</li>
              <li>Scrape or data-mine our website using automated tools without prior consent.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed mt-4">
              Job listing data (titles, company names, locations) is sourced from third-party platforms and retains the intellectual property of the respective companies and job boards.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Accuracy of Information</h2>
            <p className="text-slate-600 leading-relaxed">
              We strive to ensure job listings and career content are accurate and up-to-date. However, FreshersFlow does not warrant the completeness, accuracy, or timeliness of any job listing, salary figure, or career advice published on the site. Job listings may expire or be filled without notice. You should always verify details directly with the employer before applying.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">5. Third-Party Links & Advertisements</h2>
            <p className="text-slate-600 leading-relaxed">
              Our Site may contain links to external websites and display advertisements through Google AdSense. These third-party sites and advertisers have their own privacy policies and terms, which we do not control. FreshersFlow is not responsible for the content, accuracy, or practices of any third-party website or advertiser. Accessing third-party links is done at your own risk.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">6. Disclaimer of Warranties</h2>
            <p className="text-slate-600 leading-relaxed">
              FreshersFlow is provided on an "as is" and "as available" basis without any warranties of any kind, whether express or implied. We do not warrant that the Service will be uninterrupted, error-free, or free of viruses or other harmful components. We make no guarantees regarding job placement outcomes, interview success, or career progression based on our resources.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
            <p className="text-slate-600 leading-relaxed">
              To the fullest extent permitted by law, FreshersFlow and its owners, team members, or affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages — including, but not limited to, loss of data, opportunities, or income — arising from your use of or inability to use the Service or any content on it.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">8. User Conduct</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              When using FreshersFlow, you agree not to:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>Use the site for any unlawful purpose or in violation of any regulations.</li>
              <li>Engage in any conduct that restricts or inhibits other users from enjoying the Service.</li>
              <li>Attempt to gain unauthorized access to our systems or user data.</li>
              <li>Submit false, misleading, or abusive content through contact forms.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated "Last updated" date. Continued use of the Service after any changes constitutes your acceptance of the new Terms. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have questions about these Terms & Conditions, please contact us:
            </p>
            <div className="mt-4 p-6 bg-slate-50 rounded-2xl">
              <p className="font-bold text-slate-900">FreshersFlow</p>
              <p className="text-slate-600">Email: <a href="mailto:support@freshersflow.in" className="text-primary">support@freshersflow.in</a></p>
              <p className="text-slate-600">Website: <a href="https://freshersflow.in" className="text-primary">freshersflow.in</a></p>
            </div>
          </section>

        </div>
      </Container>

      <Footer />
    </main>
  );
}
