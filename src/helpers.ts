//función que recibe un path de un archivo Notas.txt que contiene nombre y nota, saca el promedio
import { readFileSync } from 'fs'

interface Resultado {
    promedio: number
    estudiantes: string[]
    cantidadEstudiantes: number
}

/*function ImportarArchivo (path:string){
const contenido: string = readFileSync(path, 'utf-8')
const lineas: string[] = contenido.split('\n')
const notas: number[] = []
for (let i = 0; i < lineas.length; i++) {
    const linea = lineas[i]
    const parte = linea.split(',')
    const nombre = parte[0]
    const nota = parseFloat(parte[1])
    notas.push(nota)
}
}*/

//sacar promedio
function calcularPromedio(path: string):number {
    const contenido: string = readFileSync(path, 'utf-8')
    const lineas: string[] = contenido.split('\n')
    const notas: number[] = []
    for (let i = 0; i < lineas.length; i++) {
        const linea = lineas[i]
        const parte = linea.split(',')
        const nombre = parte[0]
        const nota = parseFloat(parte[1])
        notas.push(nota)
    }
    const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0)
    const promedio = suma / notas.length
    return promedio
}
//promedio mejorado en objeto
function promedioMejorado(path: string): Resultado {
    const contenido: string = readFileSync(path, 'utf-8')
    const lineas: string[] = contenido.split('\n')
    const notas: number[] = []
    for (let i = 0; i < lineas.length; i++) {
        const linea = lineas[i]
        const parte = linea.split(',')
        const nombre = parte[0]
        const nota = parseFloat(parte[1])
        notas.push(nota)
    }

    const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0)
    const nuevoResultado: Resultado = {
        promedio: 0,
        estudiantes: [],
        cantidadEstudiantes: 0
    }
    nuevoResultado.promedio = suma / notas.length
    nuevoResultado.cantidadEstudiantes = lineas.length
    nuevoResultado.estudiantes = []
    for (let i = 0; i < lineas.length; i++) {
        const linea = lineas[i]
        const parte = linea.split(',')
        const nombre = parte[0]
        nuevoResultado.estudiantes.push(nombre)
    }   

    return nuevoResultado
}



export { calcularPromedio, promedioMejorado }