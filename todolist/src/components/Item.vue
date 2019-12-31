<template>
  <li><input type="checkbox" v-model="isChecked" @click="test" />{{ item }}</li>
</template>

<script>
export default {
  name: 'Item',
  // 接收父组件（TodoList）的传值
  props: ['item', 'index'],
  data() {
    return {
      isChecked: false
    }
  },
  methods: {
    test() {
      this.isChecked = !this.isChecked
      if (this.isChecked) {
        // 传值给 Footer 组件，并更新“已完成”。需要先传值给App组件
      }
    }
  }
}
</script>

<style scoped lang="scss">
$liHeight: 30px;

li {
  border: 1px solid #ccc;
  height: $liHeight;
  line-height: $liHeight;
  margin: 8px auto;
  input[type='checkbox'] {
    margin-right: 1em;
  }
}
</style>