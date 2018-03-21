<!--
 *
 * @authar _cl
 * @email aixiaojun.2013@gmail.com
 * @date 2018/3/4 20:32
 * @version v.0.0.1
 * @desc 展示首页的 item
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
  <div class="item-card">
    <el-card class="box-card" >
      <router-link :to="{name: 'Detail', params: { pic: pic }}">
      <img :src="src" :width="picWidth" :height="defaultHeigth">
      </router-link>
    </el-card>
  </div>
</template>

<script>
  import { defaultHeigth,picHost,defauleErrPic } from '@/config/pageConfig'


  export default {
    name: "list-item",
    props:['pic'],
    computed:{
      picWidth: ({pic,defaultHeigth}) =>{
        let picWidth = 0;
        var width = pic.width;
        var heigth = pic.height;
        //console.log(width + " | "+ heigth + " | " + defaultHeigth )
        if(width && heigth){
          picWidth = width/heigth * defaultHeigth;
        }else{
          picWidth = defaultHeigth
        }
        return picWidth;
      },
      src: ({pic,picHost}) =>{
        if(false){
          //return pic.url;
        }else{
          if(pic.fileName && pic.filePath){
            if(pic.filePath.substr(0,4) == "http"){
              return  pic.filePath +"/"+ pic.fileName;
            }else{
              return picHost + "/" + pic.filePath +"/"+ pic.fileName;
            }
          }else{
            return defauleErrPic;
          }
        }

      }
    },
    methods:{

    },
    data() {
      return {
        defaultHeigth:defaultHeigth,
        picHost:picHost,
        defauleErrPic:defauleErrPic
      }
    }

  }
</script>

<style scoped>

  .box-card {
    height: 240px;
  }
  .item-card{
    margin-left: 20px;
    margin-top: 20px;
    float: left;
  }

</style>
