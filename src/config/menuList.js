const menuList = [
  {
    title: '首页',
    key: '/home',
    icon: 'home'
  },
  {
    title: '商品',
    key: '/products',
    icon: 'appstore',
    children: [
      {
        title: '品类管理',
        key: '/category',
        icon:'bars'
      },
      {
        title: '商品管理',
        key: '/product',
        icon:'tool'
      },
    ]
  },
  {
    title: '用户管理',
    key: '/user',
    icon:'user'
  },
  {
    title: '角色管理',
    key: '/role',
    icon:'safety'
  },
  {
    title: '图形图表',
    key: '/bar',
    icon: 'hdd',
    children: [
      {
        title: '柱形图',
        key: '/bar/lin',
        icon:'bars'
      },
      {
        title: '折线图',
        key: '/bar/zhe',
        icon:'tool'
      },
      {
        title: '饼图',
        key: '/bar/par',
        icon:'tool'
      }
    ]
  }
]

export default menuList