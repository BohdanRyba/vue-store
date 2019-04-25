<template>
  <div id="app">
    <top-info-bar></top-info-bar>
    <div id="nav">
      <Megamenu>{{$t('megamenu-btn')}}</Megamenu>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Megamenu from "@/components/Megamenu";
@Component({
  components: {
    Megamenu
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Arial", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
