<template>
    <div class = "container">
        <imgFondo />
        <descripcion :mensaje = "mensaje" />
        <opciones v-on:actualizarTexto = "opcionUno" />
    </div>
</template>

<script>    
import imgFondo from './imgFondo'
import descripcion from './descripcion'
import opciones from './opciones'

export default {
    name: 'container',
    components: {
        imgFondo,
        descripcion,
        opciones
    },

    methods: {
        opcionUno : function(mensaje){
            this.mensaje = mensaje,
            console.log("cualquier tonteria")
        }
    },

    data(){
        return {
            mensaje : "pito"
        }
    }
}
</script>

<style scoped>
 .container {
  display: flex; /* or inline-flex */
  flex-wrap: wrap;
}

</style>