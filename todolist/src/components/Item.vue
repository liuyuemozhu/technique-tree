<template>
  <li>
    <input
      type="checkbox"
      v-model="isChecked"
      :value="value"
      @click="emitFinishedNum"
    />
    <a href="javascript:;" :class="{ active: isChecked }">{{ item }}</a>
  </li>
</template>

<script>
export default {
  name: 'Item',
  // 接收父组件（TodoList）的传值
  props: ['item', 'index', 'itemSum', 'value'],
  data() {
    return {
      isChecked: false
    }
  },
  methods: {
    emitFinishedNum() {
      // 1.toggle the attribute named 'isChecked'
      this.isChecked = !this.isChecked
      // 2.无论是否被选中，都向父组件发送 选中状态 和 当前checkbox的索引值
      if (this.isChecked) {
        this.$emit('finishedNum', this.isChecked, this.index)
      } else {
        this.$emit('finishedNum', this.isChecked, this.index)
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
  a {
    color: #000;
    text-decoration: none;
    cursor: default;
  }
}
.active {
  text-decoration: line-through;
}
</style>