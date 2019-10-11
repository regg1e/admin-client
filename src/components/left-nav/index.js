import React, { Component } from 'react';
import './index.less';
import {Link} from 'react-router-dom'
import menuList from '../../config/menuList'
import { Menu, Icon} from 'antd';
const { SubMenu } = Menu;
class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  getMenuList = (menuList) => {
    return menuList.map(item => {
      if(!item.children) {
        return (
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </span>
            }
          >
          {this.getMenuList(item.children)}
          </SubMenu>
        )
      }
    })
  }
  render() { 
    return ( 
      <div className='left-nav'>
        <div className='left-nav-header'>
          <Link to={'/home'}>
            <Icon className='icon' type="dribbble" />
            <span>Reggie后台</span>
          </Link>
        </div>
        <Menu
          mode="inline"
          theme="dark"
        >
          {/* <Menu.Item key="1">
            <Link to={'/home'}>
              <Icon type="pie-chart" />
              <span>首页</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>商品</span>
              </span>
            }
          >
              <Menu.Item key="5">
                <Link to={'/category'} />
                <span>品类管理</span>
              </Menu.Item>
            <Menu.Item key="6">
              <Link to={'/product'} />
              <span>商品管理</span>
            </Menu.Item>
          </SubMenu> */}
          {this.getMenuList(menuList)}
        </Menu>
      </div>
     );
  }
}
 
export default LeftNav;