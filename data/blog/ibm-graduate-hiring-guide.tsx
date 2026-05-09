import React from "react";
import { BlogContent } from "./types";

export const ibmGraduateHiringGuide: BlogContent = {
    id: "ibm-graduate-hiring-guide",
    slug: "ibm-graduate-hiring-guide",
    title: "IBM Graduate Hiring Guide — How to Get Into IBM as a Fresher",
    excerpt:
        "A complete guide to IBM's graduate hiring process — eligibility, assessment rounds, interview tips, and salary details for freshers.",
    category: "Company Guides",
    author: "TechHub Admin",
    date: "April 26, 2026",
    readTime: "10 min",
    techId: "career",
    color: "bg-indigo-600",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop",
    content: (
        <div className="prose prose-slate max-w-none prose-lg">
            <p>
                IBM is one of the world's largest technology and consulting companies, and it actively hires fresh graduates across software engineering, data science, cloud, consulting, and business analyst roles. Getting into IBM as a fresher requires understanding their structured hiring process and aligning your preparation accordingly.
            </p>
            <p>
                This IBM graduate hiring guide covers everything — from eligibility and application to each interview round and final offer — along with preparation tips that help you stand out from thousands of applicants.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                IBM Graduate Hiring — Eligibility Criteria
            </h2>
            <ul className="space-y-3 my-6">
                <li><strong>Degree:</strong> B.E. / B.Tech / M.Tech / MCA / B.Sc / BCA from a recognized institution.</li>
                <li><strong>Percentage:</strong> Minimum 60% or 6.0 CGPA across 10th, 12th, and graduation.</li>
                <li><strong>Backlogs:</strong> No active backlogs; some roles accept cleared backlogs with documentation.</li>
                <li><strong>Graduation year:</strong> Typically within one year of passing out.</li>
                <li><strong>Gap:</strong> Up to one year of academic gap is generally accepted.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                IBM Hiring Process — All Rounds Explained
            </h2>

            <h3 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">
                Round 1: Online Application and Resume Screening
            </h3>
            <p>
                Apply through IBM's official careers portal at ibm.com/careers or through your campus placement cell. IBM's system screens resumes using ATS, so make sure your resume has clear sections, relevant keywords, and no complex formatting. Highlight any IBM-related certifications like IBM SkillsBuild badges as they improve your shortlisting chances.
            </p>

            <h3 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">
                Round 2: IBM Cognitive Ability Test (Online Assessment)
            </h3>
            <p>
                IBM uses their proprietary cognitive ability assessment for graduate recruitment. The test typically includes:
            </p>
            <ul className="space-y-3 my-6">
                <li><strong>Numerical Reasoning:</strong> Data interpretation, ratios, percentages.</li>
                <li><strong>Verbal Reasoning:</strong> Reading passages, grammar, comprehension.</li>
                <li><strong>Abstract Reasoning:</strong> Pattern recognition and logical sequences.</li>
                <li><strong>Situational Judgment:</strong> Workplace scenario questions testing decision-making.</li>
            </ul>
            <p>
                For technical roles, an additional coding section with two to three programming problems may be included. Practice on platforms like HackerRank, LeetCode, and PrepInsta for IBM-specific question patterns.
            </p>

            <h3 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">
                Round 3: Technical Interview
            </h3>
            <p>
                IBM's technical interview covers core CS fundamentals and role-specific knowledge. Expect questions on:
            </p>
            <ul className="space-y-3 my-6">
                <li>Data structures and algorithms — arrays, linked lists, trees, sorting.</li>
                <li>Object-oriented programming concepts and design principles.</li>
                <li>Database management — SQL queries, normalization, transactions.</li>
                <li>Operating systems — process management, memory, deadlocks.</li>
                <li>Cloud computing basics and IBM Cloud concepts for cloud roles.</li>
                <li>Your final year project and internship experience in detail.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">
                Round 4: HR and Managerial Round
            </h3>
            <p>
                This round assesses communication skills, attitude, and cultural alignment with IBM's values — trust, innovation, and responsibility. Common questions include:
            </p>
            <ul className="space-y-3 my-6">
                <li>"Why IBM over other companies?"</li>
                <li>"Tell me about a time you showed initiative."</li>
                <li>"How do you handle tight deadlines and pressure?"</li>
                <li>"Are you open to relocation and shift work?"</li>
            </ul>

            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl my-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    IBM Graduate Hiring — Preparation Tips
                </h2>
                <ul className="space-y-3">
                    {[
                        "Complete IBM SkillsBuild courses and earn free badges to strengthen your profile.",
                        "Practice cognitive ability test questions from IBM-specific prep platforms.",
                        "Revise all core CS subjects — OOPs, DBMS, OS, and Networks.",
                        "Solve at least 50 LeetCode problems at easy to medium level before your assessment.",
                        "Prepare a strong 2-minute 'Tell me about yourself' answer that ties your skills to IBM's work.",
                        "Know IBM's major products — IBM Cloud, IBM Watson, IBM Z, and IBM Consulting.",
                    ].map((tip, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                            <span className="w-2 h-2 rounded-full bg-indigo-600" />
                            {tip}
                        </li>
                    ))}
                </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                IBM Fresher Roles and Salary
            </h2>
            <ul className="space-y-3 my-6">
                <li><strong>Associate Software Engineer:</strong> ₹4.5–6.5 LPA</li>
                <li><strong>Application Developer:</strong> ₹6–8 LPA</li>
                <li><strong>Data Analyst:</strong> ₹5–7 LPA</li>
                <li><strong>Cloud and Cognitive Software:</strong> ₹7–9 LPA</li>
                <li><strong>IBM Consulting Analyst:</strong> ₹6–8 LPA</li>
            </ul>
            <p>
                IBM also offers a strong learning culture with internal certifications, training programs, and mentoring — making it an excellent company for freshers who want structured career growth.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Common Mistakes to Avoid in IBM's Hiring Process
            </h2>
            <ul className="space-y-3 my-8">
                {[
                    "Not doing IBM SkillsBuild certifications before applying — they signal genuine interest.",
                    "Under-preparing for the cognitive ability test, which is the biggest filter.",
                    "Failing to explain your projects clearly and technically in the interview.",
                    "Not researching IBM's current focus areas — AI, hybrid cloud, and quantum computing.",
                    "Using a poorly formatted resume that fails ATS parsing.",
                ].map((mistake, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                        <span className="text-red-500">✘</span>
                        {mistake}
                    </li>
                ))}
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                FAQs — IBM Graduate Hiring
            </h2>
            <div className="space-y-8">
                <div>
                    <p className="font-bold text-slate-900 text-lg mb-2">
                        Q1: Does IBM hire freshers off-campus?
                    </p>
                    <p className="text-slate-600">
                        A: Yes. IBM posts graduate roles on their website, LinkedIn, Naukri, and through IBM SkillsBuild partnerships. Off-campus applications are accepted throughout the year.
                    </p>
                </div>
                <div>
                    <p className="font-bold text-slate-900 text-lg mb-2">
                        Q2: Is there a service bond at IBM India?
                    </p>
                    <p className="text-slate-600">
                        A: IBM India generally does not impose a service bond on freshers hired through the standard process. Confirm with your recruiter during the offer stage.
                    </p>
                </div>
                <div>
                    <p className="font-bold text-slate-900 text-lg mb-2">
                        Q3: How important are IBM certifications for getting hired?
                    </p>
                    <p className="text-slate-600">
                        A: IBM SkillsBuild certifications are free and recognized internally. Having relevant badges (cloud, AI, DevOps) gives your application a meaningful boost during screening.
                    </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-16 pt-8 border-t border-slate-100">
                <a
                    href="/jobs"
                    className="px-6 py-3 bg-primary text-white rounded-xl font-bold text-center hover:bg-primary/90 transition-all"
                >
                    Browse IBM and top MNC fresher jobs →
                </a>
                <a
                    href="/blog/deloitte-fresher-hiring-process"
                    className="px-6 py-3 border border-slate-200 text-slate-700 rounded-xl font-bold text-center hover:bg-slate-50 transition-all"
                >
                    Read Deloitte hiring guide →
                </a>
            </div>
        </div>
    ),
};
