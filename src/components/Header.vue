<template>
    <div class="container">
        <h2><i class="fa-solid fa-calendar-check"></i> {{title}} </h2>
    </div>
</template>

<script>
import Button from "./Button.vue" ;
export default {
    name : "Header", 
    props : {
        title : String, 
        test : String
    },
    components : {
        Button ,
    }
}
</script>

<style scoped>
.container {
    padding: 10px;
}

</style>