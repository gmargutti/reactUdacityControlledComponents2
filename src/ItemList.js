import React, { Component } from 'react'
import Item from './Item'
import PropTypes from 'prop-types'

class ItemList extends Component {
    render() {
        return (
            <div>
                <p className="items">Items</p>
                <ol className="item-list">
                    {this.props.items.map(item => (
                        <Item key={item} item={item} />
                    ))}
                </ol>
            </div>
        )
    }
}

ItemList.propTypes = {
    items: PropTypes.array
}

export default ItemList