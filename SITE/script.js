
// Declaración de variables globales
var urlParams = new URLSearchParams(window.location.search);
const numParticipant = urlParams.get("numParticipant");
const condition = urlParams.get("condition");
const session = urlParams.get("session");
const participantCS = urlParams.get("numParticipantCS");
const participantCS2 = urlParams.get("numParticipantCS2");

var title = document.getElementById("Titulo");
title.textContent = "P" + numParticipant + "C" + condition + "S" + session;
// forceTraining();
//confirm("Le modèle suggère " + 'l\'option 2' + '\nVoulez vous choisir l\'option suggérée?');

/*let participantCS2;
if (participantCS == "8"){
 participantCS2 = "9";
} else {
 participantCS2 = "45";
}*/

//const QUASApositions = [1, 5, 8, 9];
//const QUASApositions = [1, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90];
// Randomized:
const QUASApositions = [ 7,  12,  19,  26,  31,  37,  42, 49,  56,  62,  69,  76,  81,  86,  91, 97, 104, 111, 118, 125, 130, 135, 141, 148, 154, 161, 166, 173, 180];

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
let notificationBoxCS = document.getElementById('notificationBoxCS');
let ctxNotificationBoxCS = notificationBoxCS.getContext('2d');
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
const buttonOption1 = document.getElementById('option1');
const buttonOption2 = document.getElementById('option2');
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
let recomendacionCS = null;
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
let cumuloModifsX = 0;
let cumuloModifsY = 0;


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

let arrayJSONSGuardar = [];
let arrayJSONSContrafactual = [];
let arrayJSONSAccuracies = [];
let arrayJSONSQUASA = [];
let datosGuardar;
let feautresGuardar;
let globalGuardar;
let timeStampPresentacionCaso = Date.now();
let timePresentacionQUASA = null, timeVraiFauxQUASA = null, timePremiereSelectionVraiFauxQUASA = null, timeAccepterQUASA = null, timeVraiQUASA = null, timeFauxQuasa = null;

const dbRequest = indexedDB.open('dbTestCellule', 1); // Version 1
let colorAltitude = 'lime';
const popup = document.getElementById('popup');
const popupFinal = document.getElementById('popupFinal');
const opcionA = document.getElementById('opcionA');
const opcionB = document.getElementById('opcionB');
const opcionC = document.getElementById('opcionC');
const bouttonMontrerSituation = document.getElementById("montrerSituation");
const bouttonRetournerDeuxiemeOption = document.getElementById("retourDeuxiemeOption");
const popupMatrizCorrelacion = document.getElementById('matrizCorrelacion');
const popupNASATLX = document.getElementById('NASATLX');
const popupTrustInAuto1 = document.getElementById('trustInAuto1');
const popupTrustInAuto2 = document.getElementById('trustInAuto2');
const TituloFin = document.getElementById('TituloFin');
const accepterRecommandationCS = document.getElementById('accepterRecommandationCS');
const rejeterRecommandationCS = document.getElementById('rejeterRecommandationCS');

accepterRecommandationCS.style.display = 'none';
rejeterRecommandationCS.style.display = 'none';
/*const tablaMatrizCorrelacion = document.getElementById('tablaMatrizCorrelacion');
const botonAcceptMatrizCorrelacion = document.getElementById('acceptMatrizCorrelacion');*/
var wayptAlternatif = -1;
popup.style.display = 'none';
QUASA.style.display = 'none';
if(session != 3){
popupMatrizCorrelacion.style.display = 'none';
} else if (session == 3){
	popupMatrizCorrelacion.style.display = '';
}
popupNASATLX.style.display = 'none';
popupTrustInAuto1.style.display = 'none';
popupTrustInAuto2.style.display = 'none';
popupFinal.style.display = 'none';

const processTracing = 0;
let waypointChoisiInitialement = null;

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
  buttonOption1.style.display = '';
  buttonOption2.style.display = '';
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
  buttonOption1.style.display = 'none';
  buttonOption2.style.display = 'none';
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
colorAltitude = 'lime';
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
if (processTracing == 1){
		activateProcessTracing();
	}



/*tableConsomTemps.querySelectorAll("td").forEach(cell => {
	cell.addEventListener("click",editCell(cell,waypointChoisi,condition,variableChanged));
});*/


function revertirColorTexto(event) {
    var celda = event.target;
    celda.classList.remove('invisible-text');
    celda.classList.add('visible-text');
}

function activateProcessTracing(){

	var celdas = document.querySelectorAll('td');
	for (var i = 0; i < celdas.length; i++) {
		if (!celdas[i].classList.contains('NotValue')){
	  celdas[i].classList.remove('visible-text');	
      celdas[i].classList.add('invisible-text');
      celdas[i].addEventListener('click', revertirColorTexto);

    }
    altitudeTextGenerator(altitude, 'black')
    //console.log('PT');
    altIndicator.addEventListener('click', function(){

    	altitudeTextGenerator(altitude, 'lime');

})

}}



