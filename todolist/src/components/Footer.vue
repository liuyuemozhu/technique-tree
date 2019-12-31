<template>
  <div class="container">
    <input type="checkbox" />已完成：{{ finished }} / 全部：{{ total }}
    <div class="clear">清除已完成的任务</div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      finished: '0',
      total: '1'
    }
  }
}
</script>

<style scoped lang="scss">
$containerHeight: 30px;

.container {
  width: 95%;
  height: $containerHeight;
  line-height: $containerHeight;
  //   border: 1px solid red;
  margin: 0 auto;
  input[type='checkbox'] {
    margin-right: 1em;
  }
  .clear {
    float: right;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: yellowgreen;
    font-size: 14px;
    height: 24px;
    line-height: 24px;
    margin-top: 2px;
    margin-right: 1em;
  }
}
</style>