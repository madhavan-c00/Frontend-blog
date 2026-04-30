import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { JobCard, Job } from '../jobs/JobCard';
import { Button } from '../ui/Button';

import { db } from "@/lib/firebase";
import { collectionGroup, getDocs, limit, query, where } from "firebase/firestore";

const COLORS = ['bg-indigo-500', 'bg-emerald-500', 'bg-orange-500', 'bg-blue-500', 'bg-purple-500', 'bg-red-500', 'bg-cyan-500'];

async function getFeaturedJobs(): Promise<Job[]> {
  const jobs: Job[] = [];
  try {
    const batches = ['batch_1', 'batch_2', 'batch_3'];
    
    for (const batchName of batches) {
      if (jobs.length >= 6) break;
      const q = query(
        collectionGroup(db, batchName), 
        where('processed', '==', true),
        limit(6)
      );
      const snap = await getDocs(q);

      snap.docs.forEach((doc) => {
        if (jobs.length >= 6) return;
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
    }

  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
  return jobs.slice(0, 6);
}

export const FeaturedJobs = async () => {
  const jobs = await getFeaturedJobs();
  return (
    <Section className="bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Job Opportunities
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl">
              Hand-picked opportunities for freshers from top tech companies. 
              New positions added every day.
            </p>
          </div>
          <Button href="/jobs" variant="outline">
            View All Jobs
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.length === 0 ? (
            <div className="col-span-full text-center py-10">
              <p className="text-slate-500">Loading latest opportunities...</p>
            </div>
          ) : (
            jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          )}
        </div>
      </Container>
    </Section>
  );
};
