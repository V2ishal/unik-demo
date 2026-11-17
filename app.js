let favmovie="avtar";
let guess=prompt("enter your favorite movie:");
while(guess!=favmovie && guess!="quit"){
    console.log("wrong guess plz try again");
    guess=prompt("enter your favorite mooie");
}
if(guess===favmovie){
    console.log("right guess");
}
else{
    console.log('quit');
}