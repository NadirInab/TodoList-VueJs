<template>
    <div @dblclick="$emit('toggle', task.id)"  v-show="show" :class="[task.reminder ? 'reminder' : '','Container' ]">
        <i @click="closeTask(task.id)" class="fas fa-times"></i>
        <h4 >{{task.text}}</h4>
        <b>{{task.day}}</b>
    </div>
</template>

<script>
export default {
    props : {
        task : Object, 
        show : Boolean
        // color : String
    }, 
    methods : {
        closeTask(id){
           this.$emit('close-task', id) ;
        }
    }
}
</script>

<style scoped>
    .Container {
        color: darkblue;
        border: 2px solid rgb(60, 127, 250);
        border-radius: 10px;
        margin: 10px;
        background-color: rgba(32, 103, 103, 0.678);
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    }
   b {
    color: rgb(16, 11, 5);
    padding: 5px;
   }
   i {
    color: red;
    padding: 4px;
    float: right;
    cursor: pointer;
   }
   .reminder {
    border: 3px solid rgb(10, 186, 81);

   }
</style>