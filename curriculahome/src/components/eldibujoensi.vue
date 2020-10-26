<template> 
    <div class="unaClase">
        <button v-on:click="cambiar" id="anterior"> anterior </button> 
        <img :src = "url">  
        <button v-on:click="cambiar" id="siguiente"> siguiente </button>
        </div>
</template>

<script>
export default {
    name: 'eldibujoensi',
    props: ["url"],

    methods:{
        cambiar:function(e){
            if (e.target.id === "siguiente"){
                this.$emit("cambiar", true);
            } else {
                this.$emit("cambiar", false);
            }
        }
    }
}
</script>

<style scoped>

    img{
        height:  calc(50vh - 50px);
    }

    .unaClase{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right:  30px;
    }

</style>