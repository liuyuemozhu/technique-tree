<template>
  <!-- 列表的搜索和排序 -->
  <div class="contaner">
    <input type="text" v-model="searchName" />
    <ul>
      <li v-for="(item, index) in filterFruit" :key="index">
        {{ index }} --- {{ item.name }} --- {{ item.price }}
      </li>
    </ul>
    <button @click="setOrderType(1)">价格升序</button>
    <button @click="setOrderType(2)">价格降序</button>
    <button @click="setOrderType(0)">原本顺序</button>
  </div>
</template>

<script>
export default {
  name: 'Listsort',
  data() {
    return {
      searchName: '',
      orderType: 0,
      fruit: [
        { name: 'apple', price: 2 },
        { name: 'orange', price: 2.5 },
        { name: 'peach', price: 1.5 },
        { name: 'pear', price: 2.2 }
      ]
    };
  },
  computed: {
    filterFruit() {
      //   解构赋值
      const { searchName, fruit, orderType } = this;
      // 定义最终返回的数组变量
      let finalFruit;
      finalFruit = this.fruit.filter(
        item => item.name.indexOf(searchName) >= 0
      );
      if (orderType != 0) {
        //   0 表示原本顺序，1 表示升序，2 表示降序
        finalFruit.sort(function(fruit1, fruit2) {
          // 如果返回负数fruit1在前，如果返回正数fruit2在前
          if (orderType == 1) {
            return fruit1.price - fruit2.price;
          } else if (orderType == 2) {
            return fruit2.price - fruit1.price;
          }
        });
      }
      return finalFruit;
    }
  },
  methods: {
    setOrderType(index) {
      this.orderType = index;
    }
  }
};
</script>

<style scoped></style>
