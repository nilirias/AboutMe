<template>
    <div class = "container">
        <imgFondo />
        <descripcion />
        <opciones />
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
    }
}


</script>

<style scoped>
 .container {
  display: flex; /* or inline-flex */
  flex-wrap: wrap;
}

</style>