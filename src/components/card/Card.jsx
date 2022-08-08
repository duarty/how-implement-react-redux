import { CardContainer, ProductsContainer } from './style'
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import { CartContext } from '../../contexts/CartContext';

const Card = () => {

  const {products} = useContext(ProductsContext);

  const {addToCart} = useContext(CartContext);


  return (

    <ProductsContainer>
       {products.map((product) =>  
        <CardContainer key={product.id}>
            <img src={product.image} alt={product.name}/>
            <h1>{product.name}</h1>
            <p>R$ {product.price},99</p>
            <button onClick={() => addToCart(product)}>Comprar</button>
        </CardContainer>)}
    </ProductsContainer>

  )
}

export default Card