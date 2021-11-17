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
            this.datos = datos
        }
    },

    data(){
        return {
            datos: {
                mensaje:"Bienvenido a mi pagina \n Welcome to my page \n\n Choose your journey: \n Escoge tu destino: \n"
            }
        }
    }
}
</script>

<style scoped>

.container{
    background:black;
}

@media(min-width: 576px){
    .container {
    display: flex; /* or inline-flex */
    flex-wrap: wrap;
    background: black;
    color: white;
    }
  }

  @media(max-width: 575px){
      .container{
          display: flex;
          flex-direction: column;
      }
  }

</style>