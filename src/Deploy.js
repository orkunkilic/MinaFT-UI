import React, { useEffect, useState } from 'react'
import Input from 'antd/lib/input/Input';
import Text from 'antd/lib/typography/Text'
import Title from 'antd/lib/typography/Title'
import { Controller, useForm } from "react-hook-form";
import { FilePicker } from './FilePicker.js'
import Stored from  './storeDirectory.mjs'



const STAGE_PICKING = 'picking'



export function App () {
  const [stage, setStage] = useState(STAGE_PICKING)
  const [filePaths, setFilePaths] = useState([])
  const [statusText, setStatusText] = useState('')
  const [storedBytes, setStoredBytes] = useState(0)
  const [storedChunks, setStoredChunks] = useState(0)
  const [totalBytes, setTotalBytes] = useState(0)
  const [totalFiles, setTotalFiles] = useState(0)
  const [cid, setCid] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const handleUploadProgress = async (_, progress) => {
      if (progress.error != null) {
        setError(progress.error)
        setStage(STAGE_ERRORING)
        return
      }
      if (progress.statusText != null) setStatusText(progress.statusText)
      if (progress.storedBytes != null) setStoredBytes(progress.storedBytes)
      if (progress.storedChunks != null) setStoredChunks(progress.storedChunks)
      if (progress.totalBytes != null) setTotalBytes(progress.totalBytes)
      if (progress.totalFiles != null) setTotalFiles(progress.totalFiles)
      if (progress.cid != null) {
        setCid(progress.cid)
        setStage(STAGE_REPORTING)
      }
    }
    ipcRenderer.on('uploadProgress', handleUploadProgress)
    return () => ipcRenderer.off('uploadProgress', handleUploadProgress)
  })

  if (stage === STAGE_ERRORING) {
    return (
      <Layout>
        <ErrorMessage message={error} onClose={() => setStage(STAGE_PICKING)} />
      </Layout>
    )
  }

  if (stage === STAGE_REPORTING) {
    return (
      <Layout>
        <Reporter cid={cid} onClose={() => setStage(STAGE_PICKING)} />
      </Layout>
    )
  }

  if (stage === STAGE_UPLOADING) {
    return (
      <Layout>
        <UploadProgress
          statusText={statusText}
          storedBytes={storedBytes}
          storedChunks={storedChunks}
          totalBytes={totalBytes}
          totalFiles={totalFiles}
        />
      </Layout>
    )
  }

  if (stage === STAGE_AUTHENTICATING) {
    const onToken = async token => {
      await ipcRenderer.invoke('setApiToken', token)
      setStage(STAGE_UPLOADING)
      ipcRenderer.send('uploadFiles', filePaths)
    }
    return (
      <Layout>
        <TokenForm onToken={onToken} />
      </Layout>
    )
  }

  const onPickFiles = async files => {
    const filePaths = files.map(f => f.path)
    setFilePaths(filePaths)
    setError('')
    setStatusText('Reading files...')
    setStoredBytes(0)
    setStoredChunks(0)
    setTotalBytes(files.reduce((total, f) => total + f.size, 0))
    setTotalFiles(files.length)
    setCid('')

    const hasToken = await ipcRenderer.invoke('hasApiToken')
    if (!hasToken) {
      return setStage(STAGE_AUTHENTICATING)
    }

    setStage(STAGE_UPLOADING)
    ipcRenderer.send('uploadFiles', filePaths)
  }
  return (
    <Layout>
      <FilePicker onPickFiles={onPickFiles} />
    </Layout>
  )
}

function Layout ({ children }) {
  return (
    <div className='flex items-center vh-100'>
      <div className='flex-none'>
      </div>
      <div className='flex-auto h-100 flex'>
        {children}
      </div>
    </div>
  )
}


function Deploy() {
    const [baseURI, setBaseURI] = useState('')
    const [baseExtension, setBaseExtension] = useState('')
    const { control, handleSubmit } = useForm();

    const onSubmit = data => console.log(data);
  return (
    <div className='form'>
        <Title level={3}>Deploy Your NFT Contract</Title>
        <input type="file" webkitdirectory mozdirectory /> {/* make it folder amk xd */}
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

