const Command = require(`../Structures/Command.js`);

module.exports = new Command({
  name: "mute",
  description: "Mute members from server!",
  permission: "MANAGE_MESSAGES",

  async run(message, args, client) {
    const muteRoleID = "915649484812349501";
    args[1] = message.mentions.members.first();
    const muteRole = message.guild.roles.cache.find(
      (role) => role.id === muteRoleID
    );
    args[2] = args.slice(2).join(" ");

    if (!args[1]) return message.channel.send("`❌ You forgot to enter user!`");

    const memberTarget = message.guild.members.cache.get(args[1].id);

    if (args[1] === message.author)
      return message.channel.send("`❌ You cannot mute yourself!`");

    if (args[1].permissions.has("ADMINISTRATOR"))
      return message.channel.send("`❌ You cannot use this command on Admin!`");

    if (args[1].roles.cache.some((role) => role.id === muteRoleID))
      return message.channel.send("`❌ This user is already muted!`");

    if (args[1]) {
      memberTarget.roles.add(muteRole.id);
    }

    if (!args[2])
      return message.channel.send(
        `\`❎ \`${memberTarget}\` has been muted for breaking the rules! 📝\``
      );

    if (args[1] && args[2])
      return message.channel.send(
        `\`❎ \`${memberTarget}\` has been muted for \`**${args[2]}**\`! 📝\``
      );
  },
});
