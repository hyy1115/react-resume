/**
 * Created by Administrator on 2016/7/1.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(index) {
        this.props.setRouteKey(index + 1)
    }
    render() {
        const { avatar, title, navList, currentPathname } = this.props
        return (
            <div className="nav">
                <div className="img"><img src={avatar} title="二月"/></div>
                <p className="title"><span>{title}</span></p>
                <p className="content">
                    <span>React 架构师，熟悉ES6开发，熟练掌握前端组件开发。
                    GitHub <a href="https://github.com/hyy1115/react-redux-webpack3" target="_blank">React 技术栈框架开源项目</a>作者，<a href="https://github.com/hyy1115/ES6-learning" target="_blank">前端圈《深入理解ES6笔记》</a>作者。</span>
                </p>
                <ul>
                    {
                        navList.map((list, index) => {
                            const cls = {
                                width: list.path === currentPathname ? '100%' : '0',
                                left: list.path === currentPathname ? '0' : '50%'
                            }
                            return (
                                <li key={index}>
                                    <Link to={list.path}
                                          onMouseMove={() => {}}
                                          style={{color: list.path === currentPathname ? '#fff' : '#444'}}
                                          onClick={() => this.handleClick(index)}
                                    >
                                        <img className="icon" src={list.icon} alt=""/>
                                        <span className="text">{list.text}</span>
                                        <span className="nav-bottom" style={cls}></span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
Nav.propTypes = {
    title: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    navList: PropTypes.array.isRequired,
    routeKey: PropTypes.number.isRequired,
    setRouteKey: PropTypes.func,
    currentPathname: PropTypes.string
}
