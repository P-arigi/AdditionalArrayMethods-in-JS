let arr=[1,2,3,4];
let array=arr.some(function(val){
    return val>2;
})
console.log(array)
let anyString=arr.some(function(val){
    return  val==="string";
})
console.log(anyString);