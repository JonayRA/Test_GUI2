function calculadoraVariablesCSordrePreference(){

	
	// Distancias presentes

	var distJauneDessus = (parseFloat(cellAltParDessus.textContent) - parseFloat(cellAltZoneJaune.textContent))/7000;
  if (distJauneDessus < 0){
    distJauneDessus = 0;
  }
  var distRougeDessus = (parseFloat(cellAltParDessus.textContent) - parseFloat(cellAltZoneRouge.textContent))/7000;
  if (distRougeDessus < 0){
    distRougeDessus = 0;
  }
	var distRougeDroit = Math.sqrt((Xrouge - Xwaypt1)**2 + (Yrouge - Ywaypt1)**2)-radiusRouge;
  if (distRougeDroit < 0){
    distRougeDroit = 0;
  }
	var distRougeGauche = Math.sqrt((Xrouge - Xwaypt2)**2 + (Yrouge - Ywaypt2)**2)-radiusRouge;
  if (distRougeGauche < 0){
    distRougeGauche = 0;
  }
	var distJauneDroit = Math.sqrt((Xjaune - Xwaypt1)**2 + (Yjaune - Ywaypt1)**2)-radiusJaune;
  if (distJauneDroit < 0){
    distJauneDroit = 0;
  }
	var distJauneGauche = Math.sqrt((Xjaune - Xwaypt2)**2 + (Yjaune - Ywaypt2)**2)-radiusJaune;
  if (distJauneGauche < 0){
    distJauneGauche = 0;
  }
	var distRougeRoute = Math.abs(Xrouge - 0.5) - radiusRouge;
  if (distRougeRoute < 0){
    distRougeRoute = 0;
  }
	var distJauneRoute = Math.abs(Xjaune - 0.5) - radiusJaune;
  if (distJauneRoute < 0){
    distJauneRoute = 0;
  }

	//console.log('Celdas calculadora future',cellDirCellule.textContent);
	//console.log(cellVitesseCellule.textContent);
	var distRefJaune = Math.max(distJauneGauche,distJauneRoute,distJauneDroit,distJauneDessus);
  var distRefRouge = Math.max(distRougeGauche,distRougeRoute,distRougeDroit,distRougeDessus);
  var distJauneGaucheCS = 1 - (distRefJaune - distJauneGauche)/distRefJaune
  var distJauneRouteCS = 1 - (distRefJaune - distJauneRoute)/distRefJaune
  var distJauneDroitCS = 1 - (distRefJaune - distJauneDroit)/distRefJaune
  var distJauneDessusCS = 1 - (distRefJaune - distJauneDessus)/distRefJaune

  var distRougeGaucheCS = 1 - (distRefRouge - distRougeGauche)/distRefRouge
  var distRougeRouteCS = 1 - (distRefRouge - distRougeRoute)/distRefRouge
  var distRougeDroitCS = 1 - (distRefRouge - distRougeDroit)/distRefRouge
  var distRougeDessusCS = 1 - (distRefRouge - distRougeDessus)/distRefRouge


	let vitesse = 0;
	if(cellVitesseCellule.textContent == 'Rapide'){
		vitesse = 2/3;
	}else if ( cellVitesseCellule.textContent == 'Lente'){
		vitesse = 1/3;
	}

	if (cellDirCellule.textContent == 'Gauche') {
		vitesse = -vitesse
	}

	var futureXcenterRed = Xrouge + vitesse;
	var futureXcenterYellow = Xjaune + vitesse;

	// Distancias futuras
	var futureDistRougeDroit = Math.sqrt((futureXcenterRed - Xwaypt1)**2 + (Yrouge - Ywaypt1)**2)-radiusRouge;
  if (futureDistRougeDroit < 0){
    futureDistRougeDroit = 0;
  }
	var futureDistRougeGauche = Math.sqrt((futureXcenterRed - Xwaypt2)**2 + (Yrouge - Ywaypt2)**2)-radiusRouge;
  if (futureDistRougeGauche < 0){
    futureDistRougeGauche = 0;
  }
	var futureDistJauneDroit = Math.sqrt((futureXcenterYellow - Xwaypt1)**2 + (Yjaune - Ywaypt1)**2)-radiusJaune;
  if (futureDistJauneDroit < 0){
    futureDistJauneDroit = 0;
  }
	var futureDistJauneGauche = Math.sqrt((futureXcenterYellow - Xwaypt2)**2 + (Yjaune - Ywaypt2)**2)-radiusJaune;
  if (futureDistJauneGauche < 0){
    futureDistJauneGauche = 0;
  }
	var futureDistRougeRoute = Math.abs(futureXcenterRed - 0.5) - radiusRouge;
  if (futureDistRougeRoute < 0){
    futureDistRougeRoute = 0;
  }
	var futureDistJauneRoute = Math.abs(futureXcenterYellow - 0.5) - radiusJaune;
  if (futureDistJauneRoute < 0){
    futureDistJauneRoute = 0;
  }


  var futureDistRefJaune = Math.max(futureDistJauneGauche,futureDistJauneRoute,futureDistJauneDroit,futureDistJauneDessus);
  var futureDistRefRouge = Math.max(futureDistRougeGauche,futureDistRougeRoute,futureDistRougeDroit,futureDistRougeDessus);
  var futureDistJauneGaucheCS = 1 - (futureDistRefJaune - futureDistJauneGauche)/futureDistRefJaune
  var futureDistJauneRouteCS = 1 - (futureDistRefJaune - futureDistJauneRoute)/futureDistRefJaune
  var futureDistJauneDroitCS = 1 - (futureDistRefJaune - futureDistJauneDroit)/futureDistRefJaune
  var futureDistJauneDessusCS = 1 - (futureDistRefJaune - futureDistJauneDessus)/futureDistRefJaune

  var futureDistRougeGaucheCS = 1 - (futureDistRefRouge - futureDistRougeGauche)/futureDistRefRouge
  var futureDistRougeRouteCS = 1 - (futureDistRefRouge - futureDistRougeRoute)/futureDistRefRouge
  var futureDistRougeDroitCS = 1 - (futureDistRefRouge - futureDistRougeDroit)/futureDistRefRouge
  var futureDistRougeDessusCS = 1 - (futureDistRefRouge - futureDistRougeDessus)/futureDistRefRouge


	// Combustible
	/*var combDisponibleCS = parseFloat(cellCombDispo.textContent);
  var consomRoute = parseFloat(cellConsomRoute.textContent);
  var consomWaypt1 = parseFloat(cellConsomWaypt1.textContent);
  var consomWaypt2 = parseFloat(cellConsomWaypt2.textContent)
  var consomDessus = parseFloat(cellConsomDessus.textContent);
  var combRef = Math.min(consomRoute,consomWaypt1,consomWaypt2,consomDessus);
	var consomRouteCS = 1 - ((combDisponibleCS - combRef))/combDisponibleCS;
	var consumptionWaypt1CS = 1 - ((combDisponibleCS - combRef))/combDisponibleCS;
	var consumptionWaypt2CS = 1 - ((combDisponibleCS - combRef))/combDisponibleCS;
	var consumptionDessusCS = 1 - ((combDisponibleCS - combRef))/combDisponibleCS;*/


// 0 ideal, <0 insuficiente, >0 sobregasto
  var combDisponibleCS = parseFloat(cellCombDispo.textContent);
  var excessRoute = ((combDisponibleCS - parseFloat(cellConsomRoute.textContent)));
  var excessWaypt1 = ((combDisponibleCS - parseFloat(cellConsomWaypt1.textContent)));
  var excessWaypt2 = ((combDisponibleCS - parseFloat(cellConsomWaypt2.textContent)));
  var excessDessus = ((combDisponibleCS - parseFloat(cellConsomDessus.textContent)));
  var combRef = Math.min(excessRoute,excessWaypt1,excessWaypt2,excessDessus);
  var consomRouteCS = ((excessRoute - combRef))/combDisponibleCS;
  var consumptionWaypt1CS = ((excessWaypt1 - combRef))/combDisponibleCS;
  var consumptionWaypt2CS = ((excessWaypt2 - combRef))/combDisponibleCS;
  var consumptionDessusCS = ((excessDessus - combRef))/combDisponibleCS;

	

	let feautresRequest
	return feautresRequest =  {features: {
  	"Consommation dessus": consumptionDessusCS,
  	"Consommation droite": consumptionWaypt2CS,
  	"Consommation gauche": consumptionWaypt1CS,
  	"Consommation route": consomRouteCS,
  	"Dist jaune-dessus": distRougeDessusCS,
  	"Dist jaune-droite": distJauneDroitCS,
  	"Dist jaune-gauche": distJauneGaucheCS,
  	"Dist jaune-route": distJauneRouteCS,
  	"Dist rouge-dessus": distRougeDessusCS,
  	"Dist rouge-droite": distRougeDroitCS,
  	"Dist rouge-gauche": distRougeGaucheCS,
  	"Dist rouge-route": distRougeRouteCS,
  	"Future dist jaune-droite": futureDistJauneDroitCS,
  	"Future dist jaune-gauche": futureDistJauneGaucheCS,
  	"Future dist jaune-route": futureDistRougeRouteCS,
  	"Future dist rouge-droite": futureDistJauneDroitCS,
  	"Future dist rouge-gauche": futureDistRougeGaucheCS,
  	"Future dist rouge-route": futureDistRougeRouteCS
  }};

  


}