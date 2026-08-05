// string is palindrome or not using method
let str="abbcd";
let reverse="";

for(let i=0; i<str.length; i++){
  let dublicate="false"
    for(let j=0; j<reverse.length; j++){
         if(str[i]==reverse[j]){
            dublicate="true";
            break;
         }
    }
    if(dublicate==="false"){
        reverse+=str[i];
    }
}
console.log(reverse);