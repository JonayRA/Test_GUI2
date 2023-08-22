
// Declaración de variables globales
var urlParams = new URLSearchParams(window.location.search);
const numParticipant = urlParams.get("numParticipant");
const condition = urlParams.get("condition");
console.log(numParticipant,condition);

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
const inputVariableChoisie = document.getElementById("inputVariableChoisie");
const textInputVar = document.getElementById("input-text");

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
const canvasWaypt1PositionTop = canvasWaypt1.offsetTop;
const canvasWaypt1PositionLeft = canvasWaypt1.offsetLeft;


const canvasWaypt2initialPosition = canvasWaypt2.getBoundingClientRect();
const canvasWaypt2PositionTop = canvasWaypt2.offsetTop;
const canvasWaypt2PositionLeft = canvasWaypt2.offsetLeft;


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

var cellConsomRoute = document.getElementById("consomRoute");
var cellConsomWaypt1 = document.getElementById("consomWaypt1");
var cellConsomWaypt2 = document.getElementById("consomWaypt2");
var cellTempsRoute = document.getElementById("tempsRoute");
var cellTempsWaypt1 = document.getElementById("tempsWaypt1");
var cellTempsWaypt2 = document.getElementById("tempsWaypt2");

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
}


let waypointChoisi = -1;
if (waypointChoisi == -1 || condition != 3){
	hideButtonsContrefacutel();
}

function showButtonsContrefacutel(){
	buttonresetCase.style.display = '';
	buttonCambiarImagen.style.display = '';
	buttonsoumettreContrefactuel.style.display = '';
	buttonmenu.style.display = '';
	buttontoggleButton.style.display = '';
	buttonsansChangement.style.display = 'none';
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
cellTempsWaypt1.textContent = imagesData[currentImage].tempsWaypt1;
cellTempsRoute.textContent = imagesData[currentImage].tempsroute;
cellTempsWaypt2.textContent = imagesData[currentImage].tempsWaypt2;



function cambiarImagen() {
  currentImage = (currentImage + 1) % imagenes.length;
  // imgND.src = imagenes[currentImage];
  imgND.src = imagesData[currentImage].src;
  cellConsomRoute.textContent = imagesData[currentImage].consumptionRoute;
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
altitudeTextGenerator(3510);
drawVSIindicatorBox(000);
divisionGenerator(ALT,ctxALT,11);
divisionGenerator(ASI,ctxASI,8);
ASItextGenerator(200);
horizontalDivisionGenerator(HDG,ctxHDG,5);
//generateWaypoint(0.5,0.5);
drawWaypoints();


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
buttonresetCase.addEventListener('click', resetCase);
buttonsansChangement.addEventListener('click',function(){
	waypointChoisi = 0;
	showButtonsContrefacutel();
});




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
	if(waypointChoisi != -1 && condition == 3){
  if (event.button === 0) { // Botón izquierdo del ratón
    startX = event.clientX;
    startY = event.clientY;
    isDragging = true;
    // console.log('Sabe que he clicado');
  }
}
});

canvasWaypt1.addEventListener('mousedown', function (event) {
	if(waypointChoisi != -1 && condition == 3){
  if (event.button === 0) { // Botón izquierdo del ratón
    startX = event.clientX;
    startY = event.clientY;
    isDraggingWaypt1 = true;
    // console.log('Sabe que he clicado');
  }
}
});

canvasWaypt2.addEventListener('mousedown', function (event) {
	if(waypointChoisi != -1 && condition == 3){
  if (event.button === 0) { // Botón izquierdo del ratón
    startX = event.clientX;
    startY = event.clientY;
    isDraggingWaypt2 = true;
    // console.log('Sabe que he clicado');
  }
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
  dropdown.classList.toggle('open');
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

    inputVariableChoisie.style.display = '';

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

buttonsoumettreContrefactuel.addEventListener('click', function(){
	waypointChoisi = -1;
	cambiarImagen();
	hideButtonsContrefacutel();
	resetDropdown();
})


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

