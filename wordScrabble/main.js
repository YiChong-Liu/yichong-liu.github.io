import { Game } from "./game.js";
import { Rack } from "./rack.js";
import { isValid, canConstructWord, bestPossibleWords } from "./scrabbleUtils.js";
import { dictionary } from "./dictionary.js"


// 'use strict';

let YichongLiu = new Game();
document.getElementById("theBoard").innerHTML = "";
YichongLiu.render(document.getElementById("theBoard"));

let Bag = new Rack();
if(JSON.stringify(Bag.getAvailableTiles()) === "{}") {
    Bag.takeFromBag(7, YichongLiu);
}


document.getElementById("theRack").innerHTML = "";
Bag.render(document.getElementById("theRack"));
Bag.saveGameData()

document.getElementById("clickMe").addEventListener("click", function(x){

    const info = document.getElementById("wordInput").value.toLowerCase();

    if(!isValid(info)) {
        return alert("Invalid Word Play!");
    }
    const xInfo = document.getElementById("xInput").value;
    const yInfo = document.getElementById("yInput").value;
    if((info === "" || xInfo ==='' ) || (yInfo ==='')) {
        return alert("Invalid Empty Play!");
    }

    const directionInfo = document.getElementById("directionInput").value;
    // console.log("" + xInfo + yInfo);
    // h stands for horizontal. If it's horizontal, it's true. Otherwise it's false.
    let score = YichongLiu.playAt(info, {x: yInfo, y: xInfo}, directionInfo === 'h' ? true : false );
    
    if (score === -1) {
        return alert("Invalid Play!");
    } 

    if (!canConstructWord(Bag.getAvailableTiles(), info)) {
        return alert("Not in the rack!");
    }
    document.getElementById("theBoard").innerHTML = "";
    YichongLiu.render(document.getElementById("theBoard"));
    Bag.removeWord(info);
    Bag.takeFromBag(info.length, YichongLiu);
    document.getElementById("theRack").innerHTML = "";
    Bag.render(document.getElementById("theRack"));
    YichongLiu.saveGameData();
});

document.getElementById("clearButton").addEventListener("click", function(x) {
    YichongLiu.clearGameData();
    Bag.clearGameData();
    location.reload();
});

document.getElementById("helpButton").addEventListener("click", function(x) {
    let bestWord = bestPossibleWords(Bag.tiles);
    document.getElementById("theHint").innerHTML = "Hint: " + bestWord[0]; 
});
export {YichongLiu}