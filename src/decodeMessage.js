/* Write a function to decode a given input string.
Each letter is paired with the letter that it coincides with when the alphabet is reversed.
For example: "a" is encoded with "z", "b" with "y", "c" with "x", etc
Spaces are not encoded/decoded. For example: "gsrh nvhhztv" will be decoded as "this message"
*/
const reverseString = string =>{
    const alphabets = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
      ];
      const reverseAlphabets = [...alphabets].reverse();
      let result = [];
      let splitstring = string.toLowerCase().split("");
      for (let j = 0; j < splitstring.length; j++) {
        for (let i = 0; i < alphabets.length; i++) {
          if (splitstring[j] === alphabets[i]) {
            result.push(reverseAlphabets[i]);
            break;
          }
        }
      }
      return result.join("");
}

const decodeMessage = string => {
    let stringArr = string.split(" ");
    let result = [];
    for(let i=0; i<stringArr.length; i++){
        result.push(reverseString(stringArr[i]))
    }
    return result.join(" ");
};

module.exports = decodeMessage;
