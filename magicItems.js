


const magicItems = [

  {name:'Magic Fist',price:2000, notes:'', weeks:3, st:35, weeklyCost:0, startingCost:0, ingredients:'-'},
  {name:'Blur',price:3000, notes:'', weeks:5, st:75, weeklyCost:15, startingCost:0, ingredients:'-'},
  {name:'Slow Movement',price:500, notes:'', weeks:1, st:15, weeklyCost:40, startingCost:0, ingredients:'-'},
  {name:'Drop Weapon',price:500, notes:'', weeks:1, st:20, weeklyCost:40, startingCost:0, ingredients:'-'},
  {name:'Detect Magic',price:5000, notes:'', weeks:3, st:100, weeklyCost:1013, startingCost:0, ingredients:'2 doses IQ+ potion ($500); $13 ci'},
  {name:'Light',price:500, notes:'', weeks:1, st:10, weeklyCost:40, startingCost:0, ingredients:'-'},
  {name:'Clumsiness (-1)',price:1000, notes:'A', weeks:1, st:70, weeklyCost:430, startingCost:0, ingredients:'5 doses DX- potion ($80); $13 ci'},
  {name:'Confusion (-1)',price:1000, notes:'A', weeks:1, st:70, weeklyCost:430, startingCost:0, ingredients:'2 doses IQ- potion ($200); $13 ci'},
  {name:'Weakness (-1)',price:1000, notes:'A', weeks:1, st:70, weeklyCost:430, startingCost:0, ingredients:'4 doses ST- potion ($100); $13 ci'},
  {name:'Avert',price:2000, notes:'', weeks:3, st:25, weeklyCost:190, startingCost:0, ingredients:'1 dose Fear potion ($150); $40 ci'},
  {name:'Detect Life',price:4000, notes:'', weeks:4, st:50, weeklyCost:450, startingCost:0, ingredients:'1 dose each Smell Booster ($200), Acute Hearing ($250)'},
  {name:'Darkness (1 hex)',price:2000, notes:'A', weeks:4, st:20, weeklyCost:25, startingCost:0, ingredients:'-'},
  {name:'Dark Vision',price:3000, notes:'', weeks:3, st:25, weeklyCost:515, startingCost:0, ingredients:'1 dose Dark Vision potion ($500); $15 ci'},
  {name:'Detect Enemies',price:6000, notes:'', weeks:2, st:50, weeklyCost:2425, startingCost:0, ingredients:'2 doses Smell Booster ($200); 2 doses Acute Hearing ($250); 1 dose Telepathy ($1,500); $25 ci'},
  {name:'Lock',price:500, notes:'', weeks:1, st:15, weeklyCost:40, startingCost:0, ingredients:'-'},
  {name:'Knock',price:1000, notes:'', weeks:2, st:15, weeklyCost:40, startingCost:0, ingredients:'-'},
  {name:'Trip',price:1000, notes:'', weeks:2, st:20, weeklyCost:38, startingCost:0, ingredients:'-'},
  {name:'Speed Movement',price:1500, notes:'', weeks:1, st:25, weeklyCost:1020, startingCost:0, ingredients:'1 dose Speed Movt. potion ($1,000); $20 ci'},
  {name:'Dazzle Gem',price:250, notes:'', weeks:45293, st:10, weeklyCost:20, startingCost:0, ingredients:'1 $20 gem; takes only 3 days.'},
  {name:'Shock Shield',price:5000, notes:'', weeks:6, st:125, weeklyCost:100, startingCost:0, ingredients:'1 dose gunpowder ($100)'},
  {name:'Shadow',price:1000, notes:'', weeks:1, st:175, weeklyCost:230, startingCost:0, ingredients:'1 dose Sleep potion ($150); $80 ci'},
  {name:'Far Vision',price:2500, notes:'', weeks:4, st:70, weeklyCost:45, startingCost:0, ingredients:'2 fresh hawk’s eyes ($20); $5 ci'},
  {name:'Sleep',price:1000, notes:'', weeks:1, st:125, weeklyCost:330, startingCost:0, ingredients:'2 doses Sleep potion ($150); $30 ci'},
  {name:'Reverse Missiles',price:5000, notes:'', weeks:6, st:175, weeklyCost:15, startingCost:0, ingredients:'-'},
  {name:'Rope',price:1000, notes:'', weeks:1, st:50, weeklyCost:480, startingCost:0, ingredients:'6 doses DX- potion ($80)'},
  {name:'Destroy Illusion',price:2000, notes:'', weeks:2, st:270, weeklyCost:25, startingCost:0, ingredients:'-'},
  {name:'Silent Movement',price:2000, notes:'', weeks:4, st:25, weeklyCost:25, startingCost:0, ingredients:'-'},
  {name:'Persuasiveness',price:12000, notes:'', weeks:5, st:175, weeklyCost:1500, startingCost:0, ingredients:'1 dose Telepathy ($1,500)'},
  {name:'Freeze',price:5000, notes:'', weeks:6, st:100, weeklyCost:150, startingCost:0, ingredients:'Fresh basilisk brain & eyes ($150)'},
  {name:'Fireball',price:5500, notes:'', weeks:4, st:200, weeklyCost:500, startingCost:0, ingredients:'1 dose Pyrotic potion ($500)'},
  {name:'Invisibility',price:6500, notes:'', weeks:3, st:100, weeklyCost:1500, startingCost:0, ingredients:'1 dose Invisibility potion ($1,500)'},
  {name:'Mage Sight',price:6000, notes:'', weeks:6, st:200, weeklyCost:120, startingCost:0, ingredients:'-'},
  {name:'Magic Rainstorm',price:4500, notes:'', weeks:6, st:125, weeklyCost:35, startingCost:0, ingredients:'-'},
  {name:'Eyes-Behind',price:3000, notes:'', weeks:3, st:50, weeklyCost:465, startingCost:0, ingredients:'1 dose Acute hearing ($250); one  pickled dragonet ($100); $115 ci'},
  {name:'Flight',price:10000, notes:'', weeks:5, st:125, weeklyCost:1235, startingCost:0, ingredients:'1 dose Flight ($1,200); $35 ci'},
  {name:'Stone Flesh',price:4000, notes:'', weeks:5, st:175, weeklyCost:0, startingCost:0, ingredients:'-'},
  {name:'Slippery or Sticky Floor',price:2000, notes:'C', weeks:4, st:20, weeklyCost:26, startingCost:0, ingredients:'-'},
  {name:'Curse (-1 to all rolls)',price:3500, notes:'A', weeks:4, st:25, weeklyCost:380, startingCost:0, ingredients:'1 dose each ST-, DX-, IQ- potions'},
  {name:'Fireproofing',price:5000, notes:'', weeks:5, st:25, weeklyCost:500, startingCost:0, ingredients:'2 doses Fireproofing potion ($250)'},
  {name:'Telekinesis',price:5000, notes:'', weeks:4, st:120, weeklyCost:540, startingCost:0, ingredients:'1 dose Telekinesis ($500), $40 ci'},
  {name:'Lightning',price:15000, notes:'D', weeks:10, st:375, weeklyCost:150, startingCost:0, ingredients:'1 Silver Slime, live ($150)'},
  {name:'Dispel Illusions',price:5000, notes:'', weeks:6, st:175, weeklyCost:0, startingCost:0, ingredients:'-'},
  {name:'Spell Shield',price:6000, notes:'', weeks:6, st:225, weeklyCost:0, startingCost:0, ingredients:'-'},
  {name:'Telepathy',price:20000, notes:'', weeks:5, st:100, weeklyCost:3600, startingCost:0, ingredients:'2 doses Telepathy ($1,500); one dose IQ+ potion ($600)'},
  {name:'Glamour',price:4000, notes:'', weeks:5, st:160, weeklyCost:0, startingCost:0, ingredients:'-'},
  {name:'Fresh Air',price:3000, notes:'', weeks:3, st:25, weeklyCost:515, startingCost:0, ingredients:'1 dose Water Breathing potion ($500); $15 ci'},
  {name:'Gems: Summon Wolf or Myrmidon',price:500, notes:'C', weeks:1, st:25, weeklyCost:0, startingCost:40, ingredients:'(Must start with a $40 gem)'},
  {name:'Summon Bear/Gargoyle',price:1000, notes:'C', weeks:2, st:25, weeklyCost:0, startingCost:80, ingredients:'(Must start with an $80 gem)'},
  {name:'Summon Giant/ Small Dragon',price:2000, notes:'C', weeks:3, st:75, weeklyCost:0, startingCost:285, ingredients:'(Must start with a $285 gem)'},
  {name:'Summon 7-Hex Dragon',price:4000, notes:'C', weeks:4, st:200, weeklyCost:0, startingCost:600, ingredients:'(Must start with a $600 gem)'},
  {name:'Quiver of Replenishment',price:1000, notes:'', weeks:2, st:20, weeklyCost:35, startingCost:0, ingredients:'-'},
  {name:'with silver arrow',price:5000, notes:'', weeks:6, st:150, weeklyCost:60, startingCost:100, ingredients:'(must start with silver arrow)'},
  {name:'giving DX +1',price:15000, notes:'', weeks:10, st:150, weeklyCost:600, startingCost:0, ingredients:'1 dose DX+ potion ($600)'},
  {name:'Amulet vs. Drunkenness',price:1500, notes:'', weeks:2, st:150, weeklyCost:30, startingCost:0, ingredients:'1 good bottle of wine ($30)'},
  {name:'Amulet vs. Drowning',price:2000, notes:'', weeks:1, st:210, weeklyCost:1100, startingCost:0, ingredients:'1 dose each DX+ potion ($600) and Water Breathing ($500)'},
  {name:'Amulet vs. Creature',price:3000, notes:'', weeks:3, st:125, weeklyCost:300, startingCost:0, ingredients:'2 doses Fear potion ($150)'},
  {name:'Amulet vs. one elemental',price:3000, notes:'', weeks:3, st:125, weeklyCost:300, startingCost:0, ingredients:'2 doses Fear potion ($150)'},
  {name:'Amulet vs. all elementals',price:5000, notes:'', weeks:4, st:175, weeklyCost:480, startingCost:0, ingredients:'3 doses Fear potion ($150); $30 ci'},
  {name:'Amulet vs. Disease',price:10000, notes:'', weeks:5, st:25, weeklyCost:1420, startingCost:0, ingredients:'3 doses Healing ($150); 1 dose each Simple Poison ($120), Plant Poison ($200), Insect Poison ($150) and Pyrotic ($500)'},
  {name:'Pentagram (per hex)',price:2000, notes:'B', weeks:3, st:125, weeklyCost:0, startingCost:0, ingredients:'-'},
  {name:'Maintain Illusion',price:3000, notes:'B', weeks:5, st:75, weeklyCost:0, startingCost:0, ingredients:'-'},
  {name:'Maintain Image',price:1400, notes:'B', weeks:3, st:20, weeklyCost:0, startingCost:0, ingredients:'-'},
  {name:'Ring (etc.) of Control',price:10000, notes:'E', weeks:18, st:25, weeklyCost:0, startingCost:0, ingredients:'-'},
  {name:'2-hex Magic Carpet',price:10000, notes:'', weeks:5, st:75, weeklyCost:1200, startingCost:500, ingredients:'1 dose Flight potion ($1,200); must  start with a $500 carpet'},
  {name:'Serpent Torc',price:2000, notes:'', weeks:3, st:75, weeklyCost:95, startingCost:55, ingredients:'$95 ci; starts with $55 worth of silver beads and one snake’s backbone'},
  {name:'For restringing  broken torc',price:500, notes:'', weeks:1, st:20, weeklyCost:40, startingCost:0, ingredients:'$40 ci; starts with one snake’s backbone'},
  {name:'Limiting Spell',price:1000, notes:'', weeks:2, st:25, weeklyCost:35, startingCost:0, ingredients:'[Cost is the same whenever spell is used]'},
  {name:'Expunge',price:2000, notes:'', weeks:3, st:125, weeklyCost:0, startingCost:0, ingredients:'[Cost is the same whenever spell is used]'},
  {name:'Iron Flesh',price:16000, notes:'D', weeks:10, st:250, weeklyCost:366, startingCost:0, ingredients:'1/20 of the hide of a 14-hex dragon ($1,600)'},
  {name:'Teleport',price:15000, notes:'D', weeks:10, st:400, weeklyCost:25, startingCost:0, ingredients:'-'},
  {name:'Giant Rope',price:2000, notes:'', weeks:1, st:275, weeklyCost:960, startingCost:0, ingredients:'12 doses DX- potion ($80)'},
  {name:'Astral Projection',price:20000, notes:'', weeks:6, st:175, weeklyCost:2200, startingCost:0, ingredients:'1 dose Flight potion ($1,200); two doses Telekinesis potion ($500)'},
  {name:'Hammertouch',price:5000, notes:'', weeks:6, st:75, weeklyCost:100, startingCost:0, ingredients:'1 dose Gunpowder ($100)'},
  {name:'Unnoticeability',price:5000, notes:'', weeks:2, st:200, weeklyCost:1540, startingCost:0, ingredients:'1 dose Telepathy ($1,500); $40 ci'},
  {name:'Long-Distance Telepathy',price:20000, notes:'', weeks:5, st:125, weeklyCost:3000, startingCost:0, ingredients:'2 doses Telepathy ($1,500)'},
  {name:'Insubstantiability',price:21000, notes:'', weeks:5, st:125, weeklyCost:3200, startingCost:0, ingredients:'1 dose each: Invisibility ($1,500), Flight ($1,200), Telekinesis ($500)'},
  {name:'Cleansing',price:50000, notes:'D', weeks:10, st:75, weeklyCost:3770, startingCost:0, ingredients:'1 each Universal Antidote, Pyrotic, Simple,  Plant, & Insect Poison; 2 Healing'},
  {name:'Spellsniffer',price:20000, notes:'D', weeks:10, st:125, weeklyCost:1020, startingCost:0, ingredients:'1 dose IQ+ potion ($600); $420 ci'},
  {name:'Little Death',price:10000, notes:'', weeks:5, st:75, weeklyCost:1200, startingCost:0, ingredients:'8 doses Sleep potion ($150)'},
  {name:'Geas',price:5000, notes:'', weeks:6, st:100, weeklyCost:150, startingCost:0, ingredients:'1 dose Fear potion ($150)'},
  {name:'Shapeshifting',price:10000, notes:'D', weeks:10, st:175, weeklyCost:35, startingCost:0, ingredients:'-'},
  {name:'Wizard’s Wrath',price:40000, notes:'F', weeks:25, st:375, weeklyCost:0, startingCost:0, ingredients:'-'},
  {name:'Long-Distance Teleport',price:50000, notes:'F', weeks:25, st:500, weeklyCost:65, startingCost:0, ingredients:'-'},
  {name:'Word of Command',price:20000, notes:'F', weeks:25, st:50, weeklyCost:25, startingCost:0, ingredients:'-'},
  {name:'Crystal Ball',price:50000, notes:'G', weeks:40, st:175, weeklyCost:0, startingCost:250, ingredients:'(Must start with a $250 crystal sphere)'},
  {name:'Flaming Weapon',price:10000, notes:'C', weeks:5, st:50, weeklyCost:1270, startingCost:0, ingredients:'1 dose Fireproofing ($250);  2 doses Pyrotic ($500); $20 ci'},
  {name:'Wards',price:6000, notes:'', weeks:5, st:250, weeklyCost:125, startingCost:0, ingredients:'Each of the five wards must be made  from a $125 gem or carving'},
  {name:'Powerstone  (1 point)',price:1000, notes:'B', weeks:1, st:40, weeklyCost:380, startingCost:1000, ingredients:'2 doses Healing ($150); $80 ci. Must start  with a gem worth at least $1,000.'},
  {name:'Powerstone  (5 points at once)',price:5000, notes:'B', weeks:2, st:50, weeklyCost:1800, startingCost:1000, ingredients:'8 doses Healing ($150). Must start  with a gem worth at least $1,000.'},
  {name:'Charm (+1)',price:30000, notes:'D', weeks:10, st:245, weeklyCost:1650, startingCost:0, ingredients:'1 each ST+, DX+, IQ+'},
  {name:'Charm (+2)',price:100000, notes:'F', weeks:25, st:225, weeklyCost:2150, startingCost:0, ingredients:'1 each ST+, DX+, IQ+, Telekinesis'},
  {name:'Increase one  attribute (+1)',price:2000, notes:'A', weeks:3, st:75, weeklyCost:0, startingCost:0, ingredients:'-'},
  {name:'Magic Fist rod (1 point)',price:1000, notes:'B', weeks:1, st:225, weeklyCost:30, startingCost:0, ingredients:'-'},
  {name:'Fireball rod (1 point)',price:2000, notes:'B', weeks:1, st:225, weeklyCost:1000, startingCost:0, ingredients:'2 doses Pyrotic potion ($500)'},
  {name:'Lightning-bolt  rod (1 point)',price:5000, notes:'B', weeks:4, st:250, weeklyCost:190, startingCost:0, ingredients:'1 live silver slime ($150); $40 ci'},
  {name:'Wizards’s Wrath  rod (1 point)',price:10000, notes:'B', weeks:6, st:450, weeklyCost:125, startingCost:0, ingredients:'-'},
  {name:'Unicorn Horn',price:6500, notes:'', weeks:2, st:75, weeklyCost:2520, startingCost:0, ingredients:'1 dose Universal Antidote; $20 ci'},
  {name:'Gate-Key',price:10000, notes:'', weeks:4, st:170, weeklyCost:1500, startingCost:100, ingredients:'1 dose Telepathy potion ($1,500).  Must start with $100 silver key.'},
  {name:'Gate-Lock',price:5000, notes:'', weeks:4, st:75, weeklyCost:500, startingCost:0, ingredients:'Gate-Lock 5,000 4 75 500 1 dose Telekinesis potion ($500).'},
  {name:'Gate-Seal',price:10000, notes:'', weeks:4, st:75, weeklyCost:500, startingCost:100, ingredients:'1 dose Telekinesis potion ($500).  Must start with $100 silver seal.'},
  {name:'Bound Small Demon',price:20000, notes:'E', weeks:18, st:200, weeklyCost:0, startingCost:1000, ingredients:'- Requires one large ($1,000+) gem or  statue. Wizard must have IQ 24+.'},
  {name:'Amulet of Skepticism',price:4000, notes:'', weeks:5, st:100, weeklyCost:55, startingCost:30, ingredients:'1 well-rotted zombie’s eye ($30); $25 ci'},
  {name:'Hand of Glory',price:4000, notes:'', weeks:4, st:75, weeklyCost:35, startingCost:1000, ingredients:'$35 ci. Must start with hand ($1,000).'},
  {name:'Lens of Translation, for each original language',price:6000, notes:'B', weeks:6, st:200, weeklyCost:10, startingCost:200, ingredients:'Must start with crystal lens ($200)'},
  {name:'Adding 1 language  to lens',price:8000, notes:'B', weeks:6, st:350, weeklyCost:10, startingCost:0, ingredients:'-'},
  {name:'Zombie Ring',price:3000, notes:'4', weeks:100, st:10, weeklyCost:0, startingCost:0, ingredients:'–'},
  {name:'Weapon/Armor  Enchantment (+1)',price:1000, notes:'A', weeks:2, st:75, weeklyCost:40, startingCost:0, ingredients:'-'},





   ];


