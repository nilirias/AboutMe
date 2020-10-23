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
        white-space: pre-wrap;
        background: black;
        color: white;
        overflow-y: scroll;
        }

    @media(min-width: 576px){
        .descStyle{
        border: 10px solid white;
        width : calc(60% - 20px);
        height : calc(50vh - 20px);
        font-size: 1.5rem;


    }
    }

    @media(max-width: 575px) {
        .descStyle{
            width: calc(100%-2px);
            height: 15vh;
            font-size: 1rem;
            border: 1px solid white;
            padding: 1rem;

        }
    }
    


</style>