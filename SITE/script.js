
// Declaración de variables globales
var urlParams = new URLSearchParams(window.location.search);
const numParticipant = urlParams.get("numParticipant");
const condition = urlParams.get("condition");
const session = urlParams.get("session");
console.log(numParticipant,condition);

const QUASApositions = [1, 2, 8, 9];


let PFD = document.getElementById('PFD');
let ctxPFD = PFD.getContext('2d');
let FMA1 = document.getElementById('FMA1');
let ctxFMA1 = FMA1.getContext('2d');
let FMA2 = document.getElementById('FMA2');
let ctxFMA2 = FMA2.getContext('2d');
let FMA3 = document.getElementById('FMA3');
let ctxFMA3 = FMA3.getContext('2d');
let FMA4 = document.getElementById('FMA4');
let ctxFMA4 = FMA4.getContext('2d');
let FMA5 = document.getElementById('FMA5');
let ctxFMA5 = FMA5.getContext('2d');
let ASI = document.getElementById('ASI');
let ctxASI = ASI.getContext('2d');
let HDG = document.getElementById('HDG');
let ctxHDG = HDG.getContext('2d');
let VSI = document.getElementById('VSI');
let ctxVSI = VSI.getContext('2d');
let ALT = document.getElementById('ALT');
let ctxALT = ALT.getContext('2d');
let AH = document.getElementById('AH');
let ctxAH = AH.getContext('2d');
//let VSItext = document.getElementById('VSItext');
//let ctxVSItext = VSItext.getContext('2d'); 
let pressure = document.getElementById('pressure');
let ctxPressure = pressure.getContext('2d');
let NAVPFD = document.getElementById('NAVPFD');
let ctxNAVPFD = NAVPFD.getContext('2d');
let altIndicator = document.getElementById('altIndicator');
let ctxAltIndicator = altIndicator.getContext('2d');
const buttonCambiarImagen = document.getElementById('cambiarImagen');
const  buttonresetCase = document.getElementById('resetCase');
const buttonsoumettreContrefactuel = document.getElementById('soumettreContrefactuel');
const buttonmenu = document.getElementById('menu');
const buttontoggleButton = document.getElementById('toggleButton');
const buttonsansChangement = document.getElementById('sansChangement');
const buttonFinirExperience = document.getElementById('finirExperience');
const inputVariableChoisie = document.getElementById("inputVariableChoisie");
const textInputVar = document.getElementById("input-text");
const buttonParDessus = document.getElementById("eviterDessus");
let menuOpcionesMovCel = document.getElementById("botonesTablaMovCel");
let botonOpcion1 = document.getElementById("opcion1");
let botonOpcion2 = document.getElementById("opcion2");
let botonOpcion3 = document.getElementById("opcion3");
let botonAnnuler = document.getElementById("annuler");
var botonVrai = document.getElementById('Vrai');
var botonFaux = document.getElementById('Faux');
var botonAcceptQUASA = document.getElementById('acceptQUASA');
menuOpcionesMovCel.style.display = 'none';
const dataToSave = [];
var dataToSaveJSON = [];
let recomendacionCS;
let currentImage = 0;
const imagenes = [
"IMAGENES/ND_radar.png",
"IMAGENES/ND_base.jpg"
];
const NDcontainer = document.getElementById('NDcanvasContainer');
const NDcontainerWidth = NDcontainer.getBoundingClientRect().width;
const NDcontainerHeight = NDcontainer.getBoundingClientRect().height;


let canvasAvionND = document.getElementById('avionND');
let ctxAvionND = canvasAvionND.getContext('2d');
var xAvion = canvasAvionND.width * 0.5;
var yAvion = canvasAvionND.height * 0.3;


let ND = document.getElementById('ND');
let ctxND = ND.getContext('2d');


let canvasWaypt1 = document.getElementById('waypt1');
let ctxWaypt1 = canvasWaypt1.getContext('2d');
let canvasWaypt2 = document.getElementById('waypt2');
let ctxWaypt2 = canvasWaypt2.getContext('2d');


const avionNDinitialPosition = canvasAvionND.getBoundingClientRect();
const avionNDinitialPositionTop = canvasAvionND.offsetTop;
const avionNDinitialPositionLeft = canvasAvionND.offsetLeft;



const canvasWaypt1initialPosition = canvasWaypt1.getBoundingClientRect();
let canvasWaypt1PositionTop = canvasWaypt1.offsetTop;
let canvasWaypt1PositionLeft = canvasWaypt1.offsetLeft;


const canvasWaypt2initialPosition = canvasWaypt2.getBoundingClientRect();
let canvasWaypt2PositionTop = canvasWaypt2.offsetTop;
let canvasWaypt2PositionLeft = canvasWaypt2.offsetLeft;


let isDragging = false;
let isDraggingWaypt1 = false;
let isDraggingWaypt2 = false;
let wasDragged = false;
let startX;
let startY;
let canvasAvionNDX = 0;
let canvasAvionNDY = 0;
let canvasWaypt1X = 0;
let canvasWaypt1Y = 0;
let canvasWaypt2X = 0;
let canvasWaypt2Y = 0;


const tableConsomTemps = document.getElementById("tableVariables");
var cellConsomRoute = document.getElementById("consomRoute");
var cellConsomWaypt1 = document.getElementById("consomWaypt1");
var cellConsomWaypt2 = document.getElementById("consomWaypt2");
// var cellTempsRoute = document.getElementById("tempsRoute");
// var cellTempsWaypt1 = document.getElementById("tempsWaypt1");
// var cellTempsWaypt2 = document.getElementById("tempsWaypt2");
var cellCombDispo = document.getElementById("combDispo");
var cellConsomDessus = document.getElementById("consomDessus");
// var cellTempsDessus = document.getElementById("tempsDessus");

const tableALTCellule = document.getElementById("tableALTCellule");
// var cellAltZoneVerte = document.getElementById("altZoneVerte");
var cellAltZoneJaune = document.getElementById("altZoneJaune");
var cellAltZoneRouge = document.getElementById("altZoneRouge");
var cellAltParDessus = document.getElementById("altParDessus");

const tableMouvementCellule = document.getElementById("tableMouvementCellule");
var cellDirCellule = document.getElementById("dirCellule");
var cellVitesseCellule = document.getElementById("vitesseCellule");

const participantDB = 'participant' + numParticipant;
let db;


const dbRequest = indexedDB.open('dbTestCellule', 1); // Version 1

const popup = document.getElementById('popup');
const opcionA = document.getElementById('opcionA');
const opcionB = document.getElementById('opcionB');
const opcionC = document.getElementById('opcionC');
const bouttonMontrerSituation = document.getElementById("montrerSituation");
const bouttonRetournerDeuxiemeOption = document.getElementById("retourDeuxiemeOption");
const popupMatrizCorrelacion = document.getElementById('matrizCorrelacion');
const popupNASATLX = document.getElementById('NASATLX');
const popupTrustInAuto1 = document.getElementById('trustInAuto1');
const popupTrustInAuto2 = document.getElementById('trustInAuto2');
/*const tablaMatrizCorrelacion = document.getElementById('tablaMatrizCorrelacion');
const botonAcceptMatrizCorrelacion = document.getElementById('acceptMatrizCorrelacion');*/
var wayptAlternatif = -1;
popup.style.display = 'none';
QUASA.style.display = 'none';
popupMatrizCorrelacion.style.display = '';
popupNASATLX.style.display = 'none';
popupTrustInAuto1.style.display = 'none';
popupTrustInAuto2.style.display = 'none';

dbRequest.onupgradeneeded = event => {

  db = event.target.result;

  db.createObjectStore(participantDB);

};

dbRequest.onsuccess = event => {
  // Aquí también se puede obtener db
  db = event.target.result; 
}

dbRequest.onerror = event => {
  alert("Error al crear DB", event);
};










// Definición de funciones

function hideButtonsContrefacutel(){
	buttonresetCase.style.display = 'none';
	buttonCambiarImagen.style.display = 'none';
	buttonsoumettreContrefactuel.style.display = 'none';
	buttonmenu.style.display = 'none';
	buttontoggleButton.style.display = 'none';
	inputVariableChoisie.style.display = 'none';
	buttonsansChangement.style.display = '';
	textInputVar.value = null;
	buttonFinirExperience.style.display = 'none';
	buttonParDessus.style.display = '';
	bouttonRetournerDeuxiemeOption.style.display = 'none';

}


let waypointChoisi = -1;
let waypointAlternatif;
if (waypointChoisi == -1 || condition != 3){
	hideButtonsContrefacutel();
}

