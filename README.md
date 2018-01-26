# Cifrado César
#### Esta función permite cifrar y decifrar un texto.

Primero el usuario ingresa el texto que quiere transformar.

	Consiste en 3 funciones. La primera valida si el dato ingresado es texto. Usé 2 do while, el primero para
	que pregunte el texto que quieres transformar y el segundo para que elijas cifrar o decifrar.

	La segunda función cifra o codifica el texto ingresado. Usa la formula que busca la letra equivalente 33 posiciones
	a la derecha. Está dividido en 3 if: el primero transforma las mayúsculas, el segundo las minúsculas y el tercero los espacios.

	La tercera función decifra o decodifica el texto ingresado. Es practicamente igual a la función codificar pero 
	busca la letra 33 posiciones hacia la izquierda, por lo que la fórmula en este 
	caso resta 33 ---> (numberOfLetter - 65 - 33 + 2*26) % 26 + 65; <-----, y ya que el resultado puede dar negativo 
	la division 26 se multiplica por 2 para que de positivo.


--------> ¡Buen día! <---------