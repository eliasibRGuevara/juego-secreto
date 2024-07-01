

/*
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío';

function intentoDeUsuario(){
    console.log('El usuario a dado Click');
}
/*function alerta(){
    let ciudad = prompt("Digite el nombre de una ciudad de Brasil");
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}
function alerta(){
    alert('Yo amo JS');
}
function suma(){
    let suma;
    let numero1 = parseInt(prompt("Digite el primer número de la Suma"));
    let numero2 = parseInt(prompt("Digite el segundo numero de la Suma"));

    suma = numero1 + numero2;
    alert(`${numero1} + ${numero2} = ${suma}`);
}*/
/*Desafío 09 en funciones
//desafio 1
function holaMundo(){
    let holaMundo = console.log('Hola, Mundo!');
    return holaMundo;
}

//desafio 2
function saludar(){
    let nombre = prompt("Digite su nombre");
    console.log(`¡Hola, ${nombre}!`);
    return; 
}

//desafio 3
function recibirNumeroYDevolverElDoble(numero1){
    let numeroDoble = numero1 * 2;
    console.log(numeroDoble);
}

recibirNumeroYDevolverElDoble(5){

//desafio 4
devolverPromedio('2','5','7');

function devolverPromedio(numero1,numero2,numero3){
    let promedio = (numero1 + numero2 + numero3)/3;
    console.log(`Promedio: ${promedio}`);
    return;
}
//desafio 5
function numeroMayor(num1,num2){
    if(num1>num2){
        console.log(`El numero ${num1} es mayor`);
    }else{
        console.log(`El numero ${num2} es mayor`); 
    }
}
numeroMayor(8,13);

//desafio 6
function numeroPorElMismo(numero){
    let doble = numero * numero;
    console.log(doble);
}
numeroPorElMismo(8);


//Desafío 09 en funciones
//desafio 1
function calcularIMC(altura,peso) {
    let IMC = (peso/altura);
    console.log(IMC);
}

calcularIMC(155,55);

//desafio 2
function hallarFactorial(numero) {
    let factorial = 1;
    let contador = 1;
    while(contador <= numero){
        factorial = factorial * contador;
        contador++;
    }
    console.log(`${numero}! es: ${factorial}`);    
}

hallarFactorial(10);

//desafio 3
function cambioDeDolar(dinero) {
    let conversion = dinero *  4.149;  
    console.log(conversion); 
}

cambioDeDolar(10000);
//desafio 4

function areaRectangulo(altura,anchura) {
    let area = anchura * altura;
    alert(`El area del rectangulo es ${area}`);
}

areaRectangulo(30,50);

//desafio 5
function areaPerimetro(numero) {
    let perimetro = (2 * 3.14) * numero;
    let area = 3.14 * (numero * numero);
    alert(`Perimetro = ${perimetro}, Area = ${area}`);
}

areaPerimetro(5);

//desafio 6
function tablaDeMultiplicar(numero) {
    let resultado;
    for(let i = 1; i <= 12; i++){
        console.log(`${numero} * ${i} = ${resultado = numero * i}`);
    }
}

tablaDeMultiplicar(9);
*/
/*Desafío 08 de Array
//desafio 1
let listaGenerica = [];
//desafio 2
let lenguagesDeProgramacion = ['JavaScript','C','C++','Kotlin', 'Python'];
console.log(lenguagesDeProgramacion);

//desafio 3
let lenguagesDeProgramacion = ['JavaScript','C','C++','Kotlin', 'Python'];
lenguagesDeProgramacion.push('Java','Ruby','GoLang');
console.log(lenguagesDeProgramacion);

//desafio 4
let lenguagesDeProgramacion = ['JavaScript','C','C++','Kotlin', 'Python'];
function mostrarLenguagesSeparadamente() {
    for(let i = 0; i < lenguagesDeProgramacion.length; i++){
        console.log(lenguagesDeProgramacion[i]);
    }
}
mostrarLenguagesSeparadamente();

//desafio 5
let lenguagesDeProgramacion = ['JavaScript','C','C++','Kotlin', 'Python'];
function mostrarLenguagesReversoSeparadamente() {
    console.log(lenguagesDeProgramacion);
    for(let i = lenguagesDeProgramacion.length; i >= 0; i--){
        console.log(lenguagesDeProgramacion[i]);
    }
}

mostrarLenguagesReversoSeparadamente();

//desafio 6
let array = [5,10,20,50];
function promedioDelArray() {
    let suma = 0;
    for(let i = 0; i < array.length; i++){
        suma += array[i];
    }
    let promedio = suma / array.length;
    console.log(`Promedio: ${promedio}`);
}

promedioDelArray();

//desafio 7
let array = [5,10,20,50];
function numeroMayoryMenorDeLaLista() {
    let mayor = array[0];
    let menor = array[0];
    for (let i = 0; i < array.length; i++) {
        if(array[i] > mayor){
            mayor = array[i];
        }
        if(array[i] < menor){
            menor = array[i];
        }   
    }
    console.log(`Mayor: ${mayor}`);
    console.log(`Menor: ${menor}`);
}

numeroMayoryMenorDeLaLista();

//desafio 8
let array = [5,10,20,50];
function calcularSuma(array) {
    let suma = 0;
    for (let i = 0; i < array.length; i++) {
        suma += array[i];
    }
    return suma;
}

let suma = calcularSuma(array);
console.log('Suma: ',suma);

//desafio 9 

function encontrarNumero(array,numero) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === numero){
            console.log(i);
        }       
    }
    console.log(-1);   
}
let array = [5,10,20,50];
numero = 20;
encontrarNumero(array,numero);

//desafio 10 
let array1 = [10,20,30,40];
let array2 = [50,60,70,80];

function sumaDeVectores(array1, array2) {
    let suma = [];
    for (let i = 0; i < array1.length; i++) {
        suma[i] = array1[i] + array2[i];
    }
    console.log(suma);
}

sumaDeVectores(array1, array2);

//desafio 11
let array = [50,60,70,80];
function cuadradoDeUnVector(array) {
    let cuadrado = [];
    for (let i = 0; i < array.length; i++) {
        cuadrado[i] = array[i] * 2;
    }
    console.log(cuadrado);
}

cuadradoDeUnVector(array);
*/