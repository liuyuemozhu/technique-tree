<template>
  <div class="header-container">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      msg: '请发表对Vue的评论'
    }
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

$header-height: 100px;
$header-color: #ccc;

.header-container {
  height: $header-height;
  background: $header-color;
  h2 {
    line-height: $header-height;
    text-align: center;
  }
}
</style>
