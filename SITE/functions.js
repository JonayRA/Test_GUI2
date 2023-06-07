/*let PFD = document.getElementById('PFD');
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

*/

const FMA1l1text = 'SPEED';
const FMA1l2text = '';
const FMA1l3text = '';
const FMA2l1text = 'G/S';
const FMA2l2text = '';
const FMA2l3text = '';
const FMA3l1text = 'LOC';
const FMA3l2text = '';
const FMA3l3text = '';
const FMA4l1text = 'CAT3';
const FMA4l2text = 'DUAL';
const FMA4l3text = '';
const FMA5l1text = 'AP1+2';
const FMA5l2text = '1 FD 2';
const FMA5l3text = 'A/THR';
const pressureL1text = 'QNH 1013';

const FMAfont = '50px "Andale Mono", monospace';
const FMAfontWeight = 100;
const pressureFont = '25px "Andale Mono", monospace';



const t1 = 'SPEED';
const t11 = 'SPEED1';
const t2 = 'ASI';
const t3 = 'HDG';
const t4 = 'VSI';
const t41 = 'V';
const t42 = 'S';
const t43 = 'I';
const t5 = 'AH';
const t6 = 'ALT';




function FMAtextGenerator(){

	ctxFMA1.font = FMAfont;
	ctxFMA1.fontWeight = FMAfontWeight;
	var textWidth = ctxFMA1.measureText(FMA1l1text).width;
	var x = (FMA1.width / 2) - textWidth/2;
	var y = 40;
	ctxFMA1.fillStyle = 'lime';
	ctxFMA1.fillText(FMA1l1text,x,y);

	ctxFMA2.font = FMAfont;
	ctxFMA2.fontWeight = FMAfontWeight;
	var textWidth = ctxFMA2.measureText(FMA2l1text).width;
	var x = (FMA2.width / 2) - textWidth/2;
	var y = 40;
	ctxFMA2.fillStyle = 'lime';
	ctxFMA2.fillText(FMA2l1text,x,y);

	ctxFMA3.font = FMAfont;
	ctxFMA3.fontWeight = FMAfontWeight;
	var textWidth = ctxFMA3.measureText(FMA3l1text).width;
	var x = (FMA3.width / 2) - textWidth/2;
	var y = 40;
	ctxFMA3.fillStyle = 'lime';
	ctxFMA3.fillText(FMA3l1text,x,y);

	ctxFMA4.font = FMAfont;
	ctxFMA4.fontWeight = FMAfontWeight;
	var textWidth = ctxFMA4.measureText(FMA4l1text).width;
	var x = (FMA4.width / 2) - textWidth/2;
	var y = 40;
	ctxFMA4.fillStyle = 'white';
	ctxFMA4.fillText(FMA4l1text,x,y);
	var textWidth = ctxFMA4.measureText(FMA4l2text).width;
	var x = (FMA4.width / 2) - textWidth/2;
	var y = 2*40+10;
	ctxFMA4.fillStyle = 'white';
	ctxFMA4.fillText(FMA4l2text,x,y);

	ctxFMA5.font = FMAfont;
	ctxFMA5.fontWeight = FMAfontWeight;
	var textWidth = ctxFMA5.measureText(FMA5l1text).width;
	var x = (FMA5.width / 2) - textWidth/2;
	var y = 40;
	ctxFMA5.fillStyle = 'white';
	ctxFMA5.fillText(FMA5l1text,x,y);
	var textWidth = ctxFMA5.measureText(FMA5l2text).width;
	var x = (FMA5.width / 2) - textWidth/2;
	var y = 2*40+10;
	ctxFMA5.fillStyle = 'white';
	ctxFMA5.fillText(FMA5l2text,x,y);
	var textWidth = ctxFMA5.measureText(FMA5l3text).width;
	var x = (FMA5.width / 2) - textWidth/2;
	var y = 3*40+2*10;
	ctxFMA5.fillStyle = 'white';
	ctxFMA5.fillText(FMA5l3text,x,y);


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

};

function pressureTextGenerator(){
	ctxPressure.font = pressureFont;
	ctxPressure.fontWeight = FMAfontWeight;
	var textWidth = ctxPressure.measureText(pressureL1text).width;
	var x = 0*((pressure.width / 2) - textWidth/2)+10;
	var y = 40;
	ctxPressure.fillStyle = 'cyan';
	ctxPressure.fillText(pressureL1text,x,y);
};