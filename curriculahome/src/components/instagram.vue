<template>
    <div>
        Only sometimes, you can catch her art at her Instagram account
        <eldibujoensi :url="link"  v-on:cambiar="siguiente" />
    </div>
</template>

<script>
import { db } from "../firebase";
import eldibujoensi from "./eldibujoensi";

export default {
    name: 'instagram',

    components:{
        eldibujoensi,
    },

    methods:{
        siguiente:function(next){
            if (next){
                this.index++
            } else {
                this.index--
            }
            
            if (this.index === this.dibujos.length){
                this.index = 0
            }

            if(this.index < 0){
                this.index = this.dibujos.length -1
            }

            this.link = this.dibujos[this.index].url

        }
    },
   
    data(){
        return{
            dibujos:[],
            link: "",
            index: 0
        }
    },

    mounted () {
  // Binding Collections
  this.$binding("dibujos", db.collection("direccionDeImagenes"))
  .then((dibujos) => {
    console.log(dibujos)
    this.link = dibujos[this.index].url
  })
}
   

}
</script>

<style scoped>
    


</style>