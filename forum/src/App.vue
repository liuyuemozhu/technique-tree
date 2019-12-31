<template>
  <div id="app">
    <Header />
    <Add :addComment="addComment" />
    <Comment :comments="comments" :deleteComment="deleteComment" />
  </div>
</template>

<script>
import Header from './components/Header'
import Add from './components/Add'
import Comment from './components/Comment'

export default {
  name: 'App',
  data() {
    return {
      comments: [
        // 数据在哪个组件上，操作数据的方法就定义在哪个组件上
        { name: 'Bob', content: '还可以' },
        { name: 'Cat', content: '不错' },
        { name: 'Jie', content: '挺好的' }
      ]
    }
  },
  components: {
    Header,
    Add,
    Comment
  },
  methods: {
    addComment(comment) {
      this.comments.unshift(comment)
    },
    deleteComment(index) {
      this.comments.splice(index, 1)
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#app {
  width: 70%;
  margin: 0 auto;
}
</style>
