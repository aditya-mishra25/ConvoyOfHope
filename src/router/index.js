import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../components/auth/Register.vue'
import Home from '../components/Home/Home.vue'
import Login from '../components/auth/Login.vue'
import AdminDashboard from '../components/admin/AdminDashboard.vue'
import AdminRequest from '../components/admin/NgoRequests.vue'
import Demo from '../components/Demo.vue'
import NGOProfile from '../components/Home/NgoProfile.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'NgoProfile',
    component: NGOProfile
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/register',
    name: 'Register',
    component: Register

  },
  {
    path: '/login',
    name: 'Login',
    component: Login

  },
  {
    path: '/admindashboard',
    name: 'Admin',
    component: AdminDashboard
  },
  {
    path: '/ngorequest',
    name: 'AdminRequest',
    component: AdminRequest
  },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
