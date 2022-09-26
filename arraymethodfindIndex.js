let arr=[-3,1,2,4,8,2];   //It will give the  index of greatest number of 2, means first iteration of it.
let array=arr.findIndex(function(val){
    return val>2
})
console.log(array)