<template>
<div id="login" :style="cssProps">
    <div class="grey lighten-3">
    <div class="container">
      <div class="d-flex justify-content-center h-100">
        <div class="card">
          <div class="card-header">
            <h3>Login</h3>
          </div>
          <div class="card-body">
            <form>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><b-icon-people-fill style="width: 40px; height: 25px;"></b-icon-people-fill></span>
                </div>
                <input type="text" class="form-control" placeholder="username" v-model="email">
                
              </div>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><b-icon-lock-fill style="width: 40px; height: 25px;"></b-icon-lock-fill></span>
                </div>
                <input type="password" class="form-control" placeholder="password" v-model="password">
              </div>
             

              <b-button id = 'loginbtn' style="background-color: #FFC312; color:black" v-on:click="login">Login</b-button>
            </form>
          </div>
          <div class="card-footer">
              <div class="d-flex justify-content-center">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>


<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Numans');

html,body{
background-image: url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80');
background-size: cover;
background-repeat: no-repeat;
height: 100%;
font-family: 'Numans', sans-serif;
}

.container{
height: 100%;
align-content: center;

}

.card{
height: 370px;
margin-top: 5%;
margin-bottom: auto;
width: 40%;
background-color: rgba(0,0,0,0.5) !important;
align-content: left;
}

.social_icon span{
font-size: 60px;
margin-left: 10px;
color: #FFC312;
}

.social_icon span:hover{
color: white;
cursor: pointer;
}

.card-header h3{
color: white;
}

.social_icon{
position: absolute;
right: 20px;
top: -45px;
}

.input-group-prepend span{
width: 50px;
background-color: #FFC312;
color: black;
border:0 !important;
}

input:focus{
outline: 0 0 0 0  !important;
box-shadow: 0 0 0 0 !important;

}

.remember{
color: white;
}

.remember input
{
width: 20px;
height: 20px;
margin-left: 15px;
margin-right: 5px;
}

.login_btn{
color: black;
background-color: #FFC312;
width: 100px;
}

.login_btn:hover{
color: black;
background-color: white;
}

.links{
color: white;
}

.links a{
margin-left: 4px;
}

#login_btn{
  margin-left: 200px;
  
}

#login{
  margin: none;
  height: 600px;
  background-repeat: no-repeat;
  background-size:1400px 800px ;

}


</style>

<script>
import firebase from 'firebase';
export default {
  name: 'login',
  data: function() {
    return {
      cssProps:{
        backgroundImage: `url(${require('@/assets/ngoo.jpg')})`

      },
      email: '',
      password: ''
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`You are logged in as ${this.email}`);
            

            if(this.email=="admin@me.com"){
              this.$router.push('/admindashboard');
            }
            else{
            this.$router.push('/ngoprofile/'+this.email);
            }
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    }
  }
};
</script>