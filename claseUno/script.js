// /*prompt()Funcion que permite capturar datos*/
// // console.log("Hello World")/*Funcion que permite mostrar datos*/ 
// // prompt("Hola dobleSetenta ingrese su numero de celular")

// // /*Variables*/

// var nombre=prompt("Nombre, por favor: ");
// var apellido=prompt("Apellido, Cv: ");
// console.log("Hola,"+ nombre + apellido)

// var nombre=prompt("Nombre de la persona a insultar: ")
// console.log(nombre, "Que hijueputa tan bobo ome")


// var num1=Number(prompt("Ingresa tu numero 1 : "))
// var num2=parseInt(prompt("ingrese tu numero 2: "))
// var suma=num1+num2
// console.log(suma);

// Tipos de datos

// var variable=23
// console.log(typeof(variable))

// var variable='23'
// console.log(typeof(variable))

// var variable=true
// console.log(typeof(variable))

// var variable=null
// console.log(typeof(variable))
// if(5<5){
//     console.log("Esto es un condicional Simple")
// }
// else if (5>=5){
//     console.log("Este es un condicional anidado")
// }else{console.log("Este es el condicional compuesto")}

// let opcion=prompt("Seleccione un caso 1,2,3,4")
// switch(){
//     case 1:
//         console.log("Esta es la opcion 1")
//         break;
//     case 2:
//         console.log("Esta es la opcion 2")
//         break;
//     case 3:
//         console.log("Esta es la opcion 3")
//         break;
//     case 4:
//         console.log("Esta es la opcion 4")
//         break;
//     default: console.log("Seleccione una opcion valida");
// }

// let edad=18;
// let resultado=edad>=18? true:false
// console.log(resultado)

// var s=prompt("Ingrese un numero")
// if(s<0){
//     console.log("Es negativo")
// } 
// else if(s>0){console.log("Es Positivo")}

// else if(s==0){console.log("Es igual a 0")}

// var horaAuto=prompt("Cuantas horas has estado en el parqueadero?")
// var precio=5
// var horaAdicional=(horaAuto-2)
// if(horaAuto==2){
//     console.log("No debes Nada")
// }
// else{
//     var cobro=horaAdicional*5
//     console.log("debes: "+ cobro)
// }

// var edad=prompt("Ingresa tu edad")
// var edadRequerida=18-edad
// if(edad>=18){
//     console.log("Puedes Votar")
// }else{console.log("Te faltan " +edadRequerida+ " Años")
// } 

// var opc=prompt("ingrese una opcion\n" + "0.Para suma \n" + "1.Para resta\n" +"2.Para Multiplicar\n"+ "3.Division\n "+" 0.Para salir " )
// var num1=prompt("Igrese su numero 1")
// var num2=prompt("Ingrese su numero 2")
//     switch(opc){
//         case 1:
//         var suma=num1+num2
//         console.log(suma)
//         break
//         case 2:
//         var resta=num1-num2
//         console.log(resta)
//         break
//         case 3:
//         var Multiplicar=num1*num2
//         console.log(Multiplicar+" Es el resultado")
//         break
//         case 4:
//         var Division=num1/num2
//         console.log(Division)
//         break
//         default:console.log("Seleccione una opcion valida :>")
//         break
//     }

//Suma de Numeros
// var num1=Number(prompt("Ingresa un numero"))
// var num2=Number(prompt("Ingresa otro numero"))
// console.log("Calculando...")
// var suma=num1+num2
// console.log("El resultado de tu suma es : "+ suma)

// //Promedio de 3 numeros
// var num1=parseInt(prompt("Ingresa la primera nota"))
// var num2=parseInt(prompt("ingresa la segunda nota"))
// var num3=parseInt(prompt("Ingresa la tercera nota"))
// var promedio=(num1+num2+num3)/3
// console.log("Su promedio es: "+ promedio)
// if(promedio>=3.5){
//     console.log("Pastaste")
// }else if(promedio<=3.499){
//     console.log("Perdiste")
// }else if(promedio==5){
//     console.log("Felicitaciones muchach@")
// }

