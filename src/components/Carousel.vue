<!--
 *
 * @authar _cl
 * @email aixiaojun.2013@gmail.com
 * @date 2018/3/20 16:26
 * @version v.0.0.1
 * @desc 图片走马灯效果
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
    <el-carousel :interval="4000" type="card" height="280px">
      <el-carousel-item v-for="item in lists" :key="item._id.$oid">
        <ListItem :pic="item"></ListItem>
        <div style="margin-left: 10px;">
          <h2>{{item.name}}</h2>
          <span>{{getdesc(item.desc)}}</span>
          <div class="mt"> {{item.userId}} &nbsp;{{getDate(item.date)}}</div>
          <div class="mt">
            <icon name="star" ></icon>&nbsp;{{item.star ? item.star : 0}}&nbsp;
            <icon name="talk" ></icon>&nbsp;{{item.talks ? item.talks.length : 0}}
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import ListItem from '@/components/ListItem'

  export default {
    name: "carousel",
    props: ['lists'],
    components: {
      ListItem
    },
    methods: {
      getDate(date) {
        return new Date(date.$date).toLocaleString();
      },
      getdesc(desc){
        return desc.length > 80 ? (desc.substr(0,77)+"...") : desc;
      }

    }
  }
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .mt{
    text-align: right;
    font-size: 5px;
    color:gray;
    margin-top: 20px;
    margin-right: 20px;
  }
</style>
