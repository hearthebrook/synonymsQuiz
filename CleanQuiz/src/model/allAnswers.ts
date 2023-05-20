import answerItem from "./answerItem";



interface List {
    list: answerItem[],
    load(): void,
    save(): void,
    addItem(itemObj: answerItem): void,
    clearList(): void,
    checkAnswer(word:string): Boolean,
    resetAnswers(): void,
}

export default class allAnswers implements List {
    static instance: allAnswers = new allAnswers()

    // Sets up list to be used 
    private constructor(private _list: answerItem[] = []){}

    get list(): answerItem[] {
        return this._list
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("myList")
        if (typeof storedList !== "string") return

        const parsedList: {_id: string, _item: string, _correct: boolean} [] = JSON.parse(storedList)
            parsedList.forEach(itemObj => {
                const newAnswerItem = new answerItem(itemObj._id, itemObj._item, itemObj._correct)
                allAnswers.instance.addItem(newAnswerItem)
            })
    }

    save(): void {
        // Saves the list to local storage 
        localStorage.setItem("myList", JSON.stringify(this._list))
    }

    clearList(): void{
        this._list = []
        this.save()
    }

    addItem(itemObj: answerItem): void {
        this._list.push(itemObj)
        this.save()
    }

    checkAnswer(word: String): Boolean {
        if (word = globalThis.quizWord){
            return true
        }
        return false
    }


    resetAnswers(): void {
        return
    }


}