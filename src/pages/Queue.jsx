import { Card, Col, Divider, List, Row, Tag, Typography } from 'antd';
import { useHideMenu } from '../hooks/useHideMenu';

const data = [
  {
    ticketNo: 33,
    escritorio: 3,
    agente: 'Fernando Herrera'
  },
  {
    ticketNo: 34,
    escritorio: 4,
    agente: 'Melissa Flores'
  },
  {
    ticketNo: 35,
    escritorio: 5,
    agente: 'Carlos Castro'
  },
  {
    ticketNo: 36,
    escritorio: 3,
    agente: 'Fernando Herrera'
  },
  {
    ticketNo: 37,
    escritorio: 3,
    agente: 'Fernando Herrera'
  },
  {
    ticketNo: 38,
    escritorio: 2,
    agente: 'Melissa Flores'
  },
  {
    ticketNo: 39,
    escritorio: 5,
    agente: 'Carlos Castro'
  },
];

const Queue = () => {
  const { Title, Text } = Typography
  useHideMenu(true);

  return (
    <>
      <Title>Attending the client</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={data.slice(0, 3)}
            renderItem={item => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                  <Tag key={item.ticketNo} color="volcano">{item.agente}</Tag>,
                  <Tag key={item.ticketNo} color="magenta">Desktop: {item.escritorio}</Tag>
                ]}>
                <Title>No. {item.ticketNo} </Title>
              </Card>
              </List.Item>)}
            />
      </Col>
      <Col span={12}>
        <Divider>History</Divider>
        <List
          dataSource={data.slice(3)}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta 
                title={`Ticket No. ${item.ticketNo}`}
                description={
                  <>
                    <Text type='secondary'>At the desktop </Text>
                    <Tag color='magenta'>{item.ticketNo}</Tag>
                    <Text type='secondary'>Agent </Text>
                    <Tag color='volcano'>{item.agente}</Tag>
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