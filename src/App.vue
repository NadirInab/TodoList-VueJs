
<template>
  <div class="container">
    <Header title="ToDo List" />
    <Form @addTask="add" />
    <Tasks
      @update="updateTask"
      @toggleReminder="togglereminder"
      :show="show"
      @close="closeTask"
      :tasks="tasks"
    />
  </div>
</template>

<script >
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";
import Form from "./components/Form.vue";

export default {
  data() {
    return {
      tasks: [],
      show: true
    };
  },
  components: {
    Header,
    Tasks,
    Form
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Learn vue js",
        day: "12/06/2023",
        reminder: true
      },
      {
        id: 2,
        text: "Learn laravel",
        day: "12/12/2023",
        reminder: true
      },
      {
        id: 3,
        text: "Learn React",
        day: "25/02/2023",
        reminder: false
      }
    ];
  },
  methods: {
    closeTask(id) {
      this.tasks = this.tasks.filter(task => {
        return task.id !== id ;
      });
    },
    togglereminder(id) {
      this.tasks = this.tasks.map(task =>
        task.id === id ? { ...task, reminder: !task.reminder } : task

      );
        // console.log("debug ", {12,  "heere"} )

    },
    add(task) {
      this.tasks = [...this.tasks, task];
    },


    updateTask(id) {
      let updatedTask = {
        id : id
      } ;
      let task = this.tasks.filter(task => {
        return task.id == id;
      });
      task = JSON.parse(JSON.stringify(task));
      updatedTask.text = prompt("edit your task : ", task[0].text) ;
      updatedTask.day = prompt("edit your task date :", task[0].day) ;

      this.tasks = this.tasks.map(task =>
        task.id === id ? { ...task, text: updatedTask.text, day : updatedTask.day } : task
      );

    }

  }
};
</script>

<style scoped>
</style>
