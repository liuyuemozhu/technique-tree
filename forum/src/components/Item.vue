<template>
  <li>
    <div class="itemDiv">
      <div class="deleteDiv" @click="deleteItem">删除</div>
      <p>{{ comment.name }}<span>：</span></p>
      <p>{{ comment.content }}</p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Item',
  //   接收父组件的数据
  props: {
    comment: Object,
    index: Number,
    deleteComment: {
      type: Function,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {
    deleteItem() {
      const { comment } = this
      if (window.confirm(`确定要删除${comment.name}的评论吗？`)) {
        this.deleteComment(this.index)
      }
    }
  }
}
</script>

<style scoped lang="scss">
$border: 1px solid #ccc;

li {
  list-style: none;
  margin: 5px;
  .itemDiv {
    padding: 5px 10px;
    width: 100%;
    height: 100px;
    border: $border;
    .deleteDiv {
      padding: 5px 10px;
      border: $border;
      border-radius: 5px;
      width: fit-content;
      float: right;
      margin: 10px;
    }
    p:first-of-type {
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
