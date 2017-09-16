/**
 * Created by yongyuehuang on 2017/8/27.
 */
import React from 'react'
import PropTypes from 'prop-types'
import './styles/card.less'
const Card = (props) => {
    const { title, content } = props
    return (
        <div className="card">
            <p className="title">
                <span>{title}</span>
            </p>
            <div className="content">
                {
                    content.includes('<a') ? <p dangerouslySetInnerHTML={{__html: content}}></p> : content.split(/\n/).map((value, index) => <p key={index}>{value}</p>)
                }
            </div>
        </div>
    )
}
Card.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string
}
export default Card