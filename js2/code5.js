var Array=[1,2,3,4]
function sumAll(){
    var s=Array.reduce((acc,value)=>(acc+=value),0);
    console.log(s);
}
sumA11(Array);