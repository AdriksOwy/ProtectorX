const Command = require(`../Structures/Command.js`);

module.exports = new Command({
  name: "ping",
  description: "Shows the ping!",
  permission: "",

  async run(message, args, client) {
    message.reply(`\`✖️ Pong: ${client.ws.ping} ms.\``);
  },
});
