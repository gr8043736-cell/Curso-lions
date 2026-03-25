let nums =[1,4,6,7,8,10]
let menor = nums[0]
for(let i = 0; i< nums.length; i++){
    if(nums[i] < menor){
        menor = nums[i] 
    }
    
}
console.log("o menor valor é:", menor)