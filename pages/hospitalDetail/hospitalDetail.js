import {
  yyb_GetOrganById
} from '../../api/test_api'
Page({
  data: {
    hospitalDetail: [],
    intro: '',
    id: ''
  },
  onLoad(query) {
    let {
      id
    } = this.data
    this.setData({
      id: query.id
    })
    this.getOrganDetail()
  },
  async getOrganDetail() {
    let {
      id
    } = this.data
    let res = await yyb_GetOrganById({
      data: {
        Id: id
      }
    })
    this.setData({
      hospitalDetail: res.data,
      intro: decodeURIComponent(res.data.intro)
    })
  }
})