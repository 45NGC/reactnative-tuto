import axios from 'axios';

// Esta funcion realiza una peticion de conexion a la red
const ProductsService = {
    getProducts: () => {
        return axios.get('https://raw.githubusercontent.com/RoiDopazo/resources/master/react-tuto/data.json');
    }
};
export default ProductsService;