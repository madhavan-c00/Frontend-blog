"use server";

import { db } from "@/lib/firebase";
import { collectionGroup, getDocs, limit, query, where, orderBy, startAfter, doc, getDoc, collection } from "firebase/firestore";
import { Job } from "@/components/jobs/JobCard";

const COLORS = ['bg-indigo-500', 'bg-emerald-500', 'bg-orange-500', 'bg-blue-500', 'bg-purple-500', 'bg-red-500', 'bg-cyan-500'];

export async function getJobsAction(
  lastVisibleId?: string,
  limitCount: number = 12,
  selectedDate?: string,
  selectedBatch?: string,
  searchQuery?: string
) {
  let jobs: Job[] = [];
  const batches = selectedBatch ? [selectedBatch] : ['batch_3', 'batch_2', 'batch_1'];

  try {
    // If searching, we fetch a larger chunk to ensure we find matches
    const fetchLimit = searchQuery ? 150 : 50;

    if (selectedDate) {
      // If a date is selected, we query the specific date folder directly in 'daily_batches'
      const promises = batches.map(async (batchName) => {
        const q = query(
          collection(db, 'daily_batches', selectedDate, batchName),
          where('processed', '==', true),
          limit(100)
        );
        const snap = await getDocs(q);
        return { snap, batchName, date: selectedDate };
      });

      const results = await Promise.all(promises);
      results.forEach(({ snap, batchName, date }) => {
        snap.docs.forEach((doc) => {
          const data = doc.data();
          jobs.push({
            id: doc.id,
            title: data.title || 'Tech Role',
            company: data.company || 'Company',
            location: data.location || 'India',
            type: 'Full-time',
            salary: 'Not Disclosed',
            postedAt: date,
            logoColor: COLORS[Math.floor(Math.random() * COLORS.length)],
            slug: `${date}-${batchName}-${doc.id}`
          });
        });
      });
    } else {
      // Fallback: Use collectionGroup for cross-date browsing (Home page/All jobs)
      const promises = batches.map(async (batchName) => {
        let q = query(
          collectionGroup(db, batchName),
          where('processed', '==', true),
          limit(fetchLimit)
        );

        const snap = await getDocs(q);
        return { snap, batchName };
      });

      const results = await Promise.all(promises);

      results.forEach(({ snap, batchName }) => {
        snap.docs.forEach((doc) => {
          const data = doc.data();
          const pathParts = doc.ref.path.split('/');
          const date = pathParts[1]; // path is daily_batches/YYYY-MM-DD/batch_X/jobId

          jobs.push({
            id: doc.id,
            title: data.title || 'Tech Role',
            company: data.company || 'Company',
            location: data.location || 'India',
            type: 'Full-time',
            salary: 'Not Disclosed',
            postedAt: date,
            logoColor: COLORS[Math.floor(Math.random() * COLORS.length)],
            slug: `${date}-${batchName}-${doc.id}`
          });
        });
      });
    }

    // Server-side search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      jobs = jobs.filter(j =>
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q) ||
        j.location.toLowerCase().includes(q)
      );
    }

    // Sort by date/slug descending
    jobs.sort((a, b) => b.slug.localeCompare(a.slug));

    // Pagination logic
    let startIndex = 0;
    if (lastVisibleId) {
      const index = jobs.findIndex(j => j.id === lastVisibleId);
      if (index !== -1) startIndex = index + 1;
    }

    const paginatedJobs = jobs.slice(startIndex, startIndex + limitCount);
    const hasMore = startIndex + limitCount < jobs.length;

    return {
      jobs: paginatedJobs,
      hasMore
    };

  } catch (error) {
    console.error("Error in getJobsAction:", error);
    return { jobs: [], hasMore: false };
  }
}
