let line = (ctx,x1,y1,x2,y2) =>{  //Dibuja una linea desde un punto dado hasta otro
  ctx.beginPath();
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.stroke();
}

//Devuelve el contexto del canvas
let getCanvasContext = canvasId => document.getElementById(canvasId).getContext('2d');
//Setea las dimensiones del canvas
let setCanvasSize = (tamano,canvasId,anchoCelda) => {
    document.getElementById(canvasId).width = tamano * anchoCelda;
    document.getElementById(canvasId).height = tamano * anchoCelda;
}

let mostrar = (cell,ancho) =>{
  let x = cell.i * ancho;
  let y = cell.j * ancho;
  let ctx = getCanvasContext('canvas');
  //ctx.stroke(255);
  if(cell.paredes[0]) //Top
    line(ctx,x,y,x+ancho,y);
  if(cell.paredes[1]) //Rigth
    line(ctx,x+ancho,y,x+ancho,y+ancho);
  if(cell.paredes[2]) //Bottom
    line(ctx,x+ancho,y+ancho,x,y+ancho);
  if(cell.paredes[3]) //Left
    line(ctx,x,y+ancho,x,y);
  if(cell.visited){
    ctx.rect(x,y,ancho,ancho);
    ctx.fillStyle = '#B8FF3E';
    ctx.fill();
  }
}