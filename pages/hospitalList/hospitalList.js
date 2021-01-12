import {
  yyb_GetOrganList
} from '../../api/test_api'
Page({
  data: {
    hosptitalList: [],
    hasMore: true,
    page: 0,
    searchModal: true
  },
  onLoad() {
    this.getList()
  },
  async getList() {

    let {
      hosptitalList,
      page
    } = this.data

    page++

    let res = await yyb_GetOrganList({
      data: {
        curpageindex: page,
        pagesize: 10,
        search: ''
      }
    })
    this.setData({
      hosptitalList: [...hosptitalList, ...res.data.rows],
      page,
      hasMore: page < Math.ceil(res.data.total / 10)
    })
    //停止刷新
    wx.stopPullDownRefresh()
  },
  //提交搜索信息
  async bindSubmit(e) {
    let search_name = e.detail.value.name
    let {
      Organsid
    } = this.data
    let res = await yyb_GetOrganList({
      data: {
        pagesize: 50,
        curpageindex: 1,
        Organsid,
        search: search_name
      }
    })
    this.setData({
      hosptitalList: res.data.rows || [],
      searchModal: true
    })
  },
  // 医生搜索
  searchHospital() {
    var that = this;
    this.setData({
      searchModal: false
    })
    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease',
    })
    this.animation = animation;
    var time1 = setTimeout(function () {
      that.slideIn();
      clearTimeout(time1);
      time1 = null;
    }, 100)
  },
  // 关闭弹框
  closeModal() {
    var that = this;

    var animation = wx.createAnimation({
      duration: 400,
      timingFunction: 'ease',
    })
    this.animation = animation
    that.slideDown();
    var time1 = setTimeout(function () {
      that.setData({
        searchModal: true
      })
      clearTimeout(time1);
      time1 = null;
    }, 300)
  },
  // 点击模态框外部
  outModal(e) {
    let {
      searchModal
    } = this.data
    if (!e.currentTarget.dataset.modal) {
      var that = this;
      var animation = wx.createAnimation({
        duration: 400,
        timingFunction: 'ease',
      })
      this.animation = animation
      that.slideDown();
      var time1 = setTimeout(function () {
        that.setData({
          searchModal: true
        })
        clearTimeout(time1);
        time1 = null;
      }, 300)
    }
  },
  //动画 -- 滑入
  slideIn: function () {
    this.animation.translateY(0).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  //动画 -- 滑出
  slideDown: function () {
    this.animation.translateY(400).step()
    this.setData({
      animationData: this.animation.export(),
    })
  },
  //上拉刷新
  async onReachBottom() {
    const {
      hasMore
    } = this.data
    if (!hasMore) {
      return
    }
    this.getList()
  },
  //下拉加载
  onPullDownRefresh() {
    this.setData({
      hosptitalList: [],
      page: 0,
      hasMore: true
    })
    this.getList();
  }
})