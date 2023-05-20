

interface DOMList {
    question: HTMLElement
    clear(): void
    render(): void
}


export default class questionTemplate implements DOMList{
    question: HTMLElement

    // Creates instance for me to use locally
    static instance: questionTemplate = new questionTemplate()

    private constructor(){
        this.question = document.getElementById("question") as HTMLElement
    }

    clear(): void {
        this.question.innerHTML = ''
    }

    render(): void {
        this.clear()

        const div = document.createElement("div") as HTMLDivElement
        div.className = "questionTemp"

        // Sets the question to the global quiz word
        div.innerHTML = "What is the synonym for " + globalThis.quizWord + "?"
        this.question.append(div)
    }
}