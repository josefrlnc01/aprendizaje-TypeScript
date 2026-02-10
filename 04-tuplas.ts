//Tuplas
const persona : [string, number] = ['juan', 76]  

const [personaName, personaAge] = persona

console.log(personaAge)


//Coordenadas
type Coordenadas = [latitude : number, longitude : number]
const [lat, lon] : Coordenadas = [40.145, -23.345]

//Rgb

type RGB = [number, number, number] 
const rojo : RGB = [255, 0, 0]
const verde : RGB = [0, 255, 0]
const azul : RGB = [0, 0, 255]

//Rangos de valores
type Rango = [min : number, max : number]
const rangoEdad : Rango = [18, 65]


//Use state de react
type EstadoContador = [actualValue : number, updateFunction : (nuevoValor : number) => void]

//Tuplas con REST elements
type ArrayConTextoYNumeros = [string, ...number[]]
const arrayConTextoYNumeros : ArrayConTextoYNumeros = ['hola mundo', 1,2,3,4,5,6,7]
const [texto, primerNumero, ...resto] = arrayConTextoYNumeros



