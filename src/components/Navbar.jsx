import React from 'react'
import styled from 'styled-components';
import {Search , ShoppingCartOutlined} from '@mui/icons-material';
import { Badge  } from '@mui/material';
import {mobile} from '../responsive';


const Container = styled.div`
    height:60px;
    ${mobile(
        {height : "50px"}
    )}    
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile(
        {padding : "10px 0"}
    )}  
`
const Left = styled.div`
    flex:1;
    display: flex;
    align-items: center;
`;
const Center = styled.div`
    flex:1;
    text-align: center;
`;
const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile(
        {justifyContent : "center", flex:"2"}
    )}  
`;

const Langugae = styled.span`
    font-size  : 14px;
    cursor: pointer;
    ${mobile(
        {display : "none"}
    )}  
`
const SearchContainer = styled.div`
    border:1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    `;

const Input = styled.input`
        border: none;
        ${mobile(
        {width : "50px"}
    )}  
    `
const Logo = styled.h1`
        font-weight: bold;
        ${mobile(
        {fontSize : "12px" , marginLeft:"10px"}
    )}  
        `

const MenuItem = styled.div`
    font-style: 14px;
    cursor: pointer;
    margin-left: 24px;
    ${mobile(
        {fontSize : "12px",
        marginLeft:"10px"
    }
    )}  
`

function Navbar() {
  return (
   <Container>
        <Wrapper>
            <Left>
                <Langugae>EN</Langugae>
                <SearchContainer>
                    <Input placeholder="search"/>
                    <Search style={{color:"gray" , fontSize:16 }} />
                </SearchContainer>
            </Left>
            <Center><Logo>Orzubek Shop</Logo></ Center>
            <Right>
                <MenuItem>Register</MenuItem>
                <MenuItem>Register</MenuItem>
                <MenuItem>
                    <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined/>
                    </Badge>
                </MenuItem>
            </Right>

        </Wrapper>
   </Container>
  )
}

export default Navbar