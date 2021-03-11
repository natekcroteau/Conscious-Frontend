import React, { useState } from 'react'
import { Modal, Button } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import Account from './Account'
import './AccountModal.css'
import 'antd/dist/antd.css';




export default function AccountModal(props) {

  const { userInformation } = props

  const showForms = () => {
    if(localStorage.token){
      return <>
              <h2>Logged In!</h2>
              <Button onClick={logOut}>Logout</Button>
            </>
    }else{
    return <Account userInformation={userInformation} handleOk={handleOk} />
    }
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

    const logOut = () => {
      localStorage.removeItem('token')
      handleOk()
    }


  return (
    <div className="account-header">
      <Button className="account-button" type="primary" onClick={showModal}>
        <UserOutlined />
      </Button>
      <Modal title="Account" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {showForms()}
      </Modal>
    </div>
  )
}
