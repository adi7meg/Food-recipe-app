import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import styled from "styled-components";
const Recipe = () => {
  const[details, setDetails] = useState({});
  let params =useParams()

  useEffect(()=>{
     getDetails(params.name)
  },[params.name])

  const getDetails =async()=>{

    const api = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`)
    const data = await api.json()
    setDetails(data)

  }


  return (
    <Grid>
        <Cart>
        {details.title}
        {<img src={details.image} /> }
        </Cart>
    </Grid>
  )
}
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Cart = styled.div`
  img {
    width: 81%;
    height:300px;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Recipe