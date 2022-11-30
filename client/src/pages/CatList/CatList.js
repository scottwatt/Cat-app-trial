import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
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
  const { category } = useParams("category") || "all";
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("Newest");

  console.log("category", category);

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  const colorList = ["Grey", "Black", "Brown", "White"];

  const categoryMap = [
    {
      category: "persion",
      tagname: Persian,
    },
    {
      category: "britishShorthair",
      tagname: BritishShorthair,
    },
    {
      category: "LaPerm",
      tagname: LaPerm,
    },
    {
      category: "maineCoon",
      tagname: MaineCoon,
    },
    {
      category: "americanBobtail",
      tagname: AmericanBobtail,
    },
    {
      category: "sphynx",
      tagname: Sphynx,
    },
  ];

  const renderSelectedCatList = () => {
    const TagName =
      categoryMap.find((breed) => breed.category === category) || Sphynx;
    return <>{<TagName category={category} filters={filters} sort={sort} />}</>;
  };

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
        {renderSelectedCatList()}
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default CatList;
