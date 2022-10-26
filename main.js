//===================task1============================

//solution1
let nums=[1,2,3,1,5,3,-1]
let unique=nums.reduce((a,b)=>{
    if(!a.includes(b))
    a.push(b);
    return a;
},[])
console.log(unique)

//solution2
function Remove(nums){
    let a = [];
    for (let i = 0; i < nums.length; i++) {
        if(a.indexOf(nums[i]) === -1){
            a.push(nums[i])
        }
    }
    return a;
}
console.log(Remove(nums));

//=====================task2=============================

let pov=nums.map((a)=>{
    if(a>0)
    return a*a
})
console.log(pov)

//=====================task3==============================

function String(str) {
    let splitString = str.split(""); 
    let reverseArray = splitString.reverse(); 
    let joinArray = reverseArray.join(""); 
    return joinArray; 
}
console.log(String('hello world'))