//Calcular la  Base de un Triangulo
// var h=parseInt(prompt("Ingrese la altura de su triangulo: "))
// var b=parseInt(prompt("Ingrese la Base de su triangulo: "))
// var area=(b*h)/2
// console.log("Calculando area...")
// console.log("El area de tu Triangulo es: "+ area)

//Convertir grados celcius a Farenheit
// var gradosCelcius=parseInt(prompt("Ingresa los grados celcius: "))
// var gradosFarenheit=(gradosCelcius*(9/5))+32
// console.log("La temperatura es de: " +gradosFarenheit)

//Convertir Kilometros a Millas
// var Kilometros=parseInt(prompt("A cuantos kilometros ibas: "))
// var Millas=Kilometros*0.621371
// console.log("Ibas a: "+Millas+ " Millas")

//Solicita el precio de un Producto y calcula el IVA
// var valorProducto=parseInt(prompt("Ingrese el valor de su producto: "))
// var IVA=19
// var calculoIVA=(valorProducto/100)*IVA
// console.log("El IVA de tu producto es: " + calculoIVA+ " Pesos")

//Solicitar horas a un trabajador y Calcular salario
// var horas=Number(prompt("Ingresa cuantas horas trabaja diarias"))
// var dias=Number(prompt("Cuantos dias trabajas?"))
// var valorHora=6915
// var salarioSemanal=(dias*horas)*valorHora
// console.log("Tu salario semanal es de: "+salarioSemanal+ " Pesos")

//Convertir dias a horas,minutos y segundos
// var dias=Number(prompt("Ingresa el numero de dias a convertir"))
// var horas=dias*24
// var minutos=dias*1440
// var segundos=dias*86400
// console.log("Calculando...")
// if(dias<=1){
// console.log(dias+" Día "+ " Equivale a\n " + horas+ " Horas\n"+minutos+" Minutos\n"+segundos+" Segundos")
// }else{
//     console.log(dias+" Días "+ " Equivalen a\n " +horas+ " Horas\n"+minutos+" Minutos\n"+segundos+" Segundos")
// }

//Solicitar precio de un producto y aplicarle el 10% de descuento a dicho producto
// var precioProducto=Number(prompt("Ingrese el valor de su producto"))
// var descuentoDiez=0.10
// var descuento=precioProducto*descuentoDiez
// var descuentoAplicado=precioProducto-descuento
// console.log("El precio de su producto con el descuento aplicado es de: "+descuentoAplicado+" Pesos")

//Intercambio de valores 
// var num1=Number(prompt("Ingrese su primer valor"))
// var num2=Number(prompt("Ingrese numero 2"))
// console.log("Haz ingresado los numeros: "+ num1 +" " + num2)
// console.log("Su intercambio es: " + num2+" "  + num1)

//Calcular el perimetro de un rectangulo
// var Longitud=parseInt(prompt("ingresa la longitud del rectangulo"))
// var Ancho=parseInt(prompt("Ingresa el ancho del rectangulo"))
// var perimetro=2*(Longitud+Ancho)
// console.log("El perimetro es: "+perimetro)

//Conversion de libras a Kilos
// var libras=parseFloat(prompt("Ingrese las libras que quieres convertir a Kilogramos"))
// var Kilogramos=0.453592
// var conversion=libras*Kilogramos
// if(libras<=1){
//     console.log(libras+" Libra "+" Equivale a: "+conversion+" Kilos")
// }else{
// console.log(libras+" Libras "+" Equivalen a: "+conversion+" Kilos")}

//Teorema de pitagoras
// var catetoA=parseInt(prompt("Ingresa el primer Cateto"))
// var catetoB=parseFloat(prompt("Ingesa el segundo Cateto"))
// var Teorema=(catetoA*catetoA)+(catetoB*catetoB)
// var hipotenusa=Math.sqrt(Teorema)
// console.log("La hipotenusa es: " + hipotenusa)
 
//Minutos y horas 
// let minutosTotales = parseInt(prompt("Ingrese el número de minutos:"));
// let horas = Math.floor(minutosTotales / 60);
// let minutosRestantes = minutosTotales % 60;
// console.log(minutosTotales + " minutos son " + horas + " horas y " + minutosRestantes + " minutos.");