const colorsDiv = new Array ("#f0930c", "#e90504", "#5290a6", "#be2942", "#97d94c", "#386cc0", "#51b2fb", "#49482b", "#e6e8f0");
const colorsBody = new Array ("#ee868f", "#156a18", "#c653a0", "#772868", "#0d0b93", "#ab673e", "#79aa76", "#86bf76", "#9bdeab");

function WhenLoad(){
    const x = prompt("Hi, please, type your first name here.");
    if(x == null){
        alert("Actually, no data has been saved... Whatever, that was quite unnecessary");
    }
    else{
        alert("Well, no data has been saved... Yep, it was on purpose.");
    }
}

function ChangeColor(){
    x = Math.random() * 8;
    x = Math.round(x);

    document.getElementById("colorBody").style.backgroundColor = colorsBody[x];
    document.getElementById("colorDiv").style.backgroundColor = colorsDiv[x];
}