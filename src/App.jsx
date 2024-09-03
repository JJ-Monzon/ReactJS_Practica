import Prueba from "./view/Prueba"
import Calendario from "./view/Calendario"
import Medicion from "./view/Medicion"
import Usuario from "./view/Usuario"
function App() {
  return (
    <>
      
      <Usuario nombreUsuario={"Juan"} apellidoUsuario={"Monzon"} level={1}/>
      <Prueba />
      <Calendario />
      <Medicion />
      <Usuario />
      
    </>
  )
}

export default App
