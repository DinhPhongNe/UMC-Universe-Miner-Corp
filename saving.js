function legacySave(UMCdata) {
	"use strict";
	var localSave = $.extend({
		versionNumber: versionNumber,
		companyName: companyName,
		plasma: plasma,
		PSU: PSU,
		PSUT2: PSUT2,
		heater: heater,
		heaterToggled: heaterToggled,
		plasmatic: plasmatic,
		plasmaticToggled: plasmaticToggled,
		bath: bath,
		bathToggled: bathToggled,
		energy: energy,
		battery: battery,
		batteryT2: batteryT2,
		batteryT3: batteryT3,
		batteryT4: batteryT4,
		batteryT5: batteryT5,
		charcoalEngine: charcoalEngine,
		solarPanel: solarPanel,
		methaneStation: methaneStation,
		nuclearStation: nuclearStation,
		magmatic: magmatic,
		fusionReactor: fusionReactor,
		oil: oil,
		oilStorage: oilStorage,
		oilNextStorage: oilNextStorage,
		pump: pump,
		pumpjack: pumpjack,
		oilField: oilField,
		oilRig: oilRig,
		metal: metal,
		metalStorage: metalStorage,
		metalNextStorage: metalNextStorage,
		miner: miner,
		heavyDrill: heavyDrill,
		gigaDrill: gigaDrill,
		quantumDrill: quantumDrill,
		gem: gem,
		gemStorage: gemStorage,
		gemNextStorage: gemNextStorage,
		gemMiner: gemMiner,
		advancedDrill: advancedDrill,
		diamondDrill: diamondDrill,
		carbyneDrill: carbyneDrill,
		charcoal: charcoal,
		charcoalStorage: charcoalStorage,
		charcoalNextStorage: charcoalNextStorage,
		charcoalToggled: charcoalToggled,
		woodburner: woodburner,
		furnace: furnace,
		furnaceWoodInput: furnaceWoodInput,
		kiln: kiln,
		fryer: fryer,
		wood: wood,
		woodStorage: woodStorage,
		woodNextStorage: woodNextStorage,
		woodcutter: woodcutter,
		laserCutter: laserCutter,
		deforester: deforester,
		infuser: infuser,
		science: science,
		lab: lab,
		labT2: labT2,
		labT3: labT3,
		labT4: labT4,
		labT5: labT5,
		rocket: rocket,
		rocketFuel: rocketFuel,
		rocketFuelToggled: rocketFuelToggled,
		chemicalPlant: chemicalPlant,
		oxidisation: oxidisation,
		hydrazine: hydrazine,
		lunarite: lunarite,
		lunariteStorage: lunariteStorage,
		lunariteNextStorage: lunariteNextStorage,
		methane: methane,
		methaneStorage: methaneStorage,
		methaneNextStorage: methaneNextStorage,
		titanium: titanium,
		titaniumStorage: titaniumStorage,
		titaniumNextStorage: titaniumNextStorage,
		gold: gold,
		goldStorage: goldStorage,
		goldNextStorage: goldNextStorage,
		silver: silver,
		silverStorage: silverStorage,
		silverNextStorage: silverNextStorage,
		silicon: silicon,
		siliconStorage: siliconStorage,
		siliconNextStorage: siliconNextStorage,
		moonWorker: moonWorker,
		moonDrill: moonDrill,
		moonQuarry: moonQuarry,
		planetExcavator: planetExcavator,
		vacuum: vacuum,
		suctionExcavator: suctionExcavator,
		spaceCow: spaceCow,
		vent: vent,
		explorer: explorer,
		lunariteDrill: lunariteDrill,
		pentaDrill: pentaDrill,
		titanDrill: titanDrill,
		droid: droid,
		destroyer: destroyer,
		deathStar: deathStar,
		actuator: actuator,
		scout: scout,
		spaceLaser: spaceLaser,
		bertha: bertha,
		cannon: cannon,
		blowtorch: blowtorch,
		scorcher: scorcher,
		annihilator: annihilator,
		desert: desert,
		researchUnlocked: researchUnlocked,
		researched: researched,
		available: available,
		tabsUnlocked: tabsUnlocked,
		resourcesUnlocked: resourcesUnlocked,
		noBorder: noBorder,
		rocketLaunched: rocketLaunched,
		techUnlocked: techUnlocked,
		meteoriteUnlocked: meteoriteUnlocked,
		buttonsHidden: buttonsHidden,
		explored: explored,
		uranium: uranium,
		uraniumStorage: uraniumStorage,
		uraniumNextStorage: uraniumNextStorage,
		activated: activated,
		grinder: grinder,
		cubic: cubic,
		enricher: enricher,
		recycler: recycler,
		lava: lava,
		lavaStorage: lavaStorage,
		lavaNextStorage: lavaNextStorage,
		crucible: crucible,
		extractor: extractor,
		extruder: extruder,
		veluptuator: veluptuator,
		hydrogen: hydrogen,
		hydrogenStorage: hydrogenStorage,
		hydrogenNextStorage: hydrogenNextStorage,
		collector: collector,
		magnet: magnet,
		eCell: eCell,
		hindenburg: hindenburg,
		helium: helium,
		heliumStorage: heliumStorage,
		heliumNextStorage: heliumNextStorage,
		drone: drone,
		tanker: tanker,
		compressor: compressor,
		skimmer: skimmer,
		ice: ice,
		iceStorage: iceStorage,
		iceNextStorage: iceNextStorage,
		icePick: icePick,
		iceDrill: iceDrill,
		freezer: freezer,
		mrFreeze: mrFreeze,
		meteorite: meteorite,
		meteoriteStorage: meteoriteStorage,
		meteoriteNextStorage: meteoriteNextStorage,
		meteoriteToggled: meteoriteToggled,
		printer: printer,
		web: web,
		smasher: smasher,
		nebulous: nebulous,
		dyson: dyson,
		sphere: sphere,
		swarm: swarm,
		ring: ring,
		antimatter: antimatter,
		antimatterStorage: antimatterStorage,
		antimatterToggled: antimatterToggled,
		planetNuke: planetNuke,
		condensator: condensator,
		fossilator: fossilator,
		multiDrill: multiDrill,
		diamondChamber: diamondChamber,
		microPollutor: microPollutor,
		forest: forest,
		cloner: cloner,
		interCow: interCow,
		club: club,
		philosopher: philosopher,
		werewolf: werewolf,
		tardis: tardis,
		harvester: harvester,
		cage: cage,
		overexchange: overexchange,
	}, UMCdata);

	return localSave;
}

