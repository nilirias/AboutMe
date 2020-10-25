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
           myArray:[`21 - MX - Aquarius 

 Nina is a Computer Science student at Tec de Monterrey. 

 She enjoys drawing in her free times and also plays Tetris competitively.

 She currently works as a tenis shoe artist.

 Fun Fact: She hasn't died yet.
       `, `Her latest project can be found at her itch.io profile, she recently participated at a Game Jam in which she and her team won first place by developing a top-down cute videogame in Godot. `, 
       'Only sometimes, you can catch her art at her Instagram account', "", ""],
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
        align-content: stretch;
        background: black;
        color: white;
    }

    ul{
        list-style: disclosure-closed;
    }

    button{
        margin: 5px;
        text-align: left;
        text-decoration: none;
        outline: none;
        color: white;
        background-color: black;
        border: none;
        border-radius: 15px;
    }

    button:hover {background-color: #8e3e7d}

    button:active {
    background-color: #8e3e7d;
    transform: translateY(4px);
    }

    .totalDinero{
        background: black;
        color: yellow;
        text-align: right;
        padding-right: 10px;
        padding-bottom: 10px;
        font-size: 1.3rem;
    }

    @media(min-width: 576px){
         .opcionStyle{
            border: 10px solid white;
            width : calc(40% - 20px);
            height: calc(50vh - 20px);
         }

         button{
             font-size: 1.5rem;
         }
    }

    @media(max-width: 575px){
        .opcionStyle{
            width: calc(100%-2px);
            font-size: 0.8rem;
            border: 1px solid white;
            padding: 1rem;
        }
        button{
            font-size: 1rem;
        }
    }
</style>