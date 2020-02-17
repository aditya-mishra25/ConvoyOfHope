<template>
  <div class="container-fluid">
      <div id="reg" >
        <b-card style="max-width: 80%; margin:7%">
          <h1>Register</h1><h6>to Join us</h6>
            <b-row>
              <b-col sm='1'>
                <b-icon-people-fill style="width: 40px; height: 40px;"></b-icon-people-fill>
              </b-col>
              <b-col>
                <b-form-input v-model="name" placeholder="Enter NGO's name"></b-form-input><br>
              </b-col>
            </b-row>

            <b-row>
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
            </b-row>

            <b-row>
              <b-col sm='1'>
                <b-icon-envelope-fill style="width: 40px; height: 40px;"></b-icon-envelope-fill>
              </b-col>
              <b-col>
            <b-form-input v-model="email" placeholder="Email"></b-form-input><br>
              </b-col>
            </b-row>

            <b-row>
              <b-col sm='1'>
                <b-icon-people-fill style="width: 40px; height: 40px;"></b-icon-people-fill>
              </b-col>
              <b-col>
            <b-form-input v-model="password" placeholder="Password"></b-form-input><br>
              </b-col>
            </b-row>

            <b-row>
              <b-col sm='1'>
                <b-icon-people-fill style="width: 40px; height: 40px;"></b-icon-people-fill>
              </b-col>
              <b-col>
            <b-form-input v-model="confirmpassword" placeholder="Confirm Password"></b-form-input><br>
              </b-col>
            </b-row>


            <b-form-file
              v-model="file"
              :state="Boolean(file)"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
            ></b-form-file><br><br>

            <b-button variant="outline-primary" style="align:left;">Submit</b-button>
        </b-card>
      
      </div>
      <div id="block2">
        <div style="margin:10%; text-align:left">
          <h1>Lorem Ipsum</h1>
          <p>
            "Phasellus id ante eget lacus porta faucibus. Curabitur non placerat ligula. Proin ut metus tellus. Morbi non varius sapien. Pellentesque mollis tempus augue, sed porttitor velit egestas quis. Nunc porttitor, arcu ac viverra ultricies, urna diam sodales ipsum, ac semper ipsum sem ac felis. Fusce ac libero leo. Morbi lectus mi, rhoncus eu lorem vel, sollicitudin pharetra diam. Maecenas sapien elit, feugiat ac dolor id, pharetra mollis orci. Phasellus libero lacus, lobortis in velit ut, ornare ullamcorper nulla. Maecenas molestie ultricies nunc, vel consectetur mauris dignissim in. Etiam fringilla ipsum pharetra purus rhoncus, sed pharetra est sagittis. Nam sagittis, metus ac vestibulum accumsan, libero dui suscipit nibh, vitae maximus ipsum est sit amet ante. Suspendisse elementum molestie nisi, non convallis ligula volutpat ut. Vestibulum viverra pulvinar turpis, eu consequat tellus dapibus at.""
          </p>
        </div>
      </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        name:'',
        cause:'',
        location:'',
        email:'',
        confirmpassword:'',
        file:''
      }
    }
  }
</script>
<style scoped>
    #reg{
        
        max-width: 50%;
        background-color: darkgoldenrod;
        flex:1;
    }
    #block2{
      max-width: 50%;
      background-color:black;
      flex:1;
    }
    .container-fluid{
      display: flex;

    }
</style>