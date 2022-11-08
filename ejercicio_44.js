/* Crear objeto de computadora, máquina relacionada con objeto de computadora y método de arranque, encendido y apagado mediante dos funciones. */

const computer = {
    procesador: 'i7',
    memoria: 16,
    hdd: '1 Tb',
    grafica: 'nvidia 3070',
    encendido: function(encender){
        encender = alert('Ordenador encendido')
    },
    apagado(apagar){
        apagar = alert('Ordenador apagado')
    }
}

console.log(computer)

for (const key in computer) {
    console.log(`${key}: ${computer[key]}`)
}

computer.encendido()
// computer.apagado()