// const magicItems = [
//     {
//         name: "Magic Fist",
//         price: 2000,
//         notes: "",
//         weeks: 3,
//         st: 35,
//         cost: 0,
//         ingredients: ""
//     },
//     {
//         name: "Blur",
//         price: 3000,
//         notes: "",
//         weeks: 5,
//         st: 75,
//         cost: 15,
//         ingredients: ""
//     },
//     {
//         name: "Slow Movement",
//         price: 500,
//         notes: "",
//         weeks: 1,
//         st: 15,
//         cost: 40,
//         ingredients: ""
//     },
//     {
//         name: "Drop Weapon",
//         price: 500,
//         notes: "",
//         weeks: 1,
//         st: 20,
//         cost: 40,
//         ingredients: ""
//     },
//     {
//         name: "Detect Magic",
//         price: 5000,
//         notes: "",
//         weeks: 3,
//         st: 100,
//         cost: 1013,
//         ingredients: "2 doses IQ+ potion ($500); $13 ci"
//     },
//     {
//         name: "Light",
//         price: 500,
//         notes: "",
//         weeks: 1,
//         st: 10,
//         cost: 40,
//         ingredients: ""
//     },
//     {
//         name: "Clumsiness (-1)",
//         price: 1000,
//         notes: "A",
//         weeks: 1,
//         st: 70,
//         cost: 430,
//         ingredients: "5 doses DX- potion ($80); $13 ci"
//     },
//     {
//         name: "Confusion (-1)",
//         price: 1000,
//         notes: "A",
//         weeks: 1,
//         st: 70,
//         cost: 430,
//         ingredients: "2 doses IQ- potion ($200); $13 ci"
//     },
//     {
//         name: "Weakness (-1)",
//         price: 1000,
//         notes: "A",
//         weeks: 1,
//         st: 70,
//         cost: 430,
//         ingredients: "4 doses ST- potion ($100); $13 ci"
//     },
//     {
//         name: "Avert",
//         price: 2000,
//         notes: "",
//         weeks: 3,
//         st: 25,
//         cost: 190,
//         ingredients: "1 dose Fear potion ($150); $40 ci"
//     },
//     {
//         name: "Detect Life",
//         price: 4000,
//         notes: "",
//         weeks: 4,
//         st: 50,
//         cost: 450,
//         ingredients: "1 dose each Smell Booster ($200), Acute Hearing ($250)"
//     },
//     {
//         name: "Darkness (1 hex)",
//         price: 2000,
//         notes: "A",
//         weeks: 4,
//         st: 20,
//         cost: 25,
//         ingredients: ""
//     },
//     {
//         name: "Dark Vision",
//         price: 3000,
//         notes: "",
//         weeks: 3,
//         st: 25,
//         cost: 515,
//         ingredients: "1 dose Dark Vision potion ($500); $15 ci"
//     },
//     {
//         name: "Detect Enemies",
//         price: 6000,
//         notes: "",
//         weeks: 2,
//         st: 50,
//         cost: 2425,
//         ingredients: "2 doses Smell Booster ($200); 2 doses Acute Hearing ($250); 1 dose Telepathy ($1,500); $25 ci"
//     },
//     {
//         name: "Lock",
//         price: 500,
//         notes: "",
//         weeks: 1,
//         st: 15,
//         cost: 40,
//         ingredients: ""
//     },
//     {
//         name: "Knock",
//         price: 1000,
//         notes: "",
//         weeks: 2,
//         st: 15,
//         cost: 40,
//         ingredients: ""
//     },
//     {
//         name: "Trip",
//         price: 1000,
//         notes: "",
//         weeks: 2,
//         st: 20,
//         cost: 38,
//         ingredients: ""
//     },
//     {
//         name: "Speed Movement",
//         price: 1500,
//         notes: "",
//         weeks: 1,
//         st: 25,
//         cost: 1020,
//         ingredients: "1 dose Speed Movt. potion ($1,000); $20 ci"
//     },
//     {
//         name: "Dazzle Gem",
//         price: 250,
//         notes: "",
//         weeks: 0.5,
//         st: 10,
//         cost: 20,
//         ingredients: "1 $20 gem; takes only 3 days."
//     },
//     {
//         name: "Shock Shield",
//         price: 5000,
//         notes: "",
//         weeks: 6,
//         st: 125,
//         cost: 100,
//         ingredients: "1 dose gunpowder ($100)"
//     },
//     {
//         name: "Shadow",
//         price: 1000,
//         notes: "",
//         weeks: 1,
//         st: 175,
//         cost: 230,
//         ingredients: "1 dose Sleep potion ($150); $80 ci"
//     },
//     {
//         name: "Far Vision",
//         price: 2500,
//         notes: "",
//         weeks: 4,
//         st: 70,
//         cost: 45,
//         ingredients: "2 fresh hawk’s eyes ($20); $5 ci"
//     },
//     {
//         name: "Sleep",
//         price: 1000,
//         notes: "",
//         weeks: 1,
//         st: 125,
//         cost: 330,
//         ingredients: "2 doses Sleep potion ($150); $30 ci"
//     },
//     {
//         name: "Reverse Missiles",
//         price: 5000,
//         notes: "",
//         weeks: 6,
//         st: 175,
//         cost: 15,
//         ingredients: ""
//     },
//     {
//         name: "Iron Flesh",
//         price: 16000,
//         notes: "D",
//         weeks: 10,
//         st: 250,
//         cost: 366,
//         ingredients: "1/20 of the hide of a 14-hex dragon ($1,600)"
//     },
//     {
//         name: "Teleport",
//         price: 15000,
//         notes: "D",
//         weeks: 10,
//         st: 400,
//         cost: 25,
//         ingredients: "-"
//     },
//     {
//         name: "Giant Rope",
//         price: 2000,
//         notes: "-",
//         weeks: 1,
//         st: 275,
//         cost: 960,
//         ingredients: "12 doses DX- potion ($80)"
//     },
//     {
//         name: "Astral Projection",
//         price: 20000,
//         notes: "-",
//         weeks: 6,
//         st: 175,
//         cost: 2200,
//         ingredients: "1 dose Flight potion ($1,200); two doses Telekinesis potion ($500)"
//     },
//     {
//         name: "Hammertouch",
//         price: 5000,
//         notes: "-",
//         weeks: 6,
//         st: 75,
//         cost: 100,
//         ingredients: "1 dose Gunpowder ($100)"
//     },
//     {
//         name: "Unnoticeability",
//         price: 5000,
//         notes: "-",
//         weeks: 2,
//         st: 200,
//         cost: 1540,
//         ingredients: "1 dose Telepathy ($1,500); $40 ci"
//     },
//     {
//         name: "Long-Distance Telepathy",
//         price: 20000,
//         notes: "-",
//         weeks: 5,
//         st: 125,
//         cost: 3000,
//         ingredients: "2 doses Telepathy ($1,500)"
//     },
//     {
//         name: "Insubstantiability",
//         price: 21000,
//         notes: "-",
//         weeks: 5,
//         st: 125,
//         cost: 3200,
//         ingredients: "1 dose each: Invisibility ($1,500), Flight ($1,200), Telekinesis ($500)"
//     },
//     {
//         name: "Cleansing",
//         price: 50000,
//         notes: "D",
//         weeks: 10,
//         st: 75,
//         cost: 3770,
//         ingredients: "1 each Universal Antidote, Pyrotic, Simple, Plant, & Insect Poison; 2 Healing"
//     },
//     {
//         name: "Spellsniffer",
//         price: 20000,
//         notes: "D",
//         weeks: 10,
//         st: 125,
//         cost: 1020,
//         ingredients: "1 dose IQ+ potion ($600); $420 ci"
//     },
//     {
//         name: "Little Death",
//         price: 10000,
//         notes: "-",
//         weeks: 5,
//         st: 75,
//         cost: 1200,
//         ingredients: "8 doses Sleep potion ($150)"
//     },
//     {
//         name: "Geas",
//         price: 5000,
//         notes: "-",
//         weeks: 6,
//         st: 100,
//         cost: 150,
//         ingredients: "1 dose Fear potion ($150)"
//     },
//     {
//         name: "Shapeshifting",
//         price: 10000,
//         notes: "D",
//         weeks: 10,
//         st: 175,
//         cost: 35,
//         ingredients: "-"
//     },
//     {
//         name: "Wizard’s Wrath",
//         price: 40000,
//         notes: "F",
//         weeks: 25,
//         st: 375,
//         cost: 0,
//         ingredients: "-"
//     },
//     {
//         name: "Long-Distance Teleport",
//         price: 50000,
//         notes: "F",
//         weeks: 25,
//         st: 500,
//         cost: 65,
//         ingredients: "-"
//     },
//     {
//         name: "Word of Command",
//         price: 20000,
//         notes: "F",
//         weeks: 25,
//         st: 50,
//         cost: 25,
//         ingredients: "-"
//     },
//     {
//         name: "Crystal Ball",
//         price: 50000,
//         notes: "G",
//         weeks: 40,
//         st: 175,
//         cost: 0,
//         ingredients: "(Must start with a $250 crystal sphere)"
//     },
//     {
//         name: "Flaming Weapon",
//         price: 10000,
//         notes: "C",
//         weeks: 5,
//         st: 50,
//         cost: 1270,
//         ingredients: "1 dose Fireproofing ($250); 2 doses Pyrotic ($500); $20 ci"
//     },
//     {
//         name: "Wards",
//         price: 6000,
//         notes: "-",
//         weeks: 5,
//         st: 250,
//         cost: 125,
//         ingredients: "Each of the five wards must be made from a $125 gem or carving"
//     },
//     {
//         name: "Powerstone (1 point)",
//         price: 1000,
//         notes: "B",
//         weeks: 1,
//         st: 40,
//         cost: 380,
//         ingredients: "2 doses Healing ($150); $80 ci. Must start with a gem worth at least $1,000."
//     },
//     {
//         name: "Powerstone (5 points at once)",
//         price: 5000,
//         notes: "B",
//         weeks: 2,
//         st: 50,
//         cost: 1800,
//         ingredients: "8 doses Healing ($150). Must start with a gem worth at least $1,000."
//     },
//     {
//         name: "Charm (+1)",
//         price: 30000,
//         notes: "D",
//         weeks: 10,
//         st: 245,
//         cost: 1650,
//         ingredients: "1 each ST+, DX+, IQ+"
//     },
//     {
//         name: "Charm (+2)",
//         price: 100000,
//         notes: "F",
//         weeks: 25,
//         st: 225,
//         cost: 2150,
//         ingredients: "1 each ST+, DX+, IQ+, Telekinesis"
//     },
//     {
//         name: "Increase one attribute (+1)",
//         price: 2000,
//         notes: "A",
//         weeks: 3,
//         st: 75,
//         cost: 0,
//         ingredients: "-"
//     },
//     {
//         name: "Magic Fist rod (1 point)",
//         price: 1000,
//         notes: "B",
//         weeks: 1,
//         st: 225,
//         cost: 30,
//         ingredients: "-"
//     },
//     {
//         name: "Fireball rod (1 point)",
//         price: 2000,
//         notes: "B",
//         weeks: 1,
//         st: 225,
//         cost: 1000,
//         ingredients: "2 doses Pyrotic potion ($500)"
//     },
//     {
//         name: "Lightning-bolt rod (1 point)",
//         price: 5000,
//         notes: "B",
//         weeks: 4,
//         st: 250,
//         cost: 190,
//         ingredients: "1 live silver slime ($150); $40 ci"
//     },
//     {
//         name: "Wizards’s Wrath rod (1 point)",
//         price: 10000,
//         notes: "B",
//         weeks: 6,
//         st: 450,
//         cost: 125,
//         ingredients: "-"
//     },
//     {
//         name: "Unicorn Horn",
//         price: 6500,
//         notes: "-",
//         weeks: 2,
//         st: 75,
//         cost: 2520,
//         ingredients: "1 dose Universal Antidote; $20 ci"
//     },
//     {
//         name: "Gate-Key",
//         price: 10000,
//         notes: "-",
//         weeks: 4,
//         st: 170,
//         cost: 1500,
//         ingredients: "1 dose Telepathy potion ($1,500). Must start with $100 silver key."
//     },
//     {
//         name: "Gate-Lock",
//         price: 5000,
//         notes: "-",
//         weeks: 4,
//         st: 75,
//         cost: 500,
//         ingredients: "1 dose Telekinesis potion ($500). Must start with $140 silver lock."
//     },
//     {
//         name: "Gate-Seal",
//         price: 10000,
//         notes: "-",
//         weeks: 4,
//         st: 75,
//         cost: 500,
//         ingredients: "1 dose Telekinesis potion ($500). Must start with $100 silver seal."
//     },
//     {
//         name: "Bound Small Demon",
//         price: 20000,
//         notes: "E",
//         weeks: 18,
//         st: 200,
//         cost: 0,
//         ingredients: "Requires one large ($1,000+) gem or statue. Wizard must have IQ 24+."
//     },
//     {
//         name: "Amulet of Skepticism",
//         price: 4000,
//         notes: "-",
//         weeks: 5,
//         st: 100,
//         cost: 55,
//         ingredients: "1 well-rotted zombie’s eye ($30); $25 ci"
//     },
//     {
//         name: "Hand of Glory",
//         price: 4000,
//         notes: "-",
//         weeks: 4,
//         st: 75,
//         cost: 35,
//         ingredients: "$35 ci. Must start with hand ($1,000)."
//     },
//     {
//         name: "Lens of Translation, for each original language",
//         price: 6000,
//         notes: "B",
//         weeks: 6,
//         st: 200,
//         cost: 110,
//         ingredients: "$110 ci"
//     },
//     {
//         name: "Mirror of Remote Viewing",
//         price: 10000,
//         notes: "C",
//         weeks: 10,
//         st: 300,
//         cost: 100,
//         ingredients: "1 large ($1,000+) mirror"
//     },
//     {
//         name: "Ring of Strength",
//         price: 8000,
//         notes: "C",
//         weeks: 4,
//         st: 200,
//         cost: 100,
//         ingredients: "$100 ci; 1 dose ST+ potion ($100)"
//     },
//     {
//         name: "Boots of Water-Walking",
//         price: 10000,
//         notes: "C",
//         weeks: 5,
//         st: 300,
//         cost: 400,
//         ingredients: "1 dose Telekinesis potion ($500)"
//     },
//     {
//         name: "Flying Carpet",
//         price: 20000,
//         notes: "C",
//         weeks: 12,
//         st: 400,
//         cost: 600,
//         ingredients: "$600 ci; 1 dose Flight potion ($1,200)"
//     },
//     {
//         name: "Invisibility Cloak",
//         price: 5000,
//         notes: "C",
//         weeks: 8,
//         st: 250,
//         cost: 350,
//         ingredients: "1 dose Invisibility potion ($1,500)"
//     },
//     {
//         name: "Elixir of Health",
//         price: 3000,
//         notes: "A",
//         weeks: 1,
//         st: 50,
//         cost: 75,
//         ingredients: "1 dose Healing potion ($150); $25 ci"
//     },
//     {
//         name: "Potion of Strength",
//         price: 2000,
//         notes: "A",
//         weeks: 1,
//         st: 40,
//         cost: 60,
//         ingredients: "1 dose ST+ potion ($100)"
//     },
//     {
//         name: "Potion of Speed",
//         price: 5000,
//         notes: "A",
//         weeks: 1,
//         st: 60,
//         cost: 90,
//         ingredients: "1 dose DX+ potion ($80)"
//     },
//     {
//         name: "Adding 1 language to lens",
//         price: 8000,
//         notes: "B",
//         weeks: 6,
//         st: 350,
//         cost: 10,
//         ingredients: "-"
//     },
//     {
//         name: "Zombie Ring",
//         price: 3000,
//         notes: "",
//         weeks: 4,
//         st: 100,
//         cost: 10,
//         ingredients: "-"
//     },
//     {
//         name: "Proxy",
//         price: "cannot be bought",
//         notes: "",
//         weeks: 20,
//         st: 25,
//         cost: 1500,
//         ingredients: "1 dose Telepathy potion ($1,500)"
//     },
//     {
//         name: "Weapon/Armor Enchantment (+1)",
//         price: 1000,
//         notes: "A",
//         weeks: 2,
//         st: 75,
//         cost: 40,
//         ingredients: "-"
//     }
//   ];

