let nums = [1,2,3,4,5,7,8,]// o X vai ser 6
let X = 6
let indice = -1
for(let i = 0; i< nums.length; i++){
    if(nums[i] === X){
        indice = i
        break;
    }
}
console.log(indice)