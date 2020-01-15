<template>
  <div>
    <header>
      <router-link to="/home/news" class="header-news">
        <span>News</span>
      </router-link>
      <router-link to="/home/books" class="header-books">
        <span>Books</span>
      </router-link>
      <!-- <span class="header-news">News</span> -->
    </header>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang='scss'>
header {
  width: 100%;
  height: 50px;
  margin-bottom: 10px;
  //   border: 1px solid red;
  display: flex;
  .header-news,
  .header-books {
    width: 50%;
    border: 1px solid blue;
    border-radius: 10px;
    color: black;
    text-align: center;
    line-height: 50px;
    text-decoration: none;
  }
}
</style>