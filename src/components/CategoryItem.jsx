import styled from 'styled-components'
import React from 'react'
import styles from 'styled-components'

const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
`
const Info = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    color:white;
    margin-bottom:20px;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    background-color: white;
    color:gray;
    cursor: pointer;
    font-weight: 600;
`

function CategoryItem({item}) {
    console.log(item)
  return (
    <Container>
        <Image src = {item.img} />
        <Info>
            <Title>
                {item.title}
            </Title>
            <Button>Shop Now</Button>
        </Info>
    </Container>    
  )
}

export default CategoryItem