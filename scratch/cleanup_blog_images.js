const fs = require('fs');
const path = require('path');

const blogDir = 'c:\\Users\\acer\\Desktop\\my-blog-website\\data\\blog';
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
    const filePath = path.join(blogDir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern to match the <div className="my-10">...</div> blocks containing images from /images/
    // We use a regex that matches the div and everything inside until the closing div, 
    // specifically targeting blocks with /images/
    const regex = /<div className="my-10">[\s\S]*?src="\/images\/[\s\S]*?<\/div>/g;
    
    const newContent = content.replace(regex, '');
    
    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent);
        console.log(`✅ Cleaned: ${file}`);
    }
});
