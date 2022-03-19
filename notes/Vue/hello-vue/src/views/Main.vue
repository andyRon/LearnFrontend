<template>
  <div>
    <h1>首页。。。。</h1>
    <router-link to="/user/list">用户列表</router-link>
    <router-link to="/user/profile">个人信息</router-link>

    <br>
    <br>
    <br>
    <br>
    <router-view></router-view>
  </div>




</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style scoped>

</style>
