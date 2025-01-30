const arr=[3, 5, 7, 2, 8];
function findMax(){
var s=arr.reduce((max,el)=>(max>el)?max:el);
console.log(s);
}
findMax();