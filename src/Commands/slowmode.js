const Command = require(`../Structures/Command.js`);

module.exports = new Command({
  name: "slowmode",
  description: "Set slowmode send messages channel!",
  permission: "MANAGE_MESSAGES",

  async run(message, args, client) {
    if (!args[1] || isNaN(args[1]))
      return message.reply(
        `\`${
          args[1] === undefined
            ? "✖️ Enter a time in seconds!"
            : `❌ ${args[1]} is an invalid number!`
        }\``
      );

    message.channel.setRateLimitPerUser(args[1], "No Reason");
    message.channel.send(
      `\`❎ Successfully set the slowmode on this channel ${args[1]} second/s!\``
    );
  },
});
