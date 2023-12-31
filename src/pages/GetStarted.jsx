import { SaveOutlined } from '@ant-design/icons';
import { Button, Divider, Form, Input, InputNumber, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUserStorage } from '../helpers/getUserStorage';
import { useHideMenu } from '../hooks/useHideMenu';

const { Title, Text } = Typography

const GetStarted = () => {
  const navigate = useNavigate()
  const [agent] = useState(getUserStorage())
  useHideMenu(false);

  const onFinish = ({agentName, desktop}) => {
    localStorage.setItem('agent', agentName)
    localStorage.setItem('desktop', desktop)
    navigate('/desktop', { state: {agentName, desktop} })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    if (agent.agent && agent.desktop) {
      navigate('/desktop')
    }
  },[agent])

  return (
    <>
      <Title level={2}>Get started</Title>
      <Text>Enter your name and Desk ID</Text>
      <Divider />
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 14,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Agent Name"
          name="agentName"
          rules={[
            { required: true, message: 'Please input your name!', },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Desktop"
          name="desktop"
          rules={[
            { required: true, message: 'Please input your Desk Id!', },
          ]}
        >
          <InputNumber min={1} max={99} />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 14,
          }}
        >
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined />
            Begin
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}

export default GetStarted