function countLetters(str) {
  var output = {}
  var noSpaces = str.split(" ").join("").toLowerCase();
  for (var i = 0; i < noSpaces.length; i++) {
    var currentLetter = noSpaces[i]
    if (output[currentLetter] === undefined) {
    output[currentLetter] = [i];
    } else {
      output[currentLetter].push(i)
    }
  }
  console.log(output)
}

countLetters("lighthouse in the house")