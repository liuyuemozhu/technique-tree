<template>
  <div class="container">
    <input type="text" placeholder="请输入任务名称，按回车键确认" />
  </div>
</template>

<script>
export default {
  name: 'Header'
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