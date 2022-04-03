"use strict";


class Rack {
  constructor() {


    this.tiles = {};
    this.loadGameData();
  }


  getAvailableTiles() {

    return this.tiles;
  }

  takeFromBag(n, game) {

    let newTiles = game.takeFromBag(n);
    newTiles.forEach(i => i in this.tiles ? this.tiles[i] += 1 : this.tiles[i] = 1);
  }


  render(element) {
    // tile is an object
    for (const tile in this.tiles) {
      // only need 
      for (let i = 0; i < this.tiles[tile]; i++) {
        let newBox = document.createElement("div");
        newBox.classList.add("whiteBox");
        newBox.innerHTML = tile;
        element.appendChild(newBox);
      }
    }
  }

  removeWord(word) {
    for (let i = 0; i < word.length; ++i) {
      for (const tile in this.tiles) {
        // delete tile from this.tiles

        if(word.charAt(i) === tile) {
          // decrease the frequency
          this.tiles[tile] -= 1 ;

          // remove the zero value
          if(this.tiles[tile] === 0) {
            delete this.tiles[tile];
          }
        } 
      }
    }
  }
  saveGameData() {
    const ls = window.localStorage;
    ls.removeItem("LycRack");
    ls.setItem("LycRack", JSON.stringify(this.tiles));
  }
  loadGameData() {
    const ls = window.localStorage;
    let value = ls.getItem("LycRack");
    if (value !== null) {
      this.tiles = JSON.parse(value);
    }
  }
  clearGameData() {
    const ls = window.localStorage;
    ls.removeItem("LycRack");
  }
}

export { Rack };