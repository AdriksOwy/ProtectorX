const Discord = require("discord.js");
const Command = require(`../Structures/Command.js`);

const createEmbedBase = (discord) =>
  new discord.MessageEmbed().setColor("#ff5ce9");

const sendShipResult = (channel, embed, FirstUser, SecondUser) => {
  channel.send(
    `**💟 💞 __Calculation__ 💞 💟**\n🔻${FirstUser}\n🔺${SecondUser}`
  );
  channel.send({ embeds: [embed] });
};

module.exports = new Command({
  name: "ship",
  description: "Ship command!",
  permission: "",

  async run(message, args, client) {
    if (!args[1])
      return message.channel.send("`❌ You forgot to enter two users!`");

    if (!args[2])
      return message.channel.send("`❌ You forgot to enter a second user!`");

    if (args[1] && args[2]) {
      const FirstUser = args[1];
      const SecondUser = args[2];
      const randomNumber = Math.floor(Math.random() * 101 + 1);
      let shipEmbed;

      switch (true) {
        case randomNumber <= 20:
          shipEmbed = createEmbedBase(Discord).setTitle(
            `\`${randomNumber}%\` █ \`Awfully... 😭💔\``
          );
          break;
        case randomNumber > 20 && randomNumber <= 40:
          shipEmbed = createEmbedBase(Discord).setTitle(
            `\`${randomNumber}%\` ██ \`Poorly... 😓\``
          );
          break;
        case randomNumber > 40 && randomNumber <= 68:
          shipEmbed = createEmbedBase(Discord).setTitle(
            `\`${randomNumber}%\` ███ \`Quite well ❤️\``
          );
          break;
        case randomNumber > 69 && randomNumber <= 81:
          shipEmbed = createEmbedBase(Discord).setTitle(
            `\`${randomNumber}%\` ████ \`Mmm splendidly 🥰❤️\``
          );
          break;
        case randomNumber > 81 && randomNumber <= 95:
          shipEmbed = createEmbedBase(Discord).setTitle(
            `\`${randomNumber}%\` █████ \`Uff how hot 🥵💦\``
          );
          break;
        case randomNumber > 95 && randomNumber <= 100:
          shipEmbed = createEmbedBase(Discord).setTitle(
            `\`${randomNumber}%\` ██████ \`You're destined to be together 😍😍😍\``
          );
          break;
        case randomNumber === 69:
          shipEmbed = createEmbedBase(Discord).setTitle(
            `\`${randomNumber}%\` ████ \`( ͡❛ ͜ʖ͡❛ ) 🍆🍑💦\``
          );
          break;
      }

      sendShipResult(message.channel, shipEmbed, FirstUser, SecondUser);
    }
  },
});
