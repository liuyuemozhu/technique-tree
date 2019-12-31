<template>
  <div class="container">
    <ul>
      <!-- 当前组件传值给其子组件 -->
      <Item v-for="(item, index) in mission" :key="index" :item="item" />
    </ul>
  </div>
</template>

<script>
import Item from './Item'
export default {
  name: 'TodoList',
  // TodoList当前组件通过 props 接收父组件的值
  props: ['mission'],
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