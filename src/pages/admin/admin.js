import React, { Component } from 'react';
import { Redirect,Switch,Route } from 'react-router-dom'
import memoryUtil  from '../../utils/memoryUtil'
import Header from '../../components/header'
import LeftNav from '../../components/left-nav';
import Home from '../home/Home'
import Category from '../category/Category'
import Product from '../product/Product'
import { Layout } from 'antd';
const {  Footer, Sider, Content } = Layout;

 class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    const user = memoryUtil.user
    if(!user.id) {
      return (<Redirect to={'/login'} />)
    }
    return ( 
        <Layout style={{height:'100%'}}>
          <Sider>
            <LeftNav></LeftNav>
          </Sider>
          <Layout>
            <Header>Header</Header>
            <Content style={{backgroundColor:'#fff'}}>
              <Switch>
                <Route path={'/home'} component={Home}></Route>
                <Route path={'/category'} component={Category}></Route>
                <Route path={'/product'} component={Product}></Route>
              </Switch>
            </Content>
            <Footer>Footer</Footer>
          </Layout>
        </Layout>
    );
  }
}
 
export default Admin;