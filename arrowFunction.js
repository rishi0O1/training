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

const party4 = {
    name: "birthday party" ,
    guestList: ["me" , "my" , "maggie"] ,
    celebration() {
        console.log(this.name)
        this.guestList.forEach(function (guest){                // it has its own this as stated above
            console.log(guest + " is attending " + this.name)
        })
        this.guestList.forEach((guest) => {                     // since arrow function dont bind to the object i.e has own function this
            console.log(guest + " is attending " + this.name)  // this points to the party4 object 
        })
    }
}

party4.celebration() 