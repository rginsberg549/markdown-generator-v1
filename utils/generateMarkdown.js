function generateMarkdown(data) {
    return `
### LICENSE(S)
${parseLicenses(data.licenses)}

### PROJECT NAME
${data.projectName}
    
### DESCRIPTION
${data.description} 
    
### TABLE OF CONTENTS
1.[Installation](#installation)  
2.[Usage](#usage)  
3.[Contributing](#contributing)  
4.[Tests](#tests)  
5.[Questions](#questions)  
    
### INSTALLATION <a href=#installation></a>
${data.installation}

### USAGE <a href=#usage></a>
${data.usage}

### CONTRIBUTING <a href=#contributing></a>
${data.contributing}

### TESTS <a href=#tests></a>
${data.tests}

### QUESTIONS <a href=#questions></a>
Github: ${data.githubUsername}  
Email: ${data.email}  
`
}

const licenseMarkdownObj = {
    "option1" : ['1. [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)  ',
    '2. [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)  ',
    '3. [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  ',
    '4. [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)  '],
    "option2" : '1. [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  ',
    "option3" : '1. [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)  ',
}


function parseLicenses(data) {
    let licenseMarkdown = []
    for (let index = 0; index < data.length; index++) {
        const license = data[index];

        if (license === 'I need to work in a community') {
            licenseMarkdown.push(licenseMarkdownObj.option1);
        } 
        
        if (license === 'I want it simple and permissive') {
            licenseMarkdown.push(licenseMarkdownObj.option2);
        }
        
        if (license === 'I care about sharing improvements') {
            licenseMarkdown.push(licenseMarkdownObj.option3);

        }
        
        if (license === 'I want to manually add my liceneses') {
            return

        }
        
        if (license === 'I don\'t want to add any liceneses') {
            return

        }
    }
    return licenseMarkdown;
}

module.exports = { generateMarkdown };