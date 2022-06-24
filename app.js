let rolledDie = {die1:"./images/die1.png", die2:"./images/die2.png", die3:"./images/die3.png", die4:"./images/die4.png", die5:"./images/die5.png", die6:"./images/die6.png"}

const resetGameButton = document.getElementById("resetButton")
const yugiRollButton = document.getElementById("yugiRoll");
const kaibaRollButton = document.getElementById("kaibaRoll");
const rollMsg = document.getElementById("WinnerStateMsg");
const yugiTotal = document.getElementById("yugiTotal");
const kaibaTotal = document.getElementById("kaibaTotal");
const yugiDisable = () =>{yugiRollButton.disabled = true; kaibaRollButton.disabled = false}
const kaibaDisable = () =>{kaibaRollButton.disabled = true; yugiRollButton.disabled = false}
window.onload = function(){document.getElementById("TTD").play();}

let yugiTotalAmount = 0
let kaibaTotalAmount = 0

const yugiDiceRoll = () => {rollMsg.innerHTML = "Yugi rolled"; yugiDisable();
    ranDie1 = Math.floor((Math.random()*6)+1); yugiTotal.innerText = yugiTotalAmount += ranDie1;
    document.getElementById("dieSide").src = rolledDie["die" + ranDie1];
    
    if (ranDie1 ==1 && yugiTotalAmount <=19)
    {rollMsg.innerText = "Yugi rolled a 1, that's an automatic loss! Kaiba Wins";
    yugiTotalAmount = 0; kaibaTotalAmount = 0;
    yugiTotal.innerText = yugiTotalAmount; kaibaTotal.innerText = kaibaTotalAmount;}
    
    if (yugiTotalAmount >=20)
    {rollMsg.innerText = "Yugi Wins"; yugiTotalAmount = 0; kaibaTotalAmount = 0;}}

yugiRollButton.addEventListener("click", yugiDiceRoll)

const kaibaDiceRoll = () => {rollMsg.innerHTML = "Kaiba rolled"; kaibaDisable();
    ranDie2 = Math.floor((Math.random()*6)+1); kaibaTotal.innerText = kaibaTotalAmount += ranDie2;
    document.getElementById("dieSide").src = rolledDie["die" + ranDie2];
    
    if (ranDie2 ==1 && kaibaTotalAmount <=19)
    {rollMsg.innerText = "Kaiba rolled a 1, that's an automatic loss! Yugi Wins";
    kaibaTotalAmount = 0; yugiTotalAmount = 0;
    yugiTotal.innerText = yugiTotalAmount; kaibaTotal.innerText = kaibaTotalAmount;}

    if (kaibaTotalAmount >=20)
    {rollMsg.innerText = "Kaiba Wins"; kaibaTotalAmount = 0; yugiTotalAmount = 0;}}

kaibaRollButton.addEventListener("click", kaibaDiceRoll)

const resetGame = () => {kaibaTotalAmount = 0; kaibaTotal.innerText = kaibaTotalAmount;
    yugiTotalAmount = 0; yugiTotal.innerText = yugiTotalAmount;
    yugiRollButton.disabled= false; kaibaRollButton.disabled = false;
    rollMsg.innerHTML = "Roll To Begin";}

resetGameButton.addEventListener("click", resetGame,)