import { Game } from "./game.js";
import { Rack } from "./rack.js";
import { isValid, canConstructWord, bestPossibleWords } from "./scrabbleUtils.js";

// ES6 modules are [actually strict by default](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#Strict_mode_for_modules)
// Therefore, you can in fact comment this out or remove it.
// 'use strict';

// TODO

let YichongLiu = new Game();
document.getElementById("theBoard").innerHTML = "";
YichongLiu.render(document.getElementById("theBoard"));
const name1 = document.getElementById("player1");
const name2 = document.getElementById("player2");
document.getElementById("roundGuide").innerHTML = "It is <b>" + name1.value + "'s</b> turn!";
let player1Name = "", player2Name = "";
// console.log(name1);

// console.log(nameValue);
let Bag = new Rack(1);

// console.log(name1.value);

if (JSON.stringify(Bag.getAvailableTiles()) === "{}") {
    Bag.takeFromBag(7, YichongLiu);
}

document.getElementById("theRack").innerHTML = "";
Bag.render(document.getElementById("theRack"));


let Bag2 = new Rack(2);
if (JSON.stringify(Bag2.getAvailableTiles()) === "{}") {
    Bag2.takeFromBag(7, YichongLiu);
}
document.getElementById("theRack2").innerHTML = "";
Bag2.render(document.getElementById("theRack2"));

Bag.saveGameData();
Bag2.saveGameData();

let judge = true;

document.getElementById("clickMe").addEventListener("click", function (x) {

    const info = document.getElementById("wordInput").value.toLowerCase();

    if (!isValid(info)) {
        return alert("Invalid Word Play!");
    }
    const xInfo = document.getElementById("xInput").value;
    const yInfo = document.getElementById("yInput").value;
    if ((info === "" || xInfo === '') || (yInfo === '')) {
        return alert("Invalid Empty Play!");
    }

    const directionInfo = document.getElementById("directionInput").value;
    // console.log("" + xInfo + yInfo);
    // h stands for horizontal. If it's horizontal, it's true. Otherwise it's false.
    let score = YichongLiu.playAt(info, { x: yInfo, y: xInfo }, directionInfo === 'h' ? true : false);

    if (score === -1) {
        return alert("Invalid Play!");
    }



    if (judge) {
        if (!canConstructWord(Bag.getAvailableTiles(), info)) {
            return alert("Not in the rack!");
        }
        document.getElementById("theBoard").innerHTML = "";
        YichongLiu.render(document.getElementById("theBoard"));
  
        Bag.removeWord(info);
        Bag.takeFromBag(info.length, YichongLiu);
        document.getElementById("theRack").innerHTML = "";
        Bag.render(document.getElementById("theRack"));
        judge = !judge;
        let nameValue = player2Name;
        document.getElementById("roundGuide").innerHTML = "It is <b>" + nameValue + "'s</b> turn!";

        YichongLiu.saveGameData();
    } else {
        if (!canConstructWord(Bag2.getAvailableTiles(), info)) {
            return alert("Not in the rack!");
        }
        document.getElementById("theBoard").innerHTML = "";
        YichongLiu.render(document.getElementById("theBoard"));

        Bag2.removeWord(info);
        Bag2.takeFromBag(info.length, YichongLiu);
        document.getElementById("theRack2").innerHTML = "";
        Bag2.render(document.getElementById("theRack2"));
        judge = !judge;
        let nameValue = player1Name;
        document.getElementById("roundGuide").innerHTML = "It is <b>" + nameValue + "'s</b> turn!";
        YichongLiu.saveGameData();

    }

});

document.getElementById("clearButton").addEventListener("click", function (x) {
    YichongLiu.clearGameData();
    Bag.clearGameData();
    Bag2.clearGameData();
    location.reload();
});

document.getElementById("helpButton").addEventListener("click", function (x) {
    let bestWord = null;
    if (judge) {
        bestWord = bestPossibleWords(Bag.tiles);
    } else {
        bestWord = bestPossibleWords(Bag2.tiles);
    }

    document.getElementById("theHint").innerHTML = "Hint: " + bestWord[0];
});


name1.addEventListener("keyup", function(e) {
    player1Name = name1.value;
    if(judge) {
        document.getElementById("roundGuide").innerHTML = "It is <b>" + player1Name + "'s</b> turn!";
    }

});
name2.addEventListener("keyup", function(e) {
    player2Name = name2.value;
    if(!judge) {
        document.getElementById("roundGuide").innerHTML = "It is <b>" + player2Name + "'s</b> turn!";
    }
});


export { YichongLiu }