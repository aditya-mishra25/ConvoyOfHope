<template>
  <div>
      <div id="reg">
        <b-icon-people-fill style="width: 50px; height: 50px;"></b-icon-people-fill><b-form-input v-model="name" placeholder="Enter NGO's name"></b-form-input><br>
        <b-form-input v-model="cause" placeholder="Cause"></b-form-input><br>
        <b-form-input v-model="location" placeholder="Location"></b-form-input><br>
        <b-form-input v-model="email" placeholder="Email"></b-form-input><br>
        <b-form-input v-model="password" placeholder="Password"></b-form-input><br>
        <b-form-input v-model="confiem_password" placeholder="Confirm Password"></b-form-input><br>

        <div class="h2 mb-0">
    <b-icon-arrow-up></b-icon-arrow-up>
    <b-icon-alert-triangle-fill></b-icon-alert-triangle-fill>
  </div>
        <!-- <div class="mt-2">Value: {{ text }}</div> -->
      </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        text: ''
      }
    }
  }
</script>
<style scoped>
    #reg{
        margin-left: 100px;
        margin-right: 100px;
    }
</style>