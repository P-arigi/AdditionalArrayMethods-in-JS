let arr=[1,2,3,4];
let array=arr.every(function(val){
    return val>2;            //every should satisfies all the condition

})
console.log(array)
let anyString=arr.every(function(val){
    return  val<5;
})
console.log(anyString);