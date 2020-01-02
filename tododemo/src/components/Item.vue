<template>
  <li>
    <input type="checkbox" v-model="todo.status" />
    <a href="javascript:;">{{ todo.name }}</a>
  </li>
</template>

<script>
export default {
  name: 'Item',
  props: {
    todo: Object
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
  input[type='checkbox'] {
    margin-right: 1em;
  }
  a {
    color: #000;
    text-decoration: none;
    cursor: default;
  }
}
.active {
  text-decoration: line-through;
}
</style>