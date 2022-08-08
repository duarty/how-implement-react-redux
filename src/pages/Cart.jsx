import React from 'react'
import CartList from '../components/cartList/cartList'
import Header from '../components/header/Header'
import { ContainerPage } from './styled'

const Cart = () => {



  return (
  
            <ContainerPage>
                <Header isCart/>
                <CartList />
            </ContainerPage>
      

  
  )
}

export default Cart