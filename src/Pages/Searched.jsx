import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Searched = () => {
  const [searched, setSearched] = useState([]);
  let params = useParams();

  useEffect(() => {
    getSearched(params.search); // params.search comes from Pages.jsx (<Route path="/searched/:search" element={<Searched />} />)
       console.log(params.search)  
}, [params.search]); //update every time we search

  const getSearched = async (name) => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&query=${name}`
    );
    const data = await api.json();
    setSearched(data.recipes);
    console.log("DATA:", data);
  };
  return (
    <div>
      <Grid>
        {searched.map((item) => (
          <Cart key={item.id}>
            <img src={item.image} />
            <p>{item.title}</p>
          </Cart>
        ))}
      </Grid>
    </div>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;
const Cart = styled.div`
  img {
    width: 100%;
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

export default Searched;
