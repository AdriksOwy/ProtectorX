const Discord = require("discord.js");
const Command = require(`../Structures/Command.js`);

const createEmbedBase = (discord) =>
  new discord.MessageEmbed().setColor("#ff5ce9");

const sendShipResult = (channel, embed, FirstUser, SecondUser) => {
  channel.send(
    `**š š __Calculation__ š š**\nš»${FirstUser}\nšŗ${SecondUser}`
  );
  channel.send({ embeds: [embed] });
};

module.exports = new Command({
  name: "ship",
  description: "Ship command!",
  permission: "",

  async run(message, args, client) {
    if (!args[1])
      return message.channel.send("`ā You forgot to enter two users!`");

    if (!args[2])
      return message.channel.send("`ā You forgot to enter a second user!`");

    if (args[1] && args[2]) {
      const FirstUser = args[1];
      const SecondUser = args[2];
      const randomNumber = Math.floor(Math.random() * 101 + 1);
      let shipEmbed;

      switch (true) {
        case randomNumber <= 20:
          shipEmbed = createEmbedBase(Discord).setTitle(
            `\`${randomNumber}%\` ā \`Awfully... š­š\``
          );
          break;
        case randomNumber > 20 && randomNumber <= 40:
          shipEmbed = createEmbedBase(Discord).setTitle(
            `\`${randomNumber}%\` āā \`Poorly... š\``
          );
          break;
        case randomNumber > 40 && randomNumber <= 68:
          shipEmbed = createEmbedBase(Discord).setTitle(
            `\`${randomNumber}%\` āāā \`Quite well ā¤ļø\``
          );
          break;
        case randomNumber > 69 && randomNumber <= 81:
          shipEmbed = createEmbedBase(Discord).setTitle(
            `\`${randomNumber}%\` āāāā \`Mmm splendidly š„°ā¤ļø\``
          );
          break;
        case randomNumber > 81 && randomNumber <= 95:
          shipEmbed = createEmbedBase(Discord).setTitle(
            `\`${randomNumber}%\` āāāāā \`Uff how hot š„µš¦\``
          );
          break;
        case randomNumber > 95 && randomNumber <= 100:
          shipEmbed = createEmbedBase(Discord).setTitle(
            `\`${randomNumber}%\` āāāāāā \`You're destined to be together ššš\``
          );
          break;
        case randomNumber === 69:
          shipEmbed = createEmbedBase(Discord).setTitle(
            `\`${randomNumber}%\` āāāā \`( Ķ”āāÆĶŹĶ”āāÆ) ššš¦\``
          );
          break;
      }

      sendShipResult(message.channel, shipEmbed, FirstUser, SecondUser);
    }
  },
});
