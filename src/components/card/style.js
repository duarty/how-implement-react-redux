import styled from 'styled-components'

export const ProductsContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 3rem 5rem 0 5rem;
`

export const CardContainer = styled.li`
    display: flex;
    flex-direction: column;
    border: 2px solid #474073;
    border-radius: 3px;
    max-height: 318px;;
    max-width: 250px;
    justify-content: space-evenly;
    color: black;
    gap: 0.5rem;
    margin: 0.6rem;
    padding: 1rem;
    :hover{
        margin: 0.5rem;
        cursor: pointer;
        -moz-transform: scale(1.1);
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }

    img{
        width: 245;
        height: 187px;
    }
    
    p{
        
        word-break: break-all;
        color: black;
    }
    button{
        outline: none;
        height: 30px;
        width: 252px;
        cursor: pointer;
        background-color:#474073;
        border: none;
        color: #fff;
        border-radius: 2px;
    }
    
`

