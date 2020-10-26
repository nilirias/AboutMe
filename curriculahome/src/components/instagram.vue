<template>
    <div>
        Only sometimes, you can catch her art at her Instagram account
        {{dibujos}}
    </div>
</template>

<script>
import { db } from "../firebase";
export default {
    name: 'instagram',
   
    data(){
        return{
            dibujos:[]
        }
    },

    mounted () {
  // Binding Collections
  this.$binding("dibujos", db.collection("direccionDeImagenes"))
  .then((dibujos) => {
    console.log(dibujos)
  })
}
   

}
</script>

<style scoped>

</style>