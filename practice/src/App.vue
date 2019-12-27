<template>
  <div id="app">
    <!-- component -->
    <Header />
    <Footer />
    <hr />
    <!-- radio -->
    <input
      type="radio"
      id="apple"
      name="radioName"
      value="苹果"
      v-model="radioVal"
    /><label for="apple">苹果</label>
    <input
      type="radio"
      id="orange"
      name="radioName"
      value="橘子"
      v-model="radioVal"
    /><label for="orange">橘子</label>
    <div>您的选择是：{{ radioVal }}</div>
    <!-- checkbox -->
    <input
      type="checkbox"
      id="Txu"
      name="checkboxName"
      value="T恤"
      v-model="checkboxVal"
    /><label for="Txu">T恤</label>
    <input
      type="checkbox"
      id="xuezi"
      name="checkboxName"
      value="靴子"
      v-model="checkboxVal"
    /><label for="xuezi">靴子</label>
    <input
      type="checkbox"
      id="kuzi"
      name="checkboxName"
      value="裤子"
      v-model="checkboxVal"
    /><label for="kuzi">裤子</label>
    <div>您的选择是：{{ checkboxVal }}</div>
    <!-- select -->
    <select v-model="selectVal">
      <option value="英雄联盟">英雄联盟</option>
      <option value="守望先锋">守望先锋</option>
      <option value="魔兽世界">魔兽世界</option>
    </select>
    <div>您的选择是：{{ selectVal }}</div>
    <!-- event -->
    <button @click="clickEvent">按钮</button><br />
    <!-- NextTick -->
    <button @click="btnClick" ref="btns">{{ msg }}</button>
    <hr />
    <!-- nextTick 的实际使用：使用swiper，axios请求数据（图片） -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in swiperList"
          :key="index"
        >
          <img :src="item" alt="" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- 如果需要滚动条 -->
      <div class="swiper-scrollbar"></div>
    </div>
    <hr />
    <UserName></UserName>
    <List></List>
    <Listsort></Listsort>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import UserName from "./components/Name";
import List from "./components/List";
import Listsort from "./components/Listsort";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    UserName,
    List,
    Listsort
  },
  data() {
    return {
      radioVal: "",
      checkboxVal: [],
      selectVal: "",
      msg: "旧的数据",
      swiperList: []
    };
  },
  methods: {
    clickEvent() {
      alert("点击了按钮");
    },
    btnClick() {
      this.msg = "新的数据";
      // 点击按钮后，视图层更改，但DOM并未更改
      // console.log(this.$refs.btns.innerHTML);
      this.$nextTick(() => {
        console.log(this.$refs.btns.innerHTML);
      });
    }
  },
  mounted() {
    this.axios.get("/api/swiper.json").then(res => {
      this.swiperList = res.data.swiperList;
    });
  },
  watch: {
    swiperList() {
      this.$nextTick(() => {
        new Swiper(".swiper-container");
      });
    }
  }
};
</script>

<style></style>
