import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFileSync } from 'fs';
import path from 'path';

// Use service account from env or local file if exists
const serviceAccountPath = path.join(process.cwd(), 'service-account.json');
let serviceAccount;

try {
  serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'));
} catch (e) {
  console.error("Missing service-account.json. Please ensure it exists in the root.");
  process.exit(1);
}

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

async function checkJobs() {
  console.log("Checking for jobs in batch_1, batch_2, batch_3...");
  
  const batches = ['batch_1', 'batch_2', 'batch_3'];
  
  for (const batch of batches) {
    console.log(`\n--- Searching Collection Group: ${batch} ---`);
    const q = db.collectionGroup(batch).where('processed', '==', true);
    const snap = await q.get();
    
    console.log(`Found ${snap.size} processed jobs in group '${batch}'`);
    
    if (snap.size > 0) {
      snap.docs.slice(0, 3).forEach(doc => {
        console.log(`Job ID: ${doc.id}`);
        console.log(`Path: ${doc.ref.path}`);
        console.log(`Title: ${doc.data().title}`);
        console.log(`Company: ${doc.data().company}`);
        console.log('---');
      });
    } else {
      // Check if there are UNPROCESSED jobs
      const qAll = db.collectionGroup(batch);
      const snapAll = await qAll.get();
      console.log(`(Total jobs in this group: ${snapAll.size})`);
      if (snapAll.size > 0) {
          console.log("Example unprocessed job:", snapAll.docs[0].ref.path, snapAll.docs[0].data().processed);
      }
    }
  }
}

checkJobs().catch(console.error);
