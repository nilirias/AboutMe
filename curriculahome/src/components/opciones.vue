<template>
    <div class="opcionStyle">
        <ul> <li> <button v-on:click = "actualizarTexto" id = "0"> Who is Nina? </button></li>
        <li> <button v-on:click = "actualizarTexto" id = "1"> What are some of her projects? </button></li>
        <li> <button v-on:click = "actualizarTexto" id = "2"> She draws? </button></li>
        <li> <button v-on:click = "actualizarTexto" id = "3"> Where can I find her? </button></li>
        <li> <button v-on:click = "actualizarTexto" id = "4"> JStris Statistics </button></li> </ul>

        <div class="totalDinero">
            <p> § {{dinero}} </p>
        </div>
    </div>

</template>


<script>
export default {
    name: "opciones",
    methods: {
        actualizarTexto : function(e){
            let visible = false
            if (e.target.id === "3") {
                visible = true
            }
           
            this.$emit("actualizarTexto", {mensaje :this.myArray[e.target.id], visible})
        }
    },

    data(){
        
        return{
           myArray:["Nina es una chava", "No hace nada", "No dibuja", "", ""],
           dinero: Math.floor(Math.random() * 100000) + 1
        }

    },

    mounted(){

        fetch('https://cors-anywhere.herokuapp.com/https://jstris.jezevec10.com/api/u/nilirias/live')
        .then(response => response.json())
        .then(result => {
            let jstris = `
Total Games: ${result.games}
Max APM: ${result.mAPM}
Maximum of Lines Sent: ${result.maxSent}
Longest Combo: ${result.maxmaxCombo}
Longest Game: ${result.mtime}
Total Back to Backs: ${result.totalB2B}
Total Perfect Clears: ${result.totalpcs}
Total Lines Received: ${result.totalreceived}
Total Lines Sent: ${result.totalsent}`

            this.myArray[4] = jstris;
            })
        .catch(error => console.log('error', error));
    }

}
</script>

<style scoped>
    .opcionStyle{
        border: 10px solid white;
        width : 29.2vw;
        height: 35vh;
        padding: 50px;
        padding-top: 30px;
        padding-bottom: 80px;
        align-content: stretch;
        background: black;
        color: white;
    }

    ul{
        list-style: disclosure-closed;
    }

    button{
        margin: 5px;
        font-size: 20px;
        text-align: left;
        text-decoration: none;
        outline: none;
        color: white;
        background-color: black;
        border: none;
        border-radius: 15px;
    }

    button:hover {background-color: #3e8e41}

    button:active {
    background-color: #3e8e41;
    transform: translateY(4px);
    }

    .totalDinero{
        background: black;
        color: yellow;
        text-align: right;
        padding-bottom: 0%;
        font-size: 15px;
    }

</style>