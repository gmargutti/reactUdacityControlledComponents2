import React, { Component } from 'react';
import AddItem from './AddItem';
import DeleteItem from './DeleteItem'
import PropTypes from 'prop-types'

class ManageItems extends Component {
    state = {
        value: ''
    }
    render() {
        return(
            <div>
                <AddItem addItem={this.props.addItem} />
                <DeleteItem deleteLastItem={this.props.deleteLastItem} deleteDisabled={this.props.deleteDisabled} />
            </div>
        )
    }
}

ManageItems.propTypes = {
    addItem : PropTypes.func,
    deleteLastItem : PropTypes.func,
    deleteDisabled : PropTypes.bool
}

export default ManageItems;