<template>
  <h1
    @click="changeColor"
    :class="classA"
    :style="{ fontSize: fontSize + 'px' }"
  >
    {{ msg }}
  </h1>
</template>

<script>
export default {
  name: 'header',
  data() {
    return {
      msg: '这里是Header',
      classA: 'changeColor',
      fontSize: 25
    }
  },
  methods: {
    changeColor() {
      this.classA = 'changeColor2'
    }
  }
}
</script>

<style scoped>
h1 {
  background: red;
}
.changeColor {
  color: greenyellow;
}
.changeColor2 {
  color: beige;
}
</style>
