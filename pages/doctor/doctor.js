import {
  yyb_GetDoctorList
} from '../../api/test_api'
Page({
  data: {
    Organsid: undefined,
    doctorList: [],
    hasMore: true,
    page: 0,
    searchModal: true
  },
  onLoad(query) {
    this.setData({
      Organsid: query.id
    })
    this.getDoctorList()
  },
  async getDoctorList() {
    let {
      Organsid,
      doctorList,
      page
    } = this.data
    page++
    let res = await yyb_GetDoctorList({
      data: {
        pagesize: 10,
        curpageindex: page,
        Organsid,
        search: ''
      }
    })
    this.setData({
      doctorList: [...doctorList, ...res.data.rows || []],
      page,
      hasMore: page < Math.ceil(res.data.total / 10)
    })
    //停止刷新
    wx.stopPullDownRefresh()
  },
  //上拉刷新
  async onReachBottom() {
    const {
      hasMore
    } = this.data
    if (!hasMore) {
      return
    }
    this.getDoctorList()
  },
  //下拉加载
  onPullDownRefresh() {
    this.setData({
      doctorList: [],
      page: 0,
      hasMore: true
    })
    this.getDoctorList()
  },
  async bindSubmit(e) {
    let search_name = e.detail.value.name
    let {
      Organsid
    } = this.data
    let res = await yyb_GetDoctorList({
      data: {
        pagesize: 50,
        curpageindex: 1,
        Organsid,
        search: search_name
      }
    })
    this.setData({
      doctorList: res.data.rows || [],
      searchModal: true
    })
  },
  // 医生搜索
  searchDoctor() {
    var that = this;
    this.setData({
      searchModal: false
    })
    // 创建动画实例
    var animation = wx.createAnimation({
      duration: 400, //动画的持续时间
      timingFunction: 'ease', //动画的效果 默认值是linear->匀速，ease->动画以低速开始，然后加快，在结束前变慢
    })
    this.animation = animation; //将animation变量赋值给当前动画
    var time1 = setTimeout(function () {
      that.slideIn(); //调用动画--滑入
      clearTimeout(time1);
      time1 = null;
    }, 100)
  },
  // 关闭弹框
  closeModal() {
    var that = this;

    var animation = wx.createAnimation({
      duration: 400, //动画的持续时间 默认400ms
      timingFunction: 'ease', //动画的效果 默认值是linear
    })
    this.animation = animation
    that.slideDown(); //调用动画--滑出
    var time1 = setTimeout(function () {
      that.setData({
        searchModal: true
      })
      clearTimeout(time1);
      time1 = null;
    }, 300) //先执行下滑动画，再隐藏模块
  },
  // 点击模态框外部
  outModal(e) {
    let {
      searchModal
    } = this.data
    if (!e.currentTarget.dataset.modal) {
      var that = this;
      var animation = wx.createAnimation({
        duration: 400, //动画的持续时间 默认400ms
        timingFunction: 'ease', //动画的效果 默认值是linear
      })
      this.animation = animation
      that.slideDown(); //调用动画--滑出
      var time1 = setTimeout(function () {
        that.setData({
          searchModal: true
        })
        clearTimeout(time1);
        time1 = null;
      }, 300) //先执行下滑动画，再隐藏模块
    }
  },
  //动画 -- 滑入
  slideIn: function () {
    this.animation.translateY(0).step() // 在y轴偏移，然后用step()完成一个动画
    this.setData({
      //动画实例的export方法导出动画数据传递给组件的animation属性
      animationData: this.animation.export()
    })
  },
  //动画 -- 滑出
  slideDown: function () {
    this.animation.translateY(400).step()
    this.setData({
      animationData: this.animation.export(),
    })
  }
})