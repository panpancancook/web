<template>
  <div class="home">
    <div class="aside">
      <SideBar />
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
  import SideBar from '../components/SideBar'

  export default {
    name: 'Home',
    components: {
      SideBar
    },
    data() {
      return {
      }
    },
    created() {
    }
  }
</script>

<style lang="scss" scoped>
  .home{
    display: flex;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .aside{
    width: 300px;
  }

  .container{
    height: 100vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    box-sizing: border-box;
  }

  .header{
    width: 100%;
    min-height: 10vh;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 20px;
    margin: 20px 0 10px 0;
  }

  .search{
    width: 500px;
    margin: 0 0 0 50px;
  }
</style>
