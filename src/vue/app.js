import Vue from 'vue/dist/vue.min.js'
import App from './App.vue'

const app = new Vue({
  render: h => h(App)
})

if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    app.$mount('.post')
  })
} else {
  module.exports = app
}
