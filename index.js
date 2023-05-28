var p1=prompt("Enter your name:");
var p2=prompt("Enter your opponent's name:");

document.querySelector("p.plr1").textContent = p1;
document.querySelector("p.plr2").textContent = p2;

var randomNum1 = Math.floor(Math.random()*6)+1;
var randomNum2 = Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src","images/dice"+ randomNum1 +".png");
document.querySelector(".img2").setAttribute("src","images/dice"+ randomNum2 +".png");

if(randomNum1>randomNum2){
    document.querySelector("h1").textContent = p1 + " wins!!";
    document.querySelector(".p1").classList.add("visibility");
    document.querySelector(".lost2").classList.add("visibility");

}
else if (randomNum1<randomNum2){
    document.querySelector("h1").textContent = p2 + " wins!!";
    document.querySelector(".lost1").classList.add("visibility");
    document.querySelector(".p2").classList.add("visibility");

}
else
document.querySelector("h1").textContent="It's a tie!! Refresh again";
