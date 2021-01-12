import {
  yyb_GetDoctorDetail
} from '../../api/test_api'
Page({
  data: {
    Id: '',
    doctorDetail: [],
    professionalSkill: '',
    dutyDescribe: ''
  },
  onLoad(query) {
    this.setData({
      Id: query.id
    })
    this.getDoctorDetail()
  },
  async getDoctorDetail() {
    let {
      Id
    } = this.data
    let res = await yyb_GetDoctorDetail({
      data: {
        Id
      }
    })
    this.setData({
      professionalSkill: decodeURIComponent(res.data.professionalSkill),
      dutyDescribe: decodeURIComponent(res.data.dutyDescribe),
      doctorDetail: res.data
    })
  }
})