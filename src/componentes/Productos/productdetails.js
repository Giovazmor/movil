import { useParams } from "react-router-dom"; 

const ProductoDetalle = () =>{
    const params = useParams();
    return <h1>ProductoDetalle: {params.id}</h1>
}

export default ProductoDetalle;