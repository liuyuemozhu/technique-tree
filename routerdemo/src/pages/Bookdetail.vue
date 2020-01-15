<template>
  <div class="container_bookdetail">
    <p>ID: {{ $route.params.id }}</p>
    <ul>
      <li>id: {{ bookdetail.id }}</li>
      <li>title: {{ bookdetail.title }}</li>
      <li>content: {{ bookdetail.content }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Bookdetail',
  data() {
    return {
      bookdetail: {}
    }
  },
  mounted() {
    setTimeout(() => {
      const allbookdetail = [
        {
          id: 1,
          title: '平凡的世界',
          content: '路遥出品，经典读物'
        },
        {
          id: 2,
          title: '活着',
          content: '余华出品'
        },
        {
          id: 3,
          title: '最好的我们',
          content: '八月长安，振华三部曲其一'
        },
        {
          id: 4,
          title: '旧时光',
          content: '八月长安，振华三部曲其二'
        },
        {
          id: 5,
          title: '平凡的世界',
          content: '八月长安，振华三部曲其三'
        }
      ]
      this.allbookdetail = allbookdetail
      const id = this.$route.params.id * 1 // 乘以1是把字符串类型的数据转为数值型
      this.bookdetail = allbookdetail.find(detail => detail.id === id)
    }, 1000)
  },
  watch: {
    $route: function(value) {
      const id = value.params.id * 1
      this.bookdetail = this.allbookdetail.find(detail => detail.id === id)
    }
  }
}
</script>

<style lang="scss">
.container_bookdetail {
  margin: 1em 40px 0;
}
</style>