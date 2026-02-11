//ANY

let valor : any = 'esto es una cadena'
valor = 8
const sumaValor = valor + 4


//UNKNOWN

let valorDesconocido : unknown = 20
valorDesconocido = 'sfsdfsf'


function parseJSON (jsonString : string) : unknown {
    return JSON.parse(jsonString)
}

const datos = parseJSON('{"nombre":"carlos", "edad":20}')


//Narrowing
if (typeof valorDesconocido === 'number') {
    const sumaValorDesconocido = valorDesconocido + 20
}

if (typeof datos === 'object' &&  datos !== null && 'nombre' in datos ) {
    console.log((datos as {nombre : string}).nombre)
}


//Void
function errorMessage (errorMessage : string) : void {
    if (errorMessage.length === 0) return
    console.error(errorMessage)
    return
}



//Never
function throwError (error : string) : never {
    throw new Error(error)
}


function revisarValor (x : number | string) {
    if (typeof x === 'number') {
        console.log('Es un número', x)
    } else if (typeof x === 'string') {
        console.log('Es una cadena')
    } else {
        console.log(x) //Es de tipo never porque nunca debería suceder en tiempo de compilación
        throwError('Tipo no soportado')
    }
}


