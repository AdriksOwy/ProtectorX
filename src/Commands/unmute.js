const Command = require(`../Structures/Command.js`);

module.exports = new Command({
  name: "unmute",
  description: "Unmute members from server!",
  permission: "MANAGE_MESSAGES",

  async run(message, args, client) {
    const muteRoleID = "915649484812349501";
    args[1] = message.mentions.members.first();
    const muteRole = message.guild.roles.cache.find(
      (role) => role.id === muteRoleID
    );

    if (!args[1]) return message.channel.send("`❌ You forgot to enter user!`");

    const memberTarget = message.guild.members.cache.get(args[1].id);

    if (args[1].permissions.has("ADMINISTRATOR"))
      return message.channel.send("`❌ You cannot use this command on Admin!`");

    if (!args[1].roles.cache.some((role) => role.id === muteRoleID))
      return message.channel.send("`❌ This user is already unmuted!`");

    if (!muteRole) {
      message.channel.send("`❌ This user isn't muted!`");
    }

    if (muteRole) {
      memberTarget.roles.remove(muteRole.id);
      message.channel.send(`\`❎ \`${memberTarget}\` has been unmuted!\``);
    }
  },
});
