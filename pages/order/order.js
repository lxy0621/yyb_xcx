var app = getApp();
Page({
  data: {
    winHeight: "", //窗口高度
    currentTab: 0, //预设当前项的值
    tabs: [{
        id: 0,
        title: '普通预约'
      },
      {
        id: 1,
        title: '快速预约'
      }
    ],
    // 普通预约
    region: ['北京市', '北京市', '东城区'],
    customItem: '全部',
    date: '2021-01-01',
    gender: ['男', '女'],
    cardType: ['身份证', '驾驶证'],
    times: [{
        value: 'faster',
        name: '越快越好'
      },
      {
        value: 'week',
        name: '一周内'
      },
      {
        value: 'mouth',
        name: '一个月内'
      }
    ],
    // 快速预约
    region2: ['北京市', '北京市', '东城区'],
    customItem2: '全部',
    times2: [{
        value: 'faster',
        name: '越快越好'
      },
      {
        value: 'week',
        name: '一周内'
      },
      {
        value: 'mouth',
        name: '一个月内'
      }
    ]
  },
  onLoad() {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success (res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 100;
        that.setData({
          winHeight: calc
        });
      }
    });
    footerTap: app.footerTap
  },
  // 滚动切换标签样式
  switchTab (e) {
    this.setData({
      currentTab: e.detail.current
    });
    this.checkCor();
  },
  // 点击标题切换当前页时改变样式
  swichNav(e) {
    var cur = e.target.dataset.current;
    if (this.data.currentTaB == cur) {
      return false;
    } else {
      this.setData({
        currentTab: cur
      })
    }
  },
  //判断当前滚动超过一屏时，设置tab标题滚动条。
  checkCor() {
    if (this.data.currentTab > 4) {
      this.setData({
        scrollLeft: 300
      })
    } else {
      this.setData({
        scrollLeft: 0
      })
    }
  },
  // 普通预约
  bindRegionChange(e) {
    this.setData({
      region: e.detail.value
    })
  },
  bindDateChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindGenderChange(e) {
    this.setData({
      idx_1: e.detail.value
    })
  },
  bindcardTypeChange(e) {
    this.setData({
      idx_2: e.detail.value
    })
  },
  radioChange(e) {
    const items = this.data.times
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }
    this.setData({
      times: items
    })
  },
  bindSubmit(e) {
    console.log(e)
  },
  // 快速预约
  bindRegion2Change(e) {
    this.setData({
      region2: e.detail.value
    })
  },
  radioChange2(e) {
    const items = this.data.times
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }
    this.setData({
      times: items
    })
  },
  bindSubmit2(e) {
    console.log(e)
  },
})