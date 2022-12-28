//1.
let sentence = "The movie is not that bad, I like it";

//2.
let wordNot = sentence.search("not");

//3.
let wordBad = sentence.search("bad")

//4.
if (wordBad > wordNot) {
    const newSentence = sentence.replace(sentence.substring(wordNot, wordBad + 3), "good");
    console.log(newSentence);
} else {
    console.log(sentence);
}