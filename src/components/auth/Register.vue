<template>
  <div class="container-fluid">
      <div id="reg" >
        <b-card style="max-width: 100%; margin:7%">
          <h1>Register</h1><h6>to Join us</h6>
            <b-row>
              <b-col sm='1'>
                <b-icon-people-fill style="width: 40px; height: 40px;"></b-icon-people-fill>
              </b-col>
              <b-col>
                <b-form-input v-model="name" placeholder="NGO's name" ></b-form-input><br>
              </b-col>
              <b-col sm='1'>
                <b-icon-people-fill style="width: 40px; height: 40px;"></b-icon-people-fill>
              </b-col>
              <b-col>
                <b-form-input v-model="cause" placeholder="Cause"></b-form-input><br>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm='1'>
                <b-icon-geo style="width: 40px; height: 40px;"></b-icon-geo>
              </b-col>
              <b-col>
            <b-form-input v-model="location" placeholder="Location"></b-form-input><br>
              </b-col>
            
              <b-col sm='1'>
                <b-icon-envelope-fill style="width: 40px; height: 40px;"></b-icon-envelope-fill>
              </b-col>
              <b-col>
            <b-form-input v-model="email" placeholder="Email" type="email"></b-form-input><br>
              </b-col>
            </b-row>

            <b-row>
              <b-col sm='1'>
                <b-icon-people-fill style="width: 40px; height: 40px;"></b-icon-people-fill>
              </b-col>
              <b-col>
            <b-form-input v-model="password" placeholder="Password" type="password"></b-form-input><br>
              </b-col>
            
              <b-col sm='1'>
                <b-icon-people-fill style="width: 40px; height: 40px;"></b-icon-people-fill>
              </b-col>
              <b-col>
            <b-form-input v-model="confirmpassword" placeholder="Confirm Password" type="password"></b-form-input><br>
              </b-col>
            </b-row>

            <b-row>
              <b-col sm='1'>
                <b-icon-people-fill style="width: 40px; height: 40px;"></b-icon-people-fill>
              </b-col>
              <b-col>
            <b-form-input v-model="contact" placeholder="Contact Number" type="number"></b-form-input><br>
              </b-col>
            
              <b-col sm='1'>
                <b-icon-people-fill style="width: 40px; height: 40px;"></b-icon-people-fill>
              </b-col>
              <b-col>
            <b-form-input v-model="est" placeholder="Established on?" type="date" name="est"></b-form-input><br>
              </b-col>
            </b-row>


            <b-form-file
              v-model="file"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
            ></b-form-file><br><br>

            <b-button variant="outline-primary" style="align:left;" v-on:click="register">Submit</b-button>
        </b-card>
      
      </div>
      
  </div>
</template>

<script>
import firebase from 'firebase';
import db from '../../main';
  export default {
    data() {
      return {
        name:null,
        cause:null,
        location:null,
        email:null,
        password:null,
        confirmpassword:null,
        contact:null,
        est:null,
        file:null,
        durl:null
      }
    },
    methods:{
      register:function(e){
        var logid="";
        var a = "";
        var rege= /^[a-zA-Z ]*$/;
            if(this.name !="" && rege.test(this.name)){
                if(this.cause !="" && rege.test(this.cause)){
                  if(this.location !="" && rege.test(this.location)){
                    if(this.password !="" && this.confirmpassword !="" && this.password.length >= 6 && this.confirmpassword.length >= 6 && this.password === this.confirmpassword){
                      if(this.contact !="" && this.contact.length == 10){
                        
                              var selectedDate = new Date(this.est);
                              var now = new Date();

                              const getDurl = (d) => {
                                
                              }
                              if (selectedDate < now) {
                                firebase.auth().createUserWithEmailAndPassword(this.email,this.confirmpassword)
                                .then(
                                  user=>{
                                    
                                    let newid = this.name;
                                    db.collection("NgoRequests").doc(`${newid}`).set({
                                        name:this.name,
                                        cause:this.cause,
                                        location:this.location,
                                        email:this.email,
                                        contact:this.contact,
                                        est:this.est
                                        //id:need to sort out uploading id
                                      }).then(function(docRef){
                                        console.log(docRef.id);
                                      }).catch(function(error){
                                        console.log(error);
                                      })

                                    var doc = this.file;
                                    var docname = this.file.name;
                                    var storageRef = firebase.storage().ref('NGO/'+docname);
                                    var uploadTask = storageRef.put(doc);
                                    uploadTask.on('state_changed', function(snapshot){
                                        var progress = (snapshot.bytesTransfered/snapshot.totalBytes)*100;
                                        console.log("upload is" + progress + "done");
                                    },function(error){
                                        console.log(error);
                                    },
                                    function(){
                                        uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                                          console.log(downloadURL);
                                          db.collection("NgoRequests").doc(`${newid}`).update({
                                            url:downloadURL
                                          });
                                        });
                                    });

                                      alert(`Account created for ${user.email}`);
                                      this.$router.push("/login");
                                    },
                                  err=>{
                                    alert(err.message);
                                  });
                                }
                              else{
                                  alert('invalid date')
                              }
                      }
                      else{
                          alert("incorrect contact number")
                      }
                    }
                    else{
                        alert("password and confirm password incorrect")
                      }
                 }
                 else{
                        alert("Location should not be empty and should not contain numbers")
                      }
                }
                else{
                        alert("Cause should not be empty and should not contain numbers")
                      }
          }
          else{
              alert("Name not valid") 
            } 
              
      },
      upload:function(e){
        
      }
    }
  }
</script>
<style scoped>
    #reg{
        max-width: 100%;
        background-color: darkgoldenrod;
        flex:1;
    }
    .container-fluid{
      display: flex;
    }
</style>