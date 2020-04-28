class Word {
    constructor(word) {
        this.word = word;
        this.letters = this.countLetters();
        this.correct = 0;
    }
    countLetters() {
        let count = 0;
        let letters = 0;
        this.word.split('').forEach(element => {
            if (this.word.indexOf(element) >= count) {
                letters++
            }
            count++;
        });
        return letters;
    };
    guessLetter(letter) {
        this.correct += this.word.includes(letter) ? 1 :0;
        return this.word.includes(letter);
    }
    guessedCorrectly() {
        return this.correct >= this.letters ? true : false;
    }
}


module.exports = Word;