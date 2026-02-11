//Narrowing

function procesarValor (message: string | number) {
    if (typeof message === 'string') {
        console.log('Es una cadena', message)
    } else if (typeof message === 'number') {
        console.log('Es un número', message)
    }
}

function imprimirMensaje (message: string | undefined | null) {
    if (message) {
        console.log(message)
    }
}


type Perro = {
    ladrar : () => void
    nombre : string
}

type Gato = {
    maullar : () => void
    nombre : string
}

type Pajaro = {
    piar : () => void
    nombre : string
}

type Animal = Perro | Gato | Pajaro

function emitirSonido (animal : Animal) {
    if ('ladrar' in animal) {
        console.log('El perro esta ladrando')
        animal.ladrar()
    } else if ('maullar' in animal) {
        console.log('El gato está maullando')
        animal.maullar()
    } else {
        console.log('El pájaro está piando')
        animal.piar()
    }
}


//Instanceof narrowing
function formatDate (date : Date | string): string {
    if (date instanceof Date) {
        return date.toUTCString()
    }
    return new Date(date).toUTCString()
}