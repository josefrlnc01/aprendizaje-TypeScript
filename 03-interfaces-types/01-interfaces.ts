interface Persona {
    readonly name: string
    readonly age: number
}

interface Identificable {
    id: `user-${number}`
}

interface User extends Persona, Identificable {
    email: string
    role: 'user' | 'admin' | 'edito'
    saludar: () => void
    logIn: () => void
}

const user1 : User = {
    id : 'user-12345',
    name: 'Carlos',
    age: 20,
    email: 'carlos@mail.com',
    role: 'user',
    saludar: () => `Hola ${name}`,
    logIn: () => true
}


interface MediaPlayer {
    play: () => void
    pause: () => void
    stop: () => void
}

interface VolumeController {
    volumen: number
}

class Reproductor implements MediaPlayer, VolumeController {
    volumen: number = 50
    play(): void {
        console.log('Reproduciendo')
    }
    pause(): void {
        console.log('Pausado')
    }
    stop(): void {
        console.log('Saliendo del reproductor')
    }
}