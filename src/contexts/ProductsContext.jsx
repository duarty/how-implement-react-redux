import { createContext, useState} from "react"
import { productsList } from "../database/db"



export const ProductsContext = createContext([])

const ProductsProvider = ({children}) => {

  const [products, setProducts] = useState(productsList)

  return (
    <ProductsContext.Provider value={{products, setProducts}}>
        {children}
    </ProductsContext.Provider>
  )
}

export default ProductsProvider