<template>
    <div class="time">
        <h1>Time</h1>
        <p>{{ time }}</p>
    </div>
</template>
<script>
import { useCounterStore } from '../stores/counterStore'

    export default {
        setup() {
            const store = useCounterStore()
            return { store }
        },
        computed: {
            time() {
                let counter = this.store.time
                let hours = Math.trunc(counter/3600)
                let min = Math.trunc(counter/60) % 60
                let sec = counter % 60
                let hourString = hours/10 < 1 ? '0' + hours : hours
                let minString = min/10 < 1 ? '0' + min : min
                let secString = sec/10 < 1 ? '0' + sec : sec
                let timeNow = `${hourString}:${minString}:${secString}`
                return timeNow
                }
        },
        updated() {
            this.store.hours = this.time
        }
    }
</script>