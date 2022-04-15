const Discord = require("discord.js");
const Event = require(`../Structures/Event.js`);

module.exports = new Event("messageDelete", (client, message) => {
  const LogChannel = client.channels.cache.find(
    (channel) => channel.name === "📕⼁logiˑv2⼁p"
  );
  const DeletedLog = new Discord.MessageEmbed();
  const messageAuthor = message.author;
  const messageChannel = message.channel;
  const messageContent = message.content;
  const authorAvatarURL = message.author.displayAvatarURL({ dynamic: true });

  if (!LogChannel || messageAuthor.bot) return;

  DeletedLog.setTitle("`✖️🗑️ Deleted Message`")
    .setColor("RANDOM")
    .setThumbnail(authorAvatarURL)
    .addFields(
      {
        name: "👀 Deleted by",
        value: `${messageAuthor} **|** \`ID : ${messageAuthor.id}\``,
        inline: false,
      },
      {
        name: "👀 On the channel",
        value: `${messageChannel.name} **|** \`ID : ${messageChannel.id}\``,
        inline: false,
      },
      {
        name: "👀 Deleted message",
        value: messageContent,
        inline: false,
      }
    )
    .setTimestamp();

  LogChannel.send({ embeds: [DeletedLog] });
});
