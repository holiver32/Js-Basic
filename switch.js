// Switch es una forma diferente de validar, está depende del caso que sea verdad. 

var numero = 1; 
var resultado; 

/* Switch compara con un === por esa razón los elementos tiene que ser idénticos */ 

switch (numero) {
    case 1: 
        resultado = "Sí es uno";
        break;
    case 10: 
        resultado = "Sí es diez";
        break;
    case 100:
        resultado = "Sí es cien";
        break;
    default:   
        resultado = "No match"; 
}

console.log(resultado); 

//Juego de piedra papel o tijera.

var Ope1 = "Piedra";
var Ope2 = "Papel";
var Ope3 = "Tijera";

var resultado = function(user, cpu){ 
    if(user != cpu) {
        switch (true) {
        case (user === Ope1 && cpu === Ope3):
            console.log("You win " + Ope1);
            break;
        case (user === Ope2 && cpu === Ope1):
            console.log("You win " + Ope2);
            break;
        case (user === Ope3 && cpu === Ope2):
            console.log("You win " + Ope3);
            break;
        default: 
            console.log("You Lose, CPU win!!");    
          }
        }
   else {console.log("Draw")}     
}
resultado(op3,op2) // Draw