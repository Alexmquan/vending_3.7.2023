import { appState } from "../AppState.js"

export class Snack {

  name

  price

  image

  constructor(data) {

    this.name = data.name

    this.price = data.price

    this.image = data.image
  }

  get cardTemplate() {
    return `
      <div class="col-4 d-flex justify-content-center my-5">
      <section class="row card-format d-flex justify-content-center bg-dark rounded-top">
        <div class="col-12"><img class="img-style"
            src="${this.image}"
            alt=""></div>
        <section class="row bg-dark text-light justify-content-between p-1 rounded-bottom">
          <div class="col-8 base-style">
            <div class="">
              <h3 class="">${this.name}</h3>
              <h3>COST: $${this.price}</h3>
            </div>
          </div>
          <div class="col-4 base-style d-flex align-items-end">
            <div id="${this.name}">
              ${this.buttonTemplate}
            </div>
          </div>
        </section>
      </section>
    </div> `
  }

  get buttonTemplate() {
    if (this.price <= appState.money) {
      console.log("hello")
      return `
    <button class="border-success mb-3 bg-success" onClick="app.moneyController.reduceMoney('${this.price}')">Buy</button>
    `
    } else {
      return `<h5\
      
      >Not enough money</h5>`
    }
  }
}