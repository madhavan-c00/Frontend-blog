import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="pt-32 pb-16 bg-white border-b border-slate-100">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Privacy Policy</h1>
            <p className="text-slate-500">Last updated: April 9, 2024</p>
          </div>
        </Container>
      </div>

      <Container className="py-16">
        <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-[2.5rem] border border-slate-100 shadow-sm prose prose-slate">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p className="text-slate-600 leading-relaxed">
              Welcome to NextJob. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website and tell you about your privacy rights.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. The Data We Collect</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
               <li>Identity Data: Includes first name, last name.</li>
               <li>Contact Data: Includes email address and telephone numbers.</li>
               <li>Technical Data: Includes IP address, browser type and version.</li>
               <li>Usage Data: Includes information about how you use our website.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. How We Use Your Data</h2>
            <p className="text-slate-600 leading-relaxed">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to provide you with job alerts, respond to your inquiries, and improve our services.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Cookies</h2>
            <p className="text-slate-600 leading-relaxed">
              Our website uses cookies to distinguish you from other users of our website. This helps us to provide you with a good experience when you browse our website and also allows us to improve our site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about this privacy policy, please contact us at support@nextjob.com.
            </p>
          </section>
        </div>
      </Container>

      <Footer />
    </main>
  );
}
