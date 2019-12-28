<template>
  <h1 @click="updateColor" :class="{ color1: isA, color2: isB }">{{ msg }}</h1>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      msg: '这里是Footer',
      isA: true,
      isB: false
    }
  },
  methods: {
    updateColor() {
      this.isA = false
      this.isB = true
    }
  }
}
</script>

<style scoped>
h1 {
  background: blue;
}
.color1 {
  color: red;
}
.color2 {
  color: gray;
}
</style>
