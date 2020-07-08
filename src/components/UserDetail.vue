<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{ switchName()}}</p>
        <button @click="resetName">Reset</button>
    </div>
</template>

<script>
    export default {
        props: {
            myName: String
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
        }
    }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
