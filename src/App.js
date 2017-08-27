import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Route, Router } from 'react-router-dom'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import createHistory from 'history/createHashHistory'
const history = createHistory()

/*
 全局导入less
 */
import './app.less'
const avatar = require('./images/page-img_1.jpeg')
const one = require('./images/1.png')
const two = require('./images/2.png')
const three = require('./images/3.png')
const four = require('./images/4.png')
import asyncComponent from './AsyncComponent'

import Home from 'containers/Home/Home'
import Nav from 'components/Commons/Nav'

import * as global from 'actions/global'

const Work = asyncComponent(() => import(/* webpackChunkName: "work" */ "./containers/Work/Work"))
const User = asyncComponent(() => import(/* webpackChunkName: "user" */ "./containers/User/User"))
const Project = asyncComponent(() => import(/* webpackChunkName: "project" */ "./containers/Project/Project"))
const routes = [{
        path: '/',
        exact: true,
        component: Home
    }, {
    path: '/work',
    component: Work
    }, {
    path: '/user',
    component: User
}, {
    path: '/project',
    component: Project
}]
const navList = [
    {text: "我的秘密", path: '/', icon: one},
    {text: "工作经历", path: '/work', icon: two},
    {text: "开源项目", path: '/project', icon: three},
    {text: '社交账号', path: '/user', icon: four}
]
@connect(
    state => {return {...state.global}},
    dispatch => bindActionCreators({...global}, dispatch)
)
export default class App extends React.Component {
    render() {
        const { routeKey, setRouteKey } = this.props
        return (
            <Router history={history}>
                <Route render={({ location }) => {
                    return(
                        <div className="clearfix">
                            <div className="left">
                                <Nav
                                    title="二月 深圳"
                                    avatar={avatar}
                                    navList={navList}
                                    routeKey={routeKey}
                                    setRouteKey={setRouteKey}
                                    currentPathname={history.location.pathname}
                                />
                            </div>
                            <div className="right">
                                <CSSTransitionGroup
                                    transitionName="normal"
                                    transitionEnter={true}
                                    transitionLeave={true}
                                    transitionEnterTimeout={400}
                                    transitionLeaveTimeout={400}
                                >
                                    {
                                        routes.map((route, index) => (
                                            <Route key={index} exact={route.exact} path={route.path} component={route.component} />
                                        ))
                                    }
                                </CSSTransitionGroup>
                            </div>
                        </div>
                    )
                }}/>
            </Router>
        )
    }
}
