<template>
  <div class="add-container">
    <span>{{ msg }}</span>
    <br />
    <input type="text" />
    <br />
    <span>{{ content }}</span>
    <br />
    <textarea name="" id="" cols="30" rows="10"></textarea>
  </div>
</template>

<script>
export default {
  name: 'Add',
  data() {
    return {
      msg: '用户名:',
      content: '评论内容:'
    }
  }
}
</script>

<style scoped lang="scss">
.add-container {
  // border: 1px solid blue;
  display: inline-block;
  width: 30%;
  input:first-of-type {
    margin-bottom: 1em;
    width: 100%;
  }
  textarea {
    width: 100%;
  }
}
</style>
