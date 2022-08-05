// https://developer.mozilla.org/en-US/docs/Glossary/Primitive

// - Question : auto boxing feature in js 

// primitive : boolean , null , undefined , number , string , symbol 
// non-primitive : object 

// primitive : immutable , does not contain any function to manupulate the value 
// bt using autoxing the wrapper class arout the literal it can access the properties 

let a = "test" ;  // internally : let a = new String("a") 
let b = new String("test")  //

const ab = new Boolean(false) ;
if({}) console.log("jhdajlsd") ;
console.log(ab) ;
console.log(ab == false)
console.log(ab === false)       // type-cohersion