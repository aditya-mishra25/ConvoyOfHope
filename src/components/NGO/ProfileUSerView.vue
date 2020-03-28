<template>
<div class="container bootstrap snippets">
  
<div class="row" style="margin-top:10px">
    <div class="col-lg-3 col-md-3 col-sm-4">
        <div class="panel rounded shadow">
            <div class="panel-body">
                <div class="inner-all">
                    <ul class="list-unstyled">
                        <li class="text-center">
                            <img class="img-circle img-responsive img-bordered-primary" :src="NGOs.imgurl" alt="John Doe" style="border-radius:50%;max-width:250px; max-height:250px; max=width:250px; border:1px; margin-top:5px ">
                        </li>
                        <li class="text-center">
                            <h4 class="text-capitalize">{{NGOs.name}}</h4>
                            <p class="text-muted text-capitalize">{{NGOs.cause}}</p>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div><!-- /.panel -->

        <div class="panel panel-theme rounded shadow">
            <div class="panel-heading">
                <div class="pull-left">
                    <h3 class="panel-title">Contact</h3>
                </div>
                <div class="pull-right">
                    <a href="#" class="btn btn-sm btn-success"><i class="fa fa-facebook"></i></a>&nbsp;
                    <a href="#" class="btn btn-sm btn-success"><i class="fa fa-twitter"></i></a>&nbsp;
                    <a href="#" class="btn btn-sm btn-success"><i class="fa fa-google-plus"></i></a>
                </div>
                <div class="clearfix"></div>
            </div><!-- /.panel-heading -->
            <div class="panel-body no-padding rounded">
                <ul class="list-group no-margin">
                    <li class="list-group-item"><i class="fa fa-envelope mr-4"></i> {{NGOs.email}}</li>
                    <li class="list-group-item"><i class="fa fa-globe mr-4"></i> {{NGOs.location}}</li>
                    <li class="list-group-item"><i class="fa fa-phone mr-4"></i> {{NGOs.contact}}</li>
                </ul>
            </div><!-- /.panel-body -->
        </div><!-- /.panel -->

    </div>
    <div class="col-lg-9 col-md-9 col-sm-8">

    <div class="profile-cover">
        <div class="cover rounded shadow no-overflow">
            <div class="inner-cover">
                
                <img  :src="ngokids" class="img-responsive full-width" alt="cover" style="max-height:200px;">
            </div>
            
        </div><!-- /.cover -->
    </div><!-- /.profile-cover -->
    <div class="divider"></div>
    <div class="panel rounded shadow">
            <b-card>
                <h4>Bio</h4>
                <hr>
                <p>{{NGOs.bio}}</p>
            </b-card>
    </div><!-- /.panel -->

    <div class="panel rounded shadow">
        <b-card>
            <h4>Events</h4>
            <hr>
            <p v-for="(event,index) in eventrender" v-bind:key="index">
               {{index+1}}. {{event}}
            </p>
        </b-card>
    </div>

    <div class="panel rounded shadow">
        <div class="card bg-light" style=" ">
            <div class="card-body">
                <h3 class="card-header">Requests</h3>
                <hr>
                <table class="table table-striped" style="width:100%">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Cause</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr scope="row" v-for="item in Req" v-bind:key="item.id">
                            
                            <td>{{item.title}}</td>
                            <td>{{item.reqcause}}</td>
                            <td v-if="item.status==null" style="color:red;">Pending</td>
                            <td v-if="item.status!=null" style="color:green">Completed</td>
                            <td><router-link :to="{name:'Donate' ,params:{id:item.id}}"><b-button variant="success" v-if="item.status!='completed'" v-on:click="Donate(item.id)">Donate</b-button></router-link></td>
                        
                        </tr>
                    </tbody>
                </table> 
            </div>
        </div>
    </div>
    <div class="row" style="margin-top:18px">
        
        </div>

        
    </div>
    </div>
</div>

</template>

