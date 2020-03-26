<template>
<div>
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet">
<div class="container">
<div class="row flex-lg-nowrap">
  <!-- <div class="col-12 col-lg-auto mb-3" style="width: 200px;">
    <div class="card p-3">
      <div class="e-navlist e-navlist--active-bg">
        <ul class="nav">
          <li class="nav-item"><a class="nav-link px-2 active" href="./overview.html"><i class="fa fa-fw fa-bar-chart mr-1"></i><span>Overview</span></a></li>
          <li class="nav-item"><a class="nav-link px-2" href="./users.html"><i class="fa fa-fw fa-th mr-1"></i><span>CRUD</span></a></li>
          <li class="nav-item"><a class="nav-link px-2" href="./settings.html"><i class="fa fa-fw fa-cog mr-1"></i><span>Settings</span></a></li>
        </ul>
      </div>
    </div>
  </div> -->

  <div class="col">
    <div class="row">
      <div class="col mb-3">
        <div class="card">
          <div class="card-body">
            <div class="e-profile">
              <div class="row">
                <div class="col-12 col-sm-auto mb-3">
                  <div class="mx-auto" style="width: 140px;">
                    <div class="d-flex justify-content-center align-items-center rounded" style="height: 140px; background-color: rgb(233, 236, 239);">
                      <span style="color: rgb(166, 168, 170); font: bold 8pt Arial;">140x140</span>
                    </div>
                  </div>
                </div>
                <div class="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                  <div class="text-center text-sm-left mb-2 mb-sm-0">
                    <h4 class="pt-sm-2 pb-1 mb-0 text-nowrap">{{NGOs.name}}</h4>
                    <p class="mb-0">{{NGOs.email}}</p>
                    <div class="mt-2">
                      <button class="btn btn-primary" type="button">
                        <i class="fa fa-fw fa-camera"></i>
                        <span>Change Photo</span>
                      </button>
                    </div>
                  </div>
                  <!-- <div class="text-center text-sm-right">
                    <span class="badge badge-secondary">administrator</span>
                    <div class="text-muted"><small>Joined 09 Dec 2017</small></div>
                  </div> -->
                </div>
              </div>
              <ul class="nav nav-tabs">
                <li class="nav-item"><a class="active nav-link">Edit Profile</a></li>
              </ul>
              <div class="tab-content pt-3">
                <div class="tab-pane active">
                  <form class="form">
                    <div class="row">
                      <div class="col">
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>NGO's Name</label>
                              <label class='form-control'>{{NGOs.name}}</label>
                            </div>
                          </div>
                          <div class="col">
                            <div class="form-group">
                              <label>Location</label>
                              <input class="form-control" type="text" name="username" :placeholder="NGOs.location" v-model="location">
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>Phone Number:</label>
                              <input class="form-control" type="number" maxlength="10" minlength="10" :placeholder="NGOs.contact" v-model="phone">
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col mb-3">
                            <div class="form-group">
                              <label>About</label>
                              <textarea class="form-control" rows="5" placeholder="NGO's Bio" v-model="bio"></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 col-sm-6 mb-3">
                        <div class="mb-2"><b>Change Password</b></div>
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>Current Password</label>
                              <input class="form-control" type="password" placeholder="••••••" v-model="currentpwd">
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>New Password</label>
                              <input class="form-control" type="password" placeholder="••••••" v-model="newpwd">
                            </div>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col">
                            <div class="form-group">
                              <label>Confirm <span class="d-none d-xl-inline">Confirm Password</span></label>
                              <input class="form-control" type="password" placeholder="••••••" v-model="newconpwd"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col d-flex justify-content-end">
                        <button type="button" class="btn btn-primary" v-on:click="Change">Save Changes</button>
                      </div>
                    </div>
                  </form>

                </div>
              </div>
            </div>
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
import db from '../../main'
export default {
    data(){
        return{
            name:"",
            location:"",
            phone:"",
            bio:"",
            currentpwd:"",
            newpwd:"",
            newconpwd:"",
            NGOs:""
        }
    },
    created(){
        var id= this.$route.params.id;
        firebase.firestore().collection('NGO').where('email','==',id).get().then(
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
                        'imgurl':doc.data().imageurl
                    }
                    this.NGOs=data;
                    
                });
            }
        );
},
methods:{
    Change(){
       var id= this.$route.params.id;
        const d = this.NGOs.name;
      if(this.location!="" && this.phone!=""){
          firebase.firestore().collection('NGO').doc(d).
          update({
                  location:this.location,
                  contact:this.phone,
                  bio:this.bio
                });
      }
      else{
        alert('Location and Phone number cannot be empty')
      }
        

        if(this.newpwd == this.newconpwd && this.currentpwd != ""){
            var user = firebase.auth().currentUser;
            const uuidd=user.uid
            var newPassword = this.newpwd;

            firebase.auth()
            .signInWithEmailAndPassword(this.NGOs.email, this.currentpwd)
            .then(function(user) {

            firebase.auth().currentUser.updatePassword(newPassword).then(function(){

                alert('passoword updated successfully')

            }).catch(function(err){
                alert('sorry there is some problem updating the password, please try again later!')
            });

        }).catch(function(err){
            alert('Current password entered does not match your old password')
        });
        }
        else{
          if(this.newpwd!="" && this.newconpwd!="" && this.currentpwd!=""){
            alert("New password and Confirm new passowrd doesnot match & current passowrd should'nt be empty")
            }
        }
        
        this.$router.push('/ngoprofile/'+id);
    }
}
}
</script>

<style scoped>
body{
    margin-top:20px;
    background:#f8f8f8
}
</style>