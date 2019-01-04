import { action, observable } from "mobx"

export class CounterStore {
  @observable
  counter: number = 0

  @action
  increment = (number: number = 1) => {
    this.counter += number
  }

  @action
  decrement = (number: number = 1) => {
    this.counter -= number
  }
}

export default CounterStore
