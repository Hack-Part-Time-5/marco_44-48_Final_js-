/* Ordena esta estructura completa por profesor,
comunication y estudiantes a la vez que ordenandolo por
edad, y devuelve un objeto. */


// Ordenado alfabeticamente por profesor ------------------------------------------------------
const data = {
Antonio:{
    classification: 'comunication',
    age: 40
}, 
Nicola:{
    classification: 'profesor',
    age: 34
}, 
Gracia:{
    classification: 'profesor',
    age: 37
}, 
Oscar: {
    classification: 'student',
    age: 35
},
Nico: {
    classification: 'profesor',
    age: 29
},
Lufi: {
    classification: 'student',
    age: 26
}, 
Maria: {
    classification: 'comunication',
    age: 28
},
Pablo: {
    classification: 'student',
    age: 36
}
}

function ordenProfe(){
    let newData = {};
    Object.keys(data).sort().forEach(el => newData[el] = data[el])
    console.table(newData)
}
ordenProfe()

// -----------------------------------------------------------------------------------------------

// Ordenado por comunication, profesor y student -------------------------------------------------

const data2 = {
    Antonio: {
        classification: 'comunication',
        age: 40
    },
    Nicola: {
        classification: 'profesor',
        age: 34
    },
    Gracia: {
        classification: 'profesor',
        age: 37
    },
    Oscar: {
        classification: 'student',
        age: 35
    },
    Nico: {
        classification: 'profesor',
        age: 29
    },
    Lufi: {
        classification: 'student',
        age: 26
    },
    Maria: {
        classification: 'comunication',
        age: 28
    },
    Pablo: {
        classification: 'student',
        age: 36
    }
}

function ordenComunicacion() {
    let newData2 = {}
    Object.keys(data2).sort((a, b) => {
        if (data2[a].classification > data2[b].classification) {
            return 1
        } else if (data2[a].classification < data2[b].classification) {
            return -1
        }
        return 0
    }).forEach(el => {
        newData2[el] = data2[el]
    })
    console.table(newData2)
}
ordenComunicacion()

// --------------------------------------------------------------------------------------------

// Ordenado por edad --------------------------------------------------------------------------

const data3 = {
    Antonio: {
        classification: 'comunication',
        age: 40
    },
    Nicola: {
        classification: 'profesor',
        age: 34
    },
    Gracia: {
        classification: 'profesor',
        age: 37
    },
    Oscar: {
        classification: 'student',
        age: 35
    },
    Nico: {
        classification: 'profesor',
        age: 29
    },
    Lufi: {
        classification: 'student',
        age: 26
    },
    Maria: {
        classification: 'comunication',
        age: 28
    },
    Pablo: {
        classification: 'student',
        age: 36
    }
}

function ordenEdad() {
    let newData3 = {};
    Object.keys(data).sort((a, b) => {
        return data3[b].age - data3[a].age
    }).forEach(el => newData3[el] = data[el])
    console.table(newData3)
}
ordenEdad()

