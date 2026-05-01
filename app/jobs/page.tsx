import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { JobCard, Job } from "@/components/jobs/JobCard";
import { JobsListClient } from "@/components/jobs/JobsListClient";
import { db } from "@/lib/firebase";
import { collectionGroup, getDocs, orderBy, limit, query, where } from "firebase/firestore";

// Helper to assign a random pretty color to the company logo
const COLORS = ['bg-indigo-500', 'bg-emerald-500', 'bg-orange-500', 'bg-blue-500', 'bg-purple-500', 'bg-red-500', 'bg-cyan-500'];

async function getJobs(): Promise<Job[]> {
  const jobs: Job[] = [];
  try {
    const batches = ['batch_1', 'batch_2', 'batch_3'];
    
    // Create all query promises in parallel, each with its own error handler
    const promises = batches.map(async (batchName) => {
      try {
        const q = query(
          collectionGroup(db, batchName), 
          where('processed', '==', true),
          limit(50)
        );
        return await getDocs(q);
      } catch (e) {
        console.error(`Index missing or error for ${batchName}:`, e);
        return null;
      }
    });

    const snapshots = await Promise.all(promises);

    snapshots.forEach((snap, index) => {
      if (!snap) return; // Skip failed batches
      const batchName = batches[index];
      snap.docs.forEach((doc) => {
        const data = doc.data();
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
    });

  } catch (error) {
    console.error("Critical error fetching jobs:", error);
  }
  
  // Sort by slug (which starts with YYYY-MM-DD) descending to show latest first
  return jobs.sort((a, b) => b.slug.localeCompare(a.slug));
}

export const revalidate = 60; // SSR with 60 sec ISR

export default async function JobsPage() {
  const allJobs = await getJobs();
  const initialJobs = allJobs.slice(0, 12);
  const initialHasMore = allJobs.length > 12;

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="pt-32 pb-12 bg-white border-b border-slate-100">
        <Container>
          <h1 className="text-4xl font-bold text-slate-900 mb-4 text-center md:text-left">Find Your Career Start 💼</h1>
          <p className="text-lg text-slate-500 mb-8 text-center md:text-left">Browse our AI-curated fresh IT jobs updated daily.</p>

        </Container>
      </div>

      <Section>
        <Container>
          {initialJobs.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-700">No jobs found right now</h3>
              <p className="text-slate-500 mt-2">Check back soon for latest opportunities!</p>
            </div>
          ) : (
            <JobsListClient initialJobs={initialJobs} initialHasMore={initialHasMore} />
          )}
        </Container>
      </Section>


      <Footer />
    </main>
  );
}
