<template>
  <div
    v-show="show"
    :class="[task.reminder ? 'reminder' : '','Container' ]"
  >
    <h4>{{task.text}}</h4>
    <b>{{task.day}}</b>
    <div class="d-flex justify-content-around">
      <i title="delete" @click="closeTask(task.id)" class="fa-solid fa-trash text-danger"></i>
      <i title="update" class="fa-solid fa-pen-to-square text-primary"></i>
      <i  @click="$emit('toggle', task.id)" title="completed" class="fa-solid fa-circle-check text-info"></i>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
    show: Boolean
  },
  methods: {
    closeTask(id) {
      this.$emit("close-task", id);
    }
  }
};
</script>

<style scoped>
.Container {
  color: darkblue;
  border: 2px solid rgb(60, 127, 250);
  border-radius: 10px;
  margin: 10px;
  background-color: rgba(42, 101, 101, 0.599);
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
}
b {
  color: rgb(16, 11, 5);
  padding: 5px;
}
i{
  padding: 4px;
  cursor: pointer;
  
}
.reminder {
  background-color: rgba(35, 153, 98, 0.785);
}
</style>