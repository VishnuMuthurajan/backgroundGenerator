var out = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gra");
var random = document.getElementById("btn");


function grad(){
    body.style.background = "linear-gradient(to bottom," 
    + color1.value 
    +", " 
    + color2.value + ") fixed";
    out.textContent = body.style.background + ";"
}

function rcolor()
{
    var rcolor1 = '#'+Math.floor(Math.random()*16777215).toString(16);
    var rcolor2 = '#'+Math.floor(Math.random()*16777200).toString(16);
    body.style.background = "linear-gradient(to bottom," 
    + rcolor1
    +", " 
    + rcolor2 + ") fixed";
    out.textContent = body.style.background + ";"
}


color1.addEventListener("input",grad);

color2.addEventListener("input",grad);

