
// Create an array that contains the words in the sentence
let sentence = ["The", "walrus", "danced", "through", "the", "trees", "in", "the", "light", "of", "the", "moon"];
let newSentence = ["This", "sentence", "is", "showing", "how", "flexible", "the", "function", "is!"]
let output = ""
let exclamation = "!"
// The addExcitement function should accept the array as the sole argument


function addExcitement(theWordArray) {
    /*
      Write a `for` loop that iterates over the array argument and
      outputs the words.
     */
    for (i = 0; i < theWordArray.length; i++) {
    	let currentWord = theWordArray[i];
        output = output + " " + currentWord;

        if (i % 3 === 2) {
        	output = output + exclamation
        	exclamation = exclamation + "!"
        } 

        console.log(output); 
   	}
}
addExcitement(sentence);

// Invoke the function and pass in the array
// addExcitement(sentence)