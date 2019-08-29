Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu_items: [{
      id: 1,
      name: '知识点'
    }, {
      id: 2,
      name: '难度'
    }, {
      id: 3,
      name: '类型'
    }],
    select_menu_id:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onMenuSelected:function(event){
    console.log(event);
    var selectedId = event.target.dataset.id;

    if(selectedId==this.data.select_menu_id){
      console.log('当前页面已经打开，无需再次处理')
      return;
    }
    
    this.setData({
      select_menu_id:selectedId
    })
  },
  doConfirm:function(){
    //TODO 点击确认后 应该对数据进行过滤
    this.setData({
      select_menu_id: 0
    })
  }
})