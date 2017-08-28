/**
 * Created by yongyuehuang on 2017/8/27.
 */
import React from 'react'
import Card from 'components/Commons/Card'
const content = [{
    title: 'github',
    content: `我热爱开源：<a href="https://github.com/hyy1115" target="_blank">https://github.com/hyy1115</a>`
}, {
    title: 'segmentfault',
    content: `我热爱写博客：<a href="https://segmentfault.com/u/hyy1115" target="_blank">https://segmentfault.com/u/hyy1115</a>`
}, {
    title: '知乎',
    content: `我热爱看各类有趣的话题：<a href="https://www.zhihu.com/people/er-yue-shi-xiong/activities" target="_blank">https://www.zhihu.com/people/er-yue-shi-xiong/activities</a>`
}]

export default class User extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div>
                {
                    content.map((c, index) => <Card key={index} title={c.title} content={c.content} />)
                }
            </div>
        )
    }
}