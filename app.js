function principal(option) {
  do {
    var patt = /^[A-z\s]*$/; // Expresión Regular que valida si el texto corresponde solo a letras 
    var respuesta = prompt('Ingresa el texto que deseas cifrar o decifrar');
    if (patt.test(respuesta) === false) {// si no es de A-z te avisa lo siguiente
      alert('Ingrese solo letras de la A a la Z');		
    }
  } while (respuesta === '' || patt.test(respuesta) === false || respuesta === null); // Si está vacío, o no es de A-z te avisa y te vuelve a preguntar.

  do {
    var respuesta2 = prompt('Ingresa el número de lo que quieres hacer: 1) Cifrarlo o 2) Decifrarlo');
    if (respuesta2 !== '') {
      if (respuesta2 === '1') {
        cipher(); // Llama a la funcion cifrar
      } else if (respuesta2 === '2') {
        decipher(); // Llama a la funcion decifrar
      } else {
        alert('Ingrese una opción válida: 1 o 2');
      }
    }
  } while (respuesta2 === '' || (respuesta2 !== '1' && respuesta2 !== '2')); // Si está vacío, o no es '1' o '2' vuelve a preguntar.

  function cipher() { // función que cifra o codifica un texto.
    var newWord = []; // Acá se guardan las letras codificadas.
    for (var i = 0; i < respuesta.length; i++) {
      var numberOfLetter = respuesta.charCodeAt(i); // Se obtiene el número equivalente en ASCII 
		
      if (numberOfLetter >= 65 && numberOfLetter <= 90) { // si es mayúscula hace lo siguiente.
        var newNumber = (numberOfLetter - 65 + 33) % 26 + 65; // Fórmula que transforma la mayúscula en su equivalente 33 posiciones hacia la derecha.
        var newLetter = String.fromCharCode(newNumber); // el número equivalente lo traduce a letra.
        newWord.push(newLetter); // Esto pushea la letra mayúscula codificada al array 'newWord'
      }
      if (numberOfLetter >= 97 && numberOfLetter <= 122) { // si es minúscula hace lo siguiente.
        var newNumber2 = (numberOfLetter - 97 + 33) % 26 + 97; // Fórmula que transforma la mayúscula en su equivalente 33 posiciones hacia la derecha
        var newLetter2 = String.fromCharCode(newNumber2); // el número equivalente lo traduce a letra.
        newWord.push(newLetter2); // Esto pushea la letra minúscula codificada al array 'newWord'
      }
      if (numberOfLetter === 32) { // si es un espacio devuelve un espacio. 32 en ASCII equivale a un espacio.
        newWord.push(' '); // Esto pushea el espacio codificado al array 'newWord'
      }
    } return alert('Tu texto cifrado es: ' + newWord.join('')); // Devuelve una alerta con el array transformado a string. Es la palabra cifrada.
  }


  function decipher() {// función que decodifica o decifra un texto.
    var newWord = []; // Acá se guardan las letras decodificadas.
    for (var i = 0; i < respuesta.length; i++) {
      var numberOfLetter = respuesta.charCodeAt(i); // Se obtiene el número equivalente en ASCII 
      if (numberOfLetter >= 65 && numberOfLetter <= 90) {// si es mayúscula hace lo siguiente.
        var newNumber3 = (numberOfLetter - 65 - 33 + 2 * 26) % 26 + 65; // Fórmula que transforma la mayúscula en su equivalente 33 posiciones hacia la izquierda
        var newLetter3 = String.fromCharCode(newNumber3); // el número equivalente lo traduce a letra.
        newWord.push(newLetter3); // Esto pushea la letra mayúscula codificada al array 'newWord'
      }
      if (numberOfLetter >= 97 && numberOfLetter <= 122) { // si es minúscula hace lo siguiente.
        var newNumber4 = (numberOfLetter - 97 - 33 + 2 * 26) % 26 + 97; // Fórmula que transforma la mayúscula en su equivalente 33 posiciones hacia la izquierda
        var newLetter4 = String.fromCharCode(newNumber4); // el número equivalente lo traduce a letra.
        newWord.push(newLetter4); // Esto pushea la letra minúscula codificada al array 'newWord'
      }
      if (numberOfLetter === 32) { // si es un espacio devuelve un espacio. 32 en ASCII equivale a un espacio.
        newWord.push(' '); // Esto pushea el espacio codificado al array 'newWord'
      }
    } return alert('Tu texto cifrado es: ' + newWord.join('')); // Devuelve una alerta con el array transformado a string. Es la palabra decifrada.
  }
}

principal();