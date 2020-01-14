<template>
  <div class="container_books">
    <ul>
      <li v-for="(book, index) in books" :key="index">{{ book }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Books',
  data() {
    return {
      books: ['平凡的世界', '活着', '最好的我们', '旧时光', '橘生淮南']
    }
  }
}
</script>

<style lang='scss' scoped>
ul {
  padding-left: 40px;
}
</style>
