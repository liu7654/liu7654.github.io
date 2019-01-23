// pages/moviedetail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: []
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '电影详情',
    })
    let mvId = options.id, that = this;
    wx.showLoading({
      title: '加载影片信息中...',
    })
    wx.request({
      url: "https://api.douban.com/v2/movie/subject/" + mvId,
      data: {
        apikey: '0b2bdeda43b5688921839c8ecb20399b'
      },
      header: {
        "Content-Type": "json"
      },
      success: function (res) {
        console.log(res);
        wx.hideLoading();
        that.setData({
          detail: res.data
        })
        wx.showToast({
          title: '请求成功'
        })
      }
    })
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
