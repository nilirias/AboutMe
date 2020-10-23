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
        align-content: stretch;
        white-space: pre;
        background: black;
        color: white;
        }

    @media(min-width: 576px){
        .descStyle{
        border: 10px solid white;
        width : 53vw;
        height : 36.2vh;
        padding: 50px;
        font-size: 1.5rem;

    }
    }

    @media(max-width: 575) {
        .descStyle{
            width: 95vw;
            height: 60vh;
            font-size: 0.4rem;
            border: 1px solid white;
            padding: 1px;
        }
    }
    


</style>