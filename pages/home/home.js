// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    students: [
      {id: 101, name:'小明', age:18},
      {id: 102, name:'小红', age:17},
      {id: 103, name:'小刚', age:26},
      {id: 104, name:'小强', age:9}
    ],
    counter: 0
  },

  add() {
    //这样写数据改变了，页面不会刷新
    // this.data.counter ++
    // console.log(this.data.counter);

    //要这样写
    this.setData({
      counter: this.data.counter +=1
    })
  },
  decreasing() {
    //这样写数据改变了，页面不会刷新
    // this.data.counter --
    // console.log(this.data.counter);
    this.setData({
      counter: this.data.counter -=1
    })
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

  }
})