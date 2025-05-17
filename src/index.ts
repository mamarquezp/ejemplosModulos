/*

//Leer archivo
import {readFileSync} from 'fs'
const contenido: string = readFileSync('././ventas_.csv', 'utf-8')

//Muestra contenido
console.log(contenido)

//utilizar función desde otro módulo
import { sumar } from './utils'
console.log(sumar (5,8))


//escribir archivo
import {writeFileSync} from 'fs'
const mensaje = "Hola a todos, desde la clase de programación"

writeFileSync('././mensaje.txt', mensaje)

console.log(mensaje)


//import {appendFileSync, readFileSync} from 'fs'
const readline = require('readline-sync')

const nombre = readline.question('Nombre')
const apellido = readline.question('Apellido')

const linea = `${nombre} ${apellido} \n`

appendFileSync('././log.txt', linea, {encoding: 'latin1'})

*/

import { calcularPromedio } from './helpers'
import { promedioMejorado } from './helpers'

const ruta: string = '././nota.txt'

console.log(`El promedio de las notas es: ${calcularPromedio(ruta)}`)
console.log(`El promedio de las notas es: ${promedioMejorado(ruta).promedio} y el total de alumnos es: ${promedioMejorado(ruta).cantidadEstudiantes}`)
