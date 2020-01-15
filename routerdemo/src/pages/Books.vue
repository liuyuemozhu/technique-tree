<template>
  <div class="container_books">
    <ul>
      <li v-for="(book, index) in books" :key="index">
        <router-link :to="`/home/books/bookdetail/${book.id}`">{{
          book.title
        }}</router-link>
        <!-- <a href="javascript:;">{{ book.title }}</a> -->
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Books',
  data() {
    return {
      books: []
    }
  },
  mounted() {
    //   模拟ajax请求从后台获取数据
    setTimeout(() => {
      const books = [
        {
          id: 1,
          title: '平凡的世界'
        },
        {
          id: 2,
          title: '活着'
        },
        {
          id: 3,
          title: '最好的我们'
        },
        {
          id: 4,
          title: '旧时光'
        },
        {
          id: 5,
          title: '橘生淮南'
        }
      ]
      this.books = books
    }, 1000)
  },
  watch: {
    books: function(value) {}
  }
}
</script>

<style lang='scss' scoped>
ul {
  padding-left: 40px;
  margin-bottom: 1em;
}
</style>
