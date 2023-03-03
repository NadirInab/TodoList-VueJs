
<template>
      <div class="container">
        <Header title="ToDo List" />
        <Form @addTask="add"  />
        <Tasks  @toggleReminder="togglereminder"  :show="show" @close="closeTask" :tasks="tasks" />
      </div>
</template>

<script >  
  import Header from "./components/Header.vue" ;
  import Tasks from "./components/Tasks.vue" ;
  import Form from "./components/Form.vue" ;

  export default {
    data(){
      return {
        tasks : [], 
        show: true 
      }
    }, 
    components : {
      Header, 
      Tasks ,
      Form, 
    }, 
    created(){
      this.tasks = [
         {
          id:1, 
          text : 'Learn vue js', 
          day : "March 1st at 2:34", 
          reminder : true 
        }, 
        {
          id:2, 
          text : 'Learn laravel', 
          day : "March 1st at 2:34", 
          reminder : true 
        }, 
        {
          id:3, 
          text : 'Learn React', 
          day : "Mai 1st at 2:34", 
          reminder : false 
        }, 
      ]
    }, 
    methods : {
      closeTask(id){
        this.tasks = this.tasks.filter( (task)=>{
            return task.id !== id ;
        })
      },
      togglereminder(id){
        this.tasks = this.tasks.map((task)=> task.id === id ? {...task, reminder : !task.reminder} : task)
      }, 
      add(task){
        this.tasks = [...this.tasks, task] ; 
      }, 
    }, 
  }
</script>

<style scoped>


</style>
