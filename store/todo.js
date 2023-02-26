const state = () => ({
  todoList:[]
})

const actions = {
  async getTodos({commit}){
    this.$todoAPI.getTodos().then(
      (data)=> commit('setTodos',data)
    );
  },
  async getCustomer({commit}){
    this.$todoAPI.getCustomer();
  }
}

const mutations  = {
  setTodos(state,data) {
    state.todoList = data;
  }
}

export default {namespaced:true,actions,state,mutations};
