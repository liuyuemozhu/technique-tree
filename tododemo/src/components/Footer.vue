<template>
  <div class="container">
    <input type="checkbox" v-model="isAll" />已完成：{{ completedSize }} /
    全部：{{ todos.length }}
    <div class="clear" v-show="completedSize" @click="deleteCompletedTodos">
      清除已完成的任务
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    todos: Array,
    deleteCompletedTodos: Function,
    selectAllTodos: Function
  },
  data() {
    return {
      isChecked: false
    }
  },
  computed: {
    completedSize() {
      return this.todos.reduce((pre, todo) => pre + (todo.status ? 1 : 0), 0)
    },
    isAll: {
      get() {
        return this.completedSize == this.todos.length && this.completedSize > 0
      },
      set(value) {
        this.selectAllTodos(value)
      }
    }
  }
}
</script>

<style scoped lang="scss">
$containerHeight: 30px;

.container {
  width: 95%;
  height: $containerHeight;
  line-height: $containerHeight;
  //   border: 1px solid red;
  margin: 0 auto;
  input[type='checkbox'] {
    margin-right: 1em;
  }
  .clear {
    float: right;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: yellowgreen;
    font-size: 14px;
    height: 24px;
    line-height: 24px;
    margin-top: 2px;
    margin-right: 1em;
    padding: 0 5px;
  }
  .clear:hover {
    background: #ccc;
    cursor: pointer;
  }
}
</style>