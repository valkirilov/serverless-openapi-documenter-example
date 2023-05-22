// requires yamljs:  `npm install --save-dev yamljs`
module.exports = () => {
    const fs = require('fs')
    const features = fs.readdirSync('./src/features')
    const YAML = require('yamljs')

    const mergedYamlFunctions = features
        .map(feature => fs.readFileSync(`./src/features/${feature}/serverless/functions.yml`, 'utf8'))
        .map(raw => YAML.parse(raw))
        .reduce((result, handler) => Object.assign(result, handler), {})

    return mergedYamlFunctions
}
