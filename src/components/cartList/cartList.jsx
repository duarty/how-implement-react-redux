import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import { CardContainer } from "../card/style"
import { CartContainer } from "./styled"


const CartList = () => {

  const {cart, rmvFromCart} = useContext(CartContext);
  console.log(cart)
  
  return (

      <CartContainer>
          {cart.map((product) =>  
              <CardContainer key={product.id}>
                  <img src={product.image} alt={product.name}/>
                  <h1>{product.name}</h1>
                  <p>R$ {product.price},99</p>
                  <button onClick={() => rmvFromCart(product.id)}>remover</button>
            </CardContainer>)
          }
      </CartContainer>

  )
}

export default CartList