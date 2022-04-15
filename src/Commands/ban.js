const Command = require(`../Structures/Command.js`);

const banEvent = (message, channel, member) => {
  const memberTarget = message.guild.members.cache.get(member.id);
  memberTarget.ban();
  channel.send(`\`❎ \`${memberTarget}\` has been banned from this server!\``);
};

module.exports = new Command({
  name: "ban",
  description: "Ban members from server!",
  permission: "BAN_MEMBERS",

  async run(message, args, client) {
    args[1] = message.mentions.members.first();

    if (!args[1]) return message.channel.send("`❌ You forgot to enter user!`");

    if (args[1] === message.author)
      return message.channel.send("`❌ You cannot ban yourself!`");

    if (args[1].permissions.has("ADMINISTRATOR"))
      return message.channel.send("`❌ You cannot use this command on Admin!`");

    if (!args[2]) return banEvent(message, message.channel, args[1]);

    if (args[2]) {
      const reason = args.slice(2).join(" ");
      banEvent(message, message.channel, args[1]);
      message.channel.send(`\`📝 Reason:\` **${reason}**`);
    }
  },
});
