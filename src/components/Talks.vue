<!--
 *
 * @authar _cl
 * @email aixiaojun.2013@gmail.com
 * @date 2018/3/15 12:56
 * @version v.0.0.1
 * @desc 评论的控件
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
  <div id="talks">
    <template v-for="talk in talks">
      <div>
        <el-card class="box-card">
          <div class="flow"># {{talk.serial}}</div>
          <div class="te">{{talk.concontent}}</div>
          <div class="mt">
            {{talk.author}} &nbsp;&nbsp; {{getDate(talk.time)}}
          </div>
        </el-card>
      </div>
    </template>
  </div>
</template>

<script>
  export default {
    name: "talks",
    props:['talks'],
    computed: {
      /*date: ({pic}) => {
        return new Date(pic.date.$date).toLocaleString();
      }*/
    },
    methods: {
      getDate(date){
        return new Date(date.$date).toLocaleString();
      }

    }
  }
</script>

<style scoped>
  .box-card{
    margin-bottom: 10px;
  }

  .flow{
    text-align: right;
    font-size: 1px;
    color: #afa7a7;
  }

  .te{
    text-align: left;
    margin-left: 30px;
  }

  .mt{
    text-align: right;
    font-size: 3px;
    color: #afa7a7;
  }

</style>
