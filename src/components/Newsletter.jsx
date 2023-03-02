
import React from 'react'
import styled from 'styled-components'
import { Send } from '@mui/icons-material'
import {mobile} from '../responsive'


const Container = styled.div`
   height: 60vh;
   background-color : #fcf5f5 ;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;

`
const Title = styled.h1`
    font-style: 70px;
    margin-bottom: 20px;
`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    ${mobile(
        {textAlign : "center"}
    )}  
`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white ;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    margin-top:12px;
    ${mobile(
        {width : "80%"}
    )} 
`
const Input = styled.input`
    border:none;
    flex:8;
    padding-left:20px;  
    letter-spacing:1px;
`
const Button = styled.button`
    flex:1;
    border:none;
    background-color: teal;
    color:white;
`


function Newsletter() {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products </Desc>
        <InputContainer>
            <Input placeholder = "Sizning Emailingniz"/>
            <Button>
                <Send/>
            </Button>
        </InputContainer>
    
    </Container>
  )
}

export default Newsletter