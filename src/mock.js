//引入
const Mock = require("mockjs")
//获取mock.Random对象
const Random = Mock.Random
//mock新闻数据
const produceNewsData = function() {

    let newsList = [];
    for (let i = 0; i < 20; i++) {
        let newNewsObject = {
            title: Random.ctitle(), // Random.ctitle( min, max ) 随机产生一个中文标题，长度默认在3-7之间
            content: Random.cparagraph(), // Random.cparagraph(min, max) 随机生成一个中文段落，段落里的句子个数默认3-7个
            createdTime: Random.date() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；
        }
        newsList.push(newNewsObject)
    }
        return newsList;
}
// const positionType = function(){
//
// }
Mock.mock('/mock/news', produceNewsData) // 后面讲这个api的使用细节
Mock.mock("/mock/login",true);
// Mock.mock("/mock/positionInfo",);
