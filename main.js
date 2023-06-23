
let paises= ['mex1.png', 'peru2.png']

let correcta= [1,2]
let opciones= [];

opciones.push(["Quesadillas", "Tacos", "Enchiladas"]);
opciones.push(["Leche de tigre", "Chicharron de mariscos", "Ceviche"]);

let posActual=0;
let cantidadAcertadas=0;

function startName() {
    var nameInput = document.getElementById("name");
    var name = nameInput.value;
    
    if (name !== "") {
      alert("¡Bienvenido/a, " + name + "!");
   
    } else {
      alert("Por favor, ingresa tu nombre antes de comenzar la trivia.");
    }
  }

  //colocar boton comenzar a jugar con if, else eliminando botonn pedir nombre cuando nos de la bienvenida
  function comenzarJuego(){
    posActual = 0;
    cantidadAcertadas = 0;

    document.getElementById("pantalla_inicial").style.display = "none";
    document.getElementById("pantalla_juego").style.display = "block";

    cargarImagen();

}

function cargarImagen(){
  if(paises.length <= posActual){
      terminarJuego();
  }
  else{
      limpiarOpciones();
console.log(opciones);
      document.getElementById("imgPais").src = "assets/" + paises[posActual];
      document.getElementById("n0").innerHTML = opciones[posActual][0];
      document.getElementById("n1").innerHTML = opciones[posActual][1];
      document.getElementById("n2").innerHTML = opciones[posActual][2];
  }
}


function limpiarOpciones(){
  document.getElementById("n0").className = "nombre";
  document.getElementById("n1").className = "nombre";
  document.getElementById("n2").className = "nombre";

  document.getElementById("l0").className = "letra";
  document.getElementById("l1").className = "letra";
  document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
  if(opElegida==correcta[posActual]){
      document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
      document.getElementById("l" + opElegida).className = "letra letraAcertada";
      cantidadAcertadas++;
  }else{
      document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
      document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

      document.getElementById("n" + resCorrecta[posicionActual]).className = "nombre nombreAcertada";
      document.getElementById("l" + resCorrecta[posicionActual]).className = "letra letraAcertada";
  }
  posActual++;
  setTimeout(cargarImagen,1000);
}
function terminarJuego(){
  document.getElementById("pantalla_juego").style.display = "none";
  document.getElementById("pantalla_final").style.display = "block";
  document.getElementById("btn").style.display = "block";

  document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
  document.getElementById("numIncorrectas").innerHTML = paises.length - cantidadAcertadas;
}

function volverAlInicio(){
  //ocultamos las pantallas y activamos la inicial
  document.getElementById("pantalla_final").style.display = "none";
  document.getElementById("pantalla_inicial").style.display = "block";
  document.getElementById("pantalla_juego").style.display = "none";
}