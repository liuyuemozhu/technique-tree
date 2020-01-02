<template>
  <div id="app">
    <Header />
    <TodoList :todos="todos" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header'
import TodoList from './components/TodoList'
import Footer from './components/Footer'

export default {
  name: 'App',
  data() {
    return {
      todos: [
        { name: '第一件事', status: false },
        { name: '第二件事', status: false },
        { name: '第三件事', status: false }
      ]
    }
  },
  components: {
    Header,
    TodoList,
    Footer
  }
}
</script>

<style scoped lang="scss">
$appBorder: 1px solid #ccc;
#app {
  width: 60%;
  border: $appBorder;
  border-radius: 5px;
  margin: 0 auto;
  padding: 8px;
}
</style>
