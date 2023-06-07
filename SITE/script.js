// Comentario opcional para describir el contenido del archivo

// Declaración de variables globales
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
let VSItext = document.getElementById('VSItext');
let ctxVSItext = VSItext.getContext('2d'); 
let pressure = document.getElementById('pressure');
let ctxPressure = pressure.getContext('2d');
const button = document.getElementById('cambiarImagen');

let currentImage = 0;
const imagenes = [
"IMAGENES/ND_base.jpg",
"IMAGENES/ND_radar.png"
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

const avionNDinitialPosition = canvasAvionND.getBoundingClientRect();
const avionNDinitialPositionTop = canvasAvionND.offsetTop;
const avionNDinitialPositionLeft = canvasAvionND.offsetLeft;

let isDragging = false;
let startX;
let startY;
let canvasAvionNDX = 0;
let canvasAvionNDY = 0;

// Definición de funciones


let imgND = new Image();
imgND.src = imagenes[currentImage];
function cambiarImagen() {
  currentImage = (currentImage + 1) % imagenes.length;
  imgND.src = imagenes[currentImage];
  let avionNDdifferenceY = avionNDinitialPositionTop - canvasAvionND.offsetTop;
  let avionNDdifferenceX = avionNDinitialPositionLeft - canvasAvionND.offsetLeft;
  canvasAvionND.style.transform = `translate(${avionNDdifferenceX}px, ${avionNDdifferenceY}px)`;
  startX = 0;
  startY = 0;
  canvasAvionNDX = 0;
  canvasAvionNDY = 0;
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
FMAtextGenerator();
pressureTextGenerator();

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

button.addEventListener('click', cambiarImagen);






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

// Evento mousedown para comenzar el arrastre del canvas
canvasAvionND.addEventListener('mousedown', function (event) {
  if (event.button === 0) { // Botón izquierdo del ratón
    startX = event.clientX;
    startY = event.clientY;
    isDragging = true;
    // console.log('Sabe que he clicado');
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
  }
});

// Evento mouseup para dejar de arrastrar el canvas
document.addEventListener('mouseup', function (event) {
  if (event.button === 0) { // Botón izquierdo del ratón
    isDragging = false;
  //  console.log('Sabe que he levantado')
  }
});

// Llamar a la función para dibujar las líneas iniciales
drawLines();












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

// Código principal que utiliza las variables y funciones definidas anteriormente
