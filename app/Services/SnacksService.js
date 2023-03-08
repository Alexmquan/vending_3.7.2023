import { appState } from "../AppState.js";

class SnacksService {
  addMoney() {
    appState.money += .25
  }

  reduceMoney(price) {
    appState.money -= price
  }
}

export const snacksService = new SnacksService