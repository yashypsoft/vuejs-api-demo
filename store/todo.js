const state = () => {
  todoList:[]
}

const actions = {
  async getTodos({commit}){
    await fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => commit('setTodos',json));
  }
}

const mutations  = {
  setTodos(state,data) {
    state.todoList = data;
  }
}

export default {namespaced:true,actions,state,mutations};
