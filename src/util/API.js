var baseUrl = "/api"
// var baseUrl = ""
const login = baseUrl + "/login";
//管理员查找、新增、删除、修改
const findManage = baseUrl + "/findManage"
const addManage = baseUrl + "/addManage"
const delManage = baseUrl + "/delManage"
const updateManage = baseUrl + "/updateManage"

//轮播图查找、获取、删除
const addBanner = baseUrl + "/addBanner"
const banner = baseUrl + "/banner"
const delBanner = baseUrl + "/delBanner"

//家教轮播图添加，获取，删除
const addTeacherBanner = baseUrl + "/addTeacherBanner"
const teacherBanner = baseUrl + "/teacherBanner"
const delTeacherBanner = baseUrl + "/delTeacherBanner"

//家教类型添加，获取，删除，更新
const addTeacherType = baseUrl + "/addTeacherType"
const teacherType = baseUrl + "/teacherType"
const delTeacherType = baseUrl + "/delTeacherType"
const updateTeacherType = baseUrl + "/updateTeacherType"

//家教排行添加，获取，删除，更新
const addTeacherTop = baseUrl + "/addTeacherTop"
const teacherTop = baseUrl + "/teacherTop"
const delTeacherTop = baseUrl + "/delTeacherTop"
const updateTeacherTop = baseUrl + "/updateTeacherTop"

//用户管理添加，获取，删除，更新
const addUser = baseUrl + "/addUser"
const findUser = baseUrl + "/findUser"
const delUser = baseUrl + "/delUser"
const updateUser = baseUrl + "/updateUser"

//修改密码
const changePassManage = baseUrl + "/changePassManage"

//水站添加、获取、删除、更新
const addWater = baseUrl + "/addWater"
const findWater = baseUrl + "/findWater"
const delWater = baseUrl + "/delWater"
const updateWater = baseUrl + "/updateWater"

//水站评论
const addComment = baseUrl + "/addComment"
const findComment = baseUrl + "/findComment"
const delComment = baseUrl + "/delComment"

//维修添加、获取、删除、更新
const addRepair = baseUrl + "/addRepair"
const findRepair = baseUrl + "/findRepair"
const delRepair = baseUrl + "/delRepair"
const updateRepair = baseUrl + "/updateRepair"

//维修评论
const addRepairComment = baseUrl + "/addRepairComment"
const findRepairComment = baseUrl + "/findRepairComment"
const delRepairComment = baseUrl + "/delRepairComment"

//家政轮播图
const addHomeBanner = baseUrl + "/addHomeBanner"
const homeBanner = baseUrl + "/homeBanner"
const delHomeBanner = baseUrl + "/delHomeBanner"

//家政员工信息
const addHomeWorker = baseUrl + "/addHomeWorker"
const findHomeWorker = baseUrl + "/findHomeWorker"
const delHomeWorker = baseUrl + "/delHomeWorker"
const updateHomeWorker = baseUrl + "/updateHomeWorker"

// 获取资格证书接口
const getQualification = baseUrl + "/getQualification"

// 获取家政服务类型 /getHomeType -get请求
const getHomeType = baseUrl + "/getHomeType"

//退出登录 /exit -get请求
const exit = baseUrl + "/exit"

export default {
    login, findManage, addManage, delManage, updateManage,
    addTeacherBanner, teacherBanner, delTeacherBanner,
    addBanner, banner, delBanner,
    addTeacherType, teacherType, delTeacherType, updateTeacherType,
    addTeacherTop, teacherTop, delTeacherTop, updateTeacherTop,
    addUser, findUser, delUser, updateUser,
    changePassManage,
    addWater, findWater, delWater, updateWater,
    addComment, findComment, delComment,
    addRepair, findRepair, delRepair, updateRepair,
    addRepairComment, findRepairComment, delRepairComment,
    addHomeBanner, homeBanner, delHomeBanner,
    addHomeWorker, findHomeWorker, delHomeWorker, updateHomeWorker,
    getQualification, getHomeType, exit

}