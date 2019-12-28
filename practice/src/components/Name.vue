<template>
  <div class="template">
    <span>姓：</span>
    <input type="text" placeholder="请输入姓氏" v-model="firstName" />
    <br />
    <span>名：</span>
    <input type="text" placeholder="请输入名" v-model="lastName" />
    <br />
    <span>姓名1（单向）</span>
    <input type="text" placeholder="姓名单向1" v-model="fullName1" />
    <br />
    <span>姓名2（单向）</span>
    <input type="text" placeholder="姓名单向2" v-model="fullName2" />
    <br />
    <span>姓名3（双向）</span>
    <input type="text" placeholder="姓名单向3" v-model="fullName3" />
    <br />

    <p>{{ fullName1 }}</p>
    <p>{{ fullName1 }}</p>
    <p>{{ fullName1 }}</p>
  </div>
</template>

<script>
export default {
  name: 'UserName',
  data() {
    return {
      firstName: 'A',
      lastName: 'B',
      fullName2: 'A C'
    }
  },
  computed: {
    //   初始化显示、相关的data属性发生改变时，computed内的方法执行
    fullName1() {
      console.log('fullName()')
      return this.firstName + ' ' + this.lastName
    },
    fullName3: {
      get() {
        return this.firstName + ' ' + this.lastName
      },
      set(value) {
        const names = value.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  watch: {
    firstName: function(value) {
      console.log(this)
      this.fullName2 = value + ' ' + this.lastName
    }
  }
}
</script>

<style scoped></style>
