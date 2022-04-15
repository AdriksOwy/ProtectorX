const Command = require(`../Structures/Command.js`);

const kickEvent = (message, channel, member) => {
  const memberTarget = message.guild.members.cache.get(member.id);
  memberTarget.kick();
  channel.send(`\`❎ \`${memberTarget}\` has been kicked from this server!\``);
};

module.exports = new Command({
  name: "kick",
  description: "Kick members from server!",
  permission: "KICK_MEMBERS",

  async run(message, args, client) {
    args[1] = message.mentions.members.first();

    if (!args[1]) return message.channel.send("`❌ You forgot to enter user!`");

    if (args[1] === message.author)
      return message.channel.send("`❌ You cannot kick yourself!`");

    if (args[1].permissions.has("ADMINISTRATOR"))
      return message.channel.send("`❌ You cannot use this command on Admin!`");

    if (args[1] && args[2]) {
      const reason = args.slice(2).join(" ");
      message.channel.send(`\`📝 Reason:\` **${reason}**`);
    }

    if (args[1]) return kickEvent(message, message.channel, args[1]);
  },
});
