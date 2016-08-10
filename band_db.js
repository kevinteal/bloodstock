// JavaScript Document

function set_up_band_db(){
	//alert("DB");
	
	
		//Main Stage = 0
		//second stage = 1
		//thrid stage = 2
		//fourth = 3
		//fifth = 4
		
		db.transaction(function (tx) {		
		
		//tx.executeSql('DROP TABLE IF EXISTS bands');
		//tx.executeSql('DROP TABLE IF EXISTS bands_2016_v1');
		
		tx.executeSql('CREATE TABLE IF NOT EXISTS bands_2016_v1 (id UNIQUE, band_name TEXT, stage TEXT, day INTEGER, start_time INTEGER, finish_time INTEGER, band_fav INTEGER, stage_rank INTEGER, day_name, video_link TEXT)');
		
		//Thursday
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (1, "Hark", "Ronnie James Dio Stage", 20160812, 1045, 1125, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (2, "Gloryhammer", "Ronnie James Dio Stage", 20160812, 1145, 1225, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (3, "Evil Scarecrow", "Ronnie James Dio Stage", 20160812, 1250, 1330, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (4, "Misery Loves Co", "Ronnie James Dio Stage", 20160812, 1355, 1440, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (5, "Stuck Mojo", "Ronnie James Dio Stage", 20160812, 1505, 1550, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (6, "Corrosion Of Conformity", "Ronnie James Dio Stage", 20160812, 1620, 1705, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (7, "Venom", "Ronnie James Dio Stage", 20160812, 1740, 1840, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (8, "Behemoth", "Ronnie James Dio Stage", 20160812, 1915, 2015, 0, 0, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (9, "Twisted Sister", "Ronnie James Dio Stage", 20160812, 2100, 2230, 0, 0, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (10, "Cambion", "Ronnie James Dio Stage", 20160813, 1045, 1125, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (11, "Kill 2 This", "Ronnie James Dio Stage", 20160813, 1145, 1225, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (12, "Vallenfyre", "Ronnie James Dio Stage", 20160813, 1245, 1325, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (13, "Akercocke", "Ronnie James Dio Stage", 20160813, 1350, 1435, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (14, "Rotting Christ", "Ronnie James Dio Stage", 20160813, 1455, 1540, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (15, "Fear Factory", "Ronnie James Dio Stage", 20160813, 1605, 1705, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (16, "Paradise Lost", "Ronnie James Dio Stage", 20160813, 1740, 1840, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (17, "Gojira", "Ronnie James Dio Stage", 20160813, 1915, 2015, 0, 0, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (18, "Mastodon", "Ronnie James Dio Stage", 20160813, 2100, 2230, 0, 0, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (19, "Ghost Bath", "Ronnie James Dio Stage", 20160814, 1045, 1125, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (20, "Heart Of A Coward", "Ronnie James Dio Stage", 20160814, 1145, 1225, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (21, "Unearth", "Ronnie James Dio Stage", 20160814, 1245, 1325, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (22, "Metal Allegiance", "Ronnie James Dio Stage", 20160814, 1345, 1430, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (23, "Satyricon", "Ronnie James Dio Stage", 20160814, 1450, 1550, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (24, "Dragonforce", "Ronnie James Dio Stage", 20160814, 1620, 1705, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (25, "Symphony X", "Ronnie James Dio Stage", 20160814, 1740, 1840, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (26, "Anthrax", "Ronnie James Dio Stage", 20160814, 1915, 2015, 0, 0, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (27, "Slayer", "Ronnie James Dio Stage", 20160814, 2100, 2230, 0, 0, "Sunday")');
		
		
		
		//Thursday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (28, "Sublime Eyes", "Sophie Lancaster Stage", 20160811, 1800, 1830, 0, 1, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (29, "Karybdis", "Sophie Lancaster Stage", 20160811, 1850, 1920, 0, 1, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (30, "Sumer", "Sophie Lancaster Stage", 20160811, 1940, 2010, 0, 1, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (31, "Psykosis", "Sophie Lancaster Stage", 20160811, 2030, 2110, 0, 1, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (32, "Phil Campbell And The Bastard Sons", "Sophie Lancaster Stage", 20160811, 2145, 2245, 0, 1, "Thursday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (33, "4 Djota Welcome Party Night", "Sophie Lancaster Stage", 20160811, 2255, 0200, 0, 1, "Thursday")');
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (34, "Fury", "Sophie Lancaster Stage", 20160812, 1100, 1130, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (35, "Boss Keloid", "Sophie Lancaster Stage", 20160812, 1150, 1220, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (36, "Brutai", "Sophie Lancaster Stage", 20160812, 1240, 1310, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (37, "Anticlone", "Sophie Lancaster Stage", 20160812, 1330, 1400, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (38, "Meta Stasis", "Sophie Lancaster Stage", 20160812, 1420, 1500, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (39, "The Charm The Fury", "Sophie Lancaster Stage", 20160812, 1520, 1600, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (40, "Foetal Juice", "Sophie Lancaster Stage", 20160812, 1625, 1705, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (41, "Xii Boar", "Sophie Lancaster Stage", 20160812, 1730, 1810, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (42, "Beholder", "Sophie Lancaster Stage", 20160812, 1840, 1925, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (43, "Beyond The Black", "Sophie Lancaster Stage", 20160812, 2000, 2100, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (44, "Guest Dj Ringmaster Monty Blitzfist & Kraven Morrdeth", "Sophie Lancaster Stage", 20160812, 2115, 2200, 0, 1, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (45, "Diamondhead", "Sophie Lancaster Stage", 20160812, 2240, 2355, 0, 1, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (46, "Heretic Order", "Sophie Lancaster Stage", 20160813, 1100, 1130, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (47, "Mage", "Sophie Lancaster Stage", 20160813, 1150, 1220, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (48, "The Raven Age", "Sophie Lancaster Stage", 20160813, 1240, 1310, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (49, "This Is Turin", "Sophie Lancaster Stage", 20160813, 1330, 1400, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (50, "Vodum", "Sophie Lancaster Stage", 20160813, 1420, 1500, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (51, "The King Is Blind", "Sophie Lancaster Stage", 20160813, 1520, 1600, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (52, "Misanthrope", "Sophie Lancaster Stage", 20160813, 1625, 1705, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (53, "One Machine", "Sophie Lancaster Stage", 20160813, 1730, 1810, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (54, "Bull Riff Stampede", "Sophie Lancaster Stage", 20160813, 1840, 1925, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (55, "Shining", "Sophie Lancaster Stage", 20160813, 2000, 2100, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (56, "Guest Djs Voodoo Rocks", "Sophie Lancaster Stage", 20160813, 2115, 2200, 0, 1, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (57, "Acid Reign", "Sophie Lancaster Stage", 20160813, 2240, 2355, 0, 1, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (58, "Desert Storm", "Sophie Lancaster Stage", 20160814, 1100, 1130, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (59, "Sanguine", "Sophie Lancaster Stage", 20160814, 1150, 1220, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (60, "Krysthia", "Sophie Lancaster Stage", 20160814, 1240, 1310, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (61, "Divine Chaos", "Sophie Lancaster Stage", 20160814, 1330, 1400, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (62, "Witchsorrow", "Sophie Lancaster Stage", 20160814, 1420, 1500, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (63, "Derange", "Sophie Lancaster Stage", 20160814, 1520, 1600, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (64, "Whispered", "Sophie Lancaster Stage", 20160814, 1625, 1705, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (65, "Vektor", "Sophie Lancaster Stage", 20160814, 1730, 1810, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (66, "Memoriam", "Sophie Lancaster Stage", 20160814, 1840, 1925, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (67, "Pythia", "Sophie Lancaster Stage", 20160814, 2000, 2100, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (68, "Guest Dj Anna Dumpe", "Sophie Lancaster Stage", 20160814, 2115, 2200, 0, 1, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (69, "Goatwhore", "Sophie Lancaster Stage", 20160814, 2240, 2355, 0, 1, "Sunday")');


//Thursday
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (70, "Witch Tripper", "Newblood Stage", 20160812, 1030, 1100, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (71, "Redeye Revival", "Newblood Stage", 20160812, 1115, 1145, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (72, "Souls Of Jack Ketch", "Newblood Stage", 20160812, 1200, 1230, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (73, "Seed Of Sorrow", "Newblood Stage", 20160812, 1245, 1315, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (74, "Husk", "Newblood Stage", 20160812, 1330, 1400, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (75, "Garganjua", "Newblood Stage", 20160812, 1415, 1445, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (76, "Vehement", "Newblood Stage", 20160812, 1500, 1530, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (77, "Burning The Dream", "Newblood Stage", 20160812, 1545, 1615, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (78, "End Of Salvation", "Newblood Stage", 20160812, 1630, 1700, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (79, "Triverse Massacre", "Newblood Stage", 20160812, 1715, 1745, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (80, "The Crawling", "Newblood Stage", 20160812, 1800, 1830, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (81, "Agrona", "Newblood Stage", 20160812, 1845, 1915, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (82, "Exhumation", "Newblood Stage", 20160812, 1930, 2000, 0, 2, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (83, "Comedy Hour – David Jordan, Ingrid Dahle, Chris Brooker, Andrew Oneill", "Newblood Stage", 20160812, 2015, 2115, 0, 2, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (84, "Black Ink Sun", "Newblood Stage", 20160813, 1030, 1100, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (85, "Bearfist", "Newblood Stage", 20160813, 1115, 1145, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (86, "10 Ton Slug", "Newblood Stage", 20160813, 1200, 1230, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (87, "Heriot", "Newblood Stage", 20160813, 1245, 1315, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (88, "Vendetta Ukhc", "Newblood Stage", 20160813, 1330, 1400, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (89, "Ramage Inc", "Newblood Stage", 20160813, 1415, 1445, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (90, "Famyne", "Newblood Stage", 20160813, 1500, 1530, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (91, "Conjurer", "Newblood Stage", 20160813, 1545, 1615, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (92, "After The Abduction", "Newblood Stage", 20160813, 1630, 1700, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (93, "Mordrake", "Newblood Stage", 20160813, 1715, 1745, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (94, "Regulus", "Newblood Stage", 20160813, 1800, 1830, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (95, "The Face Of Ruin", "Newblood Stage", 20160813, 1845, 1915, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (96, "Poseidon", "Newblood Stage", 20160813, 1930, 2000, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (97, "Hobgoblin Pour Off", "Newblood Stage", 20160813, 2015, 2030, 0, 2, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (98, "Comedy – Jim Smallman, Will Hodgson, Jonathan Mayor", "Newblood Stage", 20160813, 2030, 2115, 0, 2, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (99, "Visions Of Disfigurement", "Newblood Stage", 20160814, 1030, 1100, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (100, "Pteroglyph", "Newblood Stage", 20160814, 1115, 1145, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (101, "Kahtet", "Newblood Stage", 20160814, 1200, 1230, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (102, "Far From History", "Newblood Stage", 20160814, 1245, 1315, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (103, "I Saw The World Burn", "Newblood Stage", 20160814, 1330, 1400, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (104, "Art Of Deception (nor)", "Newblood Stage", 20160814, 1415, 1445, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (105, "Rabid Bitch Of The North", "Newblood Stage", 20160814, 1500, 1530, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (106, "Firebomb", "Newblood Stage", 20160814, 1545, 1615, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (107, "The John Does Burial", "Newblood Stage", 20160814, 1630, 1700, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (108, "Chronicles", "Newblood Stage", 20160814, 1715, 1745, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (109, "Valous", "Newblood Stage", 20160814, 1800, 1830, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (110, "Footprints In The Custard", "Newblood Stage", 20160814, 1845, 1915, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (111, "Gutlocker", "Newblood Stage", 20160814, 1930, 2000, 0, 2, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (112, "Andrew Oneil History Of Metal", "Newblood Stage", 20160814, 2015, 2115, 0, 2, "Sunday")');
		
		
		//Thursday
//Friday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (113, "Isarnos", "Jagermeister Stage", 20160812, 1330, 1355, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (114, "The Hyena Kill", "Jagermeister Stage", 20160812, 1430, 1455, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (115, "Chasing Dragons", "Jagermeister Stage", 20160812, 1550, 1620, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (116, "Fueled Hate", "Jagermeister Stage", 20160812, 1705, 1735, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (117, "Vrona", "Jagermeister Stage", 20160812, 1840, 1915, 0, 3, "Friday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (118, "2 Tales Of Woe", "Jagermeister Stage", 20160812, 2015, 2055, 0, 3, "Friday")');
//Saturday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (119, "Cybernetic Witchcult", "Jagermeister Stage", 20160813, 1325, 1350, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (120, "Pulverise", "Jagermeister Stage", 20160813, 1435, 1500, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (121, "Zlatanera", "Jagermeister Stage", 20160813, 1540, 1605, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (122, "Broken", "Jagermeister Stage", 20160813, 1705, 1735, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (123, "Vice", "Jagermeister Stage", 20160813, 1840, 1915, 0, 3, "Saturday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (124, "Vicious Nature", "Jagermeister Stage", 20160813, 2015, 2055, 0, 3, "Saturday")');
//Sunday
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (125, "Jukebox Monkey", "Jagermeister Stage", 20160814, 1330, 1355, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (126, "Outright Resistance", "Jagermeister Stage", 20160814, 1440, 1505, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (127, "Aklash", "Jagermeister Stage", 20160814, 1550, 1620, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (128, "Sodomized Cadaver", "Jagermeister Stage", 20160814, 1705, 1735, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (129, "Dirty King", "Jagermeister Stage", 20160814, 1840, 1915, 0, 3, "Sunday")');
tx.executeSql('INSERT INTO bands_2016_v1 (id, band_name, stage, day, start_time, finish_time, band_fav, stage_rank, day_name) VALUES (130, "Attica Rage", "Jagermeister Stage", 20160814, 2015, 2055, 0, 3, "Sunday")');
		
});
db.transaction(function (tx) {	



		set_up_main_page();
	});
}













