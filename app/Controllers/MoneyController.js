import { appState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";
import { setHTML } from "../Utils/Writer.js";

function _drawMoney() {
  let template = appState.money

  setHTML('moreMoney', template)
}
export class MoneyController {
  constructor() {
    appState.on('money', _drawMoney)
  }

  addMoney() {
    snacksService.addMoney()
  }

  reduceMoney(price) {
    if (appState.money >= price) {
      snacksService.reduceMoney(price)
    } else {
      window.alert("Please insert more Money")
    }
  }
}