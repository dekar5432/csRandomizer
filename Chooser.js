const Discord = require('discord.js');

const aCTPistols = [
    'USP-S',
    'P2000',
    'Five-Seven'
];

const aTPistols = [
    'Glock-18',
    'Tec-9'
];

const aBPistols = [
    'P250',
    'CZ75-Auto',
    'Duel Berettas',
    'Desert Eagle',
    'R8 Revolver'
];

const aCTSMGs = [
    'MP-9'
];

const aTSMGs = [
    'MAC-10'
];

const aBSMGs = [
    'PP-Bizon',
    'MP7',
    'UMP-45',
    'P90',
    'MP5-SD'
];

const aCTRifles = [
    'Famas',
    'M4A4',
    'M4A1-S',
    'AUG',
    'SCAR-20'
];

const aTRifles = [
    'Galil AR',
    'AK-47',
    'SG 553',
    'G3SG1'
];

const aBRifles = [
    'SSG 08',
    'AWP'
];

const aCTHeavy = [
    'MAG-7'
];

const aTHeavy = [
    'Sawed-Off'
];

const aBHeavy = [
    'Nova',
    'XM1014',
    'M249',
    'Negev'
];

const aCompMapsHostage = [
    'Agency',
    'Office'
];

const aCompMapsNonHostage = [
    'Mirage',
    'Inferno',
    'Dust II',
    'Cache',
    'Vertigo',
    'Nuke',
    'Train',
    'Overpass'
];

const aEvents = [
    'Muted',
    'Never stop',
    'Hide',
    'Reversed Keyboard',
    'Pirate',
    'ECO?! No thanks',
    'Rush hour',
    'HARDMODE',
    'Friendly fire?',
    'Spamthumb',
    'We are Crab-People',
    'No-Scope',
    'B, Blyat!',
    'The A-Team',
    'Let\'s go camping',
    'No Nades',
    'Hotbox',
    'FLASH!',
    'Boom',
    'It\'s getting hot in here',
    'Armor? For Pussies',
    'It is too late',
    'I want a big gun',
    'Recycling'
];

