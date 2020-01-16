<template>
  <div class="container_news">
    <ul>
      <li v-for="(item, index) in news" :key="index">{{ item }}</li>
    </ul>
    <hr />
    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  name: 'News',
  props: {
    msg: String
  },
  data() {
    return {
      news: ['第一条新闻', '第二条新闻', '第三条新闻', '第四条新闻']
    }
  }
}
</script>

<style scoped lang='scss'>
ul {
  //   border: 1px solid red;
  padding-left: 40px;
}
p {
  margin-left: 40px;
}
</style>