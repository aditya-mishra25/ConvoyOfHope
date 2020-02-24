<!--<template>
<div>
	<div>
  <h5 class="my-3"> <code></code></h5>
  
</div>

	<div>
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
		<div >
   <table>
     <tr v-for="item in items" v-bind:key="item.id">
       <td>{{item.name}}</td>
       <td>{{item.cause}}</td>
       <td>{{item.location}}</td>
       

     </tr>
   </table>
		</div>
	</b-card>
	</div>
</div>
</template>-->


<script>
import db from '../../main'
import firebase from 'firebase'
  export default {
    data() {
      return {
        items: []
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
                    
                })
            }
        )
        console.log(items);
        
}
  }
</script>
<style scoped>
table {  
    color: #333;
    font-family: Helvetica, Arial, sans-serif;
    width: 640px; 
    border-collapse: 
    collapse; border-spacing: 0; 
}

td, th {  
    border: 1px solid transparent; /* No more visible border */
    height: 30px; 
    transition: all 0.3s;  /* Simple transition for hover effect */
}

th {  
    background: #DFDFDF;  /* Darken header a bit */
    font-weight: bold;
}

td {  
    background: #FAFAFA;
    text-align: center;
}

/* Cells in even rows (2,4,6...) are one color */        
tr:nth-child(even) td { background: #F1F1F1; }   

/* Cells in odd rows (1,3,5...) are another (excludes header cells)  */        
tr:nth-child(odd) td { background: #FEFEFE; }  

tr td:hover { background: #666; color: #FFF; }  

</style>

