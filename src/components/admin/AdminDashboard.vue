<template>
<div>
<br>
<table class="table table-striped" style="width:100%">
  <thead class="thead-dark">
    <tr>
      <th scope="col" class="collection-header">NGO's</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>

    </tr>
  </thead>
  <tbody>
    <tr scope="row" v-for="item in items" v-bind:key="item.id">
      <td><b class="chip"><router-link :to="{name:'NgoProfile', params:{id:item.id}}">{{item.name}}</router-link></b></td>
      <td>{{item.cause}}</td>
      <td>{{item.location}}</td>
      <td>{{item.date}}</td>
      <td>{{item.email}}</td>
      <td>{{item.contact}}</td>
      <td><a class="fa fa-download fa-3x btn" :href="item.url"></a></td>
      <td><button v-on:click="DeleteNgo(item.id)" class="fa fa-trash-o fa-3x btn" style="color:red" v-bind:value="item.name"></button></td>
    </tr>
  </tbody>
</table>
</div>
</template>


<script>
import db from '../../main'
import firebase from 'firebase'
import axios from 'axios'
  export default {
    data() {
      return {
        items: []
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
                        'contact':doc.data().contact,
                        'url':doc.data().url
                    }
                    this.items.push(data);
                })
            }
        ).catch(error=>{
            console.log(error);
        });
    },
    methods:{
      DeleteNgo(id){
        
        var x = confirm("Do you really want to Delete NGO");
        if(x == true){
          console.log(id);
          firebase.firestore().collection('NGO').doc(id).delete().then(function() {
              alert("NGO successfully deleted!");
              location.reload();
          }).catch(function(error) {
              alert("Error removing document: ", error);
          });
        }
      },
    }
    
  }
</script>
<style scoped>
 
.btn:active {/*onClick*/
    background-image: -webkit-linear-gradient(#efefef 0%, #d6d6d6 100%);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.5), 0 2px 2px rgba(0, 0, 0, 0.19);
    border-bottom: none;
}
.btn:hover{
  background-color: grey;
}
.btn:focus{
    background-color: white;

}


</style>

