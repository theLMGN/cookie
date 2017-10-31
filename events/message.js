const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json')
const db = low(adapter);
const settings = require('../settings.json');
const request = require('request');
db
  .defaults({
    counter: {count: 0},
    warnings: []
    })
  .write()

let idBase = db.get('counter.count').value()

db
  .set('counter',{count: idBase + 1})
  .write()

let idNum = db.get('counter.count').value();

module.exports = message => {
  if (!message.content.toLowerCase().startsWith(settings.prefix)) return;
  let client = message.client;
  let args = message.content.split(' ').slice(1);
  let command = message.content.toLowerCase().split(' ')[0].slice(settings.prefix.length);
  let serverName = message.guild.name
  

  try {
    let cmdFile = require(`../commands/${command}`);
    cmdFile.run(client, message, args, db);
  } catch (err) {
    console.log(`Command ${command} failed!\n${err.stack}`);
  }

};