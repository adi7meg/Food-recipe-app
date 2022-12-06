import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  useEffect(() => {
    getCuisine(params.type);  //params.type comes from Pages.jsx  <Route path="/cuisine/:type" element={<Cuisine />} />
    console.log(params.type);
  }, [params.type]); //update every time we update state

  const getCuisine = async (name) => {
    const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian&recipes=${name}`
    );
    const data = await api.json();
    setCuisine(data.recipes);
    console.log("DATA:", data);
  };

  return (

    <Grid>
      {cuisine.map((item) => (
        <Cart key={item.id}>
          <img src={item.image} />
          <p>{item.title}</p>
        </Cart>
      ))}
    </Grid>
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

export default Cuisine;
