"use strict";

function shuffle(array) {
  let m = array.length;

  // While there remain elements to shuffle...
  while (m) {
    // Pick a remaining element...
    const i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    const t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}

function baseScore(word) {
  // TODO
  let point = {
    'e': 1, 'a': 1, 'i': 1, 'o': 1, 'n': 1, 'r': 1, 't': 1, 'l': 1,
    's': 1, 'u': 1, 'd': 2, 'g': 2, 'b': 3, 'c': 3, 'm': 3, 'p': 3,
    'f': 4, 'h': 4, 'v': 4, 'w': 4, 'y': 4, 'k': 5, 'j': 8, 'x': 8,
    'q': 10, 'z': 10, '*': 0
  };

  let res = 0;
  word.split('').forEach(x => x in point ? res += point[x] : null);

  return res;
}


class Game {
  constructor() {
    // TODO
    // Create and store an array of 100 tiles
    this.tiles = ['e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'e', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'i', 'i', 'i', 'i',
      'i', 'i', 'i', 'i', 'i', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'n', 'n', 'n', 'n', 'n', 'n', 'r', 'r', 'r', 'r', 'r', 'r',
      't', 't', 't', 't', 't', 't', 'l', 'l', 'l', 'l', 's', 's', 's', 's', 'u', 'u', 'u', 'u', 'd', 'd', 'd', 'd', 'g', 'g', 'g',
      'b', 'b', 'c', 'c', 'm', 'm', 'p', 'p', 'f', 'f', 'h', 'h', 'v', 'v', 'w', 'w', 'y', 'y', 'k', 'j', 'x', 'q', 'z', '*', '*'];

    // Word Scores
    this.ws = {
      "1-1": 3,
      "15-15": 3,
      "15-1": 3,
      "1-15": 3,
      "1-8": 3,
      "8-1": 3,
      "15-8": 3,
      "8-15": 3,
      "2-2": 2,
      "3-3": 2,
      "4-4": 2,
      "5-5": 2,
      "11-11": 2,
      "12-12": 2,
      "13-13": 2,
      "14-14": 2,
      "2-14": 2,
      "14-2": 2,
      "3-13": 2,
      "13-3": 2,
      "4-12": 2,
      "12-4": 2,
      "5-11": 2,
      "11-5": 2,
      "8-8": 2
    };

    // Letter Scores
    this.ls = {
      "2-6": 3,
      "6-2": 3,
      "2-10": 3,
      "10-2": 3,
      "6-6": 3,
      "10-10": 3,
      "6-10": 3,
      "10-6": 3,
      "6-14": 3,
      "14-6": 3,
      "10-14": 3,
      "14-10": 3,
      "1-4": 2,
      "4-1": 2,
      "3-7": 2,
      "7-3": 2,
      "4-8": 2,
      "8-4": 2,
      "3-9": 2,
      "9-3": 2,
      "1-12": 2,
      "12-1": 2,
      "7-7": 2,
      "9-9": 2,
      "7-9": 2,
      "9-7": 2,
      "4-15": 2,
      "15-4": 2,
      "12-15": 2,
      "15-12": 2,
      "8-12": 2,
      "12-8": 2,
      "7-13": 2,
      "13-7": 2,
      "9-13": 2,
      "13-9": 2
    };
    shuffle(this.tiles);


    // store a 15x15 array of played tiles representing the physical board.
    this.board = [];
    for (let i = 0; i < 15; i++) {
      this.board[i] = [];
      for (let j = 0; j < 15; j++) {
        this.board[i][j] = '';
        
      }
    }

    this.loadGameData();
  }




  /**
   * This function removes the first n tiles from the bag and returns them. If n
   * is greater than the number of remaining tiles, this removes and returns all
   * the tiles from the bag. If the bag is empty, this returns an empty array.
   * @param {number} n The number of tiles to take from the bag.
   * @returns {Array<string>} The first n tiles removed from the bag.
   */
  takeFromBag(n) {
    // TODO
    // edge case
    let t = [];
    // console.log(this.tiles.length);
    for(let i = 0; i < n; i++) {
      if(this.tiles.length > 0) {
        t.push(this.tiles.pop());
      }
    }
    // console.log(this.tiles.length);
    return t;
  }

  /**
   * This function returns the current state of the board. The positions where
   * there are no tiles can be anything (undefined, null, ...).
   * @returns {Array<Array<string>>} A 2-dimensional array representing the
   * current grid.
   */
  getGrid() {
    // TODO
    return this.board;
  }

  /**
   * This function will be called when a player takes a turn and attempts to
   * place a word on the board. It will check whether the word is valid and can
   * be placed at the given position. If not, it'll return -1. It will then
   * compute the score that the word will receive and return it, taking into
   * account special positions.
   * @param {string} word The word to be placed.
   * @param {Object<x|y, number>} position The position, an object with
   * properties x and y. Example: { x: 2, y: 3 }.
   * @param {boolean} direction Set to true if horizontal, false if vertical.
   * @returns {number} The score the word will obtain (including special tiles),
   * or -1 if the word is invalid.
   */
  playAt(word, position, direction) {
    position.x -= 1;
    position.y -= 1;

    if (position.x < 0 || position.x > this.board.length - 1) { return -1; }
    if (position.y < 0 || position.y > this.board.length - 1) { return -1; }

    if (!direction) {
      for (let r = position.x; r < word.length + position.x; r++) {
        if (r >= 15) { return -1; }
        if (this.board[r][position.y] !== '' && this.board[r][position.y] !== word.charAt(r - position.x)) { return -1; }
      }
    } else {
      for (let c = position.y; c < word.length + position.y; c++) {
        if (c >= 15) { return -1; }
        if (this.board[position.x][c] !== '' && this.board[position.x][c] !== word.charAt(c - position.y)) { return -1; }
      }
    }

    if (!direction) {
      for (let r = position.x; r < position.x + word.length; r++) {
        this.board[r][position.y] = word.charAt(r - position.x);
      }
    } else {
      for (let c = position.y; c < position.y + word.length; c++) {
        this.board[position.x][c] = word.charAt(c - position.y);
      }
    }

    let score = 0;
    let wordScore = 1;

    if (!direction) {
      for (let r = position.x; r < position.x + word.length; r++) {

        let str = (r + 1) + '-' + (position.y + 1);
        if (str in this.ls) {
          score += baseScore(word.charAt(r - position.x)) * (this.ls[str] - 1);
        }

     
        if (str in this.ws) {
          wordScore = this.ws[str];
        }

      }
    } else {
      for (let c = position.y; c < position.y + word.length; c++) {
 
        let str = (position.x + 1) + '-' + (c + 1);
        if (str in this.ls) {
          score += baseScore(word.charAt(c - position.y)) * (this.ls[str] - 1);
        }
        if (str in this.ws) {
          wordScore = this.ws[str];
        }

      }
    }
    

    return (baseScore(word) + score) * wordScore;
  }

  render(element) {
    // TODO: You need to add your solution code here.
    const numCols = 15,
      numRows = 15,
      pieces = [
        "TW",
        "TL",
        "DW",
        "DL"
      ];

    // CREATE THE SCRABBLE BOARD HERE!
    for (let i = 1; i <= numRows; i++) {
      for (let j = 1; j <= numCols; j++) {
        let newBox = document.createElement("div");
        let str = i + "-" + j;
        if (str in this.ls) {
          if (this.ls[str] === 2) {
            newBox.classList.add("blue2Box");
            newBox.innerHTML = pieces[3];
          }
          else {
            newBox.classList.add("blueBox");
            newBox.innerHTML = pieces[1];
          }
        } else if (str in this.ws) {
          if (this.ws[str] === 2) {
            newBox.classList.add("pinkBox");
            newBox.innerHTML = pieces[2];
          } else {
            newBox.classList.add("redBox");
            newBox.innerHTML = pieces[0];
          }
        } else {
          newBox.classList.add("whiteBox");
        }

        /*if((this.board[i][j] >='a' && this.board[i][j] <= 'z') || (this.board[i][j] === '*')) {
          newBox.innerHTML = this.board[i][j];
        }*/

        if (this.board[i - 1][j - 1] !== "") {
          newBox.innerHTML = "<b>" + this.board[i - 1][j - 1].toUpperCase() + "</b>";
        }
        element.appendChild(newBox);

      }
    }
    
  }

  saveGameData() {
    const ls = window.localStorage;
    ls.removeItem("LycBoard");
    ls.setItem("LycBoard", JSON.stringify(this.board));
  }
  loadGameData() {
    const ls = window.localStorage;
    let value = ls.getItem("LycBoard");
    if(value !== null) {
      this.board = JSON.parse(value);
    }
  }

  clearGameData() {
    const ls = window.localStorage;
    ls.removeItem("LycBoard");
  }
}


// YOUR TESTS GO HERE

export { Game };