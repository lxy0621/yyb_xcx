Page({
  data: {
    winHeight: "",
    currentTab: 0,
    tabs: [{
        id: 0,
        title: '新闻中心'
      },
      {
        id: 1,
        title: '服务介绍'
      },
      {
        id: 2,
        title: '远程教育'
      },
      {
        id: 3,
        title: '案例展示'
      }
    ],
    news: [{
        id: 1,
        title: 'PCCM规模内蒙在行动',
        author: '李耀亭',
        content: "2020年7月29日上午8点30分，自治区调研呼伦贝尔市PCCM规范化建设调研视频会议在呼伦贝尔满洲里市人民医院远程会诊中心举行，同步参加本次视频会议的有呼伦贝尔市14个旗市区卫健委及各级医疗机构相关领导和负责人。出席本次座谈会的还有自治区卫生健康委医政医管局一级主任科员张颖，自治区人民医院院长、自治区卫生健康委提升呼吸学科医疗服务能力领导小组副组长孙德俊，自治区人民医院医联体办公室主任、自治区医疗机构PCCM规范化建设办公室副组长陆俪平，自治区人民医院呼吸与危重症医学科主任、自治区医疗机构PCCM规范化建设办公室副组长云春梅调研组等一行7人；呼伦贝尔市的领导有呼伦贝尔政协副主席、卫生健康委主任何涛，副主任王克刚，满洲里市政府副市长郭晓芳、卫生健康委主任赵云鹏、满洲里市人民医院院长孙莉等相关领导。<br />座谈会由张颖主持，王克刚副主任就呼伦贝尔市PCCM规范化建设的进展情况，分别从正视差距，找准短板，切实增强做好医疗机构呼吸学科建设的责任感和紧迫感；并以幸福呼吸项目为突破口，乘势而为，逐步建设以市医院为龙头，覆盖市、旗、乡的三级呼吸学科服务体系；加强组织领导，周密安排部署，强力推进PCCM规范化建设和存在的问题进行了全面详细汇报。<br />2018年，在国家卫健委指导下，中国医师协会呼吸医师分会、中华医学会呼吸病学分会、全国呼吸专科医联体、国家呼吸医疗质量控制中心共同发起呼吸与危重症医学（PCCM）科规范化建设项目，项目核心内容涵盖科室业务建制、人员建制、设施建制、管理建制及文化建设等方面。2019年4月10日自治区卫生健康委印发了《内蒙古自治区提升呼吸学科医疗服务能力实施方案（2019—2022年）的通知》，我区PCCM规范化建设正式启动，截止目前全区313家医疗机构完成了PCCM规范化建设线上申报工作，2020年是实现小康之年，呼吸学科要在小康之年，给予呼吸健康一个圆满的诠释，让更多人享受到“幸福”的呼吸，内蒙古在行动，呼伦贝尔在行动。",
        time: '2020-06-30 09:10:12'
      },
      {
        id: 2,
        title: '内蒙古医疗远程病理诊断系统投入使用',
        author: '呼和浩特晚报',
        content: "...",
        time: '2020-07-06 22:22:12'
      },
      {
        id: 3,
        title: '最后一例境外输入患者出院，内蒙古境外输入病例暂时清零',
        author: '澎湃新闻',
        content: "...",
        time: '2020-08-30 09:10:12'
      },
      {
        id: 4,
        title: '远程医疗：为患者搭起生命的通道',
        author: '内蒙古新闻网',
        content: "...",
        time: '2020-08-30 09:10:12'
      },
      {
        id: 4,
        title: '远程医疗：为患者搭起生命的通道',
        author: '内蒙古新闻网',
        content: "...",
        time: '2020-08-30 09:10:12'
      },
      {
        id: 4,
        title: '远程医疗：为患者搭起生命的通道',
        author: '内蒙古新闻网',
        content: "...",
        time: '2020-08-30 09:10:12'
      }
    ]
  },
  onLoad() {
    this.setHeight()
  },
  setHeight() {
    var that = this;
    //  高度自适应
    wx.getSystemInfo({
      success(res) {
        var clientHeight = res.windowHeight,
          clientWidth = res.windowWidth,
          rpxR = 750 / clientWidth;
        var calc = clientHeight * rpxR - 280;
        that.setData({
          winHeight: calc
        });
      }
    });
  },
  // 滚动切换标签样式
  switchTab(e) {
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
  }
})