<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">ConvoyOfHope</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">Home</b-nav-item>
        <b-nav-item href="#">About Us</b-nav-item>
        <b-nav-item href="#">Gallery</b-nav-item>
        <b-nav-item href="#">ContactUs</b-nav-item>
         <b-nav-item href="#">Support a Life</b-nav-item>
        <b-nav-item-dropdown text="NGO's" right>
          <b-dropdown-item href="#" v-for="NGOs in NGO" v-bind:key="NGOs.id" >{{NGOs.id}}</b-dropdown-item>
        </b-nav-item-dropdown>
        
         <b-nav-item-dropdown right>
         
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Opportunity</em>
          </template>
          <b-dropdown-item href="#">Volunteer</b-dropdown-item>
          <b-dropdown-item href="#">Interns</b-dropdown-item>
          <b-dropdown-item href="#">VisitUs</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown right>
         
          <!-- Using 'button-content' slot -->
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
						//console.log(doc.data());
						
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

