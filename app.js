// vowels count 
let str="rahul";
let count=0;

for(let i=0; i<=str.length-1; i++){
    let ch=str[i];
    if(ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u"){
        count++;
    }
}
console.log(count);