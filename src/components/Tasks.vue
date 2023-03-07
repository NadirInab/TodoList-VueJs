<template>
  <header>
    <div :key="task.id" v-for="task in tasks">
      <div id="taskContainer">
        <Task
          @toggle="$emit('toggleReminder', task.id)"
          :show="show"
          @close-task="closeTask(task.id)"
          :task="task"
          @updateTask="$emit('update', task.id)"
        />
      </div>
    </div>
  </header>
</template>

<script>
import Task from "./Task.vue";

export default {
  props: {
    tasks: Array,
    show: Boolean
  },
  components: {
    Task
  },
  methods: {
    closeTask(id) {
      this.$emit("close", id);
    }, 
  },
  emits: ["toggle", "update"]
};
</script>

<style>
header {
  display: inline;
}
.taskContainer {
  display: flex;
}
</style>