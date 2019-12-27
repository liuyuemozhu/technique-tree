<template>
  <div class="list-container">
    <h3>列表渲染</h3>
    <h4>v-for 遍历数组</h4>
    <ul>
      <li v-for="(item, index) in fruit" :key="index">
        第 {{ index + 1 }} 种水果是 {{ item.name }} ，价格是：{{ item.price }}
        <button @click="deleteFruit(index)">删除</button>
        <button @click="updateFruit(index, { name: 'banana', price: 3 })">
          更新
        </button>
      </li>
    </ul>
    <h4>v-for 遍历对象</h4>
    <ul>
      <li v-for="(value, key) in fruit[0]" :key="key">
        {{ key }} -- {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      fruit: [
        { name: "apple", price: 2 },
        { name: "orange", price: 2.5 },
        { name: "peach", price: 1.5 },
        { name: "pear", price: 2.2 }
      ]
    };
  },
  methods: {
    deleteFruit(index) {
      console.log("点击了第" + " " + index + " " + "个delete按钮");
      this.fruit.splice(index, 1);
    },
    updateFruit(index, newF) {
      console.log("点击了update按钮");
      this.fruit.splice(index, 1, newF);
    }
  }
};
</script>

<style scoped></style>
