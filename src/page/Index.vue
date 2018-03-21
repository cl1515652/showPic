<template>
  <div>
    <HeaderBar></HeaderBar>
    <router-view/>
    <FooterBar></FooterBar>
  </div>
</template>

<script>
  import HeaderBar from '@/components/HeaderBar'
  import FooterBar from '@/components/FooterBar'

  export default {
    name: "index",
    components:{
      HeaderBar,FooterBar
    },
    data() {
      return {}
    }

  }

</script>

<style scoped>

</style>
