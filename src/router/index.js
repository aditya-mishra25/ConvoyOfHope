import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../components/auth/Register.vue'
import Home from '../components/Home/Home.vue'
import Login from '../components/auth/Login.vue'
import AdminDashboard from '../components/admin/AdminDashboard.vue'
import AdminRequest from '../components/admin/NgoRequests.vue'
// import Demo from '../components/Demo.vue'
// import Demo2 from '../components/demo2.vue'
import NgoProfile from '../components/NGO/NgoProfile.vue'
import DemoRegister from '../components/auth/DemoRegister'
import RequestCard from '../components/Home/RequestCard'
import NgoEdit from '../components/NGO/NgoEdit'
import ProfileUser from '../components/NGO/ProfileUSerView'
import Donate from '../components/Donate/donate'
// import gethint from '../components/gethint'

Vue.use(VueRouter)

const routes = [
  {
    path:'/gethint/:id',
    name:'gethint',
    component:gethint
  },
  {
    path:'/demo2',
    name:'Demo2',
    component:Demo2
  },
  {
    path:'/donate/:id',
    name:'Donate',
    component:Donate
  },
  {
    path:'/ngoprofileview/:id',
    name:'NgoProfileView',
    component:ProfileUser
  },
  {
    path:'/ngoedit/:id',
    name:'NgoEdit',
    component:NgoEdit
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/ngoprofile/:id',
    name: 'NgoProfile',
    component: NgoProfile
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
  },
  {
    path: '/demoregister',
    name: 'DemoRegister',
    component: DemoRegister
  },
  {
    path: '/requestcard',
    name: 'RequestCard',
    component: RequestCard
  }
]

const router = new VueRouter({
  routes
})

export default router
