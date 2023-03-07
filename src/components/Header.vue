<template>
  <div class="container">
    <h2>
      <i class="fa-solid fa-calendar-days"></i>
      {{title}}
    </h2>
    <div>
      <i @click="$emit('show')"  v-if="show" class="fa-sharp fa-regular fa-circle-up"></i>
      <i @click="$emit('show')"   v-else class="fa-sharp fa-regular fa-circle-down "></i>
    </div>
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Header",
  props: {
    title: String,
    test: String, 
    show : Boolean
  },
  components: {
    Button
  }
};
</script>

<style scoped>
.container {
  padding: 10px;
}
</style>