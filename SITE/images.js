var imagesData = [
  { src: 'IMAGENES/6.png', waypt2X: 0.25, waypt2Y: 0.7, waypt1X: 0.75, waypt1Y: 0.5, consumptionRoute: 800, consumptionWaypt1: 1000, consumptionWaypt2: 900, consumptionDessus:850, tempsroute: 7, tempsWaypt1: 8, tempsWaypt2: 7.5, tempsDessus: 7.25, altZoneVerte: 35000, altZoneJaune: 34000, altZoneRouge: 32000, altParDessus: 36000, dirCellule:"Droite", vitesseCellule: 'Rapide', altVol: 35510, 'XcenterYellow': 0.3, 'YcenterYellow':0.5, 'XcenterRed': 0.3, 'YcenterRed':0.5, 'radiusRed': 0.02, 'radiusYellow':0.1},
  { src: 'IMAGENES/Case27.png', waypt2X: 0.35, waypt2Y: 0.5, waypt1X: 0.65, waypt1Y: 0.7, consumptionRoute: 650, consumptionWaypt1: 700, consumptionWaypt2: 800, consumptionDessus:850, tempsroute: 6.5, tempsWaypt1: 5, tempsWaypt2: 4, tempsDessus: 5.25,altZoneVerte: 35000, altZoneJaune: 34000, altZoneRouge: 32000, altParDessus: 36000, dirCellule:"Droite", vitesseCellule: 'Lente', altVol: 35510, 'XcenterYellow': 0.7, 'YcenterYellow':0.55, 'XcenterRed': 0.8, 'YcenterRed':0.6, 'radiusRed': 0.02, 'radiusYellow':0.1},
  { src: 'IMAGENES/Case32.png', waypt2X: 0.35, waypt2Y: 0.5, waypt1X: 0.65, waypt1Y: 0.7, consumptionRoute: 650, consumptionWaypt1: 700, consumptionWaypt2: 800, consumptionDessus:850, tempsroute: 6.5, tempsWaypt1: 5, tempsWaypt2: 4, tempsDessus: 5.25,altZoneVerte: 35000, altZoneJaune: 34500, altZoneRouge: 32000, altParDessus: 36000, dirCellule:"Droite", vitesseCellule: 'Rapide', altVol: 35530, 'XcenterYellow': 0.83, 'YcenterYellow':0.65, 'XcenterRed': 0.85, 'YcenterRed':0.65, 'radiusRed': 0.02, 'radiusYellow':0.1},
  //{ src: 'IMAGENES/4.png', waypt2X: 0.25, waypt2Y: 0.7, waypt1X: 0.75, waypt1Y: 0.5, consumptionRoute: 800, consumptionWaypt1: 1000, consumptionWaypt2: 900, consumptionDessus:850, tempsroute: 7, tempsWaypt1: 8, tempsWaypt2: 7.5, tempsDessus: 7.25, altZoneVerte: 33000, altZoneJaune: 33000, altZoneRouge: 33000, altParDessus: 36000, dirCellule:"Droite", vitesseCellule: 'Lente', altVol: 35510, 'XcenterYellow': 0.3, 'YcenterYellow':0.5, 'XcenterRed': 0.3, 'YcenterRed':0.5, 'radiusRed': 0.02, 'radiusYellow':0.1},
  //{ src: 'IMAGENES/Case17.png', waypt2X: 0.25, waypt2Y: 0.7, waypt1X: 0.75, waypt1Y: 0.5, consumptionRoute: 700, consumptionWaypt1: 950, consumptionWaypt2: 800, consumptionDessus:950, tempsroute: 7, tempsWaypt1: 8, tempsWaypt2: 7.5, tempsDessus: 7.25, altZoneVerte: 35500, altZoneJaune: 35500, altZoneRouge: 33500, altParDessus: 37500, dirCellule:"Droite", vitesseCellule: 'Rapide', altVol: 35510, 'XcenterYellow': 0.3, 'YcenterYellow':0.5, 'XcenterRed': 0.3, 'YcenterRed':0.5, 'radiusRed': 0.02, 'radiusYellow':0.1},
  ];


var QUASAstatements = [
  {
    statement: "L'option 1 est plus proche de la cellule que l'option 2",
    identifier: "1plusProche2"
  },
  {
    statement: "L'altitude de vol était supérieure à 30000",
    identifier: "altSup30k"
  },
  {
    statement: "Le mouvement de la cellule était vers la droite",
    identifier: "dirMovCelDroite"
  },
  {
    statement: "Le mouvement de la cellule était vers la gauche",
    identifier: "dirMovCelGauche"
  },
  {
    statement: "La cellule n'avait pas de mouvement",
    identifier: "celQuieta"
  },
];


/*
var QUASAstatements = [
  {
    statement: "L'option {X} est plus proche de la cellule que l'option {Y}",
    identifier: "plusProche",
    variables: ["{X}", "{Y}"]
  },
  {
    statement: "L'altitude de vol était supérieure aux {X}",
    identifier: "alt",
    variables: ["{X}"]
  },
  {
    statement: "Le mouvement de la cellule était vers la {X}",
    identifier: "dirMovCel",
    variables: ["{X}"]
  },
  {
    statement: "La cellule n'avait pas de mouvement",
    identifier: "celQuieta",
    variables: []
  },
];*/





 
