import type {Translations, User, UserEntity} from './00-types'
import type { UserWithoutReadOnly } from './00-types'
//Objetos

const user : User = {
    name : 'Carlos',
    age : 24,
    company : {
        name : 'vueloslibre',
        address : '41 avenue n21 LA',
        phone : 556776554
    }
}


//Propiedades opcionales
const anotherUser : User = {
    name : 'Mati',
    age : 40,
    email : 'mati@mail.com',
    role : 'admin'
}

//Uso de object.freeze para no permitir modificación de propiedades en ejecución
const userWithFreeze : UserWithoutReadOnly = Object.freeze({
    name : 'Paul',
    age : 34,
    email : 'paul@mail.com'
})


//Intersecciones
const userWithIntersections : UserEntity = {
    id : 2,
    name : 'Pedro',
    age : 44,
    email : 'pedro@mail.com',
    role : 'user'
}

//Objetos dinámicos
const translations : Translations = {
    hello : 'hola',
    bye : 'adiós'
}


