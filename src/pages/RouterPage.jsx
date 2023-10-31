import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UIContext } from '../context/UIContext';

const { Sider, Content } = Layout;

const RouterPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const {isSidebarOpen} = useContext(UIContext);
  
  return (
    <Layout style={{ height: '100vh' }}>
      <Sider collapsedWidth={0} breakpoint='md' hidden={isSidebarOpen} zeroWidthTriggerStyle={{display:'none'}}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
        >
          <Menu.Item key={'1'} icon={<UserOutlined />}>
            <Link to="/get-started">Get Started</Link>
          </Menu.Item>
          <Menu.Item key={'2'} icon={<VideoCameraOutlined />}>
            <Link to="/queue">Queue</Link>
          </Menu.Item>
          <Menu.Item key={'3'} icon={<UploadOutlined />}>
            <Link to="/new-ticket">New Ticket</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default RouterPage