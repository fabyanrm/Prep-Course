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
  var matriz=[]
  for (var clave in objeto){
    matriz.push([clave,objeto[clave]])
  }
  return matriz;
}

function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
    var acum=[];
    var wpos=0;
    var strI='';
    for(var i = 0; i < string.length; i++){
      strI = string[i];
      var cont=0;
      wpos=0;
      while ((wpos = string.indexOf(strI,wpos)) !== -1) {
        ++cont;
        ++wpos;
      }
      var NvoE={
        clave: '',
        valor: 0
      };
      NvoE.clave=strI;
      NvoE.valor=cont;
      if (acum.length > 0){
        var existe=false;
        for (let j=0; j<acum.length; j++) {
          if ( JSON.stringify(acum[j]) === JSON.stringify(NvoE)) {
            existe=true;
          }
        }
        if (existe===false){
          acum.push(NvoE);        
        }
      } else {
        acum.push(NvoE);
      }
    }
    var rObj = {};
    var def = acum.map(function(obj){
        rObj[obj.clave] = obj.valor;
        });
    return rObj;
    }
 function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var may=[];
  var min=[];
  var j=0;
  var k=0;
  for (i=0; i<s.length; i++){
    if ( s[i] == s[i].toUpperCase() ){
      may[j] = s[i];
      j++;
    } else {
      console.log('min['+i+'] -> ' + min[i] );
      min[k] = s[i];
      k++;
    }
  }
  var finMy=may.join('').toString();
  var finMn=min.join('');
  var fin=finMy+finMn;
  return fin;
}
function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var arrayPalabras = str.split(' ');
  for (var i=0; i < arrayPalabras.length; i++) {
    var pal = arrayPalabras[i].split('').reverse().join(''); 
    arrayPalabras[i] = pal;
  };
  var fin = arrayPalabras.join(' ');
  return fin;
} 

function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
    numero = numero.toString();
    if (numero.split('').reverse().join('') === numero){
       return 'Es capicua' ;
    }
    return 'No es capicua' ;
  }

  function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var arrCad = cadena.split('');
  for (var i=0; i < arrCad.length; i++) {
    if ( (arrCad[i] == 'a') || (arrCad[i] == 'b') || (arrCad[i] == 'c') ){
      delete(arrCad[i]) ;
    }
  }  
  return (arrCad.join('')); 
}

function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function(a, b) {
    return a.length - b.length;
  });
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var interS = arreglo1.filter(x => arreglo2.indexOf(x) !== -1);
  return interS;
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

