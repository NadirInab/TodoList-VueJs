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
        background-color: rgb(76, 141, 126);
    }
   b {
    color: rgb(195, 110, 0);
   }
   i {
    color: red;
    padding: 4px;
    float: right;
    cursor: pointer;
   }
   .reminder {
    border: 3px dashed green;

   }
</style>