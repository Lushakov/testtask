<template>
  <div class="container">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="right-content-block">
      <MainHeader />
      <Breadcrumbs />
      <Nuxt />
    </div>
  </div>
</template>
<script>
import MainHeader from '../components/MainHeader'
import Sidebar from '../components/Sidebar'
import Breadcrumbs from '../components/Breadcrumbs'
export default {
  components: {
    MainHeader,
    Sidebar,
    Breadcrumbs,
  },
}
</script>

<style scoped>
.sidebar {
  box-sizing: border-box;
  position: fixed;
  width: 150px;
  height: 100%;
  border-right: 2px solid #ededed;
  border-bottom: 2px solid #ededed;
  background: #fff;
}
.right-content-block {
  box-sizing: border-box;
  padding-left: 150px;
  width: 100%;
  height: 200px;
}
</style>
