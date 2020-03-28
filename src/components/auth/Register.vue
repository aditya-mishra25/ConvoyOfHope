<template>
    <div>
        <div class=" register">
                <div class="row">
                    <div class="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt=""/>
                        <h3>Welcome</h3>
                        <h6 style="margin-bottom:none">To</h6>
                        <h3>ConvoyOfHope</h3>
                        <router-link to="/login">
                        <input type="submit" value="Login"/><br/>
                        </router-link>
                    </div>
                    <div class="col-md-9 register-right">
                        <div class="tab-content" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 class="register-heading">Apply as a NGO</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="NGO's Name *" v-model="name" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Cause *" v-model="cause" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" minlength="6" class="form-control" placeholder="Password *" v-model="password" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" minlength="6" class="form-control"  placeholder="Confirm Password *" v-model="confirmpassword" value="" />
                                        </div>
                                        <div class="form-group">
                                            <b-form-file
                                                v-model="image"
                                                placeholder="NGO's Profile Image here *"
                                                drop-placeholder="Drop file here..."
                                                ></b-form-file>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Your Email *" v-model="email" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" minlength="10" maxlength="10" name="txtEmpPhone" class="form-control" placeholder="Your Phone *"  v-model="contact" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="When was your NGO Established? *" v-model="est" value="" onfocus="(this.type='date')" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="NGO's Location? *" v-model="location" value="" />
                                        </div>
                                        <div class="form-group">
                                            <b-form-file
                                                v-model="file"
                                                placeholder="NGO documents here *"
                                                drop-placeholder="Drop file here..."
                                                ></b-form-file>
                                        </div>
                                        <button class="btnRegister"  value="Register" v-on:click="register">Register</button>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <h3  class="register-heading">Apply as a Hirer</h3>
                                <div class="row register-form">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="First Name *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Last Name *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" class="form-control" placeholder="Email *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" maxlength="10" minlength="10" class="form-control" placeholder="Phone *" value="" />
                                        </div>


                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Password *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control" placeholder="Confirm Password *" value="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="`Answer *" value="" />
                                        </div>
                                        <input type="submit" class="btnRegister"  value="Register"  v-on:click="register"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

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
        durl:null,
        image:null
      }
    },
    created(){
        firebase.auth().onAuthStateChanged(user=> {
          if (user) {
            if(user.email == 'admin@me.com'){
              this.$router.push('/admindashboard')
            }
            
          } else {
            this.$router.push('/register')
          }
        });
    },
    methods:{
      register:function(e){
          console.log("reg click")
        var logid="";
        var a = "";
        var rege= /^[a-zA-Z ]*$/;
            if(this.name !="" && rege.test(this.name)){
                if(this.cause !="" && rege.test(this.cause)){
                  if(this.location !="" && rege.test(this.location)){
                    if(this.password !="" && this.confirmpassword !="" && this.password.length >= 6 && this.confirmpassword.length >= 6 && this.password === this.confirmpassword){
                      if(this.contact !="" && this.contact.length == 10 ){
                        
                              var selectedDate = new Date(this.est);
                              var now = new Date();
                              var type = this.image.type
                              var t = type.includes('image')
                              if (selectedDate < now) {
                                  if(this.file != ""){
                                      if(this.image!=""){
                                          if(type=='image/jpeg' || type=='image/jpg' || type=='image/png' || type=='image/gif'){
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

                                                var img=this.image;
                                                var imgname=this.image.name;
                                                var storageReff=firebase.storage().ref('NGOProfileImg/'+imgname);
                                                var uploadTaskk=storageReff.put(img);
                                                uploadTaskk.on('state_changed',function(snapshot){
                                                    var progress = (snapshot.bytesTransfered/snapshot.totalBytes)*100;
                                                    console.log("upload is" + progress + "done");
                                                },function(error){
                                                    console.log(error);
                                                },
                                                function(){
                                                    uploadTaskk.snapshot.ref.getDownloadURL().then(function(downloadURL1){
                                                        console.log(downloadURL1);
                                                        db.collection("NgoRequests").doc(`${newid}`).update({
                                                            imgurl:downloadURL1
                                                        });
                                                    });
                                                });
                                                alert(`Account created for ${user.email}`);
                                                this.$router.push("/login");
                                                },
                                            err=>{
                                                alert(err.message);
                                            });

                                            firebase.auth().signOut().then(function() {
                                                    console.log('signout successful');
                                                    location.reload()
                                                    this.$router.push('/login')
                                                }, function(error) {
                                                // An error happened.
                                            });
                                            
                                            
                                          }
                                          else{
                                              alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.')
                                          }
                                    }
                                    else{
                                        alert('Image cannot be empty')
                                    }
                                }
                                else{
                                    alert('You need to upload a document for verification purpose.')
                                }
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
    .register{
    background: -webkit-linear-gradient(left, darkgoldenrod,rgb(250, 211, 113));
    /* margin-top: 3%; */
    padding: 3%;
}
.register-left{
    text-align: center;
    color: #fff;
    /* margin-top: 4%; */
}
.register-left input{
    border: none;
    border-radius: 1.5rem;
    padding: 2%;
    width: 60%;
    background: #f8f9fa;
    font-weight: bold;
    color: #383d41;
    margin-top: 30%;
    margin-bottom: 3%; 
    cursor: pointer;
}
.register-right{
    background: #f8f9fa;
     border-top-left-radius: 10% 50%; 
    border-bottom-left-radius: 10% 50%; 
}
.register-left img{
    margin-top: 15%;
    margin-bottom: 5%;
    width: 25%;
    -webkit-animation: mover 2s infinite  alternate;
    animation: mover 1s infinite  alternate;
}
@-webkit-keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
@keyframes mover {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
}
.register-left p{
    font-weight: lighter;
    padding: 12%;
    margin-top: -9%;
}
.register .register-form{
    padding: 10%;
    margin-top: 10%;
}
.btnRegister{
    float: right;
    margin-top: 10%;
    border: none;
    border-radius: 1.5rem;
    padding: 2%;
    background: darkgoldenrod;
    color: #fff;
    font-weight: 600;
    width: 50%;
    cursor: pointer;
}
.register .nav-tabs{
    margin-top: 3%;
    border: none;
    background: #0062cc;
    border-radius: 1.5rem;
    width: 28%;
    float: right;
}
.register .nav-tabs .nav-link{
    padding: 2%;
    height: 34px;
    font-weight: 600;
    color: #fff;
    border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
}
.register .nav-tabs .nav-link:hover{
    border: none;
}
.register .nav-tabs .nav-link.active{
    width: 100px;
    color: #0062cc;
    border: 2px solid #0062cc;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
}
.register-heading{
    text-align: center;
    margin-top: 8%;
    margin-bottom: -15%;
    color: #495057;
}
</style>
