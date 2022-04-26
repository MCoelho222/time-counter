<template>
  <div id="app">
    <WatchControl></WatchControl>
    <TimeCounter></TimeCounter>
    <CycleDisplay></CycleDisplay>
  </div>
</template>

<script>

import WatchControl from './components/WatchControl.vue'
import TimeCounter from './components/TimeCounter.vue'
import CycleDisplay from './components/CycleDisplay.vue'

export default {
  name: 'App',
  components: {
    WatchControl,
    TimeCounter,
    CycleDisplay
  },
}
</script>

<style>
body {
  background-color:cadetblue;
}
#app {
  background-color: aliceblue;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
