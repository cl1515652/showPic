<template>
    <div id="footerbar" class="footer">
      <div class="lefts">
        <div class="subTitle">
          <h3>链接</h3>
        </div>
        <div class="subText">
          <a>项目设计</a><br/>
          <a>项目开发</a><br/>
          <a>关于项目</a><br/>
          <a>技术库</a><br/>
        </div>

      </div>

      <div class="rights">
        <div class="subTitler">
          <h3>PO-PIC 0.1 BATE.</h3>
        </div>
        <div class="cot">
          <el-tooltip class="item" effect="dark" placement="top-start">
            <div slot="content">
              <img src="../assets/1521651351.jpg" style="width: 100px;height: 100px;">
            </div>
            <icon name="wchart" scale="5" ></icon>
          </el-tooltip>

          <a style="margin-left: 20px" href="https://github.com/cl1515652/showPic/tree/cl_v2" target="_blank">
            <icon color="lawngreen" name="github" scale="5"></icon>
          </a>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "footer-bar"
    }
</script>

<style scoped>
  .footer{
    margin-top: 20px;
    border-top: 1px solid #dcdfe6;
    height: 200px;
    --background-color: #f7fbfd;
  }

  .lefts{
    float: left;
    text-align: left;
  }

  .subTitle{
    margin-left: 140px;
    margin-bottom: 20px;
  }

  .subText{
    margin-left: 145px;
    margin-bottom: 5px;
  }

  .rights{
    float: right;
    text-align: right;
  }

  .subTitler{
    margin-right: 40px;
    margin-bottom: 20px;
  }

  .cot{
    margin-right: 60px;

  }

  a{
    color:gray;
  }

</style>
