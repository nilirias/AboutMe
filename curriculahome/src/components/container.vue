<template>
    <div class = "container">
        <imgFondo />
        <descripcion :datos = "datos" />
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
        opcionUno : function(datos){
            this.datos = datos,
            console.log("cualquier tonteria")
        }
    },

    data(){
        return {
            datos: {
                mensaje:"Bienvenido"
            }
        }
    }
}
</script>

<style scoped>
 .container {
  display: flex; /* or inline-flex */
  flex-wrap: wrap;

  background: black;
  color: white;
}

</style>