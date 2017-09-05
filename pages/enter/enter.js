//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    motto: '启动测试界面',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  onLoad: function () {
    
  },

//跳转到日期计算界面
  jumpToDate:function(){
    wx.navigateTo({
      url: '../datecalculate/datecalculate',
    })
  },

  jumpToTransform:function(){
    wx.navigateTo({
      url: '../transform/transform',
    })
  },

  jumpToWell:function(){
    wx.showModal({
      title: '提示',
      content: '敬请期待~',
      showCancel: false,
      confirmText: "OK~"
    })
  }
})
