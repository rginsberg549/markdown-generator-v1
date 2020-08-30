function generateMarkdown(data) {
    return `
# LICENSE BADGE

# TITLE
    
# DESCRIPTION 
    
# TABLE OF CONTENTS
    1. [Installation](#installation)
    2. [Usage](#usage
    
# INSTALLATION
# USAGE
# LICENSE
${data.licenses}
# CONTRIBUTING
# TESTS
# QUESTIONS
    WHEN I enter my GitHub username
    THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile  + GITHUB link + EMAIL Address
`
}

module.exports = { generateMarkdown };