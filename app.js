// first non repeating char in string
let str="swiss"; //s w i s s
let result="";   //0 1 2 3 4
let count=0;
for(let i=0; i<str.length; i++){
    for(let j=0; j<str.length; j++){
       if( str[i]===str[j]){
              count++;
       }
    }
    if(count==1){
        result+=str[i];
    }
}
console.log(result);