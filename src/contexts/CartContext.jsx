import { createContext, useContext, useState} from "react"
import { toast } from "react-toastify";
import { ProductsContext } from "./ProductsContext";
export const CartContext = createContext([])

const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
      if(!cart.find((item) => item === product )){
        toast.success("Item adicionado ao carrinho")
        setCart([...cart, product]);
      }else{
        toast.error("Item já está no carrinho")
      }
      
  }

  const rmvFromCart = (id) => {
    const rmvItem = cart.filter(item => item.id !== id)
    toast.success("Item removido do carrinho")
      setCart(rmvItem)
  }

  return (
    <CartContext.Provider value={{cart ,addToCart, rmvFromCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider