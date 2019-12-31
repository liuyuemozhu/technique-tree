<template>
  <div class="add-container">
    <form action>
      <span>{{ msg }}</span>
      <br />
      <input type="text" placeholder="请填写用户名" v-model="name" />
      <br />
      <span>{{ userCon }}</span>
      <br />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="请填写评论内容"
        v-model="content"
      ></textarea>
      <button class="subm" @click.prevent="add">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Add',
  props: {
    addComment: Function
  },
  data() {
    return {
      msg: '用户名:',
      userCon: '评论内容:',
      name: '',
      content: ''
    }
  },
  methods: {
    add() {
      // 1.检查输入的合法性
      const name = this.name.trim()
      const content = this.content.trim()
      if (!name || !content) {
        alert('用户名或评论内容不能为空')
        return
      }
      // 2.根据输入的数据，封装成comment对象
      const comment = {
        name: name,
        content: content
      }
      // 3.添加到contents里面去
      this.addComment(comment)
      // 4.清除输入
      this.name = ''
      this.content = ''
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
    height: 30px;
  }
  textarea {
    width: 100%;
  }
  .subm {
    padding: 5px 10px;
    float: right;
  }
}
</style>
