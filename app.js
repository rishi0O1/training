

let b = {
    c: "here i am c in b" ,
}

let a = {
    name: "rishij" ,
    getname: () => {
        console.log("name : ", this)
    },
    __proto__: b ,
}
