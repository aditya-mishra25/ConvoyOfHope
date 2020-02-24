<template>
<div>
	<div>
    <h5 class="my-3"> <code></code></h5>
  </div>
	<div>
	<b-card style="width:100%; margin-top:10px; margin-left:10px"> 
	<div>
   <table>
     <tr>
       <th>Name</th>
       <th>Cause</th>
       <th>Contact</th>
       <th>Email</th>
       <th>Location</th>

    </tr>
     <tr v-for="item in items" v-bind:key="item.id">
       <td>{{item.name}}</td>
       <td>{{item.cause}}</td>
       <td>{{item.contact}}</td>
       <td>{{item.email}}</td>
       <td>{{item.location}}</td>
       <td><button id="del" ><b-icon-trash style="width: 40px; height: 40px;"></b-icon-trash>
       </button></td>
     </tr>
   </table> 
   <!-- <b-table striped hover :items="items"></b-table> -->
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
        ).catch(error=>{
            console.log(error);
        });
        console.log(items)
    }
    
  }
</script>
<style scoped>
#del{
  border:  1px solid black;
 padding-top: 0;
 max-width: 15px;
 max-height:  15px;
 background-color: lightBlue;
 border-radius: 90px;
 font-size: 14px;
 text-align:  center;
}
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

