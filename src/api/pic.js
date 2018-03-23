//import request from 'superagent'
//import jsonp from 'superagent-jsonp'

import axios from 'axios'
import jsonpAdapter from 'axios-jsonp'

import * as types from './api-type';
import * as urlPath from './res-path';

export default {
  [types.PIC_LIST](para,callBack) { //查询pic list
    var _url = urlPath.LOCALHOST + urlPath.PIC_LIST;
    //console.log("using url is ["+_url+"]");
    var type=para.type;
    if(type){
      _url += "?type="+type;
    }

    axios({
      url: _url,
      adapter: jsonpAdapter
    })
      .then((res) => {
        //console.log(res.data);
        var data = res.data;
        //console.log("return info is ["+data+"]");
        //console.log(data);
        para.data = data;
        callBack(para);
      });

  },
  [types.TALK_PIC](para,callBack) { //查询pic list
    var _url = urlPath.LOCALHOST + urlPath.TALK_PIC;
    //console.log("using url is ["+_url+"]");
    var picId = para.picId;
    var subSerial = para.subSerial;
    var concontent = para.concontent;
    var author = para.author;

    _url += "?";
    if(picId){
      _url += "picId="+picId + "&"
    }
    if(subSerial){
      _url += "subSerial="+subSerial + "&"
    }
    if(concontent){
      _url += "concontent="+concontent + "&"
    }
    if(author){
      _url += "author="+author + "&"
    }

    axios({
      url: _url,
      adapter: jsonpAdapter
    })
      .then((res) => {
        //console.log(res.data);
        var data = res.data;
        //console.log("return info is ["+data+"]");
        //console.log(data);
        para.data = data;
        callBack(para);
      });
  },
  [types.UPDATE_PIC](para,callBack) { //查询pic list
    var _url = urlPath.LOCALHOST + urlPath.UPDATE_PIC;
    //console.log("using url is ["+_url+"]");
    //更新内容只会有 name tags desc
    //console.log(para.pic);
    var picId = para.pic._id.$oid;
    var name = para.pic.name;
    var tags = para.pic.tags?para.pic.tags.toString():null;
    var desc = para.pic.desc;

    _url += "?";
    if(name){
      _url += "name="+name + "&"
    }
    if(desc){
      _url += "desc="+desc + "&"
    }
    if(tags){
      _url += "tags="+tags + "&"
    }
    if(picId){
      _url += "picId="+picId + "&"
    }
    axios({
      url: _url,
      adapter: jsonpAdapter
    })
      .then((res) => {
        //console.log(res.data);
        var data = res.data;
        //console.log("return info is ["+data+"]");
        //console.log(data);
        para.data = data;
        callBack(para);
      });
  },
  //给pic 评分
  [types.ASSESS_PIC](para,callBack) { //查询pic list
    var _url = urlPath.LOCALHOST + urlPath.ASSESS_PIC;

    var picId = para.pic._id.$oid;
    var author = 'admin';
    var star = para.star;

    _url += "?";
    if(author){
      _url += "author="+author + "&"
    }
    if(star){
      _url += "star="+star + "&"
    }
    if(picId){
      _url += "picId="+picId + "&"
    }

    axios({
      url: _url,
      adapter: jsonpAdapter
    })
      .then((res) => {
        var data = res.data;
        para.data = data;
        callBack(para);
      });
  },

  //tagmap 统计
  [types.TAG_MAP](para,callBack) { //查询pic list
    var _url = urlPath.LOCALHOST + urlPath.TAG_MAP;
    var type = para.type;

    _url += "?";
    if(type){
      _url += "type="+type + "&"
    }

    axios({
      url: _url,
      adapter: jsonpAdapter
    })
      .then((res) => {
        var data = res.data;
        para.data = data;
        callBack(para);
      });
  }
}
