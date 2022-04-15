const Event = require(`../Structures/Event.js`);

module.exports = new Event("ready", (client) => {
  console.log("Bot is online!");

  let number = 0;
  const arrayOfStatus = [
    "🤖 Author : Adriks",
    "🎥 YouTube : AdriksOwy",
    "💻 GitHub : https://github.com/AdriksOwy",
    "My prefix is ❓",
    "❔help - All bot commands.",
  ];

  setInterval(() => {
    if (number === arrayOfStatus.length) number = 0;
    const status = arrayOfStatus[number];
    client.user.setActivity(status);
    number++;
  }, 3000);
});
