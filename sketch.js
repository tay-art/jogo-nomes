let palavra;

function setup() {
  createCanvas(400, 400);
  palavraAleatória();
}

  
  function palavraAleatória() {
  let palavras = ["Aurora", "Gabss", "Theus" , "JESUS"];
  palavra = random(palavras);
}


function inicializaCores(){
  background("pink");
  fill("black");
  textSize(64);
  textAlign(CENTER, CENTER)
  
}
 
function draw() {
  inicializaCores();
  let maximo= width;
  let minimo= 0;
  let quantidade= map(mouseX,0,width,1,palavra.length);
 
  let parcial= palavra.substring(0,quantidade);
  text(parcial,200,200);
 
 
 
 
 
 
 
 
 
 /* if(mouseX<50){
 let palavra = "u";
  text (palavra, 200, 200);
  } else if (mouseX <100){
    let palavra = "uv"
  text (palavra, 200, 200);
    } else if (mouseX <150){
    let palavra = "uva"
  text (palavra, 200, 200);
    }*/
}
