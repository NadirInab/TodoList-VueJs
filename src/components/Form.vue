<template>
  <div>
    <form @submit="submitData" action>
      <div class="container">
        <label for>task</label>
        <input type="text" ref="name" v-model="text" name="task" placeholder="Name" />
      </div>
      <div class="container">
        <label for>day</label>
        <input type="text" ref="name" v-model="day" name="day" placeholder="day" />
      </div>
      <div class="container">
        <label for>reminder</label>
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
button {
  margin-top: 10px;
  text-align: center;
  width: 100px;
  height: 40px;
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
  /* float: left; */
}
.container input {
  width: 90%;
  padding: 8px;
  margin-top: 4px;
}
</style>