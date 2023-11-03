import { DownloadOutlined } from '@ant-design/icons'
import { Button, Col, Row, Typography } from 'antd'
import { useHideMenu } from '../hooks/useHideMenu';
import { useContext, useState } from 'react';
import { SocketContext } from '../context/SocketContext';

const CreateTicket = () => {
  useHideMenu(true);
  const { socket } = useContext(SocketContext)
  const [ticket, setTicket] = useState(null)

  const { Title, Text } = Typography

  const newTicket = () => {
    socket.emit('request-ticket', null, (ticket) => {
      setTicket(ticket);
    })
  }

  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>
            Press the button for a new ticket
          </Title>
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
            onClick={newTicket}
          >New Ticket</Button>
        </Col>
      </Row>
      {ticket && (<Row style={{ marginTop: 100 }}>
        <Col span={14} offset={6} align="center">
          <Text level={2}>
            Your number
          </Text>
          <br />
          <Text type='success' style={{ fontSize: 55 }}>
            {ticket.ticketNumber}
          </Text>
        </Col>
      </Row>)}
    </>
  )
}

export default CreateTicket