<template>
    <div class="control">
        <h1>Controls</h1>
        <button type="button" @click="start">Start</button>
        <button type="button" @click="stop">Stop</button>
        <button type="button" @click="reset">Reset</button>
    </div>
</template>
<script>
    import { useCounterStore } from '@/stores/counterStore'
    
    export default {
        setup() {
            const store = useCounterStore()
            return { store }
        },
        methods: {
            start() {
                this.store.startCounter()
            },
            stop() {
                this.store.pauseCounter()
            },
            reset() {
                this.store.$reset()
            }
        },
    }
</script>