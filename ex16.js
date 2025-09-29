/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

  const makeCaze = function (input, caze) {
  const order = [
    'camel', 'pascal', 'snake', 'kebab', 'title',
    'vowel', 'consonant',
    'upper', 'lower'
  ];
  const options = Array.isArray(caze) ? caze : [caze];
  const newStyle = (str, s) => {
    let arr = str.split(' ');
    switch (s) {
      case 'camel':
        return arr.map((word, i) => i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
      case 'pascal':
        return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
      case 'snake':
        return arr.join('_');
      case 'kebab':
        return arr.join('-');
      case 'title':
        return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
      default:
        return str;
    }
  };
  const char = (str, s) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.split('').map(c => {
      const lowC = c.toLowerCase();
      if (c === ' ') return c;
      const isVowel = vowels.includes(lowC);

      if (s === 'vowel') {
        return isVowel ? c.toUpperCase() : c.toLowerCase();
      } else if (s === 'consonant') {
        return isVowel ? c.toLowerCase() : c.toUpperCase();
      }
      return c;
    }).join('');
  };
  const final = (str, s) => {
    if (s === 'upper') return str.toUpperCase();
    if (s === 'lower') return str.toLowerCase();
    return str;
  };
  const sorted = options.sort((a, b) => order.indexOf(a) - order.indexOf(b));
  let res = input;
  for (const style of sorted) {
    if (order.slice(0, 5).includes(style)) {
      res = newStyle(res, style);
    } else if (order.slice(5, 7).includes(style)) {
      res = char(res, style);
    } else if (order.slice(7, 9).includes(style)) {
      res = final(res, style);
    }
  }
  return res;
};

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
