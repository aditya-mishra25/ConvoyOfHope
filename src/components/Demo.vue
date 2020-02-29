<template>
  <div>
       <b-form-file
              v-model="file"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
            ></b-form-file><br><br>
        <b-button @click="upload">Submit</b-button>

  </div>
</template>

<script>
import {db} from '../main';
import firebase from 'firebase';
export default {
    name:"Demo",
    data(){
        return{
            file:"",
            doc:null
        }
    },
    methods:{
        upload(){
            console.log(this.file)
            var doc = this.file;
            var docname = this.file.name;
            var storageRef = firebase.storage().ref('NGO/'+docname);
            var uploadTask = storageRef.put(doc);
            uploadTask.on('state_changed', function(snapshot){
                var_progress = (snapshot.bytesTransfered/snapshot.totalBytes)*100;
                console.log("upload is" + progress + "done");
            },function(error){
                console.log(error)
            },
            function(){
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                    console.log(downloadURL);
                });
            });
        },
    }
}
</script>

<style>

</style>