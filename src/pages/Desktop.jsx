import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons'
import { Button, Col, Divider, Row, Typography } from 'antd'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getUserStorage } from '../helpers/getUserStorage'
import { SocketContext } from '../context/SocketContext'

const { Title, Text } = Typography

const Desktop = () => {

  const navigate = useNavigate()
  const [agent] = useState(getUserStorage())
  const [workingTicket, setWorkingTicket] = useState(null)
  const { socket } = useContext(SocketContext)

  const exit = () => {
    localStorage.removeItem('agent')
    localStorage.removeItem('desktop')
    navigate('/get-started')
  }
  
  const nextTicket = () => {
    socket.emit('next-ticket', agent, (ticket) => {
      setWorkingTicket(ticket)
    })
  }

  useEffect(() => {
    if (!agent.agent && !agent.desktop) {
      navigate('/get-started')
    }
  },[agent])

  return (
    <>
      <Row>
        <Col span={20}>
          <Title>{agent.agent}</Title>
          <Text>You are working on desktop: </Text>
          <Text type="success">{agent.desktop}</Text>
        </Col>
        <Col span={4} align="right">
          <Button shape='round' type='default' onClick={exit} danger>
            <CloseCircleOutlined />
            Exit
          </Button>
        </Col>
      </Row>
      <Divider />
      {workingTicket && (<Row>
        <Col>
          <Text>You are currently working with the ticket no: </Text>
          <Text
            style={{ fontSize: 30 }}
            type="danger"
          >
            {workingTicket?.ticketNumber}
          </Text>
        </Col>
      </Row>)}
      <Row>
        <Col offset={18} span={6} align="right">
          <Button
            onClick={nextTicket}
            shape='round'
            type='primary'
          >
            Next
            <RightOutlined />
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default Desktop