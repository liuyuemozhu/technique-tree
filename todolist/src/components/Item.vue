<template>
  <li><input type="checkbox" />{{ item }}</li>
</template>

<script>
export default {
  name: 'Item',
  props: ['item'],
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
$liHeight: 30px;

li {
  border: 1px solid #ccc;
  height: $liHeight;
  line-height: $liHeight;
  margin: 8px auto;
  input[type='checkbox'] {
    margin-right: 1em;
  }
}
</style>