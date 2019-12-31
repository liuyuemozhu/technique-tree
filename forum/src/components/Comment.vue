<template>
  <div class="comment-container">
    <h4>{{ commentMsg }}</h4>
    <h4 v-show="comments.length == 0">暂无评论，请在左侧添加评论</h4>
    <ul>
      <Item
        v-for="(comment, index) in comments"
        :key="index"
        :comment="comment"
        :index="index"
        :deleteComment="deleteComment"
      />
    </ul>
  </div>
</template>

<script>
import Item from './Item'
export default {
  name: 'Comment',
  // 接收父组件传过来的属性
  // props: ['comments'],
  props: {
    comments: {
      type: Array
    },
    deleteComment: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      commentMsg: '评论内容:'
    }
  },
  components: {
    Item
  }
}
</script>

<style scoped lang="scss">
.comment-container {
  width: 60%;
  float: right;
  //   border: 1px solid red;
}
</style>