/**
 * Created by yongyuehuang on 2017/8/27.
 */
import React from 'react'
import Card from 'components/Commons/Card'
const content = [{
    title: 'react技术栈开源项目',
    content: `地址：<a href="https://github.com/hyy1115/react-redux-webpack3" target="_blank">https://github.com/hyy1115/react-redux-webpack3</a>
    <p>提供了中文文档、redux、 react15.6、 webpack3.5、 ES6/7/8、 LESS、 Router4、axios、async/await、import()懒加载、proxy、路由动画等功能。 </p>`
}, {
    title: 'vue技术栈开源项目',
    content: `地址：<a href="https://github.com/hyy1115/vue2-web" target="_blank">https://github.com/hyy1115/vue2-web</a>
    <p>酷我音乐—vue2、vue-router2、webpack2框架，实现了常用的vue功能。</p>`
}, {
    title: '深入学习ES6学习笔记',
    content: `地址：<a href="https://github.com/hyy1115/ES6-learning" target="_blank">https://github.com/hyy1115/ES6-learning</a>
    <p>本人阅读深入理解ES6的教程之后汇总的学习心得，开源分享给前端爱好者。</p>`
}, {
    title: 'react-echarts3开源项目',
    content: `地址：<a href="https://github.com/hyy1115/react-echarts-modules" target="_blank">https://github.com/hyy1115/react-echarts-modules</a>
    <p>分享这些echarts-react组件的目的，是告诉大家，react可以不需要引入第三方插件，使用echarts，不要惧怕react组件！看过很多人说react难写，因为他们习惯了在jQuery开发模式下导入echarts、swiper、d3等插件。而突然切换到react中，就产生了不知所措的感觉。 如何在react中导入第三方插件，成为了他们心中的痛点，所以一些人就认为需要别人封装好的echarts-react插件或者其他react插件，才能使用，这种想法是错的。</p>`
}]

export default class Project extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        return (
            <div>
                {
                    content.map((c, index) => <Card key={index} title={c.title} content={c.content}/>)
                }
            </div>
        )
    }
}