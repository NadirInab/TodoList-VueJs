<template>
  <div>
    <form @submit="submitData" action>
      <div class="container">
        <label for>Task</label>
        <input type="text" ref="name" v-model="text" name="task" placeholder="Name" />
      </div>
      <div class="container">
        <label for>Day</label>
        <input type="text" ref="name" v-model="day" name="day" placeholder="day" />
      </div>
      <div class="container">
        <span >Reminder</span>
        <input type="checkbox" ref="name" v-model="reminder" name="reminder" placeholder="Name" />
      </div>
      <button type="submit">Submit</button>
    </form>
    <!-- <Button showtask="showTask" color="darkcyan"  text="Submit" /> -->
  </div>
</template>

<script>
import Button from "./Button.vue";
export default {
  name: "Form",
  data() {
    return {
      text: "",
      day: "",
      reminder: false
    };
  },
  methods: {
    submitData(e){
        e.preventDefault() ;
        const newTask = {
            id : Math.floor(Math.random() * 1000) , 
            text : this.text , 
            day : this.day , 
            reminder : this.reminder
        } ;
        this.$emit("addTask", newTask) ;
        // console.log(newTask) ; 

        this.text = "" ;
        this.day = "" ;
        this.reminder = "" ;
    }
  },
  components: {
    Button
  }
};
</script>

<style scoped>
input {
  padding: 5px;
  border: 2px solid lightseagreen;
  border-radius: 10px;
  color: dar;
}
button:hover {
  background-color: rgb(0, 122, 122);
  color: darkblue;
}
.container {
  margin-left: 10px;
}
.container label {
  display: block;
  color: MidnightBlue;
  float: left;
  padding: 5px;
  margin-left: 10px;
  font-size: 1.5rem;
  font-style: italic;
}
.container:last-of-type {
  padding: 5px;
  margin-top: 5px;
  font-size: 1.3rem;
  color: MidnightBlue;

}
.container input {
  width: 90%;
  padding: 10px ;
  margin-top: 4px;
  background-color: lightblue;
}
button {
  border-radius: 10px;
  background-color: darkgrey;
  width: 100px;
  height: 40px;
  cursor: pointer;
}
</style>