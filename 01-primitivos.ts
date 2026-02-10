//Strings
//Al ser una constante directamente aplica el tipo del resultado
const nombre = 'Jose'
const saludo = `Hola, ${nombre}` //Tipo inferido como string
const vacio : string = ''

//Números
let color : 0x9ff
let infinito = Infinity

//Booleanos
let boolean = true
boolean = false

//Nulos e indefinidos
let nulo : null = null
let indefinido : undefined = undefined

//Cuando el valor puede tener 2 tipos diferentes se utiliza el operador or
let age : Number | null = null
age = 30


const numeroGrande : bigint = 2342355552234244n
const id : symbol = Symbol('id')
