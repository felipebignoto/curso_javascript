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