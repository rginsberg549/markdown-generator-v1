function generateMarkdown(data) {
    return `
### LICENSE
${data.licenses}

### PROJECT NAME
${data.projectName}
    
### DESCRIPTION
${data.description} 
    
### TABLE OF CONTENTS
1.[Installation](#installation)
2.[USAGE]
3.[CONTRIBUTING]
4.[TESTS]
5.[QUESTIONS]
    
# <a href=#installation>INSTALLATION</a>
${data.installation}

# USAGE
${data.usage}

# CONTRIBUTING
${data.contributing}

# TESTS
${data.tests}

# QUESTIONS
${data.githubUsername}
${data.email}
`
}

module.exports = { generateMarkdown };