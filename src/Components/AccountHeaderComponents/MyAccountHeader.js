import React, { useState } from 'react'
import { Modal, Button } from 'antd'
import './MyAccountHeader.css'
import MyAccount from './MyAccount'
import TitleHeader from './TitleHeader'
import 'antd/dist/antd.css';


export default function MyAccountHeader() {

  const showForms = () => {
    return <MyAccount closeModal={handleOk} />
  }

    const [isModalVisible, setIsModalVisible] = useState(false);
  
    const showModal = () => {
      setIsModalVisible(true)
    }
  
    const handleOk = () => {
      setIsModalVisible(false)
    }
  
    const handleCancel = () => {
      setIsModalVisible(false)
    }




  return (
    <div className="account-header">
      <TitleHeader/>
      <Button className="account-button" type="primary" onClick={showModal}>
        Account
      </Button>
      <Modal title="Account" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {showForms()}
      </Modal>
    </div>
  )
}
