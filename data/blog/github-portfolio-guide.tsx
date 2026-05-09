import React from "react";
import { BlogContent } from "./types";

export const githubPortfolioGuide: BlogContent = {
    id: "how-to-build-github-portfolio-hired",
    slug: "github-portfolio-guide",
    title: "How to Build a GitHub Portfolio That Gets You Hired as a Fresher",
    excerpt:
        "A step-by-step guide to building a GitHub portfolio that impresses recruiters — what to include, how to present projects, and profile tips.",
    category: "Career Guides",
    author: "TechHub Admin",
    date: "April 29, 2026",
    readTime: "10 min",
    techId: "career",
    color: "bg-gray-800",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?q=80&w=2076&auto=format&fit=crop",
    content: (
        <div className="prose prose-slate max-w-none prose-lg">
            <p>
                In today's IT hiring landscape, your GitHub profile is your second resume. Recruiters at product companies, startups, and even many IT service companies actively look at GitHub to verify skills, see real code, and assess how you work on projects. A well-built GitHub portfolio can get you shortlisted even without prior work experience.
            </p>
            <p>
                This guide walks you through building a GitHub portfolio that actually gets you hired — what to put on it, how to present your projects, and the small details that make a big difference to recruiters.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Why GitHub Matters for Fresher Hiring
            </h2>
            <p>
                Most freshers list "Java," "Python," or "React" on their resumes with nothing to back it up. GitHub lets you show, not just tell. A recruiter can open your repository, read your README, look at your commit history, and immediately see if your skill claim is real. This visual proof of work is something a resume alone cannot provide.
            </p>
            <p>
                Additionally, a consistent contribution graph (the green squares on your GitHub profile) signals that you code regularly — which is a strong positive signal for technical hiring managers.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Step 1: Optimize Your GitHub Profile
            </h2>
            <ul className="space-y-3 my-6">
                <li><strong>Profile Photo:</strong> Use a clear, professional photo — not a logo or cartoon.</li>
                <li><strong>Bio:</strong> Write a one-line bio like "Final-year CS student | Python, Django, React | Open to fresher roles."</li>
                <li><strong>Location:</strong> Add your city — some recruiters filter by location.</li>
                <li><strong>Website / Portfolio:</strong> Link to your personal portfolio or LinkedIn.</li>
                <li><strong>Pinned Repositories:</strong> Pin your 4–6 best projects at the top of your profile — these are the first things visitors see.</li>
                <li><strong>Profile README:</strong> Create a special repository named after your username (e.g., yourusername/yourusername) with a markdown README that introduces you, lists your skills, and links to your projects.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Step 2: Choose the Right Projects to Showcase
            </h2>
            <p>
                Not all projects belong on your portfolio GitHub. Focus on projects that demonstrate:
            </p>
            <ul className="space-y-3 my-6">
                <li><strong>Real-world relevance:</strong> A task manager, e-commerce app, weather app with API, or a data analysis project — things that solve real problems.</li>
                <li><strong>Full-stack or end-to-end thinking:</strong> Even a small project with a frontend, backend, and database shows more than a single-file script.</li>
                <li><strong>Domain interest:</strong> If you want to enter data science, include Python notebooks with visualizations. For web dev, include a deployed React or Next.js app.</li>
                <li><strong>Originality:</strong> Clones of tutorials are fine for learning but don't showcase original thinking. Customize them — add features, change use cases.</li>
            </ul>
            <p>
                Aim for 3–5 strong, documented projects rather than 20 half-finished ones. Quality over quantity always wins.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Step 3: Write a Great README for Every Project
            </h2>
            <p>
                The README is the first thing a recruiter reads when they open your repository. A great README includes:
            </p>
            <ul className="space-y-3 my-6">
                <li><strong>Project Title and Description:</strong> One or two sentences explaining what the project does and the problem it solves.</li>
                <li><strong>Tech Stack:</strong> List languages, frameworks, and tools used — Python, Flask, PostgreSQL, etc.</li>
                <li><strong>Features:</strong> 4–6 bullet points of what the app can do.</li>
                <li><strong>Screenshots or Demo Link:</strong> A screenshot or GIF of the working app is extremely powerful. Include a link to a live demo if deployed.</li>
                <li><strong>Setup Instructions:</strong> How to clone, install dependencies, and run the project locally. This shows professional code habits.</li>
                <li><strong>Your Contribution:</strong> If the project was a team effort, specify clearly what you built.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Step 4: Make Your Commit History Clean and Consistent
            </h2>
            <p>
                A recruiter who looks at your commits wants to see thoughtful, incremental progress — not one giant commit with everything pushed at once.
            </p>
            <ul className="space-y-3 my-6">
                <li>Use clear commit messages like "Add user authentication with JWT" instead of "update" or "fix stuff."</li>
                <li>Commit small, logical chunks of work — one feature or fix per commit.</li>
                <li>Code daily or at least weekly to maintain an active contribution graph.</li>
                <li>Use branches for features (e.g., feature/login-page) and merge via pull requests — this mimics real team workflows.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Step 5: Deploy at Least One Project
            </h2>
            <p>
                A live, deployable project is significantly more impressive than one that only runs locally. Free deployment options for freshers include:
            </p>
            <ul className="space-y-3 my-6">
                <li><strong>Vercel or Netlify:</strong> For React, Next.js, or static web apps — deploy in minutes for free.</li>
                <li><strong>Render or Railway:</strong> For Node.js, Python Flask/Django, or full-stack apps.</li>
                <li><strong>GitHub Pages:</strong> For static HTML/CSS/JS projects directly from your repository.</li>
                <li><strong>Streamlit Cloud:</strong> For Python data science or ML applications.</li>
            </ul>
            <p>
                Include the deployed URL in your README and on your resume. Being able to say "here is the live app" is a huge differentiator.
            </p>

            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl my-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    GitHub Portfolio Checklist for Freshers
                </h2>
                <ul className="space-y-3">
                    {[
                        "Profile photo, bio, and location filled in clearly and professionally.",
                        "Profile README created with skills, links, and a brief introduction.",
                        "4–6 best projects pinned on the profile page.",
                        "Every pinned project has a complete README with tech stack, features, and setup.",
                        "At least one project is deployed with a live link.",
                        "Commit messages are descriptive and the commit history shows steady progress.",
                    ].map((tip, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                            <span className="w-2 h-2 rounded-full bg-gray-800" />
                            {tip}
                        </li>
                    ))}
                </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Common GitHub Mistakes Freshers Make
            </h2>
            <ul className="space-y-3 my-8">
                {[
                    "Having a profile full of empty or single-file repositories with no README.",
                    "Uploading entire tutorial clones without any customization or extension.",
                    "Using vague commit messages like 'update', 'final', or 'asdf'.",
                    "Never contributing to open source — even small documentation fixes count.",
                    "Not linking GitHub on their resume or LinkedIn profile.",
                ].map((mistake, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                        <span className="text-red-500">✘</span>
                        {mistake}
                    </li>
                ))}
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                FAQs — GitHub Portfolio for Freshers
            </h2>
            <div className="space-y-8">
                <div>
                    <p className="font-bold text-slate-900 text-lg mb-2">
                        Q1: How many projects should I have on GitHub as a fresher?
                    </p>
                    <p className="text-slate-600">
                        A: Three to five well-documented, working projects are ideal. More projects with no README or deployment add no value. Focus on depth over breadth.
                    </p>
                </div>
                <div>
                    <p className="font-bold text-slate-900 text-lg mb-2">
                        Q2: Should I contribute to open source projects as a fresher?
                    </p>
                    <p className="text-slate-600">
                        A: Yes, even small contributions — fixing typos, improving documentation, or solving beginner-friendly issues — demonstrate real-world collaboration skills. Look for repos tagged "good first issue" on GitHub.
                    </p>
                </div>
                <div>
                    <p className="font-bold text-slate-900 text-lg mb-2">
                        Q3: Does GitHub really matter for service company hiring?
                    </p>
                    <p className="text-slate-600">
                        A: For pure service companies, it matters less during initial screening but can differentiate you in the technical interview. For startups and product companies, a strong GitHub profile can get you directly shortlisted.
                    </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-16 pt-8 border-t border-slate-100">
                <a
                    href="/jobs"
                    className="px-6 py-3 bg-primary text-white rounded-xl font-bold text-center hover:bg-primary/90 transition-all"
                >
                    Browse IT and developer fresher jobs →
                </a>
                <a
                    href="/blog/ats-resume-tips-freshers"
                    className="px-6 py-3 border border-slate-200 text-slate-700 rounded-xl font-bold text-center hover:bg-slate-50 transition-all"
                >
                    Make your resume ATS-friendly →
                </a>
            </div>
        </div>
    ),
};
