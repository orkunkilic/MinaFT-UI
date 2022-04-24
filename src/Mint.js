import React, { useEffect, useState } from 'react'
import Input from 'antd/lib/input/Input';
import Text from 'antd/lib/typography/Text'
import Title from 'antd/lib/typography/Title'
import { Controller, useForm } from "react-hook-form";
import { FilePicker } from './Filepicker.js'
import Stored from  './storeDirectory.mjs'
import { Alert, Button } from 'antd';



function Mint({nextStep}) {
    
    const mint = async () => {
        setTimeout(() => {
           alert('Minted!')
        }, 500)
    }
  return (
      <>
    <div className='form'>
        <Title level={3}>Mint a NFT</Title>
        <Input placeholder='To Address' />
        <Button type='primary' style={{marginTop: 5, marginBottom: 5}} onClick={mint}>Mint</Button>
        <Button type='primary' onClick={nextStep}>Continue</Button>
    </div>
    </>
  )
}

export default Mint

