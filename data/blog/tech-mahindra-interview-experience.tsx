import React from "react";
import { BlogContent } from "./types";

export const techMahindraInterviewExperience: BlogContent = {
    id: "tech-mahindra-fresher-interview-experience",
    slug: "tech-mahindra-interview-experience",
    title: "Tech Mahindra Fresher Interview Experience — What to Expect",
    excerpt:
        "Real insights into Tech Mahindra's fresher interview process — rounds, questions asked, preparation tips, and what gets you selected.",
    category: "Interview Experience",
    author: "TechHub Admin",
    date: "April 27, 2026",
    readTime: "9 min",
    techId: "career",
    color: "bg-red-500",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2070&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2070&auto=format&fit=crop",
    content: (
        <div className="prose prose-slate max-w-none prose-lg">
            <p>
                Tech Mahindra is one of India's top IT service companies and a major fresher recruiter every year. Whether you are appearing through a campus drive or an off-campus challenge, knowing what the Tech Mahindra interview experience actually looks like gives you a real advantage in preparation.
            </p>
            <p>
                This guide is based on patterns from multiple fresher interview experiences at Tech Mahindra — covering the assessment structure, technical questions asked, common HR questions, and tips that get freshers selected.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Tech Mahindra Fresher Hiring — Overview
            </h2>
            <p>
                Tech Mahindra recruits freshers primarily for two tracks:
            </p>
            <ul className="space-y-3 my-6">
                <li><strong>Smart Hire / LEAP Program:</strong> Entry-level software engineer roles for B.E. / B.Tech / MCA graduates with a standard package.</li>
                <li><strong>Digital / Specialized Roles:</strong> Slightly higher packages for candidates with skills in cloud, data, cybersecurity, or AI.</li>
            </ul>
            <p>
                The hiring process typically has three to four stages: an online assessment, a technical interview, and an HR round. Some drives include an additional group discussion round.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Round 1: Online Assessment
            </h2>
            <p>
                The online test is usually conducted on platforms like AMCAT, Cocubes, or eLitmus. It includes:
            </p>
            <ul className="space-y-3 my-6">
                <li><strong>Quantitative Aptitude:</strong> Profit and loss, time and work, percentages, probability.</li>
                <li><strong>Logical Reasoning:</strong> Blood relations, seating arrangements, series patterns.</li>
                <li><strong>Verbal English:</strong> Sentence correction, reading comprehension, vocabulary.</li>
                <li><strong>Coding Section:</strong> One or two programming problems in languages like Python, C, Java, or C++. Questions are typically easy to medium difficulty.</li>
                <li><strong>Pseudo Code / Computer Science Basics:</strong> Some tests include output-prediction and CS MCQs.</li>
            </ul>
            <p>
                The cutoff for each section is independent — scoring poorly in one section can disqualify you even if you score well overall. Manage your time carefully.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Round 2: Technical Interview
            </h2>
            <p>
                The technical interview at Tech Mahindra is usually 30 to 45 minutes and covers your fundamentals along with your project work. Here are commonly reported question areas:
            </p>
            <ul className="space-y-3 my-6">
                <li><strong>OOPs Concepts:</strong> Inheritance, polymorphism, encapsulation, abstraction — definitions and real-world examples.</li>
                <li><strong>Data Structures:</strong> Arrays, stacks, queues, linked lists — use cases and complexity.</li>
                <li><strong>DBMS:</strong> SQL queries (joins, group by, having), normalization, keys.</li>
                <li><strong>OS Concepts:</strong> Process vs thread, scheduling algorithms, deadlocks.</li>
                <li><strong>Networking Basics:</strong> OSI model, TCP/IP, DNS, HTTP vs HTTPS.</li>
                <li><strong>Your Projects:</strong> Explain your project in 3 minutes — tech stack, your role, challenges, and outcomes.</li>
            </ul>
            <p>
                Interviewers at Tech Mahindra are known to go deep on whatever you mention on your resume. Only list what you know well.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Round 3: Group Discussion (in select drives)
            </h2>
            <p>
                Some campus drives include a group discussion on a current topic — technology trends, workplace challenges, or social issues. Tips for GD success:
            </p>
            <ul className="space-y-3 my-6">
                <li>Initiate if you have a clear point, but don't rush just to be first.</li>
                <li>Acknowledge others' points before presenting yours — it shows maturity.</li>
                <li>Speak clearly, avoid filler words, and maintain confident body language.</li>
                <li>Summarize or add to the conclusion if given the chance.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Round 4: HR Interview
            </h2>
            <p>
                The HR round is generally straightforward and is focused on your attitude, communication, and willingness to join. Common questions include:
            </p>
            <ul className="space-y-3 my-6">
                <li>"Tell me about yourself."</li>
                <li>"Why Tech Mahindra and not another IT company?"</li>
                <li>"What are your strengths and weaknesses?"</li>
                <li>"Are you comfortable with service-based work and client projects?"</li>
                <li>"What are your salary expectations?" (Freshers usually accept the stated package.)</li>
                <li>"Are you willing to relocate to any city?"</li>
            </ul>

            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl my-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Tips from Real Tech Mahindra Interview Experiences
                </h2>
                <ul className="space-y-3">
                    {[
                        "Practice writing SQL queries by hand — they are commonly tested on paper or a shared screen.",
                        "Be very honest about your projects; vague answers make interviewers push harder.",
                        "Prepare a crisp 2-minute self-introduction that covers your degree, skills, and projects.",
                        "Know at least two sorting algorithms and be ready to explain their time complexity.",
                        "Research Tech Mahindra's recent acquisitions and work in 5G and AI to show company interest.",
                        "Don't leave the verbal section of the assessment incomplete — all sections are cutoff-based.",
                    ].map((tip, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                            <span className="w-2 h-2 rounded-full bg-red-500" />
                            {tip}
                        </li>
                    ))}
                </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Tech Mahindra Fresher Package
            </h2>
            <p>
                For the Smart Hire program, Tech Mahindra typically offers ₹3.25–3.75 LPA as a base package for regular engineering hires. For digital and specialized tracks, packages range from ₹5–7 LPA. The company also provides joining bonuses and performance increments after the first year.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Common Mistakes to Avoid
            </h2>
            <ul className="space-y-3 my-8">
                {[
                    "Attempting the coding section without practicing beforehand — even easy questions need practice.",
                    "Being overconfident in the HR round and giving rehearsed, robotic answers.",
                    "Not knowing the basics of OOPs even if you listed Java or Python on your resume.",
                    "Failing to ask one thoughtful question at the end of the interview.",
                    "Ignoring the GD round preparation assuming it's not important.",
                ].map((mistake, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                        <span className="text-red-500">✘</span>
                        {mistake}
                    </li>
                ))}
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                FAQs — Tech Mahindra Fresher Interview
            </h2>
            <div className="space-y-8">
                <div>
                    <p className="font-bold text-slate-900 text-lg mb-2">
                        Q1: Is there a bond at Tech Mahindra?
                    </p>
                    <p className="text-slate-600">
                        A: Tech Mahindra has historically required freshers to sign a one-year service bond in some batches. Always read your offer letter carefully and clarify with the HR recruiter.
                    </p>
                </div>
                <div>
                    <p className="font-bold text-slate-900 text-lg mb-2">
                        Q2: How many rounds are there in Tech Mahindra's fresher process?
                    </p>
                    <p className="text-slate-600">
                        A: Usually three to four rounds — online assessment, technical interview, optional GD, and HR interview. Campus drives may combine or skip certain rounds.
                    </p>
                </div>
                <div>
                    <p className="font-bold text-slate-900 text-lg mb-2">
                        Q3: What programming language should I code in during the assessment?
                    </p>
                    <p className="text-slate-600">
                        A: Python is the easiest for most freshers due to concise syntax. Java and C++ are also accepted. Choose the language you are most comfortable with.
                    </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-16 pt-8 border-t border-slate-100">
                <a
                    href="/jobs"
                    className="px-6 py-3 bg-primary text-white rounded-xl font-bold text-center hover:bg-primary/90 transition-all"
                >
                    Find Tech Mahindra and IT fresher openings →
                </a>
                <a
                    href="/blog/aptitude-test-30-days"
                    className="px-6 py-3 border border-slate-200 text-slate-700 rounded-xl font-bold text-center hover:bg-slate-50 transition-all"
                >
                    Prepare aptitude in 30 days →
                </a>
            </div>
        </div>
    ),
};
