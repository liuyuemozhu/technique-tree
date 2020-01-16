<template>
  <div class="container_about">
    <span>About</span>
    <br />
    <span>缓存路由：</span>
    <input type="text" placeholder="请输入值，切换组件查看是否保留" />
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped lang='scss'>
.container_about {
  //   border: 1px solid red;
  margin: 1em;
  input {
    width: 100%;
  }
}
</style>