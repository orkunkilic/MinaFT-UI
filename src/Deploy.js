import Input from 'antd/lib/input/Input';
import Text from 'antd/lib/typography/Text'
import Title from 'antd/lib/typography/Title'
import React, { useState } from 'react'
import { Controller, useForm } from "react-hook-form";

function Deploy() {
    const [baseURI, setBaseURI] = useState('')
    const [baseExtension, setBaseExtension] = useState('')
    const { control, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);
  return (
    <div className='form'>
        <Title level={3}>Deploy Your NFT Contract</Title>
        <input type="file" webkitdirectory mozdirectory /> {/* make it folder amk */}
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
            <input type="submit" />
        </form>
    </div>
  )
}

export default Deploy