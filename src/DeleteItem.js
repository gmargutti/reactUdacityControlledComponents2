import React, { Component } from 'react'
import PropTypes from 'prop-types'
class DeleteItem extends Component {
    render() {
        return(
            <div>
                <button disabled={this.props.deleteDisabled} onClick={this.props.deleteLastItem}>Delete Last Item</button>
            </div>
        )
    }
}

DeleteItem.propTypes = {
    deleteLastItem: PropTypes.func,
    deleteDisabled: PropTypes.bool
}

export default DeleteItem