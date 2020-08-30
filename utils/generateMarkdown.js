function generateMarkdown(data) {
    return `
# Foobar
${data.name}
## Installation Instructions
### Usage
#### Contributing
##### License
    `
}

module.exports = { generateMarkdown };