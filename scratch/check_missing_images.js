const fs = require('fs');
const path = require('path');

const blogDir = 'c:\\Users\\acer\\Desktop\\my-blog-website\\data\\blog';
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.tsx'));

const newBlogs = [
    'accentureFreshersHiringGuide.tsx',
    'aptitude-test-preparation-30-days.tsx',
    'ats-resume-tips-freshers.tsx',
    'best-free-coding-platforms-freshers.tsx',
    'capgeminiInterviewQuestions.tsx',
    'cognizantGenCHiringProcess.tsx',
    'data-analyst-career-path.tsx',
    'deloitte-fresher-hiring-process.tsx',
    'github-portfolio-guide.tsx',
    'hclFresherRecruitmentGuide.tsx',
    'hexaware-fresher-recruitment-guide.tsx',
    'how-to-follow-up-after-interview.tsx',
    'ibm-graduate-hiring-guide.tsx',
    'infosysHiringProcess.tsx',
    'it-job-without-cs-degree.tsx',
    'job-rejection-what-to-do.tsx',
    'on-campus-vs-off-campus-hiring.tsx',
    'service-vs-product-company.tsx',
    'tcsNinjaInterviewProcess.tsx',
    'tech-mahindra-interview-experience.tsx',
    'tell-me-about-yourself-fresher.tsx',
    'wiproInterviewExperience.tsx',
    'zohoInterviewQuestions.tsx'
];

newBlogs.forEach(file => {
    const filePath = path.join(blogDir, file);
    if (!fs.existsSync(filePath)) return;
    
    const content = fs.readFileSync(filePath, 'utf8');
    if (!content.includes('image:')) {
        console.log(`Missing image: ${file}`);
    }
});
