const score = function (obj) {
    let re = /^[1-5]$/; //评分1-5
    return re.test(obj)
}
const distance = function (obj) {
    let re = /(^\d+(km)$)|(^\d+\.\d+(km)$)/;//距离4.2km
    return re.test(obj)
}
const tel1 = function (obj) {
    let re = /^(\d{3})-(\d{3})-(\d{4})$///电话400-100-1000
    return re.test(obj)
}
const tel2 = function (obj) {
    let re = /^1[345789]\d{9}$///手机
    return re.test(obj)
}
const price1 = function (obj) {
    let re = /^(\d)+(元\/桶)$///价格
    return re.test(obj)
}
const price2 = function (obj) {
    let re = /^(\d)+(元\/小时)/
    return re.test(obj)
}
const age = function (obj) {
    let re = /^(?:0|[1-9][0-9]?|100)$///年龄
    return re.test(obj)
}
const experience = function (obj) {
    let re = /^\d+年$/
    return re.test(obj)
}
const level = function (obj) {
    let re = /^v[1-9]$///级别
    return re.test(obj)
}
const  pnum = function (obj) {
    let re = /^\d+(\.{0,1}\d+){0,1}$/
    return re.test(obj)
}
export default {
    score, distance, price1, price2, age, experience, level, tel1, tel2, pnum
}