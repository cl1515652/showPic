<!--
 *
 * @authar _cl
 * @email aixiaojun.2013@gmail.com
 * @date 2018/3/22 9:41
 * @version v.0.0.1
 * @desc 标签图
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
  <div id="tagsShow">

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span >标签数量排行</span>
      </div>
      <div style="margin-bottom: 10px;" class="text item">
        <div>
          <div id="tagChatCount" style="width: 1000px;height: 400px;">
          </div>
        </div>
      </div>
    </el-card>

    <el-card class="box-card" style="margin-top: 20px;">
      <div slot="header" class="clearfix">
        <span >标签热度排行</span>
      </div>
      <div style="margin-bottom: 10px;" class="text item">
        <div>
          <div id="tagChatHot" style="width: 1000px;height: 400px;">
          </div>
        </div>
      </div>
    </el-card>

  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex';
  import * as echarts from 'echarts';

  export default {
    name: "tag-show",
    computed: {
      ...mapState({
        tagMapMaxCount: state => state.pic.tagMapMaxCount,
        tagMapMaxHot: state => state.pic.tagMapMaxHot
      }),
      option(){
        //this.tagChatInit(this.tagMapMaxCount,this.tagMapMaxHot);
      }
    },
    methods: {
      ...mapActions([
        'tagMap'
      ]),
      tagChatInit(tagMapMaxCount,tagMapMaxHot){
        var tagChatCount = document.getElementById('tagChatCount');
        var countChart = echarts.init(tagChatCount);
        var tagChatHot = document.getElementById('tagChatHot');
        var hotChart = echarts.init(tagChatHot);


        //console.log(tagChat)
        /*var myChart = echarts.init(tagChat);
        // 指定图表的配置项和数据
        var option = {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
            data:['销量']
          },
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        };*/

        //初始化数据
        //var category = ['小王', '小李', '小赵', '小马', '小刘', '小张', '小齐'];
        //var barData = [3100, 2142, 1218, 581, 431, 383, 163];
        //var category =
        var countTags = new Array();
        var countCounts = new Array();

        for(var i = (tagMapMaxCount.length - 1 ) ; i >= 0 ; i--){
          //console.log(i);
          countCounts.push(tagMapMaxCount[i].count)
          countTags.push(tagMapMaxCount[i].tag);
        }

        var hotTags = new Array();
        var hotCounts = new Array();
        //console.log(tagMapMaxHot)
        //console.log(tagMapMaxCount)
        for(var i = (tagMapMaxHot.length - 1 ) ; i >= 0 ; i--){
          //console.log(i);
          hotCounts.push(tagMapMaxHot[i].count)
          hotTags.push(tagMapMaxHot[i].tag);
        }

        var option = {
          title: {
            text: '标签数量 Top 10'
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'value',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          },
          yAxis: {
            type: 'category',
            data: [],
            splitLine: {show: false},
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            offset: 10,
            nameTextStyle: {
              fontSize: 15
            }
          },
          series: [
            {
              name: '数量',
              type: 'bar',
              data: hotCounts,
              barWidth: 14,
              barGap: 10,
              smooth: true,
              label: {
                normal: {
                  show: true,
                  position: 'right',
                  offset: [5, -2],
                  textStyle: {
                    color: '#F68300',
                    fontSize: 13
                  }
                }
              },
              itemStyle: {
                emphasis: {
                  barBorderRadius: 7
                },
                normal: {
                  barBorderRadius: 7,
                  color: new echarts.graphic.LinearGradient(
                    0, 0, 1, 0,
                    [
                      {offset: 0, color: '#3977E6'},
                      {offset: 1, color: '#37BBF8'}

                    ]
                  )
                }
              }
            }
          ]
        };

        // 使用刚指定的配置项和数据显示图表。
        option.title.text="标签数量 Top 10"
        option.yAxis.data=countTags;
        option.series[0].data= countCounts
        console.log(option)
        countChart.setOption(option);

        option.title.text="热门标签 TOP 10"
        option.yAxis.data=hotTags;
        option.series[0].data=hotCounts;
        console.log(option)
        hotChart.setOption(option);
      },
      dataloadseccuss(){
        this.tagChatInit(this.tagMapMaxCount,this.tagMapMaxHot);
      }
    },
    created() {
      this.tagMap({type: 'count',success:this.dataloadseccuss});
      this.tagMap({type: 'hot',success:this.dataloadseccuss});

    },
    mounted(){
      //this.tagChatInit();
    }
  }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .pl {
    text-align: left;
    margin-bottom: 20px;
    font-weight: bold;
  }

  .box {
    margin-top: 10px;
  }
</style>
