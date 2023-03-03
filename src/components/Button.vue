<template>
  <div v-show="show">
        <button  :style="{background: color}">{{text}}</button>
  </div>
</template>

<script>
    export default {
        name : "Button", 
        data (){
            return {
            show : true 
            }
        },
        props : {
            text : String ,
            color : String
        }, 
    }
</script>

<style>
    button {
        margin-top: 6px;
        padding: 13px;
    }
</style>