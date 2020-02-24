<template>
  <div id="app">
    <div class="container-fluid">
      <navbar1/>
    <router-view/>
  </div>
   <Footer/>
  </div>
</template>
<script>
import navbar1 from './components/navbar/navbar1.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'app',
  components:{
    navbar1,
    Footer
  }
}
</script>