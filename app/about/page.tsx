import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | FreshersFlow – Empowering India's IT Freshers",
  description: "Learn about FreshersFlow – India's dedicated platform for IT freshers. Our mission is to help fresh graduates find their first tech job with AI-curated opportunities and career resources.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-32 pb-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">About FreshersFlow</p>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 leading-tight">
              We help India's freshers <span className="text-primary italic">land their first IT job.</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
              FreshersFlow is a free career platform built specifically for B.E., B.Tech, MCA and BCA graduates entering the IT industry. We combine AI-powered job discovery with practical learning guides, interview prep, and career roadmaps — everything you need in one place.
            </p>
          </div>
        </Container>
      </div>

      {/* Mission Section */}
      <Section className="bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-square rounded-[3rem] bg-slate-100 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-20" />
              <div className="flex flex-col items-center justify-center h-full gap-4 p-8">
                <div className="text-6xl">🎓</div>
                <p className="text-center text-slate-500 font-semibold text-lg">Connecting Freshers to Opportunities</p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-500 mb-6 leading-relaxed">
                FreshersFlow was built to solve a very real problem: finding a genuine fresher-friendly IT job in India is harder than it should be. Most job portals are flooded with roles requiring 2–3 years of experience, making it nearly impossible for fresh graduates to even get a callback.
              </p>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                Our automated pipeline scrapes and verifies 0–1 year IT roles from LinkedIn every day. We then use AI to enrich each listing with skill insights, interview tips, and learning roadmaps tailored to that specific role — so you don't just find jobs, you get prepared to crack them.
              </p>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-4xl font-bold text-primary mb-2">500+</h4>
                  <p className="text-slate-600 font-medium">Jobs Listed This Month</p>
                </div>
                <div>
                  <h4 className="text-4xl font-bold text-secondary mb-2">30+</h4>
                  <p className="text-slate-600 font-medium">Career Blog Articles</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* What We Offer */}
      <Section className="bg-slate-50 border-y border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">What FreshersFlow Offers</h2>
            <p className="text-slate-500">Everything an IT fresher needs — from finding jobs to cracking interviews.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Daily AI-Curated IT Jobs",
                desc: "Our system automatically scrapes LinkedIn every day and filters only genuine 0–1 year experience roles in software development, data, QA, and IT support.",
                icon: "💼"
              },
              {
                title: "Career Blog & Guides",
                desc: "30+ in-depth articles covering company hiring processes (TCS, Infosys, Wipro, Zoho), ATS resume tips, interview preparation, and roadmaps for IT careers.",
                icon: "📝"
              },
              {
                title: "Interview Prep & Roadmaps",
                desc: "Role-specific learning paths and company-wise interview Q&A to help freshers prepare confidently for their first IT job interviews.",
                icon: "🗺️"
              }
            ].map(item => (
              <div key={item.title} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section className="bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-slate-500">The principles that guide everything we build at FreshersFlow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Fresher First",
                desc: "Every feature we build is designed specifically for 0–2 year experience candidates entering the IT industry.",
                icon: "🚀"
              },
              {
                title: "Always Free",
                desc: "FreshersFlow is and will always be free for job seekers. No hidden charges, no premium job locks.",
                icon: "🎁"
              },
              {
                title: "Quality Over Quantity",
                desc: "We only list verified, active job openings. Every listing is filtered for relevance and freshness so you never waste time on dead links.",
                icon: "✅"
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
