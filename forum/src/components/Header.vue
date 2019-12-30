<template>
  <div class="header">
    <h2>{{ headerMsg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      headerMsg: '请发表对Vue的看法'
    }
  }
}
</script>

<style scoped lang="scss">
$backgroundColor: #ccc;
$height: 80px;

.header {
  background: $backgroundColor;
  height: $height;
  line-height: $height;
  text-align: center;
  margin-bottom: 30px;
}
</style>