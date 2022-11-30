import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");

    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
      );
      const data = await api.json();
      console.log("DATA:", data);
      setVeggie(data.recipes);
      localStorage.setItem('veggie',JSON.stringify(data.recipes))
    }
  };

  return (
    <>
      <Wrapper>
        <h1>Veggie Food</h1>

        <Splide
          options={{
            perPage: 4,
            pagination: false,
            arrows: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {veggie.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Card>
                <p> {recipe.title}</p>
                <img src={recipe.image} />
                <Gradient />
              </Card>
            </SplideSlide>
          ))}
        </Splide>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
    border-radius: 2rem;
    left: 0%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0);
    color: white;
    width: 100%;
    text-align: center;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie







