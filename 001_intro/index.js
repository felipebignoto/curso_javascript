console.log("JS funcionado")

////////////////
//variaveis
let firtName = "Felipe"
let lastName = "Palacio"
console.log(firtName)
console.log(lastName)

let price = 20
console.log(price);
price ++;
console.log(price);

////////////////
//Constantes
const price2 = 50
console.log(price2)
//price2 ++;

////////////////
//variaveis tipos primitivos
//string - number - boolean - undefined - null 

////////////////
//objetos
let car = {
    make: "Ford",
    model: "Mustang",
    year: 2019,
    price: 2000,
    color: "red"
}
console.log(car.make)
console.log(car.price)
car.price = 5000
console.log(car.price)

////////////////
//Arrays
let friends = ["felipe","fabio","fabiana"]
console.log(friends)
console.log(friends[1])

////////////////
//funções
function sayHello(name){
    console.log("Hello " + name)
}
sayHello("Felipe")

////////////////
//operadores aritmeticos
let num1 = 1;
let num2 = 3;
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)
console.log(num2 ** num2)
console.log(++num1)

////////////////
//operadores de atribuição
let num3 = num1 + num2
console.log(num3)
num3 += 20;
console.log(num3)

////////////////
//operadores de coparação
/*
    ===
    ==
    !==
    !=
    >
    <
    >=
    <=
*/

////////////////
//operadores ternarios
let driver = 90
let speed = driver > 110 ? "verdadeiro" : "false"

////////////////
//operadores logicos
/*
and - &&
or - ||
not - !
*/
let corCliente = "white"
let corEstoque = "black"
let corVendida = corCliente || corEstoque

////////////////
//for in
const myCar = {
    make:"ford",
    year:"2009",
    color:"black"
}

for(let key in myCar){
    console.log(key, myCar[key])
}

////////////////
//for of
const amigos = ["ana","maria"]
for(let key of amigos){
    console.log(key)
}