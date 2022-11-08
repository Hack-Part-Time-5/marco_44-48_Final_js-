/* A partir de un array de objetos, escribir una función que
devuelva el nombre del mejor jugador, su media en
puntuación y comprobar si está inscrito en la próxima
temporada.*/

let data = [
{
name: "Gracia",
score: [21,3,5,78,25],
temporada: true
},
{
name: "Nico M",
score: [55,66,77,55,66],
temporada: false
},
{
name: "Nico G",
score: [12,34,67,89,34],
temporada: true
},
{
name: "Gemma",
score: [12,90,13,45,6],
temporada: true
}]

// Funcion -------------------------------------------------------------------------------------------------------

function dataJugador(){

data.map((el, index) => {
    let nombre = el.score.reduce((acc, crrVal) => acc + crrVal, 0);
    nombre = (nombre / el.score.length)
    data[index]['score'] = [nombre]
})

let nombre = data.sort((a, b) => b.score - a.score)
console.log(`El mejor judador es ${nombre[0]['name']}, su media de puntuacion son ${nombre[0]['score']} puntos`)

if (nombre[0]['temporada'] === true){
    console.log(`${nombre[0]['name']} si esta inscrito en la proxima temporada`)
}else{
    console.log(`${nombre[0]['name']} no esta inscrito en la proxima temporada`)
}

}

dataJugador()










