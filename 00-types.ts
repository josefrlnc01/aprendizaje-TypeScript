

//Tipos anidados
type Company = {
    name : string
    address : string
    phone : number
}
type UserId = {
    readonly id : number
}

export type UserEntity =  User & UserId


export type User = {
    name : string
    readonly age : number //Propiedad que no se podrá modificar en ejecución
    email? : string //Propiedad opcional
    company? : Company
    role? : 'admin' | 'user' | 'viewer'
}


export type UserWithoutReadOnly = {
    name : string
    age : number 
    email? : string
}


export type Translations = {
    [key : string] : string
}