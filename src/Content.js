import Text from 'antd/lib/typography/Text'
import React, { useState } from 'react'
import { Typography } from 'antd';
import Deploy from './Deploy';
import Key from './Key';
import Listing from './Listing';
import Mint from './Mint';

const { Title } = Typography;

function Content() {
    const [step, setStep] = useState(0)
    const [privKey, setPrivKey] = useState('')

    const nextStep = () => {
        setStep(step + 1)
    }
    return (
        <div className='content'>
            <Title className='titos'>MinaFT</Title>
            <div className='steps'>      
            {step === 0 && <Key privKey={privKey} setPrivKey={setPrivKey} nextStep={nextStep}/>}
            {step === 1 && <Deploy nextStep={nextStep} />}
            {step === 2 && <Mint nextStep={nextStep} />}
            {step === 3 && <Listing privKey={privKey}/>}
            </div> 
        </div>
    )
}
 
export default Content