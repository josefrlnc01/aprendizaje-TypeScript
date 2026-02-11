
/*En casos como estos se podría obviar el tipo 
del valor de retorno ya que typescript infiere el tipo*/
function sumar (a: number, b: number) : number {
    return a + b
}


//Parámetros opcionales
function saludo (nombre: string, apellido?: string) : string {
    if (apellido) {
        return `Hola ${nombre} ${apellido}`
    }

    return `Hola ${nombre}`
}


//Parámetros por defecto
function crearUsuario (nombre: string, role: string = 'user') : object {
    const user = {
        nombre,
        role
    }
    return user
}


//REST parameters
function sumaNumeros (...numeros: number[]): number {
    return numeros.reduce((acc, curr) => acc + curr, 0)
}


//Tipo de función (Function Types)

type OperacionMatematica = (op1: number, op2: number) => number
const restar: OperacionMatematica = (a,b) => {
    return a - b
}
