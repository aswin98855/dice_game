var number1=Math.floor((Math.random())*6)+1;
var randomdiceimage1="dice"+number1+".png";
document.querySelector("img.img1").setAttribute("src",randomdiceimage1);

var number2=Math.floor((Math.random())*6)+1;
var randomdiceimage2="dice"+number2+".png";
document.querySelector("img.img2").setAttribute("src",randomdiceimage2);

if(number1 > number2){
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(number1 < number2){
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw!";
}
