/**
 * Created by yongyuehuang on 2017/8/27.
 */
import React from 'react'
import Card from 'components/Commons/Card'
const content = [{
    title:  '2015.11 - 2015.12 珠海易瘦科技实习',
    content: `公司在一个很小的房间里，幸好不是传销，我都不好意思说这个时候的我只会用jQuery写静态页面，实习了一个月，感觉没有发展，就撤了，果然，一个月后同事说公司倒闭了。
    `
}, {
    title:  '2016.1 - 2016.6 广州久彩信息技术实习',
    content: `未来很迷茫，我来到了一线城市广州，没有光鲜的简历，连github都没有（记得是在大学注册的，但是没有使用过），也没有一篇博客，简历上只写着在学校干过什么，以及上一份不满一个月的实习，技能只有jQuery和bootstrap。\n
    挺幸运的，找到了新东家，从此开始了react开发之路。在新东家CTO的带领下，从零开始react项目，这样就直接跳过ES5，学习ES6了。\n
    开始的时候很难，只能熬过去，居住在城中村，据说这个城中村出国过网易的大boss，算是我对自己的一个激励吧。\n
    项目最后成功上线，心里挺满足的，谁说JS水平差就不会写react？万事无绝对！`
}, {
    title:  '2016.9 - 至今 深圳法狗狗担任前端技术负责人',
    content: `6月份拿到毕业证后，我就回家2个多月，期间考虑着去考公务员，折腾了许久，放不下前端，奋不顾身的来到了深圳，开始了我的新征程。\n
    有幸和法狗狗的CTO、CEO聊天，被梦想感动到，不过也非常有挑战，因为法狗狗刚刚成立，还没有前端产品，需要我一个人从零开始前端项目。我担心过自己是否可以胜任，最终勇气战胜了恐惧。\n
    现在已经过了1年了，产品也迭代了数十次，前端产品线也有好几条，公司融资也成功了，团队从当初的我和CTO2人慢慢的发展起来。\n
    忘了说了，现在还是采用react技术栈开发，至今我仍是前端光杆司令，遇到的所有前端问题只能靠自己解决，算法方面的可以找CTO帮忙。
    `
}
]

export default class Work extends React.Component {
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