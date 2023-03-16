
//En este desafío vas a recibir un parámetro secreto en la función solution. Debes retornar true si el número secreto es mayor a 5 y false si es menor o igual.

//Input

//solution(1)
//solution(5)
//solution(10)

//Output

//false
//false
//true


export function solution(secreto) {
    if (secreto > 5) {
      return true;
    } else {
      return false;
    }
  }
  