import React from 'react'
import Item from '../Item/Item'

export default ({ itemsProp }) =>
    <ul>{ itemsProp.map((item, i) => <Item key={i} data={item} />) }</ul>
