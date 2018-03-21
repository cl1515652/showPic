<!--
 *
 * @authar _cl
 * @email aixiaojun.2013@gmail.com
 * @date 2018/3/2 16:30
 * @version v.0.0.1
 * @desc 首页的列表页面
 *
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
  <div class="time-card">

    <el-card class="box-card">
      <div class="hotpic">
        <div class="hottitle">
          热门
        </div>
        <Carousel :lists="hotPics"></Carousel>
      </div>
    </el-card>

    <el-card class="box-card" style="margin-top: 10px;padding-bottom: 20px;">
      <div class="piclist">
        <div class="hottitle">
          最新
        </div>
        <template v-for="pic in newPics">
          <ListItem :pic="pic"></ListItem>
        </template>
      </div>
    </el-card>

  </div>
</template>

<script>
  //在此处加载数据热门数据
  import {mapState, mapActions} from 'vuex';
  import ListItem from '@/components/ListItem'
  import Carousel from '@/components/Carousel'

  export default {
    name: "index-list",

    computed: {
      // Getting Vuex State from store/modules/activities
      ...mapState({
        hotPics: state => state.pic.hotPics,
        newPics: state => state.pic.newPics,
      })
    },
    methods: {
      // Using vue-infinite-loading
      // Dispatching Actions
      ...mapActions([
        'queryHotPicItems','queryNewPicItems'
      ]),
      init(para) {
        this.queryHotPicItems(para);
        this.queryNewPicItems(para);
      }
    },
    components: {
      ListItem, Carousel
    },
    mounted() {
      this.init({});
    }
  }
</script>

<style scoped>
  .time-card {
    overflow: hidden;
  }

  .hotpic {
    margin-top: 20px;
  }

  .hottitle {
    text-align: left;
    font-weight: bold;
  }
</style>
