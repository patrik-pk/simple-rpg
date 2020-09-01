import React from 'react'
import Item from '../Item/Item'

export default function InventoryRow({ itemsProp }) {
    return (
        <ul>{ itemsProp.map((item, i) => <Item key={i} data={item} />) }</ul>
    )
}