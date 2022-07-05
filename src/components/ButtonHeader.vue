<template>
  <div class="button-wrap">
    <div class="container">
      <b-button variant="outline-secondary" class="btn-circle lg" size="lg">reload</b-button>
      <b-button variant="outline-secondary" class="btn-circle lg" size="lg">wright</b-button>
    

    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonHeader',
};
</script>

<style  scoped>
.container {
  margin-top: 0px;
  max-width: 1100px;
  text-align: left;

}

button {
  margin-right: 10px;
}
/* .btn-circle {
  width: 50px;
  height: 50px;
  line-height: 5px !important;
  text-align: center;
  padding: 5px;
  border-radius: 50% !important;
  margin-right: 8px;
} */
</style>
