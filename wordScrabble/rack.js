"use strict";


class Rack {
  constructor(newID) {
    // TODO
    this.tiles = {};

    // for saving the data
    this.id = newID;
    this.loadGameData();
  }

  /**
   * Returns an object of available tiles mapped to their amount.
   * @returns {Object<string, number>} An object describing the tiles available in this rack.
   */
  getAvailableTiles() {
    // TODO
    return this.tiles;
  }

  /**
   * This function will draw n tiles from the game's bag.
   * If there are not enough tiles in the bag, this should take all the remaining ones.
   * @param {number} n The number of tiles to take from the bag.
   * @param {Game} game The game whose bag to take the tiles from.
   */
  takeFromBag(n, game) {
    // TODO
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
    ls.removeItem("LycRack" + this.id);
    ls.setItem("LycRack", JSON.stringify(this.tiles));
  }
  loadGameData() {
    const ls = window.localStorage;
    let value = ls.getItem("LycRack" + this.id);
    if (value !== null) {
      this.tiles = JSON.parse(value);
    }
  }

  clearGameData() {
    const ls = window.localStorage;
    ls.removeItem("LycRack" + this.id);
  }
}

export { Rack };