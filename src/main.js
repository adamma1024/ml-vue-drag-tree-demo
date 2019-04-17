import Vue from 'vue'
import App from './App'
import router from './router'
// import VueDragTree from './components/temp/index.js'
import VueDragTree from 'ml-vue-drag-tree'
import 'ml-vue-drag-tree/dist/vue-drag-tree.min.css'
import iview from 'iview'
import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false
Vue.use(VueDragTree)
Vue.use(iview)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
