import React from "react";
import { BlogContent } from "./types";

export const onCampusVsOffCampusHiring: BlogContent = {
    id: "on-campus-vs-off-campus-hiring-freshers",
    slug: "on-campus-vs-off-campus-hiring",
    title: "On-Campus vs Off-Campus Hiring — What Freshers Should Know",
    excerpt:
        "Compare on-campus and off-campus hiring paths for freshers — advantages, challenges, strategies, and which route suits you better.",
    category: "Career Guides",
    author: "TechHub Admin",
    date: "April 29, 2026",
    readTime: "9 min",
    techId: "career",
    color: "bg-amber-500",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop",
    content: (
        <div className="prose prose-slate max-w-none prose-lg">
            <p>
                Every final-year student faces the same question: should I focus on my college placement cell or apply directly to companies on my own? Understanding the difference between on-campus and off-campus hiring helps you make a smarter decision — and in many cases, pursue both at the same time.
            </p>
            <p>
                This guide explains how each hiring route works, what its advantages and limitations are, and what strategies freshers should use depending on their college, skills, and career goals.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                What Is On-Campus Hiring?
            </h2>
            <p>
                On-campus hiring happens when companies visit your college to recruit directly from the student pool. The college's Training and Placement (T&P) cell coordinates with companies, manages eligibility, and schedules the entire recruitment process — from aptitude tests to final interviews — on or near campus.
            </p>
            <p>
                The key benefit is structure: companies come to you, the process is managed, and offers are extended while you are still in college. However, which companies visit depends entirely on your college's reputation and placement team relationships.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                What Is Off-Campus Hiring?
            </h2>
            <p>
                Off-campus hiring means applying to companies independently — through their career portals, LinkedIn, Naukri, Internshala, or third-party job boards. You are responsible for finding openings, applying, clearing screening, and following up — without the college's coordination.
            </p>
            <p>
                Off-campus opens access to companies that don't visit your institution, roles that are posted year-round, and a wider salary range — but requires more self-initiative and resilience.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                On-Campus Hiring — Advantages and Limitations
            </h2>
            <ul className="space-y-4 my-8">
                <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">✔</span>
                    <span><strong>Lower barrier to entry:</strong> Companies visiting campus accept the batch as pre-screened — eligibility filters (CGPA cutoffs) are already applied.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">✔</span>
                    <span><strong>Structure and coordination:</strong> The T&P cell handles communication, schedules, and documentation — reducing your administrative burden.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">✔</span>
                    <span><strong>Large batch hiring:</strong> Mass recruiters like TCS, Infosys, Wipro, and Cognizant hire hundreds in one campus drive — higher probability of selection.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✘</span>
                    <span><strong>Limited company choices:</strong> You can only access companies that visit your campus. Smaller or tier-3 colleges often miss out on premium companies.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✘</span>
                    <span><strong>Lower salary range:</strong> Mass campus recruiters often offer standard packages (₹3–4 LPA) that may not reflect your actual market value.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✘</span>
                    <span><strong>Role restrictions:</strong> On-campus drives sometimes have limited role diversity — mostly service-based IT roles.</span>
                </li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Off-Campus Hiring — Advantages and Limitations
            </h2>
            <ul className="space-y-4 my-8">
                <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">✔</span>
                    <span><strong>Access to more companies:</strong> You can apply to any company — startups, MNCs, product companies, and international firms.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">✔</span>
                    <span><strong>Higher salary potential:</strong> Roles at product companies or startups discovered off-campus often pay significantly more than mass campus offers.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-green-600 mt-1">✔</span>
                    <span><strong>Year-round availability:</strong> Off-campus roles are posted throughout the year — you are not limited to placement season.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✘</span>
                    <span><strong>More competition:</strong> You are competing with candidates from all colleges across India — or globally for some roles.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✘</span>
                    <span><strong>No hand-holding:</strong> You must self-manage every step — applications, follow-ups, scheduling, and negotiations.</span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-red-500 mt-1">✘</span>
                    <span><strong>Risk of rejection fatigue:</strong> Applying to dozens of companies without response can be mentally challenging without a structured approach.</span>
                </li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Which Path Should You Choose?
            </h2>
            <p>
                The smartest strategy is to pursue both simultaneously rather than choosing one. Here is a framework based on your situation:
            </p>
            <ul className="space-y-3 my-6">
                <li><strong>Tier-1 college with strong placement cell:</strong> Prioritize on-campus drives for stable offers. Pursue off-campus simultaneously for higher-paying product roles.</li>
                <li><strong>Tier-2 or Tier-3 college:</strong> Don't wait only for campus drives. Start off-campus applications 6 months before graduation. Use LinkedIn, Naukri, and company portals actively.</li>
                <li><strong>Strong technical skills but average CGPA:</strong> Off-campus is your friend. Build a GitHub portfolio, apply directly, and let your skills speak.</li>
                <li><strong>Average skills with decent CGPA:</strong> Focus on campus drives first while aggressively improving your coding and aptitude for off-campus applications.</li>
            </ul>

            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl my-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    How to Succeed at Off-Campus Hiring
                </h2>
                <ul className="space-y-3">
                    {[
                        "Build a strong LinkedIn profile — use keywords like 'fresher', 'open to work', and your tech stack.",
                        "Set up job alerts on LinkedIn, Naukri, and Instahyre with relevant role titles.",
                        "Apply within the first 24 hours of a job posting — early applications get more visibility.",
                        "Customize your resume for each role — update keywords based on the job description.",
                        "Follow companies you want to join and engage with their content on LinkedIn.",
                        "Track all applications in a spreadsheet — company, role, date, status, and follow-up date.",
                    ].map((tip, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                            <span className="w-2 h-2 rounded-full bg-amber-500" />
                            {tip}
                        </li>
                    ))}
                </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Common Mistakes Freshers Make
            </h2>
            <ul className="space-y-3 my-8">
                {[
                    "Relying only on campus placements and skipping off-campus preparation entirely.",
                    "Applying to off-campus roles with the same generic resume for every company.",
                    "Not networking on LinkedIn — connections from seniors at target companies can refer you directly.",
                    "Waiting until after graduation to start off-campus applications — start during the final year.",
                    "Ignoring smaller startups — they often offer learning, responsibility, and competitive salaries for freshers.",
                ].map((mistake, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                        <span className="text-red-500">✘</span>
                        {mistake}
                    </li>
                ))}
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                FAQs — On-Campus vs Off-Campus Hiring
            </h2>
            <div className="space-y-8">
                <div>
                    <p className="font-bold text-slate-900 text-lg mb-2">
                        Q1: Can I apply off-campus if I already have a campus offer?
                    </p>
                    <p className="text-slate-600">
                        A: Yes, though some colleges have placement policies that restrict this. Check your college's rules. If allowed, continue exploring — a better offer can improve your career significantly.
                    </p>
                </div>
                <div>
                    <p className="font-bold text-slate-900 text-lg mb-2">
                        Q2: Is it harder to get selected off-campus than on-campus?
                    </p>
                    <p className="text-slate-600">
                        A: The competition is broader but the process is often more merit-based. Your skills, projects, and resume quality matter more than your college name in most off-campus selections.
                    </p>
                </div>
                <div>
                    <p className="font-bold text-slate-900 text-lg mb-2">
                        Q3: How many off-campus applications should I send per week?
                    </p>
                    <p className="text-slate-600">
                        A: Aim for 10–20 targeted, customized applications per week rather than mass-applying with one generic resume. Quality applications get better response rates.
                    </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-16 pt-8 border-t border-slate-100">
                <a
                    href="/jobs"
                    className="px-6 py-3 bg-primary text-white rounded-xl font-bold text-center hover:bg-primary/90 transition-all"
                >
                    Explore fresher job openings →
                </a>
                <a
                    href="/blog/how-to-follow-up-after-interview"
                    className="px-6 py-3 border border-slate-200 text-slate-700 rounded-xl font-bold text-center hover:bg-slate-50 transition-all"
                >
                    How to follow up after an interview →
                </a>
            </div>
        </div>
    ),
};
