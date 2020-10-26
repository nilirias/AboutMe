<template>
    <div class ="descStyle">
        
        <redSocial v-show = "datos.redes" /> 
        <instagram v-show = "datos.ig" />

        <!-- <span class="ml9">
            <span class="text-wrapper">
            <span class="letters">  </span>
            </span>
        </span> --> 

        {{datos.mensaje}}
        
    </div>
</template>

<script>
import redSocial from "./redSocial"
import instagram from "./instagram"

export default {
    name: 'descripcion',
    props: ['datos'],
    components:{
        redSocial,
        instagram
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
        padding-left: 30px;
        padding-top: 30px;
        }

    @media(min-width: 576px){
        .descStyle{
        border: 10px solid white;
        width : calc(60% - 50px);
        height : calc(50vh - 50px);
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