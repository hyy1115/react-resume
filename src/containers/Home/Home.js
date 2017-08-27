/**
 * Created by Administrator on 2016/7/1.
 */
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import * as home from 'actions/home'
import * as global from 'actions/global'

import 'containers/Home/styles/home.less'
import Card from 'components/Commons/Card'

const content = [{
    title:  '我是谁？',
    content: `前端江湖人称“二月”，目前在法狗狗担任前端负责人，从法狗狗创立至今的每一代前端产品，都是我手下的冤魂。\n
    喜欢折腾react技术栈，偶尔也会玩玩vue，有一次为了兼容低版本的浏览器，使用jQuery一天内重构了react的2个页面，并且部署上线，突然发现jQuery做网站比react快好多。\n
    我不喜欢研究底层的东西，但是也花时间看了react技术栈的一些源码、还有ES5和ES6的语法，每次研究都会总结到博客上。\n
    记得以前面试的时候，一些面试官喜欢问IE9之前的解决方案，那我只能说，抱歉，我们有缘无分，我热爱前端新技术，让旧技术给那帮老程序员加班解决去吧！\n
    你要是问我react和vue的区别？MVVM和jQuery开发的区别？==和===的区别？react源码解析？抱歉，我不玩这种无聊的打地鼠游戏，如何减少前端开发成本，让用户体验到更好的前端产品、并且这个产品能够给企业带来收益才是我考虑的事情。\n
    我喜欢看前端界的老程序员们撕逼，因为能够让我找到如何打败产品经理各种伪需求的方法。\n
    如果有机会，我还是希望能够学好算法和正则。\n
    我是一个工程师，工程师解决的是业务层面上的前端问题，别再问我如何写一个迷你react框架出来了。`
    }, {
    title:  '在校经历',
    content: `1、2012-2016在北京理工大学珠海学院网络工程专业就读；\n
            2、大一的时候不喜欢计算机，梦想着转到会计学院；\n
            3、大二热爱上黑客技术，参加过黑客攻防比赛，攻破了一台web服务器；\n
            4、大三开始学习java，除了教材之外，还买了基本springMVC的书籍来看，我幻想着自己毕业后做后端，后来有幸进入导师的web团队，担任前端负责人，开始了web前端设计之路，拿起jQuery就是干；\n
            5、也许这时候的我已经知道毕业后要做什么了，大四前半学期修完最后的课程，开始了寻找前端实习之路。\n
            * 大学之遗憾：\n
            * 没有参加校招\n
            * 没有参加过编程比赛\n
            * 没有好好学习\n
            `
    }, {
    title:  '未来1到2年的目标',
    content: `现在的我去找工作，被各种嫌弃，http协议都说不出来？react源码都不会？算法都不会？原型链都不会？正则都不会？canvas都不会？\n
            你不会看《图解http》吗？你不会看程墨的react源码解析吗？你不会找梁朝伟学算法吗？你不会问楠哥原型链吗？你不会向爬虫工程师学正则吗？你不会研究echarts源码吗？\n
            在创业公司工作，看问题的层面上升到前端架构，如何保证前端架构的快速迭代性、健壮性、以及如何搭建一个最优的前端系统，是我大部分时间在思考的东西。优点就是从一开始就培养了架构师的思想，而缺点是没有太多的时间研究前端基础。\n
            未来1到2年的时间里，我要花时间学多点基础知识，虽然现在开发使用ES6+，但是ES5是面试必考，所以还得学学。`
    }
]

@connect(
    state => {return {...state.home}},
    dispatch => bindActionCreators({...home, ...global}, dispatch)
)
export default class Home extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return(
            <div>
                {
                    content.map((c, index) => <Card key={index} title={c.title} content={c.content} />)
                }
            </div>
        )
    }
}
Home.propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
}