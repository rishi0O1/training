const event1 = {
    name: "birthday party" ,
    popper: function() {
        console.log(this.name)
        setTimeout(() => {
            // console.log(this)
            console.log(this.name)      // pattern to pass the value in settimeout  
        },3000)
    }
}

event1.popper()