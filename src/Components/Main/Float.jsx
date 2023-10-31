import {  MailOutlined,  PhoneOutlined, WhatsAppOutlined, } from '@ant-design/icons';
import React, { useState } from 'react';
import { FloatButton, Switch } from 'antd';






const App = () => {
    const openWhatsapp = () =>{
        window.open(
            "https://wa.me/+19179986500"
        )
    }
    
    const openMail = () =>{
        window.open(
            "mailto:taylorsfloorsinc@gmail.com"
        )
    }
    
    const openCall = () =>{
        window.open(
            "tel:+19179986500"
        )
    }

  const [open, setOpen] = useState(true);
  const onChange = (checked) => {
    setOpen(checked);
  };
  return (
    <>
      <FloatButton.Group
        open={open}
        trigger="click"
        style={{
          right: 24,
        }}
        icon={<PhoneOutlined />}
      >

        
        <FloatButton icon={ <WhatsAppOutlined/> } onClick={openWhatsapp} />
        <FloatButton icon={ <MailOutlined/> } onClick={openMail} />
        <FloatButton icon={ <PhoneOutlined/> } onClick={openCall} />
      
      </FloatButton.Group>
      <Switch
        onChange={onChange}
        checked={open}
        style={{
          margin: 16,
        }}
      />
    </>
  );
};
export default App;