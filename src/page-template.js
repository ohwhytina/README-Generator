    module.exports = templateData => {
    console.log(templateData);
  
  // destructure page data by section
    const { title, description, installation, usage, licenses, test, contributor, ...header } = templateData;
  
    return `
    # ${title}
    ## Description 
    ${description}
    ## Table of Contents
    <ul>
        <li>
            <a href="https://github.com/${header.username}/${header.reponame}#description">Description</a>
            <a href="https://github.com/${header.username}/${header.reponame}#installation">Installation</a>
            <a href="https://github.com/${header.username}/${header.reponame}#Usage">Usage</a>
            <a href="https://github.com/${header.username}/${header.reponame}#License">License</a>
            <a href="https://github.com/${header.username}/${header.reponame}#Tests">Tests</a>
            <a href="https://github.com/${header.username}/${header.reponame}#constributor">Contributor</a>
            <a href="https://github.com/${header.username}/${header.reponame}#Questions">Questions</a>
        </li>
    </ul>
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
    Contact me with any questions: <a href="https://github.com/${header.username}"
    `

  }