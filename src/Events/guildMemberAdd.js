const Discord = require("discord.js");
const Event = require(`../Structures/Event.js`);

module.exports = new Event("guildMemberAdd", (client, member) => {
  const channel = member.guild.channels.cache.find(
    (channel) => channel.name === "γπγroom"
  );
  const embed = new Discord.MessageEmbed();
  const userTag = member.user.tag;
  const userAvatarURL = member.user.avatarURL({ dynamic: true });
  const userAccountCreated = member.user.createdAt.toUTCString();
  const userJoinedToServer = member.joinedAt.toUTCString();
  const userJoinedTimestamp = member.joinedTimestamp;

  if (!channel) return;

  embed
    .setTitle("`βπ New Member`")
    .setColor("GREEN")
    .setAuthor(userTag)
    .setThumbnail(userAvatarURL)
    .addFields(
      {
        name: "π Account Created",
        value: `\`β° ${userAccountCreated}\``,
        inline: false,
      },
      {
        name: "π User Joined",
        value: `\`β° ${userJoinedToServer}\``,
        inline: false,
      }
    )
    .setTimestamp(userJoinedTimestamp);

  channel.send({ embeds: [embed] });
});
