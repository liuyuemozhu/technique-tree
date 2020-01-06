<template>
  <div class="container">
    <input
      type="text"
      placeholder="请输入任务名称，按回车键确认"
      v-model="name"
      @keyup.enter="giveTodo"
    />
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    addTodo: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      name: '',
      status: false
    }
  },
  methods: {
    giveTodo() {
      // 1.检查用户输入合法性
      let name = this.name.trim()
      let status = this.status
      if (!name) {
        alert('请输入具体任务名称')
        return
      }
      // 2.封装对象
      let todo = { name, status }
      // 3.添加数据
      this.addTodo(todo)
      // 4.清空输入框
      this.name = ''
    }
  }
}
</script>

<style scoped lang="scss">
$inputHeight: 30px;

.container {
  width: 95%;
  margin: 0 auto;
  //   border: 1px solid red;
  margin-bottom: 16px;
  input {
    width: 99%;
    height: $inputHeight;
    display: block;
    margin: 0 auto;
  }
}
</style>