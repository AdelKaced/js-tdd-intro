function capitalizeFirstLetters(input) {
  array = input.split(' ');
  newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 0) {
      newArray.push(array[i][0].toUpperCase() + array[i].slice(1));
    } else {
      newArray;
    }
  }
  return newArray.join(' ');
}

// On peut utiliser la fonction map également
// function capitalizeFirstLetters(input) {
//   return input.length > 0
//     ? input
//         .split(' ')
//         .map((word) =>
//           word.length > 0 ? word[0].toUpperCase() + word.slice(1) : ''
//         )
//         .join(' ')
//     : '';
// }

module.exports = capitalizeFirstLetters;
