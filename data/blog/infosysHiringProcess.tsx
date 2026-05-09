import React from "react";
import { BlogContent } from "./types";

export const infosysHiringProcess: BlogContent = {
    id: "infosys-hiring-process-freshers-2026",
    slug: "infosys-hiring-process-freshers-2026",
    title: "Infosys Hiring Process for Freshers 2026 – Full Guide",
    excerpt:
        "Everything freshers need to know about the Infosys recruitment process in 2026, including InfyTQ, rounds, preparation strategy, and insider tips.",
    category: "Interview Guides",
    author: "TechHub Admin",
    date: "April 23, 2026",
    readTime: "10 min",
    techId: "career",
    color: "bg-indigo-600",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop",
    content: (
        <div className="prose prose-slate max-w-none prose-lg">
            <p>
                Infosys is one of the largest IT employers for freshers in India and globally. The company hires thousands of graduates each year through its structured recruitment process. If you are a 2025 or 2026 pass-out looking to join Infosys, understanding how the hiring works will give you a clear advantage over other candidates.
            </p>
            <p>
                Infosys primarily hires freshers through two pathways — InfyTQ (their own learning and hiring platform) and the InfyCampus drive conducted at colleges. Both paths lead to roles like Systems Engineer or Technology Analyst depending on your performance. This guide covers both routes in detail.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Infosys Fresher Recruitment Routes in 2026
            </h2>
            <p>
                The InfyTQ route requires you to register on the InfyTQ platform, complete their courses, and clear a certification exam called the Specialist Programmer test. Scoring above the cut-off gives you direct shortlisting. The campus route involves an aptitude test followed by interviews held at your college or a nearby Infosys campus.
            </p>
            <p>
                Infosys also runs referral-based hiring and direct applications through their careers portal. Off-campus applicants can apply through the Infosys website and appear for the same aptitude test as campus candidates.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Key Skills Tested in the Infosys Hiring Process
            </h2>
            <ul className="space-y-4 my-8">
                <li className="flex items-start gap-3">
                    <span className="text-indigo-600 mt-1">✔</span>
                    <span><strong>Quantitative Aptitude:</strong> Number systems, percentages, algebra, time-distance, and probability are frequently tested sections.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-indigo-600 mt-1">✔</span>
                    <span><strong>Logical Reasoning:</strong> Pattern recognition, arrangements, blood relations, syllogisms, and data interpretation appear regularly.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-indigo-600 mt-1">✔</span>
                    <span><strong>Verbal Ability:</strong> Reading comprehension, fill-in-the-blanks, sentence rearrangement, and vocabulary are included.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-indigo-600 mt-1">✔</span>
                    <span><strong>Coding (for SP/DSE roles):</strong> Two programming questions in Python or Java covering arrays, strings, and basic algorithms.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-indigo-600 mt-1">✔</span>
                    <span><strong>Technical Interview:</strong> OOP, DBMS, data structures, and questions based on the projects listed on your resume.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-indigo-600 mt-1">✔</span>
                    <span><strong>HR Interview:</strong> Situational questions, team scenarios, and standard questions on relocation and long-term goals.</span>
                </li>
            </ul>

            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl my-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Preparation Tips for Infosys 2026
                </h2>
                <ul className="space-y-3">
                    {[
                        "Register on InfyTQ early and complete the Python or Java foundation course.",
                        "Solve InfyTQ mock tests regularly to familiarise yourself with the question format.",
                        "Target 30 aptitude and 2 coding problems every day during your prep phase.",
                        "Revise DBMS concepts like joins, normalisation, and basic SQL queries.",
                        "Prepare concise explanations of your final year or mini projects.",
                        "Keep your InfyTQ score above 65% to improve your shortlisting chances.",
                    ].map((tip, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                            <span className="w-2 h-2 rounded-full bg-indigo-600" />
                            {tip}
                        </li>
                    ))}
                </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Common Mistakes to Avoid
            </h2>
            <ul className="space-y-3 my-8">
                {[
                    "Not completing InfyTQ certification before applying — it significantly reduces shortlisting chances.",
                    "Underestimating the reasoning section — it is one of the harder parts for most candidates.",
                    "Listing projects you cannot explain clearly in the technical interview.",
                    "Missing the HR round preparation — Infosys HR interviewers ask detailed scenario questions.",
                    "Applying only through campus and ignoring the off-campus InfyTQ route.",
                ].map((mistake, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                        <span className="text-red-500">✘</span>
                        {mistake}
                    </li>
                ))}
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                FAQs – Infosys Hiring Process for Freshers
            </h2>
            <div className="space-y-8">
                <div>
                    <p className="font-bold text-slate-900 text-lg mb-2">
                        Q1: What is the difference between Infosys Systems Engineer and DSE roles?
                    </p>
                    <p className="text-slate-600">
                        A: Systems Engineer is the standard fresher role. Digital Specialist Engineer (DSE) is a higher-paying role that requires clearing a tougher coding test during the selection process. Both are open to freshers.
                    </p>
                </div>
                <div>
                    <p className="font-bold text-slate-900 text-lg mb-2">
                        Q2: Can non-IT branches apply to Infosys?
                    </p>
                    <p className="text-slate-600">
                        A: Yes. Infosys accepts applications from all engineering branches and also from science and commerce graduates for specific roles. Check the official careers page for eligibility criteria by role.
                    </p>
                </div>
                <div>
                    <p className="font-bold text-slate-900 text-lg mb-2">
                        Q3: How many times can I take the InfyTQ exam?
                    </p>
                    <p className="text-slate-600">
                        A: InfyTQ allows a limited number of attempts. Check their current policy on the platform itself, as attempt limits may change across batches.
                    </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-16 pt-8 border-t border-slate-100">
                <a
                    href="/jobs"
                    className="px-6 py-3 bg-primary text-white rounded-xl font-bold text-center hover:bg-primary/90 transition-all"
                >
                    Check latest fresher jobs here →
                </a>
                <a
                    href="/blog/interview-questions"
                    className="px-6 py-3 border border-slate-200 text-slate-700 rounded-xl font-bold text-center hover:bg-slate-50 transition-all"
                >
                    Read interview questions guide →
                </a>
            </div>
        </div>
    ),
};
