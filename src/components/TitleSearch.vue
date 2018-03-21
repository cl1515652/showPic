<!--
 *
 * @authar _cl
 * @email aixiaojun.2013@gmail.com
 * @date 2018/3/2 17:44
 * @version v.0.0.1
 * @desc 标题栏搜索
 * ░░░░░░░░░░░░░░░░░░░░░░░░▄░░
 * ░░░░░░░░░▐█░░░░░░░░░░░▄▀▒▌░
 * ░░░░░░░░▐▀▒█░░░░░░░░▄▀▒▒▒▐
 * ░░░░░░░▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐
 * ░░░░░▄▄▀▒░▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐
 * ░░░▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌
 * ░░▐▒▒▒▄▄▒▒▒▒░░░▒▒▒▒▒▒▒▀▄▒▒
 * ░░▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐
 * ░▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄
 * ░▌░▒▄██▄▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒
 * ▀▒▀▐▄█▄█▌▄░▀▒▒░░░░░░░░░░▒▒▒
 *
 * 高山仰止,景行行止.虽不能至,心向往之。
 *
 *
 -->

<template>
  <div>
    <el-input
      placeholder="请输入搜索内容，例如：星星"
      class="search"
      size="mini"
    >
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
  </div>
</template>

<script>
    export default {
        name: "title-search"
    }
</script>

<style scoped>
  .search{
    border: none;
    border-bottom: 1px solid #dcdfe6;
    margin-top: 20px;
  }
</style>
