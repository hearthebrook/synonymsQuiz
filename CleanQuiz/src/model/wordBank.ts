
var QuizWords = ["bright", "peace", "jump", "drink", "important"]

export default function wordFromBank(): String {
    // random word choice
    const word = QuizWords[Math.floor(Math.random() * QuizWords.length)];
    return word
}


//const QuizWord = "bright"