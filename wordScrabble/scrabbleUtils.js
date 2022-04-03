"use strict"; // Don't touch me. This makes JS more safe.

// Here, we import the dictionary of scrabble words.
import { dictionary } from "./dictionary.js";


function canConstructWord(availableTiles, word) {
  // TODO
  const copy = {};
  for (let letter in availableTiles) {
    copy[letter] = availableTiles[letter];
  }

  for (let letter of word) {
    if (letter in copy) {
      --copy[letter];

      if (copy[letter] === 0) {
        delete copy[letter];
      }
    } else {
      if ('*' in copy) {
        --copy['*'];

        if (copy['*'] === 0) {
          delete copy['*'];
        }
      } else {
        return false;
      }
    }
  }

  return true;
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

function possibleWords(availableTiles) {
  // TODO
  return dictionary.filter(x => canConstructWord(availableTiles, x));
}

function wordGenerator(availableTiles) {
  // make a copy
  let copy = {};
  for (let letter in availableTiles) {
    copy[letter] = availableTiles[letter];
  }

  let wordSet = possibleWords(copy);
  const wordArr = [];
  for (let x = 0; x < wordSet.length; ++x) {

    let str = '';
    for (let letter in availableTiles) {
      copy[letter] = availableTiles[letter];
    }
    for (let y = 0; y < wordSet[x].length; ++y) {
      let wordProperty = wordSet[x][y];

      // doesn't have wild card => simply add it !
      if (copy.hasOwnProperty(wordProperty) && copy[wordProperty] != 0) {
        str = str + wordProperty;
        copy[wordProperty] -= 1;
      }


      // if it has '*', deal with it in special case
      if (copy.hasOwnProperty('*') && copy['*'] > 0) {
        str = str + '*';
        copy['*'] = copy['*'] - 1;
      }
    }

    wordArr.push([str, wordSet[x]]);
  }
  return wordArr;
}

function bestPossibleWords(availableTiles) {
  // TODO
  let copy = {};
  for (let letter in availableTiles) {
    copy[letter] = availableTiles[letter];
  }
  console.log(availableTiles);
  const bestWord = [];
  let words = wordGenerator(copy);
  let maxScore = 0;

  for (let x = 0; x < words.length; ++x) {
    if (baseScore(words[x][0]) > maxScore) {
      maxScore = baseScore(words[x][0]);
    }
  }

  for (let x = 0; x < words.length; ++x) {
    // words[x][0] is the string we get after our iteration
    if (baseScore(words[x][0]) === maxScore) {
      // words[x][1] is the wordSet, which is the result of posssibleWords
      bestWord.push(words[x][1]);
    }
  }
  return bestWord;
}

function isValid(word) {
  // TODO
  let judge = false;
  for(let i = 0; i < dictionary.length; ++i) {
    if(dictionary[i].length !== word.length) {
      continue;
    }
    else {
      for(let j = 0; j < dictionary[i].length; ++j) {
        if((dictionary[i].charAt(j) !== word.charAt(j)) && word.charAt(j) !== '*') {
          break;
        }
        // final character is true
        if(j === dictionary[i].length - 1) {
          judge = true;
        }
      }
    }
    // console.log(judge);
    if(judge) {
      break;
    }
  }
  
  return judge;
}

/*
console.assert(isValid("hello") === true);
console.assert(isValid("h*y") === true);
console.assert(isValid("fhfks*") === false);
console.assert(isValid("fh*ks*") === false);
console.assert(isValid("*h*kx*") === false);
console.assert(isValid("*****") === true);
console.assert(isValid("**") === true);
console.assert(isValid("d*n*") === true);
console.assert(isValid("*f") === true);
console.assert(isValid("f**d") === true);
console.assert(isValid("reallybigword") === false);
console.assert(isValid("") === false);
*/
 function copyAvailableTiles(availableTiles) {
  // TODO
  let newTiles = {...availableTiles};
  return newTiles;
}


/*let abcdefg_words = [// collected via: http://www.allscrabblewords.com/unscramble/abcdefg although there were some not present in dictionary.js - I found those, verified they don't exist in the dictionary, removed them from this list and added the only word that exists in the dictionary but not on the website: 'fag'
  'badge','cadge','caged','decaf','faced','fadge','abed','aced','aged','bade','bead','cade','cafe','cage','dace','deaf','egad','face','fade','gaed','ace','age','bad','bag','bed','beg','cab','cad','dab','dag','deb','fad','fag','fed','gab','gad','gae','ged','ab','ad','ae','ag','ba','be','de','ed','ef','fa'
];
let pw_abcdefg_results = possibleWords({'a':1,'b':1,'c':1,'d':1,'e':1,'f':1,'g':1});
console.assert(abcdefg_words.every(word => pw_abcdefg_results.includes(word)), "possibleWords failed to find all possible words given the letters 'abcdefg'");

let all_2letter_words = [// collected via: dictionary.filter(word => word.length === 2)
  "aa","ab","ad","ae","ag","ah","ai","al","am","an","ar","as","at","aw","ax","ay","ba","be","bi","bo","by","de","do","ed","ef","eh","el","em","en","er","es","et","ex","fa","go","ha","he","hi","hm","ho","id","if","in","is","it","jo","ka","la","li","lo","ma","me","mi","mm","mo","mu","my","na","ne","no","nu","od","oe","of","oh","om","on","op","or","os","ow","ox","oy","pa","pe","pi","re","sh","si","so","ta","ti","to","uh","um","un","up","us","ut","we","wo","xi","xu","ya","ye","yo"
];
let pw_2letter_results = possibleWords({'*':2});
console.assert(all_2letter_words.every(word => pw_2letter_results.includes(word)), "possibleWords failed to find all possible 2 letter words given only 2 wild cards");


let bpw_results1 = bestPossibleWords({'a':1,'m':2,'u':2,'t':1,'q':1,'k':1});
console.assert(bpw_results1.length === 1 && bpw_results1[0] === 'kumquat', "bestPossibleWords failed to find the best possible word: 'kumquat'");

let bpw_q_i_2WC = [ // checked via: https://scrabblewordfinder.org/solver - the only words worth the same amount that are not in dictionary,js are 'qi' and 'qadi'
  'qaid','quai','quid','quin','quip','quit','quiz'
];
let bpw_results2 = bestPossibleWords({'q':1, 'i':1, '*':2});
console.assert(bpw_q_i_2WC.every(word => bpw_results2.includes(word)), "bestPossibleWords failed to find the best possible words given 2 wildcards");
*/

// This exports our public functions.
export { canConstructWord, baseScore, possibleWords, bestPossibleWords, isValid, copyAvailableTiles };