function legacyLoad(UMCUMCsavegame){
	"use strict";
	
	if(UMCUMCsavegame){
		if(typeof UMCsavegame.companyName !== "undefined") companyName = UMCsavegame.companyName;
		if(typeof UMCsavegame.plasma !== "undefined") plasma = UMCsavegame.plasma;
		if(typeof UMCsavegame.PSU !== "undefined") PSU = UMCsavegame.PSU;
		if(typeof UMCsavegame.PSUT2 !== "undefined") PSUT2 = UMCsavegame.PSUT2;
		if(typeof UMCsavegame.heater !== "undefined") heater = UMCsavegame.heater;
		if(typeof UMCsavegame.heaterToggled !== "undefined") heaterToggled = UMCsavegame.heaterToggled;
		if(typeof UMCsavegame.plasmatic !== "undefined") plasmatic = UMCsavegame.plasmatic;
		if(typeof UMCsavegame.plasmaticToggled !== "undefined") plasmaticToggled = UMCsavegame.plasmaticToggled;
		if(typeof UMCsavegame.bath !== "undefined") bath = UMCsavegame.bath;
		if(typeof UMCsavegame.bathToggled !== "undefined") bathToggled = UMCsavegame.bathToggled;
		if(typeof UMCsavegame.energy !== "undefined") energy = UMCsavegame.energy;
		if(typeof UMCsavegame.battery !== "undefined") battery = UMCsavegame.battery;
		if(typeof UMCsavegame.batteryT2 !== "undefined") batteryT2 = UMCsavegame.batteryT2;
		if(typeof UMCsavegame.batteryT3 !== "undefined") batteryT3 = UMCsavegame.batteryT3;
		if(typeof UMCsavegame.batteryT4 !== "undefined") batteryT4 = UMCsavegame.batteryT4;
		if(typeof UMCsavegame.batteryT5 !== "undefined") batteryT5 = UMCsavegame.batteryT5;
		if(typeof UMCsavegame.charcoalEngine !== "undefined") charcoalEngine = UMCsavegame.charcoalEngine;
		if(typeof UMCsavegame.solarPanel !== "undefined") solarPanel = UMCsavegame.solarPanel;
		if(typeof UMCsavegame.methaneStation !== "undefined") methaneStation = UMCsavegame.methaneStation;
		if(typeof UMCsavegame.nuclearStation !== "undefined") nuclearStation = UMCsavegame.nuclearStation;
		if(typeof UMCsavegame.magmatic !== "undefined") magmatic = UMCsavegame.magmatic;
		if(typeof UMCsavegame.fusionReactor !== "undefined") fusionReactor = UMCsavegame.fusionReactor;
		if(typeof UMCsavegame.oil !== "undefined") oil = UMCsavegame.oil;
		if(typeof UMCsavegame.oilStorage !== "undefined") oilStorage = UMCsavegame.oilStorage;
		if(typeof UMCsavegame.oilNextStorage !== "undefined") oilNextStorage = UMCsavegame.oilNextStorage;
		if(typeof UMCsavegame.pump !== "undefined") pump = UMCsavegame.pump;
		if(typeof UMCsavegame.pumpjack !== "undefined") pumpjack = UMCsavegame.pumpjack;
		if(typeof UMCsavegame.oilField !== "undefined") oilField = UMCsavegame.oilField;
		if(typeof UMCsavegame.oilRig !== "undefined") oilRig = UMCsavegame.oilRig;
		if(typeof UMCsavegame.metal !== "undefined") metal = UMCsavegame.metal;
		if(typeof UMCsavegame.metalStorage !== "undefined") metalStorage = UMCsavegame.metalStorage;
		if(typeof UMCsavegame.metalNextStorage !== "undefined") metalNextStorage = UMCsavegame.metalNextStorage;
		if(typeof UMCsavegame.miner !== "undefined") miner = UMCsavegame.miner;
		if(typeof UMCsavegame.heavyDrill !== "undefined") heavyDrill = UMCsavegame.heavyDrill;
		if(typeof UMCsavegame.gigaDrill !== "undefined") gigaDrill = UMCsavegame.gigaDrill;
		if(typeof UMCsavegame.quantumDrill !== "undefined") quantumDrill = UMCsavegame.quantumDrill;
		if(typeof UMCsavegame.gem !== "undefined") gem = UMCsavegame.gem;
		if(typeof UMCsavegame.gemStorage !== "undefined") gemStorage = UMCsavegame.gemStorage;
		if(typeof UMCsavegame.gemNextStorage !== "undefined") gemNextStorage = UMCsavegame.gemNextStorage;
		if(typeof UMCsavegame.gemMiner !== "undefined") gemMiner = UMCsavegame.gemMiner;
		if(typeof UMCsavegame.advancedDrill !== "undefined") advancedDrill = UMCsavegame.advancedDrill;
		if(typeof UMCsavegame.diamondDrill !== "undefined") diamondDrill = UMCsavegame.diamondDrill;
		if(typeof UMCsavegame.carbyneDrill !== "undefined") carbyneDrill = UMCsavegame.carbyneDrill;
		if(typeof UMCsavegame.charcoal !== "undefined") charcoal = UMCsavegame.charcoal;
		if(typeof UMCsavegame.charcoalStorage !== "undefined") charcoalStorage = UMCsavegame.charcoalStorage;
		if(typeof UMCsavegame.charcoalNextStorage !== "undefined") charcoalNextStorage = UMCsavegame.charcoalNextStorage;
		if(typeof UMCsavegame.charcoalToggled !== "undefined") charcoalToggled = UMCsavegame.charcoalToggled;
		if(typeof UMCsavegame.woodburner !== "undefined") woodburner = UMCsavegame.woodburner;
		if(typeof UMCsavegame.furnace !== "undefined") furnace = UMCsavegame.furnace;
		if(typeof UMCsavegame.furnaceWoodInput !== "undefined") furnaceWoodInput = UMCsavegame.furnaceWoodInput;
		if(typeof UMCsavegame.kiln !== "undefined") kiln = UMCsavegame.kiln;
		if(typeof UMCsavegame.fryer !== "undefined") fryer = UMCsavegame.fryer;
		if(typeof UMCsavegame.wood !== "undefined") wood = UMCsavegame.wood;
		if(typeof UMCsavegame.woodStorage !== "undefined") woodStorage = UMCsavegame.woodStorage;
		if(typeof UMCsavegame.woodNextStorage !== "undefined") woodNextStorage = UMCsavegame.woodNextStorage;
		if(typeof UMCsavegame.woodcutter !== "undefined") woodcutter = UMCsavegame.woodcutter;
		if(typeof UMCsavegame.laserCutter !== "undefined") laserCutter = UMCsavegame.laserCutter;
		if(typeof UMCsavegame.deforester !== "undefined") deforester = UMCsavegame.deforester;
		if(typeof UMCsavegame.infuser !== "undefined") infuser = UMCsavegame.infuser;
		if(typeof UMCsavegame.science !== "undefined") science = UMCsavegame.science;
		if(typeof UMCsavegame.lab !== "undefined") lab = UMCsavegame.lab;
		if(typeof UMCsavegame.labT2 !== "undefined") labT2 = UMCsavegame.labT2;
		if(typeof UMCsavegame.labT3 !== "undefined") labT3 = UMCsavegame.labT3;
		if(typeof UMCsavegame.labT4 !== "undefined") labT4 = UMCsavegame.labT4;
		if(typeof UMCsavegame.labT5 !== "undefined") labT5 = UMCsavegame.labT5;
		if(typeof UMCsavegame.rocket !== "undefined") rocket = UMCsavegame.rocket;
		if(typeof UMCsavegame.rocketFuel !== "undefined") rocketFuel = UMCsavegame.rocketFuel;
		if(typeof UMCsavegame.rocketFuelToggled !== "undefined") rocketFuelToggled = UMCsavegame.rocketFuelToggled;
		if(typeof UMCsavegame.chemicalPlant !== "undefined") chemicalPlant = UMCsavegame.chemicalPlant;
		if(typeof UMCsavegame.oxidisation !== "undefined") oxidisation = UMCsavegame.oxidisation;
		if(typeof UMCsavegame.hydrazine !== "undefined") hydrazine = UMCsavegame.hydrazine;
		if(typeof UMCsavegame.spaceMetal !== "undefined") lunarite = UMCsavegame.spaceMetal;
		if(typeof UMCsavegame.lunarite !== "undefined") lunarite = UMCsavegame.lunarite;
		if(typeof UMCsavegame.spaceMetalStorage !== "undefined") lunariteStorage = UMCsavegame.spaceMetalStorage;
		if(typeof UMCsavegame.lunariteStorage !== "undefined") lunariteStorage = UMCsavegame.lunariteStorage;
		if(typeof UMCsavegame.spaceMetalNextStorage !== "undefined") lunariteNextStorage = UMCsavegame.spaceMetalNextStorage;
		if(typeof UMCsavegame.lunariteNextStorage !== "undefined") lunariteNextStorage = UMCsavegame.lunariteNextStorage;
		if(typeof UMCsavegame.methane !== "undefined") methane = UMCsavegame.methane;
		if(typeof UMCsavegame.methaneStorage !== "undefined") methaneStorage = UMCsavegame.methaneStorage;
		if(typeof UMCsavegame.methaneNextStorage !== "undefined") methaneNextStorage = UMCsavegame.methaneNextStorage;
		if(typeof UMCsavegame.titanium !== "undefined") titanium = UMCsavegame.titanium;
		if(typeof UMCsavegame.titaniumStorage !== "undefined") titaniumStorage = UMCsavegame.titaniumStorage;
		if(typeof UMCsavegame.titaniumNextStorage !== "undefined") titaniumNextStorage = UMCsavegame.titaniumNextStorage;
		if(typeof UMCsavegame.gold !== "undefined") gold = UMCsavegame.gold;
		if(typeof UMCsavegame.goldStorage !== "undefined") goldStorage = UMCsavegame.goldStorage;
		if(typeof UMCsavegame.goldNextStorage !== "undefined") goldNextStorage = UMCsavegame.goldNextStorage;
		if(typeof UMCsavegame.silver !== "undefined") silver = UMCsavegame.silver;
		if(typeof UMCsavegame.silverStorage !== "undefined") silverStorage = UMCsavegame.silverStorage;
		if(typeof UMCsavegame.silverNextStorage !== "undefined") silverNextStorage = UMCsavegame.silverNextStorage;
		if(typeof UMCsavegame.silicon !== "undefined") silicon = UMCsavegame.silicon;
		if(typeof UMCsavegame.siliconStorage !== "undefined") siliconStorage = UMCsavegame.siliconStorage;
		if(typeof UMCsavegame.siliconNextStorage !== "undefined") siliconNextStorage = UMCsavegame.siliconNextStorage;
		if(typeof UMCsavegame.lava !== "undefined") lava = UMCsavegame.lava;
		if(typeof UMCsavegame.lavaStorage !== "undefined") lavaStorage = UMCsavegame.lavaStorage;
		if(typeof UMCsavegame.lavaNextStorage !== "undefined") lavaNextStorage = UMCsavegame.lavaNextStorage;
		if(typeof UMCsavegame.hydrogen !== "undefined") hydrogen = UMCsavegame.hydrogen;
		if(typeof UMCsavegame.hydrogenStorage !== "undefined") hydrogenStorage = UMCsavegame.hydrogenStorage;
		if(typeof UMCsavegame.hydrogenNextStorage !== "undefined") hydrogenNextStorage = UMCsavegame.hydrogenNextStorage;
		if(typeof UMCsavegame.helium !== "undefined") helium = UMCsavegame.helium;
		if(typeof UMCsavegame.heliumStorage !== "undefined") heliumStorage = UMCsavegame.heliumStorage;
		if(typeof UMCsavegame.heliumNextStorage !== "undefined") heliumNextStorage = UMCsavegame.heliumNextStorage;
		if(typeof UMCsavegame.ice !== "undefined") ice = UMCsavegame.ice;
		if(typeof UMCsavegame.iceStorage !== "undefined") iceStorage = UMCsavegame.iceStorage;
		if(typeof UMCsavegame.iceNextStorage !== "undefined") iceNextStorage = UMCsavegame.iceNextStorage;
		if(typeof UMCsavegame.meteorite !== "undefined") meteorite = UMCsavegame.meteorite;
		if(typeof UMCsavegame.meteoriteStorage !== "undefined") meteoriteStorage = UMCsavegame.meteoriteStorage;
		if(typeof UMCsavegame.meteoriteNextStorage !== "undefined") meteoriteNextStorage = UMCsavegame.meteoriteNextStorage;
		if(typeof UMCsavegame.moonWorker !== "undefined") moonWorker = UMCsavegame.moonWorker;
		if(typeof UMCsavegame.moonDrill !== "undefined") moonDrill = UMCsavegame.moonDrill;
		if(typeof UMCsavegame.moonQuarry !== "undefined") moonQuarry = UMCsavegame.moonQuarry;
		if(typeof UMCsavegame.planetExcavator !== "undefined") planetExcavator = UMCsavegame.planetExcavator;
		if(typeof UMCsavegame.vacuum !== "undefined") vacuum = UMCsavegame.vacuum;
		if(typeof UMCsavegame.suctionExcavator !== "undefined") suctionExcavator = UMCsavegame.suctionExcavator;
		if(typeof UMCsavegame.spaceCow !== "undefined") spaceCow = UMCsavegame.spaceCow;
		if(typeof UMCsavegame.vent !== "undefined") vent = UMCsavegame.vent;
		if(typeof UMCsavegame.explorer !== "undefined") explorer = UMCsavegame.explorer;
		if(typeof UMCsavegame.spaceMetalDrill !== "undefined") lunariteDrill = UMCsavegame.spaceMetalDrill;
		if(typeof UMCsavegame.lunariteDrill !== "undefined") lunariteDrill = UMCsavegame.lunariteDrill;
		if(typeof UMCsavegame.pentaDrill !== "undefined") pentaDrill = UMCsavegame.pentaDrill;
		if(typeof UMCsavegame.titanDrill !== "undefined") titanDrill = UMCsavegame.titanDrill;
		if(typeof UMCsavegame.droid !== "undefined") droid = UMCsavegame.droid;
		if(typeof UMCsavegame.destroyer !== "undefined") destroyer = UMCsavegame.destroyer;
		if(typeof UMCsavegame.deathStar !== "undefined") deathStar = UMCsavegame.deathStar;
		if(typeof UMCsavegame.actuator !== "undefined") actuator = UMCsavegame.actuator;
		if(typeof UMCsavegame.scout !== "undefined") scout = UMCsavegame.scout;
		if(typeof UMCsavegame.spaceLaser !== "undefined") spaceLaser = UMCsavegame.spaceLaser;
		if(typeof UMCsavegame.bertha !== "undefined") bertha = UMCsavegame.bertha;
		if(typeof UMCsavegame.cannon !== "undefined") cannon = UMCsavegame.cannon;
		if(typeof UMCsavegame.blowtorch !== "undefined") blowtorch = UMCsavegame.blowtorch;
		if(typeof UMCsavegame.scorcher !== "undefined") scorcher = UMCsavegame.scorcher;
		if(typeof UMCsavegame.annihilator !== "undefined") annihilator = UMCsavegame.annihilator;
		if(typeof UMCsavegame.desert !== "undefined") desert = UMCsavegame.desert;
		if(typeof UMCsavegame.researchUnlocked !== "undefined") researchUnlocked = UMCsavegame.researchUnlocked;
		if(typeof UMCsavegame.researched !== "undefined") researched = UMCsavegame.researched;
		if(typeof UMCsavegame.tabsUnlocked !== "undefined") tabsUnlocked = UMCsavegame.tabsUnlocked;
		if(typeof UMCsavegame.available !== "undefined") available = UMCsavegame.available;
		if(typeof UMCsavegame.resourcesUnlocked !== "undefined") resourcesUnlocked = UMCsavegame.resourcesUnlocked;
		if(typeof UMCsavegame.noBorder !== "undefined") noBorder = UMCsavegame.noBorder;
		if(typeof UMCsavegame.rocketLaunched !== "undefined") rocketLaunched = UMCsavegame.rocketLaunched;
		if(typeof UMCsavegame.techUnlocked !== "undefined") techUnlocked = UMCsavegame.techUnlocked;
		if(typeof UMCsavegame.meteoriteUnlocked !== "undefined") meteoriteUnlocked = UMCsavegame.meteoriteUnlocked;
		if(typeof UMCsavegame.explored !== "undefined") explored = UMCsavegame.explored;
		if(typeof UMCsavegame.buttonsHidden !== "undefined") buttonsHidden = UMCsavegame.buttonsHidden;
		if(typeof UMCsavegame.uranium !== "undefined") uranium = UMCsavegame.uranium;
		if(typeof UMCsavegame.uraniumStorage !== "undefined") uraniumStorage = UMCsavegame.uraniumStorage;
		if(typeof UMCsavegame.uraniumNextStorage !== "undefined") uraniumNextStorage = UMCsavegame.uraniumNextStorage;
		if(typeof UMCsavegame.activated !== "undefined") activated = UMCsavegame.activated;
		if(typeof UMCsavegame.grinder !== "undefined") grinder = UMCsavegame.grinder;
		if(typeof UMCsavegame.cubic !== "undefined") cubic = UMCsavegame.cubic;
		if(typeof UMCsavegame.enricher !== "undefined") enricher = UMCsavegame.enricher;
		if(typeof UMCsavegame.recycler !== "undefined") recycler = UMCsavegame.recycler;
		if(typeof UMCsavegame.crucible !== "undefined") crucible = UMCsavegame.crucible;
		if(typeof UMCsavegame.extractor !== "undefined") extractor = UMCsavegame.extractor;
		if(typeof UMCsavegame.extruder !== "undefined") extruder = UMCsavegame.extruder;
		if(typeof UMCsavegame.veluptuator !== "undefined") veluptuator = UMCsavegame.veluptuator;
		if(typeof UMCsavegame.collector !== "undefined") collector = UMCsavegame.collector;
		if(typeof UMCsavegame.magnet !== "undefined") magnet = UMCsavegame.magnet;
		if(typeof UMCsavegame.eCell !== "undefined") eCell = UMCsavegame.eCell;
		if(typeof UMCsavegame.hindenburg !== "undefined") hindenburg = UMCsavegame.hindenburg;
		if(typeof UMCsavegame.drone !== "undefined") drone = UMCsavegame.drone;
		if(typeof UMCsavegame.tanker !== "undefined") tanker = UMCsavegame.tanker;
		if(typeof UMCsavegame.compressor !== "undefined") compressor = UMCsavegame.compressor;
		if(typeof UMCsavegame.skimmer !== "undefined") skimmer = UMCsavegame.skimmer;
		if(typeof UMCsavegame.icePick !== "undefined") icePick = UMCsavegame.icePick;
		if(typeof UMCsavegame.iceDrill !== "undefined") iceDrill = UMCsavegame.iceDrill;
		if(typeof UMCsavegame.freezer !== "undefined") freezer = UMCsavegame.freezer;
		if(typeof UMCsavegame.mrFreeze !== "undefined") mrFreeze = UMCsavegame.mrFreeze;
		if(typeof UMCsavegame.printer !== "undefined") printer = UMCsavegame.printer;
		if(typeof UMCsavegame.web !== "undefined") web = UMCsavegame.web;
		if(typeof UMCsavegame.smasher !== "undefined") smasher = UMCsavegame.smasher;
		if(typeof UMCsavegame.nebulous !== "undefined") nebulous = UMCsavegame.nebulous;
		if(typeof UMCsavegame.dyson !== "undefined") dyson = UMCsavegame.dyson;
		if(typeof UMCsavegame.sphere !== "undefined") sphere = UMCsavegame.sphere;
		if(typeof UMCsavegame.swarm !== "undefined") swarm = UMCsavegame.swarm;
		if(typeof UMCsavegame.ring !== "undefined") ring = UMCsavegame.ring;
		if(typeof UMCsavegame.antimatter !== "undefined") antimatter = UMCsavegame.antimatter;
		if(typeof UMCsavegame.antimatterStorage !== "undefined") antimatterStorage = UMCsavegame.antimatterStorage;
		if(typeof UMCsavegame.antimatterToggled !== "undefined") antimatterToggled = UMCsavegame.antimatterToggled;
		if(typeof UMCsavegame.planetNuke !== "undefined") planetNuke = UMCsavegame.planetNuke;
		if(typeof UMCsavegame.condensator !== "undefined") condensator = UMCsavegame.condensator;
		if(typeof UMCsavegame.fossilator !== "undefined") fossilator = UMCsavegame.fossilator;
		if(typeof UMCsavegame.multiDrill !== "undefined") multiDrill = UMCsavegame.multiDrill;
		if(typeof UMCsavegame.diamondChamber !== "undefined") diamondChamber = UMCsavegame.diamondChamber;
		if(typeof UMCsavegame.microPollutor !== "undefined") microPollutor = UMCsavegame.microPollutor;
		if(typeof UMCsavegame.forest !== "undefined") forest = UMCsavegame.forest;
		if(typeof UMCsavegame.cloner !== "undefined") cloner = UMCsavegame.cloner;
		if(typeof UMCsavegame.interCow !== "undefined") interCow = UMCsavegame.interCow;
		if(typeof UMCsavegame.club !== "undefined") club = UMCsavegame.club;
		if(typeof UMCsavegame.philosopher !== "undefined") philosopher = UMCsavegame.philosopher;
		if(typeof UMCsavegame.werewolf !== "undefined") werewolf = UMCsavegame.werewolf;
		if(typeof UMCsavegame.tardis !== "undefined") tardis = UMCsavegame.tardis;
		if(typeof UMCsavegame.harvester !== "undefined") harvester = UMCsavegame.harvester;
		if(typeof UMCsavegame.cage !== "undefined") cage = UMCsavegame.cage;
		if(typeof UMCsavegame.overexchange !== "undefined") overexchange = UMCsavegame.overexchange;
	}
}
