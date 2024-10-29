

const magicItems = [
  {
    name: "Magic Fist",
    price: 2000,
    weeksToMake: 3,
    STPerDay: 35,
    costPerWeekOfIngredients: 0,
    ingredients: "-"
  },
  {
    name: "Blur",
    price: 3000,
    weeksToMake: 5,
    STPerDay: 75,
    costPerWeekOfIngredients: 15,
    ingredients: "-"
  },
  {
    name: "Slow Movement",
    price: 500,
    weeksToMake: 1,
    STPerDay: 15,
    costPerWeekOfIngredients: 40,
    ingredients: "-"
  },
  {
    name: "Drop Weapon",
    price: 500,
    weeksToMake: 1,
    STPerDay: 20,
    costPerWeekOfIngredients: 40,
    ingredients: "-"
  },
  {
    name: "Detect Magic",
    price: 5000,
    weeksToMake: 3,
    STPerDay: 100,
    costPerWeekOfIngredients: 1013,
    ingredients: "2 doses IQ potion ($500); $13 ci"
  },
  {
    name: "Light",
    price: 500,
    weeksToMake: 1,
    STPerDay: 10,
    costPerWeekOfIngredients: 40,
    ingredients: "-"
  },
  {
    name: "Clumsiness (-1)",
    price: 1000,
    notes: "A",
    weeksToMake: 1,
    STPerDay: 70,
    costPerWeekOfIngredients: 430,
    ingredients: "5 doses DX potion ($80); $13 ci"
  },
  {
    name: "Confusion (-1)",
    price: 1000,
    notes: "A",
    weeksToMake: 1,
    STPerDay: 70,
    costPerWeekOfIngredients: 430,
    ingredients: "2 doses IQ potion ($200); $13 ci"
  },
  {
    name: "Weakness (-1)",
    price: 1000,
    notes: "A",
    weeksToMake: 1,
    STPerDay: 70,
    costPerWeekOfIngredients: 430,
    ingredients: "4 doses ST potion ($100); $13 ci"
  },
  {
    name: "Avert",
    price: 2000,
    weeksToMake: 3,
    STPerDay: 25,
    costPerWeekOfIngredients: 190,
    ingredients: "1 dose Fear potion ($150); $40 ci"
  },
  {
    name: "Detect Life",
    price: 4000,
    weeksToMake: 4,
    STPerDay: 50,
    costPerWeekOfIngredients: 450,
    ingredients: "1 dose each Smell Booster ($200), Acute Hearing ($250)"
  },
  {
    name: "Darkness (1 hex)",
    price: 2000,
    notes: "A",
    weeksToMake: 4,
    STPerDay: 20,
    costPerWeekOfIngredients: 25,
    ingredients: "-"
  },
  {
    name: "Dark Vision",
    price: 3000,
    weeksToMake: 3,
    STPerDay: 25,
    costPerWeekOfIngredients: 515,
    ingredients: "1 dose Dark Vision potion ($500); $15 ci"
  },
  {
    name: "Detect Enemies",
    price: 6000,
    weeksToMake: 2,
    STPerDay: 50,
    costPerWeekOfIngredients: 2425,
    ingredients: "2 doses Smell Booster ($200); 2 doses Acute Hearing ($250); 1 dose Telepathy ($1,500); $25 ci"
  },
  {
    name: "Lock",
    price: 500,
    weeksToMake: 1,
    STPerDay: 15,
    costPerWeekOfIngredients: 40,
    ingredients: "-"
  },
  {
    name: "Knock",
    price: 1000,
    weeksToMake: 2,
    STPerDay: 15,
    costPerWeekOfIngredients: 40,
    ingredients: "-"
  },
  {
    name: "Trip",
    price: 1000,
    weeksToMake: 2,
    STPerDay: 20,
    costPerWeekOfIngredients: 38,
    ingredients: "-"
  },
  {
    name: "Speed Movement",
    price: 1500,
    weeksToMake: 1,
    STPerDay: 25,
    costPerWeekOfIngredients: 1020,
    ingredients: "1 dose Speed Movt. potion ($1,000); $20 ci"
  },
  {
    name: "Dazzle Gem",
    price: 250,
    notes: "1/2 10",
    weeksToMake: 1,
    STPerDay: 10,
    costPerWeekOfIngredients: 20,
    ingredients: "1 $20 gem; takes only 3 days"
  },
  {
    name: "Shock Shield",
    price: 5000,
    weeksToMake: 6,
    STPerDay: 125,
    costPerWeekOfIngredients: 100,
    ingredients: "1 dose gunpowder ($100)"
  },
  {
    name: "Shadow",
    price: 1000,
    weeksToMake: 1,
    STPerDay: 175,
    costPerWeekOfIngredients: 230,
    ingredients: "1 dose Sleep potion ($150); $80 ci"
  },
  {
    name: "Far Vision",
    price: 2500,
    weeksToMake: 4,
    STPerDay: 70,
    costPerWeekOfIngredients: 45,
    ingredients: "2 fresh hawk's eyes ($20); $5 ci"
  },
  {
    name: "Sleep",
    price: 1000,
    weeksToMake: 1,
    STPerDay: 125,
    costPerWeekOfIngredients: 330,
    ingredients: "2 doses Sleep potion ($150); $30 ci"
  },
  {
    name: "Reverse Missiles",
    price: 5000,
    weeksToMake: 6,
    STPerDay: 175,
    costPerWeekOfIngredients: 15,
    ingredients: "-"
  },
  {
    name: "Rope",
    price: 1000,
    weeksToMake: 1,
    STPerDay: 50,
    costPerWeekOfIngredients: 480,
    ingredients: "6 doses DX potion ($80)"
  },
  {
    name: "Destroy Illusion",
    price: 2000,
    weeksToMake: 2,
    STPerDay: 270,
    costPerWeekOfIngredients: 25,
    ingredients: "-"
  },
  {
    name: "Silent Movement",
    price: 2000,
    weeksToMake: 4,
    STPerDay: 25,
    costPerWeekOfIngredients: 25,
    ingredients: "-"
  },
  {
    name: "Persuasiveness",
    price: 12000,
    weeksToMake: 5,
    STPerDay: 175,
    costPerWeekOfIngredients: 1500,
    ingredients: "1 dose Telepathy ($1,500)"
  },
  {
    name: "Freeze",
    price: 5000,
    weeksToMake: 6,
    STPerDay: 100,
    costPerWeekOfIngredients: 150,
    ingredients: "Fresh basilisk brain & eyes ($150)"
  },
  {
    name: "Fireball",
    price: 5500,
    weeksToMake: 4,
    STPerDay: 200,
    costPerWeekOfIngredients: 500,
    ingredients: "1 dose Pyrotic potion ($500)"
  },
  {
    name: "Invisibility",
    price: 6500,
    weeksToMake: 3,
    STPerDay: 100,
    costPerWeekOfIngredients: 1500,
    ingredients: "1 dose Invisibility potion ($1,500)"
  },
  {
    name: "Mage Sight",
    price: 6000,
    weeksToMake: 6,
    STPerDay: 200,
    costPerWeekOfIngredients: 120,
    ingredients: "-"
  },
  {
    name: "Magic Rainstorm",
    price: 4500,
    weeksToMake: 6,
    STPerDay: 125,
    costPerWeekOfIngredients: 35,
    ingredients: "-"
  },
  {
    name: "Eyes-Behind",
    price: 3000,
    weeksToMake: 3,
    STPerDay: 50,
    costPerWeekOfIngredients: 465,
    ingredients: "1 dose Acute Hearing ($250); one pickled dragonet ($100); $15 ci"
  },
  {
    name: "Flight",
    price: 10000,
    weeksToMake: 5,
    STPerDay: 125,
    costPerWeekOfIngredients: 1235,
    ingredients: "1 dose Flight ($1,200); $35 ci"
  },
  {
    name: "Stone Flesh",
    price: 4000,
    weeksToMake: 6,
    STPerDay: 175,
    costPerWeekOfIngredients: 25,
    ingredients: "-"
  },
  {
    name: "Slippery or Sticky Floor",
    price: 2000,
    notes: "C",
    weeksToMake: 4,
    STPerDay: 20,
    costPerWeekOfIngredients: 26,
    ingredients: "-"
  },
  {
    name: "Curse (-1 to all rolls)",
    price: 3000,
    notes: "A",
    weeksToMake: 4,
    STPerDay: 25,
    costPerWeekOfIngredients: 380,
    ingredients: "1 dose each ST-, DX-, IQ- potions"
  },
  {
    name: "Fireproofing",
    price: 5000,
    weeksToMake: 5,
    STPerDay: 25,
    costPerWeekOfIngredients: 500,
    ingredients: "2 doses Fireproofing potion ($250)"
  },
  {
    name: "Telekinesis",
    price: 5000,
    weeksToMake: 4,
    STPerDay: 120,
    costPerWeekOfIngredients: 540,
    ingredients: "1 dose Telekinesis ($500); $40 ci"
  },
  {
    name: "Lightning",
    price: 15000,
    notes: "D",
    weeksToMake: 10,
    STPerDay: 375,
    costPerWeekOfIngredients: 150,
    ingredients: "1 Silver Slime, live ($150)"
  },
  {
    name: "Dispel Illusions",
    price: 5000,
    weeksToMake: 6,
    STPerDay: 175,
    costPerWeekOfIngredients: 25,
    ingredients: "-"
  },
  {
    name: "Spell Shield",
    price: 6000,
    weeksToMake: 6,
    STPerDay: 225,
    costPerWeekOfIngredients: 25,
    ingredients: "-"
  },
  {
    name: "Telepathy",
    price: 20000,
    weeksToMake: 5,
    STPerDay: 100,
    costPerWeekOfIngredients: 3600,
    ingredients: "2 doses Telepathy ($1,500); one dose IQ+ potion ($600)"
  },
  {
    name: "Glamour",
    price: 4000,
    weeksToMake: 5,
    STPerDay: 160,
    costPerWeekOfIngredients: 25,
    ingredients: "-"
  },
  {
    name: "Fresh Air",
    price: 3000,
    weeksToMake: 3,
    STPerDay: 25,
    costPerWeekOfIngredients: 515,
    ingredients: "1 dose Water Breathing potion ($500); $15 ci"
  },
  {
    name: "Gems: Summon Wolf or Myrmidon",
    price: 500,
    notes: "C",
    weeksToMake: 1,
    STPerDay: 25,
    costPerWeekOfIngredients: 0,
    ingredients: "(Must start with a $40 gem)"
  },
  {
    name: "Summon Bear/Gargoyle",
    price: 1000,
    notes: "C",
    weeksToMake: 2,
    STPerDay: 25,
    costPerWeekOfIngredients: 0,
    ingredients: "(Must start with an $80 gem)"
  },
  {
    name: "Summon Giant/Small Dragon",
    price: 2000,
    notes: "C",
    weeksToMake: 3,
    STPerDay: 75,
    costPerWeekOfIngredients: 0,
    ingredients: "(Must start with a $285 gem)"
  },
  {
    name: "Summon 7-Hex Dragon",
    price: 4000,
    notes: "C",
    weeksToMake: 4,
    STPerDay: 200,
    costPerWeekOfIngredients: 0,
    ingredients: "(Must start with a $600 gem)"
  },
  {
    name: "Quiver of Replenishment",
    price: 1000,
    weeksToMake: 2,
    STPerDay: 20,
    costPerWeekOfIngredients: 35,
    ingredients: "-"
  },
  {
    name: "Quiver of Replenishment with silver arrow",
    price: 5000,
    weeksToMake: 6,
    STPerDay: 150,
    costPerWeekOfIngredients: 60,
    ingredients: "(must start with silver arrow)"
  },
  {
    name: "Amulet vs. Drunkenness",
    price: 1500,
    weeksToMake: 2,
    STPerDay: 150,
    costPerWeekOfIngredients: 30,
    ingredients: "1 good bottle of wine ($30)"
  },
  {
    name: "Amulet vs. Drowning",
    price: 2000,
    weeksToMake: 1,
    STPerDay: 210,
    costPerWeekOfIngredients: 1100,
    ingredients: "1 dose each DX+ potion ($600) and Water Breathing ($500)"
  },
  {
    name: "Amulet vs. Creature",
    price: 3000,
    weeksToMake: 3,
    STPerDay: 125,
    costPerWeekOfIngredients: 300,
    ingredients: "2 doses Fear potion ($150)"
  },
  {
    name: "Amulet vs. one elemental",
    price: 3000,
    weeksToMake: 3,
    STPerDay: 125,
    costPerWeekOfIngredients: 300,
    ingredients: "2 doses Fear potion ($150)"
  },
  {
    name: "Amulet vs. all elementals",
    price: 5000,
    weeksToMake: 4,
    STPerDay: 175,
    costPerWeekOfIngredients: 480,
    ingredients: "3 doses Fear potion ($150); $30 ci"
  },
  {
    name: "Amulet vs. Disease",
    price: 10000,
    weeksToMake: 5,
    STPerDay: 25,
    costPerWeekOfIngredients: 1420,
    ingredients: "3 doses Healing ($150); 1 dose each Simple Poison ($120), Plant Poison ($200), Insect Poison ($150) and Pyrotic ($500)"
  },
  {
    name: "Pentagram (per hex)",
    price: 2000,
    notes: "B",
    weeksToMake: 3,
    STPerDay: 125,
    costPerWeekOfIngredients: 25,
    ingredients: "-"
  },
  {
    name: "Maintain Illusion",
    price: 3000,
    notes: "B",
    weeksToMake: 5,
    STPerDay: 75,
    costPerWeekOfIngredients: 25,
    ingredients: "-"
  },
  {
    name: "Maintain Image",
    price: 1400,
    notes: "B",
    weeksToMake: 3,
    STPerDay: 20,
    costPerWeekOfIngredients: 25,
    ingredients: "-"
  },
  {
    name: "Ring (etc.) of Control",
    price: 10000,
    notes: "E",
    weeksToMake: 18,
    STPerDay: 250,
    costPerWeekOfIngredients: 25,
    ingredients: "-"
  },
  {
    name: "2-hex Magic Carpet",
    price: 10000,
    weeksToMake: 5,
    STPerDay: 75,
    costPerWeekOfIngredients: 1200,
    ingredients: "1 dose Flight potion ($1,200); must start with a $500 carpet"
  },
  {
    name: "4-hex Magic Carpet",
    price: 20000,
    weeksToMake: null,
    STPerDay: null,
    costPerWeekOfIngredients: null,
    ingredients: "[Takes two wizards, casting the above spell on a $1,000 carpet]"
  },
  {
    name: "7-hex Magic Carpet",
    price: 50000,
    weeksToMake: null,
    STPerDay: null,
    costPerWeekOfIngredients: null,
    ingredients: "[Takes five wizards, casting the above spell on a $2,000 carpet]"
  },
  {
    name: "Serpent Torc",
    price: 2000,
    weeksToMake: 3,
    STPerDay: 75,
    costPerWeekOfIngredients: 95,
    ingredients: "$95 ci; starts with $55 worth of silver beads and one snake’s backbone"
  },
  {
    name: "For restringing broken torc",
    price: 500,
    weeksToMake: 1,
    STPerDay: 20,
    costPerWeekOfIngredients: 40,
    ingredients: "$40 ci; starts with one snake’s backbone"
  },
  {
    name: "Limiting Spell",
    price: 1000,
    weeksToMake: 2,
    STPerDay: 25,
    costPerWeekOfIngredients: 35,
    ingredients: "[Cost is the same whenever spell is used]"
  },
  {
    name: "Expunge",
    price: 2000,
    weeksToMake: 3,
    STPerDay: 125,
    costPerWeekOfIngredients: null,
    ingredients: "[Cost is the same whenever spell is used]"
  },
  {
    name: "Iron Flesh",
    price: 16000,
    notes: "D",
    weeksToMake: 10,
    STPerDay: 250,
    costPerWeekOfIngredients: 366,
    ingredientsRequired: "1/20 of the hide of a 14-hex dragon ($1,600)"
  },
  {
    name: "Teleport",
    price: 15000,
    notes: "D",
    weeksToMake: 10,
    STPerDay: 400,
    costPerWeekOfIngredients: 25,
    ingredientsRequired: "-"
  },
  {
    name: "Giant Rope",
    price: 2000,
    notes: 1,
    weeksToMake: 1,
    STPerDay: 275,
    costPerWeekOfIngredients: 960,
    ingredientsRequired: "12 doses DX- potion ($80)"
  },
  {
    name: "Astral Projection",
    price: 20000,
    notes: 0,
    weeksToMake: 6,
    STPerDay: 175,
    costPerWeekOfIngredients: 2200,
    ingredientsRequired: "1 dose Flight potion ($1,200); two doses Telekinesis potion ($500)"
  },
  {
    name: "Hammertouch",
    price: 5000,
    notes: 6,
    weeksToMake: 75,
    STPerDay: 100,
    costPerWeekOfIngredients: "-",
    ingredientsRequired: "1 dose Gunpowder ($100)"
  },
  {
    name: "Unnoticeability",
    price: 5000,
    notes: 2,
    weeksToMake: 200,
    STPerDay: 1540,
    costPerWeekOfIngredients: 1,
    ingredientsRequired: "1 dose Telepathy ($1,500); $40 ci"
  },
  {
    name: "Long-Distance Telepathy",
    price: 15000,
    notes: 5,
    weeksToMake: 125,
    STPerDay: 3000,
    costPerWeekOfIngredients: 2,
    ingredientsRequired: "2 doses Telepathy ($1,500)"
  },
  {
    name: "Insubstantiality",
    price: 21000,
    notes: 5,
    weeksToMake: 125,
    STPerDay: 3200,
    costPerWeekOfIngredients: 3,
    ingredientsRequired: "1 dose each: Invisibility ($1,500), Flight ($1,200), Telekinesis ($500)"
  },
  {
    name: "Cleansing",
    price: 50000,
    notes: "D",
    weeksToMake: 10,
    STPerDay: 75,
    costPerWeekOfIngredients: 3770,
    ingredientsRequired: "1 each Universal Antidote, Pyrotic, Simple, Plant, & Insect Poison; 2 Healing"
  },
  {
    name: "Spellsniffer",
    price: 20000,
    notes: "D",
    weeksToMake: 10,
    STPerDay: 125,
    costPerWeekOfIngredients: 1020,
    ingredientsRequired: "1 dose IQ+ potion ($600); $420 ci"
  },
  {
    name: "Little Death",
    price: 10000,
    notes: 5,
    weeksToMake: 75,
    STPerDay: 1200,
    costPerWeekOfIngredients: 8,
    ingredientsRequired: "8 doses Sleep potion ($150)"
  },
  {
    name: "Geas",
    price: 5000,
    notes: 6,
    weeksToMake: 100,
    STPerDay: 150,
    costPerWeekOfIngredients: 1,
    ingredientsRequired: "1 dose Fear potion ($150)"
  },
  {
    name: "Shapeshifting",
    price: 10000,
    notes: "D",
    weeksToMake: 10,
    STPerDay: 175,
    costPerWeekOfIngredients: 35,
    ingredientsRequired: "-"
  },
  {
    name: "Wizard’s Wrath",
    price: 40000,
    notes: "F",
    weeksToMake: 25,
    STPerDay: 375,
    costPerWeekOfIngredients: "-",
    ingredientsRequired: "-"
  },
  {
    name: "Long-Distance Teleport",
    price: 50000,
    notes: "F",
    weeksToMake: 25,
    STPerDay: 500,
    costPerWeekOfIngredients: 65,
    ingredientsRequired: "-"
  },
  {
    name: "Word of Command",
    price: 20000,
    notes: "F",
    weeksToMake: 25,
    STPerDay: 50,
    costPerWeekOfIngredients: 25,
    ingredientsRequired: "-"
  },
  {
    name: "Crystal Ball",
    price: 50000,
    notes: "G",
    weeksToMake: 40,
    STPerDay: 175,
    costPerWeekOfIngredients: "-",
    ingredientsRequired: "(Must start with a $250 crystal sphere)"
  },
  {
    name: "Flaming Weapon",
    price: 10000,
    notes: "C",
    weeksToMake: 5,
    STPerDay: 50,
    costPerWeekOfIngredients: 1270,
    ingredientsRequired: "1 dose Fireproofing ($250); 2 doses Pyrotic ($500); $20 ci"
  },
  {
    name: "Flaming Missile Weapon",
    price: 6000,
    notes: "C",
    weeksToMake: 5,
    STPerDay: 250,
    costPerWeekOfIngredients: 125,
    ingredientsRequired: "Each of the five wards must be made from a $125 gem or carving"
  },
  {
    name: "Wards",
    price: 1000,
    notes: "B",
    weeksToMake: 1,
    STPerDay: 40,
    costPerWeekOfIngredients: 380,
    ingredientsRequired: "2 doses Healing ($150); $80 ci. Must start with a gem worth at least $1,000."
  },
  {
    name: "Powerstone",
    price: 5000,
    notes: "B",
    weeksToMake: 2,
    STPerDay: 50,
    costPerWeekOfIngredients: 1800,
    ingredientsRequired: "8 doses Healing ($150). Must start with a gem worth at least $1,000."
  },
  {
    name: "Charm (+1)",
    price: 30000,
    notes: "D",
    weeksToMake: 10,
    STPerDay: 245,
    costPerWeekOfIngredients: 1650,
    ingredientsRequired: "1 each ST+, DX+, IQ+"
  },
  {
    name: "Charm (+2)",
    price: 100000,
    notes: "F",
    weeksToMake: 25,
    STPerDay: 225,
    costPerWeekOfIngredients: 2150,
    ingredientsRequired: "1 each ST+, DX+, IQ+, Telekinesis"
  },
  {
    name: "Increase One Attribute (+1)",
    price: 2000,
    notes: "A",
    weeksToMake: 3,
    STPerDay: 75,
    costPerWeekOfIngredients: "-",
    ingredientsRequired: "-"
  },
  {
    name: "Magic Fist Rod (1 point)",
    price: 1000,
    notes: "B",
    weeksToMake: 1,
    STPerDay: 225,
    costPerWeekOfIngredients: 30,
    ingredientsRequired: "-"
  },
  {
    name: "Fireball Rod (1 point)",
    price: 2000,
    notes: "B",
    weeksToMake: 1,
    STPerDay: 225,
    costPerWeekOfIngredients: 1000,
    ingredientsRequired: "2 doses Pyrotic potion ($500)"
  },
  {
    name: "Lightning-bolt Rod (1 point)",
    price: 5000,
    notes: "B",
    weeksToMake: 4,
    STPerDay: 250,
    costPerWeekOfIngredients: 190,
    ingredientsRequired: "1 live silver slime ($150); $40 ci"
  },
  {
    name: "Wizard's Wrath Rod",
    price: 10000,
    notes: "B",
    weeksToMake: 6,
    STPerDay: 450,
    costPerWeekOfIngredients: 125,
    ingredientsRequired: "-"
  },
  {
    name: "Unicorn Horn",
    price: 6500,
    notes: 2,
    weeksToMake: 75,
    STPerDay: 2520,
    costPerWeekOfIngredients: 1,
    ingredientsRequired: "1 dose Universal Antidote; $20 ci"
  },
  {
    name: "Gate-Key",
    price: 10000,
    notes: 4,
    weeksToMake: 170,
    STPerDay: 1500,
    costPerWeekOfIngredients: 1,
    ingredientsRequired: "1 dose Telepathy potion ($1,500). Must start with $100 silver key."
  },
  {
    name: "Gate-Lock",
    price: 5000,
    notes: 4,
    weeksToMake: 75,
    STPerDay: 500,
    costPerWeekOfIngredients: "-",
    ingredientsRequired: "1 dose Telekinesis potion ($500). Must start with $140 silver lock."
  },
  {
    name: "Bound Small Demon",
    price: 20000,
    weeksToMake: 18,
    STPerDay: 200,
    costPerWeekOfIngredients: 0,
    ingredients: "Requires one large ($1,000+) gem or statue. Wizard must have IQ 24+."
  },
  {
    name: "Amulet of Skepticism",
    price: 4000,
    weeksToMake: 5,
    STPerDay: 100,
    costPerWeekOfIngredients: 55,
    ingredients: "1 well-rotted zombie’s eye ($30); $25 ci"
  },
  {
    name: "Hand of Glory",
    price: 4000,
    weeksToMake: 4,
    STPerDay: 75,
    costPerWeekOfIngredients: 35,
    ingredients: "$35 ci. Must start with hand ($1,000)."
  },
  {
    name: "Lens of Translation, for each original language",
    price: 6000,
    weeksToMake: 6,
    STPerDay: 200,
    costPerWeekOfIngredients: 10,
    ingredients: "Must start with crystal lens ($200)"
  },
  {
    name: "Adding 1 language to lens",
    price: 8000,
    weeksToMake: 6,
    STPerDay: 350,
    costPerWeekOfIngredients: 10,
    ingredients: "-"
  },
  {
    name: "Zombie Ring",
    price: 3000,
    weeksToMake: 4,
    STPerDay: 100,
    costPerWeekOfIngredients: 10,
    ingredients: "-"
  },
  {
    name: "Proxy",
    price: "cannot be bought",
    weeksToMake: 20,
    STPerDay: 25,
    costPerWeekOfIngredients: 1500,
    ingredients: "1 dose Telepathy potion ($1,500)"
  },
  {
    name: "Weapon/Armor Enchantment (+1)",
    price: 1000,
    weeksToMake: 2,
    STPerDay: 75,
    costPerWeekOfIngredients: 40,
    ingredients: "-"
  }
];
