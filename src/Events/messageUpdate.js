const Discord = require("discord.js");
const Event = require(`../Structures/Event.js`);

module.exports = new Event(
  "messageUpdate",
  async (client, oldMessage, newMessage) => {
    const LogChannel = client.channels.cache.find(
      (channel) => channel.name === "πβΌlogiΛv2βΌp"
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

    EditedLog.setTitle("`βοΈπ Edited Message`")
      .setColor("RANDOM")
      .setThumbnail(oldMessageAuthorAvatarURL)
      .addFields(
        {
          name: "π Edited by",
          value: `${oldMessageAuthor} **|** \`ID : ${oldMessageAuthor.id}\``,
          inline: false,
        },
        {
          name: "π On the channel",
          value: `${oldMessageChannel.name} **|** \`ID : ${oldMessageChannel.id}\``,
          inline: false,
        },
        {
          name: "π Old message",
          value: oldMessageContent,
          inline: false,
        },
        {
          name: "π New message",
          value: newMessageContent,
          inline: false,
        }
      )
      .setTimestamp();

    LogChannel.send({ embeds: [EditedLog] });
  }
);
