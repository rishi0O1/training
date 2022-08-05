// https://www.programiz.com/javascript/constructor-function#:~:text=In%20JavaScript%2C%20a%20constructor%20function,is%20an%20object%20constructor%20function.

// object literals
let a = {
    name: "rishij" ,
    age: 14 ,
}

// function constructor : new object can be made i.e seprate memmory
function Pizza(name , size){
    this.name = name ;
    this.size = size ;
}

// Pizza.toppings = "all veg season" ;      // ???????
Pizza.prototype.toppings = "all veg season" ;  // adding property to the function constructoe accessable to all object 

const peporoni = new Pizza("peporoni" , "medium") ;
const peporoni2 = new Pizza("peporoni" , "small") ;

peporoni.toppings = "non veg" ;

console.log(peporoni.toppings) ;
