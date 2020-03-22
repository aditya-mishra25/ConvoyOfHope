<template>
  <div class='main'>
      <div class="block1" style="width:550px; margin:2%">
          <b-card v-for="ngo in NGOs" v-bind:key="ngo.id">
              <h1>{{ngo.name}}</h1>
              <hr>
              <h4>Casue: {{ngo.cause}}</h4>
              <h4>Location: {{ngo.location}}</h4>
              <p>A Brief about the ngo.</p>
              <router-link v-bind:to="{name:'NgoProfile', params:{id:ngo.id}}">Visit</router-link>
          </b-card>
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
<style  scoped>


</style>
