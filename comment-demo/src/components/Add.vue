<template>
  <div class="add-container">
    <span>{{msg}}</span>
    <br />
    <input type="text" />
  </div>
</template>

<script>
export default {
  name: 'Add',
  data() {
    return {
      msg: '用户名:'
    }
  }
}
</script>

<style>
</style>