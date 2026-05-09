import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="pt-32 pb-16 bg-white border-b border-slate-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Get in Touch 👋</h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              Have a question, feedback, or need help with a job application? 
              Our team is here to support you.
            </p>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="md:col-span-2 space-y-10">
               <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                       <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9 7 9-7"/><path d="M21 5H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2z"/></svg>
                       </div>
                       <div>
                          <p className="text-sm text-slate-400 font-medium mb-1 uppercase">Email Us</p>
                          <p className="text-slate-900 font-bold">support@freshersflow.in</p>
                       </div>
                    </div>
                    <div className="flex gap-4 items-start">
                       <div className="w-10 h-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                       </div>
                       <div>
                          <p className="text-sm text-slate-400 font-medium mb-1 uppercase">Call Us</p>
                          <p className="text-slate-900 font-bold">+91 98765 43210</p>
                       </div>
                    </div>
                  </div>
               </div>
               
               <div className="p-8 bg-indigo-600 rounded-[2rem] text-white">
                  <h4 className="font-bold mb-4">Join our Newsletter</h4>
                  <p className="text-indigo-100 text-sm leading-relaxed mb-6">Receive weekly job alerts and career tips directly in your inbox.</p>
                  <div className="flex flex-col gap-3">
                     <input type="email" placeholder="Your email" className="bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:bg-white/20 transition-all" />
                     <Button className="bg-white text-indigo-600 hover:bg-indigo-50">Subscribe</Button>
                  </div>
               </div>
            </div>

            <div className="md:col-span-3">
               <form className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 space-y-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-slate-700 ml-1">Your Name</label>
                       <input type="text" placeholder="John Doe" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-medium" />
                    </div>
                    <div className="space-y-2">
                       <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                       <input type="email" placeholder="john@example.com" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-medium" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Subject</label>
                    <select className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-medium text-slate-600 bg-white">
                       <option>General Inquiry</option>
                       <option>Job Posting Issue</option>
                       <option>Partnership</option>
                       <option>Technical Support</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Message</label>
                    <textarea rows={6} placeholder="How can we help you?" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all font-medium resize-none"></textarea>
                  </div>
                  
                  <Button size="lg" className="w-full shadow-lg shadow-primary/20">Send Message</Button>
               </form>
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