module.exports = {
    Chooser: function ()
    {
        this.getPistols = function (side) {
            var aUse = aTPistols;
            if (side.toLowerCase() === 'ct') {
                aUse = aCTPistols;
            }

            return this.getRandomValue(aBPistols.concat(aUse));
        };

        this.getRifles = function (side) {
            var aUse = aTRifles;
            if (side.toLowerCase() === 'ct') {
                aUse = aCTRifles;
            }

            return this.getRandomValue(aBRifles.concat(aUse));
        };

        this.getSMGs = function (side) {
            var aUse = aTSMGs;
            if (side.toLowerCase() === 'ct') {
                aUse = aCTSMGs;
            }

            return this.getRandomValue(aBSMGs.concat(aUse));
        };

        this.getHeavys = function (side) {
            var aUse = aTHeavy;
            if (side.toLowerCase() === 'ct') {
                aUse = aCTHeavy;
            }

            return this.getRandomValue(aBHeavy.concat(aUse));
        };

        this.getMainGun = function (side) {
            var aUse = aTRifles.concat(aTHeavy).concat(aTSMGs);
            if (side.toLowerCase() === 'ct') {
                aUse = aCTRifles.concat(aCTHeavy).concat(aCTSMGs);
            }

            return this.getRandomValue(aUse);
        };

        this.getMaps = function (bHostage) {
            var aUse = aCompMapsNonHostage;
            if (bHostage === true) {
                aUse = aCompMapsNonHostage.concat(aCompMapsHostage);
            }

            return this.getRandomValue(aUse);
        };

        this.getEvent = function () {
            var aUse = aEvents;
            return this.getRandomValue(aUse);
        };

        this.getEventDescription = function (event) {
            var sRet = '';
            switch(event) {
                case 'Muted':
                    sRet = 'Mute your teammates completely and play without Info';
                    break;

                case 'Never stop':
                    sRet = 'Keep moving. Don\'t stop';
                    break;

                case 'Hide':
                    sRet = 'Hide in the toilet. Or behind a car. Or box. JUST HIDE!';
                    break;

                case 'Reversed Keyboard':
                    sRet = 'Turn your keyboard around';
                    break;

                case 'Pirate':
                    sRet = 'Play with one eye';
                    break;

                case 'ECO?! No thanks':
                    sRet = 'Always buy. Who needs eco?';
                    break;

                case 'Rush hour':
                    sRet = 'Rush every round. Play like a true silver';
                    break;

                case 'Friendly fire?':
                    sRet = 'Deal as much team-damage as possible. But don\'t get kicked from the server!';
                    break;

                case 'Spamthumb':
                    sRet = 'Never stop jumping. Spam that spacebar!';
                    break;

                case 'We are Crab-People':
                    sRet = 'You know how this one goes..';
                    break;

                case 'No-Scope':
                    sRet = 'Don\'t scope. Just.. don\'t.';
                    break;

                case 'B, Blyat!':
                    sRet = 'Always plant B';
                    break;
                
                case 'The A-Team':
                    sRet = 'Always plant A';
                    break;

                case 'Let\'s go camping':
                    sRet = 'Camp out';
                    break;

                case 'No Nades':
                    sRet = 'Well,... no nades!';
                    break;

                case 'Hotbox':
                    sRet = 'Only use Smokes - no other nades allowed';
                    break;

                case 'FLASH!':
                    sRet = 'Only use flashes - no other nades allowed';
                    break;

                case 'Boom':
                    sRet = 'Only use Handgranades - no other nades allowed';
                    break;

                case 'It\'s getting hot in here':
                    sRet = 'Only use Molotovs - no other nades allowed';
                    break;

                case 'Armor? For Pussies':
                    sRet = 'Play without Kevlar and helmet';
                    break;

                case 'It is too late':
                    sRet = 'No bomb planting allowed. Kill the enemy team before you can plant';
                    break;

                case 'I want a big gun':
                    sRet = 'Throw your pistol away at the start of every round';
                    break;

                case 'Recycling':
                    sRet = 'Only use pistol and the weapons the enemy team drops';
                    break;

                case 'HARDMODE':
                default:
                    sRet = 'Play like Sven';
                    break;
            }

            return sRet;
        };

        this.getEventHelp = function () {
            var embedded = new Discord.RichEmbed()
                .setTitle('Event List')
                .setColor('#6b558a')
                .setFooter('du Pleb', 'https://cdn.discordapp.com/attachments/676544618514481153/677293973169242112/cartman.jpg')
                .setThumbnail('https://cdn.discordapp.com/attachments/676544618514481153/677294637752516608/csgo-breaks-record-for-highest-player-count-all-time.jpg');
            for (i = 0; i < aEvents.length; i++) {
                embedded.addField(aEvents[i], this.getEventDescription(aEvents[i]));
            }

            return embedded;
        };

        this.getFullRandom = function (bAddEvent = false, iJackpotPercent = 1) {
            if (iJackpotPercent > 100) {
                return 'Geht nur bis 100%, du Pleb.';
            }
            var iRestPercent = 100 - iJackpotPercent;
            var jackpot = Math.random() * 100;

            if (jackpot < iRestPercent) {
                var embedded = this.getEmbeddedMsg('Full Pleb', 'Map', this.getMaps(true), '#34dceb');
                embedded.addField('Pistol CT', this.getPistols('ct')).addField('Big Gun CT', this.getMainGun('ct'));
                embedded.addField('Pistol T', this.getPistols('t')).addField('Big Gun T', this.getMainGun('t'));
                if (bAddEvent === true) {
                    var sEvent = this.getEvent();
                    embedded.addField(sEvent, this.getEventDescription(sEvent));
                }
                return embedded;
            }
            return this.getEmbeddedMsg('JACKPOT', 'YOU WIN!', 'Choose what you want.', '#fc03a1');
        };

        this.getRandomValue = function (aData) {
            return aData[Math.floor(Math.random() * aData.length)];
        };

        this.getHelpMsg = function () {
            var ret = this.getEmbeddedMsg('Help - Commands', 'cs fullPleb [event : optional] [jackpot-% : optional]', 'Randomizes everything!\n event - t, f\nOptionally you can add your Jackpot Win-Percentage', '#ff1a1a');
            ret.addField('cs [side] [type : optional]', 'side - ct, t' + '\n' + 'type - gun, pistol, rifle, smg, heavy');
            ret.addField('cs [map] [hostage : optional]', 'map - without optional parameter always includes hostage maps' + '\n' + 'hostage - t, f');
            ret.addField('cs event [help : optional]', 'event - Gives you a random event you need to play\nhelp - A list of all possible events');

            return ret;
        };

        this.getEmbeddedMsg = function (title, subtitle, desc, color, footer = 'du Pleb') {
            return new Discord.RichEmbed()
                .setTitle(title)
                .setColor(color)
                .setFooter(footer, 'https://cdn.discordapp.com/attachments/676544618514481153/677293973169242112/cartman.jpg')
                .setThumbnail('https://cdn.discordapp.com/attachments/676544618514481153/677294637752516608/csgo-breaks-record-for-highest-player-count-all-time.jpg')
                .addField(subtitle, desc);
        };
    }
};