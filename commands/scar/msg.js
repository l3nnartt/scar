const { Command } = require('discord.js-commando');

module.exports = class MsgCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'msg',
      memberName: 'msg',
      group: 'scar',
      description: 'Sendet eine Nachricht per DM',
      guildOnly: true,
      userPermissions: ['ADMINISTRATOR'],
      clientPermissions: ['ADMINISTRATOR'],
    });
  }

  async run(message) {
    let dUser =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.cache.get(args[0]);

    var embed = new Discord.MessageEmbed()
    .setDescription('**❯ Fehlender Tag! | Verwende +msg @Name (Text) ✘**')
    .setColor("#c72810");
    if (!dUser) return message.channel.send(embed);

    let dMessage = args.join(" ").slice(22);

    var embed = new Discord.MessageEmbed()
    .setDescription('**❯ Fehlende Nachricht ✘**')
    .setColor("#c72810");
    if (dMessage.length < 1)
    return message.channel.send(embed);

    dUser.send(`${dMessage}`);

    var embed = new Discord.MessageEmbed()
    .setDescription('**❯ Erfolgreich gesendet ✓**')
    .setColor("#c72810");
    message.channel.send(embed).then(m => m.delete({timeout: 2000}))
    message.delete();
}}