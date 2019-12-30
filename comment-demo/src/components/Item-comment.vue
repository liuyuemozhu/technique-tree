<template>
  <li>
    <div class="item-comment">
      <div class="btn-div">{{ delete_content }}</div>
      <p class="user">
        <span>{{ comment.name }}</span
        ><span>说：</span>
      </p>
      <p class="content">
        <span>{{ comment.content }}</span>
      </p>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Item-comment',
  // 声明接收属性：指定属性名和属性值类型
  props: {
    comment: Object
  },
  data() {
    return {
      delete_content: '删除'
    }
  }
}
</script>

<style scoped lang="scss">
li {
  list-style: none;
  .item-comment {
    height: 100px;
    border: 1px solid #ccc;
    margin: 5px 0;
    padding: 8px 12px;
    .btn-div {
      border: 1px solid #ccc;
      border-radius: 5px;
      width: fit-content;
      padding: 5px 10px;
      float: right;
      margin-right: 10px;
      margin-top: 5px;
    }
    .user {
      width: fit-content;
      span:first-of-type {
        font-size: 18px;
        font-weight: bold;
      }
    }
    .content {
      font-size: 14px;
      text-indent: 2em;
    }
  }
}
</style>
