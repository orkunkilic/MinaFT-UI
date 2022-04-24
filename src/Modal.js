import {Input, Modal} from 'antd'
import React from 'react'

function CustomModal({modal, setModal, setIsUpdated}) {
  return (
    <Modal 
      title="Transfer NFT" 
      visible={modal} 
      onOk={() => {
        setTimeout(() => {
        setModal(false); setIsUpdated(true)
        }, 500)
      }} 
      onCancel={() => setModal(false)}
    >
        <Input type="text" placeholder="Transfer To" />
    </Modal>
  )
}

export default CustomModal