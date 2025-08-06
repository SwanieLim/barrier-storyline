function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Vj7mvo8oqU":
        Script1();
        break;
      case "6imY2N4bcn4":
        Script2();
        break;
      case "6e20AsvBYEx":
        Script3();
        break;
      case "6btxtrxoHBA":
        Script4();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('6a2CKbvWaNN');
const duration = 750;
const easing = 'ease-out';
const id = '5hhSLDTOXE1';
const pulseAmount = 0.07;
const delay = 10000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('6nRGRPiNetz');
const duration = 750;
const easing = 'ease-out';
const id = '63l0lSZqpEV';
const pulseAmount = 0.07;
const delay = 10000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6chRBDwc053');
const duration = 750;
const easing = 'ease-out';
const id = '5tV9B4Aw3Se';
const pulseAmount = 0.07;
const delay = 10000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  player.once(() => {
const target = object('5hvoZE8bBWK');
const duration = 750;
const easing = 'ease-out';
const id = '5ae2SxgbqAe';
const pulseAmount = 0.07;
const delay = 10000;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
