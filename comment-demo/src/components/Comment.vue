<template>
  <div class="comment-container">
    <h3>{{ msg }}</h3>
    <ul>
      <Item
        v-for="(comment, index) in comments"
        :key="index"
        :comment="comment"
      />
    </ul>
  </div>
</template>

<script>
import Item from './Item-comment'

export default {
  name: 'Comment',
  // 声明接收属性：这个属性就会成为组件对象的属性。以下方式只指定属性名
  props: ['comments'],
  data() {
    return {
      msg: '评论回复：'
    }
  },
  components: {
    Item
  }
}
</script>

<style scoped lang="scss">
.comment-container {
  // border: 1px solid red;
  float: right;
  width: 69%;
  ul {
    // border: 1px solid blue;
    padding: 8px 12px;
  }
}
</style>
