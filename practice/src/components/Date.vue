<template>
  <div class="container">
    <h2>显示格式化的日期</h2>
    <p>{{ date }}</p>
    <p>格式化：{{ date | dateString }}</p>
  </div>
</template>

<script>
import Vue from "vue";
Vue.filter("dateString", function(value) {
  return value.toLocaleString();
});
export default {
  name: "Date",
  data() {
    return {
      date: new Date()
    };
  }
};
</script>

<style scoped></style>
