<template>
  <li @mouseenter="handleEnter(true)" @mouseleave="handleEnter(false)">
    <input type="checkbox" v-model="todo.status" />
    <a href="javascript:;" :class="{ active: todo.status }">{{ todo.name }}</a>
    <button class="btn_delete" v-show="isShow" @click="deleteTodo">删除</button>
  </li>
</template>

<script>
export default {
  name: 'Item',
  props: {
    todo: Object,
    index: Number,
    deleteItem: Function
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    handleEnter(isEnter) {
      this.isShow = isEnter
    },
    deleteTodo() {
      const { todo, index } = this
      if (window.confirm(`确认删除 “${todo.name}” 的任务吗？`)) {
        this.deleteItem(this.index)
      }
    }
  }
}
</script>

<style scoped lang="scss">
$liHeight: 30px;

li {
  border: 1px solid #ccc;
  height: $liHeight;
  line-height: $liHeight;
  margin: 8px auto;
  &:hover {
    background: #ccc;
  }
  input[type='checkbox'] {
    margin-right: 1em;
  }
  a {
    color: #000;
    text-decoration: none;
    cursor: default;
  }
  .btn_delete {
    float: right;
    margin-top: 5px;
    margin-right: 10px;
    background: orange;
    border: none;
    border-radius: 5px;
  }
}
.active {
  text-decoration: line-through red;
}
</style>