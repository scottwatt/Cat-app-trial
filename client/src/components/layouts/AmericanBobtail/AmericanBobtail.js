import React, { useState, useEffect } from "react";
import { Cats } from "../../elements";
import { americanBobtail } from "../../../data"
import { Container } from "./AmericanBobtail.styles";
import axios from "axios";

const AmericanBobtail = ({ category, filters, sort }) => {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:3000/api/cats?category=${category}`
            : `http://localhost:3000/api/cats`
        );
        setCats(res.data);
      } catch (err) {}
    };
    getCats();
  }, [category]);

  useEffect(() => {
    category &&
      setFilteredCats(
        cats.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [category, cats, filters]);

  useEffect(() => {
    const sortCats = () => {
      if (sort === "newest") {
        setFilteredCats((prev) =>
          [...prev].sort((a, b) => a.createdAt - b.createdAt)
        );
      } else if (sort === "lowToHigh") {
        setFilteredCats((prev) =>
          [...prev].sort((a, b) => a.price - b.price)
        );
      } else {
        setFilteredCats((prev) =>
          [...prev].sort((a, b) => b.price - a.price)
        );
      }
    };
    sortCats();
  }, [sort]);

  return (
    <React.Fragment>
      <Container>
        {americanBobtail.map((cat) => (
          <Cats key={cat._id} cat={cat} />
        ))}
      </Container>
    </React.Fragment>
  );
};

export default AmericanBobtail;
