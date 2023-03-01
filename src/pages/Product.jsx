import { Add, Remove } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'

const Conatiner = styled.div`
    
`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
`
const ImgContainer = styled.div`
    flex:1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`
const InfoContainer = styled.div`
    flex:1;
    padding: 0 50px;
`

const Title = styled.h1`
    font-weight: 200;
`
const Desc = styled.p`
    margin:20px 0px;
`
const Price = styled.span`
   font-weight: 100;
   font-size:40px; 
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size:20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 5px;
`
const FilterSize = styled.select`
    margin-left:10px;
    padding: 5px;

`
const FilterSizeOption = styled.option`
    
`

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
     
`

const Amount  = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border:1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`
const Button = styled.button`
    padding: 15px;
    border:2px solid teal;
    background-color: white;
    font-weight: 500;
    cursor: pointer;
    &:hover 
    {
        background-color: #f8f4f4;
    }
`

function Product() {
  return (
    <Conatiner>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImgContainer>
                <Image src = "https://d1b7fmvx5bzyfc.cloudfront.net/catalog/product/cache/28c2dec9d676b2938f3aa99432e39c80/k/j/kju9_000_000.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jeans</Title>
                <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum eveniet, nobis hic facilis maiores incidunt veniam autem sequi quo iure asperiores molestiae sed optio necessitatibus saepe, officia corporis ea eligendi officiis temporibus deserunt. Consequuntur velit expedita similique provident id placeat ab. Commodi iste, necessitatibus non rem dolorem iusto enim tempore!</Desc>
                <Price>$ 36</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color: </FilterTitle>
                        <FilterColor  color = "black" />
                        <FilterColor  color = "darkblue" />
                        <FilterColor  color = "gray" />
                    </Filter>
                    <Filter>
                        <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>Add Cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Conatiner>
  )
}

export default Product