<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ switchName()}}</p>
        <p>User age : {{ userAge}}</p>
        <button @click="resetName">Reset</button>

        <!-- another way to pass data from a child to a paren, using a callback as prop -->
        <button @click="resetFunc()">Reset name</button>
    </div>
</template>

<script>
import {eventBus} from '../main.js'
    export default {
        props: {
            myName: String,
        resetFunc: Function,
        userAge: Number
        }, //this should be called the same as the word we are passing in our double moustche
        methods: {
            switchName(){
                //we can use props and access it as a normal property using the this keyword
                return this.myName.split("").reverse().join("")
            },
            resetName(){
                this.myName = "Gaby"

                //the first argument you pass to emit is a name of your choice and the second one is the data you want to change 
                //passing data from the child to the parent
                this.$emit('nameWasReset',this.myName)
            }
        },
        //this is a hook - lifecycle, also another way to pass data from child to child - check main.js
        created(){
            //you always pass a callback in here, which take as an argument the data we pass with the event in this case "age"
            eventBus.$on('ageWasEdited', (age)=>{
                this.userAge = age
            })
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