function showButtonsContrefacutel(){
	buttonresetCase.style.display = '';
	buttonCambiarImagen.style.display = 'none';
	buttonsoumettreContrefactuel.style.display = '';
	buttonmenu.style.display = 'none';
	buttontoggleButton.style.display = 'none';
	buttonsansChangement.style.display = 'none';
	buttonParDessus.style.display = 'none';
	bouttonRetournerDeuxiemeOption.style.display = 'none';
	var celdas = document.querySelectorAll('#tableMouvementCellule' + ' .celda');
  	celdas.forEach(function(celda) {
    celda.style.backgroundColor = 'green';
  	});
}


let imgND = new Image();
//imgND.src = imagenes[currentImage];
imgND.src = imagesData[currentImage].src;
/*var consommationRoute = imagesData[currentImage].consumptionRoute;
var consommationWaypt1 = imagesData[currentImage].consumptionWaypt1;
var consommationWaypt2 = imagesData[currentImage].consumptionWaypt2;
var tempsWaypt1 = imagesData[currentImage].tempsWaypt1;
var tempsRoute = imagesData[currentImage].tempsroute;
var tempsWaypt2 = imagesData[currentImage].tempsWaypt2;*/


cellConsomRoute.textContent = imagesData[currentImage].consumptionRoute;
cellConsomWaypt1.textContent = imagesData[currentImage].consumptionWaypt1;
cellConsomWaypt2.textContent = imagesData[currentImage].consumptionWaypt2;
//cellTempsWaypt1.textContent = imagesData[currentImage].tempsWaypt1;
//cellTempsRoute.textContent = imagesData[currentImage].tempsroute;
//cellTempsWaypt2.textContent = imagesData[currentImage].tempsWaypt2;
var combDisponible = imagesData[currentImage].consumptionRoute * 1.20;
cellCombDispo.textContent = combDisponible;
cellConsomDessus.textContent = imagesData[currentImage].consumptionDessus;
//cellTempsDessus.textContent = imagesData[currentImage].tempsDessus;
// cellAltZoneVerte.textContent = imagesData[currentImage].altZoneVerte;
cellAltZoneJaune.textContent = imagesData[currentImage].altZoneJaune;
cellAltZoneRouge.textContent = imagesData[currentImage].altZoneRouge;
cellAltParDessus.textContent = imagesData[currentImage].altParDessus;
cellDirCellule.textContent = imagesData[currentImage].dirCellule;
cellVitesseCellule.textContent = imagesData[currentImage].vitesseCellule;
var altitude = imagesData[currentImage].altVol;
altitudeTextGenerator(altitude, 'lime')
var Xwaypt1 = imagesData[currentImage].waypt1X;
var Ywaypt1 = imagesData[currentImage].waypt1Y;
var Xwaypt2 = imagesData[currentImage].waypt2X;
var Ywaypt2 = imagesData[currentImage].waypt2Y;
var Xjaune = imagesData[currentImage].XcenterYellow;
var Yjaune = imagesData[currentImage].YcenterYellow;
var Xrouge = imagesData[currentImage].XcenterRed;
var Yrouge = imagesData[currentImage].YcenterRed;
var radiusRouge = imagesData[currentImage].radiusYellow;
var radiusJaune = imagesData[currentImage].radiusRed;



/*tableConsomTemps.querySelectorAll("td").forEach(cell => {
	cell.addEventListener("click",editCell(cell,waypointChoisi,condition,variableChanged));
});*/

function editCell(e){//, waypointChoisi, condition, variableChanged){

	console.log('Aqui tabla');


	const cell = e.target;
	console.log('La celda es', cell);

	const input = document.createElement("input");

	if(waypointChoisi != -1 && condition == 3 && (variableChanged == '' || (variableChanged == 'table' && cell.id == celdaEditada))){
	
	input.value = cell.textContent;
	var a = cell.textContent;

	cell.textContent = '';
	cell.appendChild(input);

	input.focus();

	input.addEventListener("blur", () => {
		cell.textContent = input.value;
		return true;
	});

	input.addEventListener("keydown", (e) => {
    if(e.key === "Enter") {
      cell.textContent = input.value; 
      input.blur();
      variableChanged = 'table';
      celdaEditada = cell.id;

      /*if(celdaEditada == 'vitesseCellule' && (celda.textContent != 0 || celda.textContent != 1 || celda.textContent != 2)){
      	prompt
      }*/


      return true;
      
    } else if (e.key === "Escape") {
    	input.blur();
    	cell.textContent = a;
    	return false;
    }

  });
} else if ((variableChanged != '' || variableChanged != 'table' || celdaEditada != cell.id) && waypointChoisi != -1) {
		alert("Vous avez déjà modifié un facteur, veuillez réinitialiser le cas pour pouvoir modifier un autre facteur.");
	}

}


function botonClicado(opcion,cell) {
        // Asignar el texto del botón seleccionado a la variable
        cell.textContent = opcion;
        // Puedes hacer más acciones aquí según la opción seleccionada

        // Cerrar el modal después de seleccionar una opción
        menuOpcionesMovCel.style.display = 'none';
        variableChanged = 'table';
        celdaEditada = cell.id;
}


function editCellMouvement(e) {
    const cell = e.target;

    const select = document.createElement("select");
    console.log(typeof cell.id);
    if (waypointChoisi !== -1 && condition == 3 && (variableChanged == '' || (variableChanged == 'table' && cell.id == celdaEditada))) {
        // Agrega opciones al elemento select
        if (cell.id == 'dirCellule'){
        	var opciones = ["Sans mouvement", "Droite", "Gauche"];
        } else if (cell.id == 'vitesseCellule'){
        	var opciones = ["Sans mouvement", "Lente", "Rapide"];
        }

        botonOpcion1.textContent = opciones[0];
        botonOpcion2.textContent = opciones[1];
        botonOpcion3.textContent = opciones[2];

        menuOpcionesMovCel.style.display = 'block';

        

    	// Asignar eventos de clic a cada botón con la respectiva opción
    	botonOpcion1.onclick = function() { botonClicado(opciones[0],cell); };
    	botonOpcion2.onclick = function() { botonClicado(opciones[1],cell); };
    	botonOpcion3.onclick = function() { botonClicado(opciones[2],cell); };
    	botonAnnuler.onclick = function() { menuOpcionesMovCel.style.display = 'none'; };


    } else if ((variableChanged !== '' || variableChanged !== 'table' || celdaEditada !== cell.id) && waypointChoisi !== -1) {
        alert("Vous avez déjà modifié un facteur, veuillez réinitialiser le cas pour pouvoir modifier un autre facteur.");
    }
}









tableConsomTemps.querySelectorAll("td").forEach(cell => {
	cell.addEventListener("click",editCell);
});

tableALTCellule.querySelectorAll("td").forEach(cell => {
	cell.addEventListener("click",editCell);
});

tableMouvementCellule.querySelectorAll("td").forEach(cell => {
	cell.addEventListener("click",editCellMouvement);
});







function cambiarImagen() {
  currentImage = (currentImage + 1) % imagesData.length;
  // imgND.src = imagenes[currentImage];
  imgND.src = imagesData[currentImage].src;
  console.log('Aqui',currentImage, 'Length', imagesData.length)
  /*cellConsomRoute.textContent = imagesData[currentImage].consumptionRoute;
  cellConsomWaypt1.textContent = imagesData[currentImage].consumptionWaypt1;
  cellConsomWaypt2.textContent = imagesData[currentImage].consumptionWaypt2;
  cellTempsWaypt1.textContent = imagesData[currentImage].tempsWaypt1;
  cellTempsRoute.textContent = imagesData[currentImage].tempsroute;
  cellTempsWaypt2.textContent = imagesData[currentImage].tempsWaypt2;
  // resetCase();
  /*let avionNDdifferenceY = avionNDinitialPositionTop - canvasAvionND.offsetTop;
  let avionNDdifferenceX = avionNDinitialPositionLeft - canvasAvionND.offsetLeft;
  canvasAvionND.style.transform = `translate(${avionNDdifferenceX}px, ${avionNDdifferenceY}px)`;
  startX = 0;
  startY = 0;
  canvasAvionNDX = 0;
  canvasAvionNDY = 0;*/
}

