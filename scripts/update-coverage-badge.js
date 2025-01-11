const fs = require('fs');
const path = require('path');

function extractCoverageFromSummary(summary) {
    const lines = summary.split('\n');
    const coverageData = {};
    
    lines.forEach(line => {
        if (line.includes(':')) {
            const [key, value] = line.split(':');
            const percentage = parseFloat(value.match(/[\d.]+/));
            if (!isNaN(percentage)) {
                coverageData[key.trim().toLowerCase()] = percentage;
            }
        }
    });
    
    return coverageData;
}

try {
    // Read the coverage summary from stdout
    const summaryOutput = fs.readFileSync(path.join(__dirname, '..', 'coverage-summary.txt'), 'utf8');
    const coverageData = extractCoverageFromSummary(summaryOutput);
    
    // Calculate the overall coverage percentage
    const overallCoverage = Math.floor(
        (coverageData.statements + coverageData.branches + coverageData.functions + coverageData.lines) / 4
    );
    
    // Determine badge color
    let color;
    if (overallCoverage >= 90) color = 'brightgreen';
    else if (overallCoverage >= 80) color = 'green';
    else if (overallCoverage >= 70) color = 'yellow';
    else if (overallCoverage >= 60) color = 'orange';
    else color = 'red';
    
    // Create the new badge URL
    const badgeUrl = `https://img.shields.io/badge/coverage-${overallCoverage}%25-${color}.svg`;
    
    // Read and update README.md
    const readmePath = path.join(__dirname, '..', 'README.md');
    let readme = fs.readFileSync(readmePath, 'utf8');
    
    // Update the coverage badge
    readme = readme.replace(
        /!\[Coverage\]\(https:\/\/img\.shields\.io\/badge\/coverage-[^)]+\)/,
        `![Coverage](${badgeUrl})`
    );
    
    fs.writeFileSync(readmePath, readme);
    console.log(`Updated coverage badge to ${overallCoverage}%`);
} catch (error) {
    console.error('Error updating coverage badge:', error.message);
    process.exit(1);
} 