<template>
  <h5>{{NGOs.name}}</h5>
</template>

<script>
import firebase from 'firebase';
import db from '../main'
export default {
    data(){
        return{
            NGOs:[]
        }
    },
    created(){
        var a = this.$route.params.id;
        firebase.firestore().collection('NGO').where('email','==',a).get().then(
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
                    this.NGOs=data;
                    
                })
            }
        )
        console.log(this.NGOs)
        
}
}
</script>
<style  scoped>


</style>

