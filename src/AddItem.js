import React, { Component } from 'react'
import PropTypes from 'prop-types'
class AddItem extends Component {
    state = {
        value: ''
    }
    handleAdd = event => {
        event.preventDefault();
        this.props.addItem(this.state.value);
    }
    onChange = event => {
        this.setState({ value: event.target.value })
    }
    render() {
        return(
            <form onSubmit={this.handleAdd}>
                <input type="text" placeholder="Enter New Item" onChange={this.onChange} />
                <button disabled={this.state.value ? false : true}>Add</button>
            </form>
        )
    }
}

AddItem.propTypes = {
    addItem: PropTypes.func
}

export default AddItem