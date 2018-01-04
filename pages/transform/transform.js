
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstNum:0,
    secondNum:0,
    showValue:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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

  // custom function
  /**
   * 开始转换
   */


  firstBindKeyInput: function (e) {
  
    console.log(e.detail.value);
    let length = e.detail.value.length;
    let value = e.detail.value;
    let tValue = this.data.showValue;
    let that = this;
    switch(length){
      case 1:
        tValue = that.getStringByNum(value.charAt(0))+"圆"
        break;
      case 2:
        tValue = that.getStringByNum(value.charAt(0)) + "拾" 
          + that.getStringByNum(value.charAt(1))+"圆";
        break;
      case 3:
        tValue = that.getStringByNum(value.charAt(0)) + "佰" 
          + that.getStringByNum(value.charAt(1)) + "拾"
          + that.getStringByNum(value.charAt(2)) + "圆";
        break;
      case 4:
        tValue = that.getStringByNum(value.charAt(0)) + "千"
          + that.getStringByNum(value.charAt(1)) + "佰"
          + that.getStringByNum(value.charAt(2)) + "拾"
          + that.getStringByNum(value.charAt(3)) + "圆";
        break;
      case 5:
        tValue = that.getStringByNum(value.charAt(0)) + "万"
          + that.getStringByNum(value.charAt(1)) + "千"
          + that.getStringByNum(value.charAt(2)) + "佰"
          + that.getStringByNum(value.charAt(3)) + "拾"
          + that.getStringByNum(value.charAt(4)) + "圆";
        break;
      case 6:
        tValue = that.getStringByNum(value.charAt(0)) + "拾"
          + that.getStringByNum(value.charAt(1)) + "万"
          + that.getStringByNum(value.charAt(2)) + "千"
          + that.getStringByNum(value.charAt(3)) + "佰"
          + that.getStringByNum(value.charAt(4)) + "拾"
          + that.getStringByNum(value.charAt(5)) + "圆";
        break;
      case 7:
        tValue = that.getStringByNum(value.charAt(0)) + "佰"
          + that.getStringByNum(value.charAt(1)) + "拾"
          + that.getStringByNum(value.charAt(2)) + "万"
          + that.getStringByNum(value.charAt(3)) + "千"
          + that.getStringByNum(value.charAt(4)) + "佰"
          + that.getStringByNum(value.charAt(5)) + "拾"
          + that.getStringByNum(value.charAt(6)) + "圆";
        break;
      case 8:
        tValue = that.getStringByNum(value.charAt(0)) + "千"
          + that.getStringByNum(value.charAt(1)) + "佰"
          + that.getStringByNum(value.charAt(2)) + "拾"
          + that.getStringByNum(value.charAt(3)) + "万"
          + that.getStringByNum(value.charAt(4)) + "千"
          + that.getStringByNum(value.charAt(5)) + "佰"
          + that.getStringByNum(value.charAt(6)) + "拾"
          + that.getStringByNum(value.charAt(7)) + "圆";
        break;
      default:

        break;
    }
    this.setData({
      showValue: tValue
    });
  },

  secondBindKeyInput: function (e) {



  },

  //开始转换
  transform:function(num){

  },

  getStringByNum:function(num){
    switch(num){
      case "1":
        return "壹";
      case "2":
        return "贰";
      case "3":
        return "叁";
      case "4":
        return "肆";
      case "5":
        return "伍";
      case "6":
        return "陆";
      case "7":
        return "柒";
      case "8":
        return "捌";
      case "9":
        return "玖";
      case "0":
        return "零";
      case "shi":
        return "拾";
      case "bai":
        return "佰";
      case "qian":
        return "仟";
      case "wan":
        return "万";
      case "yi":
        return "亿";
      case "yuan":
        return "圆";
    }
  }

})