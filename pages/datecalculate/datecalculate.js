
const app = getApp();//get App Object!

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tip_one:"请触摸选择开始日期：",
    tip_two:"请触摸选择结束日期：",
    tip_button:"开始计算",
    tip_result_:"所选日期相差",
    result:null,
    _tip_result:"天",
    first_date:null,
    second_date:null,
    today_date:null,
    btnEnable:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      today_date: this.getTodayDate()
    });

    console.log(this.data.btnEnable);

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  //picker1数值选择之后回调函数
  bindDateChangeFirst:function(e){
    this.setData({
      first_date: e.detail.value
    });
    if (this.data.first_date != null && this.data.second_date != null){
      this.setData({
        btnEnable: false
      });
    }
    console.log(this.data.btnEnable);
  },

  //picker2数值选择之后回调函数
  bindDateChangeSecond: function (e) {
    this.setData({
      second_date: e.detail.value
    });
    if (this.data.first_date != null && this.data.second_date != null) {
      this.setData({
        btnEnable: false
      });
    }
    console.log(this.data.btnEnable);
  },
  //custom functions----------


  //获取今天的日期并转化为yyyy-MM-dd格式
  getTodayDate:function(){
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let day = date.getDate();
    if(month<10){
      if (day<10){
        return year + "-0" + month +"-0"+day;
      }else{
        return year + "-0" + month + "-" + day;
      }
    }else{
      if (day < 10) {
        return year + "-" + month + "-0" + day;
      } else {
        return year + "-" + month + "-" + day;
      }
    }
  },

  //开始计算
  startCalculate:function(){
    let result = this.dateDiff(this.data.first_date, this.data.second_date);
    console.log("相差"+result);
  },
  //计算天数差的函数，通用  
  //sDate1和sDate2是2006-12-18格式 
  //转换为12-18-2006格式
  //把相差的毫秒数转换为天数
  dateDiff: function (sDate1, sDate2){  
    var  aDate, oDate1, oDate2, iDays  
    aDate  = sDate1.split("-")  
    oDate1  =  new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0])   
    aDate  =  sDate2.split("-")  
    oDate2  =  new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0])  
    iDays  =  parseInt(Math.abs(oDate1 - oDate2) / 1000 / 60 / 60 / 24)   
    return  iDays  
  } 

})