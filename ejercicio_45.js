/* Crear un objeto de fruta, genera el tipo, color y peso de la fruta. */

const fruta = {
    tipo: 'Manzana',
    color: 'Verde',
    peso: 0.2
}

console.log(fruta);
console.log(fruta.tipo);
console.log(Object.keys(fruta));
console.log(Object.values(fruta));
console.log(fruta)

// Mediante un constructor ------------------------------------------

function frutas(tipo, color, peso){
    this.tipo = tipo;
    this.color = color;
    this.peso = peso;
}

let newFruta = new frutas('Platano', 'Amarillo', 0.3);
console.log(newFruta)