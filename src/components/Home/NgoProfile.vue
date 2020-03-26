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
                        <div class="profile-head">
                              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row" style="margin-top:10px">
                                            <div class="col-md-2">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-2" style="color:blue">
                                                <p>{{NGOs.name}}</p>
                                            </div>
                                            <div class="col-md-2">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-2" style="color:blue">
                                                <p>{{NGOs.email}}</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-2">
                                                <label>Location</label>
                                            </div>
                                            <div class="col-md-2" style="color:blue">
                                                <p>{{NGOs.location}}</p>
                                            </div>
                                    
                                            <div class="col-md-2">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-2" style="color:blue">
                                                <p>{{NGOs.contact}}</p>
                                            </div>
                                        </div>
                                        <!-- <div class="row">
                                            <div class="col-md-2">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-2">
                                                <p>{{NGOs.contact}}</p>
                                            </div>
                                        </div> -->
                                        <!-- <div class="row">
                                            <div class="col-md-2">
                                                <label>Location</label>
                                            </div>
                                            <div class="col-md-2">
                                                <p>{{NGOs.location}}</p>
                                            </div>
                                        </div> -->
                                        <hr>
                            </div>          
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div class="row"><!--here comes the code for text boxes which will hold data for events and other info of the ngo-->
                    <div class="col-md">
                        <div class="profile-work">
                             <!-- <ul class="list-group" style="margin-top: 10px">
                                <li class="list-group-item text-muted">Website</li>
                            </ul> -->
                            
                            
                            <ul class="list-group" style="margin-top:10px">
                                <li class="list-group-item text-muted">Connect Through..</i></li>
                                <li class="list-group-item text-right"><span class="pull-left"><strong>Facebook</strong></span><i class="fa fa-facebook fa-2x"></i></li>
                                <li class="list-group-item text-right"><span class="pull-left"><strong>Twitter</strong></span><i class="fa fa-twitter fa-2x"></i></li>
                                <li class="list-group-item text-right"><span class="pull-left"><strong>Instagram</strong></span><i class="fa fa-instagram fa-2x"></i></li>
                                <!-- <li class="list-group-item text-right"><span class="pull-left"><strong>Followers</strong></span> 78</li> -->
                            </ul> 
                                
                            <!-- <div class="panel panel-default">
                                <div class="panel-heading">Social Media</div>
                                <div class="panel-body">
                                    <i class="fa fa-facebook fa-2x"></i> <i class="fa fa-github fa-2x"></i> <i class="fa fa-twitter fa-2x"></i> <i class="fa fa-pinterest fa-2x"></i> <i class="fa fa-google-plus fa-2x"></i>
                                </div>
                            </div> -->
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
                    
                })
            }
        )
}
}
</script>
</script>


<style scoped>
img{
    max-height: 200px;
    max-width: 310px;
}
body{
    background: -webkit-linear-gradient(left, #3931af, #00c6ff);
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



