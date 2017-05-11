<template>
  <div>   
    <router-link :to="{path: '/learnComponent'}">go to learnComponent</router-link>    
    <router-link :to="{path: '/hello'}">Hello</router-link>
    <router-link :to="{name: 'c2f'}">CtoF</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  .my-nav {
    position: fixed;
    top: 60px;
    padding: 0 10px;
  }
  .my-nav a {
    display: block;
    margin-bottom: 10px;
  }
</style>
