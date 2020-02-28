<template>
  <div>
       <b-form-file
              v-model="file"
              :state="Boolean(file)"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
              @change="onFilePicked"
            ></b-form-file><br><br>
        <b-button @click="upload">Submit</b-button>

  </div>
</template>

<script>
import {db} from '../main';
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
            this.doc=null;
             const storageRef=firebase.storage().ref(`${this.doc.name}`).put(this.imageData);
                storageRef.on(`state_changed`,snapshot=>{
                    this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
                }, error=>{console.log(error.message)},
                ()=>{
                    storageRef.snapshot.ref.getDownloadURL().then((url)=>{
                    this.picture =url;
                    });
                });
        },
    }
}
</script>

<style>

</style>