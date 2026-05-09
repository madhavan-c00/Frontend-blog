const fs = require('fs');
const path = require('path');

const blogDir = 'c:\\Users\\acer\\Desktop\\my-blog-website\\data\\blog';
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.tsx'));

const results = files.map(file => {
    const content = fs.readFileSync(path.join(blogDir, file), 'utf8');
    const exportMatch = content.match(/export const (\w+): BlogContent/);
    const slugMatch = content.match(/slug:\s*["']([^"']+)["']/);
    const imageMatch = content.match(/image:\s*["']([^"']+)["']/);
    const idMatch = content.match(/id:\s*["']([^"']+)["']/);
    
    return {
        file,
        exportName: exportMatch ? exportMatch[1] : null,
        slug: slugMatch ? slugMatch[1] : null,
        id: idMatch ? idMatch[1] : null,
        hasImage: !!imageMatch
    };
});

console.log(JSON.stringify(results, null, 2));
