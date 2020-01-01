<template>
  <div id="app">
    <Header @give-mission="showMission" />
    <!-- 父组件(App)将接收Header组件的值传给需要的子组件 -->
    <TodoList
      :mission="mission"
      @finishedNumToApp="receiveFinishedNumFromTodoList"
    />
    <!-- 父组件(App)将接收Header组件的mission数组总长度值传给Footer组件，以更新其组件的“全部”数目 -->
    <Footer :total="mission.length" :finishedNum="finishedNum" />
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
      mission: [],
      finishedNum: 0
    }
  },
  methods: {
    showMission(mission) {
      // 接收Header子组件传过来的值，并赋值给当前(父)组件，以便用于向其他子组件传值
      this.mission.push(mission)
    },
    receiveFinishedNumFromTodoList(finishedNum) {
      this.finishedNum = finishedNum
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
