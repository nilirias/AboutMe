<template>
  <div id="app">
    <container />
  </div>
</template>

<script>

import container from './components/container';

export default {
  name: 'App',
  components: {
    container

  },
  data(){
    return {
    }
  }
}
</script>

<style>
  @font-face {
      font-family: 'Early GameBoy';
    src: url('./assets/Early GameBoy.ttf');
  }

  *{
    font-family: "Early GameBoy";
  }
</style>