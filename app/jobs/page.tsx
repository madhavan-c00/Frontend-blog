import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { JobCard, Job } from "@/components/jobs/JobCard";
import { db } from "@/lib/firebase";
import { collectionGroup, getDocs, orderBy, limit, query, where } from "firebase/firestore";

// Helper to assign a random pretty color to the company logo
const COLORS = ['bg-indigo-500', 'bg-emerald-500', 'bg-orange-500', 'bg-blue-500', 'bg-purple-500', 'bg-red-500', 'bg-cyan-500'];

async function getJobs(): Promise<Job[]> {
  const jobs: Job[] = [];
  try {
    // Fetch only processed jobs across all batch collections
    const batches = ['batch_1', 'batch_2', 'batch_3'];
    
    for (const batchName of batches) {
      const q = query(
        collectionGroup(db, batchName), 
        where('processed', '==', true),
        limit(20)
      );
      const snap = await getDocs(q);

      snap.docs.forEach((doc) => {
        const data = doc.data();
        // Extract date from the parent document path
        // Path is daily_batches/{date}/{batchName}/{jobId}
        const pathParts = doc.ref.path.split('/');
        const date = pathParts[1];
        
        jobs.push({
          id: doc.id,
          title: data.title || 'Tech Role',
          company: data.company || 'Company',
          location: data.location || 'India',
          type: 'Full-time',
          salary: 'Not Disclosed',
          postedAt: 'Recent',
          logoColor: COLORS[Math.floor(Math.random() * COLORS.length)],
          slug: `${date}-${batchName}-${doc.id}`
        });
      });
    }

  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
  return jobs;
}

export const revalidate = 60; // SSR with 60 sec ISR

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="pt-32 pb-12 bg-white border-b border-slate-100">
        <Container>
          <h1 className="text-4xl font-bold text-slate-900 mb-4 text-center md:text-left">Find Your Career Start 💼</h1>
          <p className="text-lg text-slate-500 mb-8 text-center md:text-left">Browse our AI-curated fresh IT jobs updated daily.</p>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="relative flex-1 min-w-[200px]">
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
            </div>

            <select className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 font-medium text-slate-600 bg-white cursor-pointer">
              <option>All Locations</option>
              <option>Remote</option>
              <option>On-site</option>
              <option>Hybrid</option>
            </select>

            <select className="px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary/20 font-medium text-slate-600 bg-white cursor-pointer">
              <option>All Role Types</option>
              <option>Full-time</option>
              <option>Internship</option>
              <option>Contract</option>
            </select>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          {jobs.length === 0 ? (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold text-slate-700">No jobs found right now</h3>
              <p className="text-slate-500 mt-2">The AI data engine is currently processing the latest jobs. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}

        </Container>
      </Section>

      <Footer />
    </main>
  );
}
