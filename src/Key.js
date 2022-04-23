import React, { useState } from 'react'
import Title from 'antd/lib/typography/Title'
import { Button } from 'antd'

export default function Key({privKey, setPrivKey, nextStep}) {

    const validatePK = (pk) => {
        if (pk.length !== 66) {
            return false
        }
        return true
    }
    return (
        <div className='form'>
            <Title level={3}>Authorize with Private Key</Title>
            <input type="text" value={privKey} onChange={(e) => setPrivKey(e.target.value)} />
            <Button disabled={!validatePK(privKey)}>Continue</Button>
        </div>
    )
}
