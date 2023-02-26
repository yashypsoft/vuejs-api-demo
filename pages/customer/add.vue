<template>
  <div>
    <h1>Add customer</h1>
    <v-btn @click="getTodos()">Submit</v-btn>
    <v-btn @click="getCustomer()">Submit GQL</v-btn>
    {{ todo }}
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  layout: "new",
  methods: {
    getTodos() {
      this.$store.dispatch("todo/getTodos");
    },
    getCustomer() {
      this.$store.dispatch("todo/getCustomer");
    },
  },
  computed:{
    ...mapState(['todo'])
      // ...mapState({
      //   todo: state => state.todo.todoList
      // })
  },
  updated(){
    console.log(this.$store.state.todo.todoList);
  }
};
</script>

<style>
</style>
