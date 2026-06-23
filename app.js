// string is palindrome or not
let student="nayan";

let palindrome="string is palindrome";

for(let i=0; i<student.length/2; i++){
    if(student[i]!==student[student.length-1-i]){
        palindrome="string is not a palindrome";
        break;
    }
}
console.log(palindrome);
