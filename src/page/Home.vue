<template>
  <div>
    <!-- 主页面 -->
    <router-view/>

  </div>
</template>

<script>
  import SubjectView from "@/page/SubjectView"

  export default {
    name: "index",
    data() {
      return {}
    },
    components:{
      SubjectView
    }

  }

</script>

<style scoped>

</style>
