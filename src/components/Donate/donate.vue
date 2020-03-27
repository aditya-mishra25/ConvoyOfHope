<template>
  <div class="block">
      <div v-if="!paidFor" style="margin-top:5%">
        <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
             <b-form-input id="input-2" v-model="custname" required placeholder="Enter name"></b-form-input>
         </b-form-group>
        <b-form-group id="input-group-2" label="Email:" label-for="input-2">
            <b-form-input id="input-1" v-model="custemail" type="email" required  placeholder="Enter email"></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Contact:" label-for="input-2">
            <b-form-input id="input-1" v-model="custphone" type="number" required  placeholder="Enter Phone no."></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Amount:" label-for="input-2">
            <label>{{Req.amount}}$ i.e approx {{Req.amount*72}}Rs.</label>
        </b-form-group>
    </div>

    <div v-if="paidFor">
      <h4>Thankyou for the donation!!</h4>
    </div>

    <div ref="paypal"></div>
  </div>
</template>

<script>
import firebase from 'firebase';
export default {
  name: "Donate",
  data: function() {
    return {
      custphone:'',
      custname:'',
      custemail:'',
      loaded: false,
      paidFor: false,
      Req:"",
      product: {
        price: 1,
        description: "leg lamp from that one movie",
        img: "./assets/lamp.jpg"
      }
    };
  },
  created(){
    var reqid = this.$route.params.id;
        firebase.firestore().collection('Requests').doc(reqid).get().then(
            doc =>{
                const req ={
                    'id':doc.id,
                    'name':doc.data().name,
                    'cause':doc.data().cause,
                    'title':doc.data().title,
                    'brief':doc.data().brief,
                    'email':doc.data().email,
                    'amount':doc.data().amount
                }
                this.Req = req
                console.log(this.Req)
            }
        )
    },
  mounted: function() {
    
    // if(this.custphone!="" && this.custname!="" && this.custemail!=""){
        
    // }
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AWQdkGxIymM8YYoRhzD8e7Hpl2znGw3YoVPuJIA4SXpSpJP7nEG2OIuHfAT6xsqMJQrjQ1BqbDazaA_9";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    setLoaded: function() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  amount: {
                    currency_code: "USD",
                    value: this.Req.amount
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.data;
            this.paidFor = true;
            console.log(order);
            firebase.firestore().collection('Donors').doc(this.Req.id).set({
                requestid:this.Req.id,
                donorname:this.custname,
                donoremail:this.custemail,
                donorphone:this.custphone,
                amountdonated:this.Req.amount,
                ngoname:this.Req.name,
            });
            firebase.firestore().collection('Requests').doc(this.Req.id).update({
                status:'completed'
            });
            this.$router.push('/')
          },
          onError: err => {
            console.log(err);
          }
        })
        .render(this.$refs.paypal);
    }
  }
};
</script>

<style scoped>
.block{
    margin-left:25%;
    width: 50%;
}

</style>