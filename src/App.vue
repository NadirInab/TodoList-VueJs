
<template>
  <div class="container">
    <Header @show="showForm" :show="show" title="ToDo List" />
    <FormData v-if="showUpdate" :upToDateTask="upToDateTask" />
    <Form v-else v-show="show" @addTask="add" />
    <Tasks @update="updateTask" @toggleReminder="togglereminder" @close="closeTask" :tasks="tasks" />
  </div>
</template>

<script >
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";
import Form from "./components/Form.vue";
import FormData from "./components/FormData.vue";
import axios from "axios";

export default {
  data() {
    return {
      tasks: [],
      show: true, 
      upToDateTask : {}, 
      showUpdate : false
    };
  },
  components: {
    Header,
    Tasks,
    Form,
    FormData
  },
  async created() {
    try {
      const res = await axios.get("http://localhost:5000/tasks");
      this.tasks = res.data;
    } catch (e) {
      console.log("err " + e);
    }
  },
  methods: {
    async closeTask(id) {
      if (confirm("are you done !!"));
      const response = await axios.delete(`http://localhost:5000/tasks/${id}`); 
      if (response.status == 200) {
        this.tasks = this.tasks.filter(task => {
          return task.id !== id;
        });
      } else {
        alert("something went wrong !!");
      }
    },

    async togglereminder(id) {
      if (confirm("are you done !!"));
      // fetch().then(response => respo)
      const response = await axios(`http://localhost:5000/tasks/${id}`);
      const remindedTask = response.data;
      const upDatedOne = await axios.put(`http://localhost:5000/tasks/${id}`, {
        ...remindedTask,
        reminder: !remindedTask.reminder
      });
      if (upDatedOne.status === 200) {
        this.tasks = this.tasks.map(task =>
          task.id === id ? { ...task, reminder: !task.reminder } : task
        );
      }
    },

    async add(task) {
      const response = await axios.post("http://localhost:5000/tasks", task);
      const taskData = response.data;
      this.tasks = [...this.tasks, taskData];
    },

    showForm() {
      this.show = !this.show;
    },

    async updateTask(id) {
      this.showUpdate = true ;
      let response = await axios(`http://localhost:5000/tasks/${id}`) ;
     this.upToDateTask = await response.data ;
    //  console.log(upToDateTask) ;
      // task = JSON.parse(JSON.stringify(task));
      // upToDateTask.text = prompt("edit your task : ", task[0].text);
      // upToDateTask.day = prompt("edit your task date :", task[0].day);

      // console.log(this.upToDateTask) ;

      // this.tasks = this.tasks.map(task =>
      //   task.id === id
      //     ? { ...task, text: updatedTask.text, day: updatedTask.day }
      //     : task
      // );
    }
  }
};
</script>

<style scoped>
</style>
