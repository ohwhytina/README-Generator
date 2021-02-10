    module.exports = templateData => {
    console.log(templateData);
  
  // destructure page data by section
    const { title, description, installation, usage, licenses, test, contributor, ...header } = templateData;
  
return `
# ${title}
## Description 
${description}
## Table of Contents
* ![Description](https://github.com/${header.username}/${header.reponame}#description)
* ![Installation](https://github.com/${header.username}/${header.reponame}#installation)
* ![Usage](https://github.com/${header.username}/${header.reponame}#Usage)
* ![License](https://github.com/${header.username}/${header.reponame}#License)
* ![Tests](https://github.com/${header.username}/${header.reponame}#Tests)
* ![Contributor](https://github.com/${header.username}/${header.reponame})
* ![Questions](https://github.com/${header.username}/${header.reponame}#Questions)

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
Contact me with any questions: ![Github](https://github.com/${header.username})
`

  }