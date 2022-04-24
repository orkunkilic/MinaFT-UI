import React from 'react'
import Item from './Item'

export default function ItemList({ items, setModal }) {
  console.log(items)
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-around', alignItems: 'start'}}>
        {items.map(item => (
            <Item setModal={setModal} key={item.id} item={item} />
        ))}
    </div>
  )
}
