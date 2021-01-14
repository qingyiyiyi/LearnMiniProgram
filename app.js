App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次，这也是和onshow的区别，onshow可以执行多次）
   */

   
  //小程序初始化完成时，会执行的生命周期函数
  onLaunch: function (options) {
    console.log(options);
    wx.getUserInfo({
      // 异步调用 拿到数据后再进行回调
      success: function(res) {
        console.log(res);
      }
    })
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow  
   */


  //小程序界面显示出来之后会执行的生命周期函数
  onShow: function (options) {
    console.log(options);
    //1、判断小程序的进入场景 也可以在onLaunch的生命周期中完成
    switch(options.scene) {
      case 1001:
        break;
      case 1005:
        break;
      case 1006:
        break;
      case 1011:
        break;
    }
    //2、获取用户的信息，并且获取到之后，将用户信息传递给服务器 也可以在onLaunch的生命周期中完成
    wx.getUserInfo({
      // 异步调用 拿到数据后再进行回调
      success: function(res) {
        console.log(res);
      }
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */


  //界面被关闭或者隐藏的时候会执行，关闭后打开小程序不会重新初始化，因为小程序能在后台存活两小时。
  onHide: function () {
    console.log('我被隐藏了');
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  }
})
