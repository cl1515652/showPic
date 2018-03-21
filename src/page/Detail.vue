<!--
 *
 * @authar _cl
 * @email aixiaojun.2013@gmail.com
 * @date 2018/3/2 16:29
 * @version v.0.0.1
 * @desc 详细页面
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
  <div id="detail">
    <div>
      <!-- 展示照片 -->
      <div>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span v-show=" ! isUpdate">{{pic.name}}</span>
            <el-input v-model="pic.name" v-show="isUpdate"></el-input>
            <el-button v-show="!isUpdate" style="float: right; padding: 3px 0" type="text" @click="updateButton">修改
            </el-button>
            <el-button v-show="isUpdate" style="float: right; padding: 3px 0" type="text" @click="updateSave">保存
            </el-button>
          </div>
          <div style="margin-bottom: 10px;" class="text item">
            <!-- 使用 background 来设置图片  -->
            <div id="img" :style="{height:pic.height+'px',width:pic.width+'px',
            backgroundImage:'url('+src+')',marginTop:'10px',marginLeft:'auto',marginRight:'auto',textAlign:'left'}">
              <!-- img :src="src"-->
              <div v-show="pic.star > 0">
                <icon name="bookmark" scale="15"></icon>
                <div class="bookmark-tit"><i class="el-icon-star-on"></i>{{pic.star}}</div>
              </div>
            </div>
          </div>

          <div v-show=" ! isUpdate" class="tags" id="tags">
            <el-tag
              v-for="tag in pic.tags"
              :key="tag"
            >
              {{tag}}
            </el-tag>
          </div>

          <div v-show="isUpdate" class="tags">
            <el-tag
              :key="tag"
              v-for="tag in pic.tags"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)">
              {{tag}}
            </el-tag>
            <el-input
              class="input-new-tag"
              v-if="inputVisible"
              v-model="inputValue"
              ref="saveTagInput"
              size="small"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            >
            </el-input>
            <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
          </div>


          <div v-show=" ! isUpdate" class="desc">
            {{pic.desc}}
          </div>

          <div v-show="isUpdate" class="desc">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="pic.desc"
              v-show="isUpdate"
            >
            </el-input>
          </div>

          <div class="author">
            作者： {{pic.userId}} &nbsp;&nbsp; {{date}}
          </div>
          <!-- <p>描述：</p>
          <p>作者：{{pic.userId}}</p>你
          <p>时间：</p>
          -->
        </el-card>
      </div>

      <el-card class="box">
        <div v-show="isAssess">
          <div class="pl">您可以给予评价：
            <el-rate
              v-model="star"
              show-text>
            </el-rate>
          </div>
          <el-button type="primary" @click="assess()">评价</el-button>
        </div>

        <div  v-show="! isAssess">
          <div class="pl">您已经给予了评价：
            <el-rate
              disabled
              v-model="star"
              show-text>
            </el-rate>
          </div>
        </div>

      </el-card>

      <!-- 展示评论 -->
      <el-card class="box">

        <div>
          <div class="pl">评论列表：</div>
          <Talks :talks="pic.talks"></Talks>
        </div>

        <div>
          <p style="float: left">评论</p>

          <el-input v-model="talk" placeholder="请输入内容" auto-complete="off"></el-input>
          <div style="margin-top: 10px;">
            <el-button type="primary" @click="submitForm()">提交</el-button>
            <el-button @click="resetForm()">重置</el-button>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  import {defaultHeigth, picHost, defauleErrPic} from '@/config/pageConfig'
  import {mapState, mapActions} from 'vuex';
  import Talks from '@/components/Talks'

  export default {
    name: "detail",
    computed: {
      ...mapState({
        pic: state => state.pic.selPic
      }),
      picWidth: ({pic, defaultHeigth}) => {
        let picWidth = 0;
        var width = pic.width;
        var heigth = pic.height;
        //console.log(width + " | "+ heigth + " | " + defaultHeigth )
        if (width && heigth) {
          picWidth = width / heigth * defaultHeigth;
        } else {
          picWidth = defaultHeigth
        }
        return picWidth;
      },
      src: ({pic, picHost}) => {
        //console.log('pic is '+ pic);
        if (false) {
          //return url;
        } else {
          if (pic.fileName && pic.filePath) {
            if (pic.filePath.substr(0, 4) == "http") {
              return pic.filePath + "/" + pic.fileName;
            } else {
              return picHost + "/" + pic.filePath + "/" + pic.fileName;
            }
          } else {
            return defauleErrPic;
          }
        }
      },
      date: ({pic}) => {
        return new Date(pic.date.$date).toLocaleString();
      }
    },
    components: {
      Talks
    },
    methods: {
      ...mapActions([
        'setPic', 'talkPic', 'updatePic','picForStar'
      ]),
      init(pic) {
        this.setPic(pic);
        this.assessInit();
      },
      submitForm() {
        /* this.$refs[formName].validate((valid) => {
           if (valid) {
             alert('submit!');
           } else {
             console.log('error submit!!');
             return false;
           }
         });*/
        //console.log(this.talk);
        //调用评论接口
        this.talkPic({concontent: this.talk, success: this.success});
      },assess() {
        //console.log(this.star);
        this.picForStar({star:this.star,pic: this.pic, success: this.successForAssess});
      },
      resetForm() {
        //console.log(this.talk);
        this.talk = "";
        //this.pic = this.pic.star ? this.pic : (this.pic.star = 0);
        //this.pic.star =

      },
      success() {
        this.$notify({
          title: '成功',
          message: '评论成功',
          type: 'success'
        });
        this.talk = "";
      },
      successForUpdate() {
        this.$notify({
          title: '成功',
          message: '保存成功',
          type: 'success'
        });
        this.talk = "";
      },
      successForAssess(){
        this.$notify({
          title: '成功',
          message: '评价成功',
          type: 'success'
        });
        this.isAssess = false;
      },
      updateButton() {
        this.isUpdate = true;
      },
      updateSave() {
        //保存到数据库中
        //this.pic
        //successForUpdate
        this.updatePic({pic: this.pic, success: this.successForUpdate});
        this.isUpdate = false;
      },
      handleClose(tag) {
        this.pic.tags = this.pic.tags ? this.pic.tags : [];
        this.pic.tags.splice(this.pic.tags.indexOf(tag), 1);
      },
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.pic.tags = this.pic.tags ? this.pic.tags : [];
          this.pic.tags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
      },
      assessInit(){
        var result = true;
        var starhis = this.pic.starhis;
        console.log(starhis);
        if(!starhis){
          //return result;
          this.isAssess = result;
          return;
        }
        for(var i=0;i<starhis.length;i++){
          if(starhis[i].author == 'admin'){ //todo admin 之后使用userid
            console.log()
            this.star = starhis[i].star;
            result = false;
          }
        }
        //return result;
        this.isAssess = result;
      }
    }
    ,
    data() {
      return {
        defaultHeigth: defaultHeigth,
        picHost: picHost,
        defauleErrPic: defauleErrPic,
        talk: "",
        isUpdate: false,

        //dynamicTags: this.pic.tags,
        inputVisible: false,
        inputValue: '',
        star: null,
        isAssess:true
      }
    }
    ,
    created() {
      //console.log(this.$route.params);
      var pic = this.$route.params.pic
      //console.log(pic);
      //this.$store.dispatch()

      if (pic == null) {
        this.$router.push({name: 'indexlist'})
      }
      this.init(pic);

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

  .tags {
    margin-bottom: 10px;
    text-align: left;
    margin-left: 50px;
  }

  .tags span {
    margin-left: 15px;
  }

  .author {
    text-align: right;
    color: #afa7a7;
  }

  .desc {
    text-align: left;
    margin-left: 50px;
  }

  .el-tag + .el-tag {
    margin-left: 10px;
  }

  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }

  .bookmark-tit {
    margin-left: 50px;
    margin-top: -85px;
  }

</style>
