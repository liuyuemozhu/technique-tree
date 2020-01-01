<template>
  <div class="container">
    <input
      type="text"
      placeholder="请输入任务名称，按回车键确认"
      v-model="mission"
      @keyup.enter="giveMission"
    />
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      mission: ''
    }
  },
  methods: {
    giveMission() {
      // 1.检测用户输入的合法性 --- 解构赋值（虽然多此一举，但是练习ES6的解构啊）
      const { mission } = this
      if (mission == '') {
        alert('请输入具体任务名称')
        return
      }
      // 2.子组件向父组件传值 --- 任务名称
      this.$emit('give-mission', this.mission)
      // 3.任务名称输入完成后，清空输入框
      this.mission = ''
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