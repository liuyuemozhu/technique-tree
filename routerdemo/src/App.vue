<template>
  <div id="app">
    <router-view />
    <footer>
      <router-link to="/about" class="footer-about">
        <span>About</span>
      </router-link>
      <router-link to="/home" class="footer-home">
        <span>Home</span>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  footer {
    // border-top: 1px solid red;
    height: 50px;
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    .footer-about,
    .footer-home {
      width: 50%;
      text-align: center;
      line-height: 50px;
      border: 1px solid blue;
      border-radius: 10px;
      text-decoration: none;
      font-size: 14px;
      span::before {
        content: '\2650';
      }
    }
    .footer-home {
      span::before {
        content: '\264B';
      }
    }
  }

  // 给当前激活的路由链接添加样式
  .router-link-active {
    // background: greenyellow;
    color: red;
  }
}
</style>
