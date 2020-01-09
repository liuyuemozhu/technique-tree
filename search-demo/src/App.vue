<template>
  <div id="app">
    <Header />
    <Result />
  </div>
</template>

<script>
import Header from './components/Header'
import Result from './components/Result'

export default {
  name: 'App',
  components: {
    Header,
    Result
  }
}
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
