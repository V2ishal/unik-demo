// q 1 string comprestion some character ko count karke short form me likho
let str="aaabbc"; // a a a b b c
let result="";    // 0 1 2 3 4 5
let count=1;
for(let i=0; i<str.length; i++){
    if(str[i]===str[i+1]){
        count++;
    }
    else{
        result+=str[i]+count;
        count=1;
    }
}
console.log(result);