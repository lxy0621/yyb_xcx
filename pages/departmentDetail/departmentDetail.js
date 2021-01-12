import {
  yyb_GetDepartmentList
} from '../../api/test_api'
Page({
  data: {
    departmentId: '',
    departmentName: '',
    departmentDetail: []
  },
  onLoad(query) {
    this.setData({
      departmentId: query.id,
      departmentName: query.name
    })
    this.getDepartmentDetail()
  },
  async getDepartmentDetail() {
    let {
      departmentId
    } = this.data
    let res = await yyb_GetDepartmentList({
      data: {
        Id: departmentId
      }
    })
    this.setData({
      departmentDetail: res.data.rows
    })
  }
})