<template>
  <div id="app">
    <Header @give-mission="showMission" />
    <!-- 父组件将接收Header组件的值传给需要的子组件 -->
    <TodoList :mission="mission" />
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
      mission: []
    }
  },
  methods: {
    showMission(mission) {
      // 接收Header子组件传过来的值，并赋值给当前(父)组件，以便用于向其他子组件传值
      this.mission.push(mission)
      console.log(mission)
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
  margin: 0 auto;
  padding: 8px;
}
</style>
