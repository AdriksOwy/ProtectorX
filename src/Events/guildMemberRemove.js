const Discord = require("discord.js");
const Event = require(`../Structures/Event.js`);

module.exports = new Event("guildMemberRemove", (client, member) => {
  const channel = member.guild.channels.cache.find(
    (channel) => channel.name === "γπγroom"
  );
  const embed = new Discord.MessageEmbed();
  const userTag = member.user.tag;
  const userAvatarURL = member.user.avatarURL({ dynamic: true });
  const userJoinedToServer = member.joinedAt.toUTCString();

  if (!channel) return;

  embed
    .setTitle("`βπ Member Left`")
    .setColor("RED")
    .setAuthor(userTag)
    .setThumbnail(userAvatarURL)
    .addField("π User Joined", `\`β° ${userJoinedToServer}\``)
    .setTimestamp();

  channel.send({ embeds: [embed] });
});