function cambiarCaso() {

	if(QUASApositions.includes(currentImage)){

		var indiceAleatorio = Math.floor(Math.random() * QUASAstatements.length);

		changeQUASAstatement(QUASAstatements[indiceAleatorio].statement);


  		QUASA.style.display = '';
  		botonVrai.addEventListener('click', function() {
	    botonVrai.classList.add('seleccionado');
   		botonFaux.classList.remove('seleccionado');
  		});

  		botonFaux.addEventListener('click', function() {
	    botonFaux.classList.add('seleccionado');
    	botonVrai.classList.remove('seleccionado');
  		});

  		botonAcceptQUASA.addEventListener('click', function() {
  			var a = botonVrai.classList.contains('seleccionado');
  			var b = botonFaux.classList.contains('seleccionado');
  			console.log('Valores lógicos',a,b);
  		if ( a || b){
  			QUASA.style.display = 'none';
  			console.log('Valores lógicos if',a,b);
  			return;

  		} else {
  			alert('Svp veuillez indiquer si l\'affirmation est vraie ou fausse.');
  		}
  		
  		});
  		botonFaux.classList.remove('seleccionado');
  		botonVrai.classList.remove('seleccionado');


	}

  currentImage = (currentImage + 1) % imagesData.length;

  // imgND.src = imagenes[currentImage];
  imgND.src = imagesData[currentImage].src;
  cellConsomRoute.textContent = imagesData[currentImage].consumptionRoute;
  cellConsomWaypt1.textContent = imagesData[currentImage].consumptionWaypt1;
  cellConsomWaypt2.textContent = imagesData[currentImage].consumptionWaypt2;
  // cellTempsWaypt1.textContent = imagesData[currentImage].tempsWaypt1;
  // cellTempsRoute.textContent = imagesData[currentImage].tempsroute;
  // cellTempsWaypt2.textContent = imagesData[currentImage].tempsWaypt2;
  var combDisponible = imagesData[currentImage].consumptionRoute * 1.20;
  cellCombDispo.textContent = combDisponible;
  cellConsomDessus.textContent = imagesData[currentImage].consumptionDessus;
	// cellTempsDessus.textContent = imagesData[currentImage].tempsDessus;
	// cellAltZoneVerte.textContent = imagesData[currentImage].altZoneVerte;
	cellAltZoneJaune.textContent = imagesData[currentImage].altZoneJaune;
	cellAltZoneRouge.textContent = imagesData[currentImage].altZoneRouge;
	cellAltParDessus.textContent = imagesData[currentImage].altParDessus;
	cellDirCellule.textContent = imagesData[currentImage].dirCellule;
	cellVitesseCellule.textContent = imagesData[currentImage].vitesseCellule;



	var Xwaypt1 = imagesData[currentImage].waypt1X;
	var Ywaypt1 = imagesData[currentImage].waypt1Y;
	var Xwaypt2 = imagesData[currentImage].waypt2X;
	var Ywaypt2 = imagesData[currentImage].waypt2Y;
	var Xjaune = imagesData[currentImage].XcenterYellow;
	var Yjaune = imagesData[currentImage].YcenterYellow;
	var Xrouge = imagesData[currentImage].XcenterRed;
	var Yrouge = imagesData[currentImage].YcenterRed;
	var radiusRouge = imagesData[currentImage].radiusYellow;
	var radiusJaune = imagesData[currentImage].radiusRed;

	var XposWapt1 = Xwaypt1 * NDcontainerWidth;
	var YposWapt1 = (1-Ywaypt1) * NDcontainerHeight;

	console.log('Xpos1',Xwaypt1);
	console.log('Ypos1',Ywaypt1)

	canvasWaypt1.style.top = YposWapt1 + 'px';
	canvasWaypt1.style.left = XposWapt1 + 'px';

	var XposWapt2 = Xwaypt2 * NDcontainerWidth;
	var YposWapt2 = (1-Ywaypt2) * NDcontainerHeight;

	canvasWaypt2.style.top = YposWapt2 + 'px';
	canvasWaypt2.style.left = XposWapt2 + 'px';

	canvasWaypt1PositionTop = canvasWaypt1.style.top;
	canvasWaypt1PositionLeft = canvasWaypt1.style.left
	canvasWaypt2PositionTop = canvasWaypt2.style.top;
	canvasWaypt2PositionLeft = canvasWaypt2.style.left

	drawWaypoints('red','red');

	resetCase2();



//resetCase();

var altitude = imagesData[currentImage].altVol;
altitudeTextGenerator(altitude, 'lime')

   // Esto habrá que cambiarlo por coger la posición de la info de la imagen
  /*let avionNDdifferenceY = avionNDinitialPositionTop - canvasAvionND.offsetTop;
  let avionNDdifferenceX = avionNDinitialPositionLeft - canvasAvionND.offsetLeft;
  canvasAvionND.style.transform = `translate(${avionNDdifferenceX}px, ${avionNDdifferenceY}px)`;
  startX = 0;
  startY = 0;
  canvasAvionNDX = 0;
  canvasAvionNDY = 0;*/
}


function calculadoraVariablesCS(){

	
	// Distancias presentes

	var distJauneDessus = Math.abs(parseFloat(cellAltZoneJaune.textContent) - parseFloat(cellAltParDessus.textContent))/7000;
	var distRougeDessus = Math.abs(parseFloat(cellAltZoneRouge.textContent) - parseFloat(cellAltParDessus.textContent))/7000;
	var distRougeDroit = Math.abs(Math.sqrt((Xrouge - Xwaypt1)**2 + (Yrouge - Ywaypt1)**2)-radiusRouge);
	var distRougeGauche = Math.abs(Math.sqrt((Xrouge - Xwaypt2)**2 + (Yrouge - Ywaypt2)**2)-radiusRouge);
	var distJauneDroit = Math.abs(Math.sqrt((Xjaune - Xwaypt1)**2 + (Yjaune - Ywaypt1)**2)-radiusJaune);
	var distJauneGauche = Math.abs(Math.sqrt((Xjaune - Xwaypt2)**2 + (Yjaune - Ywaypt2)**2)-radiusJaune);
	var distRougeRoute = Math.abs(Xrouge - 0.5 - radiusRouge);
	var distJauneRoute = Math.abs(Xjaune - 0.5 - radiusJaune);

	
	var futureXcenterRed = 0;
	var futureXcenterYellow = 0;


	// Distancias futuras
	var futureDistRougeDroit = Math.abs(Math.sqrt((futureXcenterRed - Xwaypt1)**2 + (Yrouge - Ywaypt1)**2)-radiusRouge);
	var futureDistRougeGauche = Math.abs(Math.sqrt((futureXcenterRed - Xwaypt2)**2 + (Yrouge - Ywaypt2)**2)-radiusRouge);
	var futureDistJauneDroit = Math.abs(Math.sqrt((futureXcenterYellow - Xwaypt1)**2 + (Yjaune - Ywaypt1)**2)-radiusJaune);
	var futureDistJauneGauche = Math.abs(Math.sqrt((futureXcenterYellow - Xwaypt2)**2 + (Yjaune - Ywaypt2)**2)-radiusJaune);
	var futureDistRougeRoute = Math.abs(futureXcenterRed - 0.5 - radiusRouge);
	var futureDistJauneRoute = Math.abs(futureXcenterYellow - 0.5 - radiusJaune);


	// Combustible
	var combDisponibleCS = parseFloat(cellCombDispo.textContent);
	var consomRouteCS = Math.abs((combDisponibleCS - parseFloat(cellConsomRoute.textContent)))/combDisponibleCS;
	var consumptionWaypt1CS = Math.abs((combDisponibleCS - parseFloat(cellConsomWaypt1.textContent)))/combDisponibleCS;
	var consumptionWaypt2CS = Math.abs((combDisponibleCS - parseFloat(cellConsomWaypt2.textContent)))/combDisponibleCS;
	var consumptionDessusCS = Math.abs((combDisponibleCS - parseFloat(cellConsomDessus.textContent)))/combDisponibleCS;

	

	let feautresRequest
	return feautresRequest =  {features: {
  	"Consommation dessus": consumptionDessusCS,
  	"Consommation droite": consumptionWaypt2CS,
  	"Consommation gauche": consumptionWaypt1CS,
  	"Consommation route": consomRouteCS,
  	"Dist jaune-dessus": distRougeDessus,
  	"Dist jaune-droite": distJauneDroit,
  	"Dist jaune-gauche": distJauneGauche,
  	"Dist jaune-route": distJauneRoute,
  	"Dist rouge-dessus": distRougeDessus,
  	"Dist rouge-droite": distRougeDroit,
  	"Dist rouge-gauche": distRougeGauche,
  	"Dist rouge-route": distRougeRoute,
  	"Future dist jaune-droite": futureDistJauneDroit,
  	"Future dist jaune-gauche": futureDistJauneGauche,
  	"Future dist jaune-route": futureDistRougeRoute,
  	"Future dist rouge-droite": futureDistJauneDroit,
  	"Future dist rouge-gauche": futureDistRougeGauche,
  	"Future dist rouge-route": futureDistRougeRoute
  }};

  


}






