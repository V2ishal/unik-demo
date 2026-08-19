//first non repeating char using method?
let str="swiss";
let result="";
for(let ch of str){
    if(str.indexOf(ch)===str.lastIndexOf(ch)){
          result+=ch;
          break;
    }
}
console.log(result);