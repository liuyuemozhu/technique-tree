<template>
  <div class="main-container">
    <Add :addComment="addComment" />
    <Comment :comments="comments" />
  </div>
</template>

<script>
import Add from './Add'
import Comment from './Comment'

export default {
  name: 'Main',
  data() {
    return {
      comments: [
        // 数据在哪个组件，更新数据的方法就应该定义在哪个方法
        { name: 'Bob', content: '还可以' },
        { name: 'Cat', content: '有些难' },
        { name: 'Jie', content: '挺好用' }
      ]
    }
  },
  components: {
    Add,
    Comment
  },
  methods: {
    // 添加评论
    addComment(comment) {
      this.comments.unshift(comment)
    }
  }
}
</script>

<style scoped lang="scss">
$main-width: 80%;
.main-container {
  width: $main-width;
  // border: 1px solid red;
  margin: 1em auto;
}
</style>
