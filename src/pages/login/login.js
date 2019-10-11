import React, { Component } from 'react';
import './login.less'
import { message,Form, Icon, Input, Button} from 'antd';
import {reqLogin} from '../../api/index'
import  memoryUtil  from '../../utils/memoryUtil'
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        const res = await reqLogin(values)
        console.log(res);
        
        if(res.status === 0) {
          message.success('登录成功')
          memoryUtil.user = res.data
          localStorage.setItem('user',JSON.stringify(res.data))
          this.props.history.replace('/')
        } else {
          message.error(res.message)
        }
        // reqLogin(values).then(res => {
        //   console.log(res);
        //   if(res.state == 0) {
        //     message.success('登录成功')
        //   } else {
        //     message.error(res.msg)
        //   }
        // }) 
      } else {
        console.log('输入有误');
        
      }
    });
    // const from = this.props.form
    // const values = from.getFieldsValue()
    // console.log(values);
    
  }

  render() { 
    const from  = this.props.form;
    const { getFieldDecorator } = from;

    return ( 
      <div className="login">
        <header className="login-header">
          <h1>React项目:后台管理系统</h1>
        </header>
        <main className="login-main">
          <div className="login-from">
            <h2>用户登录</h2>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [
                  { required: true, message: '请输入用户名!' },
                  { max: 12, message: '最长字段12!' },
                  { min: 4, message: '最小字段4!' }
                ]
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="用户名"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password',{
                  rules: [
                    { required: true, message: '请输入密码!' },
                    { max: 12, message: '最长字段12!' },
                    { min: 4, message: '最小字段4!' }
                  ]
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="密码"
                  />
                )}
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </main>
      </div>
     )
  }
}

// 将组件包装
const WrappedNormalLoginForm = Form.create()(Login);

export default WrappedNormalLoginForm;