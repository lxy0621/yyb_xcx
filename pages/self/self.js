import {
  yyb_wxLogin
} from '../../api/wx_api'
Page({
  data: {
    userInfo: []
  },
  onLoad() {
    this.getCode()
  },
  async getCode() {
    let res = await yyb_wxLogin()
    console.log(res)
  },
  getUserInfo(e) {
    let nickName = e.detail.userInfo.nickName
    let avatarUrl = e.detail.userInfo.avatarUrl
    let userInfo = [nickName, avatarUrl]
    this.setData({
      userInfo
    })
  }
})