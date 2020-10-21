<template>
    <div>
        <p>adios</p>
        <imgFondo />
    </div>
</template>

<script>
import imgFondo from './imgFondo'

export default {
    name: 'container',
    components: {
        imgFondo
    }
}
</script>

<style scoped>
 .container {
  display: flex; /* or inline-flex */
  flex-direction: column;
  flex-wrap: nowrap;
  order: 2;
}

</style>