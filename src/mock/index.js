// 引入mockjs
const Mock = require('mockjs')
//获取 mock.Random 对象
const Random = Mock.Random
//使用mockjs模拟数据
let dataList = Mock.mock({
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'list|1-10': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    'name': '@FIRST',
    'creatTime': Random.datetime()
  }]
})
//根据数据模板生成模拟数据
Mock.mock('/api/getprodlist', 'get',() => {
  return {
    // eslint-disable-next-line no-undef
    code:'D0000',
    status: 0,
    data:dataList,
    message: 'success'
  }
})