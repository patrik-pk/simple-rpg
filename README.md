This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![Showcase](https://github.com/patrikPu/patrikp_rpg/blob/master/showcase.jpg)

## Getting started
* Clone this repository
* `npm install` to install all required dependencies
* `npm start` to start the local server

## Overview
SimpleRPG is a single player RPG game made in React.js. Player can reach up to level 30. Total playtime is around 1 hour.

You fight with 2 weapons - Melee and Ranged. Each weapon has 3 types of attack - light, medium and strong. Their difference is in the damage and hit chance. 

You can find 15 unique enemies in the game split into 5 species. There are 2 types of enemies - Classic and Boss. There are 25 bosses in the Dungeon (5 species x 5 bosses). Defeating the Boss grants you a legendary item. Bosses have one type of armor stronger that the other, so the Player has to choose right which weapon to use. The last two bosses are dragons. In order to defeat them Player has to optimize his equipment against dragons. It involves a lot of RNG too.

There are six different stats - HP, Armor, Melee damage, Ranged damage, Crit chance and Block chance. And 5 types of bonuses increasing Player's damage against the given specie. Enemy can dodge the attack and Player can block it.

The are two types of currency - gold and diamonds. Gold is used for buying items and diamonds are used for rolling for better items.

Items have 5 types of rarity - Common, Uncommon, Rare, Epic and Legendary. The Player starts off with Common items.

## Game system
The whole game system is based around one variable called "gameFlow". The gameFlow is tied up with level, meaning everytime the Player level's up, the gameFlow increases. Both items and enemies stats are multiplied by gameFlow. Bosses stats are calculated by their own level gameFlow.

Up to level 5, the gameFlow is lower than one. This is for enemies to be easier on the start, so that the Player can defeat them without good items. For items, the minimal gameFlow is set to 1, meaning Player rolls the same items until then.

The Enemy HP (Classic enemy) is 6-7 times higher than Player base damage(base = Common item). Player's damage is then increased by weapon rarity and bonuses, each bonus point increasing his damage by 1% (after fully equipped the bonus value usually ranges between 100-150). Player can increase his damage also by critting and strength of attack. This way the Classic fights should last somewhere between 2-4 hits and boss fights 2 times longer than that.

Player HP is made up by two item's - Necklace and Earring. Along with weapons, these two items have to be replaced the most as the Player progresses.

Crit chance is made up by Ring and Belt, block chance by Shield. These 3 items are not influenced by gameFlow, meaning they don't scale with level.

Armor is made up by five items - Helmet, Chestplate, Pants, Gloves and Boots. Armor decreases the damage the Player takes. Chestplates gives you the most armor and Gloves alongside with Boots give the least. Armor items dont't have to be replaced that frequently.


