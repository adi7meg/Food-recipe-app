import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {Link } from 'react-router-dom'

const Popular = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const check = localStorage.getItem("popular");

    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
      );
      const data = await api.json();
      console.log("DATA:", data);
      setPopular(data.recipes);
      localStorage.setItem('popular',JSON.stringify(data.recipes))
    }
  };

  return (
    <>
      <Wrapper>
        <h1>Popular Food</h1>

        <Splide
          options={{
            perPage: 4,
            pagination: false,
            arrows: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {popular.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={'/recipe/'+recipe.id} >
                <p> {recipe.title}</p>
                <img src={recipe.image} />
                </Link>
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

export default Popular;
