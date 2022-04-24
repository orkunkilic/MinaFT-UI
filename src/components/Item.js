import { Card, Image } from 'antd'
import Meta from 'antd/lib/card/Meta'
import Text from 'antd/lib/typography/Text'
import React from 'react'
import Bora from '../assets/nft.webp'
import SendOutlined from '@ant-design/icons/SendOutlined'
export default function Item({item, setModal}) {
  return (
      <>
    <Card
    hoverable
    style={{ width: 240 }}
    cover={<Image src={Bora}/>}
  >
    <Meta title={item.name} description={item.description} />
    <SendOutlined onClick={() => setModal(true)} style={{fontSize: 30, position: 'absolute', right: 5, bottom: 10}} />
  </Card>
  </>
  )
}
