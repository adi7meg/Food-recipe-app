import React from "react";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import {NavLink} from "react-router-dom"

const Category = () => {
  return (
    <>
      <List>
        <NavLink to={'cuisine/Italian'}>
          <FaPizzaSlice />
          <h1>Itallian</h1>
        </NavLink>
        <NavLink to={'cuisine/American'}>
          <FaHamburger />
          <h1>American</h1>
        </NavLink>
        <NavLink to={'cuisine/Thai'}>
          <GiNoodles />
          <h1>Thai</h1>
        </NavLink>
        <NavLink to={'cuisine/Japanese'}>
          <GiChopsticks />
          <h1>Japanese</h1>
        </NavLink>
      </List>
    </>
  );
};

const List = styled.div`
  display: flex;
  justify-content:center;

`;

export default Category;
