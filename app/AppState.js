import { Value } from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import { loadState } from "./Utils/Store.js"
import { Snack } from "./Models/Snack.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState('values', [Value])


  /** @type {import('./Models/Snack').Snack[]} */
  snacks = [
    new Snack({ name: 'SOUP', price: 4, image: "https://images.unsplash.com/photo-1613844237701-8f3664fc2eff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHNvdXB8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" }),
    new Snack({ name: 'SPAGHETTI', price: 7, image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c3BhZ2hldHRpfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }),
    new Snack({ name: 'PIZZA', price: 5, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }),
    new Snack({ name: 'BREAD', price: 3, image: "https://images.unsplash.com/photo-1605974322225-98246b2d683b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" }),
    new Snack({ name: 'DUMPLINGS', price: 2, image: "https://images.unsplash.com/photo-1545809278-56c8739d74e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2030&q=80" }),
    new Snack({ name: 'CAKE', price: 5, image: "https://images.unsplash.com/photo-1584982890941-b788ae5a54df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1096&q=80" })
  ]

  /** @type {import('./Models/Value').Snack|null} */
  money = 0

  enoughMoney = null
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
