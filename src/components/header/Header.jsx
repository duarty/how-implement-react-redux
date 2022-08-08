import React from 'react'
import { Container } from './styled'
import {AiOutlineHome, AiOutlineShoppingCart} from "react-icons/ai"
import { useHistory } from 'react-router-dom'


const Header = ({isCart = false}) => {

  const history = useHistory()

  return (
    <Container>
        <h1>KenzieShop</h1>
        <figure>
           {isCart ? <button onClick={() => history.push("/")}><AiOutlineHome/></button> :
            <button onClick={() =>  history.push("/cart")}><AiOutlineShoppingCart/></button>}
        </figure>
    </Container>
  )
}

export default Header