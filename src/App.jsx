import Prueba from "./view/Prueba"
import Calendario from "./view/Calendario"
import Medicion from "./view/Medicion"
import Usuario from "./view/Usuario"
import { Col, Row } from 'antd';
import { magenta } from '@ant-design/colors';
function App() {
  return (
    <>
      
      <Usuario nombreUsuario={"Juanjo"} apellidoUsuario={"Monzon"} level={1}/>
      <Prueba />
      <Calendario />
      <Medicion />
      <Usuario />
      <Row>
      <Col span={24}>col</Col>
    </Row>
    <Row>
      <Col span={12} style={{ backgroundColor: magenta[3] }}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row>
    <Row>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
      <Col span={8}>col-8</Col>
    </Row>
    <Row>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
      <Col span={6}>col-6</Col>
    </Row>
      
    </>
  )
}

export default App
