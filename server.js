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
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : letitiz`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : le titiz ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
});



client.login("NjE2NzQ1OTE2ODA4MDM2Mzgx.XWhDoQ.a5L1a6gedlZYuRLR4QkcaPALDuM")
