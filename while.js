while (condición) {
    // Bloque de código
    // Cambiar la condición para salir del bucle
}
var numero = 1

while ( numero <= 10 ){
    console.log(numero)
    numero++
}
var edad = Number(prompt("Ingrese un valor: "))

while (edad > 18 || edad <= 0){
  edad = Number(prompt("Ingrese un valor correcto: "))
}

console.log("Gracias por ingresar al programa")