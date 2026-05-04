import React from "react";
import { BlogContent } from "./types";

export const atsResumeTipsFreshers: BlogContent = {
    id: "ats-resume-tips-freshers-it-2026",
    slug: "ats-resume-tips-freshers-2026",
    title:
        "ATS‑Friendly Resume Tips for Freshers in IT 2026 (Complete Guide)",
    excerpt:
        "How to make your fresher resume ATS‑friendly in 2026, with simple formatting, keyword‑optimization, and section‑wise tips for IT jobs.",
    category: "Career Guides",
    author: "TechHub Admin",
    date: "April 23, 2026",
    readTime: "10 min",
    techId: "career",
    color: "bg-orange-500",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1586282391129-76a6df230234?q=80&w=2070&auto=format&fit=crop",
    content: (
        <div className="prose prose-slate max-w-none prose-lg">
            <p>
                Many fresher applications never reach humans because Applicant Tracking Systems (ATS) filter them first. An ATS‑friendly resume increases your chances of passing through these filters and landing in the recruiter’s inbox. In 2026, even small formatting and wording changes can decide whether your resume is seen or ignored.
            </p>

            <p>
                If you are searching for ATS‑friendly resume tips for freshers in IT 2026, focus on simple structure, keyword‑matching, and clean, readable content. This guide shows you how to organize your resume for both ATS and human recruiters.
            </p>

            

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                What Is an ATS‑Friendly Resume?
            </h2>
            <p>
                An ATS‑friendly resume is a clean, structured document that an Applicant Tracking System can easily read and score. These systems scan for skills, keywords, and clear sections like “Experience,” “Projects,” “Skills,” and “Education.” Resumes with tables, images, or fancy layouts often score poorly or get rejected.
            </p>

            <p>
                For IT fresher resumes in 2026, that means using a simple layout, standard headings, and readable fonts. Avoid heavy colors, logos, and sidebars that confuse the ATS.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                ATS‑Friendly Resume Tips for Freshers in IT
            </h2>
            <ul className="space-y-4 my-8">
                <li className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1">✔</span>
                    <span>
                        Use a one‑column, simple layout without complex tables or text boxes.
                    </span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1">✔</span>
                    <span>
                        Save your resume as a PDF with a clean, readable font like Calibri, Arial, or Inter.
                    </span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1">✔</span>
                    <span>
                        Use standard headings like “Summary,” “Skills,” “Projects,” “Education,” and “Certifications.”
                    </span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1">✔</span>
                    <span>
                        Include keywords that match the job description: role title, tools, and basic skills.
                    </span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1">✔</span>
                    <span>
                        Keep your resume to one page if you are a fresher or soon‑to‑be‑graduate.
                    </span>
                </li>
                <li className="flex items-start gap-3">
                    <span className="text-orange-500 mt-1">✔</span>
                    <span>
                        Avoid images, icons, and charts that may confuse the ATS parser.
                    </span>
                </li>
            </ul>

            

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                How to Optimize Sections for ATS
            </h2>
            <ul className="space-y-3 my-6">
                <li>
                    <strong>Summary / Profile:</strong> 2–3 lines telling your target role, 1–2 key skills, and your fresher status.
                </li>
                <li>
                    <strong>Skills:</strong> Group into areas like “Languages,” “Frameworks,” “Testing Tools,” etc., matching the job keywords.
                </li>
                <li>
                    <strong>Projects:</strong> 2–3 strong projects with clear descriptions using tools and outcomes.
                </li>
                <li>
                    <strong>Education:</strong> List degree, university, year, and key subjects or projects.
                </li>
                <li>
                    <strong>Certifications / Additional Info:</strong> Include only relevant courses and links.
                </li>
            </ul>

            <p>
                ATS systems look for consistency and scan for repeated or relevant keywords. If the job asks for “JavaScript, React, Node.js,” make sure these exact words appear in your skills and projects sections.
            </p>

            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl my-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Practical Tips for Freshers
                </h2>
                <ul className="space-y-3">
                    {[
                        "Use a simple, readable layout with no tables or sidebars.",
                        "Save your resume as PDF and avoid password‑protected or image‑only files.",
                        "Customize keywords for each role by updating skills and project wording.",
                        "Spell tools and technologies clearly, for example ‘React’, not ‘ReactJS’ unless the job uses that exact term.",
                        "Avoid creative file names like ‘Creative_Resume_V3.docx’; use ‘FirstName_Resume.pdf’.",
                        "Check your resume with a friend to ensure it still looks professional even without fancy design.",
                    ].map((tip, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                            <span className="w-2 h-2 rounded-full bg-orange-500" />
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
                    "Using a two‑column layout that confuses the ATS parser.",
                    "Hiding important skills inside images or text‑boxes.",
                    "Writing a very long, generic resume with irrelevant details.",
                    "Ignoring the keywords mentioned in the job description.",
                    "Naming your file with spaces or special characters.",
                ].map((mistake, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                        <span className="text-red-500">✘</span>
                        {mistake}
                    </li>
                ))}
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                FAQs – ATS‑Friendly Resume Tips for Freshers in 2026
            </h2>
            <div className="space-y-8">
                <div>
                    <p className="font-bold text-slate-900 text-lg mb-2">
                        Q1: Do ATS‑friendly resumes look boring?
                    </p>
                    <p className="text-slate-600">
                        A: They can still look professional and clean while keeping simple formatting. ATS‑friendliness is not the same as “boring.”
                    </p>
                </div>
                <div>
                    <p className="font-bold text-slate-900 text-lg mb-2">
                        Q2: Should I use a template?
                    </p>
                    <p className="text-slate-600">
                        A: Yes, but choose a simple one‑column template and avoid anything with images or sidebars.
                    </p>
                </div>
                <div>
                    <p className="font-bold text-slate-900 text-lg mb-2">
                        Q3: How much should I copy the job description?
                    </p>
                    <p className="text-slate-600">
                        A: Use keywords that match your true skills, but don’t copy full paragraphs. Reflect the wording, not every line.
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