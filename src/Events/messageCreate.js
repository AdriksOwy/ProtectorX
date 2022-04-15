const Event = require(`../Structures/Event.js`);

module.exports = new Event("messageCreate", (client, message) => {
  if (
    !message.content.startsWith(client.prefix) ||
    message.author.bot ||
    message.content === "?"
  )
    return;

  const args = message.content.substring(client.prefix.length).split(/ +/);

  const command = client.commands.find((command) => command.name === args[0]);

  if (!command) return message.reply("`❌ Invalid command!`");

  const permission = message.member.permissions.has(command.permission);

  if (!permission)
    return message.reply(
      `\`❌ You don't have the permission ${command.permission} to run this command!\``
    );

  command.run(message, args, client);
});
