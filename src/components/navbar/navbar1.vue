<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark" max-width="100%">
    <b-navbar-brand href="/">ConvoyOfHope</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/admindashboard">NGO's</b-nav-item>
        <b-nav-item href="#">NGO Requests</b-nav-item>

        <!-- <b-nav-item-dropdown text="NGO's" right>
          <b-dropdown-item href="#" v-for="NGOs in NGO" v-bind:key="NGOs.id" >{{NGOs.id}}</b-dropdown-item>
        </b-nav-item-dropdown> -->
        <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
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
				NGO: []
			}
		},
		created(){
			db.collection('NGO').get().then(
				querySnapshot => {
					querySnapshot.forEach( doc => {
						const data ={
							'id':doc.id
						}
						this.NGO.push(data) 
					})
				}
			)
		}
	}
</script>

