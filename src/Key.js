import React, { useState } from 'react'
import Title from 'antd/lib/typography/Title'
import { Button } from 'antd'
import './Key.css'

export default function Key({privKey, setPrivKey, nextStep}) {

    const myString = {privKey};
    const pkLength = myString.length;

    const validatePK = (pk) => {
        if (pkLength !== 66) {
            return false
        }

        
        return true
    }
    return (
        <div className='form'>
            <div className='titles'>
                <Title level={2} color="white">- Authorize with Private Key - </Title>
            </div>
            <div className='input_card'>
                <input className='inpit' type="text" value={privKey} onChange={(e) => setPrivKey(e.target.value)} />
            </div>
            <Button className='buton' onClick={nextStep}>Continue</Button>
        </div>
    )
}
