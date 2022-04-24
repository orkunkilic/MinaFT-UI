import React, { useState } from 'react'
import ItemList from './components/ItemList'
import CustomModal from './Modal'

const items = [
    {
        id: 1,
        name: 'Item 1',
        description: 'First NFTs on Mina!'
    },
    {
        id: 2,
        name: 'Item 2',
        description: 'First NFTs on Mina!'
    },
]

const itemsUpdated = [
    {
        id: 1,
        name: 'Item 1',
        description: 'First NFTs on Mina!'
    },
]

function Listing() {
    const [modal, setModal] = useState(false)
    const [isUpdated, setIsUpdated] = useState(0)
  return (
    <div>
        <ItemList items={isUpdated ? itemsUpdated : items} setModal={setModal} />
        {modal && <CustomModal modal={modal} setModal={setModal} setIsUpdated={setIsUpdated} />}
    </div>
  )
}

export default Listing