const fs = require('fs')
const yaml = require('js-yaml')

let path = 'userdata'

try {
  fs.readdirSync(path)
    .map(filename => yaml.safeLoad(fs.readFileSync(`${path}/${filename}`, 'utf8')) )
    .map(player => ({name: player.lastAccountName, timestamp: player.timestamps.logout}) )
    .sort(player => player.timestamp)
    .map(player => `${player.name} : ${new Date(player.timestamp)}`)
    .forEach(player => console.log(player) )
} catch (e) {
  console.log(e)
}
