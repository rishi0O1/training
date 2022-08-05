let a = {a:1 , b:2 , e: {x:1,y:2}} 
let b = {c:1 , d:2} 

// Object.assign() : shallow copy
let c = Object.assign(b , a) ;
a.e.x = "rishij" ; 
a.a = "rishij" ;  // since primitive no reference is taken 
// console.log(c) ;

// Object.create() : existing object ko prototype pe rakhdega 
let x = Object.create(a) ;
console.log(x) ;  // {} 
console.log(x.a)  // rishij : by a object 

// Object.values() :  taskes out all the values from the object
const s = {
    a: "rishij" ,
}
Object.values(s) ;  // [ "rishij" ]

// Object.defineProperty()
// By default, values added using Object.defineProperty() are immutable and not enumerable.
const object1 = {} 
Object.defineProperty(object1 , "test" , {
    value: 123 ,
})
console.log(object1) ;
console.log(" test -> s  " , s) ;
console.log(Object.values(object1)) ;


// Object.entries() 
const object3 = {
    "name": "rishij" ,
    "nam": "rishij" ,
}
console.log(" object3  " , object3);
console.log(Object.entries(object3))

// OBJECT.freeze() 
const z = Object.freeze(object3) ; z.name = "rishijd" ;
console.log(z)