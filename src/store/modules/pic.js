/*
  pic
*/
import api from '../../api/pic'
import * as types from '../mutation-types'

//状态
const state = {
  hotPics: [],       //热门照片 //5张
  newPics:[],         //最新照片 20张
  selPic: {},        //选中的图片
  searchPics: [],    //搜索的图片信息
  searchInfo: {},    //搜索信息

}

// getters
const getters = {
  hosPic: (state) => {
    return state.hotPics;
  },
  selPic: (state) => {
    return state.selPic;
  },
  newPics:(state) =>{
    return state.newPics;
  }

}

// actions
const actions = {
  /* queryPicItems ({ commit, state },para) {
     para.commit = commit;
     api.GET_PIC_LIST(para,({commit,data}) => {
       //console.log(data);
       commit(types.QUERY_PIC_ITEMS,
         data
       )
     });
   },*/
  queryHotPicItems({commit, state}, para) {
    para.commit = commit;
    para.type = "hot";
    api.PIC_LIST(para, ({commit, data}) => {
      //console.log(data);

      data.refalsh = true;    //刷新而不是增加
      commit(types.QUERY_HOT_PIC_ITEMS,
        data
      )
    });
  },
  queryNewPicItems({commit, state}, para) {
    para.type = "new";
    para.commit = commit;
    api.PIC_LIST(para, ({commit, data}) => {
      //console.log(data);
      data.refalsh = true;    //刷新而不是增加
      commit(types.QUERY_NEW_PIC_ITEMS,
        data
      )
    });
  },
  setPic({commit}, pic) {
    commit(types.SEL_PIC, pic)
  },
  talkPic({commit, state}, para) {
    para.picId = state.selPic._id.$oid;
    //para.subSerial =  暂不支持
    para.concontent = para.concontent;
    para.author = 'admin'; //todo 之后会从 store.user 中获取

    para.commit = commit;
    api.TALK_PIC(para, ({commit, data}) => {
      //console.log("评论成功")
      //1. 修改 selPic
      commit(types.SEL_PIC, data);
      //2. 页面提示成功
      para.success();
    })
  },
  updatePic({commit, state}, para){
    var pic = state.selPic = para.pic;
    api.UPDATE_PIC(para, ({commit, data}) => {
      //2. 页面提示成功
      para.success();
    })
  },
  picForStar({commit, state}, para){
    para.commit = commit;
    api.ASSESS_PIC(para, ({commit, data}) => {
      //1. 修改 selPic
      commit(types.SEL_PIC, data);
      //2. 页面提示成功
      para.success();
    })

  }

}

// mutations
const mutations = {
  /*[types.QUERY_PIC_ITEMS] (stata, data) {  // 加载所有
    stata.pics = stata.pics.concat(data)
    stata.max_id = stata.pics[stata.pics.length-1]._id;
  },
  [types.QUERY_PIC] (stata, para) {  //加载一条
    let pics = stata.pics;
    stata.pic = (pics,para) => {
      return pics.find(para._id);
    }
  },*/
  //加载热门照片
  [types.QUERY_HOT_PIC_ITEMS](stata, data) { //加载热门图片
    if (data.refalsh) {
      stata.hotPics = data;
    }
  },
  //加载最新照片
  [types.QUERY_NEW_PIC_ITEMS](stata, data) { //加载热门图片
    if (data.refalsh) {
      stata.newPics = data;
    }
  },
  //选中照片
  [types.SEL_PIC](stata, pic) { //加载热门图片
    stata.selPic = pic;
  }



}

export default {
  state,
  getters,
  actions,
  mutations
}
