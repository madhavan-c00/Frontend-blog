import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
              We empower the next generation of <span className="text-primary italic">talent</span>.
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              NextJob is dedicated to bridging the gap between fresh graduates and their dream careers. 
              We believe everyone deserves a fair shot at success, regardless of their experience level.
            </p>
          </div>
        </Container>
      </div>

      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
             <div className="relative aspect-square rounded-[3rem] bg-slate-100 overflow-hidden shadow-2xl">
                {/* Visual placeholder for an about image */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-emerald-500 opacity-20" />
                <div className="flex items-center justify-center h-full">
                   <svg xmlns="http://www.w3.org/2000/svg" className="w-32 h-32 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
             </div>
             
             <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
                <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                  Founded in 2024, NextJob started with a simple observation: entry-level job hunting is unnecessarily difficult. 
                  Most platforms focus on experienced professionals, leaving freshers to sift through "junior" roles that require 3 years of experience.
                </p>
                <p className="text-lg text-slate-500 mb-10 leading-relaxed">
                  We built NextJob to be the platform we wish we had when starting out. A place that specifically curates 0-1 year experience roles and provides the exact resources needed to land them.
                </p>
                
                <div className="grid grid-cols-2 gap-8">
                   <div>
                      <h4 className="text-4xl font-bold text-primary mb-2">50k+</h4>
                      <p className="text-slate-600 font-medium">Monthly Active Users</p>
                   </div>
                   <div>
                      <h4 className="text-4xl font-bold text-secondary mb-2">2.5k</h4>
                      <p className="text-slate-600 font-medium">Daily Fresh Jobs</p>
                   </div>
                </div>
             </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50 border-y border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-slate-500">The core principles that guide everything we do at NextJob.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Transparency First",
                desc: "We are honest about job requirements and never list fake or expired roles.",
                icon: "✨"
              },
              {
                title: "Free Forever",
                desc: "Our core search and prep tools will always remain free for job seekers.",
                icon: "🎁"
              },
              {
                title: "Impact Driven",
                desc: "We measure our success by the number of freshers we help land a real job.",
                icon: "🎯"
              }
            ].map(value => (
              <div key={value.title} className="text-center">
                 <div className="text-4xl mb-6">{value.icon}</div>
                 <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
                 <p className="text-slate-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
