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

