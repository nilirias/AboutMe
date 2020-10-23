<template>
    <div class ="descStyle">
        <redSocial v-show = "datos.visible" /> 
        {{datos.mensaje}}
    </div>
</template>

<script>
import redSocial from "./redSocial"

export default {
    name: 'descripcion',
    props: ['datos'],
    components:{
        redSocial
    }
}
</script>

<style scoped>
    .descStyle{
        border: 10px solid white;
        width : 53vw;
        height : 36.2vh;
        padding: 50px;
        align-content: stretch;
        white-space: pre;
        background: black;
        color: white;
        font-size: 20px;

    }


</style>