<template>
<div>
  <div class='main card bg-light' v-for="ngo in NGOs" v-bind:key="ngo.id">
      <div class="card-body block1">
              <h1>{{ngo.name}}</h1>
              <hr>
              <h4>Casue: {{ngo.cause}}</h4>
              <h4>Location: {{ngo.location}}</h4>
              <p>A Brief about the ngo.</p>
              
              <router-link :to="{name:'NgoProfileView', params:{id:ngo.email}}"><b-button variant="info">Visit</b-button></router-link>
              <!-- <router-link v-bind:to="{name:'NgoProfile', params:{id:ngo.id}}">Visit</router-link> -->
    </div>
      </div>
  </div>
</template>

<script>
import firebase from 'firebase';
import db from '../../main'
export default {
    data(){
        return{
            NGOs:[]
        }
    },
    created(){
        firebase.firestore().collection('NGO').get().then(
            querySnapshot => {
                querySnapshot.forEach(doc =>{
                    const data ={
                        'id':doc.id,
                        'name':doc.data().name,
                        'cause':doc.data().cause,
                        'date':doc.data().est,
                        'email':doc.data().email,
                        'location':doc.data().location,
                        'contact':doc.data().contact
                    }
                    this.NGOs.push(data);
                })
            }
        )
}
}
</script>
<style scoped>
    .main{
        margin-left: 5%;
        margin-top: 5%;
        max-width: 80%;
         box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19);
    }
</style>


