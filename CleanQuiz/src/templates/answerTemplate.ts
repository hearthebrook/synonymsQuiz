import randomWord from "../model/randomApi"
import getSynonyms from "../model/synonymsApi"


interface DOMList {
    ul: HTMLUListElement
    clear(): void
    render(): void
}


export default class answerTemplate implements DOMList{
    ul: HTMLUListElement

    // Creates instance for me to use locally
    static instance: answerTemplate = new answerTemplate()

    private constructor(){
        this.ul = document.getElementById("answerItems") as HTMLUListElement
    }

    clear(): void {
        this.ul.innerHTML = ''
    }

    render(): void {
        this.clear()

        const QuizWord = globalThis.quizWord;
        const rndInt = Math.floor(Math.random() *4)+1

        for(var i = 0; i<4; i++){
            const li = document.createElement("li") as HTMLElement
            li.className = "answer"
            var sArray:string[] = []

            const create = document.createElement("button") as HTMLButtonElement
            create.className = 'button'
            
            if (rndInt != i+1){
                randomWord().then(function(data) {
                    // run this when data is successful
                    create.textContent = data.word
                    //console.log(data)
                }).catch(function(jqXHR){
                    // run this when promise was rejected via reject()
                    console.log(jqXHR)
                })
            }
            else {
                getSynonyms(QuizWord).then(function(data) {
                    // run this when data is successful
                    // Chooses a random synonymn from the array returned
                    sArray = data.synonyms
                    const randomElement = sArray[Math.floor(Math.random() * sArray.length)];

                    // Add's that synonymn to the answer list 
                    create.textContent = randomElement
                }).catch(function(jqXHR){
                    // run this when promise was rejected via reject()
                    console.log(jqXHR)
                })
            }

            // Adds the new word to the list
            li.append(create)

            create?.addEventListener('click', rightOrWrong);

            function rightOrWrong(this: HTMLElement) {
                console.log(this.innerHTML)
                if(sArray.indexOf(this.innerHTML) > -1){
                    console.log("Correct")
                }
                else {
                    console.log("Wrong")
                }
                this.removeEventListener("click", rightOrWrong);
            }


            /*
            create.addEventListener('click', () => {
                // Do this when an answer is selected 
                allAnswers.checkAnswer(globalThis.quizWord)
                console.log("The answer was checked")
                // uses recurrsion to re-render the answer list once they guess an answer.
                this.render(allAnswers)
            })
            */
            this.ul.append(li)
        }
    }
}