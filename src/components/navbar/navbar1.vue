<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark" max-width="100%">
    <b-navbar-brand href="/#/">ConvoyOfHope</b-navbar-brand>
	
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="/#/">Home</b-nav-item>
		<b-nav-item>
        <router-link v-if="showprofile==true" :to="{name:'NgoProfile', params:{id:email}}">Profile</router-link></b-nav-item>
      </b-navbar-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item v-if="showNGO==true" to="/admindashboard">NGO's</b-nav-item>
        <b-nav-item v-if="showNGOReq==true" to="/ngorequest">NGO Requests</b-nav-item>
        <b-nav-item v-if="signout==true" to="/login" v-on:click="logout">Sign-out</b-nav-item>
        <b-nav-item v-if="signin==true" to="/login" >Sign-in</b-nav-item>
        <b-nav-item v-if="register==true" to="/register">Register</b-nav-item>


        <!-- <b-nav-item-dropdown text="NGO's" right>
          <b-dropdown-item href="#" v-for="NGOs in NGO" v-bind:key="NGOs.id" >{{NGOs.id}}</b-dropdown-item>
        </b-nav-item-dropdown> -->
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
	import {db} from '../../main';
	import firebase from 'firebase/app';
	export default{
		name: 'AdminDashboard',
		data(){
			return{
				NGO: [],
				showNGO: false,
				showNGOReq: false,
				signout:false,
				email:"",
				showprofile:false,
				signin:false,
				register:false
			}
		},
		created(){
			firebase.auth().onAuthStateChanged(user=> {
			if (user) {
				if(user.email == 'admin@me.com'){
					
					this.showNGO=true;
					this.showNGOReq=true;
				}
				else{
					this.email=user.email;
					this.showprofile=true;
				}
				this.signin=false;
				this.register=false;
				this.signout = true;
			} else {
				this.$router.push('/login')
				this.signin=true;
				this.register=true;
			}
			});
		},
		methods:{
			logout(){
				firebase.auth().signOut().then(function() {
					console.log('signout successful');
					alert('user signedout')
					}, function(error) {
					// An error happened.
				});
				this.$router.push('/login')
				location.reload()
			}
		}
	}
</script>

