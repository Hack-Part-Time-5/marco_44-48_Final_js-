/* Escribir una función que acepte como parámetro un
objeto de estudiantes y votaciones. 
{
    Nico: 5,
    Gemma: 7...
}.
Calcular la media de las votaciones, incrementarla del 10 %
y redondearla por defecto.
Devolver un objeto que lleve el
nombre del estudiante, y valor "Aprobado con NN"
o "Suspenso con NN", donde NN es el voto de cada
estudiante en el objeto inicial en base al que sea mayor o
menor de la media calculada. */

const votaciones = {
    Pablo: 6,
    Luis: 7, 
    Juan: 5,
    Pedro: 8,
    Andres: 6,
    Francisco: 7,
    Alberto: 5
}


function notas(estudiantes) {
    let nombre = Object.keys(estudiantes)
    let puntuacion = nombre.map((el) => estudiantes[el])
    let totalPunt = puntuacion.reduce((acc, crrVal) => acc + crrVal, 0) 
    totalPunt += (totalPunt * 10 / 100)
    let media = ((totalPunt / nombre.length)).toFixed(0)  
    const resultados = {};
    puntuacion.map((el, i)=> {
        if (el < media) {
            let susp = `Tienes un ${el}, lo siento has suspendido`
            return resultados[nombre[i]] = susp
        }else{
            let apro = `Tienes un ${el}, has aprobado`
            return resultados[nombre[i]] = apro 
        }
    })
    console.table(resultados)
}

notas(votaciones)

