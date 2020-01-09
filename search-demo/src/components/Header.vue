<template>
  <div class="container">
    <h1>Search GitHub Users</h1>
    <input
      type="text"
      placeholder="请输入想要查询的名字"
      v-model="searchValue"
      @keyup.enter="search"
    />
    <button @click="search">搜索</button>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'

export default {
  name: 'Header',
  data() {
    return {
      searchValue: ''
    }
  },
  methods: {
    search() {
      const searchName = this.searchValue.trim()
      if (searchName) {
        // 发布搜索的消息
        PubSub.publish('search', searchName)
      }
    }
  }
}
</script>

<style scoped lang='scss'>
button {
  cursor: pointer;
}
</style>