<template>
 <div class="emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img :src="NGOs.imgurl" alt="" height="100px" width="100px"/>
                            <!-- <div class="file btn btn-lg btn-primary">
                                Change Photo
                                <input type="file" name="file"/>
                            </div> -->
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head" style="spacing:1px; width:800px; font-size:20px; box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19);">
                              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row" style="background:lightblue; radius:10%">
                                            <h2 style="margin-left:15px;">Profile</h2>
                                        </div>
                                        <div class="row" style="margin-top:10px; margin-left:5px; margin-top:2px">
                                            <div class="col-md-2" style="color:grey">
                                                <label>Name:</label>
                                            </div>
                                            <div class="col-md-3" style="color:blue">
                                                <p>{{NGOs.name}}</p>
                                            </div>
                                            <div class="col-md-2" style="color:grey">
                                                <label>Email:</label>
                                            </div>
                                            <div class="col-md-3" style="color:blue">
                                                <p>{{NGOs.email}}</p>
                                            </div>
                                            
                                        </div>
                                        <div class="row" style="margin-left:5px ">
                                            <div class="col-md-2" style="color:grey">
                                                <label>Location:</label>
                                            </div>
                                            <div class="col-md-3" style="color:blue">
                                                <p>{{NGOs.location}}</p>
                                            </div>
                                    
                                            <div class="col-md-2" style="color:grey">
                                                <label>Phone:</label>
                                            </div>
                                            <div class="col-md-3" style="color:blue">
                                                <p>{{NGOs.contact}}</p>
                                            </div>
                                        </div>
                                        <div class="row" style="margin-left:5px ">
                                            <div class="col-md-2" style="color:grey">
                                                <label>Established:</label>
                                            </div>
                                            <div class="col-md-3" style="color:blue">
                                                <p>{{NGOs.date}}</p>
                                            </div>
                                        </div>
                                        <hr>
                            </div>          
                        </div>
                    </div>
                    
                </div><hr>
                <div class="row">
                    <div class="col-md">
                        <div class="profile-work">
                             
                            
                            
                            <ul class="list-group" style="margin-top:10px; box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)">
                                <li class="list-group-item text-muted">Connect Through..</li>
                                <li class="list-group-item text-right"><span class="pull-left"><strong>Facebook</strong></span><i class="fa fa-facebook fa-2x"></i></li>
                                <li class="list-group-item text-right"><span class="pull-left"><strong>Twitter</strong></span><i class="fa fa-twitter fa-2x"></i></li>
                                <li class="list-group-item text-right"><span class="pull-left"><strong>Instagram</strong></span><i class="fa fa-instagram fa-2x"></i></li>
                                <!-- <li class="list-group-item text-right"><span class="pull-left"><strong>Followers</strong></span> 78</li> -->
                            </ul> 
                            <router-link :to="{name:'NgoEdit', params:{id:NGOs.email}}">
                                <button type="button" class="btn btn-primary" style="margin-top:10px; width:100%">Edit Profile</button>
                            </router-link>
                                
                            <!-- <div class="panel panel-default">
                                <div class="panel-heading">Social Media</div>
                                <div class="panel-body">
                                    <i class="fa fa-facebook fa-2x"></i> <i class="fa fa-github fa-2x"></i> <i class="fa fa-twitter fa-2x"></i> <i class="fa fa-pinterest fa-2x"></i> <i class="fa fa-google-plus fa-2x"></i>
                                </div>
                            </div> -->
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="row">
                        <div class="card bg-light mb-3" style="width: 20rem; box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19);">
                            <div class="card-body">
                                <h3 class="card-header">Request Card</h3>
                                <hr>
                                <div class="form-group">
                                    <input type="text" class="form-control" id="usr" placeholder="Title of the Request." v-model="reqtitle">
                                    <br>    
                                    <input type="text" class="form-control" id="usr" placeholder="Cause/Event ?." v-model="reqcause">
                                    <br>  
                                    <textarea class="form-control" aria-label="With textarea" placeholder="A brief about why you need donation for this event." v-model="reqbrief"></textarea>
                                </div>
                                <button type="button" class="btn btn-primary" v-on:click="request(NGOs.name,NGOs.cause,NGOs.email)">Request!</button>
                            </div>
                            </div>

                            <div class="card bg-light mb-3" style="width: 30rem; margin-left:2rem; box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19);">
                            <div class="card-body">
                                <h3 class="card-header">Past Requests</h3>
                                <hr>
                                <table class="table table-striped" style="width:100%">
                                    <thead class="thead-dark">
                                        <tr>
                                        <th scope="col">Request ID</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Cause</th>
                                        <th scope="col">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr scope="row" v-for="item in Req" v-bind:key="item.id">
                                            <td>{{item.id}}</td>
                                            <td>{{item.title}}</td>
                                            <td>{{item.reqcause}}</td>
                                            <td v-if="item.status==NULL" style="color:red;">Pending</td>
                                            <td v-if="item.status!=NULL" style="color:green">Completed</td>
                                        </tr>
                                    </tbody>
                                    </table>
                                
                                
                            </div>
                            </div>


                        </div>
                    </div>
                    <div class="col-md-8">
                        
                    </div>
                </div>
            </form>           
        </div>
</template>


<script>
import firebase from 'firebase';
import db from '../../main'
export default {
    data(){
        return{
            reqtitle:'',
            reqcause:'',
            reqbrief:'',
            NGOs:"",
            Req:[]
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
    }
    
}
}
</script>


<style scoped>
img{
    max-height: 200px;
    max-width: 310px;
    border-radius:10%;
    border:2px solid black;
    box-shadow:0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 2px 10px 0 rgba(0, 0, 0, 0.19)
}
body{
    background: grey;
}
.emp-profile{
    padding: 3%;
    /* margin-top: 3%; */
    /* margin-bottom: 3%; */
    border-radius: 0.5rem;
    background: #fff;
}
.profile-img{
    text-align: center;
}
.profile-img img{
    width: 70%;
    height: 100%;
}
.profile-img .file {
    position: relative;
    overflow: hidden;
    margin-top: -20%;
    width: 70%;
    border: none;
    border-radius: 0;
    font-size: 15px;
    background: #212529b8;
}
.profile-img .file input {
    position: absolute;
    opacity: 0;
    right: 0;
    top: 0;
}
.profile-head h5{
    color: #333;
}
.profile-head h6{
    color: #0062cc;
}
.profile-edit-btn{
    border: none;
    border-radius: 1.5rem;
    width: 70%;
    padding: 2%;
    font-weight: 600;
    color: #6c757d;
    cursor: pointer;
}
.proile-rating{
    font-size: 12px;
    color: #818182;
    margin-top: 5%;
}
.proile-rating span{
    color: #495057;
    font-size: 15px;
    font-weight: 600;
}
.profile-head .nav-tabs{
    margin-bottom:5%;
}
.profile-head .nav-tabs .nav-link{
    font-weight:600;
    border: none;
}
.profile-head .nav-tabs .nav-link.active{
    border: none;
    border-bottom:2px solid #0062cc;
}
.profile-work{
    padding: 14%;
    margin-top: -15%;
}
.profile-work p{
    font-size: 12px;
    color: #818182;
    font-weight: 600;
    margin-top: 10%;
}
.profile-work a{
    text-decoration: none;
    color: #495057;
    font-weight: 600;
    font-size: 14px;
}
.profile-work ul{
    list-style: none;
}
.profile-tab label{
    font-weight: 600;
}
.profile-tab p{
    font-weight: 600;
    color: #0062cc;
}
</style>



