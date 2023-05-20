import './css/style.css'
import answerTemplate from "./templates/answerTemplate"
import questionTemplate from './templates/questionTemplate'
import wordFromBank from "./model/wordBank"


declare global {
  var quizWord: String
}


const initApp = (): void => {
  globalThis.quizWord = wordFromBank()
  const template = answerTemplate.instance
  const qTemplate = questionTemplate.instance

  // Set up screen fist time 
  qTemplate.render()
  template.render()

  const answer = document.getElementById("answerItems") as HTMLUListElement

  // Re-load screen when an answer is selected
  answer.addEventListener('click', ():void => {
    globalThis.quizWord = wordFromBank()
    qTemplate.render()
    template.render()
  })
}

document.addEventListener("DOMContentLoaded", initApp)
