const Command = require(`../Structures/Command.js`);

module.exports = new Command({
  name: "clear",
  description: "Clear command!",
  permission: "MANAGE_MESSAGES",

  async run(message, args, client) {
    const amountParsed = parseInt(args[1]);

    if (!args[1] || isNaN(args[1]))
      return message.reply(
        `\`❌ ${
          args[1] === undefined
            ? "You didn't enter a number!"
            : args[1] + " is an invalid number!"
        }\``
      );

    if (amountParsed >= 100)
      return message.reply("`❌ You cannot clear more than 100 messages!`");

    message.channel.bulkDelete(amountParsed + 1, true);

    const msg = await message.channel.send(
      `\`❎ Cleared ${amountParsed} messages!\``
    );
    setTimeout(() => msg.delete(), 2500);
  },
});
