let nums = [1,2,3,4,5,6]
let crescente = true;

for(let i = 0; i< nums.length; i++){
    if(nums[i] > nums[i +1]){
        crescente = false;

    }
}

if (crescente){
    console.log("crescente")
}else{
    console.log("decrescente")
}
