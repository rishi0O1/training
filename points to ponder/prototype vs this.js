// function MyClass(){
//     let name = "rishij" ;       // both without this wont get associate with myClass 
//     display = function(){     
//         console.log(name) ;
//     }
// }

function MyClass(){
    this.name = "rishij" ;       // only name get associated with myClass i.e with object of this class
    this.display = function(){
        console.log(this.name) ;
    }
}

MyClass.prototype.display2 = function(){        // attached to the class ... access by all the object 
    console.log("display2") ;
}

const sectionD = new MyClass() ;
const sectionE = new MyClass() ;
sectionE.name = "check" ;
sectionD.display() ;
sectionE.display() ;
