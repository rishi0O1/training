// how to use promise for async call 
const add = (a , b) => {
    return new Promise((resolve , reject) => {
        setTimeout(() => {
            resolve(a+b) ; 
            // reject("error") ;
        },2000)
    })
}

add(1 , 2).then((sum) => {
    console.log(sum + " then sum ") ;
}).catch((e) => {
    console.log(e + " catch error ") ;
})

// promise chaining sollution
add(1 , 2).then((sum) => {
    return add(sum , 1) ;
}).then((sum) => {
    console.log(sum) ;
})
.catch((e) => {
    console.log(e + " catch error ") ;
})