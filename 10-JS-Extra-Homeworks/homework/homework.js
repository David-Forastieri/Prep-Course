// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let newArr = []
    for(let clave in objeto){
      newArr.push([clave, objeto[clave]])
    }
    return newArr;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let arrayString = [string.split('')]
  let objString = arrayString[0].reduce(function(countLetter, letter){
    countLetter[letter] = (countLetter[letter] || 0) + 1;
    return countLetter;
  }, {})
  return objString
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let letterMin = ''
  let letterMay = ''
  for (let i = 0; i < s.length; i++) {
      if(s[i] === s[i].toUpperCase()){
        letterMay = letterMay + s[i]
      }else letterMin = letterMin + s[i]
  }
  return letterMay + letterMin
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let arrayString = [str.split(' ')]
  let newString = ''
  for (let i = 0; i < arrayString[0].length; i++) {
    let letters = [arrayString[0][i].split('')]
    let word = letters[0].reverse()
    newString = newString + ' ' + word.join('')
  }
  return newString[0] === ' ' && newString.replace(' ', '')
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let num = numero.toString()
  return num.split('').reverse().join('') == numero ? "Es capicua" : "No es capicua"
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let newCadena = cadena;
  for (let i = 0; i < cadena.length; i++) {
    newCadena = newCadena.replace('a', '')
    newCadena = newCadena.replace('b', '')    
    newCadena = newCadena.replace('c', '')    
  }
  return newCadena;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let orderArray = arr.sort((a, b) =>{
    return a.length - b.length
  })
  return orderArray
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let newArray = []
  for (let i = 0; i < arreglo1.length || i < arreglo2.length; i++) {
    arreglo1.includes(arreglo2[i]) && newArray.push(arreglo2[i])
  }
  return newArray
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

