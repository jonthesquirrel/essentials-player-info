const fs = require('fs')
const yaml = require('js-yaml')

try {
  let doc = yaml.safeLoad(fs.readFileSync('userdata/9834b4d7-63b0-4c8f-b44e-cec7cca5840e.yml', 'utf8'))
  // list files in userdata > load files and convert to json > sort, filter, and log player data
  console.log(doc)
} catch (e) {
  console.log(e)
}
