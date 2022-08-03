const _ = require("lodash"); 

var obj = {
    x: 23 ,
    y: {
        z: 12 ,
    }
};

var deepCopy = _.cloneDeep(obj);
obj.y.z = 1212 ;

console.log(obj) ;
console.log(deepCopy) ;