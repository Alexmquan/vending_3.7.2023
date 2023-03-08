import { MoneyController } from "./Controllers/MoneyController.js";
import { SnacksController } from "./Controllers/SnacksController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  snacksController = new SnacksController();
  moneyController = new MoneyController();

}

window["app"] = new App();
