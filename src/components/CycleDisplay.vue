<template>
    <div class="cycles">
        <h1>Cycles</h1>
        <button type="button" @click="addTake">Take</button>
        <div class="list">
            <ol>
                <li v-for="item in store.takes" :key="item">{{ item }}</li>        
            </ol>
        </div>
        
    </div>
</template>
<script>
    import { useCounterStore } from "@/stores/counterStore";

    export default {
        setup() {
            const store = useCounterStore()
            return { store }
        },
        methods: {
            addTake() {
                this.store.takes.push(this.store.hours)
            }
        }
    }
</script>
