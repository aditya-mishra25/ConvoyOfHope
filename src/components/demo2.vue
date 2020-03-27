<template>
<div>
  <input type="text" v-model="demo" v-on:keyup="search">
    <p id='txt'></p>
</div>
</template>

<script>
export default {
    data(){
        return{
            demo:''
        }
    },
    methods:{
        search(){
            if(this.demo.length==0){
                document.getElementById('txt').innerHTML == "empty"
            }
            else{
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function(){
                    if(this.readyState == 4 && this.status==200){
                        document.getElementById('txt').innerHTML = this.responseText;
                    }
                };
                xmlhttp.open('GET',"/gethint/"+this.demo,true);
                xmlhttp.send();
            }
        }
    }
}
</script>

<style>

</style>