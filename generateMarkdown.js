function makeBadge(license){
  if(license !== "None"){
    return `![Badege](https://img.shields.io/badge/License-${encodeURI(license)}-green)`
  }
  return ""
}




function generateMarkdown(data) {

  return `
  
# ${data.title}  
${makeBadge(data.license)}
#### Deployed Github link: [${data.deploy}](${data.deploy})


## Description  
${data.description}  

## Table of Contents  

* [Installation](#installation)
  
* [Usage](#usage)  
  
* [License](#license)  
  
* [Contributing](#contributing)
  
* [Tests](#tests)  
  
* [Questions](#questions)  
  

## Installation

To install dependencies:  
\`\`\`
${data.installation}  
\`\`\`

## Usage
${data.usage}


## Contributing 
${data.contributing}

## Tests  

To run tests, run this command:

\`\`\`
${data.test}
\`\`\`
  
## License
 ${data.license}
  
## Usage  

${data.usage}

## Questions 
  
If you have questions about this repo, contact directly at ${data.useremail}  
![profile pic for school](${data.avatar_url})  
`;
}

module.exports = generateMarkdown;

