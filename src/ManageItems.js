import React, { Component } from 'react';
import AddItem from './AddItem';
import DeleteItem from './DeleteItem'

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

export default ManageItems;