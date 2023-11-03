import { Card, Col, Divider, List, Row, Tag, Typography } from 'antd';
import { useHideMenu } from '../hooks/useHideMenu';
import { useContext, useEffect, useState } from 'react';
import { SocketContext } from '../context/SocketContext';
import { getLasts } from '../helpers/getLasts';

const Queue = () => {
  useHideMenu(true);
  const { socket } =useContext(SocketContext)
  const [tickets, setTickets] = useState([])
  const { Title, Text } = Typography

  useEffect(() => {
    getLasts().then(setTickets)
  },[])

  useEffect(() => {
    socket.on('assigned-tickets', (assignedTickets) => {
      setTickets(assignedTickets)
    })

    return () => socket.off('assigned-tickets')
    
  },[socket])

  return (
    <>
      <Title>Attending the client</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 3)}
            renderItem={item => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                  <Tag key={item.ticketNumber} color="volcano">{item.agent}</Tag>,
                  <Tag key={item.ticketNumber} color="magenta">Desktop: {item.desktop}</Tag>
                ]}>
                <Title>No. {item.ticketNumber} </Title>
              </Card>
              </List.Item>)}
            />
      </Col>
      <Col span={12}>
        <Divider>History</Divider>
        <List
          dataSource={tickets.slice(3)}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta 
                title={`Ticket No. ${item.ticketNo}`}
                description={
                  <>
                    <Text type='secondary'>At the desktop </Text>
                    <Tag color='magenta'>{item.desktop}</Tag>
                    <Text type='secondary'>Agent </Text>
                    <Tag color='volcano'>{item.agent}</Tag>
                  </>
                }
              />
            </List.Item>
          )}
        />
      </Col>
    </Row >
    </>
  )
}

export default Queue