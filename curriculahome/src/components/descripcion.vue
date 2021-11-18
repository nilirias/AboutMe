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
        <div class = "idiomas" v-if="!idioma">
            <div class="pixel2" @click="setLanguage('EN') ">EN</div> <div class="pixel2" @click="setLanguage('ES')">ES</div>
            <!-- <button> EN </button> <button> ES </button> -->
        </div>
        
    </div>
</template>

<script>
import redSocial from "./redSocial"

export default {
    name: 'descripcion',
    props: ['datos'],
    components:{
        redSocial,

    },

    methods: {
        setLanguage(lang) {
            if(lang === "EN"){
                this.$translate.setLang('English');
                this.idioma = true;
            } else{
                this.$translate.setLang('Espanol');
                this.idioma = true;
            }
        }
    },

    data(){
        return {idioma : false}
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

    .idiomas{
        justify-content: center;
        display: flex;
    }

    .pixel2 {
  font-size: 25px;
  color: white;
  height: auto;
  margin: 10px;
  font-family: "Early GameBoy";
   
  position: relative;
  display: inline-block;
  vertical-align: top;
  text-transform: uppercase;
  
  cursor: pointer;
  
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.pixel2:active {
  top: 2px;
}

.pixel2 {
  position: relative;
  display: block;
  margin: 1.5rem;
  font-family: "Early GameBoy";
  text-transform: uppercase;
  
  font-size: 25px;
  color: black;
}

.pixel2::before {
  content: "";
  display: block;
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: -10px;
  right: -10px;
  background: white;
  z-index: -1;
}

.pixel2::after {
  content: "";
  display: block;
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: -6px;
  right: -6px;
  background: white;
  z-index: -1;
}

.pixel2 {
  padding: 10px 10px;
  position: relative;
  background: white;
  width: auto;
  z-index: 2;
}



</style>