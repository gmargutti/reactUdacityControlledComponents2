import React, { Component } from 'react'

class DeleteItem extends Component {
    render() {
        return(
            <div>
                <button disabled={this.props.deleteDisabled} onClick={this.props.deleteLastItem}>Delete Last Item</button>
            </div>
        )
    }
}

export default DeleteItem