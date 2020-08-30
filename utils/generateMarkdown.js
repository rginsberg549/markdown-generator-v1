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
2.[USAGE](#usage)  
3.[CONTRIBUTING](#contributing)  
4.[TESTS](#tests)  
5.[QUESTIONS](#questions)  
    
# INSTALLATION <a href=#installation></a>
${data.installation}

# USAGE <a href=#usage></a>
${data.usage}

# CONTRIBUTING <a href=#contributing></a>
${data.contributing}

# TESTS <a href=#tests></a>
${data.tests}

# QUESTIONS <a href=#questions></a>
Github: ${data.githubUsername}
Email: ${data.email}
`
}

module.exports = { generateMarkdown };