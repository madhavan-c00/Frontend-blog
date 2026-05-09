import React from "react";
import { BlogContent } from "./types";

export const aptitudeTestPreparation30Days: BlogContent = {
    id: "how-to-prepare-aptitude-tests-30-days",
    slug: "aptitude-test-preparation-30-days",
    title: "How to Prepare for Aptitude Tests in 30 Days — Fresher's Study Plan",
    excerpt:
        "A practical 30-day study plan to crack aptitude tests for IT company placements — covering quant, reasoning, verbal, and coding sections.",
    category: "Exam Preparation",
    author: "TechHub Admin",
    date: "April 28, 2026",
    readTime: "10 min",
    techId: "career",
    color: "bg-violet-600",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?q=80&w=2070&auto=format&fit=crop",
    content: (
        <div className="prose prose-slate max-w-none prose-lg">
            <p>
                Aptitude tests are the first major filter in almost every IT company's fresher hiring process. Whether you are applying to Infosys, Wipro, TCS, Cognizant, or any MNC, you will face an aptitude round covering quantitative ability, logical reasoning, and verbal English — and often a coding section as well.
            </p>
            <p>
                The good news: aptitude tests are very learnable with consistent practice. This 30-day plan shows you exactly what to study, when to study it, and which resources to use — even if you are starting from scratch.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                What Does a Fresher Aptitude Test Cover?
            </h2>
            <ul className="space-y-3 my-6">
                <li><strong>Quantitative Aptitude:</strong> Percentages, profit and loss, time-speed-distance, time and work, ratios, data interpretation.</li>
                <li><strong>Logical Reasoning:</strong> Blood relations, syllogisms, series completion, coding-decoding, seating arrangements, directions.</li>
                <li><strong>Verbal Ability:</strong> Reading comprehension, sentence correction, fill in the blanks, synonyms and antonyms, para jumbles.</li>
                <li><strong>Coding:</strong> One to two programming problems in C, C++, Java, or Python (for tech roles).</li>
                <li><strong>Technical MCQs:</strong> Questions on OOPs, DBMS, OS, data structures — present in some company tests.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                30-Day Aptitude Preparation Plan
            </h2>

            <h3 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">
                Week 1 (Days 1–7): Build Quantitative Foundations
            </h3>
            <ul className="space-y-3 my-6">
                <li><strong>Day 1–2:</strong> Percentages, fractions, ratio and proportion.</li>
                <li><strong>Day 3–4:</strong> Profit and loss, simple and compound interest.</li>
                <li><strong>Day 5–6:</strong> Time and work, pipes and cisterns.</li>
                <li><strong>Day 7:</strong> Revision + 20-question timed mock on Week 1 topics.</li>
            </ul>
            <p>
                Use R.S. Aggarwal's Quantitative Aptitude or free resources like IndiaBIX for daily practice sets. Aim for 30 to 40 questions per day.
            </p>

            <h3 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">
                Week 2 (Days 8–14): Logical and Analytical Reasoning
            </h3>
            <ul className="space-y-3 my-6">
                <li><strong>Day 8–9:</strong> Number series, letter series, coding-decoding.</li>
                <li><strong>Day 10–11:</strong> Blood relations, directions and distance.</li>
                <li><strong>Day 12–13:</strong> Seating arrangements, syllogisms, statement-conclusion.</li>
                <li><strong>Day 14:</strong> Full reasoning mock test + error analysis.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">
                Week 3 (Days 15–21): Verbal Ability and Speed Building
            </h3>
            <ul className="space-y-3 my-6">
                <li><strong>Day 15–16:</strong> Grammar rules — tenses, articles, prepositions, subject-verb agreement.</li>
                <li><strong>Day 17–18:</strong> Reading comprehension — practice 2 passages per day.</li>
                <li><strong>Day 19–20:</strong> Para jumbles, sentence completion, synonyms and antonyms.</li>
                <li><strong>Day 21:</strong> Full verbal section mock + review weak areas from Weeks 1 and 2.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">
                Week 4 (Days 22–30): Coding, Full Mocks, and Refinement
            </h3>
            <ul className="space-y-3 my-6">
                <li><strong>Day 22–25:</strong> Solve 3–5 coding problems daily on LeetCode or HackerRank (easy level): patterns, strings, arrays, basic sorting.</li>
                <li><strong>Day 26–27:</strong> Full-length timed mock tests (90 minutes) simulating the real exam.</li>
                <li><strong>Day 28–29:</strong> Analyse errors, revisit weak topics, and do targeted practice.</li>
                <li><strong>Day 30:</strong> Light revision, rest, mental preparation.</li>
            </ul>

            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl my-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Best Free Resources for Aptitude Preparation
                </h2>
                <ul className="space-y-3">
                    {[
                        "IndiaBIX — large question bank for quant and reasoning with explanations.",
                        "PrepInsta — company-specific aptitude sets for TCS, Wipro, Infosys, and more.",
                        "HackerRank and LeetCode — for coding practice aligned with placement tests.",
                        "Oliveboard and Testbook — for timed full-length mock tests.",
                        "YouTube channels like CareerRide and Unacademy for video explanations.",
                        "R.S. Aggarwal's Quantitative Aptitude book — the gold standard for offline preparation.",
                    ].map((tip, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                            <span className="w-2 h-2 rounded-full bg-violet-600" />
                            {tip}
                        </li>
                    ))}
                </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Tips to Score High in Aptitude Tests
            </h2>
            <ul className="space-y-4 my-8">
                <li className="flex items-start gap-3">
                    <span className="text-violet-600 mt-1">✔</span>
                    <span>Attempt each section within its time limit; do not spend more than 90 seconds on any single question.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-violet-600 mt-1">✔</span>
                    <span>Start with the section you are strongest in to build confidence and save time for harder parts.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-violet-600 mt-1">✔</span>
                    <span>In coding, write brute force first, then optimize if time permits — a working solution scores higher than an incomplete optimized one.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-violet-600 mt-1">✔</span>
                    <span>Practice under timed conditions daily from Week 3 onwards to build test-taking stamina.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-violet-600 mt-1">✔</span>
                    <span>Check if the test has negative marking and adjust your risk tolerance for guessing accordingly.</span>
                </li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Common Mistakes to Avoid
            </h2>
            <ul className="space-y-3 my-8">
                {[
                    "Studying topics without solving practice questions — reading alone is not enough.",
                    "Skipping the verbal section — it has independent cutoffs in most tests.",
                    "Practising without a timer — speed is as important as accuracy.",
                    "Not analysing wrong answers — reviewing mistakes is more valuable than doing more questions.",
                    "Leaving the coding section for the last moment — it needs consistent daily practice.",
                ].map((mistake, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                        <span className="text-red-500">✘</span>
                        {mistake}
                    </li>
                ))}
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                FAQs — Aptitude Test Preparation for Freshers
            </h2>
            <div className="space-y-8">
                <div>
                    <p className="font-bold text-slate-900 text-lg mb-2">
                        Q1: Is 30 days enough to prepare for aptitude tests from scratch?
                    </p>
                    <p className="text-slate-600">
                        A: Yes, if you commit 2–3 hours daily. Most freshers can build sufficient aptitude skills in 30 days with a structured plan. Start earlier if you have more time.
                    </p>
                </div>
                <div>
                    <p className="font-bold text-slate-900 text-lg mb-2">
                        Q2: Which company's aptitude test is hardest?
                    </p>
                    <p className="text-slate-600">
                        A: Product-based companies like Amazon, Microsoft, and Google have harder coding rounds. Among service companies, Accenture and Capgemini tests are moderate while TCS NQT and Infosys Spark are manageable with solid preparation.
                    </p>
                </div>
                <div>
                    <p className="font-bold text-slate-900 text-lg mb-2">
                        Q3: Do I need to know calculus or advanced math for aptitude tests?
                    </p>
                    <p className="text-slate-600">
                        A: No. Placement aptitude tests cover class 10 to 12 level arithmetic, not advanced mathematics. Focus on speed and accuracy with basic formulas.
                    </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-16 pt-8 border-t border-slate-100">
                <a
                    href="/jobs"
                    className="px-6 py-3 bg-primary text-white rounded-xl font-bold text-center hover:bg-primary/90 transition-all"
                >
                    Browse IT fresher jobs →
                </a>
                <a
                    href="/blog/coding-platforms-freshers"
                    className="px-6 py-3 border border-slate-200 text-slate-700 rounded-xl font-bold text-center hover:bg-slate-50 transition-all"
                >
                    Best free platforms to practice coding →
                </a>
            </div>
        </div>
    ),
};
