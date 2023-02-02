<template>
  <div>
    <h1>Add customer</h1>
    <v-btn @click="getTodos()">Submit</v-btn>
    <!-- {{ todo }} -->
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
  },
  computed:{
    ...mapState(['todo','todoList'])
      // todo: state => state.todo.todoList
  },
  updated(){
    console.log(this.$store.state.todo.todoList);
  }
};
</script>

<style>
</style>
