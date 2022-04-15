const Command = require(`../Structures/Command.js`);

module.exports = new Command({
  name: "unban",
  description: "Unban members from server!",
  permission: "BAN_MEMBERS",

  async run(message, args, client) {
    const bans = await message.guild.bans.fetch();

    if (!args[1]) return message.channel.send("`❌ Enter the ID to unban!`");

    if (args[1] === message.author.id)
      return message.channel.send("`❌ You cannot unban yourself!`");

    if (!bans.has(args[1]))
      return message.channel.send(
        "`❌ Provided ID is invalid or isn't banned!`"
      );

    if (bans.has(args[1])) {
      message.guild.members.unban(args[1]);
      message.channel.send(`\`❎ Successfully unbanned ${args[1]}!\``);
    }
  },
});
