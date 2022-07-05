<template>
  <div id="app">
    <TitleTicket  />
    <ButtonHeader />

  </div>
</template>

<script>
import TitleTicket from './components/TitleTicket.vue';
import ButtonHeader from './components/ButtonHeader.vue';

export default {
  name: 'App',
  components: {
    TitleTicket,
    ButtonHeader
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
