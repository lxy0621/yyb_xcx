//wx.login封装
export const yyb_wxLogin = () => {
  return new Promise((resolve, reject) => {
    wx.login({
      time: 10000,
      success: resolve,
      fail: reject
    })
  })
}