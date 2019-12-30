<template>
  <li>
    <div class="itemDiv">
      <div class="deleteDiv">删除</div>
      <p>{{ comment.name }}</p>
      <p>{{ comment.content }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Item',
  //   接收父组件的数据
  props: {
    comment: Object
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
$border: 1px solid #ccc;

li {
  list-style: none;
  margin: 5px;
  .itemDiv {
    width: 100%;
    height: 100px;
    border: $border;
  }
  .deleteDiv {
    padding: 5px 10px;
    border: $border;
    border-radius: 5px;
    width: fit-content;
    float: right;
    margin: 10px;
  }
}
</style>
