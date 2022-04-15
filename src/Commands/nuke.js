const Command = require(`../Structures/Command.js`);

module.exports = new Command({
  name: "nuke",
  description: "Clears channel messages!",
  permission: "ADMINISTRATOR",

  async run(message, args, client) {
    const position = message.channel.position;
    const channel = await message.channel.clone();

    message.channel.delete();
    channel.setPosition(position);

    const msg = await channel.send(
      "`❎💥 This channel has been destroyed! 😎`\nhttps://imgur.com/LIyGeCR"
    );
    setTimeout(() => msg.delete(), 4000);
  },
});
