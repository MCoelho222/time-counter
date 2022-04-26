import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counterStore', {
    state: () => ({
        counter: 0,
        time: 0,
        hours: 0,
        takes:[]
    }),
    actions: {
        addOne() {
            this.time++
        },
        startCounter() {
            this.counter = setInterval(this.addOne, 1000)
        },
        pauseCounter() {
            clearInterval(this.counter)
        }
        
    }
})
