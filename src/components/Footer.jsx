import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import {mobile} from '../responsive'



const Container = styled.div`
    display: flex;
    ${mobile(
        {flexDirection : "column"}
    )}  
`
const Left = styled.div` 
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Center = styled.div` 
    flex:1;
    padding: 20px;
    ${mobile(
        {display : "none"}
    )}  
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap:wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const SocialIcon = styled.div` 
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:white;
    background-color: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right:20px;
`
const SocialContainer = styled.div` 
    display: flex;
`

const Logo = styled.div` 

`
const Desc = styled.div` 
    margin: 20px 0px;
`

const Right = styled.div` 
    flex:1;
    padding: 20px;
    ${mobile(
        {backgroundColor : "#fff8f8"}
    )}  
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    max-width: 50%;
`

function Footer() {
  return (
    <Container>
        <Left>
            <Logo>OrzubekShop</Logo>
            <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid sequi ex odio reiciendis ut alias, doloribus perspiciatis sint hic repudiandae exercitationem obcaecati blanditiis corporis magni officia rerum iure voluptatum quam?</Desc>
            <SocialContainer>
                <SocialIcon color="3b5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="e4405f">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55acee">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="e60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Woman Fashion </ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My account</ListItem>
                <ListItem>Order Tracing</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}} />
                Toshkent shahar , Istiqlol .... 21
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}} />
                8 91 234 56 78
            </ContactItem>
            <ContactItem>
                <Mail style={{marginRight:"10px"}} />
                contact@gmail.com
            </ContactItem>
            <Payment src = "https://cdn.webshopapp.com/shops/218525/files/371942398/payment-methods-epicerie-ludo.png"/>
        </Right>
    </Container>
    )
}

export default Footer