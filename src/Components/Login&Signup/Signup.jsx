import React from 'react'
import {Button, Card, Form, Input} from 'antd';
import {LockOutlined, UserOutlined,PhoneOutlined,MailOutlined,} from '@ant-design/icons';
import { Link } from 'react-router-dom';
import './Signup.css';
function Signup() {
  
  return (
    <div className='Container'>
        <div className="Signup-container">
            <div className="Signup-form-container">
                <Card className='Signup-card'>
                <div className="Signup-heading">
            <h1 className='Signup-heading1'>SIGN UP</h1>
            <p>Create Account</p>
            </div>
                <Form >
            <Form.Item name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your Full Name!',
                },]}>
              <Input prefix={<UserOutlined style={{ fontSize: '18px' }} />}placeholder="FULL NAME"
                style={{ width: '100%', height: '40px' }}/>
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  type: 'email',
                  message: 'Please Enter a valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}>
              <Input prefix={<MailOutlined style={{ fontSize: '18px' }} />}placeholder="E-MAIL"
                style={{ width: '100%', height: '40px' }}/>
            </Form.Item>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: 'Please input your Phone number!',
                },
                {
                  pattern: /^[0-9]{10}$/,
                  message: 'Please enter a valid 10-digit phone number!',
                },
              ]}
            >
              <Input prefix={<PhoneOutlined style={{ fontSize: '18px' }} />}
                placeholder="PHONE NUMBER"style={{ width: '100%', height: '40px' }}/>
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
                {
                  min: 8,
                  message: 'Password must be at least 8 characters long!',
                },{
                  max:15,
                  message:'Password must be less than 15 characters long only!'
                },
              ]}hasFeedback >
              <Input.Password prefix={<LockOutlined style={{ fontSize: '18px' }} />}placeholder="PASSWORD"
                style={{ width: '100%', height: '40px' }} />
            </Form.Item>
            <div className='Signup-btn-container'>
              <Button className='Signup-button'>Sign up</Button>
              </div>
              <div className="Login-container">
                <p>Already Have Account?<Link to='/'>Login</Link> Here</p>
              </div>
              <div className="Business-signup-container">
                <p>Buying for work?<Link to='/'>Create a Free Business Account</Link> Here</p>
              </div>
          </Form>
                </Card>
            </div>
            {/* <div className="Signup-carousal-container">
                <Card>
                    
                </Card>
            </div> */}
        </div>

    </div>
  )
}

export default Signup