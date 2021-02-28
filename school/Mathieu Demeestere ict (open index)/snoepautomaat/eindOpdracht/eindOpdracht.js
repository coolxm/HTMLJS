    
    var id = "";

    var items = [
        [0],
        [1, "cheese doritos", 1.20],
        [2, "doritos chili", 1.20],
        [3, "doritos salsa", 1.20],
        [4, "doritos sourcream", 1.20],
        [5, "doritos original cool", 1.20],
        [6, "m&ms normal", 2.00],
        [7, "m&ms crunchy", 2.00],
        [8, "m&ms caramel", 2.00],
        [9, "malteser", 2.50],
        [10, "skittels", 1.70],
        [11, "balisto corn cereal", 1.50],
        [12, "balisto fruit des bois", 1.50],
        [13, "balisto miel et amandes", 1.50],
        [14, "balisto muesli mix", 1.50],
        [15, "balisto noisettes raisins", 1.50],
        [16, "mars", 1.00],
        [17, "snickers", 1.00],
        [18, "twix", 1.00],
        [19, "bounty", 1.00],
        [20, "leo", 1.20],
        [21, "coca cola", 1.20],
        [22, "fanta", 1.20],
        [23, "sprite", 1.20],
        [24, "pepsi", 1.20],
        [25, "chaud fontaine", 1.00]
    ]   
     
    
var numcel= document.getElementById("numCel");
var infocel = document.getElementById("infoCel");
var moneycel = document.getElementById("moneyCel");
var moneyBack = document.getElementById("moneyBack");
var moneyinput = document.getElementById("moneyInput");


 function randomOption1(){
    id = id + "1";
    numcel.innerHTML = id;
    infoBar();
}
    
function randomOption2(){
    id = id + "2";
    numcel.innerHTML = id;
    infoBar();
}

function randomOption3(){
    id = id + "3";
    numcel.innerHTML = id;
    infoBar();
}

function randomOption4(){
    id = id + "4";
    numcel.innerHTML = id;
    infoBar();
}

function randomOption5(){
    id = id + "5";
    numcel.innerHTML = id;
    infoBar();
}

function randomOption6(){
    id = id + "6";
    numcel.innerHTML = id;
    infoBar();
}

function randomOption7(){
    id = id + "7";
    numcel.innerHTML = id;
    infoBar();
}

function randomOption8(){
    id = id + "8";
    numcel.innerHTML = id;
    infoBar();
}

function randomOption9(){
    id = id + "9";
    numcel.innerHTML = id;
    infoBar();
}

function randomOption10(){
    id = id + "0";
    numcel.innerHTML = id;
    infoBar();
}

function infoBar(){
    var text;
    var itemlist = (items.length * 1);
    id = id * 1;

    if (id >= itemlist){
        Clear();
    }

    text = items[id][1];

    document.getElementById("infoCel").innerHTML = text;
    
    var price = items[id][2];

    document.getElementById("moneyCel").innerHTML = "€" + price;

     
}

function Clear(){
    nr = "nr";
    numcel.innerHTML = nr;
    
    info = "...";
    infocel.innerHTML = info;

    money = "€";
    moneycel.innerHTML = money;

    moneyBack.innerHTML = "";

    document.getElementById("moneyInput").value = "";

    id = "";

}


function moneyInput(){
    var moneyInput = document.getElementById("moneyInput").value;
    id = id * 1;

    var prijs = items[id][2];
    var teruggave = ((moneyInput * 1) - (prijs * 1));
    

    teruggave = (Math.floor(teruggave * 10))/10;
    console.log(teruggave);

    if (teruggave < 0){
        moneyBack.innerHTML = "U heeft nog €" + Math.abs(teruggave) + " nodig";
    }
    else{
   moneyBack.innerHTML = teruggave + "€";
    }
}

