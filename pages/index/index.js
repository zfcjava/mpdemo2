Page({

  /**
   * 页面的初始数据
   */
  data: {
    menu_items: [{
      id: 1,
      name: '知识点',
      levels: []
    }, {
      id: 2,
      name: '难度',
      levels: [{
          id: 1,
          title: '不限'
        },
        {
          id: 2,
          title: '简单'
        },
        {
          id: 3,
          title: '中等'
        },
        {
          id: 4,
          title: '困难'
        },
      ]
    }, {
      id: 3,
      name: '类型',
      levels: [{
          id: 1,
          title: '不限'
        },
        {
          id: 2,
          title: '选择题'
        },
        {
          id: 3,
          title: '填空题'
        },
        {
          id: 4,
          title: '解答题'
        },
      ]
    }],
    select_menu_id: 0,
    hard_select_id: 1,
    type_select_id: 1
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
  onMenuSelected: function(event) {
    console.log(event);
    var selectedId = event.target.dataset.id;

    if (selectedId == this.data.select_menu_id) {
      console.log('当前页面已经打开，无需再次处理')
      return;
    }

    this.setData({
      select_menu_id: selectedId
    })
  },
  doConfirm: function() {
    //TODO 点击确认后 应该对数据进行过滤
    this.setData({
      select_menu_id: 0
    })
  },
  onHardMenuSelected: function(event) {
    console.log(event);
    var selectedId = event.target.dataset.id;

    if (selectedId == this.data.hard_select_id) {
      console.log('当前页面已经打开，无需再次处理')
      return;
    }

    this.setData({
      hard_select_id: selectedId
    })

  },
  onTypeMenuSelected: function(event) {
    console.log(event);
    var selectedId = event.target.dataset.id;

    if (selectedId == this.data.type_select_id) {
      console.log('当前页面已经打开，无需再次处理')
      return;
    }

    this.setData({
      type_select_id: selectedId
    })

  }
})