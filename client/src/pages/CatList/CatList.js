import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Footer } from "../../components/templates";
import { Announcements } from "../../components/elements";
import {
  BritishShorthair,
  AmericanBobtail,
  Persian,
  LaPerm,
  MaineCoon,
  Sphynx,
} from "../../components/layouts";
import {
  Container,
  Title,
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Options,
} from "./CatList.styles";

const CatList = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const colorList = ["Grey", "Black", "Brown", "White"];

 


  return (
    <React.Fragment>
      <Container>
        <Announcements />
        <Navbar />
        <Title>{category}</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter By:</FilterText>
            <Select name="color" onChange={handleFilters} defaultValue="Color">
              <Options disabled>Color</Options>
              {colorList.map((item) => {
                return <Options key={item}>{item}</Options>;
              })}
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort By:</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Options value="newest">Newest</Options>
              <Options value="lowToHigh">Price: Low to High</Options>
              <Options value="highToLow">Price: High to Low</Options>
            </Select>
          </Filter>
        </FilterContainer>
        {category === "persian" ? (
          <Persian category={category} filters={filters} sort={sort} />
        ) : category === "britishShorthair" ? (
          <BritishShorthair category={category} filters={filters} sort={sort} />
        ) : category === "LaPerm" ? (
          <LaPerm category={category} filters={filters} sort={sort} />
        ) : category === "maineCoon" ? (
          <MaineCoon category={category} filters={filters} sort={sort} />
        ) : category === "americanBobtail" ? (
          <AmericanBobtail category={category} filters={filters} sort={sort} />
        ) : (
          <Sphynx category={category} filters={filters} sort={sort} />
        )}
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default CatList;
