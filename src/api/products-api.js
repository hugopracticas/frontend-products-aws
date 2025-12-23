import axios from "axios";


export const getProducts = async() => {
    try {
        const response = await axios({
            //url: 'http://localhost:8080/api/products',
            url: 'http://3.23.82.119:8080/api/products',
            method: 'GET'
        })
        if(response.status !== 200){
            throw new Error('Error al obtener productos')
        }
        return response;
    } catch (error) {
        console.log(error)
    }
}