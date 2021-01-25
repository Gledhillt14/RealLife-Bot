const ytdl = require("ytdl-core");
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

var http = require('http');  
http.createServer(function (req, res) {   
  res.write("I'm alive");   
  res.end(); 
}).listen(8080);

client.on('ready', () => {
  console.log('Your Bot is now Online.')
  let activities = [`T!help for commands`, `The official CodingCord bot`, `Bot coded by RealLife#4433`   ],i = 0;
  setInterval(() => client.user.setActivity(`${activities[i++ %  activities.length]}`), 5000)
})

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix.length).trim().split(/ +/);
	
  const command = args.shift().toLowerCase();

	if (command === 'ping') {
		message.channel.send('Pong.');
	} else if (command === 'beep') {
		message.channel.send('Boop.');
	} else if (command === 'help'){
    const embed = new Discord.MessageEmbed()
  .setTitle("CodingCord Commands")
  .setAuthor("RealLife | CodingCord Founder", "https://discord.gg/nKXgnyVvSH")
  .setColor('#000fff')
  .setDescription("The following are all the commands for the bot.")
  .setFooter("RealLife | CodingCord", "http://i.imgur.com/w1vhFSR.png")
  .setTimestamp()
  .setURL("https://discord.gg/nKXgnyVvSH")
  .addField(prefix + "codingcord", "Provides the invite link to the official CodingCord server.")
  
  .addField("------------", '-----')

  .addField(prefix + "global", "Provides the invite link to the Global server.")

  .addField("------------", '-----')

  .addField(prefix + "thefunlounge", "Provides the invite link to The Fun Lounge server.")

  .addField("------------", '-----')

  .addField(prefix + "contact", 'The link to the contact section on the website.')

  .addField("------------", '-----')

  .addField(prefix + "comingsoon", 'The list of commands which are coming soon.')

  .addField("------------", '-----')

  .addField(prefix + "applications", 'The link to the applications page ont he website.')

  .addField("------------", '-----')

  .addField(prefix + "server", 'Provides the server name and total members.')

  message.channel.send(embed);
	} else if (command === 'codingcord'){
    const embed = new Discord.MessageEmbed()
  .setTitle("The Official CodingCord Server")
  .setAuthor("RealLife")
  .setColor('ORANGE')
  .setFooter("RealLife | CodingCord Development")
  .setTimestamp()
  .setURL("https://discord.gg/nKXgnyVvSH")
  guildOnly: true,

  message.channel.send(embed);
  } else if (command === 'thefunlounge'){
    const embed = new Discord.MessageEmbed()
  .setTitle("The Fun Lounge Server")
  .setAuthor("RealLife")
  .setColor('ORANGE')
  .setFooter("RealLife | CodingCord Development")
  .setTimestamp()
  .setURL("https://discord.gg/npv3WfVr86")
  guildOnly: true,

  message.channel.send(embed);
  } else if (command === 'global'){
    const embed = new Discord.MessageEmbed()
  .setTitle("The Global Server")
  .setAuthor("RealLife")
  .setColor('ORANGE')
  .setFooter("RealLife | CodingCord Development")
  .setTimestamp()
  .setURL("https://discord.gg/Cma9PbXmda")
  guildOnly: true,

  message.channel.send(embed);
  } else if (command === 'website'){
    const embed = new Discord.MessageEmbed()
  .setTitle("The CodingCord Website")
  .setAuthor("RealLife")
  .setColor('YELLOW')
  .setFooter("RealLife | CodingCord Development")
  .setTimestamp()
  .setURL("https://codingcord-development.taylorgledhill.repl.co")
  guildOnly: true,

  message.channel.send(embed)
  } else if (command === 'contact'){
    const embed = new Discord.MessageEmbed()
  .setTitle("The CodingCord Contact")
  .setAuthor("RealLife")
  .setColor('VIOLET')
  .setFooter("RealLife | CodingCord Development")
  .setTimestamp()
  .setURL("https://codingcord-development.taylorgledhill.repl.co/contact.html")
  guildOnly: true,

  message.channel.send(embed)
  } else if (command === 'comingsoon'){
    const embed = new Discord.MessageEmbed()
  .setTitle("Coming Soon to the bot")
  .setAuthor("RealLife")
  .setColor('PURPLE')
  .setFooter("RealLife | CodingCord Development")
  .setTimestamp()
  .addField(prefix + "staff", 'The staff members of the servers.')
  guildOnly: true,

  message.channel.send(embed)
  } else if (command === 'applications'){
    const embed = new Discord.MessageEmbed()
  .setTitle("The CodingCord Applications")
  .setAuthor("RealLife")
  .setColor('GREEN')
  .setFooter("RealLife | CodingCord Development")
  .setTimestamp()
  .setURL("https://codingcord-development.taylorgledhill.repl.co/applications.html")
  guildOnly: true,

  message.channel.send(embed)
  } else if (command === 'server'){
    guildOnly: true,
	message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
  } 
})
  
client.login('TOKEN')
