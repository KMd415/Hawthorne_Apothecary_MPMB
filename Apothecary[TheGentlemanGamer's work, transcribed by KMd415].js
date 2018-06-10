/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script adds a class called "Apothecary" and the three subclasses for it: "Grenadier", "Doctor", "Poisoner"
	
				This is material created on the Hawthorne Guild server.
				This class and subclasses are made by TheGentlemanGamer
				
	Code by:	KMd415
	Date:		2018-01-08 (sheet v12.999)
	
*/

var iFileName = "Apothecary[TheGentlemanGamer's work, transcribed by KMd415].js";
RequiredSheetVersion(12.999);

SourceList["HG:A"] = {
	name : "Hawthorne Guild: Apothecary Class",
	abbreviation : "HG:BH",
	group : "Hawthorne Guild",
	url : "http://homebrewery.naturalcrit.com/share/B1ZFXXLcaz",
	date : "2018/06/10"
};

ClassList["Apothecary"] = {
	regExpSearch : /^(?=.*apothecary)(?=.*apot).*$/i,
	name : "Apothecary",
	source : ["HG:A", 0],
	primaryAbility : "\n \u2022 Apothecary: Intelligence, Dexterity or Wisdom;",
	prereqs : "\n \u2022 Apothecary: Intelligence	13;",
	die : 8,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Con", "Int"],
	skills : ["\n\n" + toUni("Apothecary") + ": Choose three from Insight, Investigation, Medicine, Nature, Perception, History, and Survival."],
	toolProfs : {
		primary : ["Alchemist's supplies"],
		secondary : ["Alchemist's supplies"]
	},
	armor : [
		[true, true, false, true],
		[true, true, false, true]
	],
	weapons : [
		[true, true],
		[true, true]
	],
equipment : "Apothecary starting equipment:\n \u2022 Any simple weapon;\n \u2022 A light crossbow and 20 bolts;\n \u2022 A scholar's Pack -or- an explorer's Pack;\n \u2022 A poisoner's kit -or- n herbalism kit -or- alchemist's supplies -or- a healer's kit;\n \u2022 Leather armor.\n\nAlternatively, choose 5d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Apothecary Studies", ["apothecary-grenadier", "apothecary-doctor", "apothecary-poisoner"]],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  features : {
			"expertise" : {
				name : "Expertise",
				source : [["SRD", 39], ["P", 96]],
				minlevel : 1,
				description : "\n   " + "I gain expertise with two skills/thieves' tools I am proficient with; two more at 6th level",
				skillstxt : "\n\n" + toUni("Expertise (Rogue 1)") + ": Choose any two skill proficiencies and/or thieves' tools, and two more at 6th level.",
				additional : levels.map(function (n) {
					if (n < 6) return "with two skills";
					return "with four skills";
				})
			},
			"Chemistry" : {
				name : "Sneak Attack",
				source : [["SRD", 39], ["P", 96]],
				minlevel : 1,
				description : "\n   " + "Once per turn, I can add damage to finesse/ranged attack if I have adv." + "\n   " + "I don't need adv. if a conscious ally is within 5 ft of the target and I don't have disadv.",
				additional : levels.map(function (n) {
					return Math.ceil(n / 2) + "d4";
				}),
			},
			"thieves cant" : {
				name : "Thieves' Cant",
				source : [["SRD", 39], ["P", 96]],
				minlevel : 1,
				description : "\n   " + "I know the secret rogue language that I can use to convey messages inconspicuously",
				languageProfs : ["Thieves' Cant"]
			},
			"cunning action" : {
				name : "Cunning Action",
				source : [["SRD", 40], ["P", 96]],
				minlevel : 2,
				description : "\n   " + "I can use a bonus action to take the Dash, Disengage, or Hide action",
				action : ["bonus action", ""]
			},
			"subclassfeature3" : {
				name : "Roguish Archetype",
				source : [["SRD", 40], ["P", 96]],
				minlevel : 3,
				description : "\n   " + "Choose a Roguish Archetype you strive to emulate and put it in the \"Class\" field" + "\n   " + "Choose either Arcane Trickster, Assassin, Mastermind, Swashbuckler, or Thief"
			},
			"uncanny dodge" : {
				name : "Uncanny Dodge",
				source : [["SRD", 40], ["P", 96]],
				minlevel : 5,
				description : "\n   " + "As a reaction, I halve the damage of an attack from an attacker that I can see",
				action : ["reaction", ""]
			},
			"evasion" : {
				name : "Evasion",
				source : [["SRD", 40], ["P", 96]],
				minlevel : 7,
				description : "\n   " + "My Dexterity saves vs. areas of effect negate damage on success and halve it on failure",
				savetxt : { text : ["Dex save vs. area effects: fail \u2015 half dmg, success \u2015 no dmg"] }
			},
			"reliable talent" : {
				name : "Reliable Talent",
				source : [["SRD", 40], ["P", 96]],
				minlevel : 11,
				description : "\n   " + "If I make an ability check where I add my proficiency bonus, rolls of 9 or lower are 10"
			},
			"blindsense" : {
				name : "Blindsense",
				source : [["SRD", 40], ["P", 96]],
				minlevel : 14,
				description : "\n   " + "With my hearing, I can locate hidden or invisible creatures that are within 10 ft of me",
				vision : [["Blindsense", 10]]
			},
			"slippery mind" : {
				name : "Slippery Mind",
				source : [["SRD", 40], ["P", 96]],
				minlevel : 15,
				description : "\n   " + "I am proficient with Wisdom saving throws",
				saves : ["Wis"]
			},
			"elusive" : {
				name : "Elusive",
				source : [["SRD", 40], ["P", 96]],
				minlevel : 18,
				description : "\n   " + "Attackers do not gain advantage on attacks vs. me, unless I am incapacitated"
			},
			"stroke of luck" : {
				name : "Stroke of Luck",
				source : [["SRD", 40], ["P", 97]],
				minlevel : 20,
				description : "\n   " + "I can turn a missed attack into a hit or a failed ability check into a natural 20",
				recovery : "short rest",
				usages : 1
			}
		}
	},
