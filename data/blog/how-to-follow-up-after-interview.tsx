import React from "react";
import { BlogContent } from "./types";

export const howToFollowUpAfterInterview: BlogContent = {
    id: "how-to-follow-up-after-job-interview",
    slug: "how-to-follow-up-after-interview",
    title: "How to Follow Up After a Job Interview — A Fresher's Guide",
    excerpt:
        "Learn when and how to follow up after a job interview — with email templates, timing tips, and dos and don'ts for freshers.",
    category: "Career Guides",
    author: "TechHub Admin",
    date: "April 30, 2026",
    readTime: "8 min",
    techId: "career",
    color: "bg-cyan-600",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=2070&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1565728744382-61accd4aa148?q=80&w=2070&auto=format&fit=crop",
    content: (
        <div className="prose prose-slate max-w-none prose-lg">
            <p>
                You have completed your interview — technical rounds, HR, and everything in between. Now comes the part most freshers overlook: the follow-up. A thoughtful, well-timed follow-up email can reinforce a positive impression, signal professionalism, and even nudge a slow-moving decision in your favour.
            </p>
            <p>
                This guide explains when to follow up after a job interview, how to do it without being annoying, and exactly what to write — with templates you can adapt immediately.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Why Following Up Matters
            </h2>
            <p>
                Many recruiters manage hundreds of candidates at the same time. A polite follow-up keeps you on their radar, signals genuine interest, and shows professional maturity — something that is rare and notable among freshers. Studies consistently show that candidates who follow up are more likely to be remembered positively, all else being equal.
            </p>
            <p>
                Following up is not desperate — it is expected. The key is timing and tone.
            </p>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                When to Follow Up After an Interview
            </h2>
            <ul className="space-y-3 my-6">
                <li><strong>Thank-you email:</strong> Send within 24 hours of the interview — ideally the same day or next morning.</li>
                <li><strong>Status follow-up:</strong> If you were told results in "one week" and haven't heard back, follow up one to two business days after the deadline passed.</li>
                <li><strong>Second follow-up:</strong> If there is still no response after your first follow-up, wait 5–7 business days before reaching out again — once more is acceptable.</li>
                <li><strong>After that:</strong> If there is no response after two follow-ups, move on. Keep applying to other companies and treat this as a learning experience.</li>
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                How to Write a Follow-Up Email — Step by Step
            </h2>
            <p>
                A good follow-up email has five components: a clear subject line, a warm opening, a brief reminder of your interview, an expression of continued interest, and a polite close. Keep it short — under 150 words.
            </p>

            <h3 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">
                Template 1: Thank-You Email (Within 24 Hours)
            </h3>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6 font-mono text-sm text-slate-700 whitespace-pre-line">
{`Subject: Thank You — [Role Name] Interview on [Date]

Dear [Interviewer's Name],

Thank you for taking the time to speak with me today regarding the [Role Name] position at [Company Name]. I enjoyed learning about the team's work on [mention one specific project or topic discussed].

Our conversation reinforced my enthusiasm for this role and I am confident my skills in [mention 1–2 key skills] would be a strong fit. Please don't hesitate to reach out if you need any additional information from my end.

I look forward to hearing from you.

Warm regards,
[Your Full Name]
[Phone Number] | [LinkedIn URL]`}
            </div>

            <h3 className="text-2xl font-semibold text-slate-800 mt-8 mb-4">
                Template 2: Status Follow-Up (After Deadline Passed)
            </h3>
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 my-6 font-mono text-sm text-slate-700 whitespace-pre-line">
{`Subject: Following Up — [Role Name] Application

Dear [Recruiter's Name],

I hope you are doing well. I wanted to follow up on my interview for the [Role Name] position on [Date]. I understand the process may take time and I remain very interested in joining [Company Name].

Could you please share an update on the timeline when convenient?

Thank you for your time and consideration.

Best regards,
[Your Full Name]
[Phone Number]`}
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                What to Do While Waiting for a Response
            </h2>
            <ul className="space-y-3 my-6">
                <li>Continue applying to other companies — don't put all your hopes on one opportunity.</li>
                <li>Reflect on questions you found difficult in the interview and study those topics.</li>
                <li>Connect with the interviewer on LinkedIn with a brief, personalized message.</li>
                <li>Update your resume if you gained any new skills or completed certifications recently.</li>
            </ul>

            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl my-12">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Dos and Don'ts of Interview Follow-Ups
                </h2>
                <ul className="space-y-3">
                    {[
                        "Do: Personalize each email — mention the interviewer's name and something specific from your conversation.",
                        "Do: Keep emails short — no more than 3–4 short paragraphs.",
                        "Do: Follow up through the same channel as your interview communication (email to email, LinkedIn to LinkedIn).",
                        "Don't: Call the recruiter unless specifically told to — most prefer email.",
                        "Don't: Follow up more than twice — beyond that, it can come across as desperate.",
                        "Don't: Ask about salary or joining date in a follow-up email — wait for the company to bring this up.",
                    ].map((tip, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700">
                            <span className="w-2 h-2 rounded-full bg-cyan-600" />
                            {tip}
                        </li>
                    ))}
                </ul>
            </div>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                Common Mistakes Freshers Make When Following Up
            </h2>
            <ul className="space-y-3 my-8">
                {[
                    "Sending a follow-up email within hours of the interview — give them at least 24 hours.",
                    "Writing a long, rambling email when a brief, focused one is far more effective.",
                    "Not proofreading — typos in a follow-up email are especially damaging.",
                    "Ghosting the follow-up entirely and just waiting — missed opportunity to reinforce your impression.",
                    "Using the same generic template without personalizing it to the company or role.",
                ].map((mistake, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                        <span className="text-red-500">✘</span>
                        {mistake}
                    </li>
                ))}
            </ul>

            <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
                FAQs — Following Up After a Job Interview
            </h2>
            <div className="space-y-8">
                <div>
                    <p className="font-bold text-slate-900 text-lg mb-2">
                        Q1: Should I follow up if the interviewer said "we'll let you know"?
                    </p>
                    <p className="text-slate-600">
                        A: Yes, but wait until the implied timeframe has passed. If they said "we'll let you know in a week" and a week has gone by, a single polite follow-up is perfectly appropriate.
                    </p>
                </div>
                <div>
                    <p className="font-bold text-slate-900 text-lg mb-2">
                        Q2: Is WhatsApp a good channel to follow up with a recruiter?
                    </p>
                    <p className="text-slate-600">
                        A: Only if the recruiter has communicated with you via WhatsApp previously. Email is the safest and most professional channel unless told otherwise.
                    </p>
                </div>
                <div>
                    <p className="font-bold text-slate-900 text-lg mb-2">
                        Q3: What if I get rejected after following up?
                    </p>
                    <p className="text-slate-600">
                        A: Politely thank the recruiter for their time and ask if they can share feedback. Rejection with feedback is valuable. Leave on a positive note — recruiters sometimes keep strong candidates in mind for future openings.
                    </p>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-16 pt-8 border-t border-slate-100">
                <a
                    href="/jobs"
                    className="px-6 py-3 bg-primary text-white rounded-xl font-bold text-center hover:bg-primary/90 transition-all"
                >
                    Browse fresher job openings →
                </a>
                <a
                    href="/blog/tell-me-about-yourself-fresher"
                    className="px-6 py-3 border border-slate-200 text-slate-700 rounded-xl font-bold text-center hover:bg-slate-50 transition-all"
                >
                    How to answer "Tell me about yourself" →
                </a>
            </div>
        </div>
    ),
};
