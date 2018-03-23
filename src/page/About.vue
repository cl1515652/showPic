<!--
 *
 * @authar _cl
 * @email aixiaojun.2013@gmail.com
 * @date 2018/3/21 11:29
 * @version v.0.0.1
 * @desc 关于页面
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
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span >开发思路</span>
      </div>
      <div style="margin-bottom: 10px;" class="text item">
        <div>
          1. 自己独立开发一款类似于图片浏览器之类的网站。<br/>
          2. 使用比较新的框架和技术。<br/>
          3. 锻炼提升自己开发能力。<br/>
          4. 向着全栈开发，架构设计前进<br/>
        </div>
      </div>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span >涉及技术</span>
      </div>
      <div style="margin-bottom: 10px;" class="text item">
        <div>
          <pre>
            1. 前端技术
                VUE 2.0 前端框架以及相应的组件
                  axios-jsonp
                  echarts
                  element-ui
                  vue
                  vue-router
                  vuex
            2. 后端技术
                1. java Spring Boot
                2. mongoDB 驱动直连数据库
            3. 数据库
              mongodb
            4. 环境
              webDNS服务器         NGINX  挂载
              图片服务器：          NGINX 挂载
              springBoot服务器：   spring boot 项目 maven 导出 jar 包 JAVA8 运行
          </pre>
        </div>
      </div>
    </el-card>



    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span >意见反馈</span>
      </div>
      <div style="margin-bottom: 10px;" class="text item">
        <div>
          todo
        </div>
      </div>
    </el-card>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span >技术问答</span>
      </div>
      <div style="margin-bottom: 10px;" class="text item">
        <div>
          todo
        </div>
      </div>
    </el-card>

    <el-card class="box-card">
      <div style="margin-bottom: 10px;" class="text item">
        <div>
          做一些想做的事情！做一些能做的事情！<br>
          高山仰止,景行行止.虽不能至,心向往之。
        </div>
      </div>
    </el-card>



  </div>
</template>

<script>
    export default {
        name: "about"
    }
</script>

<style scoped>

  .box-card{
    margin-bottom: 20px;
  }
</style>
