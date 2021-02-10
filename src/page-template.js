    module.exports = templateData => {
    console.log(templateData);
  
  // destructure page data by section
    const { title, description, installation, usage, licenses, test, contributor, ...header } = templateData;
  
return `
# ${title}
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#Usage)
* [License](#License)
* [Tests](#Tests)
* [Contributor](#Contributor)
* [Questions](#Questions)

## Description 
${description}

## Installation
${installation}

## Usage
${usage}

## License
${licenses}

## Tests
${test}

## Contributor
${contributor}

## Questions 
Contact me with any questions: 
* [Github](https://github.com/${header.username})
* [Email](mailto:${header.email})
`

  }