<template>
  <div>
    <form @submit="submitData" action>
      <div class="container">
        <label class="fw-bold text-dark" for>Task</label>
        <input
          class="form-control"
          type="text"
          ref="name"
          v-model="text"
          name="task"
          placeholder="Task"
        />
      </div>
      <div class="container">
        <label class="fw-bold text-dark" for>Day</label>
        <input
          class="form-control"
          type="date"
          ref="name"
          v-model="day"
          name="day"
          placeholder="date"
        />
      </div>
      <button type="submit" class="btn">update</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Form",
  data() {
    return {
      text: this.upToDateTask.text,
      day: this.upToDateTask.day,
      reminder: this.upToDateTask.reminder
    };
  },
  props: {
    upToDateTask: Object
  },
  methods: {
    submitData(e) {
      e.preventDefault();
      let id = 7
      const newUpDatedTask = {
        text : this.text, 
        day : this.day, 
      }
      axios.put(`http://localhost:5000/tasks/${id}`, newUpDatedTask);
      // console.log("here");
      // console.log(this.upToDateTask)
      // console.log(this.newUpDatedTask);
    }
  }
};
</script>

<style scoped>
button:hover {
  background-color: rgb(0, 122, 122);
  color: darkblue;
}
.container label {
  display: block;
  float: left;
  color: MidnightBlue;
  padding: 5px;
  font-size: 1rem;
  font-style: italic;
}
.container:last-of-type {
  padding: 5px;
  margin-top: 5px;
  font-size: 1.3rem;
  color: MidnightBlue;
}
.container input {
  border: 2px solid lightseagreen;
  border-radius: 10px;
  width: 100%;
  padding: 6px;
  margin-top: 2px;
  background-color: lightblue;
  box-shadow: rgba(111, 198, 235, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
button {
  border-radius: 10px;
  background-color: rgba(2, 146, 172, 0.664);
  width: 120px;
  height: 40px;
  cursor: pointer;
  font-weight: bold;
}
</style>