<template>
    <div class="opcionStyle">
        <ul> <li> <button v-on:click = "actualizarTexto" id = "0"> Quien es Nina? </button></li>
        <li> <button v-on:click = "actualizarTexto" id = "1"> Cuales son sus proyectos? </button></li>
        <li> <button v-on:click = "actualizarTexto" id = "2">Que dibuja? </button></li>
        <li> <button v-on:click = "actualizarTexto" id = "3">Donde la puedo encontrar? </button></li>
        <li> <button v-on:click = "actualizarTexto" id = "4">idk un api de jstris </button></li> </ul>
    </div>
</template>


<script>
export default {
    name: "opciones",
    methods: {
        actualizarTexto : function(e){
            console.log(e.target.id);
            this.$emit("actualizarTexto", this.myArray[e.target.id])
        }
    },

    data(){
        
        return{
           myArray:["Nina es una chava", "No hace nada", "No dibuja", "No la busques", "Tetris"]
        }
    },

    mounted(){
        const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        mode: 'no-cors'
        };

        fetch("https://jstris.jezevec10.com/api/u/Nilirias/live/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
            }

}
</script>

<style scoped>
    .opcionStyle{
        border: 10px solid black;
        width : 28vw;
        height: 35vh;
        padding: 50px;
        align-content: stretch;
    }

    ul{
        list-style: disclosure-closed;
    }

</style>