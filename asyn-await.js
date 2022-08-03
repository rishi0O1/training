const doWork = () => {

}

console.log(doWork())   // undefined 

const doWork2 = async () => {       // async function return promise with fullfilled value as undefined as no return value is there 

}

console.log(doWork2()) 

const doWork3 = async () => {
    return "async return"
}

console.log(doWork3())  // Promise { 'async return' }

// handling of promise is done using .then() and catch 
const doWork4 = async () => {
    return "async return"
}

doWork4().then((res) => {
    console.log("res : " + res) ;   // res : async return
}).catch((error) => {
    console.log("error : " + error ) ;
})

// ----------------------------------------------------------------------------------------------

const add = function(a , b){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve("here i am result from DB call" + (a+b)) ;
        }, 2000);
    })
}
 
const doWork5 = async () => {
    const result = await add(4,5) ;
    return result ;
}

doWork5().then((data) => {
    console.log(data) ;
}).catch((error) => {
    console.log(error) ;
})