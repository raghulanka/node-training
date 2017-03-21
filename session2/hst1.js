
var abc = 10;

var result = fn(abc);
console.log(result);

function fn(x){
    return 'received ' + x; 
}

var result1 = console.log(fn(xyz));

var xyz = 20;

console.log(result1);

