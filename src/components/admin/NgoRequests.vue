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
      <th scope="col"></th>



    </tr>
  </thead>
  <tbody>
    <tr scope="row" v-for="item in items" v-bind:key="item.id">
      <td><b class="chip">{{item.name}}</b></td>
      <td>{{item.cause}}</td>
      <td>{{item.location}}</td>
      <td>{{item.date}}</td>
      <td>{{item.email}}</td>
      <td>{{item.contact}}</td>
      <td><a class="fa fa-download fa-3x btn" :href="item.url"></a></td>
      <td><button v-on:click="DeleteNgoRequest(item.id)" class="fa fa-trash-o fa-3x btn" style="color:red"></button></td>
      <td><button v-on:click="AcceptNgoRequest(item.id,item.name,item.cause,item.location,item.date,item.email,item.contact,item.url,item.imageurl)" class="fa fa-check fa-3x btn" style="color:green"></button></td>
    </tr>
  </tbody>
</table>
</div>
</template>

<script>
import db from '../../main'
import firebase from 'firebase'
  export default {
    data() {
      return {
        items: []
      }
    },
      created(){
        firebase.auth().onAuthStateChanged(user=> {
          if (user) {
            console.log(user)
          } else {
            this.$router.push('/login')
          }
        });
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
                        'contact':doc.data().contact,
                        'url':doc.data().url,
                        'imageurl':doc.data().imgurl
                    }
                    this.items.push(data);
                })
            }
        ).catch(error=>{
            console.log(error);
        });
    },
    methods:{
      DeleteNgoRequest(id,email){
        var x = confirm("Do you really want to Delete NGO");
        if(x == true){
          firebase.firestore().collection('NgoRequests').doc(id).delete().then(function() {
              alert("NGO successfully deleted!");
              location.reload();
          }).catch(function(error) {
              alert("Error removing document: ", error);
          });
        }
      },
      AcceptNgoRequest(id,name,cause,location,date,email,contact,url,imageurl){
          var x = confirm("Sure you want to Accept this NGO?")
          if(x == true){
              firebase.firestore().collection('NGO').doc(name).set({
                name:name,
                cause:cause,
                location:location,
                email:email,
                contact:contact,
                est:date,
                url:url,
                imageurl:imageurl
                }).then(function(docRef){
                    firebase.firestore().collection('NgoRequests').doc(id).delete().then(function(){
                        alert('This NGO is a part of our Organization now')
                    })
                }).catch(function(error){
                console.log(error);
                })
          }
      }
    }
}

</script>

<style scoped>

</style>