// requires yamljs:  `npm install --save-dev yamljs`
module.exports = () => {
    const fs = require('fs')
    const features = fs.readdirSync('./src/features')
    const YAML = require('yamljs')

    // TODO: Try to make it work with `serverless.yaml`m because currently we use `serverless/models.yml` and map manually the models
    const mergedYamlModels = features
        .map(feature => fs.readFileSync(`./src/features/${feature}/serverless/models.yml`, 'utf8'))
        .map(raw => YAML.parse(raw))
        .reduce((result, handler) => Object.assign(result, handler), {})

    return mergedYamlModels
}