function selectionDeuxiemeOption(waypointChoisi){

	//let decisionContrefact = prompt(`Elige una opción: \n A) Waypoint 1 \n B) Waypoint 2`);

	popup.style.display = '';
	if (waypointChoisi == 1) {
		opcionA.textContent = 'Option 2'; 
		opcionB.textContent = 'Ne pas se dévier';
		opcionC.textContent = 'Par dessus';
	
	} else if (waypointChoisi == 2) {
		opcionA.textContent = 'Option 1'; 
		opcionB.textContent = 'Ne pas se dévier';
		opcionC.textContent = 'Par dessus';
	} else if (waypointChoisi == 0) {
		//console.log('Aqui contrefac');
		opcionA.textContent = 'Option 1'; 
		opcionB.textContent = 'Option 2';
		opcionC.textContent = 'Par dessus';
	} else if (waypointChoisi ==3) {
		opcionA.textContent = 'Option 1'; 
		opcionB.textContent = 'Option 2';
		opcionC.textContent = 'Ne pas se dévier';
	}

	

	// Detectar click en botones
	opcionA.addEventListener('click', () => {
  		manejarSeleccion('A',waypointChoisi);
  		if (waypointChoisi == 1){
  			waypointAlternatif = 2;
  		} else if (waypointChoisi == 2) {
  			waypointAlternatif = 1;
  		} else if (waypointChoisi == 0) {
  			waypointAlternatif =1;
  		} else if (waypointChoisi ==3) {
  			waypointAlternatif = 1;
  		}

	});

	opcionB.addEventListener('click', () => {
  		manejarSeleccion('B',waypointChoisi);

  		if (waypointChoisi == 1){
  			waypointAlternatif = 0;
  		} else if (waypointChoisi == 2) {
  			waypointAlternatif = 0;
  		} else if (waypointChoisi == 0) {
  			waypointAlternatif = 2;
  		} else if (waypointChoisi ==3) {
  			waypointAlternatif = 2;
  		}

	});
	opcionC.addEventListener('click', () => {
		manejarSeleccion('C',waypointChoisi);

		if (waypointChoisi == 1){
  			waypointAlternatif = 3;
  		} else if (waypointChoisi == 2) {
  			waypointAlternatif = 3;
  		} else if (waypointChoisi == 0) {
  			waypointAlternatif = 3;
  		} else if (waypointChoisi ==3) {
  			waypointAlternatif = 0;
  		}


	});
	bouttonMontrerSituation.addEventListener('click',()=>{
		popup.style.display = 'none';
		bouttonRetournerDeuxiemeOption.style.display = 'block';
		buttonParDessus.style.display = 'none';
		buttonsansChangement.style.display = 'none';
	});
}

bouttonRetournerDeuxiemeOption.addEventListener('click', ()=>{
	bouttonRetournerDeuxiemeOption.style.display = 'none';
	popup.style.display = '';
	buttonParDessus.style.display = 'block';
	buttonsansChangement.style.display = 'block';

});

/*
// Texto secciones PFD
var t1 = 'SPEED';
var t11 = 'SPEED1';
var t2 = 'ASI';
var t3 = 'HDG';
var t4 = 'VSI';
var t41 = 'V';
var t42 = 'S';
var t43 = 'I';
var t5 = 'AH';
var t6 = 'ALT';
// ctxFMA3.font = '50px "Andalé Mono", monospace';
ctxFMA3.font = '50px "Andale Mono", monospace';
ctxFMA3.fontWeight = 100;
var textWidth = ctxFMA3.measureText(t1).width;
var x = (FMA3.width / 2) - textWidth/2;
var y = FMA3.height / 2;
ctxFMA3.fillStyle = 'white';
ctxFMA3.fillText(t1,x,y);

ctxFMA3.font = '50px "Andale Mono", monospace';
ctxFMA3.fontWeight = 100;
var textWidth = ctxFMA3.measureText(t11).width;
var x = (FMA3.width / 2) - textWidth/2;
var y = FMA3.height / 2;
ctxFMA3.fillStyle = 'white';
ctxFMA3.fillText(t1,x,y+60);


ctxASI.font = '60px "Lucida Console", monospace';
var textWidth2 = ctxASI.measureText(t2).width;
var x2 = (ASI.width / 2) - textWidth2/2;
var y2 = ASI.height / 2;
ctxASI.fillStyle = 'white';
ctxASI.fillText(t2,x2,y2);
//ctxAH.font = '30px Arial';
//var textWidth3 = ctxAH.measureText(t5).width;
//var x3 = (AH.width / 2) - textWidth3/2;
//var y3 = AH.height / 2;
//ctxAH.fillStyle = 'white';
//ctxAH.fillText(t5,x3,y3);
ctxHDG.font = '30px "Lucida Console", monospace';
var textWidth4 = ctxHDG.measureText(t3).width;
var x4 = (HDG.width / 2) - textWidth4/2;
var y4 = HDG.height / 2;
ctxHDG.fillStyle = 'white';
ctxHDG.fillText(t3,x4,y4);
/*ctxVSI.font = '60px Arial';
var textWidth5 = ctxVSI.measureText(t4).width;
var x5 = (VSI.width / 2) - 2*textWidth5/2;
var y5 = VSI.height/2;
ctxVSI.fillStyle = 'white';
ctxVSI.textAlign = 'left';
ctxVSI.fillText(t41,x5,y5-35);
ctxVSI.fillText(t42,x5,y5+15);
ctxVSI.fillText(t43,x5,y5+65); */
/*
ctxALT.font = '100 60px "Lucida Console", monospace';
var textWidth = ctxALT.measureText(t6).width;
var x = (ALT.width / 2) - textWidth/2;
var y = ALT.height / 2;
ctxALT.fillStyle = 'white';
ctxALT.fillText(t6,x,y);


ctxVSItext.font = '60px "Lucida Console", monospace';
var textWidth5 = ctxVSItext.measureText(t4).width;
var x5 = (VSI.width / 2) - 2*textWidth5/2;
var y5 = VSI.height/2;
ctxVSItext.fillStyle = 'white';
ctxVSItext.textAlign = 'left';
ctxVSItext.fillText(t41,x5,y5-35);
ctxVSItext.fillText(t42,x5,y5+15);
ctxVSItext.fillText(t43,x5,y5+65);


*/

/*buttonmenu.addEventListener("change", ()=> {
	
});*/


let pixelRatio = 10 // window.devicePixelRatio || 1;
PFD.width = 200 * pixelRatio;
PFD.height = 200 * pixelRatio;
ctxPFD.scale(pixelRatio, pixelRatio);
ND.width = NDcontainerWidth; // 200*pixelRatio;
ND.height = NDcontainerHeight; // 200*pixelRatio;
// ctxND.scale(pixelRatio,devicePixelRatio);

ctxPFD.fillStyle = 'black';
ctxPFD.fillRect(0, 0, PFD.width, PFD.height);

ctxND.fillStyle = 'black';
ctxND.fillRect(0, 0, ND.width, ND.height);

let imgAH = new Image();
imgAH.src = "IMAGENES/AH.jpg";
imgAH.onload = function() {
  ctxAH.drawImage(imgAH, 0, 0, AH.width, AH.height);
}
imgAH.onerror = function() {
  console.log('Error al cargar la imagen');
}

FMAtextGenerator();
pressureTextGenerator();
NAVPFDtextGenerator();
drawVSI();
drawAltIndicatorBox();
altitudeTextGenerator(35510, 'lime');
drawVSIindicatorBox(000);
divisionGenerator(ALT,ctxALT,11);
divisionGenerator(ASI,ctxASI,8);
ASItextGenerator(200);
horizontalDivisionGenerator(HDG,ctxHDG,5);
//generateWaypoint(0.5,0.5);
drawWaypoints('red','red');



