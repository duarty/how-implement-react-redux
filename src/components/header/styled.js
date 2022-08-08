import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    font-family: "Lobster, cursive";
    text-align: center;
    justify-content: space-between;
    border-bottom: 1px solid #6a696c;
    flex-grow: 1;
    height: 70px;
    

    h1{
        display: flex;
        align-items: center;
        text-align: center;
        color: #4F4D8C;
        font-size: 2rem;
        font-weight: bold;
    }
    figure{
        display: flex;
        align-items: center;

        button{
            background:none;
            border: none;
            outline: none;
            color: #474073;
            font-size: 30px;
            cursor: pointer;

        }
    }
`