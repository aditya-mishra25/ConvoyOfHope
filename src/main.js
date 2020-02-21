import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase'
import * as VueFire from 'vuefire'
import 'firebase/firestore'


Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueFire)

const config = {
  apiKey: "AIzaSyCawoGT6COMvwTN9D89iI_FNVqcTXnRdNQ",
  authDomain: "welfare-1098e.firebaseapp.com",
  databaseURL: "https://welfare-1098e.firebaseio.com",
  projectId: "welfare-1098e",
  storageBucket: "welfare-1098e.appspot.com",
  messagingSenderId: "33569348598",
  appId: "1:33569348598:web:12f5921d6a9689d64a45d7",
  measurementId: "G-HETST93XK2"
}

firebase.initializeApp(config);
export const db = firebase.firestore()

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
