<template>
  <div class="add-container">
    <form action="">
      <span>{{ addMsg }}</span>
      <br />
      <input type="text" placeholder="请输入用户名" v-model="name" />
      <br />
      <span>{{ commentContent }}</span>
      <br />
      <textarea
        name=""
        id=""
        cols="30"
        rows="10"
        placeholder="请输入评论内容"
        v-model="content"
      ></textarea>
      <br />
      <button class="subm" @click="addItem">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Add',
  //   接收父组件传的方法
  props: {
    addComment: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      addMsg: '用户名:',
      commentContent: '评论内容：',
      name: '',
      content: ''
    }
  },
  methods: {
    //   为“提交”按钮添加方法：
    addItem() {
      // 1.检查输入内容合法性
      const name = this.name
      const content = this.content
      // 2.输入内容封装为对象
      const comment = {
        name,
        content
      }
      // 3.添加数据
      this.addComment(comment)
    }
  }
}
</script>

<style scoped lang="scss">
.add-container {
  width: 35%;
  display: inline-block;
  //   border: 1px solid red;
  input:first-of-type {
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
  }
  textarea {
    width: 100%;
  }
  .subm {
    padding: 5px 10px;
  }
}
</style>