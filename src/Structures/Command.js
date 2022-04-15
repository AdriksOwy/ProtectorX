const Discord = require("discord.js");
const Client = require(`./Client.js`);

function RunFunction(message, args, client) {}

class Command {
  constructor(options) {
    this.name = options.name;
    this.description = options.description;
    this.permission = options.permission;
    this.run = options.run;
  }
}

module.exports = Command;
