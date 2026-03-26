let nums = [1,2,3,4,5,6,7,8,9,10,7]  // o X vai ser 7
 let b = 7
 let c = 0
for(let i = 0; i< nums.length; i++){
    if(nums[i] === b) {
        c++
    }

}
console.log(c)