const MD5 = require('../utils/md5')
const BASE_URL = 'http://192.168.120.200:8012/'
// APP_ID
let APP_ID = '1E076DF2223253E8BE06E98EA173AD6D';
// 时间戳
var date = new Date();
var y = date.getFullYear();
var m = date.getMonth() + 1;
m = m < 10 ? ('0' + m) : m;
var d = date.getDate();
d = d < 10 ? ('0' + d) : d;
var h = date.getHours();
h = h < 10 ? ('0' + h) : h;
var minute = date.getMinutes();
var second = date.getSeconds();
minute = minute < 10 ? ('0' + minute) : minute;
second = second < 10 ? ('0' + second) : second;
let time = y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
let timestamp = Date.parse(time);
timestamp = timestamp / 1;
// APP_KEY
let APP_KEY = '91D0C2744552CBCF12CFA2BC0C39AB8F';
//Token
let Token = MD5.hexMD5((APP_ID + APP_KEY + time)).toUpperCase();

function fetch(options) {
  let p = new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + options.url,
      data: options.data || {},
      header: options.header = {
        APP_ID: '1E076DF2223253E8BE06E98EA173AD6D',
        Timestamp: timestamp,
        Token
      },
      method: options.methods || 'GET',
      success: res => {
        resolve(res)
      },
      fail: err => {
        reject(err)
      }
    })
  })
  return p
}
// 获取医疗机构列表信息
export const yyb_GetOrganList = (options) => {
  return fetch({
    url: '/API/GetOrganList',
    data: options.data
  })
}
// 获取医疗机构详细信息
export const yyb_GetOrganById = (options) => {
  return fetch({
    url: '/API/GetOrganById',
    data: options.data
  })
}
// 获取下级（二级）科室列表信息
export const yyb_GetDepartmentList = (options) => {
  return fetch({
    url: '/API/GetSubordinateDepartmentList',
    data: options.data
  })
}
// 获取医生列表信息
export const yyb_GetDoctorList = (options) => {
  return fetch({
    url: '/API/GetPersonList',
    data: options.data
  })
}
// 获取医生详细信息
export const yyb_GetDoctorDetail = (options) => {
  return fetch({
    url: '/API/GetPersonById',
    data: options.data
  })
}