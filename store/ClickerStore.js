import { makeAutoObservable } from "mobx";

export class ClickerStore {
    count = 0;

    constructor() {
        makeAutoObservable(this);
    }

    actionClick = () => {
        this.setCount(++this.count);
    }

    resetClick = () => {
        this.setCount(0);
    }

    setCount = value => {
        this.count = value;
    }

    get doubleCount() {
        return this.count * 2;
    }
}