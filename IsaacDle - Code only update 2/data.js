let Items = []


var rebirthgame = [
ID1 = {
    Name: "The Sad Onion",
    Description: "Tears up",
    Buff: ["+0.7 Tears up"],
    ItemPool: ["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_The_Sad_Onion_Icon.png"
},
ID2 = {
    Name: "The Inner Eye",
    Description: "Triple shot",
    buff: ["Tears now shoot three at a time (Triple Shot)", "Tears Down significantly"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_The_Inner_Eye_Icon.png"
},
ID3 = {
    Name: "Spoon Bender",
    Description: "Homing shots",
    buff: ["Gives Isaac's tears a homing effect"],
    ItemPool: ["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_Spoon_Bender_Icon.png" 
},
ID4 = {
    Name: "Cricket's Head",
    Description: "DMG up",
    buff: ["+0.5 Damage Up", "x1.5 times Damage Multiplier"],
    ItemPool: ["Item Room"],
    Quality:4,
    Image: "sprites/Collectible_Cricket's_Head_Icon.png", 
},
ID5 = {
    Name: "My Reflection",
    Description: "Boomerang tears",
    buff: ["Gives tears a boomerang effect", "+1.5 Damage Up", "+0.6 Shot Speed Up", "-1 Luck Down, Range up"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_My_Reflection_Icon.png"
},
ID6 = {
    Name: "Number One",
    Description: "Tears Up",
    buff: ["Gives you a very high tear rate in exchange for a big range", "+1.5 Tears Up", "-2.5 Range Down"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Number_One_Icon.png"
},
ID7 = {
    Name: "Blood Of The Martyr",
    Description: "DMG up",
    buff: ["+1 Damage Up", "x1.5 times Damage Multiplayer if you also have Book of Belial"],
    ItemPool: ["Item Room","Angel Room"],
    Quality:3,
    Image: "sprites/Collectible_Blood_Of_The_Martyr_Icon.png"
},
ID8 = {
    Name: "Brother Bobby",
    Description: "Friends 'till the end",
    buff: ["A familiar which follows Isaac and shoots normal tears which do 3.5 damage", "1/3 Conjoined transformation"],
    ItemPool: ["Item Room","Devil Room"],
    Quality:1,
    Image: "sprites/Collectible_Brother_Bobby_Icon.png"
},
ID9 = {
    Name: "Skatole",
    Description:"Fly love",
    buff: ["A lot of fly enemies are no longer aggressive towards Isaac", "1/3 Beelzebub transformation", "1/3 Oh Crap transformation"],
    ItemPool: ["Arcade Shell game only"],
    Quality:0,
    Image: "sprites/Collectible_Skatole_Icon.png"
},
ID10 = {
    Name: "Halo of Flies",
    Description: "Projectile protection",
    buff: ["Gives Isaac 2 orbital flies which block enemy shots", "1/3 Lord of the Flies transformation", "1/3 Beelzebub transformation"],
    ItemPool:["Item Room","Key Beggar"],
    Quality:2,
    Image: "sprites/Collectible_Halo_Of_Flies_Icon.png"
},
ID11 = {
    Name: "1UP!",
    Description:"Extra life",
    buff: ["Gives the player an extra life, Isaac respawns with the same amount of red heart containers at full health, Resurrection takes place before all other items which give you an extra life"],
    ItemPool:["Secret Room"],
    Quality:2,
    Image: "sprites/Collectible_1up!_Icon.png"
},
ID12 = {
    Name: "Magic Mushroom",
    Description: "All stats up!",
    buff: ["+1Hp up", "+0.3 Damage up", "x1.5 times Damage Multiplayer", "+1.5 Range up", "+0.3 Speed up", "Size up", "Fully restores all red heart containers", "1/3 Fun Guy transformation", "1/3 Stompy transformation"],
    ItemPool:["Item Room","Mushrooms"],
    Quality:4,
    Image: "sprites/Collectible_Magic_Mushroom_Icon.png"
},
ID13 ={
    Name: "The Virus",
    Description: "Poison touch",
    buff: ["Enemies that touch Isaac get poisoned", "+0.2 Speed up", "1/3 Spun transformation"],
    ItemPool:["Item Room","Demon Beggar","Lust MiniBoss"],
    Quality:2,
    Image: "sprites/Collectible_The_Virus_Icon.png"
},
ID14 = {
    Name: "Roid Rage",
    Description: "Speed and range up",
    buff: ["+0.3 Speed up", "+1.5 Range up", "1/3 Spun transformation"],
    ItemPool: ["Item Room","Boss Room","Demon Beggar"],
    Quality:2,
    Image: "sprites/Collectible_Roid_Rage_Icon.png"
},
ID15 = {
    Name: "<3",
    Description:"HP up",
    buff: ["+1 HP up", "Fully restores all red heart containers"],
    ItemPool: ["Item Room","Gluttony MiniBoss"],
    Quality:2,
    Image: "sprites/Collectible_Less_Than_Three_Icon.png"
},
ID16 = {
    Name: "Raw Liver",
    Description: "HP up",
    buff: ["+2 Health up", "full red heart heal"],
    ItemPool:["Secret Room"],
    Quality:2,
    Image: "sprites/Collectible_Raw_Liver_Icon.png"
},
ID17 = {
    Name: "Skeleton Key",
    Description: "99 keys",
    buff: ["Gives Isaac 99 Keys"],
    ItemPool:["Item Room","Secret Room"],
    Quality:3,
    Image: "sprites/Collectible_Skeleton_Key_Icon.png"
},
ID18 = {
    Name: "A Dollar",
    Description: "$$$",
    buff: ["Gives Isaac 100 coins"],
    ItemPool:["Arcade Machine"],
    Quality:3,
    Image: "sprites/Collectible_A_Dollar_Icon.png"
},
ID19 = {
    Name: "Boom!",
    Description: "10 bombs",
    buff: ["+10 Bombs"],
    ItemPool: ["Item Room"],
    Quality:0,
    Image: "sprites/Collectible_Boom!_Icon.png"
},
ID20 = {
    Name: "Transcendence",
    Description: "We all float down here...",
    buff: ["Gives Isaac the ability to fly"],
    ItemPool: ["Secret Room"],
    Quality:3,
    Image: "sprites/Collectible_Transcendence_Icon.png"
},
ID21 = {
    Name: "The Compass",
    Description: "The end is near",
    buff: ["Shows most icons on the map (Shops, Item Rooms, Boss Rooms etc.)"],
    ItemPool: ["Shop","Beggar"],
    Quality:2,
    Image: "sprites/Collectible_The_Compass_Icon.png"
},
ID22 = {
    Name: "Lunch",
    Description: "HP up",
    buff: ["+1 HP up", "heals one red heart container when picked up"],
    ItemPool: ["Boss Room","Challenge Room","Beggar"],
    Quality:1,
    Image: "sprites/Collectible_Lunch_Icon.png"
},
ID23 = {
    Name: "Dinner",
    Description: "HP up",
    buff: ["+1 HP up", "heals one red heart container when picked up"],
    ItemPool: ["Boss Room","Beggar","Challenge Room"],
    Quality:1,
    Image: "sprites/Collectible_Dinner_Icon.png"
},
ID24 = {
    Name: "Dessert",
    Description: "HP up",
    buff: ["+1 HP up", "heals one red heart container when picked up"],
    ItemPool: ["Boss Room","Beggar","Challenge Room"],
    Quality:1,
    Image: "sprites/Collectible_Dessert_Icon.png"
},
ID25 = {
    Name: "Breakfast",
    Description: "HP up",
    buff: ["+1 HP up", "heals one red heart container when picked up"],
    ItemPool: ["Boss Room","Beggar","Challenge Room"],
    Quality:1,
    Image: "sprites/Collectible_Breakfast_Icon.png"
},
ID26 = {
    Name: "Rotten Meat",
    Description: "HP up",
    buff: ["+1 HP up", "Heals one red heart container when picked up"],
    ItemPool: ["Boss Room","Beggar","Challenge Room"],
    Quality:1,
    Image: "sprites/Collectible_Rotten_Meat_Icon.png"
},
ID27 = {
    Name: "Wooden Spoon",
    Description: "Speed up",
    buff: ["+0.3 Speed Up"],
    ItemPool:["Boss Room"],
    Quality:1,
    Image: "sprites/Collectible_Wooden_Spoon_Icon.png"
},
ID28 = {
    Name: "The Belt",
    Description: "Speed up",
    buff: ["+0.3 Speed up"],
    ItemPool: ["Boss Room", "Gold/Stone Chest"],
    Quality:1,
    Image: "sprites/Collectible_The_Belt_Icon.png"
},
ID29 = {
    Name: "Mom's Underwear",
    Description: "Range Up",
    buff: ["+1.5 Range up,", "Gives 3-6 blue attack flies when picked up", "1/3 Mom transformation"],
    ItemPool: ["Boss Room", "Challenge Room", "Gold/Stone Chest", "Mom's Chest"],
    Quality:1,
    Image: "sprites/Collectible_Mom's_Underwear_Icon.png"
},
ID30 = {
    Name: "Mom's Heels",
    Description: "Range up",
    buff: ["+1.5 Range up", "12 contact damage per tick", "1/3 Mom transformasion"],
    ItemPool: ["Boss Room", "Challenge Room", "Mom's Chest"],
    Quality:1,
    Image: "sprites/Collectible_Mom's_Heels_Icon.png"
},
ID31 = {
    Name: "Mom's Lipstick",
    Description: "Range up",
    buff: ["+2.25 Range up", "drops a random heart when picked up", "1/3 Mom transformation"],
    ItemPool: ["Boss Room", "Challenge Room", "Mom's Chest"],
    Quality:1,
    Image: "sprites/Collectible_Mom's_Lipstick_Icon.png"
},
ID32 = {
    Name: "Wire Coat Hanger",
    Description: "Tears up",
    buff: ["+0.7 Tears up"],
    ItemPool: ["Boss Room", "Gold/Stone Chest"],
    Quality:3,
    Image: "sprites/Collectible_Wire_Coat_Hanger_Icon.png"
},
ID33 = {
    Name: "The Bible",
    Description: "Temporary flight",
    buff: ["Gives Isaac angel wings for the current room, allowing him to fly", "1/3 Seraphim transformation", "1/3 Bookworm transformation"],
    ItemPool: ["Shop", "Library", "Angel Room"],
    Quality:1,
    Image: "sprites/Collectible_The_Bible_Icon.png"
},
ID34 = {
    Name: "The Book of Belial",
    Description: "Temporary DMG up",
    buff: ["Gives Isaac +2 DMG up for the current room", "x1.5 times Damage Multiplier if you also have Blood of the Martyr", "+12.5% devil/angel room chance", "1/3 Bookworm transformation"],
    ItemPool: ["Library", "Devil Room"],
    Quality:2,
    Image: "sprites/Collectible_The_Book_of_Belial_Icon.png"
},
ID35 = {
    Name: "The Necronomicon",
    Description: "Mass room damage",
    buff: ["Deals 40 damage to everything in the room", "1/3 Bookworm transformation"],
    ItemPool: ["Library", "Secret Room", "Devil Room"],
    Quality:1,
    Image: "sprites/Collectible_The_Necronomicon_Icon.png"
},
ID36 = {
    Name: "The Poop",
    Description:"Plop!",
    buff: ["Drops a poop on the floor", "1/3 Oh Crap transformation"],
    ItemPool: ["Item Room"],
    Quality:0,
    Image: "sprites/Collectible_The_Poop_Icon.png"
},
ID37 = {
    Name: "Mr. Boom",
    Description: "Reusable bomb buddy",
    buff: ["Drops a large bomb below the player which does 185 damage"],
    ItemPool: ["Item Room", "Wrath MiniBoss", "Bomb Beggar"],
    Quality:1,
    Image: "sprites/Collectible_Mr._Boom_Icon.png"
},
ID38 = {
    Name: "Tammy's Head",
    Description: "Reusable tear burst",
    buff: ["Fires 10 tears in a circle around Isaac, Each tear is equal to your damage stat + 25 flat damage"],
    ItemPool: ["Item Room", "Gold Chest"],
    Quality:2,
    Image: "sprites/Collectible_Tammy's_Head_Icon.png"
}, 
ID39 = {
    Name: "Mom's Bra",
    Description: "Mass fear",
    buff: ["Freezes all enemies in the current room for 4 seconds", "1/3 Mom transformation"],
    ItemPool: ["Item Room", "Challenge Room", "Mom's Chest"],
    Quality:1,
    Image: "sprites/Collectible_Mom's_Bra_Icon.png"
},
ID40 = {
    Name: "Kamikaze",
    Description: "Become the bomb!",
    buff: ["Causes an explosion near Isaac which takes away half a heart and does 40 damgae all enemies in close proximity"],
    ItemPool: ["Item Room"],
    Quality:0,
    Image: "sprites/Collectible_Kamikaze_Icon.png"
},
ID41 = {
    Name: "Mom's Pad",
    Description: "Gross...",
    buff: ["Causes all enemies in the current room to run away from Isaac in fear for 5 seconds", "spawns 1 blue attack fly per use", "1/3 Mom transformation"],
    ItemPool: ["Item Room", "Challenge Room", "Mom's Chest"],
    Quality:0,
    Image: "sprites/Collectible_Mom's_Pad_Icon.png"
},
ID42 = {
    Name: "Bob's Rotten Head",
    Description: "Reusable ranged bomb",
    buff: ["Isaac throws a poison bomb which deals 185 damage and leaves a poison effect on enemies within the blast radius. It also leaves a gas cloud at the place where it exploded", "1/3 Bob transformasion"],
    ItemPool: ["Item Room", "Sloth MiniBoss"],
    Quality:1,
    Image: "sprites/Collectible_Bob's_Rotten_Head_Icon.png"
},
ID44 = {
    Name: "Teleport",
    Description: "Teleport!",
    buff: ["Teleports Isaac to a random location on the map"],
    ItemPool: ["Item Room"],
    Quality:0,
    Image: "sprites/Collectible_Teleport_Icon.png"
},
ID45 = {
    Name: "Yum Heart",
    Description: "Reusable regeneration",
    buff: ["Heals Isaac for 1 whole heart"],
    ItemPool: ["Item Room", "Super Lust MiniBoss"],
    Quality:1,
    Image: "sprites/Collectible_Yum_Heart_Icon.png"
},
ID46 ={
    Name: "Lucky Foot",
    Description: "Luck up",
    buff: ["+1 Luck up, converts all negative pills into their positive counterparts", "better chance to win while gambling", "Higher chance to get a random drop after clearing a room"],
    ItemPool: ["Item Room", "Beggar"],
    Quality:2,
    Image: "sprites/Collectible_Lucky_Foot_Icon.png"
},
ID47 ={
    Name: "Doctor's Remote",
    Description: "Reusable air strike",
    buff: ["A controllable target is placed on the floor. After a few seconds a huge missle hits the target and deals 20x tear damage"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Doctor's_Remote_Icon.png"
},
ID48 = {
    Name: "Cupid's Arrow",
    Description: "Piercing shots",
    buff: ["Isaac's tears now have a piercing effect which allows them to travel through enemies"],
    ItemPool: ["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_Cupid's_Arrow_Icon.png"
},
ID49 = {
    Name: "Shoop Da Whoop!",
    Description: "BLLLARRRRGGG!",
    buff: ["Fires a high damage laser in a straight line across the room"],
    ItemPool: ["Item Room", "Envy MiniBoss", "Super Envy MiniBoss"],
    Quality:2,
    Image: "sprites/Collectible_Shoop_Da_Whoop!"
},
ID50 = {
    Name: "Steven",
    Description: "DMG up",
    buff: ["+1 Damage up"],
    ItemPool: ["Steven Boss"],
    Quality:3,
    Image: "sprites/Collectible_Steven_Icon.png"
},
ID51 = {
    Name: "Pentagram",
    Description: "DMG up",
    buff: ["+1 Damage up", "+10% chance of devil/angel room opening", "1/3 Leviathan transformation"],
    ItemPool: ["Boss Room", "Curse Room", "Devil Room", "Demon Beggar", "Crane Game"],
    Quality:3,
    Image: "sprites/Collectible_Pentagram_Icon.png"
},
ID52 ={
    Name: "Dr. Fetus",
    Description: "???",
    buff: ["Isaac shoots bombs instead of tears", "Tears down"],
    ItemPool: ["Item Room"],
    Quality:4,
    Image: "sprites/Collectible_Dr._Fetus_Icon.png"
},
ID53 = {
    Name: "Magneto",
    Description: "Item snatcher",
    buff: ["Causes pickups on the floor move towards the player", "Chests 2 tiles away from Isaac open automatically"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Magneto_Icon.png"
},
ID54 = {
    Name: "Treasure Map",
    Description: "Full visible map",
    buff: ["Reveals the entire map for every floor except the sepcial and secret room locations"],
    ItemPool: ["Shop", "Beggar"],
    Quality:2,
    Image: "sprites/Collectible_Treasure_Map_Icon.png"
},
ID55 = {
    Name: "Mom's Eye",
    Description: "Eye in the back of your head",
    buff: ["Isaac has a random chance to fire another tear out the back of his head", "1/3 Mom transformation"],
    ItemPool:["Item Room", "Challenge Room", "Mom's Chest"],
    Quality:1,
    Image: "sprites/Collectible_Mom's_Eye_Icon.png"
},
ID56 ={
    Name: "Lemon Mishap",
    Description: "Oops...",
    buff: ["Drops a pool of 'lemonade' on the floor which damages enemies"],
    ItemPool:["Item Room"],
    Quality:0,
    Image: "sprites/Collectible_Lemon_Mishap_Icon.png"
},
ID57 = {
    Name: "Distant Admiration",
    Description:"Attack fly",
    buff: ["Gives Isaac an orbiting fly which deals 5 contact damage to enemies per tick", "1/3 Beelzebub transformation"],
    ItemPool:["Item Room", "Key Beggar"],
    Quality:2,
    Image: "sprites/Collectible_Distant_Admiration_Icon.png"
},
ID58 = {
    Name: "Book of Shadows",
    Description: "Temporary invincibility",
    buff: ["Gives Isaac an ivulerability effect which lasts for 10 seconds", "1/3 Bookworm transformation"],
    ItemPool:["Item Room", "Library"],
    Quality:3,
    Image: "sprites/Collectible_Book_of_Shadows_Icon.png"
},
ID60 ={
    Name: "The Ladder",
    Description: "Building bridges",
    buff: ["Allows Isaac to walk over gaps with a width of one tile"],
    ItemPool:["Shop"],
    Quality:1,
    Image: "sprites/Collectible_The_Ladder_Icon.png"
},
ID62 = {
    Name: "Charm of the Vampire",
    Description:"Kills heal",
    buff: ["+0.3 Damage Up", "Heals half a heart after every 13 enemies killed"],
    ItemPool:["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Charm_of_the_Vampire_Icon.png"
},
ID63 = {
    Name: "The Battery",
    Description: "Stores energy",
    buff: ["All active items can now be 'overcharged', allowing them to be charged up twice instead of of one"],
    ItemPool:["Shop"],
    Quality:2,
    Image: "sprites/Collectible_The_Battery_Icon.png"
},
ID64 = {
    Name: "Steam Sale",
    Description: "50% off",
    buff: ["Items in the shop are now -50% off"],
    ItemPool: ["Shop", "Greed MiniBoss", "ShopKeeper"],
    Quality:2,
    Image: "sprites/Collectible_Steam_Sale_Icon.png"
},
ID65 = {
    Name: "Anarchist Cookbook",
    Description: "Summon bombs",
    buff: ["Spawn 6 troll bombs at random locations around the room"],
    ItemPool: ["Item Room", "Library", "Pride MiniBoss"],
    Quality:1,
    Image: "sprites/Collectible_Anarchist_Cookbook_Icon.png"
},
ID66 = {
    Name: "The Hourglass",
    Description: "Temporary enemy slowdown",
    buff: ["Slows down enemies in the current room and their projeciles for about 8 seconds"],
    ItemPool:["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_The_Hourglass_Icon.png"
},
ID67 = {
    Name: "Sister Maggy",
    Description: "Friends 'till the end",
    buff: ["Grants Isaac a familiar which shoots blood tears that deal 5 damage", "1/3 Conjoined transformation"],
    ItemPool:["Item Room", "Devil Room"],
    Quality:1,
    Image: "sprites/Collectible_Sister_Maggy_Icon.png"
},
ID68 = {
    Name: "Technology",
    Description: "Laser tears",
    buff: ["Isaac shoots piercing, unlimited range lasers instead of tears"],
    ItemPool:["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_Technology_Icon.png"
},
ID69 = {
    Name: "Chocolate Milk",
    Description: "Charge shots",
    buff:["Isaac can now charge shots for more damage by holding down the fire button", "Tears down"],
    ItemPool: ["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_Chocolate_Milk_Icon.png"
},
ID70 = {
    Name: "Growth Hormones",
    Description: "DMG up + speed up",
    buff: ["+1 Damage up", "+0.2 Speed up", "1/3 Spun transformation"],
    ItemPool: ["Boss Room", "Demon Beggar"],
    Quality:3,
    Image: "sprites/Collectible_Growth_Hormones_Icon.png"
},
ID71 ={
    Name: "Mini Mush",
    Description: "Speed + range up",
    buff: ["+0.3 Speed up", "+1.5 Range up", "Size down", "1/3 Fun Guy transformation"],
    ItemPool: ["Item Room", "Mushroom"],
    Quality:2,
    Image: "sprites/Collectible_Mini_Mush_Icon.png"
},
ID72 = {
    Name: "Rosary",
    Description: "Faith up",
    buff: ["+3 Soul Hearts", "+0.5 Tears up", "Adds several instances of The Bible Item into all item pools", "1/3 Seraphim transformation"],
    ItemPool: ["Item Room", "Angel Room"],
    Quality:2,
    Image: "sprites/Collectible_Rosary_Icon.png"
},
ID73 = {
    Name: "Cube of Meat",
    Description: "Gotta meat em all",
    buff: ["Grants Isaac an orbital which blocks projectiles and damages enemies in contact", "Getting more of this item grants a meat boy familiar"],
    ItemPool: ["Horseman Boss"],
    Quality:2,
    Image: "sprites/Collectible_Cube_of_Meat_Icon.png"
},
ID74 = {
    Name: "A Quarter",
    Description: "+25 coins",
    buff: ["Gives Isaac 25 coins"],
    ItemPool: ["Devil Room", "Gold chest", "Super Greed MiniBoss"],
    Quality:0,
    Image: "sprites/Collectible_A_Quarter_Icon.png"
},
ID75 = {
    Name: "PHD",
    Description: "Better pills",
    buff: ["Converts negative pills into their positive counterparts", "Pills are identified before using them", "Drops one pill on pickup", "Heals for 2 full hearts", "Adds 0-2 coins to the payout from Blood Donation and IV Bag"],
    ItemPool: ["Item Room", "Shop"],
    Quality:2,
    Image: "sprites/Collectible_PHD_Icon.png"
},
ID76 = {
    Name: "X-Ray Vision",
    Description: "I've seen everything",
    buff: ["Reveals the entrance to secret rooms and automatically opens the hole"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_X-Ray_Vision_Icon.png"
},
ID77 ={ 
    Name: "My Little Unicorn",
    Description: "Temporary badass",
    buff: ["Gives Isaac invincibility and +0.28 Speed for 6 seconds", "While active Isaac cannot shoot tears, but running into enemies deals contact damage"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_My_Little_Unicorn"
}, 
ID78 = {
    Name: "Book of Revelations",
    Description: "Reusable soul protection",
    buff: ["Gives Isaac an extra Soul Heart", "Using this item gives you a higher chance of finding a horsmen boss", "+17.5% chance for devil/angel deal", "1/3 Bookworm transformation"],
    ItemPool: ["Item Room", "Library"],
    Quality:3,
    Image: "sprites/Collectible_Book_of_Revelations_Icon.png"
},
ID79 ={
    Name: "The Mark",
    Description: "DMG up",
    buff: ["+1 Damage up", "+0.2 Speed up", "+1 Soul Heart", "1/3 Leviathan transformation"],
    ItemPool: ["Curse Room", "Devil Room", "Demon Beggar"],
    Quality:3,
    Image: "sprites/Collectible_The_Mark_Icon.png"
},
ID80 = {
    Name: "The Pact",
    Description: "DMG + Tears up",
    buff: ["+0.5 Damage up", "+0.7 Tears up", "+2 Black Hearts", "1/3 Leviathan transformation"],
    ItemPool: ["Devil Room", "Curse Room", "Demon Beggar"],
    Quality:3,
    Image: "sprites/Collectible_The_Pact_Icon.png"
},
ID81 = {
    Name: "Dead Cat",
    Description: "9 lives",
    buff:["Isaac's Health is set to 1 and he also gains 9 lives", "1/3 Guppy transformation"],
    ItemPool: ["Devil Room", "Curse Room", "Red Chest", "Super Pride MiniBoss"],
    Quality:3,
    Image: "sprites/Collectible_Dead_Cat_Icon.png"
},
ID82 = {
    Name: "Lord of the Pit",
    Description: "Demon Wings",
    buff:["Gives Isaac an ability to fly", "+0.3 Speed up", "1/3 Leviathan transformation"],
    ItemPool: ["Devil Room", "Demon Beggar"],
    Quality:3,
    Image: "sprites/Collectible_Lord_of_the_Pit_Icon.png"
},
ID83 = {
    Name: "The Nail",
    Description: "Temporary demon form",
    buff: ["+0.7 Damage up", "-0.18 Speed up", "+1 Black Heart", "Allows Isaac to deal 40 contact damage to enemies", "1/3 Leviathan transformation"],
    ItemPool: ["Devil Room", "Demon Beggar"],
    Quality:2,
    Image: "sprites/Collectible_The_Nail_Icon.png"
},
ID84 = {
    Name: "We Need to go Deeper",
    Description: "Reusable level skip",
    buff: ["Spawns a trapdoor at Isaac's feet", "Digging in certain spots with objects or markings on the floor will guarantee a crawlspace once per floor"],
    ItemPool:["Secret Room", "Devil Room"],
    Quality:2,
    Image: "sprites/Collectible_We_Need_to_go_Deeper_Icon.png"
},
ID85 = {
    Name: "Deck of Cards",
    Description: "Reusable card generator",
    buff: ["Gives Isaac a random tarot card"],
    ItemPool:["Item Room", "Shop"],
    Quality:2,
    Image: "sprites/Collectible_Deck_of_Cards_Icon.png"
},
ID86 = {
    Name: "Monstro's Tooth",
    Description: "Summon monstro",
    buff: ["spawns a Monstro which will jump on a random enemy in the room"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Monstro's_Tooth_Icon.png"
},
ID87 = {
    Name: "Loki's Horns",
    Description: "Cross tears",
    buff: ["Everytime Isaac fires a tear, there is a chance that Isaac will also fire three more tears in all cardinal directions"],
    ItemPool: ["Item Room", "Demon Beggar"],
    Quality:1,
    Image: "sprites/Collectible_Loki's_Horns_Icon.png"
},
ID88 = {
    Name: "Little Chubby",
    Description: "Attack buddy",
    buff: ["Grants Isaac a familiar that follow Isaac and charges forwards, dealing 3.5 damage per tick to enemies in contact"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Little_Chubby_Icon.png"
},
ID89 = {
    Name: "Spider Bite",
    Description: "Slow Effect",
    buff: ["Tears now have a chance of slowing enemies and their projectiles for 2.5 seconds"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Spider_Bite_Icon.png"
},
ID90 = {
    Name: "The Small Rock",
    Description: "DMG up",
    buff: ["+1 Damage up", "+0.2 Tears up", "-0.2 Speed down"],
    ItemPool: ["Tinted Rock"],
    Quality:3,
    Image: "sprites/Collectible_The_Small_Rock_Icon.png"
},
ID91 = {
    Name: "Spelunker Hat",
    Description: "See-through doors",
    buff:["Reveals adjacent rooms up to 2 rooms away", "reveals Secret Room or Super Secret Room when being next to them", "blocks damage from falling projectiles falling from above"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Spelunker_hat"
},
ID92 = {
    Name: "Super Bandage",
    Description: "+2 hearts",
    buff: ["+1 HP up", "+2 Soul Hearts", "Heals 1 red heart container when picked up"],
    ItemPool:["Item Room", "Boss Room"],
    Quality:2,
    Image: "sprites/Collectible_Super_Bandage_Icon.png"
},
ID93={
    Name: "The Gamekid",
    Description: "Temporary Man-Pac",
    buff: ["Makes Isaac invincible for 6 seconds and does 40 contact damage", "everytime Isaac kills 2 enemies while being invincible he regains 1/2 heart of red heart"],
    ItemPool:["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_The_Gamekid_Icon.png"
},
ID94 = {
    Name: "Sack of Pennies",
    Description: "Gives money",
    buff: ["Gives Isaac a familiar that drops a random coin every 2 rooms"],
    ItemPool:["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Sack_of_Pennies_Icon.png"
},
ID95 = {
    Name: "Robo-Baby",
    Description:"Friends till the bzzzttt",
    buff:["Gives Isaac a familiar which follows Isaac and shoots lasers", "1/3 Conjoined transformation"],
    ItemPool:["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Robo-Baby_Icon.png"
},
ID96 = {
    Name: "Little C.H.A.D",
    Description:"Gives kisses",
    buff:["GIves Isaac a familiar which follows Isaac and drops half a red heart every 3 rooms"],
    ItemPool:["Item Room", "C.H.A.D Boss"],
    Quality:2,
    Image: "sprites/Collectible_Little_C.H.A.D"
},
ID97 = {
    Name: "The Book of Sin",
    Description: "Reusable item generator",
    buff: ["Spawn a random pickup on the floor", "1/3 Bookworm transformation"],
    ItemPool:["Item Room", "Library", "Devil Room"],
    Quality:2,
    Image: "sprites/Collectible_The_Book_of_Sin_Icon.png"
},
ID98 = {
    Name: "The Relic",
    Description: "Soul generator",
    buff: ["Gives Isaac a familiar that follows Isaac and drops a soul heart every 7 or 8 rooms"],
    ItemPool:["Item Room", "Angel Room"],
    Quality:3,
    Image: "sprites/Collectible_The_relic_Icon.png"
},
ID99 = {
    Name: "Little Gish",
    Description: "Sticky friend",
    buff:["Gives Isaac a familiar that follows isaac and fires black tar tears, which slow enemy movement and projecitle speed for a few seconds and deal 3.5 damgae"],
    ItemPool:["Item Room", "Gish Boss"],
    Quality:2,
    Image: "sprites/Collectible_Little_Gish_Icon.png"
},
ID100 = {
    Name: "Little Steven",
    Description:"Psychic friend",
    buff:["Gives Isaac a familiar that follows Isaac and fires homing tears that deal 3.5 damage", "1/3 Conjoined transformation"],
    ItemPool:["Item Room", "Steven Boss"],
    Quality:2,
    Image: "sprites/Collectible_Little_Steven_Icon.png"
},
ID101 = {
    Name: "The Halo",
    Description: "All stats up",
    buff: ["+1 HP up", "+0.3 Damage up", "+0.2 Tears up", "+0.38 Range up", "+0.3 Speed up", "Heals 1 red heart container", "1/3 Seraphim transformation"],
    ItemPool:["Item Room", "Angel Room"],
    Quality:2,
    Image: "sprites/Collectible_The_Halo_Icon.png"
},
ID102 = {
    Name: "Mom's Bottle of Pills",
    Description: "Reusable pill generator",
    buff: ["Gives Isaac a random pill", "1/3 Mom transformation"],
    ItemPool:["Item Room", "Shop", "Challenge Room", "Beggar", "Demon Beggar", "Mom's Chest"],
    Quality:1,
    Image: "sprites/Collectible_Mom's_Bottle_of_Pills_Icon.png"
},
ID103 = {
    Name: "The Common Cold",
    Description: "Poison damage",
    buff: ["Tears now have a random chance to apply a poison effect"],
    ItemPool:["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_The_Common_Cold_Icon.png"
},
ID104 = {
    Name: "The Parasite",
    Description: "Split shot",
    buff: ["Isaac's tears split into two upon contact with enemies or the environment"],
    ItemPool:["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_The_Parasite_Icon.png"
},
ID105 = {
    Name: "The D6",
    Description: "Reroll your destiny",
    buff:["Replaces all pedestal items in the current room with another random item from the current room's item pool"],
    ItemPool:["Item Room"],
    Quality:4,
    Image: "sprites/Collectible_The_D6_Icon.png"
},
ID106 = {
    Name: "Mr. Mega",
    Description: "Blast damage",
    buff:["+5 bombs", "Bombs now do +85 damage and have a larger blast radius"],
    ItemPool:["Item Room", "Bomb Beggar", "Super Wrath MiniBoss"],
    Quality:2,
    Image: "sprites/Collectible_Mr._Mega_Icon.png"
},
ID107 ={
    Name: "Pinking Shears",
    Description: "Cut and run",
    buff: ["Cuts Isaac's head from his body for the current room allowing him to fly and leaving the decapitaded body to run around attacking enemies"],
    ItemPool:["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Pinking_Shears_Icon.png"
},
ID108 = {
    Name: "The Wafer",
    Description: "Damage resistance",
    buff:["All damage taken is reduced to half a heart"],
    ItemPool:["Item Room", "Angel Room"],
    Quality:4,
    Image: "sprites/Collectible_The_Wafer_Icon.png"
},
ID109 = {
    Name: "Money = Power",
    Description: "$$$ = DMG",
    buff:["+0.04 Damage up for every coin Isaac has"],
    ItemPool:["Item Room", "Devil Room"],
    Quality:3,
    Image: "sprites/Collectible_Money_=_Power_Icon.png"
},
ID110 = {
    Name: "Mom's Contacts",
    Description: "Freeze effect",
    buff: ["Tears have a random chance to freeze enemies in place", "+0.38 Range up", "1/3 Mom transformation"],
    ItemPool:["Item Room", "Challenge Room", "Mom's Chest"],
    Quality:3,
    Image: "sprites/Collectible_Mom's_Contacts_Icon.png"
},
ID111 = {
    Name: "The Bean",
    Description: "Toot on command",
    buff: ["Causes Isaac to fart and poison any enemies in close proximity"],
    ItemPool:["Item Room", "Beggar"],
    Quality:0,
    Image: "sprites/Collectible_The_Bean_Icon.png"
},
ID112 = {
    Name: "Guardian Angel",
    Description: "Extra protection",
    buff:["Gives Isaac an orbital which does damage on contact, block shots and increases the speed of all other orbitals", "1/3 Seraphim transformation", "1/3 Conjoined transformation"],
    ItemPool:["Angel Room"],
    Quality:2,
    Image: "sprites/Collectible_Guardian_Angel_Icon.png"
},
ID113 = {
    Name: "Demon Baby",
    Description: "Auto-turret friend",
    buff:["Gives Isaac a familiar which follows Isaac and automatically fires tears that deal 3 damage each at any enemies in close range", "1/3 Conjoined transformation"],
    ItemPool:["Item Room", "Devil Room"],
    Quality:2,
    Image: "sprites/Collectible_Demon_Baby_Icon.png"
},
ID114 = {
    Name: "Mom's Knife",
    Description: "Stab stab stab",
    buff: ["Tears are replaced with a knife which can be charged and thrown in a boomerang style action"],
    ItemPool:["Item Room", "Devil Room", "Mom's Chest", "Challenge Room?"],
    Quality:4,
    Image: "sprites/Collectible_Mom's_Knife_Icon.png"
},
ID115 = {
    Name: "Ouija Board",
    Description: "Spectral tears",
    buff: ["Gives Isaac spectral tears", "+0.4 Tears up"],
    ItemPool: ["Item Room", "Devil Room"],
    Quality:2,
    Image: "sprites/Collectible_Ouija_Board_Icon.png"
},
ID116 = {
    Name: "9 Volt",
    Description: "Quiker charge",
    buff:["Automatically gives you 1 bar of charge after using your spacebar item", "Fully recharges your current spacebar item when picked up"],
    ItemPool:["Shop"],
    Quality:2,
    Image: "sprites/Collectible_9_Volt_Icon.png"
},
ID117 = {
    Name: "Dead Bird",
    Description: "Protective buddy",
    buff: ["When Isaac takes damage a familiar will spawn and attack nearby enemies in the current room"],
    ItemPool:["Item Room"],
    Quality:0,
    Image: "sprites/Collectible_Dead_Bird_Icon.png"
},
ID118 = {
    Name: "Brimstone", 
    Description: "Blood laser barrage",
    buff:["Tears are replaced with the ability to charge and fire a powerful laser that travels in a straight line across the room, dealing a lot of damage"],
    ItemPool:["Devil Room"],
    Quality:4,
    Image: "sprites/Collectible_Brimstone_Icon.png"
},
ID119 = {
    Name: "Blood Bag",
    Description: "HP up",
    buff: ["+1 HP up", "+0.3 Speed up", "Heals for 5 full hearts"],
    ItemPool:["Blood Donation Machine"],
    Quality:2,
    Image: "sprites/Collectible_Blood_Bag_Icon.png"
},
ID120 = {
    Name: "Odd Mushroom",
    Description: "Fire rate up",
    buff: ["+1.7 Tears up", "+0.3 Speed up", "Damage down", "1/3 Fun Guy transformation"],
    ItemPool:["Item Room", "Secret Room"],
    Quality:2,
    Image: "sprites/Collectible_Odd_Mushroom_Icon.png"
},
ID121 = {
    Name: "Odd Mushroom",
    Description: "DMG up",
    buff:["+1 HP up", "+1 Damage up", "+0.38 Range up", "-0.2 Speed down", "Heals one red heart container when picked up", "1/3 Fun Guy transformation"],
    ItemPool:["Item Room", "Secret Room"],
    Quality:2,
    Image: "sprites/Collectible_Odd_Mushroom_Icon.png"
},
ID122 = {
    Name: "Whore of Babylon",
    Description: "Curse up",
    buff: ["When Isaac has half a red heart remaining or less +1.5 Damage up and +0.3 Speed up"],
    ItemPool:["Devil Room", "Demon Beggar"],
    Quality:2,
    Image: "sprites/Collectible_Whore_of_Babylon_Icon.png"
},
ID123 = {
    Name: "Monster Manual",
    Description: "Temporary buddy generator",
    buff:["Gives a random familiar for the entire floor", "1/3 Bookworm transformation"],
    ItemPool: ["Item Room", "Devil Room", "Library"],
    Quality:1,
    Image: "sprites/Collectible_Monster_Manual_Icon.png"
},
ID124 = {
    Name: "Dead Sea Scrolls",
    Description: "It's a mystery",
    buff:["Gives a random active item effect"],
    ItemPool:["Item Room", "Angel Room"],
    Quality:1,
    Image: "sprites/Collectible_Dead_Sea_Scrolls_Icon.png"
},
ID125 = {
    Name: "Bobby-Bomb",
    Description: "Friends till the end",
    buff: ["+5 bombs", "Isaac's bombs now have a homing effect"],
    ItemPool:["Item Room", "Bomb Beggar"],
    Quality:2,
    Image: "sprites/Collectible_Bobby-Bomb_Icon.png"
},
ID126 = {
    Name: "Razor Blade",
    Description: "Feel my pain",
    buff:["Deals damage to Isaac in exchange for +1.2 Damage up which lasts for the current room"],
    ItemPool:["Item Room", "Curse Room", "Demon Beggar"],
    Quality:0,
    Image: "sprites/Collectible_Razor_Blade_Icon.png"
},
ID127 = {
    Name: "Forget Me Now",
    Description: "I don't remember...",
    buff: ["Refreshes the current floor with brand new rooms, monsters and items as if you had entered a new floor"],
    ItemPool:["Item Room", "Secret Room", "Devil Room", "Demon Beggar"],
    Quality:3,
    Image: "sprites/Collectible_Forget_Me_Now_Icon.png"
},
ID128 = {
    Name: "Forever Alone",
    Description: "Attack fly",
    buff:["Gives Isaac an orbiting fly which deals contact damage per tick to enemies"],
    ItemPool:["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Forever_Alone_Icon.png"
},
ID129 = {
    Name: "Bucket of Lard",
    Description: "HP up",
    buff: ["+2 Health up", "-0.2 Speed down"],
    ItemPool:["Item Room", "Super Gluttony MiniBoss"],
    Quality:1,
    Image: "sprites/Collectible_Bucket_of_Lard_Icon.png"
},
ID130 = {
    Name: "A Pony",
    Description: "Flight + dash attack",
    buff: ["Allows Isaac to fly", "Speed = 1.5 if it isn't already that high", "Isaac will dash across the screen dealing scaling contact damage"],
    ItemPool:["Headless Horseman"],
    Quality:2,
    Image: "sprites/Collectible_A_Pony_Icon.png"
},
ID131 = {
    Name: "Bomb Bag",
    Description: "Gives bombs",
    buff: ["Drops a bomb pickup every 2 rooms"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Bomb_Bag_Icon.png"
},
ID132 = {
    Name: "A Lump of Coal",
    Description: "My Xmas present",
    buff: ["Tears gain a damage up and increase in size based on the distance they travel"],
    ItemPool: ["Krampus"],
    Quality:3,
    Image: "sprites/Collectible_A_Lump_of_Coal_Icon.png"
},
ID133 = {
    Name: "Guppy's Paw",
    Description: "Soul converter",
    buff: ["Removes one heart container and gives you 3 Soul Hearts", "1/3 Guppy transformation"],
    ItemPool: ["Devil Room", "Curse Room", "Red Chest"],
    Quality:3,
    Image: "sprites/Collectible_Guppy's_Paw_Icon.png"
},
ID134 = {
    Name: "Guppy's Tail",
    Description: "Cursed?",
    buff: ["Gives a 1/3 chance for room clear rewards to become a normal or locked chest, and a 1/3 chance to reward nothing at all", "1/3 Guppy transformation"],
    ItemPool: ["Devil Room", "Curse Room", "Red Chest"],
    Quality:2,
    Image: "sprites/Collectible_Guppy's_Tail_Icon.png"
},
ID135 = {
    Name: "IV Bag",
    Description: "Portable blood bank",
    buff: ["Takes half a red heart (1 full heart in the Womb and beyond) and spawns 1-3 coins"],
    ItemPool: ["Blood Donation Machine"],
    Quality:1,
    Image: "sprites/Collectible_IV_Bag_Icon.png"
},
ID136 = {
    Name: "Best Friend",
    Description: "Friends 'till the end",
    buff: ["Places a decoy on the floor which attracts enemies and explodes after a period of time"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Best_Friend_Icon.png"
},
ID137 = {
    Name: "Remote Detonator",
    Description: "Remote bomb detonation",
    buff: ["+5 Bombs", "Bombs no longer automatically explode and will only do upon use"],
    ItemPool: ["Item Room", "Shop", "Bomb Beggar"],
    Quality:1,
    Image: "sprites/Collectible_Remote_Detonator_Icon.png"
},
ID138 = {
    Name: "Stigmata",
    Description: "DMG + HP up",
    buff: ["+1 HP up", "+0.3 Damage up", "Heals one red heart container when picked up"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Stimgata_Icon.png"
},
ID139 = {
    Name: "Mom's Purse",
    Description: "More trinket room",
    buff: ["Isaac can now hold two trinkets at the same time", "Drops a random trinket on the floor when picked up", "1/3 Mom transformation"],
    ItemPool: ["Shop", "Mom's Chest"],
    Quality:2,
    Image: "sprites/Collectible_Mom's_Purse_Icon.png"
},
ID140 = {
    Name: "Bob's Curse",
    Description: "Poison bombs",
    buff: ["+5 bombs", "Isaac's bombs now poison nearby enemies and leave behind a gas cloud that poisons enmies that move through it", "1/3 Bob transformation"],
    ItemPool: ["Item Room", "Super Sloth MiniBoss", "Bomb Beggar"],
    Quality:1,
    Image: "sprites/Collectible_Bob's_Curse_Icon.png"
},
ID141 = {
    Name: "Pageant Boy",
    Description: "Ultimate Grand Supreme",
    buff: ["Spawns 7 random coins around Isaac on the floor"],
    ItemPool: ["Boss Room"],
    Quality:0,
    Image: "sprites/Collectible_Pageant_Boy_Icon.png"
},
ID142 = {
    Name: "Scapular",
    Description: "You have been blessed",
    buff: ["Once per room when you are damaged down to your final half a heart, you gain 1 soul heart", "1/3 Seraphim transformation"],
    ItemPool: ["Item Room", "Angel Room"],
    Quality:2,
    Image: "sprites/Collectible_Scapular_Icon.png"
},
ID143 = {
    Name: "Speed Ball",
    Description: "Speed + Shot speed up",
    buff: ["+0.3 Speed up", "+0.2 Shot Speed up", "1/3 Spun transformation"],
    ItemPool: ["Item Room", "Boss Room", "Demon Beggar"],
    Quality:2,
    Image: "sprites/Collectible_Speed_Ball_Icon.png"
},
ID144 = {
    Name: "Bum Friend",
    Description: "He's Greedy",
    buff: ["A familiar which follows Isaac around and automatically picks up nearby coins, after picking up 6 coins he will drop a random pickup", "1/3 Super Bum transformation"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Bum_Friend_Icon.png"
},
ID145 = {
    Name: "Guppy's Head",
    Description: "Reusable fly hive",
    buff: ["Spawns between 2-4 blue flies", "1/3 Guppy transformation"],
    ItemPool: ["Devil Room", "Curse Room", "Red Chest", "Gold/Stone Chest"],
    Quality:2,
    Image: "sprites/Collectible_Guppy's_Head_Icon.png"
},
ID146 = {
    Name: "Prayer Card",
    Description: "Reusable eternity",
    buff: ["Gives Isaac an eternal heart"],
    ItemPool: ["Item Room", "Angel Room"],
    Quality:3,
    Image: "sprites/Collectible_Prayer_Card_icon.png"
},
ID147 ={
    Name: "Notched Axe",
    Description: "Rocks didin't stand a chance",
    buff: ["Isaac takes out the axe and gives you the ability to break rocks and damage enemies with it"],
    ItemPool: ["Shop", "Crange Game"],
    Quality:1,
    Image: "sprites/Collectible_Notched_Axe_Icon.png"
},
ID148 = {
    Name: "Infestation",
    Description: "Fly revenge",
    buff: ["When Isaac gets hit, 2-6 blue flies will randomly spawn Blue Flies", "1/3 Beelzebub transformation"],
    ItemPool: ["Item Room"],
    Quality:0,
    Image: "sprites/Collectible_Infestation_Icon.png"
},
ID149 = {
    Name: "Ipecac",
    Description: "Explosive shots",
    buff: ["Isaac's tears are replaced with explosive poison bombs, which will arc upwards and explode on contact with the floor", "+40 Damage up", "Tears down"],
    ItemPool: ["Item Room"],
    Quality:4,
    Image: "sprites/Collectible_Ipecac_Icon.png"
},
ID150 = {
    Name: "Tough Love",
    Description: "Tooth shot",
    buff: ["Isaac has a random chance to fire a tooth shot instead of a tear sometimes, Teeth shots deal damage equal to your damage *3.2"],
    ItemPool: ["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_Tough_Love_Icon.png"
},
ID151 = {
    Name: "The Mulligan",
    Description: "They grow inside",
    buff: ["Isaac has a 1/6 chance to spawn a blue fly when one of his tears hits an enemy", "1/3 Beelzebub transformation"],
    ItemPool: ["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_The_Mulligan_Icon.png"
},
ID152 = {
    Name: "Technology 2",
    Description: "Laser",
    buff: ["Isaac now also has a laser with unlimited range, tears continue to fire from left eye at rate of 2/3"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Technology_2_Icon.png"
},
ID153 = {
    Name: "Mutant Spider",
    Description: "Quad Shot",
    buff: ["Tears now shoot 4 at a time", "Tears down significantly", "1/3 Spider Baby transformation"],
    ItemPool: ["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_Mutant_Spider_Icon.png"
},
ID154 = {
    Name: "Chemical Peel",
    Description: "DMG up",
    buff: ["+2 Damage up for tears fired from Isaac's left eye"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Chemical_Peel_Icon.png"
},
ID155 = {
    Name: "The Peeper",
    Description: "Plop!",
    buff: ["Gives Isaac an eye companion that floats around the room and deals damage on contact", "Damage from Isaac's left eye deal +35% damage"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_The_Peeper_Icon.png"
},
ID156 = {
    Name: "Habit",
    Description: "Item martyr",
    buff: ["When you take damage, this item recharges one room's worth charge to active item"],
    ItemPool: ["Shop", "Angel Room"],
    Quality:2,
    Image: "sprites/Collectible_Habit_Icon.png"
},
ID157 = {
    Name: "Bloody Lust",
    Description: "RAGE!",
    buff: ["Each time you take damage, you gain a damage up which lasts for the rest of the floor and turn darker red colour each time"],
    ItemPool: ["Item Room", "Devil Room"],
    Quality:2,
    Image: "sprites/Collectible_Bloody_Lust_Icon.png"
},
ID158 = {
    Name:"Crystal Ball",
    Description: "I see my future",
    buff: ["Reveals the map and drops either a soul heart or a random card/rune (50% chance for each)", "+15% Planetarium chance while held"],
    ItemPool: ["Fortune Machine"],
    Quality:3,
    Image: "sprites/Collectible_Crystal_Ball_Icon.png"
},
ID159 = {
    Name: "Spirit of the Night",
    Description: "Scary",
    buff: ["Gives Isaac the ability to fly and spectral tears", "1/3 Leviathan transformation"],
    ItemPool: ["Devil Room", "Demon Beggar"],
    Quality:3,
    Image: "sprites/Collectible_Spirit_of_the_Night_Icon.png"
},
ID160 = {
    Name: "Crack the Sky",
    Description: "Holy white death",
    buff: ["Creates 5 beams of light from the sky that deal damage"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Crack_the_Sky_Icon.png"
}, 
ID161 = {
    Name: "Ankh",
    Description: "Eternal life?",
    buff: ["Upon death, you respawn in the previous room as Blue Baby with three Soul hearts"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Ankh_Icon.png"
},
ID162 = {
    Name: "Celtic Cross",
    Description: "You feel blessed",
    buff: ["Upon taking damage, you have a 20% chance to gain an invulnerability shield for 7 seconds", "1/3 Seraphim transformation"],
    ItemPool: ["Item Room", "Angel Room"],
    Quality:1,
    Image: "sprites/Collectible_Celtic_Cross_Icon.png"
},
ID163 = {
    Name: "Ghost Baby",
    Description: "Spectral buddy",
    buff: ["A familiar which follows Isaac and shoots spectral tears that deal 3.5 damage", "1/3 Conjoined transformation"],
    ItemPool: ["Item Room", "Devil Room", "Skulls"],
    Quality:1,
    Image: "sprites/Collectible_Ghost_Baby_Icon.png"
},
ID164 = {
    Name: "The Candle",
    Description: "Reusable flame",
    buff: ["Isaac fires a blue flame that damages anything in its path and destroys enemy shots"],
    ItemPool: ["Shop"],
    Quality:2,
    Image: "sprites/Collectible_The_Candle_Icon.png"
},
ID165 = {
    Name: "Cat-O-Nine_Tails",
    Description: "Shot speed up + DMG up",
    buff: ["+1 Damage up", "+0.23 Shot Speed up"],
    ItemPool: ["Boss Room"],
    Quality:3,
    Image: "sprites/Collectible_Cat-O-Nine-Tails_Icon.png"
},
ID166 = {
    Name: "D20",
    Description: "Reroll the basics",
    buff: ["Re-rolls all pickup consumables in the current room into another random kind of pickup"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_D20_Icon.png"
},
ID167 = {
    Name: "Harlequin Baby",
    Description: "Double shot buddy",
    buff: ["Gives Isaac a familiar which follows Isaac and shoots two normal tears at once in a V-shaped pattern", "1/3 Conjoined transformation"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Harlequin_Baby_icon.png"
},
ID168 = {
    Name: "Epic Fetus",
    Description: "On-demand air strike",
    buff: ["Tears now become missles which deal huge damage to anything nearby"],
    ItemPool: ["Secret Room"],
    Quality:4,
    Image: "sprites/Collectible_Epic_Fetus_Icon.png"
},
ID169 = {
    Name: "Polyphemus",
    Description: "Mega tears",
    buff: ["High Damage up (damage+4)*2", "Tears down significantly", "If a tears kills ana enemy, it continues to travel forward with the leftover damage"],
    ItemPool: ["Item Room"],
    Quality:4,
    Image: "sprites/Collectible_Polyphemus_Icon.png"
},
ID170 = {
    Name: "Daddy Longlegs",
    Description: "Daddy's Love",
    buff: ["A shadow follows Isaac and stomps on enemies randomly", "1/3 Spider Baby transformation"],
    ItemPool: ["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_Daddy_Longlegs_Icon.png"
},
ID171 = {
    Name: "Spider Butt",
    Description: "Mass enemy slowdown + damage",
    buff: ["Does 10 damage to all enemies in the room and gives them a slowing effect for 4 seonds", "1/3 Spider Baby transformation"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Spider_Butt_Icon.png"
},
ID172 = {
    Name: "Sacrificial Dagger",
    Description: "My fate protects me",
    buff: ["Gives Isaac an orbital knife that blocks shots and deals damage on contact to enemies"],
    ItemPool: ["Item Room", "Devil Room"],
    Quality:2,
    Image: "sprites/Collectible_Sacrificial_Dagger"
},
ID173 = {
    Name: "Mitre",
    Description: "You feel blessed",
    buff: ["Gives a 33% of converting red heart drops into soul hearts", "1/3 Searphim transformation"],
    ItemPool: ["Item Room", "Angel Room"],
    Quality:3,
    Image: "sprites/Collectible_Mitre_Icon.png"
},
ID174 = {
    Name: "Rainbow Baby",
    Description: "Random buddy",
    buff: ["Gives Isaac a familiar that follows Isaac and fires random tears", "1/3 Conjoined transformation"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Rainbow_Baby_Icon.png"
},
ID175 = {
    Name: "Dad's Key",
    Description: "Opens all doors...",
    buff: ["Opens all closed doors in the current room, including the ones which require a key to enter and secret room doors"],
    ItemPool: ["Item Room", "Key Beggar"],
    Quality:2,
    Image: "sprites/Collectible_Dad's_Key_Icon.png"
},
ID176 = {
    Name: "Stem Cells",
    Description: "HP up",
    buff: ["+1 HP up", "+0.16 Shot Speed up", "Heals one red heart container when picked up"],
    ItemPool: ["Item Room", "Boss Room"],
    Quality:1,
    Image: "sprites/Collectible_Stem_Cells_Icon.png"
},
ID177 = {
    Name: "Portable Slot",
    Description: "Gamble 24/7",
    buff: ["Takes a coin and has a chance to give a pickup"],
    ItemPool: ["Shop", "Beggar"],
    Quality:0,
    Image: "sprites/Collectible_Portable_Slot_Icon.png"
},
ID178 = {
    Name: "Holy Water",
    Description: "Splash!",
    buff: ["Spawns a familiar that follows Isaac and launches itself in the direction Isaac shoots. Upon hitting an enemy it will deal 7 damage and shatter, creating a pool of damaging blue creep that also petrifies enemies that touch it"],
    ItemPool: ["Item Room", "Angel Room"],
    Quality:3,
    Image: "sprites/Collectible_Holy_Water_Icon.png"
},
ID179 = {
    Name: "Fate",
    Description: "Flight eternal",
    buff: ["Gives Isaac an eternal heart and the ability to fly"],
    ItemPool: ["Gold Chest"],
    Quality:3,
    Image: "sprites/Collectible_Fate_Icon.png"
},
ID180 = {
    Name: "The Black Bean",
    Description: "Toot on touch",
    buff: ["Upon taking damage, Isaac will fart, causing all enemies in close proximity to become poisoned and take damage"],
    ItemPool: ["Item Room", "Beggar"],
    Quality:0,
    Image: "sprites/Collectible_The_Black_Bean_icon.png"
},
ID181 = {
    Name: "White Pony",
    Description: "Flight + holy death",
    buff: ["Allows Isaac to fly", "Speed = 1.5 if it isn't already that high", "Isaac will dash across the screen dealing scaling contact damage", "Isaac spawns a trail of light beams that deal a lot of damage to enemies"],
    ItemPool: ["Conquest Boss"],
    Quality:2,
    Image: "sprites/Collectible_White_Pony_Icon.png"
},
ID182 = {
    Name: "Sacred Heart",
    Description: "Homing shots + DMG up",
    buff: ["Health up", "Damage up (damage * 2.3 +1)", "-0.4 Tears down", "-0.25 Shot Speed Down", "Full red heart heal", "1/3 Seraphim transformation"],
    ItemPool: ["Angel Room"],
    Quality:4,
    Image: "sprites/Collectible_Sacred_Heart_Icon.png"
},
ID183 = {
    Name: "ToothPicks",
    Description: "Tears + Shot speed up",
    buff: ["+0.7 Tears up", "+0.16 Shot Speed up", "Makes Isaac's tears red"],
    ItemPool:["Boss Room"],
    Quality:3,
    Image: "sprites/Collectible_Toothpicks_Icon.png"
},
ID184 = {
    Name: "Holy Grail",
    Description: "Flight + HP up",
    buff: ["+1 HP up", "Gives Isaac the ability to fly", "Heals one heart container when picked up", "1/3 Seraphim transformation"],
    ItemPool: ["Angel Room"],
    Quality:3,
    Image: "sprites/Collectible_Holy_grail_icon.png"
},
ID185 = {
    Name: "Dead Dove",
    Description: "Flight + spectral tears",
    buff: ["Gives Isaac the ability to fly and spectral tears", "1/3 Seraphim transformation"],
    ItemPool: ["Angel Room"],
    Quality:3,
    Image: "sprites/Collectible_Dead_Dove_Icon.png"
},
ID186 = {
    Name: "Blood Rights",
    Description: "Mass enemy damage at a cost",
    buff: ["Takes away one full heart and deals 40 damage to the entire room"],
    ItemPool: ["Item Room", "Devil Room"],
    Quality:0,
    Image: "sprites/Collectible_Blood_Rights_Icon.png"
},
ID187 = {
    Name: "Guppy's Hairball",
    Description: "Swing it",
    buff: ["Follows behind Isaac and can be swung back and forth dealing 5 contact damage per tick to enemies", "Everytime it kills an enemy it grows in size allowing it to deal more damage", "1/3 Guppy transformation"],
    ItemPool: ["Devil Room"],
    Quality:1,
    Image: "sprites/Collectible_Guppy's_Hairball_Icon.png"
},
ID188 = {
    Name: "Abel",
    Description: "Mirrored buddy",
    buff: ["Gives Isaac a familiar that mirrors the player's movements and shoots tears directly at Isaac", "1/3 Conjoined transformation"],
    ItemPool: ["Item Room"],
    Quality:0,
    Image: "sprites/Collectible_Abel_Icon.png"
},
ID189 = {
    Name: "SMB Super Fan",
    Description: "All stats up",
    buff: ["+1 HP up", "+0.3 Damage up", "+0.2 Tears up", "+1.5 Range up", "+0.2 Speed up", "Full red heart heal", "Turns Isaac red"],
    ItemPool: ["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_SMB_Super_Fan_Icon.png"
},
ID190 = {
    Name: "Pyro",
    Description: "99 bombs",
    buff: ["Gives Isaac 99 bombs"],
    ItemPool: ["Item Room", "Secret Room", "Bomb Beggar"],
    Quality:3,
    Image: "sprites/Collectible_Pyro_Icon.png"
},
ID191 = {
    Name: "3 Dollar Bill",
    Description: "Rainbow tears",
    buff: ["Grants Isaac random tear effects that change every 2-3 seconds"],
    ItemPool: ["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_3_Dollar_Bill_Icon.png"
},
ID192 = {
    Name: "Telepathy for Dummies",
    Description: "Temporary psychic shot",
    buff: ["Isaac gains homing shots and +3 Range up for the current room", "1/3 Bookworm transformation"],
    ItemPool: ["Item Room", "Library"],
    Quality:1,
    Image: "sprites/Collectible_Telepathy_for_Dummies_Icon.png"
},
ID193 = {
    Name: "MEAT!",
    Description: "DMG + HP up",
    buff: ["+1 HP up", "+0.3 Damage up", "Heals one red heart container when picked up"],
    ItemPool: ["Boss Room"],
    Quality:2,
    Image: "sprites/Collectible_Meat!_Icon.png"
},
ID194 = {
    Name: "Magic 8 Ball",
    Description: "Shot speed up",
    buff: ["+0.16 Shot Speed up", "+15% Planetarium chance"],
    ItemPool:["Boss Room", "Gold/Stone Chest"],
    Quality:1,
    Image: "sprites/Collectible_Magic_8_Ball_Icon.png"
},
ID195 = {
    Name: "Mom's Coin Purse",
    Description: "What's all this...?",
    buff: ["Drops 4 random pills on the floor around Isaac", "1/3 Mom transformation"],
    ItemPool: ["Shop", "Boss Room", "Challenge Room", "Beggar", "Demon Beggar", "Mom's Chest"],
    Quality:1,
    Image: "sprites/Collectible_Mom's_Coin_Purse_Icon.png"
},
ID196 = {
    Name: "Squeezy",
    Description: "Tears up",
    buff: ["+2 Soul hearts", "+0.4 Tears up"],
    ItemPool: ["Boss Room", "Gold/Stone Chest"],
    Quality:3,
    Image: "sprites/Collectible_Squeezy_Icon.png"
},
ID197 = {
    Name: "Jesus Juice",
    Description: "Damage + range up",
    buff: ["+0.5 Damage up", "+0.38 Range up"],
    ItemPool: ["Boss Room", "Angel Room"],
    Quality:2,
    Image: "sprites/Collectible_Jesus_Juice_Icon.png"
},
ID198 = {
    Name: "Box",
    Description: "Stuff",
    buff: ["When picked up spawns 1 red heart, 1 key, 1 bomb, 1 coin, 1 card/rune, 1 pill and 1 trinket"],
    ItemPool: ["Boss Room", "Challenge Room"],
    Quality:0,
    Image: "sprites/Collectible_Box_Icon.png"
},
ID199 = {
    Name: "Mom's Key",
    Description: "Better chest loot +2 keys",
    buff: ["+2 keys", "Doubles the yield of pickups that spawn from non-red chests", "1/3 Mom transformation"],
    ItemPool: ["Shop", "Challenge Room", "Key Beggar", "Mom's Chest"],
    Quality:3,
    Image: "sprites/Collectible_Mom's_Key_Icon.png"
},
ID200 = {
    Name: "Mom's Eyeshadow",
    Description: "Charm Tears",
    buff: ["Tears have a random chance to charm enemies", "1/3 Mom transformation"],
    ItemPool: ["Item Room", "Challenge Room", "Mom's Chest"],
    Quality:1,
    Image: "sprites/Collectible_Mom's_Eyeshadow"
},
ID201 = {
    Name: "Iron Bar",
    Description: "Concussive tears",
    buff: ["+0.3 Damage up", "Tears now have a chance to concuss enemies for a short period of time"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Iron_Bar_Icon.png"
},
ID202 = {
    Name: "Midas Touch",
    Description: "Goldent touch",
    buff: ["Isaac's touch now petrifies enemies, turning them to gold for a few seconds. If an enemy is killed while it is golden, it will drop between 1-4 coins"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Midas_Touch_Icon.png"
},
ID203 = {
    Name: "Humbeling Bundle",
    Description: "1+1 free 4evar!",
    buff: ["All future pennies, keys bombs and hearts have a chance to drop in pairs"],
    ItemPool: ["Shop"],
    Quality:3,
    Image: "sprites/Collectible_Humbeling_Bundle_Icon.png"
},
ID204 = {
    Name: "Fanny Pack",
    Description: "Filled with goodies",
    buff: ["When Isaac takes damage, there is a 50% chance to drop a random heart, key, bomb or coin"],
    ItemPool: ["Shop", "Beggar"],
    Quality:1,
    Image: "sprites/Collectible_Fanny_Pack_Icon.png"
},
ID205 = {
    Name: "Sharp Plug",
    Description: "Charge with blood",
    buff: ["When your active item is not fully charged, you can press spacebar to recharge it at the cost half of a heart per charge"],
    ItemPool: ["Shop"],
    Quality:2,
    Image: "sprites/Collectible_Sharp_Plug_Icon.png"
},
ID206 = {
    Name: "The Guillotine",
    Description: "An out-of-body experience",
    buff:["+1 Damage up", "-1 Tear Delay", "Causes Isaac's head to detach and orbit his body, blocking shots and dealing contact damage. Tears are fired from Isaac's head"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_The_Guillotine_Icon.png"
},
ID207 = {
    Name: "Ball of Bandages",
    Description: "Gotta lick em all",
    buff: ["Grants Isaac an orbital which blocks projectiles and damages enemies in contact", "Getting more of this item grants a bandage girl familiar"],
    ItemPool: ["Horseman Boss"],
    Quality:2,
    Image: "sprites/Collectible_Ball_of_Bandages_Icon.png"
},
ID208 = {
    Name: "Champion Belt",
    Description: "DMG + Challenge up",
    buff: ["+1 Damage up", "Increases the chance of champion enemies appearing by 15%"],
    ItemPool: ["Shop"],
    Quality:3,
    Image: "sprites/Collectible_Champion_Belt_Icon.png"
},
ID209 = {
    Name: "Butt Bombs",
    Description: "Toxic blast +5 bombs",
    buff: ["+5 bombs", "Bombs now become poop bombs, which deal 10 damage to all enemies in the room and daze them for a short period of time"],
    ItemPool: ["Item Room", "Bomb beggar"],
    Quality:2,
    Image: "sprites/Collectible_Butt_Bombs_Icon.png"
},
ID210 = {
    Name: "Gnawed Leaf",
    Description: "Unbreakable",
    buff: ["If Isaac stands still and stops shooting for a second he turns to stone making him invincible until he moves/shoots again"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Gnawed_Leaf_Icon.png"
},
ID211 = {
    Name: "SpiderBaby",
    Description: "Spider revenge",
    buff: ["Spawns 2-5 friendly attack spiders every time you take damage", "1/3 Spider Baby transformation"],
    ItemPool: ["Item Room"],
    Quality:0,
    Image: "sprites/Collectible_Spiderbaby_Icon.png"
},
ID212 = {
    Name: "Guppy's Collar",
    Description:"Eternal life?",
    buff: ["When Isaac dies, he has a 50% chance to resurrect with 1/2 a heart", "1/3 Guppy transformation"],
    ItemPool: ["Devil Room", "Curse Room", "Red Chest"],
    Quality:1,
    Image: "sprites/Collectible_Guppy's_Collar_Icon.png"
},
ID213 = {
    Name: "Lost Contact",
    Description: "Shielded tears",
    buff: ["All of Isaac's tears now have a shield, allowing them to block an enemy projectile", "-0.16 Shot Speed down"],
    ItemPool: ["Item Room", "Secret Room"],
    Quality:2,
    Image: "sprites/Collectible_Lost_Contact_Icon.png"
},
ID214 = {
    Name: "Anemic",
    Description: "Toxic Blood",
    buff: ["+1.5 Range up", "When Isaac takes damage, he will start to leave a trail of blood creep behind him for the current room"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Anemic_Icon.png"
},
ID215 = {
    Name: "Goat Head",
    Description: "He accepts your offering",
    buff: ["Gives Isaac a guaranteed devil or angel room on every floor that they can appear"],
    ItemPool: ["Devil Room", "Curse Room"],
    Quality:3,
    Image: "sprites/Collectible_Goat_Head_Icon.png"
},
ID216 = {
    Name: "Ceremonial Robes",
    Description: "Sin up",
    buff: ["+3 Black Hearts", "+1 Damage up"],
    ItemPool: ["Devil Room", "Curse Room", "Demon Beggar"],
    Quality:3,
    Image: "sprites/Collectible_Ceremonial_Robes_Icon.png"
},
ID217 = {
    Name: "Mom's Wig",
    Description: "You feel itchy",
    buff: ["Isaac now has a small chance to create friendly attack spider everytime he fires a tear", "Heals 1 red heart container when picked up", "1/3 Mom transformation"],
    ItemPool: ["Item Room", "Challenge Room", "Mom's Chest"],
    Quality:2,
    Image: "sprites/Collectible_Mom's_Wig_Icon.png"
},
ID218 = {
    Name: "Placenta",
    Description: "HP up + regen",
    buff: ["+1 HP up", "Gives a chance to heal half a red heart every time the in-game timer hits a new minute", "Heals one red heart container when picked up"],
    ItemPool: ["Boss Room"], 
    Quality:2,
    Image: "sprites/Collectible_Placenta_Icon.png"
},
ID219 = {
    Name: "Old Bandage",
    Description: "HP up",
    buff: ["+1 HP up", "The given heart container is empty", "When you get hit, you will sometimes cause hearts to drop on the floor"],
    ItemPool: ["Boss Room"],
    Quality:2,
    Image: "sprites/Collectible_Old_Bandage_Icon.png"
},
ID220 = {
    Name: "Sad Bombs",
    Description: "Tear blast + 5 bombs",
    buff: ["+5 bombs", "Everytime a bomb explodes, it will release a circle of 10 tears outwards"],
    ItemPool: ["Item Room", "Bomb Beggar"],
    Quality:2,
    Image: "sprites/Collectible_Sad_Bombs_Icon.png"
},
ID221 = {
    Name: "Rubber Cement",
    Description: "Bouncing tears",
    buff: ["Isaac's tears now bounce off walls and objects in the environment"],
    ItemPool: ["Item Room", "Greed Mode Item Room"],
    Quality:3,
    Image: "sprites/Collectible_Rubber_Cement_Icon.png" 
},
ID222 = {
    Name: "Anti-Gravity",
    Description: "Antigravity tears + tears up",
    buff: ["-2 Tear Delay", "As you hold down the fire button, shots will float in the same place until you release the fire key"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Anti-Gravity_Icon.png"
},
ID223 = {
    Name: "Pyromaniac",
    Description: "Hurts so good +5 bombs",
    buff: ["+5 bombs", "All explosions now heal Isaac for 0.5 red heart instead of hurting him", "Grants immunity to fire"],
    ItemPool: ["Item Room"],
    Quality:4,
    Image: "sprites/Collectible_Pyromaniac_Icon.png"
},
ID224 = {
    Name: "Cricket's Body",
    Description: "Splash damage + tears up",
    buff: ["-1 Tear Delay", "-1.3 Range Down", "x1.2 Tear Size", "Makes tears break into 4 smaller tears on impact with anything"],
    ItemPool:["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_Cricket's_Body_Icon.png"
},
ID225 = {
    Name: "Gimpy",
    Description: "Sweet suffering",
    buff: ["When getting hit, this item has a chance to drop a soul heart or black heart", "Enemies have a chance to drop half a red heart when killed"],
    ItemPool: ["Item Room", "Devil Room", "Curse Room", "Demon Beggar"],
    Quality:2,
    Image: "sprites/Collectible_Gimpy_Icon.png"
},
ID226 ={
    Name: "Black Lotus",
    Description: "HP up x3",
    buff: ["+1 Hp up", "+1 Soul Heart", "+1 Black Heart", "Heals 1 red heart conatiner when picked up"],
    ItemPool: ["Secret Room"],
    Quality:2,
    Image: "sprites/Collectible_Black_lotus_Icon.png"
},
ID227 = {
    Name: "Piggy Bank",
    Description: "My life savings",
    buff: ["+3 Coins when picked up", "When you take damage, 1-2 coins will drop on the floor"],
    ItemPool: ["Item Room", "Shop"],
    Quality:1,
    Image: "sprites/Collectible_Piggy_Bank_Icon.png"
},
ID228 = {
    Name: "Mom's Perfume",
    Description: "Fear Shot",
    buff: ["-1 Tear Delay", "Isaac's tears have a 15% chance of causing a fear effect", "1/3 Mom transformation"],
    ItemPool: ["Item Room", "Challenge Room", "Mom's Chest"],
    Quality:2,
    Image: "sprites/Collectible_Mom's_Perfume_Icon.png"
},
ID229 = {
    Name: "Monstro's Lung",
    Description: "Charged attack",
    buff: ["Tears can now be charged and released in a shotgun style effect", "Tears down"],
    ItemPool:["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Monstro's_Lung_Icon.png"
},
ID230 = {
    Name: "Abaddon",
    Description: "Evil up + DMG up + fear shot",
    buff: ["On pickups converts all your red heart containers to black hearts, then gives you +2 more black hearts", "1.5 Damage up", "+0.2 Speed up", "Tears now have a chance to induce the fear effect", "1/3 Leviathan transformation"],
    ItemPool: ["Devil Room", "Demon Beggar"],
    Quality:3,
    Image: "sprites/Collectible_Abaddon_Icon.png"
},
ID231 = {
    Name: "Ball of Tar",
    Description: "Sticky feet...",
    buff: ["Isaac leaves a trail behind him which will slow down enemies", "Tears have a chance to slow enemies and their projectiles for a short period of time"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Ball_of_Tar_Icon.png"
},
ID232 ={
    Name: "Stop Watch",
    Description: "Let's slow down a bit",
    buff: ["+0.3 Speed up", "Applies a permament light slow effect to all enemies and their projectiles"],
    ItemPool: ["Shop"],
    Quality:4,
    Image: "sprites/Collectible_Stop_Watch_Icon.png"
},
ID233 = {
    Name: "Tiny Planet",
    Description: "Orbiting tears + tange up",
    buff: ["Range greatly increased", "Grants spectral tears", "Tears now revolve around Isaac's body at a fixed distance until they hit the ground"],
    ItemPool:["Item Room"],
    Quality:0,
    Image: "sprites/Collectible_Tiny_Planet_Icon.png"
},
ID234 = {
    Name: "Infestation 2",
    Description: "Infestation shot",
    buff: ["Creates a friendly blue spider when you kill an enemy", "1/3 Spider Baby transformation"],
    ItemPool: ["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_Infestation_2_Icon.png"
},
ID236 = {
    Name: "E. Coli",
    Description: "Turdy Touch",
    buff: ["Turns normal enemies into poop if they touch you", "1/3 Oh Crap transformation"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_E._Coli_Icon.png"
},
ID237 ={
    Name: "Death's Touch",
    Description: "Penetrative shot + DMG up",
    buff: ["+1.5 Damage up", "-0.3 Tears down", "x2 Tear size", "Isaac's tears pierce through enemies"],
    ItemPool: ["Item Room", "Devil Room"],
    Quality:3,
    Image: "sprites/Collectible_Death's_Touch_Icon.png"
},
ID238 = {
    Name: "Key Piece #1",
    Description: "???",
    buff: ["Increases your chance to find an Angel Room instead of Devil Room", "First half of the key required to enter the door to the Mega Satan boss"],
    ItemPool: ["Angel Statue"],
    Quality:0,
    Image: "sprites/Collectible_Key_Piece_1_Icon.png"
},
ID239 = {
    Name: "Key Piece #2",
    Description: "???",
    buff: ["Increases your chance to find an Angel Room instead of Devil Room", "Second half of the key required to enter the door to the Mega Satan boss"],
    ItemPool: ["Angel Statue"],
    Quality:0,
    Image: "sprites/Collectible_Key_Piece_2_Icon.png"
},
ID240 = {
    Name: "Experimental Treatment",
    Description: "Some stats up, some stats down",
    buff: ["Randomly increases 4 of your stats, and decreases 2 of them", "1/3 Spun transformation"],
    ItemPool: ["Item Room", "Boss Room", "Demon Beggar"],
    Quality:1,
    Image: "sprites/Collectible_Experimental_Treatment_Icon.png"
},
ID241 = {
    Name: "Contract from Below",
    Description: "Wealth, but at what cost?",
    buff: ["Doubles all pickups and chests from clearing a room", "Gives 30% chance for room clear rewards to not spawn"],
    ItemPool: ["Devil Room", "Curse Room", "Demon Beggar"],
    Quality:3,
    Image: "sprites/Collectible_Contract_from_Below_Icon.png"
},
ID242 = {
    Name: "Infamy",
    Description: "Damage reduction",
    buff: ["Gives a 50% chance to not take damage from projectiles"],
    ItemPool:["Item Room", "Secret Room"],
    Quality:2,
    Image: "sprites/Collectible_Infamy_Icon.png"
},
ID243 = {
    Name: "Trinity Shield",
    Description: "You feel guarded",
    buff: ["Puts a shield in front of Isaac which blocks projectiles"],
    ItemPool: ["Angel Room"],
    Quality:2,
    Image: "sprites/Collectible_Trinity_Shield_Icon.png"
},
ID244 = {
    Name: "Tech.5",
    Description: "It's still being tested",
    buff: ["Gives Isaac a laser that will fire at random intervals in addition to your normal tears"],
    ItemPool: ["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_Tech.5_Icon.png"
},
ID245 = {
    Name: "20/20",
    Description: "Double shot",
    buff: ["Isaac now shoots two tears at once", "0.75x damage multiplier"],
    ItemPool: ["Item Room"],
    Quality:4,
    Image: "sprites/Collectible_20_20_Icon.png"
},
ID246 = {
    Name: "Blue Map",
    Description: "Secrets",
    buff: ["Reveals the locations of the secret and super secret rooms"],
    ItemPool: ["Shop", "Beggar", "Key Beggar"],
    Quality:2,
    Image: "sprites/Collectible_Blue_Map_Icon.png"
},
ID247 = {
    Name: "BFFS!",
    Description: "Your friends rule!",
    buff: ["Makes all of Isaac's familiar stronger and bigger", "Causes most familiars to deal double damage"],
    ItemPool: ["Shop", "Key Beggar"],
    Quality:2,
    Image: "sprites/Collectible_BFFS!_Icon.png"
},
ID248 = {
    Name: "Hive Mind",
    Description: "Giant spiders and flies",
    buff: ["Causes your friendly blue spiders and flies to become bigger and do x2 more damage", "1/3 Beelzebub transformation", "1/3 Spider Baby transformation"],
    ItemPool: ["Shop"],
    Quality:2,
    Image: "sprites/Collectible_Hive_Mind_Icon.png"
},
ID249 = {
    Name: "There's Options",
    Description: "More options",
    buff: ["Two items now spawn after beating a boss fight and the boss rush, however only one can be taken"],
    ItemPool: ["Shop"],
    Quality:3,
    Image: "sprites/Collectible_There's_Options_Icon.png"
},
ID250 = {
    Name: "Bogo Bombs",
    Description: "1+1 bombs",
    buff: ["All bombs pickups are now 1+1 bombs"],
    ItemPool: ["Shop"],
    Quality:1,
    Image: "sprites/Collectible_Bogo_Bombs_Icon.png"
},
ID251 = {
    Name: "Starter Deck",
    Description: "Extra card room",
    buff: ["Spawns a random card", "Isaac can now hold 2 cards or runes at once", "All future pill drops will now instead become cards"],
    ItemPool: ["Shop"],
    Quality:2,
    Image: "sprites/Collectible_Starter_Deck_Icon.png"
},
ID252 = {
    Name: "Little Baggy",
    Description: "Extra pill room",
    buff: ["Spawns a random pill", "Allows for 2 pills to be held", "Changes all card and rune drops into pills"],
    ItemPool: ["Shop"],
    Quality:0,
    Image: "sprites/Collectible_Little_Baggy_Icon.png"
},
ID253 = {
    Name: "Magic Scab",
    Description: "HP + luck up",
    buff: ["+1 HP up", "+1 Luck up", "Heals one red heart container when picked up"],
    ItemPool: ["Boss Room"],
    Quality:2,
    Image: "sprites/Collectible_Magic_Scab_Icon.png"
},
ID254 = {
    Name: "Blood Clot",
    Description: "DMG + range up",
    buff: ["+1 Damage up (Left eye only)", "+1.5 Range up (Left eye only)"],
    ItemPool: ["Boss Room"],
    Quality:2,
    Image: "sprites/Collectible_Blood_Clot_Icon.png"
},
ID255 = {
    Name: "Screw",
    Description: "Tears + shot speed up",
    buff: ["+0.5 Tears up", "+0.2 Shot Speed up"],
    ItemPool: ["Boss Room", "Gold/Stone Chest"],
    Quality:3,
    Image: "sprites/Collectible_Screw_Icon.png"
},
ID256 = {
    Name: "Hot Bombs",
    Description: "Burning blast +5 boms",
    buff: ["+5 bombs", "Grants immunity to fire", "Gives all bombs a burning effect when they explode, leaving fire on the floor which does damage to enemies"],
    ItemPool: ["Item Room", "Bomb Beggar"],
    Quality:1,
    Image: "sprites/Collectible_Hot_Bombs_icon.png"
},
ID257 = {
    Name: "Fire Mind",
    Description: "Flaming tears",
    buff: ["Isaac's tears now set enemies on fire, leaving a damage over time effect", "There is a chance that tears that hit enemies will explode leaving a small fire on the floor"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Fire_Mind_Icon.png"
},
ID258 = {
    Name: "Missing No.",
    Description: "Syntax error",
    buff: ["When picked up, and at the start of each floor this rerolls all your current items, giving you a new item to replace each of the ones you had"],
    ItemPool: ["Secret Room"],
    Quality:0,
    Image: "sprites/Collectible_Missing_No._Icon.png"
},
ID259 = {
    Name: "Dark Matter",
    Description: "Fear shot",
    buff: ["+1 Damage up", "Tears now have a chance to apply the fear effect to enemies"],
    ItemPool: ["Devil Room", "Demon Beggar"],
    Quality:3,
    Image: "sprites/Collectible_Dark_Matter_Icon.png"
},
ID260 = {
    Name: "Black Candle",
    Description: "Curse immunity + evil up",
    buff: ["+1 Black Heart", "Grants immunity to all floor curses", "+15% devil/angel room chance"],
    ItemPool:["Shop", "Curse Room"],
    Quality:3,
    Image: "sprites/Collectible_Black_Candle_Icon.png"
},
ID261 = {
    Name: "Proptosis",
    Description: "Short range mega tears",
    buff: ["Gives Isaac high damage tears with a short range", "The further the tear travels the less damage it does"],
    ItemPool: ["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_Proptosis_Icon.png"
},
ID262 = {
    Name: "Missing Page 2",
    Description: "Evil up + your enemies will pay",
    buff: ["+1 Black Heart", "If the total sum of all your health is at one heart after taking damage, the necronomicon effect will activate, dealing 40 damage to the entire room"],
    ItemPool: ["Devil Room", "Demon Beggar", "Secret Room"],
    Quality:0,
    Image: "sprites/Collectible_Missing_Page_2_icon.png"
},
ID264 ={
    Name: "Smart Fly",
    Description:"Revenge fly",
    buff: ["An orbital that will blocks shots and when Isaac gets hit, will seek out the nearest enemy and attack it", "1/3 Beelzebub transformation"],
    ItemPool: ["Item Room", "Key Beggar"],
    Quality:2,
    Image: "sprites/Collectible_Smart_Fly_icon.png"
},
ID265 = {
    Name: "Dry Baby",
    Description: "Immortal friend",
    buff: ["A familiar that follows Isaac and block any shots that hit it. If a projectile is block, it has a 10% chance to activate the Necronomicon effect, dealing 40 damage to the entire room", "1/3 Conjoined transformation"],
    ItemPool: ["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_Dry_Baby"
},
ID266 = {
    Name: "Juicy Sack",
    Description: "Sticky babies",
    buff: ["A familiar that follows Isaac around dropping white creep which slows down enemies", "Spawns 1-2 familiar blue spiders after every room", "1/3 Spider Baby transformation"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Juicy_Sack_Icon.png"
},
ID267 = {
    Name: "Robo-Baby 2.0",
    Description: "We worked out all the kinks",
    buff: ["A familiar that is controlled via the arrow keys and will automatically fire a laser if anything is in its line of sight", "1/3 Conjoined transformation"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Robo-Baby_2.0_icon.png"
},
ID268 = {
    Name: "Rotten Baby",
    Description: "Infested friend",
    buff: ["A familiar which follows Isaac and spawns a blue flies as you're firing tears", "1/3 Conjoined transformation"],
    ItemPool: ["Item Room", "Devil Room"],
    Quality:3,
    Image: "sprites/Collectible_Rotten_Baby_Icon.png"
},
ID269 = {
    Name: "Headless Baby",
    Description: "Bloody friend",
    buff: ["A familiar that follows Isaac and leaves blood creep on the floor as it floats, hurting enemies that walk over it", "1/3 Conjoined transformation"],
    ItemPool: ["Item Room", "Devil Room"],
    Quality:1,
    Image: "sprites/Collectible_Headless_Baby_Icon.png"
},
ID270 = {
    Name: "Leech",
    Description: "Blood Sucker",
    buff: ["A familiar that hunts down enemies and heals you for half a heart each time it eats one"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Leech_Icon.png"
},
ID271 = {
    Name: "Mystery Sack",
    Description: "?",
    buff: ["A bag that follows Isaac and drops a random heart, coin, bomb or key every 5-6 rooms"],
    ItemPool: ["Item Room", "Beggar", "Secret Room"],
    Quality:2,
    Image: "sprites/Collectible_Mystery_sack_Icon.png"
},
ID272 = {
    Name: "BBF",
    Description: "Big beautiful fly",
    buff: ["A large familiar that bounces around the room, exploding on contact with enemies", "1/3 Beelzebub transformation"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_BBF_Icon.png"
},
ID273 = {
    Name: "Bob's Brain",
    Description: "Bob's Brain",
    buff: ["A familiar that launches in the direction you are firing your tears and will explode on contact with enemies dealing damage and poisoning", "1/3 Bob transformation"],
    ItemPool: ["Item Room", "Rotten Beggar"],
    Quality:1,
    Image: "sprites/Collectible_Bob's_Brain_Icon.png"
},
ID274 = {
    Name: "Best Bud",
    Description: "Sworn protector",
    buff: ["When Isaac takes damage, a white attack fly will spawn that orbits him", "1/3 Beelzebub transformation"],
    ItemPool:["Item Room", "Key Beggar"],
    Quality:0,
    Image: "sprites/Collectible_Best_Bud_Icon.png"
},
ID275 = {
    Name: "Lil Brimstone",
    Description: "Evil friend",
    buff: ["A familiar that follows Isaac and can fire up and charge brimstone shots", "1/3 Conjoined transformation"],
    ItemPool: ["Item Room", "Devil Room"],
    Quality:2,
    Image: "sprites/Collectible_Lil_Brimstone_Icon.png"
},
ID276 = {
    Name: "Isaac's Heart",
    Description: "Protect it",
    buff: ["Prevents Isaac from taking any damage, but instead summons a familiar that follows you around. If it gets hit, Isaac will take damage"],
    ItemPool: ["Item Room"],
    Quality:0,
    Image: "sprites/Collectible_Isaac's_Heart_Icon.png"
},
ID277 = {
    Name: "Lil Haunt",
    Description: "Fear him",
    buff: ["A familiar that follows Isaac around and chases enemies close-by, damaging them and causing a fear effect"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Lil_Haunt_Icon.png"
},
ID278 = {
    Name: "Dark Bum",
    Description: "He wants to take your life",
    buff: ["A familiar that follows Isaac and collects red hearts, giving Isaac black hearts, pills, cards, runes or spiders in return", "1/3 Super Bum transformation"],
    ItemPool: ["Item Room", "Devil Room", "Demon Beggar"],
    Quality:3,
    Image: "sprites/Collectible_Dark_Bum_icon.png"
},
ID279 = {
    Name: "Big Fan",
    Description: "Fat protector",
    buff: ["A very large orbital that moves around Isaac very slowly, blocking shots and dealing contact damage", "1/3 Beelzebub transformation"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Big_Fan_Icon.png"
},
ID280 = {
    Name: "Sissy Long Legs",
    Description: "She loves you",
    buff: ["A friendly blue spider that walks around the room laying other blue spiders which attack enemies", "1/3 Spider Baby transformation"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Sissy_Long_legs_Icon.png"
},
ID281 = {
    Name: "Punching Bag",
    Description: "Scape goat",
    buff: ["Spawns a friendly mulligan that walks around the room.", "Enemies will sometimes target the Mulligan if he is closer"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Punching_Bag_icon.png"
},
ID282 = {
    Name: "How to Jump",
    Description: "It's time you learned how",
    buff: ["Makes Isaac leap in the air", "1/3 Bookworm transformation"],
    ItemPool: ["Item Room", "Library"],
    Quality:1,
    Image: "sprites/Collectible_How_To_Jump_Icon.png"
},
ID283 = {
    Name: "D100",
    Description: "REEROLLLLL!",
    buff: ["Activates D1, D4, The D6, D7, D8, D10, D12 and D20"],
    ItemPool: ["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_D100_Icon.png"
},
ID284 = {
    Name: "D4",
    Description: "Reroll into something else",
    buff: ["Re-rolls each item you currently have into another random item from the same item pool"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_D4_Icon.png"
},
ID285 = {
    Name: "D10",
    Description: "Rerolls enemies",
    buff: ["Rerolls all enemies in the room which are currently alive into another random type of enemy"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_D10_Icon.png"
},
ID286 = {
    Name: "Blank Card",
    Description: "Card Mimic",
    buff: ["Copies the effect of the card you are currently holding without consuming it"],
    ItemPool: ["Shop", "Secret Room"],
    Quality:2,
    Image: "sprites/Collectible_Blank_Card_Icon.png"
},
ID287 = {
    Name: "Book of Secrets",
    Description: "??????",
    buff: ["Has a chance of getting one of the three following effects: Treasure Map, Compass or Blue Map", "1/3 Bookworm transformation"],
    ItemPool: ["Item Room", "Library", "Secret Room"],
    Quality:1,
    Image: "sprites/Collectible_Book_of_Secrets_Icon.png"
},
ID288 = {
    Name: "Box of Spiders",
    Description: "It's a box of spiders",
    buff: ["Spawns 4-8 friendly blue spiders on the floor", "1/3 Spider Baby transformation"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Box_of_Spiders_Icon.png"
},
ID289 = {
    Name: "Red Candle",
    Description: "Flame on",
    buff: ["Upon pressing any fire button, a red flame will slide across the floor in that direction dealing contact damage"],
    ItemPool: ["Shop"],
    Quality:2,
    Image: "sprites/Collectible_Red_candle_Icon.png"
},
ID290 = {
    Name: "The Jar",
    Description: "Save your life",
    buff: ["Isaac can now pick up hearts while at full health, which will be stored and can be spawn again"],
    ItemPool: ["Shop"],
    Quality:0,
    Image: "sprites/Collectible_The_Jar_Icon.png"
},
ID291 = {
    Name: "Flush!",
    Description: "...",
    buff: ["Turns every normal enemy in the room into poop!", "1/3 Oh Crap transformation"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Flush!_Icon.png"
},
ID292 = {
    Name: "Satanic Bible",
    Description: "Reusable evil... but at what cost?",
    buff: ["+1 Black Heart", "Causes the boss item on the current floor to become a devil deal instead", "1/3 Bookworm transformation"],
    ItemPool: ["Item Room", "Library", "Devil Room"],
    Quality:4,
    Image: "sprites/Collectible_Satanic_Bible_icon.png"
},
ID293 = {
    Name: "Head of Krampus",
    Description: "Krampus rage",
    buff: ["Fires a 4 way bromstone laser in all cardinal directions"],
    ItemPool: ["Krampus"],
    Quality:2,
    Image: "sprites/Collectible_Head_of_Krampus_Icon.png"
},
ID294 = {
    Name: "Butter Bean",
    Description: "Reusable knockback",
    buff: ["Farts on nearby enemies and knock them backwards forcefully away from Isaac"],
    ItemPool: ["Item Room", "Beggar"],
    Quality:1,
    Image: "sprites/Collectible_Butter_Bean_Icon.png"
},
ID295 = {
    Name: "Magic Fingers",
    Description: "Pay to play",
    buff: ["Consumes a coin and deals damage to everything in the room"],
    ItemPool: ["Item Room", "Shop"],
    Quality:1,
    Image: "sprites/Collectible_Magic_Fingers_icon.png"
},
ID296 = {
    Name: "Converter",
    Description: "Convert your soul",
    buff: ["Converts 1 soul/black heart into 1 red heart container"],
    ItemPool:["Shop"],
    Quality:2,
    Image: "sprites/Collectible_Converter_Icon.png"
},
ID297 = {
    Name: "Pandora's Box",
    Description: "? ?",
    buff: ["Spawns a set of items or consumables based on which chapter you are currently on"],
    ItemPool: ["Shop", "Red Chest"],
    Quality:2,
    Image: "sprites/Collectible_Pandora's_Box_Icon.png"
},
ID298 = {
    Name:"Unicorn Stump",
    Description: "You feel stumped",
    buff: ["Turns Isaac invincible and gains +0.28 speed for 5 seconds","You cannot fire tears while the stump is active"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Unicorn_Stump_Icon.png"
},
ID299 = {
    Name: "Taurus",
    Description: "Speed down + rage is building",
    buff: ["-0.3 Speed down", "While in a hostile room your speed raises at a rate of +0.065 pre game tick. When you hit a speed of 2.0, Isaac will gain an invincibility effect for 5 seconds, increasing speed and allowing him to deal contact damage"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Taurus_Icon.png"
},
ID300 ={
    Name: "Aries",
    Description: "Ramming speed",
    buff: ["+0.25 Speed up", "Running into enemies while at high speed prevents contact damage and deals damage to enemies"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Aries_Icon.png"
},
ID301 = {
    Name: "Cancer",
    Description: "HP up + you feel protected",
    buff: ["+3 Soul Hearts", "After getting hit once, you gain a damage reducion for the rest of the room"],
    ItemPool: ["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_Cancer_Icon.png"
},
ID302 = {
    Name: "Leo",
    Description: "Stompy",
    buff: ["Isaac increases in size, and now has the ability to crush rocks by walking over them", "1/3 Stompy transformation"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Leo_Icon.png"
},
ID303 = {
    Name: "Virgo",
    Description: "You feel refreshed and protected",
    buff: ["A random chance when you take damage to get an invincibilty shield for 7 seconds", "Converts all negative pills into their positive counterparts"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Virgo_Icon.png"
},
ID304 = {
    Name: "Libra",
    Description: "You feel balanced",
    buff: ["+6 bombs", "+6 coins", "+6 coins", "Balances out your main stats to bring the high and low stats closer to an average value"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Libra_Icon.png"
},
ID305 = {
    Name: "Scorpio",
    Description: "Poison tears",
    buff: ["Isaac's tears now always apply poison effect"],
    ItemPool: ["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_Scorpio_Icon.png"
},
ID306 = {
    Name: "Sagittarius",
    Description: "Penetrative shot + speed up",
    buff: ["+0.2 Speed up", "Grants piercing tears"],
    ItemPool: ["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_Sagittarius_Icon.png"
},
ID307 = {
    Name: "Capricorn",
    Description: "All stats up",
    buff: ["+1 HP up", "+0.5 Damage up", "-1 Tear Delay", "+0.1 Speed up", "+0.75 Range up", "+1 Key", "+1 Bomb", "+1 Coin"],
    ItemPool: ["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_Capricorn_Icon.png"
},
ID308 = {
    Name: "Aquarius",
    Description: "A trail of tears",
    buff: ["Leaves a trail of tears on the floor behin Isaac which damages enemies that walk over it"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Aquarius_Icon.png"
},
ID309 = {
    Name: "Pisces",
    Description: "Tears up + knockback shot",
    buff: ["-1 Tear Delay", "x1.25 Tear size up", "Tears now have a bigger knockback effect"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Pisces_Icon.png"
},
ID310 = {
    Name: "Eve's Mascara",
    Description: "Shot speed down + DMG up",
    buff: ["x2 Damage Multiplier", "Tears down by half", "-0.5 Shot Speed down"],
    ItemPool: ["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_Eve's_Mascara_Icon.png"
},
ID311 = {
    Name: "Judas' Shadow",
    Description: "Sweet revenge",
    buff: ["When Isaac dies, you respawn in the previous room as Dark Judas with 2 black hearts for health"],
    ItemPool: ["Devil Room"],
    Quality:3,
    Image: "sprites/Collectible_Judas'_Shadow_Icon.png"
},
ID312 = {
    Name: "Maggy's Bow",
    Description: "HP up + you feel healthy",
    buff: ["+1 HP up", "Heals one red heart container when picked up", "All future red hearts now heal for double"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Maggy's_Bow_Icon.png"
},
ID313 = {
    Name: "Holy Mantle",
    Description: "Holy shield",
    buff: ["Each time you enter a new room, damage is negated for the first time you get hit", "1/3 Seraphim transformation"],
    ItemPool: ["Item Room", "Angel Room"],
    Quality:4,
    Image: "sprites/Collectible_Holy_Mantle_Icon.png"
},
ID314 = {
    Name: "Thunder Thighs",
    Description: "HP + speed down + you feel strong",
    buff: ["+1 HP up", "-0.4 Speed Down", "You can now break obstacles by walking over them", "Heals one red heart container when picked up"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Thunder_Thighs_Icon.png"
},
ID315 = {
    Name: "Strange Attractor",
    Description: "Magnetic tears",
    buff: ["Enemies and pickups are now magnetically attracted to Isaac's tears"],
    ItemPool: ["Item Room"],
    Quality:0,
    Image: "sprites/Collectible_Strange_Attractor_Icon.png"
},
ID316 = {
    Name: "Cursed Eye",
    Description: "Cursed charged shot",
    buff: ["Tears are now charged up and fired rapidly in a burst of 5 shots at once", "If you get hit while charging you are guaranteed to be teleported to another random room on the floor"],
    ItemPool: ["Item Room", "Secret Room"],
    Quality:0,
    Image: "sprites/Collectible_Cursed_Eye_Icon.png"
},
ID317 = {
    Name: "Mysterious Liquid",
    Description: "Toxic splash damage",
    buff: ["When Isaac's tears hit anything they leave a green toxic creep on the floor that damages enemies"],
    ItemPool: ["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_Mysterious_Liquid_Icon.png"
},
ID318 = {
    Name: "Gemini",
    Description: "Conjoined friend",
    buff: ["A familiar that is attached to Isaac, which will seek out and damage any enemies close by"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Gemini_Icon.png"
},
ID319 = {
    Name: "Cain's Other Eye",
    Description: "Near sighted friend",
    buff: ["A familiar that follows Isaac and copies all his tear modifiers/effect, but shoots in random directions", "Tears from this familiar deal 75% of Isaac's tear damage"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Cain's_Other_Eye_Icon.png"
},
ID320 = {
    Name: "???'s only friend",
    Description: "Controlled friend",
    buff: ["A familiar fly that can be moved around via use of the arrow keys dealing damage per tick", "1/3 Beelzebub transformation"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_???'s_only_friend_icon.png"
},
ID321 = {
    Name: "Samson's Chains",
    Description: "The ol' ball and chain",
    buff: ["An iron ball and chain to Isaac that you can fling around to deal damage per tick", "The ball will block enemy shots and can also destroy environmental objects"],
    ItemPool: ["Item Room", "Secret Room"],
    Quality:1,
    Image: "sprites/Collectible_Samson's_Chain_Icon.png"
},
ID322 = {
    Name: "Mongo Baby",
    Description: "Mongo friend",
    buff: ["A familiar that follows Isaac and copies the effect of one of your other familiars", "1/3 Conjoined transformation"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Mongo_Baby_Icon.png"
},
ID323 = {
    Name: "Isaac's Tears",
    Description: "Collected tears",
    buff: ["Fires 8 of Isaac's tears in a circle around him"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Isaac's_Tears_Icon.png"
},
ID324 = {
    Name: "Undefined",
    Description: "Undefined",
    buff: ["Teleports you to one of the following rooms at random: Item Room, Secret Room, Super Secret Room or I AM ERROR Room or the Black Market"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Undefined_Icon.png"
},
ID325 = {
    Name: "Scissors",
    Description: "Lose your head",
    buff: ["Cuts Isaac's head from body. Head will remain stationary and fire tears. His body can be controlled and spews blood nearby"],
    ItemPool: ["Item Room"],
    Quality:1,
    Image: "sprites/Collectible_Scissors_Icon.png"
},
ID326 = {
    Name: "Breath of Life",
    Description: "Invincibility at a cost",
    buff: ["Holding the active item button will deplete the charge bar. When the charge bar gets to zero it will grant you a brief period of invincibility"],
    ItemPool: ["Angel Room"],
    Quality:1,
    Image: "sprites/Collectible_breath_Of_Life_Icon.png"
},
ID327 = {
    Name: "The Polaroid",
    Description: "Fate chosen",
    buff: ["After taking damage, if you have half a red hearts or less, this item will give you an invincibility shield for 5 seconds", "Grants access to the Chest floor"],
    ItemPool: ["Mom's Foot Boss"],
    Quality:0,
    Image: "sprites/Collectible_The_Polaroid_Icon.png"
},
ID328 = {
    Name: "The Negative",
    Description: "Fate chosen",
    buff: ["+1 Damage up", "After taking damage, if you have half a red hearts or less, this item will deal 40 damage to all enemies in the room", "Gives you access to Dark Room floor"],
    ItemPool: ["Mom's Foot Boss"],
    Quality:0,
    Image: "sprites/Collectible_The_negative_icon.png"
},
ID329 = {
    Name: "The Ludovico Technique",
    Description: "Controlled tears",
    buff: ["You no longer shoot tears and instead now control a single large tear with the arrow keys"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_The_Ludovico_Technique_Icon.png"
},
ID330 = {
    Name: "Soy Milk",
    Description: "DMG down + tears way up",
    buff: ["Tears up *5.5", "-80% Damage down", "x0.5 Tear size"],
    ItemPool: ["Item Room"],
    Quality:2,
    Image: "sprites/Collectible_Soy_milk_Icon.png"
},
ID331 = {
    Name: "Godhead",
    Description: "God tears",
    buff: ["+0.5 Damage up", "-0.3 Tears down", "-0.3 Shot Speed down", "Isaac's tears become homing and have an aura around them, which will deal damage per tick to anything inside its radius", "1/3 Seraphim transformation"],
    ItemPool: ["Angel Room"],
    Quality:4,
    Image: "sprites/Collectible_Godhead_Icon.png"
},
ID332 = {
    Name: "Lazarus's Rags",
    Description: "Gives Isaac an extra life on death. The game considers you to be a different character (Lazarus II) when this effect activates",
    buff: ["Item Room", "Angel Room"],
    ItemPool: ["Item Room", "Angel Room"],
    Quality:1,
    Image: "sprites/Collectible_Lazarus's_Rags_Icon.png"
},
ID333 = {
    Name: "The Mind",
    Description: "I know all",
    buff: ["Gives Isaac a full mapping effect, revealing the entire floor and locations of all secret rooms"],
    ItemPool: ["Item Room", "Angel Room"],
    Quality:3,
    Image: "sprites/Collectible_The_Mind_Icon.png"
},
ID334 = {
    Name: "The Body",
    Description: "I feel all",
    buff: ["+3 Health up"],
    ItemPool: ["Item Room", "Angel Room"],
    Quality:3,
    Image: "sprites/Collectible_The_Body_Icon.png"
},
ID335 = {
    Name: "The Soul",
    Description: "I am All",
    buff: ["+2 Soul Hearts", "Enemy projectiles will now slowly curse away from Isaac and avoid hitting him"],
    ItemPool: ["Item Room", "Angel Room"],
    Quality:3,
    Image: "sprites/Collectible_The_Soul_Icon.png"
},
ID336 = {
    Name: "Dead Onion",
    Description: "Toxic aura tears",
    buff: ["Isaac's tears vecome large brown and are piercing + spectral", "-1.2 Range Down", "-0.4 Shot Speed Down", "x1.5 Tear Size"],
    ItemPool: ["Item Room"],
    Quality:3,
    Image: "sprites/Collectible_Dead_Onion_Icon.png"
},
ID337 = {
    Name: "Broken Watch",
    Description: "I think it's broken",
    buff: ["Upon entering every 4th unexplored room, this item will either slow down or speed up all enemies in the room"],
    ItemPool: ['Shop'],
    Quality:1,
    Image: "sprites/Collectible_Broken_Watch_icon.png"
},
ID338 = {
    Name: "Boomerang",
    Description: "It will never leave you",
    buff: ["Can be thrown to stun any enemies it hits and deal damage", "Can also be used to grab pickups and consumables from a distance"],
    ItemPool: ["Shop"],
    Quality:1,
    Image: "sprites/Collectible_Boomerang_Icon.png"
},
ID339 = {
    Name: "Safety Pin",
    Description: "Evil up + range + shot speed",
    buff: ["+1.5 Range up", "+0.16 Shot Speed up", "+1 Black Heart"],
    ItemPool: ["Boss Room"],
    Quality:1,
    Image: "sprites/Collectible_Safety_Pin_Icon.png"
},
Id340 = {
    Name: "Caffeine Pill",
    Description: "Speed up + size down",
    buff: ["+0.3 Speed up", "Isaac's size down", "Spawns a random pill when picked up"],
    ItemPool: ["Boss Room"],
    Quality:1,
    Image: "sprites/Collectible_caffeine_pill_icon.png"
},
ID341 = {
    Name: "Torn Photo",
    Description: "Tears + shot speed up",
    buff: ["+0.7 Tears up", "+0.16 Shot Speed up"],
    ItemPool: ["Boss Room", "Gold/Stone Chest"],
    Quality:3,
    Image: "sprites/Collectible_Torn_photo_icon.png"
},
Id342 = {
    Name: "Blue Cap",
    Description: "HP + tears + shot speed up",
    buff: ["+1 HP up", "+0.7 Tears up", "-0.16 Shot Speed down", "Heals one red heart container when picked up", "1/3 Fun Guy transformation"],
    ItemPool: ["Boss Room"],
    Quality:3,
    Image: "sprites/Collectible_Blue_Cap_icon.png"
},
ID343 = {
    Name: "Latch Key",
    Description: "Luck up",
    buff: ["+1 Luck up", "+1 Soul Heart", "Spawns 2 keys on the ground"],
    ItemPool: ["Boss Room", "Gold/Stone Chest", "Key Beggar"],
    Quality:1,
    Image: "sprites/Collectible_Latch_Key_icon.png"
},
ID344 = {
    Name: "Match Book",
    Description: "Evil up",
    buff: ["+1 Black Heart", "+3 Bombs", "Spawns the Match Stick trinket"],
    ItemPool: ["Boss Room", "Gold/Stone Chest"],
    Quality:1,
    Image: "sprites/Collectible_Match_Book_icon.png"
},
ID345 = {
    Name: "Synthoil",
    Description: "DMG up + range",
    buff: ["+1 Damage up", "+1.5 Range up", "1/3 Spun transformation"],
    ItemPool: ["Boss Room"],
    Quality:3,
    Image: "sprites/Collectible_Synthoil_icon.png"
},
ID346 = {
    Name: "A Snack",
    Description: "HP up",
    buff: ["+1 HP up", "Heals one red heart container when picked up"],
    ItemPool: ["Boss Room"],
    Quality:1,
    Image: "sprites/Collectible_A_Snack_Icon.png"
},
]
var play = function(){
    var wybory = document.getElementsByClassName("games")
         for(var i =0; i<wybory.length; i++){
             wybory[i].style.display="none"
         }
         document.getElementById("next").style.display="none"
         document.getElementById("wybor").style.display="none"
 }
 var randomID = function(){
    var ID = Math.floor(Math.random() *rebirthgame.length)
    var ItemID = rebirthgame[ID]
    console.log(ItemID.Name)
    
     var slowo = ItemID.Name
   var dlugosc = slowo.length
    var changedword =''
    
   
        for(var i =0; i<dlugosc; i++){
        if(slowo[i] === " "){
            changedword+= " "
        }
        else if(slowo[i] === "'"){
            changedword+= "'"
        }
        else{
            changedword+= "*"
        }
    }
   
    document.getElementById("actualgame").style.display="flex"
    document.getElementById("nazwa").innerHTML=changedword
}

