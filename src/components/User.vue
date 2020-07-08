<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <button @click="changeName">Change my name</button>
        <p>Name is {{ name }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <!-- passing data from the parent to the child -->
                <app-user-detail 
                    :myName="name"
                    @nameWasReset="name = $event"
                    :resetFunc="resetName" 
                    :userAge="age"
                ></app-user-detail> 
                <!-- namewasreset is the name of the event, name is the name of the component were we are storing the data on our data function, $event refers to the data that was passed through the event -->
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" @ageWasEdited=" age = $event"></app-user-edit>
                
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function(){
            return{
                name: 'Gaby',
                age : 27
            }
        },
        methods: {
            changeName(){
                this.name = 'Cam'
            },
            resetName(){
                this.name = "Gaby"
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
