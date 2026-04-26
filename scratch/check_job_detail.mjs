import { initializeApp } from "firebase/app";
import { getFirestore, collectionGroup, query, where, getDocs, limit } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOCubnFnmlbCnHysTirMZCjZhIaNthQeE",
  authDomain: "blog-site-69e44.firebaseapp.com",
  projectId: "blog-site-69e44",
  storageBucket: "blog-site-69e44.firebasestorage.app",
  messagingSenderId: "478306654626",
  appId: "1:478306654626:web:710725909bb8b567617afb",
  measurementId: "G-E2YZVZZZ1G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function checkJobDetail() {
  const batches = ['batch_1', 'batch_2', 'batch_3'];
  console.log("Checking for processed jobs in batch_1, batch_2, batch_3...");

  for (const b of batches) {
    const q = query(collectionGroup(db, b), where('processed', '==', true), limit(5));
    const snap = await getDocs(q);
    console.log(`\n--- Batch: ${b} ---`);
    console.log(`Found ${snap.size} processed jobs`);
    
    snap.docs.forEach(doc => {
        const data = doc.data();
        console.log(`Doc ID: ${doc.id}`);
        console.log(`Data ID: ${data.id}`);
        console.log(`Processed: ${data.processed}`);
        console.log(`Title: ${data.title}`);
        console.log(`Path: ${doc.ref.path}`);
        console.log('---');
    });
  }
  process.exit(0);
}

checkJobDetail().catch(err => {
    console.error(err);
    process.exit(1);
});
