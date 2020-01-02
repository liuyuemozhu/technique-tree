<template>
  <div class="container">
    <ul>
      <!-- 当前组件传值给其子组件 -->
      <Item
        v-for="(item, index) in mission"
        :key="index"
        :item="item"
        :index="index"
        :itemSum="mission.length"
        @finishedNum="receiveFinishedNum"
        :isAll="isAll"
      />
    </ul>
  </div>
</template>

<script>
import Item from './Item'
export default {
  name: 'TodoList',
  // TodoList当前组件通过 props 接收父组件的值
  props: {
    mission: Array,
    isAll: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      indexArr: []
    }
  },
  components: {
    Item
  },
  methods: {
    receiveFinishedNum(isChecked, index) {
      // 对象解构赋值
      let { indexArr } = this
      if (isChecked) {
        // checkbox 此时为选中状态
        indexArr.push(index)
        this.$emit('finishedNumToApp', indexArr.length)
      } else {
        // checkbox 此时为未选中状态
        if (indexArr.indexOf(index) >= 0) {
          // 如果 indexArr 中含有当前元素，则删除
          indexArr.splice(indexArr.indexOf(index), 1)
          this.$emit('finishedNumToApp', indexArr.length)
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  width: 95%;
  //   border: 1px solid red;
  margin: 0 auto;
  margin-bottom: 16px;
  ul {
    // width: 95%;
    // border: 1px solid blue;
    list-style: none;
    margin: 0 auto;
    padding-left: 0;
  }
}
</style>