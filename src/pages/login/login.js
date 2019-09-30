import React, { Component } from 'react';
import './login.less'
import { Form, Icon, Input, Button} from 'antd';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  handleSubmit = () => {
    console.log(1);
    
    return
  }

  render() { 
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
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />,
              </Form.Item>
              <Form.Item>
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />,
              </Form.Item>
              <Form.Item>
                <Button type="primary"  className="login-form-button">
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
 
export default Login;