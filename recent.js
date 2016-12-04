const fs = require('fs')
const yaml = require('js-yaml')

let path = 'userdata'

try {
  fs.readdirSync(path)
    .map(filename => yaml.safeLoad(fs.readFileSync(`${path}/${filename}`, 'utf8')) )
    .map(player => ({
      name: player.lastAccountName,
      lastLogin: player.timestamps.login,
      lastLogout: player.timestamps.logout
    }))
    .sort(player => player.lastLogout)
    .map(player => ({
      name: player.name,
      lastLogin: new Date(player.lastLogin),
      lastLogout: new Date(player.lastLogout)
    }))
    .map(player => `${player.name} [last session] ${player.lastLogin} - ${player.lastLogout}`)
    .forEach(player => console.log(player) )
} catch (e) {
  console.log(e)
}
