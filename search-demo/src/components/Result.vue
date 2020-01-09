<template>
  <div class="con">
    <h2 v-if="firstView">输入用户名搜索</h2>
    <h2 v-if="loading">Loading...</h2>
    <h2 v-if="errorMessage">{{ errorMessage }}</h2>

    <div class="con_result">
      <div class="container" v-for="(user, index) in users" :key="index">
        <div class="photo">
          <a :href="user.url" target="_blank">
            <img :src="user.src" alt="" width="100px" height="100px" />
          </a>
        </div>
        <p class="userName">{{ user.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import PubSub from 'pubsub-js'
import axios from 'axios'

export default {
  name: 'Result',
  data() {
    return {
      firstView: true,
      loading: false,
      users: null,
      errorMessage: ''
    }
  },
  mounted() {
    //   订阅搜索的消息
    PubSub.subscribe('search', (msg, searchName) => {
      const url = `https://api.github.com/search/users?q=${searchName}`

      // 更新状态为请求中
      this.firstView = false
      this.loading = true
      this.users = null
      this.errorMessage = ''

      // ajax 请求成功
      axios
        .get(url)
        .then(response => {
          const result = response.data
          const users = result.items.map(item => ({
            url: item.html_url,
            src: item.avatar_url,
            name: item.login
          }))
          // 成功 更新状态（成功）
          this.loading = false
          this.users = users
        })
        .catch(error => {
          //   失败 更新状态（失败）
          this.loading = false
          this.errorMessage = '请求失败了'
        })
    })
  },
  components: {}
}
</script>

<style scoped lang='scss'>
.con {
  //   border: 1px solid red;
  margin: 0 auto;
}

.con_result {
  width: 852px;
  height: 400px;
  //   border: 1px solid red;
  margin: 50px auto;
  display: flex;
  flex-wrap: wrap;
}

.container {
  width: 150px;
  height: 150px;
  //   border: 1px solid #ccc;
  border-radius: 10px;
  margin: 5px 10px;
  .photo {
    width: 100px;
    height: 100px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin: 0 auto;
  }
}
</style>
