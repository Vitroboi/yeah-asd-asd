const Discord = require("discord.js");
const superagent = require("snekfetch");
module.exports = {
  name: "slap",
  aliases: [],
  execute: async(client, message, args, data, db) => {

            const user = message.mentions.users.first();
            if(!user) return message.channel.send({embed: {
                color: 16734039,
                description: "You must mention someone to slap!"
            }});

		if (message.author === user) {
           return await message.channel.send({embed: {
                color: 16734039,
                description: "You cant slap yourself!"
            }})
		}
            superagent.get('https://nekos.life/api/v2/img/slap')
                .end((err, response) => {
              const embed = new Discord.MessageEmbed()
              .setTitle(user.username + " just got slapped by " + message.author.username)
              .setImage(response.body.url)
              .setColor(`RANDOM`)
              .setDescription((user.toString() + " got slapped by " + message.author.toString()))
              .setFooter(`That must hurt ._.`)
              .setURL(response.body.url);
<<<<<<< HEAD
          message.channel.send({embeds: [embed]});
=======
          message.channel.send(embed);
>>>>>>> 567d5c7b95efb0484dba9e081e4b4293bedc6d76
            }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }}));

        }
}
module.exports.help = {
    name: "slap",
    description: "Slap a user",
    usage: "slap <user>",
    type: "Fun" 
}