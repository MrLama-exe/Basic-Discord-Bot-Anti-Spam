const Discord = require("discord.js")

module.exports = async client => {
var now = new Date(); 
var hour= now.getHours();
var minute = now.getMinutes();
var second = now.getSeconds();
var times = (`[${hour}:${minute}:${second}]/`);

console.log(times+`\x1b[33m%s\x1b[0m`,'[WARN]','\x1b[0m','Connection in progress...');
console.log(times+`\x1b[33m%s\x1b[0m`,'[WARN]','\x1b[0m','Discord.js API connection in progress...');
console.log(times+`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m', 'Connection to the Discord.js API done');
console.log(times+`\x1b[36m%s\x1b[0m`,'[INFO]', '\x1b[0m','Connected to ' + client.user.username + '#' + client.user.discriminator);
console.log(times+`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m','Loading completed');
console.log(times+`\x1b[32m%s\x1b[0m`,'[OK]','\x1b[0m','Ready and connected');

}