<template>
  <div class="main-container">
    <Add />
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
        { name: 'Bob', content: '还可以' },
        { name: 'Cat', content: '有些难' },
        { name: 'Jie', content: '挺好用' }
      ]
    }
  },
  components: {
    Add,
    Comment
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
