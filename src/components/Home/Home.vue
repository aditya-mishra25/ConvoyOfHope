<template>
  <div class='blockmain'>
      <div class="block" :style="{ backgroundImage: `url(${ngokids})` }">
          <div class="block1">
            <h4>Donate for a Cause!!</h4>
            
            <h1 style="font-size:7em; color:darkgoldenrod">Convoy of Hope</h1>
            <p style="width:60%">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <br><br>
          </div>
       </div>
       <div class='block2'>
            <b-navbar toggleable="lg" type="light" variant="light">
                <b-navbar-nav>
                    <b-nav-item href="#" name='request' value='req' v-on:click="requestCard">Go to {{name}}</b-nav-item>
                    
                </b-navbar-nav>
            </b-navbar>
       </div>
       <div class='block3'>
           <div v-if="req">
               <app-request></app-request>
           </div>
           <div v-if="ngo">
               <app-ngolist></app-ngolist>
           </div>
       </div>
  </div>
</template>

<script>
import ngokids from '../../assets/ngo.jpg'
import Requests from './Request.vue'
import NgoList from './Ngo.vue'
export default {
    name:"Home",
    
    data(){
        return{
            ngokids,
            ngo :true,
            req:false,
            name:"Request's",
            dummyname:""
        }
    },
    
    components:{
        'app-request':Requests,
        'app-ngolist':NgoList
    },
    methods:{
        requestCard(){
            this.req = !this.req;
            this.ngo = !this.ngo;
            if(this.name === "Request's"){
                this.name="NGO"
            }
            else{
                this.name="Request's"
            }
        }
    }

}
</script>

<style scoped>
.blockmain{
    display: flex;
    flex-direction: column;
}
.block1{
    text-align: left;
    margin-top:5%;
    margin-left: 5%;
    margin-right:5%;
    color: aliceblue;
}
.block{
    margin-left: 2%;
    margin-right: 2%;
    height: 500px;
    flex:1;
    opacity: 90%;
}
.block2{
    font-size: 2em;
    margin-left: 2%;
    margin-right: 2%;
}


</style>
