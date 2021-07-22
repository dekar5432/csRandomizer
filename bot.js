const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');
const chooser = require('./Chooser.js');
const Chooser = new chooser.Chooser();
//testing
var sTriggerPrefix = 'cs';

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.login(auth.token);
client.on('message', msg => {
	var sOriginalContent = msg.content.toLowerCase().trim();
	var aContent = sOriginalContent.split(/\s+/);

	if (aContent[0] == sTriggerPrefix) {
		switch(aContent[1]) {
			case 'ct':
				switch(aContent[2]) {
					case 'gun':
						msg.delete(0);
						msg.reply(Chooser.getEmbeddedMsg('CT-Side', 'Big Gun', Chooser.getMainGun('ct'), '#e67300')).then(msg => {
							msg.delete(600000);
						});
						break;

					case 'pistol':
						msg.delete(0);
						msg.reply(Chooser.getEmbeddedMsg('CT-Side', 'Pistol', Chooser.getPistols('ct'), '#b3b3ff')).then(msg => {
							msg.delete(600000);
						});
						break;

					case 'rifle':
						msg.delete(0);
						msg.reply(Chooser.getEmbeddedMsg('CT-Side', 'Rifle', Chooser.getRifles('ct'), '#00802b')).then(msg => {
							msg.delete(600000);
						});
						break;

					case 'smg':
						msg.delete(0);
						msg.reply(Chooser.getEmbeddedMsg('CT-Side', 'SMG', Chooser.getSMGs('ct'), ' #bac5b2')).then(msg => {
							msg.delete(600000);
						});
						break;

					case 'heavy':
						msg.delete(0);
						msg.reply(Chooser.getEmbeddedMsg('CT-Side', 'Heavy', Chooser.getHeavys('ct'), '#333338')).then(msg => {
							msg.delete(600000);
						});
						break;

					default:
						msg.delete(0);
						msg.reply(Chooser.getEmbeddedMsg('CT-Side Weapons', 'Pistol', Chooser.getPistols('ct'), '#080ea6').addField('Big Gun', Chooser.getMainGun('ct'))).then(msg => {
							msg.delete(600000);
						});
						break;
				}
				break;

			case 't':
				switch (aContent[2]) {
					case 'gun':
						msg.delete(0);
						msg.reply(Chooser.getEmbeddedMsg('T-Side', 'Big Gun', Chooser.getMainGun('t'), '#e67300')).then(msg => {
							msg.delete(600000);
						});
						break;

					case 'pistol':
						msg.delete(0);
						msg.reply(Chooser.getEmbeddedMsg('T-Side', 'Pistol', Chooser.getPistols('t'), '#b3b3ff')).then(msg => {
							msg.delete(600000);
						});
						break;

					case 'rifle':
						msg.delete(0);
						msg.reply(Chooser.getEmbeddedMsg('T-Side', 'Rifle', Chooser.getRifles('t'), '#00802b')).then(msg => {
							msg.delete(600000);
						});
						break;

					case 'smg':
						msg.delete(0);
						msg.reply(Chooser.getEmbeddedMsg('T-Side', 'SMG', Chooser.getSMGs('t'), ' #bac5b2')).then(msg => {
							msg.delete(600000);
						});
						break;

					case 'heavy':
						msg.delete(0);
						msg.reply(Chooser.getEmbeddedMsg('T-Side', 'Heavy', Chooser.getHeavys('t'), '#333338')).then(msg => {
							msg.delete(600000);
						});
						break;

					default:
						msg.delete(0);
						msg.reply(Chooser.getEmbeddedMsg('T-Side Weapons', 'Pistol', Chooser.getPistols('t'), '#dbc604').addField('Big Gun', Chooser.getMainGun('t'))).then(msg => {
							msg.delete(600000);
						});
						break;
				}
				break;

			case 'fullpleb':
				var bAddEvent = false;
				if (aContent[2] == 't') {
					bAddEvent = true;
				}

				var iJackpotNumber = 1;
				if (aContent[3]) {
					iJackpotNumber = aContent[2];
				}
				msg.delete(0);
				msg.reply(Chooser.getFullRandom(bAddEvent, iJackpotNumber)).then(msg => {
					msg.delete(600000);
				});
				break;

			case 'map':
				var bHostageMaps = true;
				var sDesc = 'Including Hostage';
				if (aContent[2] == 'f') {
					bHostageMaps = false;
					sDesc = 'Excluding Hostage';
				}
				msg.delete(0);
				msg.reply(Chooser.getEmbeddedMsg('Map', sDesc, Chooser.getMaps(bHostageMaps), '#822c1f')).then(msg => {
					msg.delete(600000);
				});
				break;

			case 'event':
				switch (aContent.length) {
					case 3:
						if (aContent[2] == 'help') {
							msg.delete(0);
							msg.reply(Chooser.getEventHelp());
						}
						break;
					case 2:
						var sEvent = Chooser.getEvent();
						msg.delete(0);
						msg.reply(Chooser.getEmbeddedMsg('Random Event', sEvent, Chooser.getEventDescription(sEvent), '#605691')).then(msg => {
							msg.delete(600000);
						});
						break;
					default:
						msg.delete(0);
						msg.reply('Invalid arguments').then(msg => {
							msg.delete(600000);
						});
				}				
				break;

			case 'help':
				msg.delete(0);
				newMsg = msg.reply(Chooser.getHelpMsg());
				break;
		}
	}
});
