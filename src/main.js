import Vue from 'vue'
import App from './App.vue'

// we are creating this instance to use the $emit event to pass data from child to child
export const eventBus = new Vue()

new Vue({
  el: '#app',
  render: h => h(App)
})



