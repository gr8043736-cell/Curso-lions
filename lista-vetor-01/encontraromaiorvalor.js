let nums =[1,4,6,7,8,10]
let maior = nums[0]
for(let i = 0; i< nums.length; i++){
    if(nums[i] > maior){
        maior = nums[i] 
    }
    
}
console.log("o maior valor é:", maior)