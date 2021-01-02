const { Client } = require("discord.js");
const { createReadStream } = require("fs");
require("dotenv").config();
const { TOKEN } = process.env;
const bot = new Client();
bot.on("ready", () => {
  console.log("Ready to RickRoll people after Logged as "+bot.user.tag);
  bot.user.setActivity("Never gonna give you up");
});
bot.on("message", message => {
if (message.content.startsWith(`<@${bot.user.id}>`)) {
 if (!message.member.voice.channel) return;
  var voice =  message.member.voice.channel
  voice.join().then(connection => {
  connection.play(createReadStream("NeverGonnaGiveYouUp.opus")).on("end", () => voice.leave());
 }).catch(console.error);
}
});
bot.login(TOKEN);
