// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false,
    mv: []
  },
  showInfo:function(e){
    let mvId = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/moviedetail/detail?id='+mvId,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中...',
    })
    var that = this;
    wx.request({
      url: 'https://api.douban.com/v2/movie/in_theaters', //仅为示例，并非真实的接口地址
      data:{
        apikey: '0b2bdeda43b5688921839c8ecb20399b',
        city:'武汉'
      },
      header: {
        "Content-Type": "json"
      },
      success:function(res){
        console.log(res);
        setTimeout(() => {
          wx.hideLoading();
          that.setData({
            show: true,
            mv: res.data
          })

          wx.showToast({
            title: '请求成功',
            icon: 'success',
            duration: 1000
          })


        }, 1500)
      }
    })
  },

  upper(){
    console.log("下拉刷新")
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
  
  }
})