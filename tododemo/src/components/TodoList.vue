<template>
  <div class="container">
    <ul>
      <Item
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
        :index="index"
        :deleteItem="deleteItem"
      />
    </ul>
  </div>
</template>

<script>
import Item from './Item'
export default {
  name: 'TodoList',
  props: {
    todos: Array,
    deleteItem: Function
  },
  data() {
    return {}
  },
  components: {
    Item
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 95%;
  //   border: 1px solid red;
  margin: 0 auto;
  margin-bottom: 16px;
  ul {
    // width: 95%;
    // border: 1px solid blue;
    list-style: none;
    margin: 0 auto;
    padding-left: 0;
  }
}
</style>