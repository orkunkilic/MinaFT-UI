import React, { useEffect, useState } from 'react'
import Input from 'antd/lib/input/Input';
import Text from 'antd/lib/typography/Text'
import Title from 'antd/lib/typography/Title'
import { Controller, useForm } from "react-hook-form";
import { FilePicker } from './Filepicker.js'
import Stored from  './storeDirectory.mjs'
import upload from './storeDirectory.mjs';


function Deploy({nextStep}) {
    const [baseURI, setBaseURI] = useState('')
    const [baseExtension, setBaseExtension] = useState('')
    const { control, handleSubmit } = useForm();

    const onPickFiles = async (files) => {
        const result = await upload(files);
        console.log(result)
        alert('Uploaded!')
        //const cid = await client.Stored(["sıçtıktan sonra file  "])
    } 
    


    const onSubmit = data => {
        console.log(data);
        setTimeout(() => {
            alert('Deployed!');
            nextStep();
        }
        , 1000)
    }
  return (
    <div className='form'>
        <Title level={3}>Deploy Your NFT Contract</Title>
        <FilePicker onPickFiles={onPickFiles}/> 
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="name"
                control={control}
                render={({ field }) => <Input placeholder='Token Name' {...field} />}
            />
            <Controller
                name="symbol"
                control={control}
                render={({ field }) => <Input placeholder='Token Symbol' {...field} />}
            />
            <Controller
                name="supply"
                control={control}
                render={({ field }) => <Input placeholder='Total Supply' {...field} />}
            />
            <Controller
                name="name"
                control={control}
                defaultValue={baseURI}
                render={({ field }) => <Input placeholder='Base URI' disabled={true} {...field} />}
            />
            <Controller
                name="name"
                control={control}
                defaultValue={baseExtension}
                render={({ field }) => <Input placeholder='Base Extension' disabled={true} {...field} />}
            />



            <input type="Deploy minNFTs!" />
        </form>
    </div>
  )
}

export default Deploy

