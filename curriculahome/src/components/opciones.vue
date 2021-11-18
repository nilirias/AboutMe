<template>
    <div class="opcionStyle">
       
        <ul> <li> <button v-on:click = "actualizarTexto" id = "0"> {{t('Who is Nina?')}} </button></li>
        <li> <button v-on:click = "actualizarTexto" id = "1"> {{t('What is her most recent project?')}}</button></li>
        <li> <button v-on:click = "actualizarTexto" id = "3"> {{t('Where can I find her?')}} </button></li>
        <li> <button v-on:click = "actualizarTexto" id = "4"> JStris Statistics </button></li> </ul>

        <div class="totalDinero">
            <p> {{dinero}} ( </p>
        </div>
    </div>

</template>


<script>
export default {
    name: "opciones",
    methods: {
        actualizarTexto : function(e){
            let redes = false
            if (e.target.id === "3") {
                redes = true
            }

            let ig = false
            if (e.target.id === "2"){
                ig = true
            }
            
            // const elt = document.querySelector(".letter")
            // elt.parentElement.innerHTML = ""

            this.$emit("actualizarTexto", {mensaje :this.myArray[e.target.id], redes, ig})
        }
     },

     locales: {
         Espanol:{
             "Who is Nina?" : "¿Quien es Nina?",
             "What is her most recent project?" : "¿Cual es su proyecto mas reciente?",
             "Where can I find her?" : "¿Donde la puedo encontrar?",

         }
     },

    data(){
        
        return{
           myArray:[`22 - MX - Aquarius 

 She's currently studying her 8th semester of Computer Science at Tec de Monterrey. Her main goal is to work on the video game industry, but she's not limited to it, she also likes web development, machine learning and investigation.

 Some of her interests include art, math, video games and animation. 

       `, `The latest project she did, is a rhythm dating sim game developed on Godot alongside her friends for a game jam. It can be found on her itch.io profile. `, 
       "", "", ""],
           dinero: Math.floor(Math.random() * 100000) + 1
        }

    },

    mounted(){

        fetch('https://jstris.jezevec10.com/api/u/nilirias/live')
        .then(response => response.json())
        .then(result => {
            let jstris = `
Total Games: ${result.games}x
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