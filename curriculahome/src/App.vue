<template>
  <div id="app">
    <Todos v-bind:todos="todos"/>
    <placeholderFondo />
    <placeholderMenu />
  </div>
</template>

<script>
import Todos from './components/Todos';
import placeholderFondo from './components/placeholderFondo';
import placeholderMenu from './components/placeholderMenu';


export default {
  name: 'App',
  components: {
    Todos,
    placeholderFondo,
    placeholderMenu
  },
  data(){
    return {
      todos:[
        {
          id: 1,
          title: "Todo One",
          completed: false
        },
        {
          id: 2,
          title: "Todo Two",
          completed: true
        },
        {
          id: 3,
          title: "Todo Three",
          completed: false
        }
      ]
    }
  }
}
</script>

<style>
  .container {
  display: flex; /* or inline-flex */
  flex-direction: column;
  flex-wrap: nowrap;
  order: 2;
}



  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
</style>