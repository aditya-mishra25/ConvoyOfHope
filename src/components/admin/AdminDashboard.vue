<template>
<div>
	<div>
  <h5 class="my-3"> <code></code></h5>
  <!-- <b-img src= 'https://www.teckinfo.com/images/ngo_img.jpg' fluid-grow alt="Fluid-grow image"></b-img> -->
</div>

	<div class="row">
		<!-- <b-card
    title="ConvoyOfHope"
		style="max-width: 20rem; margin-top:10px; margin-left:10px">
     <b-card-text>
	What is Lorem Ipsum?
	Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    </b-card-text> 
      <br>
        <br>
        <br>
  </b-card> -->
	<b-card
		style="width:100%; margin-top:10px; margin-left:10px"
		> 
		<div>
    <b-table striped hover :items="items"></b-table>
  	</div>
	</b-card>
	</div>
</div>
</template>

<script>
import db from '../../main'
import firebase from 'firebase'
  export default {
    data() {
      return {
        items: [
        ]
      }
    },
   created(){
        firebase.firestore().collection('NgoRequests').get().then(
            querySnapshot => {
                querySnapshot.forEach(doc =>{
                    const data ={
                        'id':doc.id,
                        'name':doc.data().name,
                        'cause':doc.data().cause,
                        'date':doc.data().est,
                        'email':doc.data().email,
                        'location':doc.data().location,
                        'contact':doc.data().contact
                    }
                    this.items.push(data);
                    console.log(items);
                })
            }
        )
        
}
  }
</script>

