const Command = require(`../Structures/Command.js`);

module.exports = new Command({
  name: "github",
  description: "Send github author!",
  permission: "",

  async run(message, args, client) {
    message.reply("`✖️ GitHub :`\nhttps://github.com/AdriksOwy");
  },
});
