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