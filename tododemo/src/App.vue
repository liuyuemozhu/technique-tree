<template>
  <div id="app">
    <!-- <Header :addTodo="addTodo" /> -->
    <!-- <Header @addTodo="addTodo"></Header> -->
    <Header ref="header"></Header>
    <TodoList :todos="todos" :deleteItem="deleteItem" />
    <Footer
      :todos="todos"
      :deleteCompletedTodos="deleteCompletedTodos"
      :selectAllTodos="selectAllTodos"
    />
    <Request></Request>
    <!-- <div v-if="!repoUrl">loading...</div>
    <div v-else>
      最受欢迎的库：<a :href="repoUrl" target="_blank">{{ repoName }}</a>
    </div> -->
  </div>
</template>

<script>
// import axios from 'axios'
import Header from './components/Header'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import Request from './components/Request'

export default {
  name: 'App',
  data() {
    return {
      // todos: [
      //   { name: '第一件事', status: false },
      //   { name: '第二件事', status: false },
      //   { name: '第三件事', status: false }
      // ]
      todos: JSON.parse(window.localStorage.getItem('todo_key') || '[]')
      // repoUrl: '',
      // repoName: ''
    }
  },
  mounted() {
    // 执行异步代码，给Header绑定 addTodo 事件监听
    this.$refs.header.$on('addTodo', this.addTodo)

    // ajax 获取数据
    // const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
    // axios
    //   .get(url)
    //   .then(response => {
    //     const result = response.data
    //     const mostRepo = result.items[0]
    //     this.repoUrl = mostRepo.html_url
    //     this.repoName = mostRepo.name
    //   })
    //   .catch(error => {
    //     alert('获取失败')
    //   })
  },
  methods: {
    // 添加任务
    addTodo(todo) {
      this.todos.unshift(todo)
    },
    deleteItem(index) {
      this.todos.splice(index, 1)
    },
    // 删除所有选中的todos
    deleteCompletedTodos() {
      this.todos = this.todos.filter(todo => !todo.status)
    },
    // 全选/全不选
    selectAllTodos(isChecked) {
      this.todos.forEach(todo => (todo.status = isChecked))
    }
  },
  watch: {
    todos: {
      deep: true, // 深度监视
      handler: function(value) {
        // 将todos最新值保存到localstorage中
        window.localStorage.setItem('todo_key', JSON.stringify(value))
      }
    }
  },
  components: {
    Header,
    TodoList,
    Footer,
    Request
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
