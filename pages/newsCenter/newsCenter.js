Page({
  data: {
    news_content: []
  },
  onLoad(query) {
    this.setData({
      news_content : query
    })
  }
})