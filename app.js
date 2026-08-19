// Q6 string compression 
let str="aaabbc";  // a   a   a   b   b   c
let result="";     // 0   1   2   3   4   5
let count=1;
for(let i=0; i<str.length; i++){
    while(str[i]===str[i+1]){
        count++;
        i++;
    }
   result+=str[i]+count;
      count=1;
}
console.log(result);

