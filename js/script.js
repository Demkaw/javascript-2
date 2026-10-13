//Ejercicios de Javascript

//Ejercicio 1
// Autocuración con posciones de vida
// Genera un programa que tome encuenta una variable de vida 
// y si esta es menor a 50, se le sumen 30 puntos de vida
// Agrega una variable para controlar el limite inferior para usar pociones y otra variable para controlar el limite superior de vida
// Agrega también una variable para controlar la cantidad de pociones que tiene el jugador
// Usa que se ejecute cada 2 segundos y que baje la vida del jugador en 5 puntos hasta llegar a 0 
// Para esto último vas a necesitar investigar la función setInterval() de Javascript

let vida = 100;
let vidaMaxima = 100;
let limitePocion = 50;
let pociones = 3;

let juego = setInterval(function() {
    vida = vida - 5;

    if (vida < limitePocion && vida > 0 && pociones > 0) {
        vida = vida + 30;
        pociones--;

        if (vida > vidaMaxima) {
            vida = vidaMaxima;
        }

        console.log("La posición ha sido utilizada.");
    }
 
    if (vida < 0) {
        vida = 0;
    }

    console.log("Vida:", vida);
    console.log("Pociones:", pociones);

    if (vida === 0) {
        console.log("Has perdido");
        clearInterval(juego);
    }

}, 2000);

//Ejercicio 2
// Organiza los elementos de la bolsa
// Crea un programa que tenga un arreglo de objetos con los elementos de la bolsa de un jugador
// Cada objeto debe tener un nombre, una cantidad y un tipo de elemento
// Crea una función que divida el arreglo en 3 arreglos diferentes dependiendo del tipo de elemento y que los muestre ordenados por cantidad en consola 
// Muestra el resultado en consola
// Ejemplo de arreglo de objetos:

const pokedex = [
    { 
        nombre: "Pokeball", 
        cantidad: 5, 
        tipo: "Normal" },
    { 
        nombre: "Repel", 
        cantidad: 3, 
        tipo: "Normal" },
    { 
        nombre: "Quick Attack", 
        cantidad: 2, 
        tipo: "TM" },
    { 
        nombre: "Surf", 
        cantidad: 3, 
        tipo: "TM" },
    { 
        nombre: "Soda Pop", 
        cantidad: 10, 
        tipo: "Consumable" }
];

function agregarElemento(nombre, cantidad, tipo) {
    const itemNuevo = {
        nombre: nombre,
        cantidad: cantidad,
        tipo: tipo
    };
    pokedex.push(itemNuevo);
    console.log("Se añadió " + nombre + " a la pokedex");
}

function organizarPokedex() {
    const normales = pokedex.filter(item => item.tipo === "Normal");
    const tms = pokedex.filter(item => item.tipo === "TM");
    const consumibles = pokedex.filter(item => item.tipo === "Consumable");

    console.log(" <ELEMENTOS TIPO NORMAL>");
    console.log(normales);

    console.log(" <ELEMENTOS TIPO TM> ");
    console.log(tms);

    console.log(" <ELEMENTOS TIPO CONSUMABLE> ");
    console.log(consumibles);
}

function actualizaCantidad(nombreSolicitado, nuevoNumero) {
    for (let i = 0; i < pokedex.length; i++) {
        if (pokedex[i].nombre === nombreSolicitado) {
            pokedex[i].cantidad = nuevoNumero;
            console.log("El elemento " + nombreSolicitado + " ahora tiene " + nuevoNumero + " conjuntos.");
            return;
        }
    }
    console.log("No se encontró el elemento.");
}

function eliminarElemento(nombreSolicitado) {
    for (let i = 0; i < pokedex.length; i++) {
        if (pokedex[i].nombre === nombreSolicitado) {
            pokedex.splice(i, 1);
            console.log("Se eliminó " + nombreSolicitado + " de la pokedex.");
            return;
        }
    }
    console.log("No se encontró el elemento solicitado para eliminar.");
}

function mostrarElemento(nombreSolicitado) {
  const hallado = pokedex.find(item => item.nombre === nombreSolicitado);

  if (hallado) {
    console.log(hallado);
  } else {
    console.log("El elemento " + nombreSolicitado + " no fue hallado."); 
  }
}

console.log(" <5. ARREGLO INICIAL>");
console.log(pokedex);

console.log(" <1. ELEMENTOS ORGANIZADOS> ");
organizarPokedex();

console.log(" <2. AGREGAR POCIÓN> ");
agregarElemento("Poción", 8, "Consumable");
mostrarElemento("Poción");

console.log(" <3. ACTUALIZAR CANTIDAD> ");
actualizarCantidad("Pokeball", 20);
mostrarElemento("Pokeball");

console.log(" <4. ELIMINAR ELEMENTO> ");
eliminarElemento("Repel");
mostrarElemento("Repel");

console.log(" <6. ARREGLO FINAL> ");
console.log(pokedex);

//Ejercicio 3
//Crea un programa que tomando en cuenta las caracteristicas de los pokemones (2)
//Ejecute funciones de ataque y cálculo de daño dependiendo de las estadisticas del pokemon para cálculo de daño
//Ejemplo: Pikachu lanza un ataque que hace 20 de daño, 
// si el pokemon enemigo tiene 50 de vida, al recibir el ataque 
// le quedaran 30 de vida, pero si el pokemon enemigo tiene 10 de defensa, 
// el ataque de Pikachu le hará 10 de daño y le quedarán 40 de vida
const pikachu = {
  nombre: "Pikachu",
  tipo: "Eléctrico",
  ataque: "Trueno",
  dano: 20,
  vida: 50,
  defensa: 10
};

const Charizard = {
  nombre: "Charizard",
  tipo: "Fuego",
  ataque: "Lanzallamas",
  dano: 25,
  vida: 60,
  defensa: 5
};

function atacar(atacante, defensor) {
  let danoReal = atacante.dano - defensor.defensa;
  
  if (danoReal < 0) {
    danoReal = 0;
  }

  defensor.vida = defensor.vida - danoReal;

  if (defensor.vida < 0) {
    defensor.vida = 0;
  }

  console.log(atacante.nombre + " embiste a " + defensor.nombre + " y logra " + danoReal + " de daño.");
  console.log("A " + defensor.nombre + " le quedaron " + defensor.vida + " puntos de vida.");
}

function comenzarCombate(pok1, pok2) {
  console.log(" Comienza la pelea!!: " + pok1.nombre + " VS " + pok2.nombre + "!");

  while (pok1.vida > 0 && pok2.vida > 0) {
    atacar(pok1, pok2);

    if (pok2.vida <= 0) {
      console.log("¡" + pok2.nombre + " ha sido derrotado! ¡El triunfador es: " + pok1.nombre + "!");
      break;
    }
    
    atacar(pok2, pok1);

    if (pok1.vida <= 0) {
      console.log("¡" + pok1.nombre + " ha perdido! ¡El triunfador es: " + pok2.nombre + "!");
      break;
    }
  }
}

comenzarCombate(Pikachu, Charizard);