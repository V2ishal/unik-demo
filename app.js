<<<<<<< HEAD
// first non repeating char using method 
 let str="swiss";  // s w i s s
 let result="";    // 0 1 2 3 4

 for(let ch of str){
    if(str.indexOf(ch)===str.lastIndexOf(ch)){
        result+=ch;
        break;
    }
 }
 console.log(result);
=======
// first non repeating char in string
let str="swiss"; //s w i s s
let result="";   //0 1 2 3 4
for(let i=0; i<str.length; i++){
    let count=0;
    for(let j=0; j<str.length; j++){
       if( str[i]===str[j]){
              count++;
       }
    }
    if(count==1){
        result+=str[i];
        break;
    }
}
console.log(result);
>>>>>>> main
