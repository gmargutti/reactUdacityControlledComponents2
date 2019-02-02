import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Item extends Component {
    render() {
        return(
            <li>{this.props.item}</li>
        )
    }
}

Item.propTypes = {
    item: PropTypes.string
}

export default Item