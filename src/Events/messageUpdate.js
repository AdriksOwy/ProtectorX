const Discord = require("discord.js");
const Event = require(`../Structures/Event.js`);

module.exports = new Event(
  "messageUpdate",
  async (client, oldMessage, newMessage) => {
    const LogChannel = client.channels.cache.find(
      (channel) => channel.name === "📕⼁logiˑv2⼁p"
    );
    const EditedLog = new Discord.MessageEmbed();
    const oldMessageAuthor = oldMessage.author;
    const newMessageAuthor = newMessage.author;
    const oldMessageChannel = oldMessage.channel;
    const oldMessageContent = oldMessage.content;
    const newMessageContent = newMessage.content;
    const oldMessageAuthorAvatarURL = oldMessage.author.displayAvatarURL({
      dynamic: true,
    });

    if (!LogChannel || oldMessageAuthor.bot || newMessageAuthor.bot) return;

    EditedLog.setTitle("`✖️📝 Edited Message`")
      .setColor("RANDOM")
      .setThumbnail(oldMessageAuthorAvatarURL)
      .addFields(
        {
          name: "👀 Edited by",
          value: `${oldMessageAuthor} **|** \`ID : ${oldMessageAuthor.id}\``,
          inline: false,
        },
        {
          name: "👀 On the channel",
          value: `${oldMessageChannel.name} **|** \`ID : ${oldMessageChannel.id}\``,
          inline: false,
        },
        {
          name: "👀 Old message",
          value: oldMessageContent,
          inline: false,
        },
        {
          name: "👀 New message",
          value: newMessageContent,
          inline: false,
        }
      )
      .setTimestamp();

    LogChannel.send({ embeds: [EditedLog] });
  }
);