waypt1.addEventListener('click', async function () {
	if(waypointChoisi == -1) {
		const message = 'Voulez-vous choisir le waypoint 1?';
		const result = confirm(message);

		if (result) {
  			waypointChoisi = 1;

  			if((condition == 2 || condition == 3) && (session == 2 || session == 3)){

  			let feautresCalculadas = calculadoraVariablesCS();

  			console.log('features Request', feautresCalculadas);

  			console.log('Feautres', feautresCalculadas.features);

  			recomendacionCS = await getRecommendationCS(feautresCalculadas.features);
  			let recommendation;

  			//console.log(promesaCS);

  			/*promesaCS.then((data) => {
  				console.log(data);
       			recomendacionCS = data;
       			// console.log('data', data, data.predictions, typeof data.predictions)
    		})*/
			
			console.log(recomendacionCS, typeof recomendacionCS)
		
			/*if (recomendacionCS == 1){
    			recommendation = 'l\'option 1';
    		} else*/
    		if (recomendacionCS != waypointChoisi){
    		if (recomendacionCS == 2){
    			recommendation = 'l\'option 2';
    		} else if (recomendacionCS == 3) {
    			recommendation = 'par dessus'
    		} else if (recomendacionCS == 0) {
    			recommendation = 'ne pas se dévier'
    		}


    		var aceptarSuggestion = confirm("Le modèle suggère " + recommendation + '\nVoulez vous choisir l\'option suggérée?');
    		
    		if (aceptarSuggestion){
    			
    			waypointChoisi = recomendacionCS;
    		} else {
    		}}
  			//showButtonsContrefacutel();
  			}else if((condition == 2 || condition == 3) && (session == 1)){

    			let feautresCalculadas = calculadoraVariablesCS();

  				await sendTrainingCase(220, feautresCalculadas.features, waypointChoisi);
    		}

  			if (condition == 3 && session == 1){
  				selectionDeuxiemeOption(waypointChoisi);
  			} else if (condition != 3 || (condition == 3 && session != 1)){
  				waypointChoisi = -1;
				cambiarCaso();
				hideButtonsContrefacutel();
				resetDropdown();
  			}
  			
		} else {
	}} else if (wasDragged == true) {
		wasDragged = false;
	}
});

waypt2.addEventListener('click', async function () {
	if(waypointChoisi == -1) {
	const message = 'Voulez-vous choisir le waypoint 2?';
	const result = confirm(message);

	if (result) {
  			waypointChoisi = 2;
  			//showButtonsContrefacutel();
  			
  			if((condition == 2 || condition == 3) && (session == 2 || session == 3)){

  			let feautresCalculadas = calculadoraVariablesCS();

  			recomendacionCS = await getRecommendationCS(feautresCalculadas.features);
  			let recommendation;

  			//console.log(promesaCS);

  			/*promesaCS.then((data) => {
  				console.log(data);
       			recomendacionCS = data;
       			// console.log('data', data, data.predictions, typeof data.predictions)
    		})*/
			
		
			if (recomendacionCS == 1){
    			recommendation = 'l\'option 1';
    		/*} else if (recomendacionCS == 2){
    			recommendation = 'l\'option 2';*/
    		} else if (recomendacionCS == 3) {
    			recommendation = 'par dessus'
    		} else if (recomendacionCS == 0) {
    			recommendation = 'ne pas se dévier'
    		}


    		var aceptarSuggestion = confirm("Le modèle suggère " + recommendation + '\nVoulez vous choisir l\'option suggérée?');
    		if (aceptarSuggestion){
    			console.log('Aqui', waypointChoisi)
    			waypointChoisi = recomendacionCS;
    		} else {
    		}} else if((condition == 2 || condition == 3) && (session == 1)){

    			let feautresCalculadas = calculadoraVariablesCS();

  				await sendTrainingCase(220, feautresCalculadas.features, waypointChoisi);
    		}


  			if (condition == 3 && session == 1){
  				selectionDeuxiemeOption(waypointChoisi);
  			} else if (condition != 3 || (condition == 3 && session != 1)){
  				waypointChoisi = -1;
				cambiarCaso();
				hideButtonsContrefacutel();
				resetDropdown();
  			}
	} else {
  		
	}
}
});


// cellGenerator('data.json');

/*
ctxAvionND.beginPath();
ctxAvionND.moveTo(xAvion,0);
ctxAvionND.lineTo(xAvion,canvasAvionND.height);
ctxAvionND.strokeStyle = "yellow";
ctxAvionND.lineWidth = 10;
ctxAvionND.stroke();

ctxAvionND.beginPath();
ctxAvionND.moveTo(0,yAvion);
ctxAvionND.lineTo(canvasAvionND.width,yAvion);
ctxAvionND.strokeStyle = "yellow";
ctxAvionND.lineWidth = 7;
ctxAvionND.stroke(); */

buttonCambiarImagen.addEventListener('click', cambiarImagen);
buttonresetCase.addEventListener('click', () => {
	canvasWaypt1PositionTop = canvasWaypt1.offsetTop;
	canvasWaypt1PositionLeft = canvasWaypt1.offsetLeft;
	canvasWaypt2PositionTop = canvasWaypt2.offsetTop;
	canvasWaypt2PositionLeft = canvasWaypt2.offsetLeft;
	resetCase(canvasWaypt1PositionTop,canvasWaypt1PositionLeft,canvasWaypt2PositionTop,canvasWaypt2PositionLeft);
	cellConsomRoute.textContent = imagesData[currentImage].consumptionRoute;
	cellConsomWaypt1.textContent = imagesData[currentImage].consumptionWaypt1;
	cellConsomWaypt2.textContent = imagesData[currentImage].consumptionWaypt2;
	// cellTempsWaypt1.textContent = imagesData[currentImage].tempsWaypt1;
//	cellTempsRoute.textContent = imagesData[currentImage].tempsroute;
//	cellTempsWaypt2.textContent = imagesData[currentImage].tempsWaypt2;
	var combDisponible = imagesData[currentImage].consumptionRoute * 1.20;
	cellCombDispo.textContent = combDisponible;
	cellConsomDessus.textContent = imagesData[currentImage].consumptionDessus;




// cellTempsDessus.textContent = imagesData[currentImage].tempsDessus;
// cellAltZoneVerte.textContent = imagesData[currentImage].altZoneVerte;
cellAltZoneJaune.textContent = imagesData[currentImage].altZoneJaune;
cellAltZoneRouge.textContent = imagesData[currentImage].altZoneRouge;
cellAltParDessus.textContent = imagesData[currentImage].altParDessus;
cellDirCellule.textContent = imagesData[currentImage].dirCellule;
cellVitesseCellule.textContent = imagesData[currentImage].vitesseCellule;

var Xwaypt1 = imagesData[currentImage].waypt1X;
var Ywaypt1 = imagesData[currentImage].waypt1Y;
var Xwaypt2 = imagesData[currentImage].waypt2X;
var Ywaypt2 = imagesData[currentImage].waypt2Y;
var Xjaune = imagesData[currentImage].XcenterYellow;
var Yjaune = imagesData[currentImage].YcenterYellow;
var Xrouge = imagesData[currentImage].XcenterRed;
var Yrouge = imagesData[currentImage].YcenterRed;
var radiusRouge = imagesData[currentImage].radiusYellow;
var radiusJaune = imagesData[currentImage].radiusRed;

var altitude = imagesData[currentImage].altVol;
altitudeTextGenerator(altitude, 'lime')
} );


buttonsansChangement.addEventListener('click', async function(){
	if(waypointChoisi == -1) {
	const message = 'Voulez-vous rester sur la route?';
	const result = confirm(message);

	if (result) {
		//calculadoraVariablesCS();
  		waypointChoisi = 0;
		/*if (condition == 3){
			showButtonsContrefacutel();
		} else {
			waypointChoisi = -1;
			cambiarCaso();
			hideButtonsContrefacutel();
			resetDropdown();
		}*/
		

		if((condition == 2 || condition == 3) && (session == 2 || session == 3)){

			let feautresCalculadas = calculadoraVariablesCS();

  			recomendacionCS = await getRecommendationCS(feautresCalculadas.features);
  			let recommendation;

  			//console.log(promesaCS);

  			/*promesaCS.then((data) => {
  				console.log(data);
       			recomendacionCS = data;
       			// console.log('data', data, data.predictions, typeof data.predictions)
    		})*/
			
			console.log(recomendacionCS, typeof recomendacionCS)
		
			if (recomendacionCS == 1){
    			recommendation = 'l\'option 1';
    		} else if (recomendacionCS == 2){
    			recommendation = 'l\'option 2';
    		} else if (recomendacionCS == 3) {
    			recommendation = 'par dessus'
    		}/* else if (recomendacionCS == 0) {
    			recommendation = 'ne pas se dévier'
    		}*/


    		var aceptarSuggestion = confirm("Le modèle suggère " + recommendation + '\nVoulez vous choisir l\'option suggérée?');
    		if (aceptarSuggestion){
    			
    			waypointChoisi = recomendacionCS;
    		} else {
    		}} else if((condition == 2 || condition == 3) && (session == 1)){

    			let feautresCalculadas = calculadoraVariablesCS();

  				await sendTrainingCase(220, feautresCalculadas.features, waypointChoisi);
    		}





			if (condition == 3 && session == 1){
				selectionDeuxiemeOption(waypointChoisi);
	}else if (condition != 3 || (condition == 3 && session != 1)){
  				waypointChoisi = -1;
				cambiarCaso();
				hideButtonsContrefacutel();
				resetDropdown();
  			}
	} else {
  		
	}
}	
});

