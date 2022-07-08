<template>
  <div id="app">
    <TitleTicket />
    <ButtonHeader />
    <EmailContainer :list="allEmailsList" />
  </div>
</template>

<script>
import TitleTicket from './components/TitleTicket.vue';
import ButtonHeader from './components/ButtonHeader.vue';
import EmailContainer from './components/EmailContainer.vue';

import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  data: () => ({}),
  components: {
    TitleTicket,
    ButtonHeader,
    EmailContainer,
  },
  computed: {
    ...mapGetters('emails', ['allEmailsList']),
  },
  mounted() {
    this.webSocket();
    // setTimeout(()=>{
    //   this.webSocket();
    // },10000)
      },

      methods: {
        ...mapActions('emails', ['webSocket']),
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
