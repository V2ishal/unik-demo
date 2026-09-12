// dublicate remove using method
let str="aaabbc";
let result="";
for( let i=0; i<str.length; i++){
    if(result.includes(str[i])){
           continue;
    }
    else{
        result+=str[i];
    }
}
console.log(result);