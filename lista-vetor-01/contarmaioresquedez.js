let nums = [1,2,6,9,17,19,15,18]
let H = 0

for(let i = 0; i< nums.length; i++ ){
    if(nums[i] >= 10){
        H++
    }
}
console.log(H)