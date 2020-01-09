<template>
  <div>
    <div v-if="!repoUrl">loading...</div>
    <div v-else>
      最受欢迎的库：<a :href="repoUrl" target="_blank">{{ repoName }}</a>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'Request',
  data() {
    return {
      repoUrl: '',
      repoName: ''
    }
  },
  mounted() {
    const axios = require('axios')
    const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
    // const url = 'src/api/repository.json'
    //   使用 axios 发送 ajax 请求
    axios
      .get(url)
      .then(response => {
        const result = response.data
        // 得到最受欢迎的搜索结果
        const mostRepo = result.items[0]
        this.repoUrl = mostRepo.html_url
        this.repoName = mostRepo.name
      })
      .catch(error => {
        alert('获取失败')
      })
  }
}
</script>

<style>
</style>