//
// const magicItems = [
//   {
//     name: "Magic Fist",
//     price: 2000,
//     weeksToMake: 3,
//     STPerDay: 35,
//     costPerWeekOfIngredients: 0,
//     ingredients: "-"
//   },
//   {
//     name: "Blur",
//     price: 3000,
//     weeksToMake: 5,
//     STPerDay: 75,
//     costPerWeekOfIngredients: 15,
//     ingredients: "-"
//   },
//   {
//     name: "Slow Movement",
//     price: 500,
//     weeksToMake: 1,
//     STPerDay: 15,
//     costPerWeekOfIngredients: 40,
//     ingredients: "-"
//   },
//   {
//     name: "Drop Weapon",
//     price: 500,
//     weeksToMake: 1,
//     STPerDay: 20,
//     costPerWeekOfIngredients: 40,
//     ingredients: "-"
//   },
//   {
//     name: "Detect Magic",
//     price: 5000,
//     weeksToMake: 3,
//     STPerDay: 100,
//     costPerWeekOfIngredients: 1013,
//     ingredients: "2 doses IQ potion ($500); $13 ci"
//   },
//   {
//     name: "Light",
//     price: 500,
//     weeksToMake: 1,
//     STPerDay: 10,
//     costPerWeekOfIngredients: 40,
//     ingredients: "-"
//   },
//   {
//     name: "Clumsiness (-1)",
//     price: 1000,
//     notes: "A",
//     weeksToMake: 1,
//     STPerDay: 70,
//     costPerWeekOfIngredients: 430,
//     ingredients: "5 doses DX potion ($80); $13 ci"
//   },
//   {
//     name: "Confusion (-1)",
//     price: 1000,
//     notes: "A",
//     weeksToMake: 1,
//     STPerDay: 70,
//     costPerWeekOfIngredients: 430,
//     ingredients: "2 doses IQ potion ($200); $13 ci"
//   },
//   {
//     name: "Weakness (-1)",
//     price: 1000,
//     notes: "A",
//     weeksToMake: 1,
//     STPerDay: 70,
//     costPerWeekOfIngredients: 430,
//     ingredients: "4 doses ST potion ($100); $13 ci"
//   },
//   {
//     name: "Avert",
//     price: 2000,
//     weeksToMake: 3,
//     STPerDay: 25,
//     costPerWeekOfIngredients: 190,
//     ingredients: "1 dose Fear potion ($150); $40 ci"
//   },
//   {
//     name: "Detect Life",
//     price: 4000,
//     weeksToMake: 4,
//     STPerDay: 50,
//     costPerWeekOfIngredients: 450,
//     ingredients: "1 dose each Smell Booster ($200), Acute Hearing ($250)"
//   },
//   {
//     name: "Darkness (1 hex)",
//     price: 2000,
//     notes: "A",
//     weeksToMake: 4,
//     STPerDay: 20,
//     costPerWeekOfIngredients: 25,
//     ingredients: "-"
//   },
//   {
//     name: "Dark Vision",
//     price: 3000,
//     weeksToMake: 3,
//     STPerDay: 25,
//     costPerWeekOfIngredients: 515,
//     ingredients: "1 dose Dark Vision potion ($500); $15 ci"
//   },
//   {
//     name: "Detect Enemies",
//     price: 6000,
//     weeksToMake: 2,
//     STPerDay: 50,
//     costPerWeekOfIngredients: 2425,
//     ingredients: "2 doses Smell Booster ($200); 2 doses Acute Hearing ($250); 1 dose Telepathy ($1,500); $25 ci"
//   },
//   {
//     name: "Lock",
//     price: 500,
//     weeksToMake: 1,
//     STPerDay: 15,
//     costPerWeekOfIngredients: 40,
//     ingredients: "-"
//   },
//   {
//     name: "Knock",
//     price: 1000,
//     weeksToMake: 2,
//     STPerDay: 15,
//     costPerWeekOfIngredients: 40,
//     ingredients: "-"
//   },
//   {
//     name: "Trip",
//     price: 1000,
//     weeksToMake: 2,
//     STPerDay: 20,
//     costPerWeekOfIngredients: 38,
//     ingredients: "-"
//   },
//   {
//     name: "Speed Movement",
//     price: 1500,
//     weeksToMake: 1,
//     STPerDay: 25,
//     costPerWeekOfIngredients: 1020,
//     ingredients: "1 dose Speed Movt. potion ($1,000); $20 ci"
//   },
//   {
//     name: "Dazzle Gem",
//     price: 250,
//     notes: "1/2 10",
//     weeksToMake: 1,
//     STPerDay: 10,
//     costPerWeekOfIngredients: 20,
//     ingredients: "1 $20 gem; takes only 3 days"
//   },
//   {
//     name: "Shock Shield",
//     price: 5000,
//     weeksToMake: 6,
//     STPerDay: 125,
//     costPerWeekOfIngredients: 100,
//     ingredients: "1 dose gunpowder ($100)"
//   },
//   {
//     name: "Shadow",
//     price: 1000,
//     weeksToMake: 1,
//     STPerDay: 175,
//     costPerWeekOfIngredients: 230,
//     ingredients: "1 dose Sleep potion ($150); $80 ci"
//   },
//   {
//     name: "Far Vision",
//     price: 2500,
//     weeksToMake: 4,
//     STPerDay: 70,
//     costPerWeekOfIngredients: 45,
//     ingredients: "2 fresh hawk's eyes ($20); $5 ci"
//   },
//   {
//     name: "Sleep",
//     price: 1000,
//     weeksToMake: 1,
//     STPerDay: 125,
//     costPerWeekOfIngredients: 330,
//     ingredients: "2 doses Sleep potion ($150); $30 ci"
//   },
//   {
//     name: "Reverse Missiles",
//     price: 5000,
//     weeksToMake: 6,
//     STPerDay: 175,
//     costPerWeekOfIngredients: 15,
//     ingredients: "-"
//   },
//   {
//     name: "Rope",
//     price: 1000,
//     weeksToMake: 1,
//     STPerDay: 50,
//     costPerWeekOfIngredients: 480,
//     ingredients: "6 doses DX potion ($80)"
//   },
//   {
//     name: "Destroy Illusion",
//     price: 2000,
//     weeksToMake: 2,
//     STPerDay: 270,
//     costPerWeekOfIngredients: 25,
//     ingredients: "-"
//   },
//   {
//     name: "Silent Movement",
//     price: 2000,
//     weeksToMake: 4,
//     STPerDay: 25,
//     costPerWeekOfIngredients: 25,
//     ingredients: "-"
//   },
//   {
//     name: "Persuasiveness",
//     price: 12000,
//     weeksToMake: 5,
//     STPerDay: 175,
//     costPerWeekOfIngredients: 1500,
//     ingredients: "1 dose Telepathy ($1,500)"
//   },
//   {
//     name: "Freeze",
//     price: 5000,
//     weeksToMake: 6,
//     STPerDay: 100,
//     costPerWeekOfIngredients: 150,
//     ingredients: "Fresh basilisk brain & eyes ($150)"
//   },
//   {
//     name: "Fireball",
//     price: 5500,
//     weeksToMake: 4,
//     STPerDay: 200,
//     costPerWeekOfIngredients: 500,
//     ingredients: "1 dose Pyrotic potion ($500)"
//   },
//   {
//     name: "Invisibility",
//     price: 6500,
//     weeksToMake: 3,
//     STPerDay: 100,
//     costPerWeekOfIngredients: 1500,
//     ingredients: "1 dose Invisibility potion ($1,500)"
//   },
//   {
//     name: "Mage Sight",
//     price: 6000,
//     weeksToMake: 6,
//     STPerDay: 200,
//     costPerWeekOfIngredients: 120,
//     ingredients: "-"
//   },
//   {
//     name: "Magic Rainstorm",
//     price: 4500,
//     weeksToMake: 6,
//     STPerDay: 125,
//     costPerWeekOfIngredients: 35,
//     ingredients: "-"
//   },
//   {
//     name: "Eyes-Behind",
//     price: 3000,
//     weeksToMake: 3,
//     STPerDay: 50,
//     costPerWeekOfIngredients: 465,
//     ingredients: "1 dose Acute Hearing ($250); one pickled dragonet ($100); $15 ci"
//   },
//   {
//     name: "Flight",
//     price: 10000,
//     weeksToMake: 5,
//     STPerDay: 125,
//     costPerWeekOfIngredients: 1235,
//     ingredients: "1 dose Flight ($1,200); $35 ci"
//   },
//   {
//     name: "Stone Flesh",
//     price: 4000,
//     weeksToMake: 6,
//     STPerDay: 175,
//     costPerWeekOfIngredients: 25,
//     ingredients: "-"
//   },
//   {
//     name: "Slippery or Sticky Floor",
//     price: 2000,
//     notes: "C",
//     weeksToMake: 4,
//     STPerDay: 20,
//     costPerWeekOfIngredients: 26,
//     ingredients: "-"
//   },
//   {
//     name: "Curse (-1 to all rolls)",
//     price: 3000,
//     notes: "A",
//     weeksToMake: 4,
//     STPerDay: 25,
//     costPerWeekOfIngredients: 380,
//     ingredients: "1 dose each ST-, DX-, IQ- potions"
//   },
//   {
//     name: "Fireproofing",
//     price: 5000,
//     weeksToMake: 5,
//     STPerDay: 25,
//     costPerWeekOfIngredients: 500,
//     ingredients: "2 doses Fireproofing potion ($250)"
//   },
//   {
//     name: "Telekinesis",
//     price: 5000,
//     weeksToMake: 4,
//     STPerDay: 120,
//     costPerWeekOfIngredients: 540,
//     ingredients: "1 dose Telekinesis ($500); $40 ci"
//   },
//   {
//     name: "Lightning",
//     price: 15000,
//     notes: "D",
//     weeksToMake: 10,
//     STPerDay: 375,
//     costPerWeekOfIngredients: 150,
//     ingredients: "1 Silver Slime, live ($150)"
//   },
//   {
//     name: "Dispel Illusions",
//     price: 5000,
//     weeksToMake: 6,
//     STPerDay: 175,
//     costPerWeekOfIngredients: 25,
//     ingredients: "-"
//   },
//   {
//     name: "Spell Shield",
//     price: 6000,
//     weeksToMake: 6,
//     STPerDay: 225,
//     costPerWeekOfIngredients: 25,
//     ingredients: "-"
//   },
//   {
//     name: "Telepathy",
//     price: 20000,
//     weeksToMake: 5,
//     STPerDay: 100,
//     costPerWeekOfIngredients: 3600,
//     ingredients: "2 doses Telepathy ($1,500); one dose IQ+ potion ($600)"
//   },
//   {
//     name: "Glamour",
//     price: 4000,
//     weeksToMake: 5,
//     STPerDay: 160,
//     costPerWeekOfIngredients: 25,
//     ingredients: "-"
//   },
//   {
//     name: "Fresh Air",
//     price: 3000,
//     weeksToMake: 3,
//     STPerDay: 25,
//     costPerWeekOfIngredients: 515,
//     ingredients: "1 dose Water Breathing potion ($500); $15 ci"
//   },
//   {
//     name: "Gems: Summon Wolf or Myrmidon",
//     price: 500,
//     notes: "C",
//     weeksToMake: 1,
//     STPerDay: 25,
//     costPerWeekOfIngredients: 0,
//     ingredients: "(Must start with a $40 gem)"
//   },
//   {
//     name: "Summon Bear/Gargoyle",
//     price: 1000,
//     notes: "C",
//     weeksToMake: 2,
//     STPerDay: 25,
//     costPerWeekOfIngredients: 0,
//     ingredients: "(Must start with an $80 gem)"
//   },
//   {
//     name: "Summon Giant/Small Dragon",
//     price: 2000,
//     notes: "C",
//     weeksToMake: 3,
//     STPerDay: 75,
//     costPerWeekOfIngredients: 0,
//     ingredients: "(Must start with a $285 gem)"
//   },
//   {
//     name: "Summon 7-Hex Dragon",
//     price: 4000,
//     notes: "C",
//     weeksToMake: 4,
//     STPerDay: 200,
//     costPerWeekOfIngredients: 0,
//     ingredients: "(Must start with a $600 gem)"
//   },
//   {
//     name: "Quiver of Replenishment",
//     price: 1000,
//     weeksToMake: 2,
//     STPerDay: 20,
//     costPerWeekOfIngredients: 35,
//     ingredients: "-"
//   },
//   {
//     name: "Quiver of Replenishment with silver arrow",
//     price: 5000,
//     weeksToMake: 6,
//     STPerDay: 150,
//     costPerWeekOfIngredients: 60,
//     ingredients: "(must start with silver arrow)"
//   },
//   {
//     name: "Amulet vs. Drunkenness",
//     price: 1500,
//     weeksToMake: 2,
//     STPerDay: 150,
//     costPerWeekOfIngredients: 30,
//     ingredients: "1 good bottle of wine ($30)"
//   },
//   {
//     name: "Amulet vs. Drowning",
//     price: 2000,
//     weeksToMake: 1,
//     STPerDay: 210,
//     costPerWeekOfIngredients: 1100,
//     ingredients: "1 dose each DX+ potion ($600) and Water Breathing ($500)"
//   },
//   {
//     name: "Amulet vs. Creature",
//     price: 3000,
//     weeksToMake: 3,
//     STPerDay: 125,
//     costPerWeekOfIngredients: 300,
//     ingredients: "2 doses Fear potion ($150)"
//   },
//   {
//     name: "Amulet vs. one elemental",
//     price: 3000,
//     weeksToMake: 3,
//     STPerDay: 125,
//     costPerWeekOfIngredients: 300,
//     ingredients: "2 doses Fear potion ($150)"
//   },
//   {
//     name: "Amulet vs. all elementals",
//     price: 5000,
//     weeksToMake: 4,
//     STPerDay: 175,
//     costPerWeekOfIngredients: 480,
//     ingredients: "3 doses Fear potion ($150); $30 ci"
//   },
//   {
//     name: "Amulet vs. Disease",
//     price: 10000,
//     weeksToMake: 5,
//     STPerDay: 25,
//     costPerWeekOfIngredients: 1420,
//     ingredients: "3 doses Healing ($150); 1 dose each Simple Poison ($120), Plant Poison ($200), Insect Poison ($150) and Pyrotic ($500)"
//   },
//   {
//     name: "Pentagram (per hex)",
//     price: 2000,
//     notes: "B",
//     weeksToMake: 3,
//     STPerDay: 125,
//     costPerWeekOfIngredients: 25,
//     ingredients: "-"
//   },
//   {
//     name: "Maintain Illusion",
//     price: 3000,
//     notes: "B",
//     weeksToMake: 5,
//     STPerDay: 75,
//     costPerWeekOfIngredients: 25,
//     ingredients: "-"
//   },
//   {
//     name: "Maintain Image",
//     price: 1400,
//     notes: "B",
//     weeksToMake: 3,
//     STPerDay: 20,
//     costPerWeekOfIngredients: 25,
//     ingredients: "-"
//   },
//   {
//     name: "Ring (etc.) of Control",
//     price: 10000,
//     notes: "E",
//     weeksToMake: 18,
//     STPerDay: 250,
//     costPerWeekOfIngredients: 25,
//     ingredients: "-"
//   },
//   {
//     name: "2-hex Magic Carpet",
//     price: 10000,
//     weeksToMake: 5,
//     STPerDay: 75,
//     costPerWeekOfIngredients: 1200,
//     ingredients: "1 dose Flight potion ($1,200); must start with a $500 carpet"
//   },
//   {
//     name: "4-hex Magic Carpet",
//     price: 20000,
//     weeksToMake: null,
//     STPerDay: null,
//     costPerWeekOfIngredients: null,
//     ingredients: "[Takes two wizards, casting the above spell on a $1,000 carpet]"
//   },
//   {
//     name: "7-hex Magic Carpet",
//     price: 50000,
//     weeksToMake: null,
//     STPerDay: null,
//     costPerWeekOfIngredients: null,
//     ingredients: "[Takes five wizards, casting the above spell on a $2,000 carpet]"
//   },
//   {
//     name: "Serpent Torc",
//     price: 2000,
//     weeksToMake: 3,
//     STPerDay: 75,
//     costPerWeekOfIngredients: 95,
//     ingredients: "$95 ci; starts with $55 worth of silver beads and one snake’s backbone"
//   },
//   {
//     name: "For restringing broken torc",
//     price: 500,
//     weeksToMake: 1,
//     STPerDay: 20,
//     costPerWeekOfIngredients: 40,
//     ingredients: "$40 ci; starts with one snake’s backbone"
//   },
//   {
//     name: "Limiting Spell",
//     price: 1000,
//     weeksToMake: 2,
//     STPerDay: 25,
//     costPerWeekOfIngredients: 35,
//     ingredients: "[Cost is the same whenever spell is used]"
//   },
//   {
//     name: "Expunge",
//     price: 2000,
//     weeksToMake: 3,
//     STPerDay: 125,
//     costPerWeekOfIngredients: null,
//     ingredients: "[Cost is the same whenever spell is used]"
//   },
//   {
//     name: "Iron Flesh",
//     price: 16000,
//     notes: "D",
//     weeksToMake: 10,
//     STPerDay: 250,
//     costPerWeekOfIngredients: 366,
//     ingredientsRequired: "1/20 of the hide of a 14-hex dragon ($1,600)"
//   },
//   {
//     name: "Teleport",
//     price: 15000,
//     notes: "D",
//     weeksToMake: 10,
//     STPerDay: 400,
//     costPerWeekOfIngredients: 25,
//     ingredientsRequired: "-"
//   },
//   {
//     name: "Giant Rope",
//     price: 2000,
//     notes: 1,
//     weeksToMake: 1,
//     STPerDay: 275,
//     costPerWeekOfIngredients: 960,
//     ingredientsRequired: "12 doses DX- potion ($80)"
//   },
//   {
//     name: "Astral Projection",
//     price: 20000,
//     notes: 0,
//     weeksToMake: 6,
//     STPerDay: 175,
//     costPerWeekOfIngredients: 2200,
//     ingredientsRequired: "1 dose Flight potion ($1,200); two doses Telekinesis potion ($500)"
//   },
//   {
//     name: "Hammertouch",
//     price: 5000,
//     notes: 6,
//     weeksToMake: 75,
//     STPerDay: 100,
//     costPerWeekOfIngredients: 0,
//     ingredientsRequired: "1 dose Gunpowder ($100)"
//   },
//   {
//     name: "Unnoticeability",
//     price: 5000,
//     notes: 2,
//     weeksToMake: 200,
//     STPerDay: 1540,
//     costPerWeekOfIngredients: 1,
//     ingredientsRequired: "1 dose Telepathy ($1,500); $40 ci"
//   },
//   {
//     name: "Long-Distance Telepathy",
//     price: 15000,
//     notes: 5,
//     weeksToMake: 125,
//     STPerDay: 3000,
//     costPerWeekOfIngredients: 2,
//     ingredientsRequired: "2 doses Telepathy ($1,500)"
//   },
//   {
//     name: "Insubstantiality",
//     price: 21000,
//     notes: 5,
//     weeksToMake: 125,
//     STPerDay: 3200,
//     costPerWeekOfIngredients: 3,
//     ingredientsRequired: "1 dose each: Invisibility ($1,500), Flight ($1,200), Telekinesis ($500)"
//   },
//   {
//     name: "Cleansing",
//     price: 50000,
//     notes: "D",
//     weeksToMake: 10,
//     STPerDay: 75,
//     costPerWeekOfIngredients: 3770,
//     ingredientsRequired: "1 each Universal Antidote, Pyrotic, Simple, Plant, & Insect Poison; 2 Healing"
//   },
//   {
//     name: "Spellsniffer",
//     price: 20000,
//     notes: "D",
//     weeksToMake: 10,
//     STPerDay: 125,
//     costPerWeekOfIngredients: 1020,
//     ingredientsRequired: "1 dose IQ+ potion ($600); $420 ci"
//   },
//   {
//     name: "Little Death",
//     price: 10000,
//     notes: 5,
//     weeksToMake: 75,
//     STPerDay: 1200,
//     costPerWeekOfIngredients: 8,
//     ingredientsRequired: "8 doses Sleep potion ($150)"
//   },
//   {
//     name: "Geas",
//     price: 5000,
//     notes: 6,
//     weeksToMake: 100,
//     STPerDay: 150,
//     costPerWeekOfIngredients: 1,
//     ingredientsRequired: "1 dose Fear potion ($150)"
//   },
//   {
//     name: "Shapeshifting",
//     price: 10000,
//     notes: "D",
//     weeksToMake: 10,
//     STPerDay: 175,
//     costPerWeekOfIngredients: 35,
//     ingredientsRequired: "-"
//   },
//   {
//     name: "Wizard’s Wrath",
//     price: 40000,
//     notes: "F",
//     weeksToMake: 25,
//     STPerDay: 375,
//     costPerWeekOfIngredients: 0,
//     ingredientsRequired: "-"
//   },
//   {
//     name: "Long-Distance Teleport",
//     price: 50000,
//     notes: "F",
//     weeksToMake: 25,
//     STPerDay: 500,
//     costPerWeekOfIngredients: 65,
//     ingredientsRequired: "-"
//   },
//   {
//     name: "Word of Command",
//     price: 20000,
//     notes: "F",
//     weeksToMake: 25,
//     STPerDay: 50,
//     costPerWeekOfIngredients: 25,
//     ingredientsRequired: "-"
//   },
//   {
//     name: "Crystal Ball",
//     price: 50000,
//     notes: "G",
//     weeksToMake: 40,
//     STPerDay: 175,
//     costPerWeekOfIngredients: 0,
//     ingredientsRequired: "(Must start with a $250 crystal sphere)"
//   },
//   {
//     name: "Flaming Weapon",
//     price: 10000,
//     notes: "C",
//     weeksToMake: 5,
//     STPerDay: 50,
//     costPerWeekOfIngredients: 1270,
//     ingredientsRequired: "1 dose Fireproofing ($250); 2 doses Pyrotic ($500); $20 ci"
//   },
//   {
//     name: "Flaming Missile Weapon",
//     price: 6000,
//     notes: "C",
//     weeksToMake: 5,
//     STPerDay: 250,
//     costPerWeekOfIngredients: 125,
//     ingredientsRequired: "Each of the five wards must be made from a $125 gem or carving"
//   },
//   {
//     name: "Wards",
//     price: 1000,
//     notes: "B",
//     weeksToMake: 1,
//     STPerDay: 40,
//     costPerWeekOfIngredients: 380,
//     ingredientsRequired: "2 doses Healing ($150); $80 ci. Must start with a gem worth at least $1,000."
//   },
//   {
//     name: "Powerstone",
//     price: 5000,
//     notes: "B",
//     weeksToMake: 2,
//     STPerDay: 50,
//     costPerWeekOfIngredients: 1800,
//     ingredientsRequired: "8 doses Healing ($150). Must start with a gem worth at least $1,000."
//   },
//   {
//     name: "Charm (+1)",
//     price: 30000,
//     notes: "D",
//     weeksToMake: 10,
//     STPerDay: 245,
//     costPerWeekOfIngredients: 1650,
//     ingredientsRequired: "1 each ST+, DX+, IQ+"
//   },
//   {
//     name: "Charm (+2)",
//     price: 100000,
//     notes: "F",
//     weeksToMake: 25,
//     STPerDay: 225,
//     costPerWeekOfIngredients: 2150,
//     ingredientsRequired: "1 each ST+, DX+, IQ+, Telekinesis"
//   },
//   {
//     name: "Increase One Attribute (+1)",
//     price: 2000,
//     notes: "A",
//     weeksToMake: 3,
//     STPerDay: 75,
//     costPerWeekOfIngredients: 0,
//     ingredientsRequired: "-"
//   },
//   {
//     name: "Magic Fist Rod (1 point)",
//     price: 1000,
//     notes: "B",
//     weeksToMake: 1,
//     STPerDay: 225,
//     costPerWeekOfIngredients: 30,
//     ingredientsRequired: "-"
//   },
//   {
//     name: "Fireball Rod (1 point)",
//     price: 2000,
//     notes: "B",
//     weeksToMake: 1,
//     STPerDay: 225,
//     costPerWeekOfIngredients: 1000,
//     ingredientsRequired: "2 doses Pyrotic potion ($500)"
//   },
//   {
//     name: "Lightning-bolt Rod (1 point)",
//     price: 5000,
//     notes: "B",
//     weeksToMake: 4,
//     STPerDay: 250,
//     costPerWeekOfIngredients: 190,
//     ingredientsRequired: "1 live silver slime ($150); $40 ci"
//   },
//   {
//     name: "Wizard's Wrath Rod",
//     price: 10000,
//     notes: "B",
//     weeksToMake: 6,
//     STPerDay: 450,
//     costPerWeekOfIngredients: 125,
//     ingredientsRequired: "-"
//   },
//   {
//     name: "Unicorn Horn",
//     price: 6500,
//     notes: 2,
//     weeksToMake: 75,
//     STPerDay: 2520,
//     costPerWeekOfIngredients: 1,
//     ingredientsRequired: "1 dose Universal Antidote; $20 ci"
//   },
//   {
//     name: "Gate-Key",
//     price: 10000,
//     notes: 4,
//     weeksToMake: 170,
//     STPerDay: 1500,
//     costPerWeekOfIngredients: 1,
//     ingredientsRequired: "1 dose Telepathy potion ($1,500). Must start with $100 silver key."
//   },
//   {
//     name: "Gate-Lock",
//     price: 5000,
//     notes: 4,
//     weeksToMake: 75,
//     STPerDay: 500,
//     costPerWeekOfIngredients: 0,
//     ingredientsRequired: "1 dose Telekinesis potion ($500). Must start with $140 silver lock."
//   },
//   {
//     name: "Bound Small Demon",
//     price: 20000,
//     weeksToMake: 18,
//     STPerDay: 200,
//     costPerWeekOfIngredients: 0,
//     ingredients: "Requires one large ($1,000+) gem or statue. Wizard must have IQ 24+."
//   },
//   {
//     name: "Amulet of Skepticism",
//     price: 4000,
//     weeksToMake: 5,
//     STPerDay: 100,
//     costPerWeekOfIngredients: 55,
//     ingredients: "1 well-rotted zombie’s eye ($30); $25 ci"
//   },
//   {
//     name: "Hand of Glory",
//     price: 4000,
//     weeksToMake: 4,
//     STPerDay: 75,
//     costPerWeekOfIngredients: 35,
//     ingredients: "$35 ci. Must start with hand ($1,000)."
//   },
//   {
//     name: "Lens of Translation, for each original language",
//     price: 6000,
//     weeksToMake: 6,
//     STPerDay: 200,
//     costPerWeekOfIngredients: 10,
//     ingredients: "Must start with crystal lens ($200)"
//   },
//   {
//     name: "Adding 1 language to lens",
//     price: 8000,
//     weeksToMake: 6,
//     STPerDay: 350,
//     costPerWeekOfIngredients: 10,
//     ingredients: "-"
//   },
//   {
//     name: "Zombie Ring",
//     price: 3000,
//     weeksToMake: 4,
//     STPerDay: 100,
//     costPerWeekOfIngredients: 10,
//     ingredients: "-"
//   },
//   {
//     name: "Proxy",
//     price: "cannot be bought",
//     weeksToMake: 20,
//     STPerDay: 25,
//     costPerWeekOfIngredients: 1500,
//     ingredients: "1 dose Telepathy potion ($1,500)"
//   },
//   {
//     name: "Weapon/Armor Enchantment (+1)",
//     price: 1000,
//     weeksToMake: 2,
//     STPerDay: 75,
//     costPerWeekOfIngredients: 40,
//     ingredients: "-"
//   }
// ];
