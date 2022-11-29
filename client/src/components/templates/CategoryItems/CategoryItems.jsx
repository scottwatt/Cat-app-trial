import React from "react";
import { Link } from "react-router-dom";
import { Button, Header } from "../../elements";
import { Container, Image, Info } from "./CategoryItems.styles";

const CategoryItems = ({ item }) => {
  return (
    <>
      <Container>
        <Image src={item.img} />
        <Info>
          <Header item={item} />
          {item.category === "americanBobtail" ? (
            <Link to={`/cats/${item.category}`}>
              <Button />
            </Link>
          ) : item.category === "britishShorthair" ? (
            <Link to={`/cats/${item.category}`}>
              <Button />
            </Link>
          ) : item.category === "LaPerm" ? (
            <Link to={`/cats/${item.category}`}>
              <Button />
            </Link>
          ) : item.category === "maineCoon" ? (
            <Link to={`/cats/${item.category}`}>
              <Button />
            </Link>
          ) : item.category === "persian" ? (
            <Link to={`/cats/${item.category}`}>
              <Button />
            </Link>
          ) : (
            <Link to={`/cats/${item.category}`}>
              <Button />
            </Link>
          )}
        </Info>
      </Container>
    </>
  );
};

export default CategoryItems;
