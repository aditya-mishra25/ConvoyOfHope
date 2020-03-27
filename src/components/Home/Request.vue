<template>
<div>
<div v-for="req in Requests"  v-bind:key="req.id">
  <div v-if="req.status!='completed'">
      <div class='main card bg-light'>
      <div class="card-body block1">
              <h1 class='card-header'>{{req.name}}</h1>
              <p><h4>Casue: {{req.cause}}</h4>
              <p>{{req.brief}}</p>
              <router-link :to="{name:'Donate' ,params:{id:req.id}}"><b-button variant="info">Donate</b-button></router-link>
      </div>
      </div>
  </div>
  </div>
</div>
</template>

<script>
import firebase from 'firebase';
import db from '../../main'
export default {
    data(){
        return {
            Requests:[]
        }
    },

    created(){
        firebase.firestore().collection("Requests").get().then(
            querySnapshot=>{
                querySnapshot.forEach(doc=>{
                    const req={
                        'id':doc.id,
                        'brief':doc.data().brief,
                        'title':doc.data().title,
                        'name':doc.data().name,
                        'cause':doc.data().cause,
                        'email':doc.data().email,
                        'status':doc.data().status
                    }
                    this.Requests.push(req);
                    
                })
            
        })
    console.log(this.Requests);
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