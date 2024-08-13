import React from 'react'
import {Button, Card, Carousel, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link} from 'react-router-dom';
import './Login.css'
import shoplogo from '../../Assets/web shop.svg'
import welcome from '../../Assets/welcome.svg'

function Login() {
  return (
    <div className='container'>
        <div className="Form-container">
          <div className="Login-container">
           <Card className='Login-card-1'>
            <div className="Login-heading">
            <h1 className='Login-heading1'>SIGN IN</h1>
            <p>to access Shop Cart</p>
            </div>
            <Form name="login-form">
              <Form.Item name="Phone"
                rules={[
                  {
                    pattern: /^[0-9]{10}$/,
                    message: 'Please enter a valid 10-digit phone number!',
                  },
                  {
                    required: true,
                    message: 'Please input your Phone',
                  },
                ]}
              >
                <Input prefix={<UserOutlined style={{ fontSize: '20px' }} />} placeholder="Phone or Email"
                  style={{ width: '100%', height: '40px' }}/>
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your Password!',
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined style={{ fontSize: '20px' }} />}
                  placeholder="Password"
                  style={{ width: '100%', height: '40px' }}/>
              </Form.Item>
              <div className='Forget-container'>
              <a href="http://">Forget Password?</a>
              </div>
              <div className='Login-btn-container'>
             <Button className='Login-button'><Link to='/userdash'> Sign in</Link></Button>
              </div>
              <div className="Signup-container">
                <p>Don't Have Account?<Link to='/signup'>Signup</Link> Here</p>
              </div>
              </Form>
           </Card>
           </div>
           </div>
           <div className="Carousel-Container">
          <Card className='Carousel-Card'>
            <Carousel autoplay dotPosition="top">
              <div className="Carousel-Container-1">
              <h3>Welcome! to SHOPCART</h3>
                <img src={welcome} alt="Login logo" />
                <h4>We are delighted to have you here. At SHOPCART,</h4>
                <p>we strive to bring you the finest selection of products and the latest fashion trends at unbeatable prices.</p>
              </div>
              <div className="Carousel-Container-2">
                <h3>Start Shopping Now!</h3>
                <img src={shoplogo} alt="Sign logo" />
                <p>Browse through our categories and find what you love. We are committed to making your shopping experience smooth and enjoyable.</p>
              </div>
              {/* <div className="Carousel-Container-3">
                <h3>Forget Password</h3>
                <img src={welcome} alt="forget logo" />
                <p>Don't worry, it happens to the best of us. Just click below, and we'll give you instructions on how to reset your password.</p>
              </div> */}
            </Carousel>
          </Card>
        </div>
           
           
       

        
    </div>
  )
}

export default Login