import React from "react";
import { britishShorthair } from "../../../data";
import { Cats } from "../../elements";
import { Container } from "./BritishShorthair.styles";

const BritishShorthair = ({ category, filters, sort }) => {
  return (
    <React.Fragment>
      <Container>
        {britishShorthair.map((cat) => (
          <Cats key={cat.id} cat={cat} />
        ))}
      </Container>
    </React.Fragment>
  );
};

export default BritishShorthair;