<script>
import firebase from 'firebase';
import db from '../../main';
import ngokids from '../../assets/ngo.jpg'
export default {
    data(){
        return{
            ngokids,
            reqtitle:'',
            reqcause:'',
            reqbrief:'',
            NGOs:"",
            Req:[],
            eventrender:""
        }
    },
    created(){
        var id= this.$route.params.id;
        // var id = 'AA@aa.com'
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
                        'imgurl':doc.data().imageurl,
                        'bio':doc.data().bio,
                        'event':doc.data().event
                    }
                    this.NGOs=data;
                });
                var a = this.NGOs.event
                this.eventrender = a.split(',')
                console.log(this.eventrender)

            },
            function(){
                console.log(this.NGOs)
            }
        );
        firebase.firestore().collection('Requests').where('email','==',id).get().then(
            querySnapshot => {
                querySnapshot.forEach(doc =>{
                    const reqdata ={
                        'id':doc.id,
                        'name':doc.data().name,
                        'reqcause':doc.data().cause,
                        'email':doc.data().email,
                        'title':doc.data().title,
                        'brief':doc.data().brief,
                        'status':doc.data().status
                    }
                    this.Req.push(reqdata)
                });
            console.log(this.Req)
            }
            
        );
},
methods:{
    request(name,cause,email){
        firebase.firestore().collection('Requests').doc(name+" "+this.reqtitle).set({
            name:name,
            cause:this.reqcause,
            title:this.reqtitle,
            brief:this.reqbrief,
            email:email
        }).then(function(docRef){
            alert('Request Succesfully Submitted!!')
        }).catch(function(error){
            console.log(error);
        });

        this.reqtitle = this.reqcause = this.reqbrief='';
    },
    Delete(id){
        var y= confirm("Do you really want to delete the Request?");
        if(y == true){
            console.log(id);
            firebase.firestore().collection("Requests").doc(id).delete().then(function(){
                alert("Request successfully deleted!");
                location.reload();
            }).catch(function(error){
                    alert("Error removing the request: ",error);
            });
        }
    },
    logout(){
        firebase.auth().signOut().then(function() {
            console.log('signout successful');
            alert('user signedout')
            }, function(error) {
            // An error happened.
        });
        this.$router.push('/login')
    }
    
}
}

</script>

<style>
body{margin-top:20px;
background:#eee;
}

.divider {
  height: 20px;
  display: block;
}

.input-group-addon {
  -moz-border-radius: 0px;
  -webkit-border-radius: 0px;
  border-radius: 0px;
  min-width: 39px;
}
.input-group-addon .ckbox, .input-group-addon .rdio {
  position: absolute;
  top: 4px;
  left: 10px;
}

.input-group-lg > .form-control, .input-group-lg > .input-group-addon, .input-group-lg > .input-group-btn > .btn, .input-group-sm > .form-control, .input-group-sm > .input-group-addon, .input-group-sm > .input-group-btn > .btn, .input-group-xs > .form-control, .input-group-xs > .input-group-addon, .input-group-xs > .input-group-btn > .btn {
  -moz-border-radius: 0px;
  -webkit-border-radius: 0px;
  border-radius: 0px;
}

.input-sm, .form-group-sm .form-control {
  -moz-border-radius: 0px;
  -webkit-border-radius: 0px;
  border-radius: 0px;
}

.form-control {
  -moz-border-radius: 0px;
  -webkit-border-radius: 0px;
  border-radius: 0px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

@media (max-width: 640px) {
  .form-inner-all [class*="col-"]:last-child .form-control {
    margin-top: 15px;
  }
}


.profile-cover {
  width: 100%;
}
.profile-cover .cover {
  position: relative;
  border: 10px solid #FFF;
}
.profile-cover .cover .inner-cover {
  overflow: hidden;
  height: auto;
}
.profile-cover .cover .inner-cover img {
  border: 1px solid transparent;
  text-align: center;
  width: 100%;
}
.profile-cover .cover .inner-cover .cover-menu-mobile {
  position: absolute;
  top: 10px;
  right: 10px;
}
.profile-cover .cover .inner-cover .cover-menu-mobile button i {
  font-size: 17px;
}
.profile-cover .cover ul.cover-menu {
  padding-left: 150px;
  position: absolute;
  overflow: hidden;
  left: 1px;
  float: left;
  bottom: 0px;
  width: 100%;
  margin: 0px;
  background: none repeat scroll 0% 0% rgba(0, 0, 0, 0.24);
}
.profile-cover .cover ul.cover-menu li {
  display: block;
  float: left;
  margin-right: 0px;
  padding: 0px 10px;
  line-height: 40px;
  height: 40px;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.profile-cover .cover ul.cover-menu li:hover {
  background-color: rgba(0, 0, 0, 0.44);
}
.profile-cover .cover ul.cover-menu li.active {
  background-color: rgba(0, 0, 0, 0.64);
}
.profile-cover .cover ul.cover-menu li a {
  color: #FFF;
  font-weight: bold;
  display: block;
  height: 40px;
  line-height: 40px;
  text-decoration: none;
}
.profile-cover .cover ul.cover-menu li a i {
  font-size: 18px;
}
.profile-cover .profile-body {
  margin: 0px auto 10px;
  position: relative;
}
.profile-cover .profile-timeline {
  padding: 15px;
}
.img-post{
    width:30px;
    height:30px;
}
.img-post2{
    width:50px;
    height:50px;
}
</style>