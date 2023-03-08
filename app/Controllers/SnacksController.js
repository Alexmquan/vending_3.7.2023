import { appState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";
import { setHTML } from "../Utils/Writer.js";

function _draw() {
  let snacks = appState.snacks
  let template = ''
  snacks.forEach(s => template += s.cardTemplate)
  setHTML('cardHolder', template)
}

// function _drawButton() {
//   let snacks = appState.snacks
//   // debugger
//   let template = ''
//   snacks.forEach(s => {
//     if (s.price <= appState.money && s.bool == false) {
//       // template += s.buttonTemplate
//       setHTML(`${s.name}`, template)
//       s.bool = true
//     }
//   }
//   )
//   // setHTML("snack", template)
// }

export class SnacksController {
  constructor() {
    _draw()
    appState.on('money', _draw)
  }
}