function editCell(e){//, waypointChoisi, condition, variableChanged){

	//console.log('Aqui tabla');


	const cell = e.target;
	//console.log('La celda es', cell);

	const input = document.createElement("input");

	if(waypointChoisi != -1 && condition == 3 && (variableChanged == '' || (variableChanged == 'table' && cell.id == celdaEditada))){
	
	input.value = cell.textContent;
	var a = cell.textContent;

	cell.textContent = '';
	cell.appendChild(input);

	input.focus();

	input.addEventListener("blur", () => {
		cell.textContent = input.value;
    if (a != cell.textContent){
    variableChanged = 'table';
    celdaEditada = cell.id;
  }
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
        let hayQueEditarOtra = false;
        if(opcion === "Sans mouvement"){
          cellVitesseCellule.textContent = "Sans mouvement";
          cellDirCellule.textContent = "Sans mouvement";
          
        } else if (cellVitesseCellule.textContent != "Sans mouvement" && cellDirCellule.textContent == "Sans mouvement"){
          /*var celdas = tableMouvementCellule.querySelectorAll("td");
          let celdaModif;*/
          var celdaEditar = cellDirCellule;
          hayQueEditarOtra = true;

        } else if (cellDirCellule.textContent != "Sans mouvement" && cellVitesseCellule.textContent == "Sans mouvement"){
          var celdaEditar = cellVitesseCellule;
          hayQueEditarOtra = true;
        }
        // Puedes hacer más acciones aquí según la opción seleccionada

        // Cerrar el modal después de seleccionar una opción
        menuOpcionesMovCel.style.display = 'none';
        let parrafo = document.querySelector('#subBotonesTablaMovCel > p');
        let textoAntiguo = parrafo.textContent;
        if (hayQueEditarOtra == true){
          
          if (celdaEditar.id == 'vitesseCellule'){
            parrafo.textContent = 'Veuillez choisir une vitesse pour la cellule.'
          } else if (celdaEditar.id == 'dirCellule'){
            parrafo.textContent = 'Veuillez choisir une direction pour la cellule.'
          }
          document.getElementById('opcion1').style.display='none';
          document.getElementById('annuler').style.display='none';
          editCellMouvement({ target: celdaEditar });
        } else {
          variableChanged = 'table';
          celdaEditada = cell.id;
          parrafo.textContent = 'Choisir une option:';
          document.getElementById('opcion1').style.display='';
          document.getElementById('annuler').style.display='';
        }
}


function editCellMouvement(e) {
    const cell = e.target;

    const select = document.createElement("select");
    //console.log(typeof cell.id);
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

  //console.log('Aqui',currentImage, 'Length', imagesData.length)
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
function ajouterDonneesEnregistrer(){
	if(session != 1 || condition != 3){
    let nomCas = imagesData[currentImage].src.split('/').pop();
		globalGuardar = compileData2Save(numParticipant, participantCS, session, condition, timeStampPresentacionCaso, waypointChoisi, waypointChoisiInitialement, recomendacionCS,currentImage,nomCas);
    	arrayJSONSGuardar.push(globalGuardar);
	/*datosGuardar = {"Timestamp": Date.now(), 
	"Participant": numParticipant, 
	"Participant CS": participantCS, 
	"Session": session, 
	"Condition": condition, 
	"Presentation cas": timeStampPresentacionCaso, 
	"Waypoint Choisi": waypointChoisi, 
	"Waypoint Initial": waypointChoisiInitialement, 
	"Recommendation CS": recomendacionCS};
	feautresGuardar = calculadoraVariablesCS();
	globalGuardar = Object.assign({}, datosGuardar, feautresGuardar);
	arrayJSONSGuardar.push(globalGuardar);
	console.log('Así es la variable',globalGuardar);*/
	}
	}

async function getQUASA(){
  /*return new Promise((resolve, reject) => {

    let imageQUASA = currentImage;
    var indiceAleatorio = Math.floor(Math.random() * QUASAstatements.length);

    changeQUASAstatement(QUASAstatements[indiceAleatorio].statement);


      QUASA.style.display = '';
      timePresentacionQUASA = Date.now();
      botonVrai.addEventListener('click', function() {
        timeVraiFauxQUASA = Date.now();
        timeVraiQUASA = Date.now();
        if (timePremiereSelectionVraiFauxQUASA === null){
          timePremiereSelectionVraiFauxQUASA = timeVraiFauxQUASA;
        }
      botonVrai.classList.add('seleccionado');
      botonFaux.classList.remove('seleccionado');
      });

      botonFaux.addEventListener('click', function() {
        timeVraiFauxQUASA = Date.now();
        timeFauxQuasa = Date.now();
        if (timePremiereSelectionVraiFauxQUASA === null){
          timePremiereSelectionVraiFauxQUASA = timeVraiFauxQUASA;
        }
      botonFaux.classList.add('seleccionado');
      botonVrai.classList.remove('seleccionado');
      });

      botonAcceptQUASA.addEventListener('click', function() {
        var a = botonVrai.classList.contains('seleccionado');
        var b = botonFaux.classList.contains('seleccionado');
        let responseQUASA;
        if (a){
          responseQUASA = true;
        } else if (b) {
          responseQUASA = false;
        }
      if ( a || b){
        QUASA.style.display = 'none';
        resolve();
        //console.log('Ahora se oculta QUASA');
        var responseCorrecteQUASA = traitementQUASA(QUASAstatements[indiceAleatorio]);
        console.log("Resultado QUASA", QUASAstatements[indiceAleatorio], responseCorrecteQUASA);
        timeAccepterQUASA = Date.now();
        JSONQUASA = {"Timestamp presentation QUASA": timePresentacionQUASA, 
        "Timestamp premiere selection VraiFaux":timePremiereSelectionVraiFauxQUASA, 
        "Timestamp selection VraiFAUX": timeVraiFauxQUASA,
        "Timestamp selection Vrai": timeVraiQUASA,
        "Timestamp selection Faux": timeFauxQuasa,
        "Timestamp premiere selection confiance": timePremiereSelectionNiveauConfianceQUASA,
        "Timestamp selection confiance": timeNiveauConfianceQUASA,
        "Time pour premiere selection VraiFaux": timePremiereSelectionVraiFauxQUASA-timePresentacionQUASA,
        "Time pour selectionner VraiFAUX": timeVraiFauxQUASA-timePresentacionQUASA,
        "Time pour premiere selection confiance depuis debut": timePremiereSelectionNiveauConfianceQUASA-timePresentacionQUASA,
        "Time pour premiere selection confiance depuis VraiFAUX": timePremiereSelectionNiveauConfianceQUASA-timeVraiFauxQUASA,
        "Time pour selectionner confiance depuis debut": timeNiveauConfianceQUASA-timePresentacionQUASA,
        "Time pour selectionner confiance depuis VraiFAUX": timeNiveauConfianceQUASA-timeVraiFauxQUASA,
        "num scenario": imageQUASA,
        "cas": imagesData[imageQUASA].src.split('/').pop(),
        "Phrase": QUASAstatements[indiceAleatorio].statement,
        "Variable": QUASAstatements[indiceAleatorio].variableQUASA ,
        "Reponse participant": responseQUASA,
        "Niveau confiance": QUASAconfidence,
        "Reponse correcte": responseCorrecteQUASA,
        "Resultat QUASA": responseQUASA == responseCorrecteQUASA
        }
        arrayJSONSQUASA.push(JSONQUASA);
        JSONQUASA = null;
        timeStampPresentacionCaso = Date.now();
        //console.log('Valores lógicos if',a,b);
        timePresentacionQUASA = null;
        timePremiereSelectionVraiFauxQUASA = null; 
        timeVraiFauxQUASA = null;
        timeVraiQUASA = null;
        timeFauxQuasa = null;
        timePremiereSelectionNiveauConfianceQUASA = null;
        timeNiveauConfianceQUASA = null;
        return;

      } else {
        alert('Svp veuillez indiquer si l\'affirmation est vraie ou fausse.');
      }
      
      });
      botonFaux.classList.remove('seleccionado');
      botonVrai.classList.remove('seleccionado');
      botones.forEach(boton => {
          boton.classList.remove("seleccionado");
      });
  
});*/
return new Promise((resolve, reject) => {
    QUASAconfidence = null;
    timePresentacionQUASA = -1;
    timePremiereSelectionVraiFauxQUASA = -1;
    timeVraiFauxQUASA = -1;
    timeVraiQUASA = -1;
    timeFauxQuasa = -1;
    timePremiereSelectionNiveauConfianceQUASA = -1;
    timeNiveauConfianceQUASA = -1;
    JSONQUASA = null;
    let alertado = 0;
    try {
        let imageQUASA = currentImage;
        let indiceAleatorio = Math.floor(Math.random() * QUASAstatements.length);

        changeQUASAstatement(QUASAstatements[indiceAleatorio].statement);

        QUASA.style.display = '';
        var timePresentacionQUASA = Date.now();

        let handleVraiClick = () => {
            timeVraiFauxQUASA = Date.now();
            timeVraiQUASA = Date.now();
            if (timePremiereSelectionVraiFauxQUASA === -1) {
                timePremiereSelectionVraiFauxQUASA = timeVraiFauxQUASA;
            }
            botonVrai.classList.add('seleccionado');
            botonFaux.classList.remove('seleccionado');
        };

        let handleFauxClick = () => {
            timeVraiFauxQUASA = Date.now();
            timeFauxQuasa = Date.now();
            if (timePremiereSelectionVraiFauxQUASA === -1) {
                timePremiereSelectionVraiFauxQUASA = timeVraiFauxQUASA;
            }
            botonFaux.classList.add('seleccionado');
            botonVrai.classList.remove('seleccionado');
        };

        botonVrai.addEventListener('click', handleVraiClick);
        botonFaux.addEventListener('click', handleFauxClick);


        function aceptarQUASA() {
            let a = botonVrai.classList.contains('seleccionado');
            let b = botonFaux.classList.contains('seleccionado');
            let responseQUASA;
            if (a) {
                responseQUASA = true;
            } else if (b) {
                responseQUASA = false;
            }

            if ((a || b) & QUASAconfidence !== null) {
                QUASA.style.display = 'none';
                

                let responseCorrecteQUASA = traitementQUASA(QUASAstatements[indiceAleatorio]);
                console.log("Resultado QUASA", QUASAstatements[indiceAleatorio], responseCorrecteQUASA);
                let timeAccepterQUASA = Date.now();
                let JSONQUASA = {
                    "Timestamp presentation QUASA": timePresentacionQUASA,
                    "Timestamp premiere selection VraiFaux": timePremiereSelectionVraiFauxQUASA,
                    "Timestamp selection VraiFAUX": timeVraiFauxQUASA,
                    "Timestamp selection Vrai": timeVraiQUASA,
                    "Timestamp selection Faux": timeFauxQuasa,
                    "num scenario": imageQUASA,
                    "cas": imagesData[imageQUASA].src.split('/').pop(),
                    "Phrase": QUASAstatements[indiceAleatorio].statement,
                    "Variable": QUASAstatements[indiceAleatorio].variableQUASA,
                    "Reponse participant": responseQUASA,
                    "Niveau confiance": QUASAconfidence,
                    "Reponse correcte": responseCorrecteQUASA,
                    "Resultat QUASA": responseQUASA == responseCorrecteQUASA
                };
                console.log('prepush',JSONQUASA,arrayJSONSQUASA, arrayJSONSQUASA.length);
                //let lengthArrayJSONSQUASA = arrayJSONSQUASA.length;
                // let existeEnArray = arrayJSONSQUASA.some(obj => JSON.stringify(obj) === JSON.stringify(JSONQUASA));

                // arrayJSONSQUASA[arrayJSONSQUASA.length] = JSONQUASA;
                
                // arrayJSONSQUASA[lengthArrayJSONSQUASA] = JSONQUASA; // JSON.stringify(JSONQUASA);
                let existeEnArray = arrayJSONSQUASA.some(obj => obj.cas === JSONQUASA.cas);

                  if (!existeEnArray) {
                     arrayJSONSQUASA.push(JSONQUASA);
                  }
                
                console.log('Comprobacion QUASA', a, b, arrayJSONSQUASA);
                resolve();
                let timeStampPresentacionCaso = Date.now();

                
            } else {
              if (alertado == 0){
                alert('Svp veuillez indiquer si l\'affirmation est vraie ou fausse et le niveau de confiance.');
                alertado = 1;
              } else if (alertado == 1){
                alertado = 0;
              }
            }
        }


        botonAcceptQUASA.addEventListener('click', aceptarQUASA);

        botonFaux.classList.remove('seleccionado');
        botonVrai.classList.remove('seleccionado');
        botones.forEach(boton => {
            boton.classList.remove("seleccionado");
        });

    } catch (error) {
        reject(error);
    }
});
botonAcceptQUASA.removeEventListener('click', aceptarQUASA);
}
async function cambiarCaso() {

	// var datosCSV = "Esto es sólo una prueba";

	// localStorage.setItem("pruebaAlmacenaientoDeDatos", datosCSV);
	/*if((condition == 2 || condition == 3) && (session == 1)){
	let accuraciesCS;
	accuraciesCS = await getAccuraciesCS();
	console.log(accuraciesCS);
	}*/


	if (currentImage < imagesData.length -1){
		timeStampPresentacionCaso = Date.now();
	
}
  currentImage = (currentImage + 1) // % imagesData.length;

  if(currentImage < imagesData.length){
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

  // diffX = 0;
  // diffY = 0;
  // startX = Xwaypt1;
  // startY = Ywaypt1;

	//console.log('Xpos1',Xwaypt1);
	//console.log('Ypos1',Ywaypt1)
  // canvasWaypt1.style.transform = `translate(0px, 0px)`;
  // canvasWaypt2.style.transform = `translate(0px, 0px)`;

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

//console.log('Caso cambiado');

if (processTracing == 1){
		activateProcessTracing();
		altitudeTextGenerator(altitude, 'black')
}else{
	altitudeTextGenerator(altitude, 'lime')
}

var casoNumeroTexto = "Caso: " + imagesData[currentImage].src + "\nNúmero: " + currentImage + "/" + imagesData.length;
var indicadorNumeroCaso = document.getElementById("indicadorNumeroCaso");
indicadorNumeroCaso.textContent = casoNumeroTexto;

   // Esto habrá que cambiarlo por coger la posición de la info de la imagen
  /*let avionNDdifferenceY = avionNDinitialPositionTop - canvasAvionND.offsetTop;
  let avionNDdifferenceX = avionNDinitialPositionLeft - canvasAvionND.offsetLeft;
  canvasAvionND.style.transform = `translate(${avionNDdifferenceX}px, ${avionNDdifferenceY}px)`;
  startX = 0;
  startY = 0;
  canvasAvionNDX = 0;
  canvasAvionNDY = 0;*/
}else if (currentImage == imagesData.length && session == 1){
	popupMatrizCorrelacion.style.display = '';
}else if (currentImage == imagesData.length && session != 1){
	popupNASATLX.style.display='';
}
}

document.addEventListener("keydown", function(event) {
    // Comprobar si la combinación de teclas es Ctrl + Shift + F
    if (event.ctrlKey && event.shiftKey && event.key === "F") {
        // Llamar a la función si se presiona la combinación de teclas
        if (session == 1){
            popupMatrizCorrelacion.style.display = '';
        }else if (session != 1){
            popupNASATLX.style.display='';
        }
    }
});

document.addEventListener("keydown", function(event) {
    // Comprobar si la combinación de teclas es Ctrl + Shift + F
    if (event.ctrlKey && event.shiftKey && event.key === "F" && event.altKey) {
        // Llamar a la función si se presiona la combinación de teclas
        saveData2(arrayJSONSGuardar);
        // saveData2(arrayJSONSContrafactual);
    }
});



function calculadoraVariablesCS(currentImage,changedWaypt,Xpos,Ypos){

  /*var XposWapt1 = Xwaypt1 * NDcontainerWidth;
  var YposWapt1 = (1-Ywaypt1) * NDcontainerHeight;

  //console.log('Xpos1',Xwaypt1);
  //console.log('Ypos1',Ywaypt1)

  canvasWaypt1.style.top = YposWapt1 + 'px';
  canvasWaypt1.style.left = XposWapt1 + 'px';*/

  var Xwaypt1CS = canvasWaypt1.offsetLeft/NDcontainerWidth;
  var Xwaypt2CS = canvasWaypt2.offsetLeft/NDcontainerWidth;
  var Ywaypt1CS = 1 - canvasWaypt1.offsetTop / NDcontainerHeight;
  var Ywaypt2CS = 1 - canvasWaypt2.offsetTop / NDcontainerHeight;
  console.log(Xwaypt1CS,Ywaypt1CS);
  if(changedWaypt === undefined){

  }else if (changedWaypt == 1){
    
    Xwaypt1CS = Xwaypt1CS + cumuloModifsX/NDcontainerWidth;
    Ywaypt1CS = Ywaypt1CS - (cumuloModifsY/NDcontainerHeight);
  }else if (changedWaypt == 2){
    Xwaypt2CS = Xwaypt2CS + cumuloModifsX/NDcontainerWidth;
    Ywaypt2CS = Ywaypt2CS - (cumuloModifsY/NDcontainerHeight);
  }


  

  // console.log(currentImage);
  if (typeof currentImage1 === "undefined") {
  // console.log("No definida");
  var XjauneCS = Xjaune;
  var YjauneCS = Yjaune;
  var XrougeCS = Xrouge;
  var YrougeCS = Yrouge;
  var radiusRougeCS = radiusRouge;
  var radiusJauneCS = radiusJaune;
} else {
  // console.log("Definida");
  var XjauneCS = imagesData[currentImage].XcenterYellow;
  var YjauneCS = imagesData[currentImage].YcenterYellow;
  var XrougeCS = imagesData[currentImage].XcenterRed;
  var YrougeCS = imagesData[currentImage].YcenterRed;
  var radiusRougeCS = imagesData[currentImage].radiusYellow;
  var radiusJauneCS = imagesData[currentImage].radiusRed;
	}

	// Distancias presentes

	var distJauneDessus = (parseFloat(cellAltParDessus.textContent) - parseFloat(cellAltZoneJaune.textContent))/10000;
  if (distJauneDessus < 0){
    distJauneDessus = 0;
  }
  var distRougeDessus = (parseFloat(cellAltParDessus.textContent) - parseFloat(cellAltZoneRouge.textContent))/10000;
  if (distRougeDessus < 0){
    distRougeDessus = 0;
  }
	var distRougeDroit = Math.sqrt((XrougeCS - Xwaypt1CS)**2 + (YrougeCS - Ywaypt1CS)**2)-radiusRougeCS;
  if (distRougeDroit < 0){
    distRougeDroit = 0;
  }
	var distRougeGauche = Math.sqrt((XrougeCS - Xwaypt2CS)**2 + (YrougeCS - Ywaypt2CS)**2)-radiusRougeCS;
  if (distRougeGauche < 0){
    distRougeGauche = 0;
  }
	var distJauneDroit = Math.sqrt((XjauneCS - Xwaypt1CS)**2 + (YjauneCS - Ywaypt1CS)**2)-radiusJauneCS;
  if (distJauneDroit < 0){
    distJauneDroit = 0;
  }
	var distJauneGauche = Math.sqrt((XjauneCS - Xwaypt2CS)**2 + (Yjaune - Ywaypt2CS)**2)-radiusJauneCS;
  if (distJauneGauche < 0){
    distJauneGauche = 0;
  }
	var distRougeRoute = Math.abs(XrougeCS - 0.5) - radiusRougeCS;
  if (distRougeRoute < 0){
    distRougeRoute = 0;
  }
	var distJauneRoute = Math.abs(XjauneCS - 0.5) - radiusJauneCS;
  if (distJauneRoute < 0){
    distJauneRoute = 0;
  }

	//console.log('Celdas calculadora future',cellDirCellule.textContent);
	//console.log(cellVitesseCellule.textContent);
	
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
	var futureXcenterYellow = XjauneCS + vitesse;

	// Distancias futuras
	var futureDistRougeDroit = Math.sqrt((futureXcenterRed - Xwaypt1CS)**2 + (YrougeCS - Ywaypt1CS)**2)-radiusRougeCS;
  if (futureDistRougeDroit < 0){
    futureDistRougeDroit = 0;
  } else if (futureDistRougeDroit > 1){
    futureDistRougeDroit = 1;
  }
	var futureDistRougeGauche = Math.sqrt((futureXcenterRed - Xwaypt2CS)**2 + (YrougeCS - Ywaypt2CS)**2)-radiusRougeCS;
  if (futureDistRougeGauche < 0){
    futureDistRougeGauche = 0;
  } else if (futureDistRougeGauche > 1){
    futureDistRougeGauche = 1;
  }
	var futureDistJauneDroit = Math.sqrt((futureXcenterYellow - Xwaypt1CS)**2 + (YjauneCS - Ywaypt1CS)**2)-radiusJauneCS;
  if (futureDistJauneDroit < 0){
    futureDistJauneDroit = 0;
  }else if (futureDistJauneDroit > 1){
    futureDistJauneDroit = 1;
  }
	var futureDistJauneGauche = Math.sqrt((futureXcenterYellow - Xwaypt2CS)**2 + (YjauneCS - Ywaypt2CS)**2)-radiusJauneCS;
  if (futureDistJauneGauche < 0){
    futureDistJauneGauche = 0;
  }else if (futureDistJauneGauche > 1){
    futureDistJauneGauche = 1;
  }
	var futureDistRougeRoute = Math.abs(futureXcenterRed - 0.5) - radiusRougeCS;
  if (futureDistRougeRoute < 0){
    futureDistRougeRoute = 0;
  }else if (futureDistRougeRoute > 1){
    futureDistRougeRoute = 1;
  }
	var futureDistJauneRoute = Math.abs(futureXcenterYellow - 0.5) - radiusJauneCS;
  if (futureDistJauneRoute < 0){
    futureDistJauneRoute = 0;
  }else if (futureDistJauneRoute > 1){
    futureDistJauneRoute = 1;
  }


	// Combustible
	var combDisponibleCS = parseFloat(cellCombDispo.textContent);
	var consomRouteCS = ((combDisponibleCS - parseFloat(cellConsomRoute.textContent)))/combDisponibleCS;
	var consumptionWaypt1CS = ((combDisponibleCS - parseFloat(cellConsomWaypt1.textContent)))/combDisponibleCS;
	var consumptionWaypt2CS = ((combDisponibleCS - parseFloat(cellConsomWaypt2.textContent)))/combDisponibleCS;
	var consumptionDessusCS = ((combDisponibleCS - parseFloat(cellConsomDessus.textContent)))/combDisponibleCS;

   
  var distJauneDroitCS = distJauneDroit/Math.sqrt(2);
  var distJauneGaucheCS = distJauneGauche/Math.sqrt(2);
  var distJauneRouteCS = distJauneRoute/Math.sqrt(2);
  var distRougeDroitCS = distRougeDroit/Math.sqrt(2);
  var distRougeGaucheCS = distRougeGauche/Math.sqrt(2);
  var distRougeRouteCS = distRougeRoute/Math.sqrt(2);
  var futureDistJauneDroitCS = futureDistJauneDroit/Math.sqrt(2);
  var futureDistJauneGaucheCS = futureDistJauneGauche/Math.sqrt(2);
  var futureDistRougeRouteCS = futureDistRougeRoute/Math.sqrt(2);
  var futureDistJauneDroitCS = futureDistJauneDroit/Math.sqrt(2);
  var futureDistRougeGaucheCS = futureDistRougeGauche/Math.sqrt(2);
  var futureDistRougeRouteCS = futureDistRougeRoute/Math.sqrt(2);
	

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
    /*"Consommation dessus": consumptionDessusCS,
    "Consommation droite": consumptionWaypt2CS,
    "Consommation gauche": consumptionWaypt1CS,
    "Consommation route": consomRouteCS,
    "Dist jaune-dessus": distRougeDessus,
    "Dist jaune-droite": distJauneDroitCS,
    "Dist jaune-gauche": distJauneGaucheCS,
    "Dist jaune-route": distJauneRouteCS,
    "Dist rouge-dessus": distRougeDessus,
    "Dist rouge-droite": distRougeDroitCS,
    "Dist rouge-gauche": distRougeGaucheCS,
    "Dist rouge-route": distRougeRouteCS,
    "Future dist jaune-droite": futureDistJauneDroitCS,
    "Future dist jaune-gauche": futureDistJauneGaucheCS,
    "Future dist jaune-route": futureDistRougeRouteCS,
    "Future dist rouge-droite": futureDistJauneDroitCS,
    "Future dist rouge-gauche": futureDistRougeGaucheCS,
    "Future dist rouge-route": futureDistRougeRouteCS*/
  }};

  


}

function calculadoraVariablesCSordrePreference(currentImage,changedWaypt,Xpos,Ypos){

  var Xwaypt1CS = canvasWaypt1.offsetLeft/NDcontainerWidth;
  var Xwaypt2CS = canvasWaypt2.offsetLeft/NDcontainerWidth;
  var Ywaypt1CS = 1 - canvasWaypt1.offsetTop / NDcontainerHeight;
  var Ywaypt2CS = 1 - canvasWaypt2.offsetTop / NDcontainerHeight;
  console.log(currentImage);

  if(changedWaypt === undefined){

  }else if (changedWaypt == 1){
    Xwaypt1CS = Xwaypt1CS + cumuloModifsX;
    Ywaypt1CS = Ywaypt1CS + cumuloModifsY;
  }else if (changedWaypt == 2){
    Xwaypt2CS = Xwaypt2CS + cumuloModifsX;
    Ywaypt2CS = Ywaypt2CS + cumuloModifsY;
  }


  if (typeof currentImage1 === "undefined") {
  console.log("No definida");
  var XjauneCS = Xjaune;
  var YjauneCS = Yjaune;
  var XrougeCS = Xrouge;
  var YrougeCS = Yrouge;
  var radiusRougeCS = radiusRouge;
  var radiusJauneCS = radiusJaune;
} else {
  console.log("Definida");
  var XjauneCS = imagesData[currentImage].XcenterYellow;
  var YjauneCS = imagesData[currentImage].YcenterYellow;
  var XrougeCS = imagesData[currentImage].XcenterRed;
  var YrougeCS = imagesData[currentImage].YcenterRed;
  var radiusRougeCS = imagesData[currentImage].radiusYellow;
  var radiusJauneCS = imagesData[currentImage].radiusRed;
  }
  
  // Distancias presentes

  var distJauneDessus = (parseFloat(cellAltParDessus.textContent) - parseFloat(cellAltZoneJaune.textContent))/9000;
  if (distJauneDessus < 0){
    distJauneDessus = 0;
  }
  var distRougeDessus = (parseFloat(cellAltParDessus.textContent) - parseFloat(cellAltZoneRouge.textContent))/9000;
  if (distRougeDessus < 0){
    distRougeDessus = 0;
  }
  var distRougeDroit = Math.sqrt((XrougeCS - Xwaypt1CS)**2 + (YrougeCS - Ywaypt1CS)**2)-radiusRougeCS;
  if (distRougeDroit < 0){
    distRougeDroit = 0;
  }
  var distRougeGauche = Math.sqrt((XrougeCS - Xwaypt2CS)**2 + (YrougeCS - Ywaypt2CS)**2)-radiusRougeCS;
  if (distRougeGauche < 0){
    distRougeGauche = 0;
  }
  var distJauneDroit = Math.sqrt((XjauneCS - Xwaypt1CS)**2 + (YjauneCS - Ywaypt1CS)**2)-radiusJauneCS;
  if (distJauneDroit < 0){
    distJauneDroit = 0;
  }
  var distJauneGauche = Math.sqrt((XjauneCS - Xwaypt2CS)**2 + (YjauneCS - Ywaypt2CS)**2)-radiusJauneCS;
  if (distJauneGauche < 0){
    distJauneGauche = 0;
  }
  var distRougeRoute = Math.abs(XrougeCS - 0.5) - radiusRougeCS;
  if (distRougeRoute < 0){
    distRougeRoute = 0;
  }
  var distJauneRoute = Math.abs(XjauneCS - 0.5) - radiusJauneCS;
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

  var futureXcenterRed = XrougeCS + vitesse;
  var futureXcenterYellow = XjauneCS + vitesse;

  // Distancias futuras
  var futureDistRougeDroit = Math.sqrt((futureXcenterRed - Xwaypt1CS)**2 + (YrougeCS - Ywaypt1CS)**2)-radiusRougeCS;
  if (futureDistRougeDroit < 0){
    futureDistRougeDroit = 0;
  }
  var futureDistRougeGauche = Math.sqrt((futureXcenterRed - Xwaypt2CS)**2 + (YrougeCS - Ywaypt2CS)**2)-radiusRougeCS;
  if (futureDistRougeGauche < 0){
    futureDistRougeGauche = 0;
  }
  var futureDistJauneDroit = Math.sqrt((futureXcenterYellow - Xwaypt1CS)**2 + (YjauneCS - Ywaypt1CS)**2)-radiusJauneCS;
  if (futureDistJauneDroit < 0){
    futureDistJauneDroit = 0;
  }
  var futureDistJauneGauche = Math.sqrt((futureXcenterYellow - Xwaypt2CS)**2 + (YjauneCS - Ywaypt2CS)**2)-radiusJauneCS;
  if (futureDistJauneGauche < 0){
    futureDistJauneGauche = 0;
  }
  var futureDistRougeRoute = Math.abs(futureXcenterRed - 0.5) - radiusRougeCS;
  if (futureDistRougeRoute < 0){
    futureDistRougeRoute = 0;
  }
  var futureDistJauneRoute = Math.abs(futureXcenterYellow - 0.5) - radiusJauneCS;
  if (futureDistJauneRoute < 0){
    futureDistJauneRoute = 0;
  }


  var futureDistRefJaune = Math.max(futureDistJauneGauche,futureDistJauneRoute,futureDistJauneDroit,distJauneDessus);
  var futureDistRefRouge = Math.max(futureDistRougeGauche,futureDistRougeRoute,futureDistRougeDroit,distRougeDessus);
  var futureDistJauneGaucheCS = 1 - (futureDistRefJaune - futureDistJauneGauche)/futureDistRefJaune
  var futureDistJauneRouteCS = 1 - (futureDistRefJaune - futureDistJauneRoute)/futureDistRefJaune
  var futureDistJauneDroitCS = 1 - (futureDistRefJaune - futureDistJauneDroit)/futureDistRefJaune
  var futureDistJauneDessusCS = 1 - (futureDistRefJaune - distJauneDessus)/futureDistRefJaune

  var futureDistRougeGaucheCS = 1 - (futureDistRefRouge - futureDistRougeGauche)/futureDistRefRouge
  var futureDistRougeRouteCS = 1 - (futureDistRefRouge - futureDistRougeRoute)/futureDistRefRouge
  var futureDistRougeDroitCS = 1 - (futureDistRefRouge - futureDistRougeDroit)/futureDistRefRouge
  var futureDistRougeDessusCS = 1 - (futureDistRefRouge - distRougeDessus)/futureDistRefRouge


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
  var combRef = Math.max(excessRoute,excessWaypt1,excessWaypt2,excessDessus);
  var consomRouteCS = ((excessRoute))/combRef;
  var consumptionWaypt1CS = ((excessWaypt1))/combRef;
  var consumptionWaypt2CS = ((excessWaypt2))/combRef;
  var consumptionDessusCS = ((excessDessus))/combRef;
  /*var consomRouteCS = ((excessRoute - combRef))/combDisponibleCS;
  var consumptionWaypt1CS = ((excessWaypt1 - combRef))/combDisponibleCS;
  var consumptionWaypt2CS = ((excessWaypt2 - combRef))/combDisponibleCS;
  var consumptionDessusCS = ((excessDessus - combRef))/combDisponibleCS;*/

  

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




function selectionDeuxiemeOption(waypointChoisi){

	//let decisionContrefact = prompt(`Elige una opción: \n A) Waypoint 1 \n B) Waypoint 2`);
	/*datosGuardar = {"Timestamp": Date.now(), "Participant": numParticipant, "Participant CS": participantCS, "Session": session, "Condition": condition, "Presentation cas": timeStampPresentacionCaso, "Waypoint Choisi": waypointChoisi, "Waypoint Initial": waypointChoisiInitialement};
	feautresGuardar = calculadoraVariablesCS();
	globalGuardar = Object.assign({}, datosGuardar, feautresGuardar);
	arrayJSONSGuardar.push(globalGuardar);*/
  let nomCas = imagesData[currentImage].src.split('/').pop();
	globalGuardar = compileData2Save(numParticipant, participantCS, session, condition, timeStampPresentacionCaso, waypointChoisi, waypointChoisiInitialement, recomendacionCS,currentImage,nomCas);
    arrayJSONSGuardar.push(globalGuardar);

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
    buttonOption1.style.display = 'none';
    buttonOption2.style.display = 'none';
	});
}

bouttonRetournerDeuxiemeOption.addEventListener('click', ()=>{
	bouttonRetournerDeuxiemeOption.style.display = 'none';
	popup.style.display = '';
	buttonParDessus.style.display = 'block';
	buttonsansChangement.style.display = 'block';
  buttonOption1.style.display = 'block';
  buttonOption2.style.display = 'block';

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

//ctxNotificationBoxCS.fillStyle = 'hsl(0,0%,90%)'; //'black'; //'hsl(30, 70%, 50%)';
//ctxNotificationBoxCS.fillRect(0, 0, notificationBoxCS.width, notificationBoxCS.height);

var radioEsquinas = 40;

// Dibujar un rectángulo redondeado
ctxNotificationBoxCS.beginPath();
ctxNotificationBoxCS.moveTo(radioEsquinas+20, 20);
ctxNotificationBoxCS.lineTo(notificationBoxCS.width - radioEsquinas-20, 20);
ctxNotificationBoxCS.arcTo(notificationBoxCS.width-20, 20, notificationBoxCS.width-20, radioEsquinas, radioEsquinas);
ctxNotificationBoxCS.lineTo(notificationBoxCS.width-20, notificationBoxCS.height - radioEsquinas-20);
ctxNotificationBoxCS.arcTo(notificationBoxCS.width-20, notificationBoxCS.height-20, notificationBoxCS.width - radioEsquinas-20, notificationBoxCS.height-20, radioEsquinas);
ctxNotificationBoxCS.lineTo(radioEsquinas+20, notificationBoxCS.height-20);
ctxNotificationBoxCS.arcTo(20, notificationBoxCS.height-20, 20, notificationBoxCS.height - radioEsquinas, radioEsquinas);
ctxNotificationBoxCS.lineTo(20, radioEsquinas+20);
ctxNotificationBoxCS.arcTo(20, 20, radioEsquinas+20, 20, radioEsquinas);
ctxNotificationBoxCS.closePath();



// Rellenar el rectángulo redondeado con un color
ctxNotificationBoxCS.fillStyle = 'hsl(0,0%,0%)';//'ivory' //; // Color de relleno
ctxNotificationBoxCS.fill();

ctxNotificationBoxCS.strokeStyle = 'black' //'darkorange'; // Color del borde
ctxNotificationBoxCS.lineWidth = 10;
ctxNotificationBoxCS.stroke(); // Dibujar el borde


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
if (processTracing == 1){
altitudeTextGenerator(altitude, 'black');
}else{
altitudeTextGenerator(altitude, 'lime');
}
drawVSIindicatorBox(000);
divisionGenerator(ALT,ctxALT,11);
divisionGenerator(ASI,ctxASI,8);
ASItextGenerator(200);
horizontalDivisionGenerator(HDG,ctxHDG,5);
//generateWaypoint(0.5,0.5);
drawWaypoints('red','red');



/*waypt1.addEventListener('click', async function () {
	if(waypointChoisi == -1) {
		const message = 'Voulez-vous choisir l\'option 1?';
		const result = confirm(message);

		if (result) {
  			waypointChoisi = 1;

  			if((condition == 2 || condition == 3) && (session == 2 || session == 3)){

  			let feautresCalculadas = calculadoraVariablesCS();

  		

  			recomendacionCS = await getRecommendationCS(participantCS,feautresCalculadas.features);
  			let recommendation;

  			
    		if (recomendacionCS != waypointChoisi){
    		if (recomendacionCS == 2){
    			recommendation = 'l\'option 2';
    		} else if (recomendacionCS == 3) {
    			recommendation = 'par dessus'
    		} else if (recomendacionCS == 0) {
    			recommendation = 'ne pas se dévier'
    		}


    		var aceptarSuggestion = confirm("Le modèle suggère " + recommendation + '\nVoulez vous choisir l\'option suggérée?');
    		waypointChoisiInitialement = waypointChoisi;
    		if (aceptarSuggestion){
    			
    			waypointChoisi = recomendacionCS;
    		} else {
    		}}
  			//showButtonsContrefacutel();
  			}else if((condition == 2 || condition == 3) && (session == 1)){

    			let feautresCalculadas = calculadoraVariablesCS();

  				await sendTrainingCase(participantCS, feautresCalculadas.features, waypointChoisi);
  				accuraciesCS = await getAccuraciesCS(participantCS);
  				
        let nomCas = imagesData[currentImage].src.split('/').pop();
				globalGuardar = compileData2Save(numParticipant, participantCS, session, condition, timeStampPresentacionCaso, waypointChoisi, waypointChoisiInitialement, recomendacionCS,currentImage,nomCas);
    			arrayJSONSGuardar.push(globalGuardar);
    			arrayJSONSAccuracies.push(accuraciesCS);
    		}

  			if (condition == 3 && session == 1){
  				selectionDeuxiemeOption(waypointChoisi);
  			} else if (condition != 3 || (condition == 3 && session != 1)){
  				ajouterDonneesEnregistrer();
  				waypointChoisi = -1;
				cambiarCaso();
				hideButtonsContrefacutel();
				resetDropdown();
  			}
  			
		} else {
	}} else if (wasDragged == true) {
		wasDragged = false;
	}
});*/

buttonOption1.addEventListener('click', async function () {
  if(waypointChoisi == -1) {
    const message = 'Voulez-vous choisir l\'option 1?';
    const result = confirm(message);

    if (result) {
        waypointChoisi = 1;

        if((condition == 2 || condition == 3) && (session == 2 || session == 3)){

        let feautresCalculadas = calculadoraVariablesCS(currentImage);

        //console.log('features Request', feautresCalculadas);

        //console.log('Feautres', feautresCalculadas.features);

        recomendacionCS = await getRecommendationCS(participantCS,feautresCalculadas.features);
        //console.log("recomendacionCS",recomendacionCS);
        let recommendation;

        //console.log(promesaCS);

        /*promesaCS.then((data) => {
          console.log(data);
            recomendacionCS = data;
            // console.log('data', data, data.predictions, typeof data.predictions)
        })*/
      
      //console.log(recomendacionCS, typeof recomendacionCS)
    
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


        // var aceptarSuggestion = confirm("Le modèle suggère " + recommendation + '\nVoulez vous choisir l\'option suggérée?');
        waypointChoisiInitialement = waypointChoisi;
        CSnotificationBoxTextGenerator('L’assistant intelligent suggère:', recommendation);

        let respuesta = await esperaBotonesRecomendacionCS();
        ocultarBoxNotification();
        //if (aceptarSuggestion)
        if (respuesta === 'accepted'){
          
          waypointChoisi = recomendacionCS;
        } else {
        }}
        //showButtonsContrefacutel();
        }else if((condition == 2 || condition == 3) && (session == 1)){

          let feautresCalculadas = calculadoraVariablesCS(currentImage);

          // await sendTrainingCase(participantCS, feautresCalculadas.features, waypointChoisi);
          sendTrainingCase(participantCS, feautresCalculadas.features, waypointChoisi);
          // accuraciesCS = await getAccuraciesCS(participantCS);
          accuraciesCS = getAccuraciesCS(participantCS);


          let feautresCalculadasAlternativas = calculadoraVariablesCSordrePreference(currentImage);

          // await sendTrainingCase(participantCS2, feautresCalculadasAlternativas.features, waypointChoisi);
          sendTrainingCase(participantCS2, feautresCalculadasAlternativas.features, waypointChoisi);
          /*datosGuardar = {"Timestamp": Date.now(), "Participant": numParticipant, "Participant CS": participantCS, "Session": session, "Condition": condition, "Waypoint Choisi": waypointChoisi, "Waypoint Initial": waypointChoisiInitialement};
        feautresGuardar = feautresCalculadas.features;
        globalGuardar = Object.assign({}, datosGuardar, feautresGuardar,accuraciesCS);
        arrayJSONSAccuracies.push(globalGuardar);*/
        let nomCas = imagesData[currentImage].src.split('/').pop();
        globalGuardar = compileData2Save(numParticipant, participantCS, session, condition, timeStampPresentacionCaso, waypointChoisi, waypointChoisiInitialement, recomendacionCS,currentImage,nomCas);
          arrayJSONSGuardar.push(globalGuardar);
          arrayJSONSAccuracies.push(accuraciesCS);
        }
        if(QUASApositions.includes(currentImage)){
        getQUASA();
        
        }
        if (condition == 3 && session == 1){
          selectionDeuxiemeOption(waypointChoisi);
        } else if (condition != 3 || (condition == 3 && session != 1)){
          ajouterDonneesEnregistrer();
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

/*waypt2.addEventListener('click', async function () {
	if(waypointChoisi == -1) {
	const message = 'Voulez-vous choisir l\'option 2?';
	const result = confirm(message);

	if (result) {
  			waypointChoisi = 2;
  			//showButtonsContrefacutel();
  			
  			if((condition == 2 || condition == 3) && (session == 2 || session == 3)){

  			let feautresCalculadas = calculadoraVariablesCS();

  			recomendacionCS = await getRecommendationCS(participantCS,feautresCalculadas.features);
  			console.log("recomendacionCS",recomendacionCS);
  			let recommendation;


			
			if(recomendacionCS !=waypointChoisi){
			if (recomendacionCS == 1){
    			recommendation = 'l\'option 1';

    		} else if (recomendacionCS == 3) {
    			recommendation = 'par dessus'
    		} else if (recomendacionCS == 0) {
    			recommendation = 'ne pas se dévier'
    		}


    		var aceptarSuggestion = confirm("Le modèle suggère " + recommendation + '\nVoulez vous choisir l\'option suggérée?');
    		waypointChoisiInitialement = waypointChoisi;
    		if (aceptarSuggestion){
    			console.log('Aqui', waypointChoisi)
    			waypointChoisi = recomendacionCS;
    		} else {
    		}}} else if((condition == 2 || condition == 3) && (session == 1)){

    			let feautresCalculadas = calculadoraVariablesCS();

  				await sendTrainingCase(participantCS, feautresCalculadas.features, waypointChoisi);
  				accuraciesCS = await getAccuraciesCS(participantCS);
  				arrayJSONSAccuracies.push(accuraciesCS);

        let nomCas = imagesData[currentImage].src.split('/').pop();
				globalGuardar = compileData2Save(numParticipant, participantCS, session, condition, timeStampPresentacionCaso, waypointChoisi, waypointChoisiInitialement, recomendacionCS,currentImage,nomCas);
    			arrayJSONSGuardar.push(globalGuardar);
    		}
    		


  			if (condition == 3 && session == 1){
  				selectionDeuxiemeOption(waypointChoisi);
  			} else if (condition != 3 || (condition == 3 && session != 1)){
  				ajouterDonneesEnregistrer();
  				waypointChoisi = -1;
				cambiarCaso();
				hideButtonsContrefacutel();
				resetDropdown();
  			}
	} else {
  		
	}
}
});*/

buttonOption2.addEventListener('click', async function () {
  if(waypointChoisi == -1) {
  const message = 'Voulez-vous choisir l\'option 2?';
  const result = confirm(message);

  if (result) {
        waypointChoisi = 2;
        //showButtonsContrefacutel();
        
        if((condition == 2 || condition == 3) && (session == 2 || session == 3)){

        let feautresCalculadas = calculadoraVariablesCS(currentImage);

        recomendacionCS = await getRecommendationCS(participantCS,feautresCalculadas.features);
        console.log("recomendacionCS",recomendacionCS);
        let recommendation;

        //console.log(promesaCS);

        /*promesaCS.then((data) => {
          console.log(data);
            recomendacionCS = data;
            // console.log('data', data, data.predictions, typeof data.predictions)
        })*/
      
      if(recomendacionCS !=waypointChoisi){
      if (recomendacionCS == 1){
          recommendation = 'l\'option 1';
        /*} else if (recomendacionCS == 2){
          recommendation = 'l\'option 2';*/
        } else if (recomendacionCS == 3) {
          recommendation = 'par dessus'
        } else if (recomendacionCS == 0) {
          recommendation = 'ne pas se dévier'
        }


        // var aceptarSuggestion = confirm("Le modèle suggère " + recommendation + '\nVoulez vous choisir l\'option suggérée?');
        waypointChoisiInitialement = waypointChoisi;
        CSnotificationBoxTextGenerator('L’assistant intelligent suggère:', recommendation);

        let respuesta = await esperaBotonesRecomendacionCS();
        ocultarBoxNotification();
        //if (aceptarSuggestion)
        if (respuesta === 'accepted'){
          console.log('Aqui', waypointChoisi)
          waypointChoisi = recomendacionCS;
        } else {
        }}} else if((condition == 2 || condition == 3) && (session == 1)){

          let feautresCalculadas = calculadoraVariablesCS(currentImage);

          /*await sendTrainingCase(participantCS, feautresCalculadas.features, waypointChoisi);
          accuraciesCS = await getAccuraciesCS(participantCS);*/
          sendTrainingCase(participantCS, feautresCalculadas.features, waypointChoisi);
          accuraciesCS = getAccuraciesCS(participantCS);
          arrayJSONSAccuracies.push(accuraciesCS);

          let feautresCalculadasAlternativas = calculadoraVariablesCSordrePreference(currentImage);

          // await sendTrainingCase(participantCS2, feautresCalculadasAlternativas.features, waypointChoisi);
          sendTrainingCase(participantCS2, feautresCalculadasAlternativas.features, waypointChoisi);
          /*datosGuardar = {"Timestamp": Date.now(), "Participant": numParticipant, "Participant CS": participantCS, "Session": session, "Condition": condition, "Waypoint Choisi": waypointChoisi, "Waypoint Initial": waypointChoisiInitialement};
        feautresGuardar = feautresCalculadas.features;
        globalGuardar = Object.assign({}, datosGuardar, feautresGuardar,accuraciesCS);
        arrayJSONSAccuracies.push(globalGuardar);*/
        let nomCas = imagesData[currentImage].src.split('/').pop();
        globalGuardar = compileData2Save(numParticipant, participantCS, session, condition, timeStampPresentacionCaso, waypointChoisi, waypointChoisiInitialement, recomendacionCS,currentImage,nomCas);
          arrayJSONSGuardar.push(globalGuardar);
        }
        

        if(QUASApositions.includes(currentImage)){
        getQUASA();

        }
        if (condition == 3 && session == 1){
          selectionDeuxiemeOption(waypointChoisi);
        } else if (condition != 3 || (condition == 3 && session != 1)){
          ajouterDonneesEnregistrer();
          waypointChoisi = -1;
        cambiarCaso();
        hideButtonsContrefacutel();
        resetDropdown();
        }
  } else {
      
  }
}
});


function traitementQUASA(QUASAstatement){
	var statement = QUASAstatement.statement;
	var variable = QUASAstatement.variableQUASA;
  var celluleAff = QUASAstatement.celluleAffectee;
  if (!celluleAff.includes("waypoint") && celluleAff != "altitude"){
  var celda = window[celluleAff];
  var valorComparacion = celda.textContent;
  }
	var valeurLim = QUASAstatement.valeurLimite;
	var oper = QUASAstatement.operateur;
	var ident = QUASAstatement.identifier;
	var resultado = null;
  let feautresCalculadas = calculadoraVariablesCS(currentImage);
  let distRougeGauche = feautresCalculadas.features["Dist rouge-gauche"];
  let distJauneGauche = feautresCalculadas.features["Dist jaune-gauche"];
  let distRougeDroite = feautresCalculadas.features["Dist rouge-droite"];
  let distJauneDroite = feautresCalculadas.features["Dist jaune-droite"];
  let distJauneRoute = feautresCalculadas.features["Dist jaune-route"];
  let distRougeRoute = feautresCalculadas.features["Dist rouge-route"];
  //console.log(feautresCalculadas);
	/*console.log("Comprobacion QUASA", valeurLim, oper, valorComparacion, QUASAstatement);*/
    if (celluleAff.includes("cell")){
    	if (!celluleAff.includes("Cellule")){
    		valorComparacion = parseInt(valorComparacion);
    	switch (oper){
    		case "sup":
    			if (valorComparacion > valeurLim){
    				resultado = true;
    				break;
    			} else if (valorComparacion <= valeurLim){
    				resultado = false;
    				break;
    			}
    		case "inf":
    		if (valorComparacion < valeurLim){
    				resultado = true;
    				break;
    			} else if (valorComparacion >= valeurLim){
    				resultado = false;
    				break;
    			}
    	}
    }else if(celluleAff.includes("Cellule")){
    	if (valeurLim == valorComparacion){
    		resultado = true;
    	} else {
    		resultado = false;
    	}

    }

    }else if(celluleAff === 'altitude') {
      let valorComparacion = imagesData[currentImage].altVol;

        switch (oper){
        case "sup":
          if (valorComparacion > valeurLim){
            resultado = true;
            break;
          } else if (valorComparacion <= valeurLim){
            resultado = false;
            break;
          }
        case "inf":
        if (valorComparacion < valeurLim){
            resultado = true;
            break;
          } else if (valorComparacion >= valeurLim){
            resultado = false;
            break;
          }
      }

    }else {
    	if (ident == "1plusProche2Rouge"){
    		if(distRougeGauche>=distRougeDroite){
    			resultado = true;
    		} else {
    			resultado = false;
    		}
    	} else if (ident == "1plusProche2Jaune"){
    		if(distJauneGauche>=distJauneDroite){
    			resultado = true;
    		} else {
    			resultado = false;
    		}
    	} else if (ident == "2plusProche1Rouge"){
    		if(distRougeGauche<=distRougeDroite){
    			resultado = true;
    		} else {
    			resultado = false;
    		}
    	} else if (ident == "2plusProche1Jaune"){
    		if(distJauneGauche<=distJauneDroite){
    			resultado = true;
    		} else {
    			resultado = false;
    		}
    	} else if (ident == "2plusProcheRouteRouge"){
        if(distRougeGauche<=distRougeRoute){
          resultado = true;
        } else {
          resultado = false;
        }
      } else if (ident == "2plusProcheRouteJaune"){
        if(distJauneGauche<=distJauneRoute){
          resultado = true;
        } else {
          resultado = false;
        }
      } else if (ident == "1plusProcheRouteRouge"){
        if(distRougeDroite<=distRougeRoute){
          resultado = true;
        } else {
          resultado = false;
        }
      } else if (ident == "2plusProcheRouteJaune"){
        if(distRougeDroite<=distJauneRoute){
          resultado = true;
        } else {
          resultado = false;
        }
      }

    }

	/*if (!variable.includes('Mov')){
		var numero = stringCompleto.match(/\d+/g).map(Number).filter(numero => numero > 10)[0];
	}*/
	return resultado;
}



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
  cumuloModifsX = 0;
  cumuloModifsY = 0;
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
altitudeTextGenerator(altitude, colorAltitude);
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

			let feautresCalculadas = calculadoraVariablesCS(currentImage);

  			recomendacionCS = await getRecommendationCS(participantCS,feautresCalculadas.features);
  			console.log("recomendacionCS",recomendacionCS);
  			let recommendation;

  			//console.log(promesaCS);

  			/*promesaCS.then((data) => {
  				console.log(data);
       			recomendacionCS = data;
       			// console.log('data', data, data.predictions, typeof data.predictions)
    		})*/
			
			console.log(recomendacionCS, typeof recomendacionCS)
			if(recomendacionCS !=waypointChoisi){
			if (recomendacionCS == 1){
    			recommendation = 'l\'option 1';
    		} else if (recomendacionCS == 2){
    			recommendation = 'l\'option 2';
    		} else if (recomendacionCS == 3) {
    			recommendation = 'par dessus'
    		}/* else if (recomendacionCS == 0) {
    			recommendation = 'ne pas se dévier'
    		}*/


    		//var aceptarSuggestion = confirm("Le modèle suggère " + recommendation + '\nVoulez vous choisir l\'option suggérée?');
    		waypointChoisiInitialement = waypointChoisi;
    		CSnotificationBoxTextGenerator('L’assistant intelligent suggère:', recommendation);

        let respuesta = await esperaBotonesRecomendacionCS();
        ocultarBoxNotification();
        //if (aceptarSuggestion)
        if (respuesta === 'accepted'){
    			
    			waypointChoisi = recomendacionCS;
    		} else {
    		}}} else if((condition == 2 || condition == 3) && (session == 1)){

    			let feautresCalculadas = calculadoraVariablesCS(currentImage);

  				/*await sendTrainingCase(participantCS, feautresCalculadas.features, waypointChoisi);
  				accuraciesCS = await getAccuraciesCS(participantCS);*/
          sendTrainingCase(participantCS, feautresCalculadas.features, waypointChoisi);
          accuraciesCS = getAccuraciesCS(participantCS);
  				arrayJSONSAccuracies.push(accuraciesCS);

          let feautresCalculadasAlternativas = calculadoraVariablesCSordrePreference(currentImage);

          // await sendTrainingCase(participantCS2, feautresCalculadasAlternativas.features, waypointChoisi);
          sendTrainingCase(participantCS2, feautresCalculadasAlternativas.features, waypointChoisi);
  				/*datosGuardar = {"Timestamp": Date.now(), "Participant": numParticipant, "Participant CS": participantCS, "Session": session, "Condition": condition, "Waypoint Choisi": waypointChoisi, "Waypoint Initial": waypointChoisiInitialement};
				feautresGuardar = feautresCalculadas.features;
				globalGuardar = Object.assign({}, datosGuardar, feautresGuardar,accuraciesCS);
				arrayJSONSAccuracies.push(globalGuardar);*/
        let nomCas = imagesData[currentImage].src.split('/').pop();
				globalGuardar = compileData2Save(numParticipant, participantCS, session, condition, timeStampPresentacionCaso, waypointChoisi, waypointChoisiInitialement, recomendacionCS,currentImage,nomCas);
    			arrayJSONSGuardar.push(globalGuardar);
    		}




      if(QUASApositions.includes(currentImage)){
        getQUASA();
        }
			if (condition == 3 && session == 1){
				selectionDeuxiemeOption(waypointChoisi);
	}else if (condition != 3 || (condition == 3 && session != 1)){
  				ajouterDonneesEnregistrer();
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

			let feautresCalculadas = calculadoraVariablesCS(currentImage);
  			recomendacionCS = await getRecommendationCS(participantCS,feautresCalculadas.features);
  			console.log("recomendacionCS",recomendacionCS);
  			let recommendation;

  			//console.log(promesaCS);

  			/*promesaCS.then((data) => {
  				console.log(data);
       			recomendacionCS = data;
       			// console.log('data', data, data.predictions, typeof data.predictions)
    		})*/
			
			console.log(recomendacionCS, typeof recomendacionCS)
			if(recomendacionCS !=waypointChoisi){
			if (recomendacionCS == 1){
    			recommendation = 'l\'option 1';
    		} else if (recomendacionCS == 2){
    			recommendation = 'l\'option 2';
    		/*} else if (recomendacionCS == 3) {
    			recommendation = 'par dessus'*/
    		} else if (recomendacionCS == 0) {
    			recommendation = 'ne pas se dévier'
    		}


    		// var aceptarSuggestion = confirm("Le modèle suggère " + recommendation + '\nVoulez vous choisir l\'option suggérée?');
    		waypointChoisiInitialement = waypointChoisi;
        CSnotificationBoxTextGenerator('L’assistant intelligent suggère:', recommendation);

        let respuesta = await esperaBotonesRecomendacionCS();
        ocultarBoxNotification();
        //if (aceptarSuggestion)
        if (respuesta === 'accepted'){
    			
    			waypointChoisi = recomendacionCS;
    		} else {
    		}}}else if((condition == 2 || condition == 3) && (session == 1)){

    			let feautresCalculadas = calculadoraVariablesCS(currentImage);

  				/*await sendTrainingCase(participantCS, feautresCalculadas.features, waypointChoisi);
  				accuraciesCS = await getAccuraciesCS(participantCS);*/
          sendTrainingCase(participantCS, feautresCalculadas.features, waypointChoisi);
          accuraciesCS = getAccuraciesCS(participantCS);
  				arrayJSONSAccuracies.push(accuraciesCS);
          let feautresCalculadasAlternativas = calculadoraVariablesCSordrePreference(currentImage);

          // await sendTrainingCase(participantCS2, feautresCalculadasAlternativas.features, waypointChoisi);
          sendTrainingCase(participantCS2, feautresCalculadasAlternativas.features, waypointChoisi);
  				/*datosGuardar = {"Timestamp": Date.now(), "Participant": numParticipant, "Participant CS": participantCS, "Session": session, "Condition": condition, "Waypoint Choisi": waypointChoisi, "Waypoint Initial": waypointChoisiInitialement};
				feautresGuardar = feautresCalculadas.features;
				globalGuardar = Object.assign({}, datosGuardar, feautresGuardar,accuraciesCS);
				arrayJSONSAccuracies.push(globalGuardar);*/
        let nomCas = imagesData[currentImage].src.split('/').pop();
				globalGuardar = compileData2Save(numParticipant, participantCS, session, condition, timeStampPresentacionCaso, waypointChoisi, waypointChoisiInitialement, recomendacionCS,currentImage,nomCas);
    			arrayJSONSGuardar.push(globalGuardar);
    		}









        if(QUASApositions.includes(currentImage)){
        getQUASA();
        }
			if (condition == 3 && session ==1){
			selectionDeuxiemeOption(waypointChoisi);
		}else if (condition != 3 || (condition == 3 && session != 1)){
				ajouterDonneesEnregistrer();
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
    /*cumuloModifsX = cumuloModifsX + canvasWaypt2X;
    cumuloModifsY = cumuloModifsY + canvasWaypt2Y;*/

    startX = event.clientX;
    // console.log('StartX',startX, 'posini', avionNDinitialPositionLeft);
    startY = event.clientY;
  }
});

// Evento mouseup para dejar de arrastrar el canvas
document.addEventListener('mouseup', function (event) {
  if (event.button === 0) { // Botón izquierdo del ratón

    if (isDraggingWaypt1 == true){
      cumuloModifsX = cumuloModifsX + canvasWaypt1X;
      cumuloModifsY = cumuloModifsY + canvasWaypt1Y;
    } else if (isDraggingWaypt2 == true){
      cumuloModifsX = cumuloModifsX + canvasWaypt2X;
      cumuloModifsY = cumuloModifsY + canvasWaypt2Y;
    }

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
async function esperarXSegundos(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(); // Resuelve la promesa después de 10 segundos
        }, x*1000); // 10000 milisegundos = 10 segundos
    });
}

// CSnotificationBoxTextGenerator('L’assistant intelligent suggère:', 'Option 2');






async function saveData2(ArrayJSONS){

	/*ArrayJSONS.push({
		time: Date.now(),
		participant: numParticipant,
		condition: condition,
		session: session
	});*/

	popupFinal.style.display = '';

	//await esperarXSegundos(2);

	

	localStorage.setItem('participant'+numParticipant+'_session'+session+'condition'+condition, JSON.stringify(ArrayJSONS));
	localStorage.setItem('participant'+numParticipant+'_session'+session+'condition'+condition+'QUASA', JSON.stringify(arrayJSONSQUASA))

	const fileContent = JSON.stringify(ArrayJSONS, null, 2);
    const bb = new Blob([fileContent], {
        type: "application/json",
    });
	var a = document.createElement('a');
	a.download = 'participant'+numParticipant+'_session'+session+'condition'+condition+'.json';
	a.href = window.URL.createObjectURL(bb);
	a.click();
	a.remove();

	const fileContent1 = JSON.stringify(arrayJSONSQUASA, null, 2);
    const bb1 = new Blob([fileContent1], {
        type: "application/json",
    });
	var a1 = document.createElement('a');
	a1.download = 'QUASA participant'+numParticipant+'_session'+session+'condition'+condition+'.json';
	a1.href = window.URL.createObjectURL(bb1);
	a1.click();
	a1.remove();



	if(condition == 3 && session == 1){
	localStorage.setItem("Counterfactuals", JSON.stringify(arrayJSONSContrafactual));


	const fileContent = JSON.stringify(arrayJSONSContrafactual, null, 2);
    const bb = new Blob([fileContent], {
        type: "application/json",
    });
	var a = document.createElement('a');
	a.download = 'Counterfactuals participant'+numParticipant+'_session'+session+'condition'+condition+'.json';
	a.href = window.URL.createObjectURL(bb);
	a.click();
	a.remove();
	}
	if((condition == 2 || condition == 3) && session == 1){
	localStorage.setItem("Accuracies", JSON.stringify(arrayJSONSAccuracies));


	const fileContent = JSON.stringify(arrayJSONSAccuracies, null, 2);
    const bb = new Blob([fileContent], {
        type: "application/json",
    });
	var a = document.createElement('a');
	a.download = 'Accuracies participant'+numParticipant+'_session'+session+'condition'+condition+'.json';
	a.href = window.URL.createObjectURL(bb);
	a.click();
	a.remove();
	}
	await esperarXSegundos(5);
	TituloFin.textContent = 'Merci de votre participation';
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
	// altitudeTextGenerator(altitude,'green');
  // colorAltitude = 'green';
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
  console.log(variableChanged);

  if (variableChanged != ''){
    console.log('Ha entrado');
  let changedWaypt;
  let Xpos;
  let Ypos;
  if (variableChanged == "waypt2"){
    changedWaypt = 2;
    Xpos = canvasWaypt2X;
    Ypos = canvasWaypt2Y;
  } else if (variableChanged == "waypt1"){
    changedWaypt = 1;
    Xpos = canvasWaypt1X;
    Ypos = canvasWaypt1Y;
  } else {
    changedWaypt = undefined;
    Xpos = undefined;
    Ypos = undefined;
  }
	let feautresCalculadas = calculadoraVariablesCS(currentImage,changedWaypt,Xpos,Ypos);
  let nomCas = imagesData[currentImage].src.split('/').pop();
	datosGuardar = {"Timestamp": Date.now(), "Participant": numParticipant, "Participant CS": participantCS, "Cas": nomCas,  "Numero de cas": currentImage, "Session": session, "Condition": condition, "Waypoint initial": waypointChoisi, "Waypoint Alternatif": waypointAlternatif, "Variable change": variableChanged, "Cell": celdaEditada};
	feautresGuardar = feautresCalculadas;
	globalGuardar = Object.assign({}, datosGuardar, feautresGuardar);
	//globalGuardar = compileData2Save(numParticipant, participantCS, session, condition, timeStampPresentacionCaso, waypointChoisi, waypointChoisiInitialement, recomendacionCS);
	arrayJSONSContrafactual.push(globalGuardar);

  	/*await sendTrainingCase(participantCS, feautresCalculadas.features, wayptAlternatif);
  	accuraciesCS = await getAccuraciesCS(participantCS);*/
    sendTrainingCase(participantCS, feautresCalculadas.features, wayptAlternatif);
    accuraciesCS = getAccuraciesCS(participantCS);
    let feautresCalculadasAlternativas = calculadoraVariablesCSordrePreference(currentImage);
    // await sendTrainingCase(participantCS2, feautresCalculadasAlternativas.features, waypointAlternatif);
    sendTrainingCase(participantCS2, feautresCalculadasAlternativas.features, waypointAlternatif);
  	
    datosGuardar = {"Timestamp": Date.now(), "Participant": numParticipant, "Participant CS": participantCS, "Session": session, "Condition": condition, "Waypoint Alternatif": waypointAlternatif};
	feautresGuardar = feautresCalculadas.features;
	globalGuardar = Object.assign({}, datosGuardar, feautresGuardar,accuraciesCS);
	arrayJSONSAccuracies.push(globalGuardar);

  canvasWaypt1PositionTop = canvasWaypt1.offsetTop;
  canvasWaypt1PositionLeft = canvasWaypt1.offsetLeft;
  canvasWaypt2PositionTop = canvasWaypt2.offsetTop;
  canvasWaypt2PositionLeft = canvasWaypt2.offsetLeft;
  resetCase(canvasWaypt1PositionTop,canvasWaypt1PositionLeft,canvasWaypt2PositionTop,canvasWaypt2PositionLeft);
  cumuloModifsX = 0;
  cumuloModifsY = 0;


	var celdas = document.querySelectorAll('.celda');
	celdas.forEach(function(tabla) {
    tabla.style.backgroundColor = 'hsl(0, 0%, 90%)';
    console.log('Color cambiado');
  	});
  	ajouterDonneesEnregistrer();
	waypointChoisi = -1;
	if (typeof newCanvasX !== 'undefined'){
		delete newCanvasX;
		delete newCanvasY;
	}
	cambiarCaso();
	hideButtonsContrefacutel();
	resetDropdown();
} else {
  alert('Veuillez modifier modifier le facteur qui vous ferait préférer votre deuxième option.');
}
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
                if (event.data.message === 'AcceptedMatrix') {
                    // Realizar la acción en la página principal
                    arrayJSONSGuardar.push({"Matrice correlation":event.data.data});
                    popupMatrizCorrelacion.style.display = 'none';
                    if (session == 1){
                    popupNASATLX.style.display = '';
                  }
                } 
               }

    		if (event.source === document.getElementById('iframeNASATLX').contentWindow) {
                // Verificar el contenido del mensaje
                if (event.data.message === 'Accepted NASA-TLX') {
                	arrayJSONSGuardar.push({"NSATLX":event.data.data});
                	popupNASATLX.style.display = 'none';
                	if(condition != 1 && session != 1){
                	popupTrustInAuto1.style.display = '';
                	} else if (condition ==1 || session == 1){
                		saveData2(arrayJSONSGuardar);
                	}
                }
                
            }

            if (event.source === document.getElementById('iframeTrustInAuto1').contentWindow) {
                // Verificar el contenido del mensaje
                if (event.data.message === 'Accepted TrustInAuto1') {
                	arrayJSONSGuardar.push({"TrustInAuto1":event.data.data});
                	popupTrustInAuto1.style.display = 'none';
                	popupTrustInAuto2.style.display = '';
                }
                
            }
            if (event.source === document.getElementById('iframeTrustInAuto2').contentWindow) {
                // Verificar el contenido del mensaje
                if (event.data.message === 'Accepted TrustInAuto2') {
                	arrayJSONSGuardar.push({"TrustInAuto2":event.data.data});
                	console.log('script',arrayJSONSGuardar);
                	popupTrustInAuto2.style.display = 'none';
                	saveData2(arrayJSONSGuardar);
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