buttonParDessus.addEventListener('click', async function(){
	if(waypointChoisi == -1) {
		const message = 'Voulez vous éviter par dessus?';
		const result = confirm(message);

		if (result){
			waypointChoisi = 3;


			if((condition == 2 || condition == 3) && (session == 2 || session == 3)){

			let feautresCalculadas = calculadoraVariablesCS();
  			recomendacionCS = await getRecommendationCS(feautresCalculadas.features);
  			let recommendation;

  			//console.log(promesaCS);

  			/*promesaCS.then((data) => {
  				console.log(data);
       			recomendacionCS = data;
       			// console.log('data', data, data.predictions, typeof data.predictions)
    		})*/
			
			console.log(recomendacionCS, typeof recomendacionCS)
		
			if (recomendacionCS == 1){
    			recommendation = 'l\'option 1';
    		} else if (recomendacionCS == 2){
    			recommendation = 'l\'option 2';
    		/*} else if (recomendacionCS == 3) {
    			recommendation = 'par dessus'*/
    		} else if (recomendacionCS == 0) {
    			recommendation = 'ne pas se dévier'
    		}


    		var aceptarSuggestion = confirm("Le modèle suggère " + recommendation + '\nVoulez vous choisir l\'option suggérée?');
    		if (aceptarSuggestion){
    			
    			waypointChoisi = recomendacionCS;
    		} else {
    		}}else if((condition == 2 || condition == 3) && (session == 1)){

    			let feautresCalculadas = calculadoraVariablesCS();

  				await sendTrainingCase(220, feautresCalculadas.features, waypointChoisi);
    		}










			if (condition == 3 && session ==1){
			selectionDeuxiemeOption(waypointChoisi);
		}else if (condition != 3 || (condition == 3 && session != 1)){
				waypointChoisi = -1;
				cambiarCaso();
				hideButtonsContrefacutel();
				resetDropdown();
  			}
		} else {

		}
	}
})




//imgND.src = "IMAGENES/ND_base.jpg";
//imgND.src = "IMAGENES/ND_radar.png";
imgND.onload = function() {
	const scaleWidth = Math.min(NDcontainerWidth / imgND.width);
	const scaleHeight = Math.min(NDcontainerHeight / imgND.height);
  	ctxND.drawImage(imgND, -0.125*ND.width, 0, ND.width*1.25, ND.height);

}
imgND.onerror = function() {
  console.log('Error al cargar la imagen');
}







// Función para dibujar las líneas iniciales en el canvas
function drawLines() {
ctxAvionND.beginPath();
ctxAvionND.moveTo(xAvion,0);
ctxAvionND.lineTo(xAvion,canvasAvionND.height);
ctxAvionND.strokeStyle = "yellow";
ctxAvionND.lineWidth = 10;
ctxAvionND.stroke();

ctxAvionND.beginPath();
ctxAvionND.moveTo(0,yAvion);
ctxAvionND.lineTo(canvasAvionND.width,yAvion);
ctxAvionND.strokeStyle = "yellow";
ctxAvionND.lineWidth = 7;
ctxAvionND.stroke();
}

// Función para verificar si una posición está dentro de los límites del ND canvas
function isWithinBounds(x, y) {
  const rect = ND.getBoundingClientRect();
 // console.log('newCanvasX',x,'newCanvasY',y,'canvasNDX',rect.right,'canvasNDY',rect.top, 'anchura', rect.width, 'altura', rect.height);
  return x >= -1*rect.width/2 && x <= rect.width/2 && y >= -2/3*rect.height && y <= 1/10*rect.height ;
 // console.log('Sabe que estoy en los límites');
}

function isWithinBoundsWaypts(x, y) {
  const rect = ND.getBoundingClientRect();
 // console.log('newCanvasX',x,'newCanvasY',y,'canvasNDX',rect.right,'canvasNDY',rect.top, 'anchura', rect.width, 'altura', rect.height);
  return x >= -1*rect.width/2 && x <= rect.width/1.2 && y >= -2/3*rect.height && y <= rect.height ;
 // console.log('Sabe que estoy en los límites');
}

// Evento mousedown para comenzar el arrastre del canvas
canvasAvionND.addEventListener('mousedown', function (event) {
	if(waypointChoisi != -1 && condition == 3 && (variableChanged == '' || variableChanged == 'avion')){
  if (event.button === 0) { // Botón izquierdo del ratón
    startX = event.clientX;
    startY = event.clientY;
    isDragging = true;
    variableChanged = 'avion';
    // console.log('Sabe que he clicado');
  }
} else if ((variableChanged != '' || variableChanged != 'avion') && waypointChoisi != -1) {
		alert("Vous avez déjà modifié un facteur, veuillez réinitialiser le cas pour pouvoir modifier un autre facteur.");
	}
});

canvasWaypt1.addEventListener('mousedown', function (event) {
	//if(waypointChoisi != -1 && condition == 3 && (variableChanged == '' || variableChanged == 'waypt1')){
	if((waypointChoisi == 1 || wayptAlternatif == 1 ) && condition == 3 && (variableChanged == '' || variableChanged == 'waypt1')){
  if (event.button === 0) { // Botón izquierdo del ratón
    startX = event.clientX;
    startY = event.clientY;
    isDraggingWaypt1 = true;
    variableChanged = 'waypt1';
    console.log(variableChanged);
  }
} else if ((variableChanged != '' || variableChanged != 'waypt1') && waypointChoisi != -1) {
		alert("Vous avez déjà modifié un facteur, veuillez réinitialiser le cas pour pouvoir modifier un autre facteur.");
	}
});

canvasWaypt2.addEventListener('mousedown', function (event) {
	//if(waypointChoisi != -1 && condition == 3 && (variableChanged == '' || variableChanged == 'waypt2')){
	if((waypointChoisi == 2 || wayptAlternatif == 2 ) && condition == 3 && (variableChanged == '' || variableChanged == 'waypt2')){
  if (event.button === 0) { // Botón izquierdo del ratón
    startX = event.clientX;
    startY = event.clientY;
    isDraggingWaypt2 = true;
    variableChanged = 'waypt2';
    console.log(variableChanged);
  }
} else if ((variableChanged != '' || variableChanged != 'waypt2') && waypointChoisi != -1) {
		alert("Vous avez déjà modifié un facteur, veuillez réinitialiser le cas pour pouvoir modifier un autre facteur.");
	}
});

// Evento mousemove para arrastrar el canvas
document.addEventListener('mousemove', function (event) {
  //if (event.button === 1 && isDragging) {
  if (isDragging) {
  //	console.log('Sabe que me muevo');
    const diffX = event.clientX - startX;
    const diffY = event.clientY - startY;
    let newCanvasX = canvasAvionNDX + diffX;
    let newCanvasY = canvasAvionNDY + diffY;
    // console.log('diffX',diffX);

    // Verificar si la nueva posición está dentro de los límites del ND canvas
    if (isWithinBounds(newCanvasX, newCanvasY)) {
    	// console.log('sabe que estoy en los limites')
    //}
      canvasAvionNDX = newCanvasX;
      canvasAvionNDY = newCanvasY;
      // console.log('NewCanvasX', newCanvasX);
    }

    // Actualizar la posición del canvas en el DOM
    canvasAvionND.style.transform = `translate(${canvasAvionNDX}px, ${canvasAvionNDY}px)`;

    startX = event.clientX;
    // console.log('StartX',startX, 'posini', avionNDinitialPositionLeft);
    startY = event.clientY;

  } else if (isDraggingWaypt1) {

  	const diffX = event.clientX - startX;
    const diffY = event.clientY - startY;
    let newCanvasX = canvasWaypt1X + diffX;
    let newCanvasY = canvasWaypt1Y + diffY;
    // console.log('diffX',diffX);

    // Verificar si la nueva posición está dentro de los límites del ND canvas
    if (isWithinBoundsWaypts(newCanvasX, newCanvasY)) {
    	// console.log('sabe que estoy en los limites')
    //}
      canvasWaypt1X = newCanvasX;
      canvasWaypt1Y = newCanvasY;
      // console.log('NewCanvasX', newCanvasX);
    }

    // Actualizar la posición del canvas en el DOM
    canvasWaypt1.style.transform = `translate(${canvasWaypt1X}px, ${canvasWaypt1Y}px)`;


    startX = event.clientX;
    // console.log('StartX',startX, 'posini', avionNDinitialPositionLeft);
    startY = event.clientY;
  } else if (isDraggingWaypt2) {

  	const diffX = event.clientX - startX;
    const diffY = event.clientY - startY;
    let newCanvasX = canvasWaypt2X + diffX;
    let newCanvasY = canvasWaypt2Y + diffY;
    // console.log('diffX',diffX);

    // Verificar si la nueva posición está dentro de los límites del ND canvas
    if (isWithinBoundsWaypts(newCanvasX, newCanvasY)) {
    	// console.log('sabe que estoy en los limites')
    //}
      canvasWaypt2X = newCanvasX;
      canvasWaypt2Y = newCanvasY;
      // console.log('NewCanvasX', newCanvasX);
    }

    // Actualizar la posición del canvas en el DOM
    canvasWaypt2.style.transform = `translate(${canvasWaypt2X}px, ${canvasWaypt2Y}px)`;

    startX = event.clientX;
    // console.log('StartX',startX, 'posini', avionNDinitialPositionLeft);
    startY = event.clientY;
  }
});

