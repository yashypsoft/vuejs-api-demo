import Todo from '../../API/todo.js';

export default (ctx, inject) => {
  const $todoAPI = new Todo(ctx);
  inject('todoAPI', $todoAPI);
  ctx.$todoAPI= $todoAPI;
}
