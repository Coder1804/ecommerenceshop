import React from 'react'
import styled from 'styled-components'
import {ShoppingCart as ShoppingCartIcon , Search as SearchIcon , FavoriteBorder as FavoriteBorderIcon} from '@mui/icons-material'


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top:0;
  left:0;
  background: rgba(0,0,0,0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .5s ease;
  cursor: pointer;

`

const Container = styled.div`
  flex:1;
  margin: 5px;
  min-width:280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  &:hover ${Info}
  {
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius:50%;
  background-color: white;
  position: absolute;
`
const Image = styled.img`
  height: 75%;
  z-index: 2;
  
`


const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all .5s ease;
  cursor: pointer;
  &:hover 
  {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`

function Product({item}) {
  console.log(item.img)
  return (
    <Container>
      <Circle/>
      <Image src = {item.img}/>
      <Info>
        <Icon>
          <ShoppingCartIcon/>
        </Icon>
        <Icon>
          <SearchIcon/>
        </Icon>
        <Icon>
          <FavoriteBorderIcon/>
        </Icon>
      </Info>
    </Container>
  )
}

export default Product