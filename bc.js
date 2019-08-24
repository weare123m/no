const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "-";
client.on("message", message => {

  if (message.content.startsWith(prefix + "send")) {
  if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : 📪عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : Le titiz`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Le titiz ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`-> ۩ L7naSH ۩ <- +18 | bot`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});



client.login("NjExOTMzNTA2NzQxODYyNDkx.XWF7fg.6aeb5Yu_zMOJ8RkMxA5MBsysL5w");