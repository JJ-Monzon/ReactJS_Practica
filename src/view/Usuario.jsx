import { Typography } from 'antd';

const { Title }= Typography;

const Usuario = ({nombreUsuario, apellidoUsuario}) => {

    console.log(nombreUsuario);

    return (
        <>
            <Title level={3}>Hola, {nombreUsuario} {apellidoUsuario}</Title>
        </>
    );
};

export default Usuario;