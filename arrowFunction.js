const party = {
    name: "birthday party" ,
    celebration: function(){    // function bind with the object thats why this is accessible
        console.log(this.name)
    }
}

const party2 = {
    name: "birthday party" ,
    celebration: () => {    // arrow function dont bind with the object thereform O/P 
        console.log(this.name)  // undefined
    }
}

// sollution from ES6
const party3 = {
    name: "birthday party" ,
    celebration(){    // directly attaching the function to the object like classes in other language
        console.log(this.name)
    }
}

party3.celebration() 