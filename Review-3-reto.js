//Juego de piedra papel o tijera.

var Ope1 = "Piedra";
var Ope2 = "Papel";
var Ope3 = "Tijera";

var resultado = function(user, cpu){ 
    if(user != cpu) {
        if(user === Ope1 && cpu === Ope3){
            console.log("You win " + Ope1)
        } else if (user === Ope2 && cpu === Ope1)
            {console.log("You win " + Ope2)}
          
            else if(user === Ope3 && cpu === Ope2)
            {console.log("You win " + Ope3)}
            else {console.log("You Lose, CPU win!!")}
           }                   
           else if(user === cpu)
               {console.log("Draw")}
}
resultado(op3,op2) // You win Tijera.