<template>
  <div class="header" id="headerbar">
    <el-row>
      <el-col :span="6">
        <Logo></Logo>
      </el-col>
      <el-col :span="1">
        &nbsp;
      </el-col>
      <el-col :span="6">
        <TitleSearch></TitleSearch>
      </el-col>
      <el-col :span="1">
      &nbsp;
      </el-col>
      <el-col :span="8">
        <el-menu class="meunonbutton el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="5">首页</el-menu-item>
          <el-menu-item index="6">上传图片</el-menu-item>
          <el-menu-item index="7">标签图</el-menu-item>
          <el-menu-item index="8">关于</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Logo from '@/components/Logo'
  import TitleSearch from '@/components/TitleSearch'

  export default {
    name: "header-bar",
    methods: {
      handleSelect(key, keyPath) {
        //console.log(key);
        switch(key)
        {
          case '5':
            //console.log("in 5")
            this.$router.push({ name: 'indexlist'})
            break;
          case '6':
            //console.log("in 6")
            this.$router.push({ name: 'upLoadPic'})
            //上传图片按钮
            //this.upLoadPic();
            break;
          case '7':
            //console.log("in 7")
            this.$router.push({ name: 'TagShow'})
            break;
          case '8':
            //console.log("in 8")
            this.$router.push({ name: 'indexlist'})
            break;
        }
      },
    },
    components:{
      Logo,TitleSearch
    }
  }
</script>

<style>
  .meunonbutton{
    border-bottom:none;
  }
  .header{
    margin-top: 15px;
    margin-bottom: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #dcdfe6;
  }
</style>
