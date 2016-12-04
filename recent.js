const fs = require('fs')
const yaml = require('js-yaml')

let path = 'userdata'

try {
  // list files in userdata > load files and convert to json > sort, filter, and log player data
  let result = fs.readdirSync(path)
    .map(filename => yaml.safeLoad(fs.readFileSync(`${path}/${filename}`, 'utf8')) )
    .map(player => {
      return {name: player.lastAccountName, timestamp: player.timestamps.logout}
    })
    .sort(player => player.timestamp)
    .map(player => `${player.name} : ${new Date(player.timestamp)}`)
  console.log(result)
} catch (e) {
  console.log(e)
}
