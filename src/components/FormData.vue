<template>
    <div>
        <form @submit="getData" action="">
            <div>
                <label for="">name</label>
                <input v-model="name" type="text" placeholder="name">
            </div>
            <div>
                <label for="">age</label>
                <input v-model="age" type="number" placeholder="age">
            </div>
            <button type="submit">submit</button>   
        </form>
    </div>
</template>

<script>
export default {
    name : 'FormData', 
    data(){
        return {
            name : "", 
            age : ""
        } 
    }, 
    methods : {
        getData(e){
            e.preventDefault() ;
            const person = {
                id : Math.floor(Math.random()* 10000) ,
                name : this.name ,
                age : this.age 
            } ;
            console.log(person) ;
        }
    }
}
</script>

<style>

</style>