// Evento mouseup para dejar de arrastrar el canvas
document.addEventListener('mouseup', function (event) {
  if (event.button === 0) { // Botón izquierdo del ratón
    isDragging = false;
    isDraggingWaypt1 = false;
    isDraggingWaypt2 = false;
    wasDragged = true;
  //  console.log('Sabe que he levantado')
  }
});

// Llamar a la función para dibujar las líneas iniciales
drawLines();







const dropdown = document.querySelector('.dropdown');
const toggleButton = document.getElementById('toggleButton');
const selectedOption = document.getElementById('selectedOption');
const menuItems = document.querySelectorAll('#menu li');

toggleButton.addEventListener('click', function() {
	if (variableChanged == ''){
  dropdown.classList.toggle('open');
  inputVariableChoisie.style.display = "none";
	} else if (variableChanged != '') {
		alert("Vous avez déjà modifié un facteur, veuillez réinitialiser le cas pour pouvoir modifier un autre facteur.");
	}
});

menuItems.forEach(function(item) {
  item.addEventListener('click', function() {
    const option = this.textContent;
    selectedOption.textContent = option;
    
    menuItems.forEach(function(item) {
      item.classList.remove('selected');
    });
    this.classList.add('selected');
    
    dropdown.classList.remove('open');

    if (option!='Autres facteurs'){
    	inputVariableChoisie.style.display = '';
    	variableChanged = 'menu';
    }

    

    /*inputVariableChoisie.innerHTML = `
	<input type="text" id="input-text" placeholder="Valeur de la ${option}" class = "inputClass">
	`;*/
  });
});

function resetDropdown(){
	selectedOption.innerText = "Selecciona una opción";

  menuItems.forEach(item => {
    item.classList.remove("selected");
    });
}

/*function incrementalSave() {
	let timestamp = Date.now();
	const dataIncremental = {
		time: timestamp,
		participant: numParticipant,
		condition: condition,
		session: session
	}

	const transaction = db.transaction([participantDB], "readwrite");
	const store = transaction.objectStore(participantDB);
	store.add(dataIncremental);
}*/

/*function saveData(){
	let timestamp = Date.now();
	dataToSaveJSON.push({
		time: timestamp,
		participant: numParticipant,
		condition: condition,
		session: session
	})
	/*const fs = window.requestFileSystem(window.TEMPORARY, 1024*1024); 

	fs.root.getFile('data.json', {create: true}, function(fileEntry) {

  		fileEntry.createWriter(function(fileWriter) {

    	fileWriter.write(JSON.stringify(dataToSaveJSON));

  	});

	});

	const file = new Blob([dataToSaveJSON], {type: 'text/plain'});

	FileSaver.saveAs(file, 'datos.txt');

}*/

function saveData2(){

	let timestamp = Date.now();
	dataToSaveJSON.push({
		time: timestamp,
		participant: numParticipant,
		condition: condition,
		session: session
	})

	var fileContent = JSON.stringify(dataToSaveJSON);
	//var bb = new Blob([fileContent ], { type: 'text/plain' });
	const bb = new Blob([JSON.stringify(dataToSaveJSON, null, 2)], {
  	type: "application/json",
	});
	var a = document.createElement('a');
	a.download = 'participant'+numParticipant+'.json';
	a.href = window.URL.createObjectURL(bb);
	a.click();
	a.remove();
}

buttonFinirExperience.addEventListener('click', function(){

	popupMatrizCorrelacion.style.display = '';
});


/*tablaMatrizCorrelacion.querySelectorAll("td").forEach(cell => {
	cell.addEventListener("click",editCellMatrizCorrelacion);
});*/

// botonAcceptMatrizCorrelacion.addEventListener('click', saveData2)











function manejarSeleccion(seleccion,waypointChoisi) {

if (seleccion == 'A'){
	if (waypointChoisi == 0){
		wayptAlternatif = 1;
		drawWaypoints('green','red');
		// cellTempsWaypt1.style.backgroundColor = 'green';
		// cellTempsRoute.style.backgroundColor = 'green';
		cellConsomWaypt1.style.backgroundColor = 'green';
		cellConsomRoute.style.backgroundColor = 'green';
	} else if (waypointChoisi == 1) {
		wayptAlternatif = 2;
		drawWaypoints('green','green')
		// cellTempsWaypt1.style.backgroundColor = 'green';
		// cellTempsWaypt2.style.backgroundColor = 'green';
		cellConsomWaypt1.style.backgroundColor = 'green';
		cellConsomWaypt2.style.backgroundColor = 'green';
	} else if (waypointChoisi == 2){
		wayptAlternatif = 1;
		drawWaypoints('green','green')
		// cellTempsWaypt1.style.backgroundColor = 'green';
		// cellTempsWaypt2.style.backgroundColor = 'green';
		cellConsomWaypt1.style.backgroundColor = 'green';
		cellConsomWaypt2.style.backgroundColor = 'green';
	} else if (waypointChoisi == 3){
		wayptAlternatif = 1;
		drawWaypoints('green','red')
		// cellTempsWaypt1.style.backgroundColor = 'green';
		// cellTempsDessus.style.backgroundColor = 'green';
		cellConsomDessus.style.backgroundColor = 'green';
		cellConsomWaypt1.style.backgroundColor = 'green';
		cellAltParDessus.style.backgroundColor = 'green';
	}

} else if (seleccion == 'B'){
	if (waypointChoisi == 0){
		wayptAlternatif = 2;
		drawWaypoints('red','green')
		// cellTempsWaypt2.style.backgroundColor = 'green';
		// cellTempsRoute.style.backgroundColor = 'green';
		cellConsomRoute.style.backgroundColor = 'green';
		cellConsomWaypt2.style.backgroundColor = 'green';
	} else if (waypointChoisi == 1) {
		wayptAlternatif = 0;
		drawWaypoints('green','red')
		// cellTempsWaypt1.style.backgroundColor = 'green';
		// cellTempsRoute.style.backgroundColor = 'green';
		cellConsomRoute.style.backgroundColor = 'green';
		cellConsomWaypt1.style.backgroundColor = 'green';
	} else if (waypointChoisi == 2){
		wayptAlternatif = 0;
		drawWaypoints('red','green')
		//cellTempsWaypt2.style.backgroundColor = 'green';
		//cellTempsRoute.style.backgroundColor = 'green';
		cellConsomRoute.style.backgroundColor = 'green';
		cellConsomWaypt2.style.backgroundColor = 'green';
	} else if (waypointChoisi == 3){
		wayptAlternatif = 2;
		drawWaypoints('red','green')
		// cellTempsWaypt2.style.backgroundColor = 'green';
		// cellTempsDessus.style.backgroundColor = 'green';
		cellConsomDessus.style.backgroundColor = 'green';
		cellConsomWaypt2.style.backgroundColor = 'green';
		cellAltParDessus.style.backgroundColor = 'green';
	}

} else if (seleccion == 'C'){
	if (waypointChoisi == 0){
		wayptAlternatif = 3;
		// cellTempsDessus.style.backgroundColor = 'green';
		// cellTempsRoute.style.backgroundColor = 'green';
		cellConsomRoute.style.backgroundColor = 'green';
		cellConsomDessus.style.backgroundColor = 'green';
		cellAltParDessus.style.backgroundColor = 'green';
	} else if (waypointChoisi == 1) {
		wayptAlternatif = 3;
		drawWaypoints('green','red')
		// cellTempsWaypt1.style.backgroundColor = 'green';
		// cellTempsDessus.style.backgroundColor = 'green';
		cellConsomDessus.style.backgroundColor = 'green';
		cellConsomWaypt1.style.backgroundColor = 'green';
		cellAltParDessus.style.backgroundColor = 'green';
	} else if (waypointChoisi == 2){
		wayptAlternatif = 3;
		drawWaypoints('red','green')
		// cellTempsWaypt2.style.backgroundColor = 'green';
		// cellTempsDessus.style.backgroundColor = 'green';
		cellConsomDessus.style.backgroundColor = 'green';
		cellConsomWaypt2.style.backgroundColor = 'green';
		cellAltParDessus.style.backgroundColor = 'green';
	} else if (waypointChoisi == 3){
		wayptAlternatif = 0;
		// cellTempsDessus.style.backgroundColor = 'green';
		// cellTempsRoute.style.backgroundColor = 'green';
		cellConsomRoute.style.backgroundColor = 'green';
		cellConsomDessus.style.backgroundColor = 'green';
		cellAltParDessus.style.backgroundColor = 'green';
	}

}

/*function calculadoraVariablesCS(){
	// Distancias presentes

	var distJauneDessus = parseFloat(cellAltZoneJaune.textContent) - parseFloat(cellAltParDessus.textContent);
	var distRougeDessus = parseFloat(cellAltZoneRouge.textContent) - parseFloat(cellAltParDessus.textContent);
	console.log('Distancias',distJauneDessus,distRougeDessus);
	
	
	cellDirCellule.textContent = imagesData[currentImage].dirCellule;
	cellVitesseCellule

	// Distancias futuras

	// Combustible


}*/



  	/*waypointChoisi = -1;
	cambiarCaso();
	hideButtonsContrefacutel();
	resetDropdown();*/
	altitudeTextGenerator(altitude,'green');
	cellCombDispo.style.backgroundColor = 'green';
	cellAltZoneJaune.style.backgroundColor = 'green';
	cellAltZoneRouge.style.backgroundColor = 'green';
	showButtonsContrefacutel();
	// incrementalSave();
	// saveData();
	// saveData2();
  
  popup.style.display = 'none'; // Ocultar

  
}

