import Text from 'antd/lib/typography/Text'
import React, { useState } from 'react'
import { Typography } from 'antd';
import Deploy from './Deploy';
import Key from './Key';
import Listing from './Listing';

const { Title } = Typography;

function Content() {
    const [step, setStep] = useState(3)
    const [privKey, setPrivKey] = useState('')

    const nextStep = () => {
        setStep(step + 1)
    }
    return (
        <div className='content'>
            <Title>MinaFT</Title>
            <div className='steps'>      
            {step === 0 && <Key privKey={privKey} setPrivKey={setPrivKey} nextStep={nextStep}/>}
            {step === 1 && <Deploy />}
            {step === 2 && <Text>Step 3</Text>}
            {step === 3 && <Listing privKey={privKey}/>}
            </div> 
        </div>
    )
}
 
export default Content