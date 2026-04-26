import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="pt-32 pb-16 bg-white border-b border-slate-100">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Terms & Conditions</h1>
            <p className="text-slate-500">Last updated: April 9, 2024</p>
          </div>
        </Container>
      </div>

      <Container className="py-16">
        <div className="max-w-3xl mx-auto bg-white p-10 md:p-16 rounded-[2.5rem] border border-slate-100 shadow-sm prose prose-slate">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing our website at NextJob, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            <p className="text-slate-600 leading-relaxed">
              Permission is granted to temporarily download one copy of the materials on NextJob's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-slate-600">
               <li>Modify or copy the materials.</li>
               <li>Use the materials for any commercial purpose.</li>
               <li>Attempt to decompile or reverse engineer any software contained on NextJob's website.</li>
               <li>Remove any copyright or other proprietary notations from the materials.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">3. Disclaimer</h2>
            <p className="text-slate-600 leading-relaxed">
              The materials on NextJob's website are provided on an 'as is' basis. NextJob makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">4. Limitations</h2>
            <p className="text-slate-600 leading-relaxed">
              In no event shall NextJob or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on NextJob's website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>
        </div>
      </Container>

      <Footer />
    </main>
  );
}
