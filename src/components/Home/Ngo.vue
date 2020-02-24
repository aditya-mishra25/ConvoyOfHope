<template>
  <div class='main'>
      <div class="block1">
          <b-card v-for="ngo in NGOs" v-bind:key="ngo.id" style="margin:1%">
              <h1>{{ngo.name}}</h1>
              <hr>
              <h4>Details:</h4><h5>{{ngo.cause}}</h5>
              <p>A brief about the ngo.</p>
              <b-button variant="info">Visit</b-button>
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
        firebase.firestore().collection('NgoRequests').get().then(
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

<<<<<<< HEAD
<style  scoped>

</style>
=======
>>>>>>> fa73edb88be10ab6b85f741620a3c65786b404e6
