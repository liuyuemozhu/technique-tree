<template>
  <div class="container">
    <button @click="destroyVM">销毁vm</button>
    <p v-show="isShow">每隔一秒钟切换显示隐藏</p>
  </div>
</template>

<script>
export default {
  name: 'LifeCycle',
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    destroyVM() {
      this.$destroy()
    }
  },
  mounted() {
    this.intervalId = setInterval(() => {
      console.log('-----')
      this.isShow = !this.isShow
    }, 1000)
  },
  beforeDestroy() {
    clearInterval(this.intervalId)
  }
}
</script>

<style scoped></style>