buttonsoumettreContrefactuel.addEventListener('click', async function(){

	let feautresCalculadas = calculadoraVariablesCS();

  	await sendTrainingCase(220, feautresCalculadas.features, wayptAlternatif);

	var celdas = document.querySelectorAll('.celda');
	celdas.forEach(function(tabla) {
    tabla.style.backgroundColor = 'hsl(0, 0%, 90%)';
    console.log('Color cambiado');
  	});
	waypointChoisi = -1;
	if (typeof newCanvasX !== 'undefined'){
		delete newCanvasX;
		delete newCanvasY;
	}
	cambiarCaso();
	hideButtonsContrefacutel();
	resetDropdown();

	//let decisionContrefact = prompt(`Elige una opción: \n A) Waypoint 1 \n B) Waypoint 2`);

	/*popup.style.display = '';
	console.log('Waypoint choisi',waypointChoisi);
	// Asignar opciones
	if (waypointChoisi == 1) {
		opcionA.textContent = 'Option 2'; 
		opcionB.textContent = 'Ne pas se dévier';
		opcionC.textContent = 'Par dessus';
	
	} else if (waypointChoisi == 2) {
		opcionA.textContent = 'Option 1'; 
		opcionB.textContent = 'Ne pas se dévier';
		opcionC.textContent = 'Par dessus';
	} else if (waypointChoisi == 0) {
		//console.log('Aqui contrefac');
		opcionA.textContent = 'Option 1'; 
		opcionB.textContent = 'Option 2';
		opcionC.textContent = 'Par dessus';
	} else if (waypointChoisi ==3) {
		opcionA.textContent = 'Option 1'; 
		opcionB.textContent = 'Option 2';
		opcionC.textContent = 'Ne pas se dévier';
	}

	

	// Detectar click en botones
	opcionA.addEventListener('click', () => {
  		manejarSeleccion('A'); 
	});

	opcionB.addEventListener('click', () => {
  		manejarSeleccion('B');
	});
	opcionC.addEventListener('click', () => {
		manejarSeleccion('C');
	});	*/
})

window.addEventListener('message', function(event) {
            // Verificar la fuente del mensaje para mayor seguridad
            if (event.source === document.getElementById('iframeCorrelacion').contentWindow) {
                // Verificar el contenido del mensaje
                if (event.data === 'AcceptedMatrix') {
                    // Realizar la acción en la página principal
                    popupMatrizCorrelacion.style.display = 'none';
                    popupNASATLX.style.display = '';
                } 
               }

    		if (event.source === document.getElementById('iframeNASATLX').contentWindow) {
                // Verificar el contenido del mensaje
                if (event.data === 'Accepted NASA-TLX') {
                	popupNASATLX.style.display = 'none';
                	popupTrustInAuto1.style.display = '';
                }
                
            }

            if (event.source === document.getElementById('iframeTrustInAuto1').contentWindow) {
                // Verificar el contenido del mensaje
                if (event.data === 'Accepted TrustInAuto1') {
                	popupTrustInAuto1.style.display = 'none';
                	popupTrustInAuto2.style.display = '';
                }
                
            }
            if (event.source === document.getElementById('iframeTrustInAuto2').contentWindow) {
                // Verificar el contenido del mensaje
                if (event.data === 'Accepted TrustInAuto2') {
                	popupTrustInAuto2.style.display = 'none';
                }
                
            }
            
});

/*function pushDataToSave(){
	let timestamp = Date.now();
	dataToSave.push({
		time: timestamp,
		participant: numParticipant,
		condition: condition,
		session: session
	})
	console.log(dataToSave);
}*/

/*
function sendCaseToCS(waypointDecided, participant){
	let myheaders = new Headers();

	// headers.set('Authorization', 'Basic ' + btoa(usuario + ":" + contraseña));
	myheaders.append('Authorization', 'Basic ' + btoa(usuario + ":" + contraseña));
	myheaders.append('x-requested-with', 'XMLHttpRequest');
	myheaders.append('Content-Type', 'application/json');
	myheaders.append('origin', 'https://cognitiveshadow.com');
	myheaders.append('accept', 'application/json');


let requestBody = {
  decisions: {
    "Waypoint": waypointDecided
  },
  learning: true,
  predictionMode: "ACTIVE",
  features: {
  "Consommation dessus": 0.8328,
  "Consommation droite": 0.0324,
  "Consommation gauche": 0.4075,
  "Consommation route": 0.7881,
  "Dist jaune-dessus": ,
  "Dist jaune-droite": 0.8012,
  "Dist jaune-gauche": 0.4344,
  "Dist jaune-route": 0.225,
  "Dist rouge-dessus": 0.9416,
  "Dist rouge-droite": 0.1627,
  "Dist rouge-gauche": 0.8773,
  "Dist rouge-route": 0.1617,
  "Future dist jaune-droite": 0.9107,
  "Future dist jaune-gauche": 0.5691,
  "Future dist jaune-route": 0.6687,
  "Future dist rouge-droite": 0.9201,
  "Future dist rouge-gauche": 0.9377,
  "Future dist rouge-route": 0.7518
  }
};

participant = 222;

url3 = 'https://cognitiveshadow.com/api/problems/192/users/' + participant.toString() + '/capture';


var requestOptions = {
  method: 'POST',
  headers: myheaders,
  body: JSON.stringify(requestBody)
  // mode: 'cors',
  // credentials: 'include',
};

fetch(url3, requestOptions)

}*/






/*
let isDragging = false;
let startX, startY;

canvasAvionND.addEventListener('mousedown', function(event) {
  // Verificamos si el click fue dentro de la cruz
  console.log('Sabe que he clicado');
  let rect = canvasAvionND.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  isDragging = true;
  startX = x;
  startY = y;
});

canvasAvionND.addEventListener('mousemove', function(event) {
	console.log('Sabe que me muevo');
  if (isDragging) {
  	console.log('Sabe que estoy arrastrando');
    // Calculamos la nueva posición de la cruz
    let rect = canvasAvionND.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    let dx = x - startX;
    let dy = y - startY;
    startX = x;
    startY = y;
    ctxAvionND.translate(dx, dy);

    // Dibujamos la cruz en su nueva posición
    ctxAvionND.clearRect(0, 0, canvasAvionND.width, canvasAvionND.height);
    ctxAvionND.beginPath();
    ctxAvionND.moveTo(xAvion,0);
	ctxAvionND.lineTo(xAvion,canvasAvionND.height);
    ctxAvionND.strokeStyle = "yellow";
    ctxAvionND.lineWidth = 10;
    ctxAvionND.stroke();

    ctxAvionND.beginPath();
    ctxAvionND.moveTo(0,yAvion);
	ctxAvionND.lineTo(canvasAvionND.width,yAvion);
    ctxAvionND.strokeStyle = "yellow";
    ctxAvionND.lineWidth = 7;
    ctxAvionND.stroke();
  }
});

canvasAvionND.addEventListener('mouseup', function(event) {
  isDragging = false;
});
*/
/*
ctxPFD.beginPath();
ctxPFD.moveTo(0,0);
ctxPFD.lineTo(PFD.width,PFD.height);
ctxPFD.strokeStyle = 'white';
ctxPFD.stroke(); */

