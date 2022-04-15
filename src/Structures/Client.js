const Discord = require("discord.js");
const Command = require(`./Command.js`);
const Event = require(`./Event.js`);
const config = require(`../Data/config.json`);

const intents = new Discord.Intents(32767);

const fs = require("fs");

class Client extends Discord.Client {
  constructor() {
    super({ intents, allowedMentions: { repliedUser: false } });

    this.commands = new Discord.Collection();
    this.prefix = config.prefix;
  }

  start(token) {
    fs.readdirSync(`./src/Commands`)
      .filter((file) => file.endsWith(".js"))
      .forEach((file) => {
        const command = require(`../Commands/${file}`);
        console.log(`Loaded ${command.name} command!`);
        this.commands.set(command.name, command);
      });

    fs.readdirSync(`./src/Events`)
      .filter((file) => file.endsWith(".js"))
      .forEach((file) => {
        const event = require(`../Events/${file}`);
        console.log(`Loaded ${event.event} event!`);
        this.on(event.event, event.run.bind(null, this));
      });

    this.login(token);
  }
}

module.exports = Client;
