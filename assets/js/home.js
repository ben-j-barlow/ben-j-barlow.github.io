const sentences = [
    "I'm a full-stack developer with a passion for creating elegant, user-focused solutions.",
    "When I'm not coding, you'll find me exploring the intersection of data science and everyday life.",
    "I believe in building technology that makes the digital world more human."
];

class Typewriter {
    constructor(element, sentences) {
        this.element = element;
        this.sentences = sentences;
        this.currentSentence = 0;
        this.currentChar = 0;
        this.typingSpeed = 20;
        this.sentenceDelay = 1000;
    }

    type() {
        if (this.currentSentence >= this.sentences.length) {
            return;
        }
        const currentText = this.sentences[this.currentSentence];
        
        if (this.currentChar < currentText.length) {
            this.element.textContent += currentText.charAt(this.currentChar);
            this.currentChar++;
            setTimeout(() => this.type(), this.typingSpeed);
        } else {
            this.element.textContent += '\n\n';
            this.currentSentence++;
            this.currentChar = 0;
            setTimeout(() => this.type(), this.sentenceDelay);
        }
    }

    start() {
        this.type();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.getElementById('typewriter');
    const typewriter = new Typewriter(typewriterElement, sentences);
    typewriter.start();

    // Prevent default scroll behavior on spacebar press
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space') {
            e.preventDefault();
        }
    });
});