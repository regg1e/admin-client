import React, { Component } from 'react';
import './login.less'
import { Form, Icon, Input, Button} from 'antd';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const from = this.props.form
    const values = from.getFieldsValue()
    console.log(values);
    
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
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="用户名"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password',{
                  rules: [{ required: true, message: 'Please input your Password!' }]
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